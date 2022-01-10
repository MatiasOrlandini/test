const tmi = require("tmi.js");
require("dotenv").config();

const options = {
  options: {
    debug: true,
  },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN,
  },
  channels: [process.env.TWITCH_CHANNEL],
};
const client = new tmi.client(options);
client.connect();

client.on("connected", (address, port) => {
  client.action(process.env.TWITCH_CHANNEL, `Hola!!! Byte Bot a sus órdenes`);
});

client.on("chat", (target, ctx, message, self) => {
  if (self) return;

  const commandName = message.trim();

  if (commandName.indexOf("hola") > -1) {
    client.say(target, `Bienvenid@! ${ctx.username}`);
  }

  if (commandName.indexOf("buenas") > -1) {
    client.say(target, `Bienvenid@! ${ctx.username}`);
  }

  if (commandName === "gg") {
    client.say(target, `GG`);
  }
  if (commandName === "f") {
    client.say(target, `F`);
  }
  if (commandName.indexOf("bytedeGg") > -1) {
    client.say(target, `GG`);
  }
  if (commandName === "grelo") {
    client.say(target, `!pepperoni`);
  }
  if (commandName === "!mide") {
    const num = randomNumber30();
    client.say(target, `A ${ctx.username} le mide ${num}cm PogChamp`);
  }
  if (commandName === "!facha") {
    const num = randomNumber100();
    client.say(
      target,
      `${ctx.username} Tu nivel de facha es del ${num}% GlitchCat GlitchCat`
    );
  }
  if (commandName === "!calor") {
    client.say(target, `POR QUE HACE TANTO CALORRRRR SwiftRage SwiftRage`);
  }
});

client.on("raided", (channel, username, viewers) => {
  client.say(
    channel,
    `Gracias a ${username} se han unido ${viewers} espectadores, bienvenidos a tod@s <3`
  );
});

const randomNumber30 = () => {
  const sides = 30;
  return Math.floor(Math.random() * sides) + 1;
};
const randomNumber100 = () => {
  const sides = 100;
  return Math.floor(Math.random() * sides) + 1;
};

//import { config } from "./config.js";
import Discord from "discord.js";

const client = new Discord.Client();

//let token = config.botToken;

client.once("ready", () => {
  console.log("zWelk is now online!");
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const name = member.user.username;
  const welcomeChannel = guild.channels.cache.find(
    (ch) => ch.name === "welcome-lobby"
  );
  if (welcomeChannel) {
    return welcomeChannel.send(
      `Hi ${name}, welcome to Smartz Developers! The Smartz Developers server is for creating and testing bots used for the benefit of the public. If you're not a developer, you can find bots you're interested in. Test them with other members and if you love them, you can invite them to your server. Have fun if you're here to stay <3`
    );
  }
});

//client.login(token);
client.login(process.env.BOT_TOKEN);

// === Module 12378: conjureAppInServer ===

// Module 12378 (conjureAppInServer)
import ConjureUtils from "ConjureUtils" /* 6932 */;
import ApplicationStore from "ApplicationStore" /* 5436 */;
import UserProfileStore from "UserProfileStore" /* 7309 */;
import GuildChannelStore from "GuildChannelStore" /* 4705 */;
import GuildStore from "GuildStore" /* 2086 */;

require = fn;
let closure_5 = fn(4705).GUILD_SELECTABLE_CHANNELS_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/conjureAppInServer.tsx");

export const conjureProductionBotUserId = function conjureProductionBotUserId(project) {
  const application = ApplicationStore.getApplication(project.application_id);
  let id;
  if (application != null) {
    const bot = application.bot;
    if (bot != null) {
      id = bot.id;
    }
  }
  if (id == null) {
    id = project.application_id;
  }
  return id;
};
export const readConjureBotInGuild = function readConjureBotInGuild(project, guild_id) {
  closure_0 = guild_id;
  if (null == guild_id) {
    return null;
  } else {
    const application = ApplicationStore.getApplication(project.application_id);
    let id;
    if (application != null) {
      const bot = application.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    if (id == null) {
      id = project.application_id;
    }
    const mutualGuilds = UserProfileStore.getMutualGuilds(id);
    let someResult = null;
    if (null != mutualGuilds) {
      someResult = mutualGuilds.some((guild) => guild.guild.id === application_id);
    }
    return someResult;
  }
};
export const findConjureAppChannels = function findConjureAppChannels(id, application_id) {
  closure_0 = application_id;
  const mapped = GuildChannelStore.getChannels(id)[closure_5].map((channel) => channel.channel);
  return mapped.filter((item) => ConjureUtils.conjureChannelAppId(item) === application_id);
};
export const readConjureAppServerPresence = function readConjureAppServerPresence(install_scope) {
  if ("user" !== install_scope.install_scope) {
    if (null != install_scope.guild_id) {
      if (null == GuildStore.getGuild(install_scope.guild_id)) {
        return null;
      } else {
        const guild_id = install_scope.guild_id;
        let application_id = guild_id;
        let tmp6 = null;
        if (null != guild_id) {
          const application = ApplicationStore.getApplication(install_scope.application_id);
          let id;
          if (application != null) {
            const bot = application.bot;
            if (bot != null) {
              id = bot.id;
            }
          }
          if (id == null) {
            id = install_scope.application_id;
          }
          const mutualGuilds = UserProfileStore.getMutualGuilds(id);
          let someResult = null;
          if (null != mutualGuilds) {
            someResult = mutualGuilds.some((guild) => guild.guild.id === application_id);
          }
          tmp6 = someResult;
        }
        let str2 = "in_server";
        if (true !== tmp6) {
          application_id = install_scope.application_id;
          const mapped = GuildChannelStore.getChannels(install_scope.guild_id)[closure_5].map((channel) => channel.channel);
          str2 = "in_server";
          if (mapped.filter((item) => ConjureUtils.conjureChannelAppId(item) === application_id).length <= 0) {
            const supported_surfaces = install_scope.supported_surfaces;
            let num;
            if (supported_surfaces != null) {
              num = supported_surfaces.length;
            }
            if (num == null) {
              num = 0;
            }
            let tmp7 = null;
            if (num > 0) {
              if (obj2.projectUsesNativeAppChannels(install_scope)) {
                tmp7 = "not_in_server";
              } else {
                tmp7 = null;
              }
              obj2 = application_id(6933);
            }
            str2 = tmp7;
          }
          const arr2 = GuildChannelStore.getChannels(install_scope.guild_id)[closure_5];
        }
        return str2;
      }
    }
  }
  return null;
};
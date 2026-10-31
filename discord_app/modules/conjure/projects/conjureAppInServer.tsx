// discord_app/modules/conjure/projects/conjureAppInServer.tsx
import ConjureUtils from "../shared/ConjureUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";

require = fn;
function conjureProductionBotUserId(project) {
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
}
function conjurePreviewBotUserId(project) {
  const preview_application_id = project.preview_application_id;
  let tmp = null;
  if (null != preview_application_id) {
    const application = ApplicationStore.getApplication(preview_application_id);
    let id;
    if (application != null) {
      const bot = application.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    if (id == null) {
      id = preview_application_id;
    }
    tmp = id;
  }
  return tmp;
}
let closure_12 = async function _fetchConjureAppInGuild() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  const items = [conjureProductionBotUserId(closure_0), conjurePreviewBotUserId(closure_0)];
  await Promise.all(
    items.map(
      (() => {
        closure_0 = closure_1_2(function* (arg0) {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_2 = tmp3;
                  closure_1 = tmp7;
                  closure_129_0 = closure_0;
                  let mutualGuilds2;
                  if (null == closure_0) {
                    c5 = 3;
                    return { value: false, done: true };
                  } else {
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj5 = {
                      value: closure_0(closure_2_1[7]).fetchProfile(tmp25, { withMutualGuilds: true }),
                      done: false,
                    };
                    return obj5;
                  }
                }
              } else if (1 === tmp7) {
                c3 = 0;
                c5 = 3;
                return { value: null, done: true };
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                c3 = 0;
                mutualGuilds2 = mutualGuilds.getMutualGuilds(closure_129_0);
                let someResult = null;
                if (null != mutualGuilds2) {
                  someResult = mutualGuilds2.some((guild) => guild.guild.id === closure_1_0);
                }
                c5 = 3;
                const obj = { value: someResult, done: true };
                return obj;
              }
            } catch (tmp18) {
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp18;
              } else {
                c4 = tmp;
              }
            }
          }
        });
        return function () {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
      })(),
    ),
  );
  closure_130_1 = value;
  let hasItem = closure_130_1.includes(true);
  if (!hasItem) {
    let hasItem1 = closure_130_1.includes(null);
    if (hasItem1) {
      hasItem1 = null;
    }
    hasItem = hasItem1;
  }
  return hasItem;
};
let closure_6 = fn(4944).GUILD_SELECTABLE_CHANNELS_KEY;
const Permissions = fn(1072).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/conjureAppInServer.tsx");

export { conjureProductionBotUserId };
export { conjurePreviewBotUserId };
export function readConjureBotInGuild(project, guild_id) {
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
}
export function fetchConjureAppInGuild() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function canRemoveConjureBot(guild, id1) {
  let canManageUserResult = null != id1;
  if (canManageUserResult) {
    canManageUserResult = PermissionStore.canManageUser(Permissions.KICK_MEMBERS, id1, guild);
  }
  if (!canManageUserResult) {
    canManageUserResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
  }
  return canManageUserResult;
}
export function findConjureAppChannels(id, application_id) {
  closure_0 = application_id;
  const mapped = GuildChannelStore.getChannels(id)[closure_6].map((channel) => channel.channel);
  return mapped.filter((item) => ConjureUtils.conjureChannelAppId(item) === application_id);
}
export function readConjureAppServerPresence(install_scope) {
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
          const mapped = GuildChannelStore.getChannels(install_scope.guild_id)[closure_6].map(
            (channel) => channel.channel,
          );
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
              if (obj2.projectUsesAppChannels(install_scope)) {
                tmp7 = "not_in_server";
              } else {
                tmp7 = null;
              }
              obj2 = application_id(6845);
            }
            str2 = tmp7;
          }
          const arr2 = GuildChannelStore.getChannels(install_scope.guild_id)[closure_6];
        }
        return str2;
      }
    }
  }
  return null;
}

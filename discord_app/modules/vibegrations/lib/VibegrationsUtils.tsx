import handleProjectUpsert from "handleProjectUpsert";
import addApplication from "addApplication";
import comparator from "comparator";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_6 } from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import closure_9 from "handleProjectUpsert";
import ME from "ME";

let c10;
let closure_12;
let unpackModuleId;
const require = arg1;
function vibegrationsAppIdFromTopic(topic) {
  if (null != topic) {
    if (topic.startsWith(c13)) {
      const substr = topic.slice(28);
      let tmp4 = null;
      if (regex.test(substr)) {
        tmp4 = substr;
      }
      return tmp4;
    }
  }
  return null;
}
function vibegrationsTextChannelsIn(guild_id) {
  return channels.getChannels(guild_id)[closure_6].filter((channel) => channel.channel.type === constants.GUILD_TEXT);
}
function _publishPreviewAndReauthorizeIfPermissionsChanged() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      if (body === 2) {
        body = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          body = 2;
          if (0 === application) {
            if (arg0 === 1) {
              body = 3;
              throw arg1;
            } else if (arg0 === 2) {
              body = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let preview_guild_id = tmp5;
              preview_guild_id = tmp2;
              let flag;
              let obj1 = flag;
              if (flag === undefined) {
                obj1 = {};
              }
              flag = obj1.countAsDeploy;
              if (flag === undefined) {
                flag = true;
              }
              preview_guild_id = undefined;
              preview_guild_id = undefined;
              application = undefined;
              body = undefined;
              application = undefined;
              let bot_permissions_changed;
              let integration_installed;
              let preview_application_id;
              let application2;
              application = 1;
              body = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              body = 3;
              throw arg1;
            } else if (arg0 === 2) {
              body = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              preview_guild_id = preview_application_id.getProject(callback);
              preview_guild_id = undefined;
              if (preview_guild_id != null) {
                preview_guild_id = preview_guild_id.preview_guild_id;
              }
              let obj5 = callback(preview_guild_id[9]);
              const obj3 = { countAsDeploy: null };
              obj3[0] = flag;
              application = 2;
              body = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj5.publishPreviewProject(callback, obj3);
              return obj4;
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                body = 3;
                throw arg1;
              } else if (arg0 === 2) {
                body = 3;
                obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                application = arg1;
                if (application.ok) {
                  body = application.body;
                  application = body.application;
                  bot_permissions_changed = body.bot_permissions_changed;
                  integration_installed = body.integration_installed;
                  preview_application_id = body.project.preview_application_id;
                  if (null != preview_guild_id) {
                    if (null != preview_application_id) {
                      if (!integration_installed) {
                        application2 = application.getApplication(preview_application_id);
                        if (null != application2) {
                          obj1 = flag(preview_guild_id[10]);
                          const obj6 = { applicationId: null, application: null, guildId: null };
                          obj6[0] = application.id;
                          obj6[1] = application2;
                          obj6[2] = preview_guild_id;
                          application = 3;
                          body = 1;
                          const obj7 = { value: null, done: false };
                          obj7[0] = obj1.openVibegrationsAppInstallModal(obj6);
                          return obj7;
                        }
                      }
                    }
                  }
                }
              }
            } else if (arg0 === 1) {
              body = 3;
              throw arg1;
            } else if (arg0 === 2) {
              body = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            body = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp38) {
          body = tmp;
          throw tmp38;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _publishPreviewAndReauthorizeIfPermissionsChanged = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Permissions: c10, ChannelTypes: unpackModuleId, GuildFeatures: closure_12 } = ME);
let c13 = "vibegrations_application_id=";
const re14 = /^\d{17,20}$/;
let result = require("comparator").fileFinishedImporting("modules/vibegrations/lib/VibegrationsUtils.tsx");

export { vibegrationsAppIdFromTopic };
export const vibegrationsTopicForApp = function vibegrationsTopicForApp(arg0) {
  return "" + c13 + arg0;
};
export const isVibegrationsProjectInGuild = function isVibegrationsProjectInGuild(guild_id) {
  let tmp = null != guild_id;
  if (tmp) {
    let tmp3 = guild_id.guild_id === arg1 || guild_id.preview_guild_id === arg1;
    if (!tmp3) {
      tmp3 = null == guild_id.guild_id && null == guild_id.preview_guild_id;
      const tmp4 = null == guild_id.guild_id && null == guild_id.preview_guild_id;
    }
    tmp = tmp3;
  }
  return tmp;
};
export { vibegrationsTextChannelsIn };
export const findVibegrationChannelId = function findVibegrationChannelId(guild_id, application_id) {
  for (const item10009 of tmp) {
    let channel = item10009.channel;
    let tmp2 = channel;
    let tmp3 = vibegrationsAppIdFromTopic;
    if (vibegrationsAppIdFromTopic(channel.topic) === arg1) {
      let tmp4 = obj;
      obj.return();
      return channel.id;
    }
  }
  return null;
};
export const canManageVibegrations = function canManageVibegrations(closure_2, isAccessibleChannelOrThreadPath) {
  let obj = require(5688) /* useIsVibegrationsGuildEnabled */;
  obj = { guildId: closure_2.id, location: isAccessibleChannelOrThreadPath };
  let result = obj.isVibegrationsGuildEnabled(obj);
  if (result) {
    result = getUncachedChannelPermissions.can(constants.MANAGE_CHANNELS, closure_2);
  }
  if (result) {
    result = getUncachedChannelPermissions.can(constants.MANAGE_GUILD, closure_2);
  }
  if (result) {
    const features = closure_2.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
export const useCanManageVibegrations = function useCanManageVibegrations(guildId, useGuildActionRows) {
  const _require = guildId;
  let obj = _require(589);
  const items = [getUncachedChannelPermissions];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.can(outer1_10.MANAGE_CHANNELS, closure_0) && outer1_8.can(outer1_10.MANAGE_GUILD, closure_0), items1);
  obj = { guildId: guildId.id, location: useGuildActionRows };
  let isVibegrationsGuildEnabled = _require(5688).useIsVibegrationsGuildEnabled(obj);
  const features = guildId.features;
  const hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  if (isVibegrationsGuildEnabled) {
    isVibegrationsGuildEnabled = stateFromStores;
  }
  if (isVibegrationsGuildEnabled) {
    isVibegrationsGuildEnabled = !hasItem;
  }
  return isVibegrationsGuildEnabled;
};
export const publishPreviewAndReauthorizeIfPermissionsChanged = function publishPreviewAndReauthorizeIfPermissionsChanged() {
  const self = this;
  const apply = _publishPreviewAndReauthorizeIfPermissionsChanged.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const isVibegrationsChannelCandidate = function isVibegrationsChannelCandidate(channel, ActivitySounds) {
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  guild = guild.getGuild(guild_id);
  let result = null != channel;
  if (result) {
    result = channel.type === constants2.GUILD_TEXT;
  }
  if (result) {
    const topic = channel.topic;
    let tmp6 = null;
    if (null != topic) {
      tmp6 = null;
      if (topic.startsWith(c13)) {
        const substr = topic.slice(28);
        let tmp10 = null;
        if (regex.test(substr)) {
          tmp10 = substr;
        }
        tmp6 = tmp10;
      }
    }
    result = null != tmp6;
  }
  if (result) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    result = !hasItem;
  }
  if (result) {
    let obj = require(5688) /* useIsVibegrationsGuildEnabled */;
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    obj = { guildId: null, location: null };
    obj[0] = guild_id1;
    obj[1] = ActivitySounds;
    result = obj.isVibegrationsGuildEnabled(obj);
  }
  return result;
};
export const useIsVibegrationsChannelCandidate = function useIsVibegrationsChannelCandidate(guild_id, location) {
  const _require = guild_id;
  let obj = _require(589);
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    return outer1_7.getGuild(guild_id);
  });
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  obj = { guildId: guild_id, location };
  let tmp4 = null != guild_id;
  const isVibegrationsGuildEnabled = _require(5688).useIsVibegrationsGuildEnabled(obj);
  if (tmp4) {
    tmp4 = guild_id.type === constants2.GUILD_TEXT;
  }
  if (tmp4) {
    const topic = guild_id.topic;
    let tmp6 = null;
    if (null != topic) {
      tmp6 = null;
      if (topic.startsWith(c13)) {
        const substr = topic.slice(28);
        let tmp10 = null;
        if (regex.test(substr)) {
          tmp10 = substr;
        }
        tmp6 = tmp10;
      }
    }
    tmp4 = null != tmp6;
  }
  if (tmp4) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    tmp4 = !hasItem;
  }
  if (tmp4) {
    tmp4 = isVibegrationsGuildEnabled;
  }
  return tmp4;
};
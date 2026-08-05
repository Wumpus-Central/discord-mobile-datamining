// discord_app/modules/vibegrations/lib/VibegrationsUtils.tsx
import comparator from "comparator";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_3 } from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import ME from "ME";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { useIsVibegrationsGuildEnabled } from "../experiments/VibegrationsGuildExperiment.tsx";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function vibegrationsAppIdFromTopic(topic) {
  if (null != topic) {
    if (topic.startsWith(c9)) {
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
function vibegrationsTextChannelsIn(arg0) {
  return channels.getChannels(arg0)[closure_3].filter((channel) => channel.channel.type === constants.GUILD_TEXT);
}
({ Permissions: closure_6, ChannelTypes: error, GuildFeatures: metroImportAll } = ME);
let c9 = "vibegrations_application_id=";
const re10 = /^\d{17,20}$/;
let result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/vibegrations/lib/VibegrationsUtils.tsx");

export { vibegrationsAppIdFromTopic };
export const vibegrationsTopicForApp = function vibegrationsTopicForApp(arg0) {
  return "" + c9 + arg0;
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
export const findVibegrationChannelId = function findVibegrationChannelId(arg0, arg1) {
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
export const canManageVibegrations = function canManageVibegrations(comparator, isAccessibleChannelOrThreadPath) {
  let obj = useIsVibegrationsGuildEnabled /* useIsVibegrationsGuildEnabled */;
  obj = { guildId: comparator.id, location: isAccessibleChannelOrThreadPath };
  let result = obj.isVibegrationsGuildEnabled(obj);
  if (result) {
    result = getUncachedChannelPermissions.can(constants.MANAGE_CHANNELS, comparator);
  }
  if (result) {
    result = getUncachedChannelPermissions.can(constants.MANAGE_GUILD, comparator);
  }
  if (result) {
    const features = comparator.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
export const useCanManageVibegrations = function useCanManageVibegrations(guildId, useGuildActionRows) {
  const _require = guildId;
  let obj = _initialize;
  const items = [getUncachedChannelPermissions];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.can(outer1_6.MANAGE_CHANNELS, closure_0) && outer1_5.can(outer1_6.MANAGE_GUILD, closure_0), items1);
  obj = { guildId: guildId.id, location: useGuildActionRows };
  let isVibegrationsGuildEnabled = _useIsVibegrationsGuildEnabled.useIsVibegrationsGuildEnabled(obj);
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
      if (topic.startsWith(c9)) {
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
    let obj = useIsVibegrationsGuildEnabled /* useIsVibegrationsGuildEnabled */;
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
  let obj = _initialize;
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    return outer1_4.getGuild(guild_id);
  });
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  obj = { guildId: guild_id, location };
  let tmp4 = null != guild_id;
  const isVibegrationsGuildEnabled = _useIsVibegrationsGuildEnabled.useIsVibegrationsGuildEnabled(obj);
  if (tmp4) {
    tmp4 = guild_id.type === constants2.GUILD_TEXT;
  }
  if (tmp4) {
    const topic = guild_id.topic;
    let tmp6 = null;
    if (null != topic) {
      tmp6 = null;
      if (topic.startsWith(c9)) {
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
// discord_app/modules/vibegrations/lib/VibegrationsUtils.tsx
import frozen from "../VibegrationsTypes.tsx";
import isVibegrationsGuildEnabled2 from "../experiments/VibegrationsGuildExperiment.tsx";
import closure_2 from "../../../stores/GuildChannelStore.tsx";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_3 } from "../../../stores/GuildChannelStore.tsx";
import closure_4 from "../../../stores/GuildStore.tsx";
import closure_5 from "../../../stores/PermissionStore.tsx";
import closure_6 from "../../../stores/SelectedGuildStore.tsx";
import ME from "../../../Constants.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { isVibegrationsGuildEnabled } from "../experiments/VibegrationsGuildExperiment.tsx";

require = arg1;
function vibegrationsAppIdFromTopic(topic) {
  if (null != topic) {
    if (topic.startsWith(c10)) {
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
  return channels.getChannels(guild_id)[closure_3].filter((channel) => channel.channel.type === constants.GUILD_TEXT);
}
({ Permissions: error, ChannelTypes: closure_8, GuildFeatures: c9 } = ME);
let c10 = "vibegrations_application_id=";
const re11 = /^\d{17,20}$/;
let result = require("set").fileFinishedImporting("modules/vibegrations/lib/VibegrationsUtils.tsx");

export const getVibegrationsProjectAccessSettings = function getVibegrationsProjectAccessSettings(first1) {
  return {
    isPublic: first1 & frozen.VibegrationsProjectFlags.PUBLIC,
    isShared: first1 & frozen.VibegrationsProjectFlags.SHAREABLE,
  };
};
export { vibegrationsAppIdFromTopic };
export const vibegrationsTopicForApp = function vibegrationsTopicForApp(arg0) {
  return "" + c10 + arg0;
};
export const isVibegrationsProjectInGuild = function isVibegrationsProjectInGuild(guild_id, closure_0) {
  let tmp = null != guild_id;
  if (tmp) {
    let tmp3 = guild_id.guild_id === closure_0 || guild_id.preview_guild_id === closure_0;
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
export const isVibegrationsGuildEligible = function isVibegrationsGuildEligible(guildId, location) {
  let obj = isVibegrationsGuildEnabled2;
  obj = { guildId: guildId.id, location };
  let result = obj.isVibegrationsGuildEnabled(obj);
  if (result) {
    const features = guildId.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
export const eligibleVibegrationsGuilds = function eligibleVibegrationsGuilds(arr) {
  closure_0 = arg1;
  const found = arr.filter((guildId) => {
    let obj = callback(closure_1_1[6]);
    obj = { guildId: guildId.id, location: callback };
    let result = obj.isVibegrationsGuildEnabled(obj);
    if (result) {
      const features = guildId.features;
      result = !features.has(closure_1_9.INTERNAL_EMPLOYEE_ONLY);
    }
    return result;
  });
  return found.sort((id, id2) => {
    let num = -1;
    if (id.id >= id2.id) {
      let num2 = 0;
      if (id.id > id2.id) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  });
};
export const resolveVibegrationsWorkspaceGuildId = function resolveVibegrationsWorkspaceGuildId(arg0) {
  guildId = guildId.getGuildId();
  let guild = null;
  if (null != guildId) {
    guild = store.getGuild(guildId);
  }
  if (null != guild) {
    let obj = isVibegrationsGuildEnabled;
    obj = { guildId: null, location: null };
    obj[0] = guild.id;
    obj[1] = arg0;
    let result = obj.isVibegrationsGuildEnabled(obj);
    if (result) {
      let features = guild.features;
      result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    if (result) {
      let id = guild.id;
    }
    return id;
  }
  const guildsArray = store.getGuildsArray();
  _require = arg0;
  const found = guildsArray.filter((guildId) => {
    let obj = callback(closure_1_1[6]);
    obj = { guildId: guildId.id, location: callback };
    let result = obj.isVibegrationsGuildEnabled(obj);
    if (result) {
      const features = guildId.features;
      result = !features.has(closure_1_9.INTERNAL_EMPLOYEE_ONLY);
    }
    return result;
  });
  id = undefined;
  const first = found.sort((id, id2) => {
    let num = -1;
    if (id.id >= id2.id) {
      let num2 = 0;
      if (id.id > id2.id) {
        num2 = 1;
      }
      num = num2;
    }
    return num;
  })[0];
  if (first != null) {
    id = first.id;
  }
  if (id == null) {
    id = null;
  }
};
export const canAccessVibegrations = function canAccessVibegrations(closure_2, isAccessibleChannelOrThreadPath) {
  let obj = isVibegrationsGuildEnabled2;
  obj = { guildId: closure_2.id, location: isAccessibleChannelOrThreadPath };
  let result = obj.isVibegrationsGuildEnabled(obj);
  if (result) {
    const features = closure_2.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
export const canStartVibegrationsProject = function canStartVibegrationsProject(features) {
  features = features.features;
  const hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  let canResult = !hasItem;
  if (!hasItem) {
    canResult = closure_5.can(constants.MANAGE_CHANNELS, features);
  }
  if (canResult) {
    canResult = closure_5.can(constants.MANAGE_GUILD, features);
  }
  if (canResult) {
    let obj = isVibegrationsGuildEnabled2;
    obj = { guildId: null, location: null };
    obj[0] = features.id;
    obj[1] = arg1;
    canResult = obj.isVibegrationsGuildEnabled(obj);
  }
  return canResult;
};
export const useCanAccessVibegrations = function useCanAccessVibegrations(guildId, useGuildActionRows) {
  let obj = isVibegrationsGuildEnabled2;
  obj = { guildId: guildId.id, location: useGuildActionRows };
  let isVibegrationsGuildEnabled = obj.useIsVibegrationsGuildEnabled(obj);
  const features = guildId.features;
  if (isVibegrationsGuildEnabled) {
    isVibegrationsGuildEnabled = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return isVibegrationsGuildEnabled;
};
export const isVibegrationsChannelCandidate = function isVibegrationsChannelCandidate(channel, ActivitySounds) {
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const guild = store.getGuild(guild_id);
  let result = null != channel;
  if (result) {
    result = channel.type === constants2.GUILD_TEXT;
  }
  if (result) {
    const topic = channel.topic;
    let tmp6 = null;
    if (null != topic) {
      tmp6 = null;
      if (topic.startsWith(c10)) {
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
    let obj = isVibegrationsGuildEnabled2;
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
export const useIsVibegrationsChannelCandidate = function useIsVibegrationsChannelCandidate(channel, ChannelActions) {
  const _require = channel;
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild_id;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    return closure_1_4.getGuild(guild_id);
  });
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  obj = { guildId: guild_id, location: ChannelActions };
  let tmp4 = null != channel;
  const isVibegrationsGuildEnabled =
    require("../experiments/VibegrationsGuildExperiment.tsx").useIsVibegrationsGuildEnabled(obj);
  if (tmp4) {
    tmp4 = channel.type === constants2.GUILD_TEXT;
  }
  if (tmp4) {
    const topic = channel.topic;
    let tmp6 = null;
    if (null != topic) {
      tmp6 = null;
      if (topic.startsWith(c10)) {
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

// === Module 5363: VibegrationsUtils ===

// Module 5363 (VibegrationsUtils)
import VibegrationsTypes from "VibegrationsTypes" /* 5364 */;
import VibegrationsGuildExperiment from "VibegrationsGuildExperiment" /* 5365 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4464 */;
import GuildStore from "GuildStore" /* 2066 */;
import PermissionStore from "PermissionStore" /* 4466 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4652 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function vibegrationsAppIdFromTopic(topic) {
  if (null != topic) {
    if (topic.startsWith(c11)) {
      const substr = topic.slice(28);
      let tmp4 = null;
      if (re12.test(substr)) {
        tmp4 = substr;
      }
      return tmp4;
    }
  }
  return null;
}
function vibegrationsTextChannelsIn(guildId) {
  return GuildChannelStore.getChannels(guildId)[React2].filter((channel) => channel.channel.type === constants.GUILD_TEXT);
}
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: c2, GUILD_VOCAL_CHANNELS_KEY: c3 } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
({ Permissions: closure_8, ChannelTypes: closure_9, GuildFeatures: c10 } = Constants);
let c11 = "vibegrations_application_id=";
const re12 = /^\d{17,20}$/;
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsUtils.tsx");

export const vibegrationsSettingsGuildId = function vibegrationsSettingsGuildId(project, isPreview) {
  let tmp = null;
  if (null != project) {
    tmp = null;
    if ("user" !== project.install_scope) {
      let preview_guild_id = null;
      if (isPreview) {
        preview_guild_id = project.preview_guild_id;
      }
      if (preview_guild_id == null) {
        preview_guild_id = project.guild_id;
      }
      if (preview_guild_id == null) {
        preview_guild_id = null;
      }
      tmp = preview_guild_id;
    }
  }
  return tmp;
};
export const vibegrationsSettingChannels = function vibegrationsSettingChannels(stateFromStores1, channel_filter) {
  if ("voice" === channel_filter) {
    let items = [];
  } else {
    items = stateFromStores1[React2];
  }
  const items1 = [...items];
  if ("text" === channel_filter) {
    let items2 = [];
  } else {
    items2 = stateFromStores1[React3];
  }
  HermesBuiltin.arraySpread(items2, tmp2);
  return items1.map((channel) => channel.channel);
};
export const getVibegrationsProjectAccessSettings = function getVibegrationsProjectAccessSettings(first1) {
  return { isPublic: first1 & VibegrationsTypes.VibegrationsProjectFlags.PUBLIC, isShared: first1 & VibegrationsTypes.VibegrationsProjectFlags.SHAREABLE };
};
export { vibegrationsAppIdFromTopic };
export const vibegrationsTopicForApp = function vibegrationsTopicForApp(arg0) {
  return "" + c11 + arg0;
};
export const isVibegrationsProjectInGuild = function isVibegrationsProjectInGuild(guild_id, arg1) {
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
export const findVibegrationChannelId = function findVibegrationChannelId(guildId, applicationId) {
  for (const item10009 of tmp) {
    let channel = item10009.channel;
    if (vibegrationsAppIdFromTopic(channel.topic) === arg1) {
      obj.return();
      return channel.id;
    }
  }
  return null;
};
export const isVibegrationsGuildEligible = function isVibegrationsGuildEligible(guildId, VibegrationsRemixSheet) {
  let result = VibegrationsGuildExperiment.isVibegrationsGuildEnabled({ guildId: guildId.id, location: VibegrationsRemixSheet });
  if (result) {
    const features = guildId.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
export const eligibleVibegrationsGuilds = function eligibleVibegrationsGuilds(guildsArray, useIsOwnedVibegrationsApplication) {
  closure_0 = useIsOwnedVibegrationsApplication;
  const found = guildsArray.filter((guildId) => {
    let result = VibegrationsGuildExperiment.isVibegrationsGuildEnabled({ guildId: guildId.id, location: _location });
    if (result) {
      const features = guildId.features;
      result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
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
export const resolveVibegrationsWorkspaceGuildId = function resolveVibegrationsWorkspaceGuildId(VibegrationsCustomWidgetSheet) {
  const guildId = SelectedGuildStore.getGuildId();
  let guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  if (null != guild) {
    const obj2 = { guildId: guild.id, location: VibegrationsCustomWidgetSheet };
    let result = require("VibegrationsGuildExperiment").isVibegrationsGuildEnabled(obj2);
    if (result) {
      let features = guild.features;
      result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
    }
    if (result) {
      let id = guild.id;
    }
    return id;
  }
  const guildsArray = GuildStore.getGuildsArray();
  _require = VibegrationsCustomWidgetSheet;
  const found = guildsArray.filter((guildId) => {
    let result = VibegrationsGuildExperiment.isVibegrationsGuildEnabled({ guildId: guildId.id, location: _location });
    if (result) {
      const features = guildId.features;
      result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
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
export const canAccessVibegrations = function canAccessVibegrations(guild, getChannelIdForGuildTransition) {
  let result = VibegrationsGuildExperiment.isVibegrationsGuildEnabled({ guildId: guild.id, location: getChannelIdForGuildTransition });
  if (result) {
    const features = guild.features;
    result = !features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  }
  return result;
};
export const canStartVibegrationsProject = function canStartVibegrationsProject(features, location) {
  features = features.features;
  const hasItem = features.has(constants3.INTERNAL_EMPLOYEE_ONLY);
  let canResult = !hasItem;
  if (!hasItem) {
    canResult = PermissionStore.can(constants.MANAGE_CHANNELS, features);
  }
  if (canResult) {
    canResult = PermissionStore.can(constants.MANAGE_GUILD, features);
  }
  if (canResult) {
    const obj2 = { guildId: features.id, location };
    canResult = VibegrationsGuildExperiment.isVibegrationsGuildEnabled(obj2);
  }
  return canResult;
};
export const useCanAccessVibegrations = function useCanAccessVibegrations(guildId, useGuildActionRows) {
  let isVibegrationsGuildEnabled = VibegrationsGuildExperiment.useIsVibegrationsGuildEnabled({ guildId: guildId.id, location: useGuildActionRows });
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
  const guild = GuildStore.getGuild(guild_id);
  let result = null != channel;
  if (result) {
    result = channel.type === constants2.GUILD_TEXT;
  }
  if (result) {
    const topic = channel.topic;
    let tmp6 = null;
    if (null != topic) {
      tmp6 = null;
      if (topic.startsWith(c11)) {
        const substr = topic.slice(28);
        let tmp10 = null;
        if (re12.test(substr)) {
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
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    const obj2 = { guildId: guild_id1, location: ActivitySounds };
    result = VibegrationsGuildExperiment.isVibegrationsGuildEnabled(obj2);
  }
  return result;
};
export const useIsVibegrationsChannelCandidate = function useIsVibegrationsChannelCandidate(channel, ChannelActions) {
  _require = channel;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const obj = require("initialize");
  let guild_id;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  let tmp4 = null != channel;
  const isVibegrationsGuildEnabled = require("VibegrationsGuildExperiment").useIsVibegrationsGuildEnabled({ guildId: guild_id, location: ChannelActions });
  if (tmp4) {
    tmp4 = channel.type === constants2.GUILD_TEXT;
  }
  if (tmp4) {
    const topic = channel.topic;
    let tmp6 = null;
    if (null != topic) {
      tmp6 = null;
      if (topic.startsWith(c11)) {
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
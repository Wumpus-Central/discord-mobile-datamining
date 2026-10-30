// === Module 18845: useVoiceChannelApp ===

// Module 18845 (useVoiceChannelApp)
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;

const require = globalThis.__r;

const require = fn;
const Constants = fn(1072);
({ ChannelTypes: closure_4, GuildFeatures: hasOwnProperty, Permissions: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/useVoiceChannelApp.tsx");

export function useIsVoiceChannelAppEnabled(guild_id) {
  _require = guild_id;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const obj = require("initialize");
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let tmp4 = null != guild_id;
  const isConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled({ guildId: guild_id, location: "VoiceChannelApp" });
  if (tmp4) {
    tmp4 = guild_id.type === constants.GUILD_VOICE;
  }
  if (tmp4) {
    tmp4 = isConjureGuildEnabled;
  }
  if (tmp4) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(constants2.INTERNAL_EMPLOYEE_ONLY);
    }
    tmp4 = true !== hasItem;
  }
  return tmp4;
}
export function useVoiceChannelApplicationId(guild_id) {
  _require = guild_id;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    guild_id = undefined;
    if (guild_id != null) {
      guild_id = guild_id.guild_id;
    }
    return GuildStore.getGuild(guild_id);
  });
  const obj = require("initialize");
  guild_id = undefined;
  if (guild_id != null) {
    guild_id = guild_id.guild_id;
  }
  let tmp4 = null != guild_id;
  const isConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled({ guildId: guild_id, location: "VoiceChannelApp" });
  if (tmp4) {
    tmp4 = guild_id.type === constants.GUILD_VOICE;
  }
  if (tmp4) {
    tmp4 = isConjureGuildEnabled;
  }
  if (tmp4) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(constants2.INTERNAL_EMPLOYEE_ONLY);
    }
    tmp4 = true !== hasItem;
  }
  let tmp8 = null;
  if (tmp4) {
    let application_id;
    if (guild_id != null) {
      application_id = guild_id.application_id;
    }
    if (application_id == null) {
      application_id = null;
    }
    tmp8 = application_id;
  }
  return tmp8;
}
export function useCanConfigureVoiceChannelApp(channel) {
  _require = channel;
  closure_129_0 = channel;
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
  let stateFromStores1 = null != channel;
  const isConjureGuildEnabled = require("ConjureGuildExperiment").useIsConjureGuildEnabled({ guildId: guild_id, location: "VoiceChannelApp" });
  if (stateFromStores1) {
    stateFromStores1 = channel.type === constants.GUILD_VOICE;
  }
  if (stateFromStores1) {
    stateFromStores1 = isConjureGuildEnabled;
  }
  if (stateFromStores1) {
    let hasItem;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      hasItem = features.has(constants2.INTERNAL_EMPLOYEE_ONLY);
    }
    stateFromStores1 = true !== hasItem;
  }
  const obj2 = require("ConjureGuildExperiment");
  const items1 = [PermissionStore];
  if (stateFromStores1) {
    stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
      let canResult = null != closure_0;
      if (canResult) {
        canResult = PermissionStore.can(constants3.MANAGE_CHANNELS, tmp);
      }
      return canResult;
    });
  }
  return stateFromStores1;
}
// discord_app/stores/GuildChannelStore.tsx
import applyDefault from "../../_runtime/00012_apply.js";
import fromStringAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import applyOverwritesAll from "../utils/PermissionUtils.tsx";
import isSubscriptionGated from "../modules/channel/GatedChannelStore.tsx";
import initializeFromUserSettings from "../modules/favorites/FavoriteStore.tsx";
import { createFavoritesGuildChannelRecord as closure_6 } from "../modules/favorites/utils/createFavoritesGuildChannelRecord.tsx";
import createChannelRecord from "../records/ChannelRecord.tsx";
import fetchFingerprint from "AuthenticationStore.tsx";
import ensureGuildLoaded from "ChannelStore.tsx";
import trackCommunicationDisabled from "GuildMemberStore.tsx";
import createGuildRecordFromRust from "GuildStore.tsx";
import getUncachedChannelPermissions from "PermissionStore.tsx";
import markAllUserIdListsStale from "RelationshipStore.tsx";
import mergeGuildAvatar from "UserStore.tsx";
import ME from "../Constants.tsx";

const require = fn;
function comparator(comparator, comparator2) {
  return comparator.comparator - comparator2.comparator;
}
function resetAllGuildChannels() {
  closure_24 = {};
  closure_28 = {};
  closure_25 = {};
  closure_26 = {};
  if (null != c23) {
    rebuildGuildChannels(c23);
  }
}
function rebuildGuildChannels(guildId) {
  obj = { id: guildId };
  obj[SELECTABLE] = [];
  obj[VOCAL] = [];
  const items = [obj];
  obj[ChannelTypes.GUILD_CATEGORY] = items;
  obj.count = 0;
  closure_24[guildId] = obj;
  closure_28[guildId] = [];
  let obj2 = obj;
  const id = obj.id;
  importDefault = id;
  obj1 = obj2(1913);
  obj = {};
  if (obj1.isFavoritesGuildId(id)) {
    favoriteChannels = favoriteChannels.getFavoriteChannels();
    let tmp7 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp7 = obj;
      while (keys[tmp] !== undefined) {
        let channel = store.getChannel(tmp15);
        if (null == channel) {
          continue;
        } else {
          let tmp17 = callback(favoriteChannels, favoriteChannels[tmp15], channel);
          obj = { channel: null, comparator: null };
          obj[0] = tmp17;
          obj[1] = tmp17.position;
          obj[tmp15] = obj;
          continue;
        }
        continue;
      }
    }
  } else {
    const mutableGuildChannelsForGuild = store.getMutableGuildChannelsForGuild(id);
    tmp7 = obj;
    const keys1 = Object.keys();
    if (keys1 !== undefined) {
      tmp7 = obj;
      while (keys1[tmp] !== undefined) {
        obj1 = { channel: null, comparator: null };
        obj1[0] = mutableGuildChannelsForGuild[tmp9];
        obj1[1] = mutableGuildChannelsForGuild[tmp9].position;
        obj[tmp9] = obj1;
        continue;
      }
    }
  }
  const item = applyDefault.forEach(tmp7, (channel) => {
    channel = channel.channel;
    obj2.count = obj2.count + 1;
    let type = channel.type;
    if (closure_1_7(type)) {
      type = SELECTABLE;
    } else if (closure_1_9(type)) {
      type = VOCAL;
    }
    if (channel.type === ChannelTypes.GUILD_DIRECTORY) {
      if (null == closure_1_28[closure_1]) {
        closure_1_28[closure_1] = [];
      }
      let arr = closure_1_28[closure_1];
      arr = arr.push(channel);
    }
    if (null != obj2[type]) {
      arr = obj2[type].push(channel);
    }
  });
  const sorted = obj[SELECTABLE].sort(comparator);
  const sorted1 = obj[VOCAL].sort(comparator);
  const sorted2 = obj[ChannelTypes.GUILD_CATEGORY].sort(comparator);
  obj2 = {};
  closure_25[obj.id] = obj2;
  importDefault = {};
  const item1 = obj[SELECTABLE].forEach((item, index) => {
    const channel = item.channel;
    const channelName = obj2(dependencyMap[14]).computeChannelName(channel, closure_1_16, closure_1_15);
    const call = hasOwnProperty.call;
    let tmp3 = null;
    if (typeof call === "unknown" ? hasOwnProperty(channelName) : call(table, channelName)) {
      tmp3 = table[channelName];
    }
    if (null == tmp3) {
      table[channelName] = 1;
      let sum = channelName;
    } else {
      table[channelName] = tmp3 + 1;
      const _HermesInternal = HermesInternal;
      sum = channelName + "~" + tmp3;
    }
    obj2[channel.id] = { id: channel.id, name: sum };
    obj = obj2(dependencyMap[14]);
  });
  if ((function calculateGuildHasElevatedPermissions(currentUser, guildId) {
    guild = guild.getGuild(guildId);
    if (null != guild) {
      if (callback2(currentUser, guild)) {
        return true;
      }
    }
    let tmp3 = table[guildId];
    if (null == tmp3) {
      tmp3 = callback(guildId);
    }
    obj = tmp3[closure_21][Symbol.iterator]();
    while (obj !== undefined) {
      if (callback2(currentUser, tmp6.channel)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    for (const item10033 of tmp5) {
      if (callback2(arg0, item10033.channel)) {
        obj2.return();
        let flag2 = true;
        return true;
      }
    }
    return false;
  })(currentUser.getCurrentUser(), guildId)) {
    tmp23[guildId] = true;
  } else {
    delete tmp2[tmp3];
  }
  return obj;
}
function handleGuildUpdates(guild) {
  const id = guild.guild.id;
  if (null == id) {
    return false;
  } else {
    closure_24[id] = undefined;
    if (c23 === id) {
      rebuildGuildChannels(id);
    }
  }
}
function handleChannelUpdate(channel) {
  const guild_id = channel.channel.guild_id;
  if (null == guild_id) {
    return false;
  } else {
    closure_24[guild_id] = undefined;
    if (guild_id === c23) {
      rebuildGuildChannels(guild_id);
    }
  }
}
function handleGuildRoleUpdate(guildId) {
  guildId = guildId.guildId;
  closure_24[guildId] = undefined;
  if (guildId === c23) {
    rebuildGuildChannels(guildId);
  }
}
function hasElevatedPermissions(user, context) {
  obj = { user, context, checkElevated: false };
  return obj.hasAny(applyOverwritesAll.computePermissions(obj), closure_20);
}
function handleFavoritesUpdate() {
  rebuildGuildChannels(closure_17);
}
({ isGuildSelectableChannelType: error, GUILD_NON_CATEGORY_CHANNEL_TYPES: closure_8, isGuildVocalChannelType: c9, createChannelRecord } = createChannelRecord);
({ FAVORITES: closure_17, ChannelTypes } = ME);
({ Permissions: closure_19, ElevatedPermissions: closure_20 } = ME);
const SELECTABLE = "SELECTABLE";
const VOCAL = "VOCAL";
let c23 = null;
let closure_24 = {};
let closure_25 = {};
let closure_26 = {};
let c27 = null;
let closure_28 = {};
{ comparator: -1, channel: createChannelRecord(obj) };
obj = { id: ME.NULL_STRING_GUILD_ID, SELECTABLE: [], VOCAL: [] };
let items = [obj];
obj[ChannelTypes.GUILD_CATEGORY] = items;
obj.count = 0;
let closure_31 = [];
let closure_32 = {};
const Store = initializeDefault.Store;
class GuildChannelStore extends Store {
}
const prototype = GuildChannelStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_10, closure_11, closure_5, closure_4, closure_12, closure_13, closure_14, closure_16);
  const items = [closure_5];
  this.syncWith(items, handleFavoritesUpdate);
};
prototype["getAllGuilds"] = function getAllGuilds() {
  return closure_24;
};
prototype["getChannels"] = function getChannels(guildId) {
  if (null != guildId) {
    let tmp3 = dependencyMap[guildId];
    if (null == tmp3) {
      tmp3 = rebuildGuildChannels(guildId);
    }
    let tmp = tmp3;
  } else {
    tmp = obj;
  }
  return tmp;
};
prototype["getFirstChannelOfType"] = function getFirstChannelOfType(arg0, closure_4) {
  const found = this.getChannels(arg0)[arg2].find(closure_4);
  let channel = null;
  if (null != found) {
    channel = found.channel;
  }
  return channel;
};
prototype["getFirstChannel"] = function getFirstChannel(id, arg1, flag) {
  if (flag === undefined) {
    flag = false;
  }
  const self = this;
  let firstChannelOfType = this.getFirstChannelOfType(id, arg1, SELECTABLE);
  if (firstChannelOfType == null) {
    let firstChannelOfType1 = null;
    if (flag) {
      firstChannelOfType1 = self.getFirstChannelOfType(id, arg1, VOCAL);
    }
    firstChannelOfType = firstChannelOfType1;
  }
  return firstChannelOfType;
};
prototype["getDefaultChannel"] = function getDefaultChannel(id, flag, CREATE_INSTANT_INVITE) {
  if (flag === undefined) {
    flag = false;
  }
  let VIEW_CHANNEL = CREATE_INSTANT_INVITE;
  if (CREATE_INSTANT_INVITE === undefined) {
    VIEW_CHANNEL = constants.VIEW_CHANNEL;
  }
  return this.getFirstChannel(id, (channel) => closure_1_14.can(VIEW_CHANNEL, channel.channel), flag);
};
prototype["getSFWDefaultChannel"] = function getSFWDefaultChannel(id, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let VIEW_CHANNEL = arg2;
  if (arg2 === undefined) {
    VIEW_CHANNEL = constants.VIEW_CHANNEL;
  }
  return this.getFirstChannel(id, (channel) => closure_1_14.can(VIEW_CHANNEL, channel.channel) && !channel.channel.nsfw, flag);
};
prototype["getSelectableChannelIds"] = function getSelectableChannelIds(closure_0) {
  return this.getChannels(closure_0)[SELECTABLE].map((item, index) => item.channel.id);
};
prototype["getSelectableChannels"] = function getSelectableChannels(arg0) {
  return this.getChannels(arg0)[SELECTABLE];
};
prototype["getVocalChannelIds"] = function getVocalChannelIds(set) {
  return this.getChannels(set)[VOCAL].map((item, index) => item.channel.id);
};
prototype["getDirectoryChannelIds"] = function getDirectoryChannelIds(guildId) {
  let mapped;
  if (table3[guildId] != null) {
    mapped = arr.map((item, index) => item.channel.id);
  }
  if (mapped == null) {
    mapped = closure_31;
  }
  return mapped;
};
prototype["hasSelectableChannel"] = function hasSelectableChannel(closure_0) {
  const selectableChannelIds = this.getSelectableChannelIds(closure_0);
  return selectableChannelIds.includes(arg1);
};
prototype["hasElevatedPermissions"] = function hasElevatedPermissions(arg0) {
  return table2[arg0] || false;
};
prototype["hasChannels"] = function hasChannels(arg0) {
  return this.getChannels(arg0).count > 0;
};
prototype["hasCategories"] = function hasCategories(guild_id) {
  return this.getChannels(guild_id)[ChannelTypes.GUILD_CATEGORY].length > 1;
};
prototype["getTextChannelNameDisambiguations"] = function getTextChannelNameDisambiguations(guildId) {
  if (null != guildId) {
    let tmp3 = table[guildId];
    if (tmp3 == null) {
      tmp3 = closure_32;
    }
    let tmp = tmp3;
  } else {
    tmp = closure_32;
  }
  return tmp;
};
GuildChannelStore.displayName = "GuildChannelStore";
const guildChannelStore = new GuildChannelStore(dispatcherDefault, {
  BACKGROUND_SYNC: resetAllGuildChannels,
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    let tmp = guildId;
    if (guildId == null) {
      tmp = null;
    }
    c23 = tmp;
    let tmp2 = null != guildId;
    if (tmp2) {
      if (null == dependencyMap[guildId]) {
        rebuildGuildChannels(guildId);
      }
      tmp2 = tmp4;
    }
    return tmp2;
  },
  CONNECTION_OPEN: resetAllGuildChannels,
  OVERLAY_INITIALIZE: resetAllGuildChannels,
  CACHE_LOADED_LAZY: resetAllGuildChannels,
  GUILD_CREATE: handleGuildUpdates,
  GUILD_UPDATE: handleGuildUpdates,
  GUILD_DELETE: function handleGuildDelete(arg0) {
    delete tmp3[tmp2];
    delete tmp3[tmp2];
    delete tmp3[tmp2];
    delete tmp[tmp2];
    return true;
  },
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    if (id.getId() !== guildId.user.id) {
      return false;
    } else {
      closure_24[guildId] = undefined;
      if (guildId === c23) {
        rebuildGuildChannels(guildId);
      }
    }
  },
  CHANNEL_CREATE: handleChannelUpdate,
  CHANNEL_DELETE: handleChannelUpdate,
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    let flag = false;
    const iter = arg0.channels[Symbol.iterator]();
    while (iter !== undefined) {
      let guild_id = iter.next().guild_id;
      let tmp = guild_id;
      if (null != guild_id) {
        closure_24[tmp] = undefined;
        flag = true;
        if (c23 === tmp) {
          let tmp7 = rebuildGuildChannels(tmp);
        }
      }
      continue;
    }
    return flag;
  },
  GUILD_ROLE_CREATE: handleGuildRoleUpdate,
  GUILD_ROLE_UPDATE: handleGuildRoleUpdate,
  GUILD_ROLE_DELETE: handleGuildRoleUpdate,
  IMPERSONATE_UPDATE: handleGuildRoleUpdate,
  IMPERSONATE_STOP: handleGuildRoleUpdate,
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      if (null != channelId) {
        const channel = store.getChannel(channelId);
        channelId = null;
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        if (guildId == null) {
          guildId = null;
        }
        let flag2 = null != guildId;
        if (flag2) {
          closure_24[guildId] = undefined;
          flag2 = true;
          if (guildId === c23) {
            rebuildGuildChannels(guildId);
            flag2 = true;
          }
        }
        let flag = flag2;
      }
      return flag;
    }
    const channel1 = store.getChannel(channelId);
    let guildId1;
    if (channel1 != null) {
      guildId1 = channel1.getGuildId();
    }
    if (guildId1 == null) {
      guildId1 = null;
    }
    flag = null != guildId1;
    if (flag) {
      closure_24[guildId1] = undefined;
      flag = true;
      if (guildId1 === c23) {
        rebuildGuildChannels(guildId1);
        flag = true;
      }
    }
  },
  VOICE_CHANNEL_STATUS_UPDATE: function handleVoiceChannelStatusUpdate(id) {
    const basicChannel = store.getBasicChannel(id.id);
    if (tmp2) {
      rebuildGuildChannels(basicChannel.guild_id);
    }
    tmp2 = null != basicChannel && null != basicChannel.guild_id;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, item, index) => {
      const channelId = item.channelId;
      let tmp = acc;
      if (sessionId.getSessionId() === item.sessionId) {
        channel = channel.getChannel(channelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        if (guildId == null) {
          guildId = null;
        }
        let flag = null != guildId;
        if (flag) {
          closure_24[guildId] = undefined;
          flag = true;
          if (guildId === closure_23) {
            callback(guildId);
            flag = true;
          }
        }
        if (!flag) {
          flag = acc;
        }
        tmp = flag;
      }
      return tmp;
    }, false);
  }
});
const result = require("obj132").fileFinishedImporting("stores/GuildChannelStore.tsx");

export default guildChannelStore;
export const GUILD_SELECTABLE_CHANNELS_KEY = "SELECTABLE";
export const GUILD_VOCAL_CHANNELS_KEY = "VOCAL";
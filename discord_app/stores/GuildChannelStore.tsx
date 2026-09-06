// discord_app/stores/GuildChannelStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import BigFlagUtilsAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import PermissionUtilsAll from "../utils/PermissionUtils.tsx";
import useChannelName from "../modules/channel/useChannelName.tsx";
import GatedChannelStore from "../modules/channel/GatedChannelStore.tsx";
import FavoriteStore from "../modules/favorites/FavoriteStore.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildMemberStore from "GuildMemberStore.tsx";
import GuildStore from "GuildStore.tsx";
import PermissionStore from "PermissionStore.tsx";
import RelationshipStore from "RelationshipStore.tsx";
import UserStore from "UserStore.tsx";

require = fn;
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
  dependencyMap[guildId] = [];
  const id = obj.id;
  let obj1 = obj(1982);
  obj = {};
  if (obj1.isFavoritesGuildId(id)) {
    const favoriteChannels = FavoriteStore.getFavoriteChannels();
    let tmp7 = obj;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp7 = obj;
      while (keys[tmp] !== undefined) {
        let channel = ChannelStore.getChannel(tmp15);
        if (null == channel) {
          continue;
        } else {
          let tmp17 = closure_6(favoriteChannels, favoriteChannels[tmp15], channel);
          obj = { channel: tmp17, comparator: tmp17.position };
          obj[tmp15] = obj;
          continue;
        }
        continue;
      }
    }
  } else {
    const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(id);
    tmp7 = obj;
    const keys1 = Object.keys();
    if (keys1 !== undefined) {
      tmp7 = obj;
      while (keys1[tmp] !== undefined) {
        obj1 = { channel: mutableGuildChannelsForGuild[tmp9], comparator: mutableGuildChannelsForGuild[tmp9].position };
        obj[tmp9] = obj1;
        continue;
      }
    }
  }
  const item = id(12).forEach(tmp7, (channel) => {
    channel = channel.channel;
    obj.count = obj.count + 1;
    let type = channel.type;
    if (React5(type)) {
      type = SELECTABLE;
    } else if (React7(type)) {
      type = VOCAL;
    }
    if (channel.type === ChannelTypes.GUILD_DIRECTORY) {
      if (null == dependencyMap[id]) {
        dependencyMap[tmp8] = [];
      }
      let arr = dependencyMap[tmp8];
      arr = arr.push(channel);
    }
    if (null != obj[type]) {
      arr = tmp[type].push(channel);
    }
  });
  const sorted = obj[SELECTABLE].sort(comparator);
  const sorted1 = obj[VOCAL].sort(comparator);
  const sorted2 = obj[ChannelTypes.GUILD_CATEGORY].sort(comparator);
  const obj2 = {};
  closure_25[obj.id] = obj2;
  closure_129_0 = obj2;
  closure_129_1 = {};
  const item1 = obj[SELECTABLE].forEach((channel) => {
    channel = channel.channel;
    obj = useChannelName;
    const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    let tmp3 = null;
    if (typeof call === "unknown" ? hasOwnProperty(channelName) : call(id, channelName)) {
      tmp3 = tmp2[channelName];
    }
    if (null == tmp3) {
      tmp2[channelName] = 1;
      let sum = channelName;
    } else {
      tmp2[channelName] = tmp3 + 1;
      const _HermesInternal = HermesInternal;
      sum = channelName + "~" + tmp3;
    }
    obj[channel.id] = { id: channel.id, name: sum };
  });
  if (
    (function calculateGuildHasElevatedPermissions(currentUser, guildId) {
      guild = guild.getGuild(guildId);
      if (null != guild) {
        if (hasElevatedPermissions(currentUser, guild)) {
          return true;
        }
      }
      let tmp3 = dependencyMap[guildId];
      if (null == tmp3) {
        tmp3 = rebuildGuildChannels(guildId);
      }
      obj = tmp3[SELECTABLE][Symbol.iterator]();
      while (obj !== undefined) {
        if (hasElevatedPermissions(currentUser, tmp6.channel)) {
          obj.return();
          let flag = true;
          return true;
        }
      }
      for (const item10033 of tmp5) {
        if (hasElevatedPermissions(arg0, item10033.channel)) {
          obj2.return();
          let flag2 = true;
          return true;
        }
      }
      return false;
    })(UserStore.getCurrentUser(), guildId)
  ) {
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
  return obj.hasAny(PermissionUtilsAll.computePermissions(obj), closure_1_20);
}
function handleFavoritesUpdate() {
  rebuildGuildChannels(closure_1_17);
}
let closure_6 = fn(4198).createFavoritesGuildChannelRecord;
const ChannelRecord = fn(1961);
({
  isGuildSelectableChannelType: closure_7,
  GUILD_NON_CATEGORY_CHANNEL_TYPES: closure_8,
  isGuildVocalChannelType: closure_9,
  createChannelRecord,
} = ChannelRecord);
const Constants = fn(1074);
({ FAVORITES: closure_17, ChannelTypes } = Constants);
({ Permissions: closure_19, ElevatedPermissions: closure_20 } = Constants);
const SELECTABLE = "SELECTABLE";
const VOCAL = "VOCAL";
let c23 = null;
const dependencyMap = {};
let closure_25 = {};
let closure_26 = {};
let channelId = null;
let closure_28 = {};
let obj = { comparator: -1, channel: null };
obj = { id: Constants.NULL_STRING_CHANNEL_ID, type: ChannelTypes.GUILD_CATEGORY, name: "Uncategorized" };
obj.channel = createChannelRecord(obj);
obj = { id: Constants.NULL_STRING_GUILD_ID, SELECTABLE: [], VOCAL: [] };
let items = [obj];
obj[ChannelTypes.GUILD_CATEGORY] = items;
obj.count = 0;
let closure_31 = [];
let closure_32 = {};
const Store = initializeDefault.Store;
class GuildChannelStore extends Store {}
const prototype = GuildChannelStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    AuthenticationStore,
    ChannelStore,
    FavoriteStore,
    GatedChannelStore,
    GuildMemberStore,
    GuildStore,
    PermissionStore,
    UserStore,
  );
  const items = [FavoriteStore];
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
prototype["getFirstChannelOfType"] = function getFirstChannelOfType(arg0, _messages, arg2) {
  const found = this.getChannels(arg0)[arg2].find(_messages);
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
  return this.getFirstChannel(id, (channel) => PermissionStore.can(VIEW_CHANNEL, channel.channel), flag);
};
prototype["getSFWDefaultChannel"] = function getSFWDefaultChannel(id, flag) {
  if (flag === undefined) {
    flag = false;
  }
  let VIEW_CHANNEL = arg2;
  if (arg2 === undefined) {
    VIEW_CHANNEL = constants.VIEW_CHANNEL;
  }
  return this.getFirstChannel(
    id,
    (channel) => PermissionStore.can(VIEW_CHANNEL, channel.channel) && !channel.channel.nsfw,
    flag,
  );
};
prototype["getSelectableChannelIds"] = function getSelectableChannelIds(guildId) {
  return this.getChannels(guildId)[SELECTABLE].map((channel) => channel.channel.id);
};
prototype["getSelectableChannels"] = function getSelectableChannels(arg0) {
  return this.getChannels(arg0)[SELECTABLE];
};
prototype["getVocalChannelIds"] = function getVocalChannelIds(set) {
  return this.getChannels(set)[VOCAL].map((channel) => channel.channel.id);
};
prototype["getDirectoryChannelIds"] = function getDirectoryChannelIds(guildId) {
  let mapped;
  if (closure_28[guildId] != null) {
    mapped = arr.map((channel) => channel.channel.id);
  }
  if (mapped == null) {
    mapped = closure_31;
  }
  return mapped;
};
prototype["hasSelectableChannel"] = function hasSelectableChannel(guildId, arg1) {
  const selectableChannelIds = this.getSelectableChannelIds(guildId);
  return selectableChannelIds.includes(arg1);
};
prototype["hasElevatedPermissions"] = function hasElevatedPermissions(arg0) {
  return closure_26[arg0] || false;
};
prototype["hasChannels"] = function hasChannels(arg0) {
  return this.getChannels(arg0).count > 0;
};
prototype["hasCategories"] = function hasCategories(guild_id) {
  return this.getChannels(guild_id)[ChannelTypes.GUILD_CATEGORY].length > 1;
};
prototype["getTextChannelNameDisambiguations"] = function getTextChannelNameDisambiguations(guildId) {
  if (null != guildId) {
    let tmp3 = closure_25[guildId];
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
const guildChannelStore = new GuildChannelStore(DispatcherDefault, {
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
    if (AuthenticationStore.getId() !== guildId.user.id) {
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
        const channel = ChannelStore.getChannel(channelId);
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
    const channel1 = ChannelStore.getChannel(channelId);
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
    const basicChannel = ChannelStore.getBasicChannel(id.id);
    if (tmp2) {
      rebuildGuildChannels(basicChannel.guild_id);
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, channelId) => {
      channelId = channelId.channelId;
      let tmp = acc;
      if (sessionId.getSessionId() === channelId.sessionId) {
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
          dependencyMap[guildId] = undefined;
          flag = true;
          if (guildId === closure_1_23) {
            rebuildGuildChannels(guildId);
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
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/GuildChannelStore.tsx");

export default guildChannelStore;
export const GUILD_SELECTABLE_CHANNELS_KEY = "SELECTABLE";
export const GUILD_VOCAL_CHANNELS_KEY = "VOCAL";

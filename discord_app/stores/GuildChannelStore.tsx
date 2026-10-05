// discord_app/stores/GuildChannelStore.tsx
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import BigFlagUtilsAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import createFavoritesGuildChannelRecord from "../modules/favorites/utils/createFavoritesGuildChannelRecord.tsx";
import PermissionUtilsAll from "../utils/PermissionUtils.tsx";
import GatedChannelStore from "../modules/channel/GatedChannelStore.tsx";
import FavoriteStore from "../modules/favorites/FavoriteStore.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildMemberStore from "GuildMemberStore.tsx";
import GuildStore from "GuildStore.tsx";
import PermissionStore from "PermissionStore.tsx";
import RelationshipStore from "RelationshipStore.tsx";
import UserStore from "UserStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let closure_26, hasOwnProperty;

let ChannelTypes;
let c9;
let closure_17;
let closure_19;
let closure_20;
let createChannelRecord;
let metroImportAll;
let metroImportDefault;
let obj2;
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
  let tmp6;
  function calculateGuildHasElevatedPermissions(currentUser, guildId) {
    guild = guild.getGuild(guildId);
    if (null != guild) {
      if (hasElevatedPermissions(currentUser, guild)) {
        return true;
      }
    }
    let tmp3 = closure_1_24[guildId];
    if (null == tmp3) {
      tmp3 = rebuildGuildChannels(guildId);
    }
    const tmp5 = tmp3[VOCAL];
    obj = tmp3[SELECTABLE][Symbol.iterator]();
    while (obj !== undefined) {
      if (hasElevatedPermissions(currentUser, tmp6.channel)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    for (const item10033 of tmp5) {
      if (hasElevatedPermissions(currentUser, item10033.channel)) {
        obj2.return();
        let flag2 = true;
        return true;
      }
    }
    return false;
  }
  obj = { id: guildId, count: 0 };
  obj[SELECTABLE] = [];
  obj[VOCAL] = [];
  const items = [obj];
  obj[ChannelTypes.GUILD_CATEGORY] = items;
  closure_24[guildId] = obj;
  closure_28[guildId] = [];
  const id = obj.id;
  const obj2 = obj(2077);
  obj3 = {};
  const tmp2 = guildId;
  if (obj2.isFavoritesGuildId(id)) {
    const favoriteChannels = FavoriteStore.getFavoriteChannels();
    tmp6 = obj3;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp6 = obj3;
      while (keys[tmp] !== undefined) {
        let channel = ChannelStore.getChannel(tmp14);
        if (null == channel) {
          continue;
        } else {
          let tmp16 = closure_6(favoriteChannels, favoriteChannels[tmp14], channel);
          let obj4 = { channel: tmp16, comparator: tmp16.position };
          obj3[tmp14] = obj4;
          continue;
        }
        continue;
      }
    }
  } else {
    const mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(id);
    let tmp5 = mutableGuildChannelsForGuild;
    tmp6 = obj3;
    const keys1 = Object.keys();
    if (keys1 !== undefined) {
      tmp6 = obj3;
      let tmp8 = keys1[tmp];
      while (tmp8 !== undefined) {
        let obj8 = {
          channel: mutableGuildChannelsForGuild[tmp8],
          comparator: mutableGuildChannelsForGuild[tmp8].position,
        };
        obj3[tmp8] = obj8;
        continue;
      }
    }
  }
  let arr2 = id(12);
  const item = arr2.forEach(tmp6, (channel) => {
    channel = channel.channel;
    obj.count = obj.count + 1;
    let type = channel.type;
    if (metroImportDefault(type)) {
      type = SELECTABLE;
    } else if (React4(type)) {
      type = VOCAL;
    }
    if (channel.type === ChannelTypes.GUILD_DIRECTORY) {
      if (null == closure_28[id]) {
        closure_28[id] = [];
      }
      const arr = closure_28[id];
      arr.push(channel);
    }
    if (null != obj[type]) {
      const arr2 = obj[type];
      arr2.push(channel);
    }
  });
  const obj5 = obj[SELECTABLE];
  const sorted = obj5.sort(comparator);
  const obj6 = obj[VOCAL];
  const sorted1 = obj6.sort(comparator);
  const obj7 = obj[ChannelTypes.GUILD_CATEGORY];
  const sorted2 = obj7.sort(comparator);
  const obj9 = {};
  closure_25[obj.id] = obj9;
  let closure_1 = {};
  const arr3 = obj[SELECTABLE];
  const item1 = arr3.forEach((channel) => {
    let sum;
    channel = channel.channel;
    obj = obj(dependencyMap[14]);
    const channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
    hasOwnProperty = Object.prototype.hasOwnProperty;
    let tmp3 = null;
    if (hasOwnProperty.call(closure_1, channelName)) {
      tmp3 = closure_1[channelName];
    }
    if (null == tmp3) {
      closure_1[channelName] = 1;
      sum = channelName;
    } else {
      closure_1[channelName] = tmp3 + 1;
      const _HermesInternal = HermesInternal;
      sum = channelName + "~" + tmp3;
    }
    obj9[channel.id] = { id: channel.id, name: sum };
  });
  if (calculateGuildHasElevatedPermissions(UserStore.getCurrentUser(), guildId)) {
    let flag = true;
    closure_26[guildId] = true;
  } else {
    delete closure_26[tmp2];
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
  const hasAny = BigFlagUtilsAll.hasAny;
  BigFlagUtilsAll;
  obj = PermissionUtilsAll;
  const obj2 = { user, context, checkElevated: false };
  return hasAny(obj.computePermissions(obj2), closure_20);
}
function handleFavoritesUpdate() {
  rebuildGuildChannels(closure_17);
}
let closure_6 = createFavoritesGuildChannelRecord.createFavoritesGuildChannelRecord;
({
  isGuildSelectableChannelType: metroImportDefault,
  GUILD_NON_CATEGORY_CHANNEL_TYPES: metroImportAll,
  isGuildVocalChannelType: c9,
  createChannelRecord,
} = ChannelRecord);
({ FAVORITES: closure_17, ChannelTypes } = Constants);
({ Permissions: closure_19, ElevatedPermissions: closure_20 } = Constants);
const SELECTABLE = "SELECTABLE";
const VOCAL = "VOCAL";
let c23 = null;
let closure_24 = {};
let closure_25 = {};
const prioritySpeakerDucking = {};
let channelId = null;
let closure_28 = {};
let obj = { comparator: -1, channel: createChannelRecord(obj2) };
obj2 = { id: Constants.NULL_STRING_CHANNEL_ID, type: ChannelTypes.GUILD_CATEGORY, name: "Uncategorized" };
const NULL_STRING_GUILD_ID = Constants.NULL_STRING_GUILD_ID;
let obj3 = { id: NULL_STRING_GUILD_ID, SELECTABLE: [], VOCAL: [], count: 0 };
let items = [obj];
obj3[ChannelTypes.GUILD_CATEGORY] = items;
let closure_31 = [];
let closure_32 = {};
const Store = get_initializedDefault.Store;
class GuildChannelStore extends Store {
  initialize() {
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
  }
  getAllGuilds() {
    return closure_24;
  }
  getChannels(guildId) {
    let tmp;
    if (null != guildId) {
      let tmp3 = closure_24[guildId];
      if (null == tmp3) {
        tmp3 = rebuildGuildChannels(guildId);
      }
      tmp = tmp3;
    } else {
      tmp = obj3;
    }
    return tmp;
  }
  getFirstChannelOfType(arg0, cResult, arg2) {
    const arr = this.getChannels(arg0)[arg2];
    const found = arr.find(cResult);
    let channel = null;
    if (null != found) {
      channel = found.channel;
    }
    return channel;
  }
  getFirstChannel(id, arg1) {
    let flag;
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
  }
  getDefaultChannel(id) {
    let flag;
    if (flag === undefined) {
      flag = false;
    }
    let VIEW_CHANNEL = CREATE_INSTANT_INVITE;
    if (CREATE_INSTANT_INVITE === undefined) {
      VIEW_CHANNEL = constants.VIEW_CHANNEL;
    }
    return this.getFirstChannel(id, (channel) => PermissionStore.can(VIEW_CHANNEL, channel.channel), flag);
  }
  getSFWDefaultChannel(id) {
    let flag;
    if (flag === undefined) {
      flag = false;
    }
    let VIEW_CHANNEL = arg2;
    if (arg2 === undefined) {
      VIEW_CHANNEL = constants.VIEW_CHANNEL;
    }
    return this.getFirstChannel(
      id,
      (channel) => {
        const tmp = PermissionStore.can(VIEW_CHANNEL, channel.channel) && !channel.channel.nsfw;
        return tmp;
      },
      flag,
    );
  }
  getSelectableChannelIds(id) {
    const arr = this.getChannels(id)[SELECTABLE];
    return arr.map((channel) => channel.channel.id);
  }
  getSelectableChannels(id) {
    return this.getChannels(id)[SELECTABLE];
  }
  getVocalChannelIds(selfMember) {
    const arr = this.getChannels(selfMember)[VOCAL];
    return arr.map((channel) => channel.channel.id);
  }
  getDirectoryChannelIds(guildId) {
    let mapped;
    if (closure_28[guildId] != null) {
      mapped = arr.map((channel) => channel.channel.id);
    }
    if (mapped == null) {
      mapped = closure_31;
    }
    return mapped;
  }
  hasSelectableChannel(id, arg1) {
    const selectableChannelIds = this.getSelectableChannelIds(id);
    return selectableChannelIds.includes(arg1);
  }
  hasElevatedPermissions(arg0) {
    return closure_26[arg0] || false;
  }
  hasChannels(arg0) {
    return this.getChannels(arg0).count > 0;
  }
  hasCategories(guild_id) {
    return this.getChannels(guild_id)[ChannelTypes.GUILD_CATEGORY].length > 1;
  }
  getTextChannelNameDisambiguations(guildId) {
    let tmp;
    if (null != guildId) {
      let tmp3 = closure_25[guildId];
      if (tmp3 == null) {
        tmp3 = closure_32;
      }
      tmp = tmp3;
    } else {
      tmp = closure_32;
    }
    return tmp;
  }
}
const prototype = GuildChannelStore.prototype;
GuildChannelStore.displayName = "GuildChannelStore";
let obj4 = {
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
      if (null == closure_24[guildId]) {
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
  GUILD_DELETE: function handleGuildDelete(guild) {
    const id = guild.guild.id;
    delete closure_24[id];
    delete closure_25[id];
    delete closure_26[id];
    delete closure_28[id];
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
    let flag;
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
        flag = flag2;
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
    const tmp2 = null != basicChannel && null != basicChannel.guild_id;
    if (tmp2) {
      rebuildGuildChannels(basicChannel.guild_id);
    }
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    let sessionId;
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
          closure_1_24[guildId] = undefined;
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
};
const guildChannelStore = new GuildChannelStore(DispatcherDefault, obj4);
const result = size.fileFinishedImporting("stores/GuildChannelStore.tsx");

export default guildChannelStore;
export const GUILD_SELECTABLE_CHANNELS_KEY = "SELECTABLE";
export const GUILD_VOCAL_CHANNELS_KEY = "VOCAL";

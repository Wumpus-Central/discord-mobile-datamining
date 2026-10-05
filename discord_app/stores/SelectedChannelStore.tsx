// === Module 2103: SelectedChannelStore ===

// Module 2103 (SelectedChannelStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage3 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import router_utils from "router_utils" /* 1112 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import isAccessibleNonStaticChannelPathDefault from "isAccessibleNonStaticChannelPath" /* 6818 */;
import GatedChannelStore from "GatedChannelStore" /* 2104 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildStore from "GuildStore" /* 2074 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, basicChannel, c4, c5, lastChannelFollowingDestination, lastConnectedTime, selectedVoiceChannelId, set2;

let closure_12;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let map1;
function handleConnectionOpen(sessionId) {
  let c0;
  let c8;
  let iter;
  sessionId = sessionId.sessionId;
  if (null != selectedVoiceChannelId) {
    const channel = ChannelStore.getChannel(selectedVoiceChannelId);
    let tmp3 = null != channel;
    if (tmp3) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        const can = PermissionStore.can;
        const obj2 = BigFlagUtilsAll;
        isPrivateResult = can(obj2.combine(constants2.VIEW_CHANNEL, constants2.CONNECT), channel);
      }
      tmp3 = isPrivateResult;
    }
    if (!tmp3) {
      selectedVoiceChannelId = null;
    }
  }
  _require = false;
  const guildsArray = GuildStore.getGuildsArray();
  const obj3 = _modDef12;
  obj3.each(selectedChannelIds, (channelId, arg1) => {
    let tmp = null != channelId;
    if (tmp) {
      tmp = ChannelStore.hasChannel(channelId) || channelId === c6 || set.has(channelId) || isGuildHomeChannel(channelId);
      const hasChannelResult = ChannelStore.hasChannel(channelId) || channelId === c6 || set.has(channelId) || isGuildHomeChannel(channelId);
    }
    if (!tmp) {
      delete selectedChannelIds[arg1];
      delete closure_28[arg1];
      c0 = true;
    }
  });
  const obj4 = _modDef12;
  obj4.each(mostRecentSelectedTextChannelIds, (arg0, arg1) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = ChannelStore.hasChannel(arg0) || set.has(arg0);
      const hasChannelResult = ChannelStore.hasChannel(arg0) || set.has(arg0);
    }
    if (!tmp) {
      delete mostRecentSelectedTextChannelIds[arg1];
      c0 = true;
    }
  });
  const item = guildsArray.forEach((id) => {
    if (null == mostRecentSelectedTextChannelIds[id.id]) {
      id = id.id;
      if (null != id) {
        if (null != closure_27[id.id]) {
          if (mostRecentSelectedTextChannelIds[id] !== closure_27[id.id]) {
            let guildId;
            channel = channel.getChannel(tmp);
            const tmp4 = null != channel && closure_1_12(channel.type);
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            let tmp7 = !tmp4;
            if (tmp4) {
              tmp7 = guildId !== id;
            }
            if (!tmp7) {
              mostRecentSelectedTextChannelIds[id] = closure_27[id.id];
            }
          }
        }
      }
    }
  });
  let tmp14 = null != lastConnectedTime;
  if (tmp14) {
    const _Date = Date;
    tmp14 = Date.now() - lastConnectedTime >= 300000;
  }
  if (tmp14) {
    selectedVoiceChannelId = null;
    _require = true;
  }
  const tmp17 = _require;
  if (tmp17) {
    const Storage = require("Storage").Storage;
    const obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: iter.value() };
    set = Storage.set;
    const obj6 = _modDef12(selectedChannelIds);
    const values = obj6.values();
    const concat = values.concat;
    const tmp9Result = _modDef12;
    const combined = concat(tmp9Result.values(mostRecentSelectedTextChannelIds));
    const found = combined.filter(require("GlobalUtils").isNotNullish);
    const uniqResult = found.uniq();
    iter = uniqResult.filter((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let hasItem = set2.has(item);
      if (!hasItem) {
        const hasItem1 = null != basicChannel && set.has(basicChannel.type);
        hasItem = hasItem1;
      }
      return hasItem;
    });
    const result = set(SelectedChannelStore_str, obj);
  }
}
function navigateAwayFromChannel(id, guild_id, id2) {
  let channelId;
  let iter;
  let tmp9;
  let flag = hasItem;
  if (hasItem === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = true;
  }
  set.delete(id);
  let tmp2 = guild_id;
  if (null == guild_id) {
    const guildId = SelectedGuildStore.getGuildId();
    const _String = String;
    tmp2 = guild_id;
    if (selectedChannelIds[String(undefined, guildId)] === id) {
      tmp2 = guildId;
    }
  }
  let tmp7 = null;
  if (null != GuildStore.getGuild(tmp2)) {
    tmp7 = tmp2;
  }
  let flag3 = false;
  if (channelId === id) {
    channelId = null;
    flag3 = true;
  }
  const StringResult = String(tmp7);
  if (!flag) {
    id = undefined;
    if (null != StringResult) {
      const defaultChannel = GuildChannelStore.getDefaultChannel(StringResult);
      if (null != defaultChannel) {
        id = defaultChannel.id;
      }
    }
    tmp9 = id;
  } else {
    tmp9 = id2;
  }
  if (selectedChannelIds[StringResult] === id) {
    selectedChannelIds[StringResult] = tmp9;
    flag3 = true;
  }
  const tmp14 = null != tmp7 && mostRecentSelectedTextChannelIds[tmp7] === id;
  if (tmp14) {
    delete mostRecentSelectedTextChannelIds[tmp7];
    flag3 = true;
  }
  let tmp16 = SelectedGuildStore.getGuildId() === tmp7;
  if (tmp16) {
    tmp16 = flag2 && NavigationRouteUtils.getSelectedChannelFromRoute() === id;
    const tmp17 = flag2 && NavigationRouteUtils.getSelectedChannelFromRoute() === id;
  }
  if (tmp16) {
    const obj = router_utils;
    obj.replaceWith(closure_24.CHANNEL(tmp2, tmp9));
  }
  if (flag3) {
    const Storage = Storage3.Storage;
    const obj2 = { selectedChannelId, selectedVoiceChannelId: channelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: iter.value() };
    const obj3 = _modDef12(selectedChannelIds);
    const values = obj3.values();
    const concat = values.concat;
    const obj4 = _modDef12;
    const combined = concat(obj4.values(mostRecentSelectedTextChannelIds));
    const found = combined.filter(GlobalUtils.isNotNullish);
    const uniqResult = found.uniq();
    iter = uniqResult.filter((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let hasItem = set2.has(item);
      if (!hasItem) {
        const hasItem1 = null != basicChannel && set.has(basicChannel.type);
        hasItem = hasItem1;
      }
      return hasItem;
    });
    const result = set(SelectedChannelStore_str, obj2);
  }
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  navigateAwayFromChannel(channel.id, channel.guild_id, channel.parent_id, "THREAD_DELETE" === channel.type);
}
function navigateAwayIfInaccessible(nextResult) {
  const result = nextResult.isScheduledForDeletion() || !isAccessibleNonStaticChannelPathDefault(nextResult);
  if (result) {
    const hasItem = map1.has(nextResult.type);
    let channel = null;
    if (hasItem) {
      channel = ChannelStore.getChannel(nextResult.parent_id);
    }
    let id = null;
    if (null != channel) {
      const result1 = channel.isScheduledForDeletion() || !isAccessibleNonStaticChannelPathDefault(channel);
      id = null;
      if (!result1) {
        id = channel.id;
      }
    }
    navigateAwayFromChannel(nextResult.id, nextResult.guild_id, id, hasItem, false);
    return true;
  } else {
    return false;
  }
}
function navigateAwayFromSelectedIfInaccessible(guildId) {
  const channel = ChannelStore.getChannel(selectedChannelIds[String(undefined, guildId)]);
  let tmp = null != channel;
  if (tmp) {
    const result = channel.isScheduledForDeletion() || !isAccessibleNonStaticChannelPathDefault(channel);
    let flag = false;
    if (result) {
      const hasItem = map1.has(channel.type);
      let channel1 = null;
      if (hasItem) {
        channel1 = ChannelStore.getChannel(channel.parent_id);
      }
      let id = null;
      if (null != channel1) {
        const result1 = channel1.isScheduledForDeletion() || !isAccessibleNonStaticChannelPathDefault(channel1);
        id = null;
        if (!result1) {
          id = channel1.id;
        }
      }
      navigateAwayFromChannel(channel.id, channel.guild_id, id, hasItem, false);
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}
function handleGuildRoleChange(guildId) {
  return navigateAwayFromSelectedIfInaccessible(guildId.guildId);
}
({ isGuildTextChannelType: closure_12, THREAD_CHANNEL_TYPES: map1 } = ChannelRecord);
({ ChannelTypes: closure_21, ME: closure_22, Permissions: closure_23, Routes: closure_24 } = Constants);
const isGuildHomeChannel = ChannelConstants.isGuildHomeChannel;
const SelectedChannelStore_str = "SelectedChannelStore";
let selectedChannelIds = {};
let closure_28 = {};
let mostRecentSelectedTextChannelIds = {};
let set = new Set();
const Store = get_initializedDefault.Store;
class SelectedChannelStore extends Store {
  initialize() {
    let channelId;
    let closure_1_9;
    let closure_7;
    const Storage = Storage3.Storage;
    let value = Storage.get(SelectedChannelStore_str);
    if (value == null) {
      value = { selectedChannelId, selectedVoiceChannelId: channelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds };
      const obj = { selectedChannelId, selectedVoiceChannelId: channelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds };
    }
    if (null != value.knownThreadIds) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      new Set(value.knownThreadIds);
    }
    ({ selectedVoiceChannelId: channelId, lastChannelFollowingDestination: closure_7, lastConnectedTime: closure_1_9, mostRecentSelectedTextChannelIds } = value);
    if (mostRecentSelectedTextChannelIds == null) {
      mostRecentSelectedTextChannelIds = {};
    }
    if (null != value.selectedChannelIds) {
      selectedChannelIds = value.selectedChannelIds;
    }
    this.mustEmitChanges((type) => "CONNECTION_OPEN" !== type.type && "VOICE_STATE_UPDATES" !== type.type);
    this.waitFor(AuthenticationStore, ChannelStore, GatedChannelStore, GuildChannelStore, GuildStore, MediaEngineStore, PermissionStore, SelectedGuildStore);
  }
  getChannelId(arg0) {
    let tmp6;
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    let guildId = arg0;
    let tmp2 = null;
    if (arg0 !== afk) {
      if (guildId == null) {
        guildId = SelectedGuildStore.getGuildId();
      }
      if (guildId == null) {
        guildId = null;
      }
      tmp2 = guildId;
    }
    const StringResult = String(tmp2);
    if (flag) {
      let tmp7 = tmp5;
      if (selectedChannelIds[StringResult] == null) {
        let id;
        if (null != StringResult) {
          const defaultChannel = GuildChannelStore.getDefaultChannel(StringResult);
          if (null != defaultChannel) {
            id = defaultChannel.id;
          }
        }
        tmp7 = id;
      }
      tmp6 = tmp7;
    } else {
      tmp6 = tmp5;
    }
    return tmp6;
  }
  getVoiceChannelId() {
    let tmp = null;
    if (MediaEngineStore.isSupported()) {
      tmp = channelId;
    }
    return tmp;
  }
  getMostRecentSelectedTextChannelId(guildId) {
    let tmp = null;
    if (null != guildId) {
      let tmp3 = mostRecentSelectedTextChannelIds[guildId];
      if (tmp3 == null) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  }
  getCurrentlySelectedChannelId(guildId) {
    let tmp;
    if (null != guildId) {
      tmp = selectedChannelIds[guildId];
    } else {
      tmp = c6;
    }
    return tmp;
  }
  getLastSelectedChannelId(arg0) {
    let tmp;
    if (null != arg0) {
      tmp = closure_28[arg0];
    } else {
      tmp = c5;
    }
    return tmp;
  }
  getLastSelectedChannels(arg0) {
    return closure_28[arg0];
  }
  getLastChannelFollowingDestination() {
    return lastChannelFollowingDestination;
  }
}
const prototype = SelectedChannelStore.prototype;
SelectedChannelStore.displayName = "SelectedChannelStore";
let obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(selectedChannelId) {
    let c8;
    let selectedGuildId;
    ({ sessionId: c4, selectedVoiceChannelId: c8 } = selectedChannelId);
    let closure_27 = {};
    closure_28 = {};
    selectedChannelId = selectedChannelId.selectedChannelId;
    ({ selectedChannelId: closure_27[selectedChannelId.selectedGuildId], selectedGuildId } = selectedChannelId);
    let tmp = selectedChannelId;
    if (null != selectedGuildId) {
      if (null != tmp) {
        if (mostRecentSelectedTextChannelIds[selectedGuildId] !== tmp) {
          let guildId;
          let channel = ChannelStore.getChannel(tmp);
          let tmp4 = null != channel && closure_12(channel.type);
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          let tmp7 = !tmp4;
          if (tmp4) {
            tmp7 = guildId !== selectedGuildId;
          }
          if (!tmp7) {
            mostRecentSelectedTextChannelIds[selectedGuildId] = tmp;
          }
        }
      }
    }
    let c0 = false;
    const guildsArray = GuildStore.getGuildsArray();
    const obj2 = _modDef12;
    obj2.each(closure_27, (channelId, arg1) => {
      let tmp = null != channelId;
      if (tmp) {
        tmp = ChannelStore.hasChannel(channelId) || channelId === c6 || set.has(channelId) || isGuildHomeChannel(channelId);
        const hasChannelResult = ChannelStore.hasChannel(channelId) || channelId === c6 || set.has(channelId) || isGuildHomeChannel(channelId);
      }
      if (!tmp) {
        delete selectedChannelIds[arg1];
        delete closure_28[arg1];
        c0 = true;
      }
    });
    const obj3 = _modDef12;
    obj3.each(mostRecentSelectedTextChannelIds, (arg0, arg1) => {
      let tmp = null != arg0;
      if (tmp) {
        tmp = ChannelStore.hasChannel(arg0) || set.has(arg0);
        const hasChannelResult = ChannelStore.hasChannel(arg0) || set.has(arg0);
      }
      if (!tmp) {
        delete mostRecentSelectedTextChannelIds[arg1];
        c0 = true;
      }
    });
    const item = guildsArray.forEach((id) => {
      if (null == mostRecentSelectedTextChannelIds[id.id]) {
        id = id.id;
        if (null != id) {
          if (null != closure_27[id.id]) {
            if (mostRecentSelectedTextChannelIds[id] !== closure_27[id.id]) {
              let guildId;
              channel = channel.getChannel(tmp);
              const tmp4 = null != channel && closure_1_12(channel.type);
              if (channel != null) {
                guildId = channel.getGuildId();
              }
              let tmp7 = !tmp4;
              if (tmp4) {
                tmp7 = guildId !== id;
              }
              if (!tmp7) {
                mostRecentSelectedTextChannelIds[id] = closure_27[id.id];
              }
            }
          }
        }
      }
    });
    let tmp12 = null != closure_9;
    if (tmp12) {
      const _Date = Date;
      tmp12 = Date.now() - closure_9 >= 300000;
    }
    if (tmp12) {
      c8 = null;
      c0 = true;
    }
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    c4 = null;
  },
  CHANNEL_SELECT: function handleChannelSelect(arg0) {
    let channelId;
    let guildId;
    let iter;
    ({ guildId, channelId } = arg0);
    if (undefined === guildId) {
      return false;
    } else {
      if (null == channelId) {
        let id;
        if (null != guildId) {
          const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
          if (null != defaultChannel) {
            id = defaultChannel.id;
          }
        }
        channelId = id;
      }
      const tmp5 = null != selectedChannelId && channelId !== selectedChannelId;
      if (tmp5) {
        c5 = selectedChannelId;
      }
      selectedChannelId = channelId;
      if (null != guildId) {
        if (null != channelId) {
          if (mostRecentSelectedTextChannelIds[guildId] !== channelId) {
            let guildId1;
            const channel = ChannelStore.getChannel(channelId);
            const tmp10 = null != channel && closure_12(channel.type);
            if (channel != null) {
              guildId1 = channel.getGuildId();
            }
            let tmp13 = !tmp10;
            if (tmp10) {
              tmp13 = guildId1 !== guildId;
            }
            if (!tmp13) {
              mostRecentSelectedTextChannelIds[guildId] = channelId;
            }
          }
        }
      }
      const _String = String;
      if (selectedChannelIds[String(undefined, guildId)] !== channelId) {
        const _String2 = String;
        const _String3 = String;
        const StringResult = String(guildId);
        closure_28[StringResult] = selectedChannelIds[String(undefined, guildId)];
        const _String4 = String;
        selectedChannelIds[String(guildId)] = selectedChannelId;
      }
      const Storage = Storage3.Storage;
      const obj = { selectedChannelId, selectedVoiceChannelId: channelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: iter.value() };
      set = Storage.set;
      const obj3 = _modDef12(selectedChannelIds);
      const values = obj3.values();
      const concat = values.concat;
      const obj4 = _modDef12;
      const combined = concat(obj4.values(mostRecentSelectedTextChannelIds));
      const found = combined.filter(GlobalUtils.isNotNullish);
      const uniqResult = found.uniq();
      iter = uniqResult.filter((item) => {
        basicChannel = basicChannel.getBasicChannel(item);
        let hasItem = set2.has(item);
        if (!hasItem) {
          const hasItem1 = null != basicChannel && set.has(basicChannel.type);
          hasItem = hasItem1;
        }
        return hasItem;
      });
      const result = set(SelectedChannelStore_str, obj);
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const type = channel.type;
    if (constants.GUILD_ANNOUNCEMENT === type) {
      const guild_id = channel.guild_id;
      const tmp3 = null != guild_id && null == mostRecentSelectedTextChannelIds[guild_id];
      if (tmp3) {
        mostRecentSelectedTextChannelIds[guild_id] = channel.id;
      }
      if (null != guild_id) {
        if (null == selectedChannelIds[guild_id]) {
          let id;
          if (null != guild_id) {
            const defaultChannel = GuildChannelStore.getDefaultChannel(guild_id);
            if (null != defaultChannel) {
              id = defaultChannel.id;
            }
          }
          selectedChannelIds[guild_id] = id;
          return true;
        }
      }
    }
    return false;
  },
  CHANNEL_DELETE: handleChannelDelete,
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    set = new Set();
    let flag = false;
    const iter = channels[Symbol.iterator]();
    const nextResult = iter.next();
    const tmp = set;
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = navigateAwayIfInaccessible(nextResult) || flag;
      flag = tmp5;
      let addResult = set.add(tmp3.guild_id);
      continue;
    }
    for (const item10029 of tmp) {
      let tmp9 = navigateAwayFromSelectedIfInaccessible(item10029) || flag;
      flag = tmp9;
      continue;
    }
    return flag;
  },
  THREAD_DELETE: handleChannelDelete,
  GUILD_CREATE: function handleGuildCreate(guild) {
    let iter;
    guild = guild.guild;
    if (null == selectedChannelIds[guild.id]) {
      const id2 = guild.id;
      let id1;
      if (null != id2) {
        const defaultChannel = GuildChannelStore.getDefaultChannel(id2);
        if (null != defaultChannel) {
          id1 = defaultChannel.id;
        }
      }
      selectedChannelIds[guild.id] = id1;
      const id = guild.id;
      if (null != id) {
        if (null != id1) {
          if (mostRecentSelectedTextChannelIds[id] !== id1) {
            let guildId;
            const channel = ChannelStore.getChannel(id1);
            const tmp7 = null != channel && closure_12(channel.type);
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            let tmp10 = !tmp7;
            if (tmp7) {
              tmp10 = guildId !== id;
            }
            if (!tmp10) {
              mostRecentSelectedTextChannelIds[id] = id1;
            }
          }
        }
      }
      const Storage = Storage3.Storage;
      const obj = { selectedChannelId, selectedVoiceChannelId: channelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: iter.value() };
      set = Storage.set;
      const obj3 = _modDef12(selectedChannelIds);
      const values = obj3.values();
      const concat = values.concat;
      const obj4 = _modDef12;
      const combined = concat(obj4.values(mostRecentSelectedTextChannelIds));
      const found = combined.filter(GlobalUtils.isNotNullish);
      const uniqResult = found.uniq();
      iter = uniqResult.filter((item) => {
        basicChannel = basicChannel.getBasicChannel(item);
        let hasItem = set2.has(item);
        if (!hasItem) {
          const hasItem1 = null != basicChannel && set.has(basicChannel.type);
          hasItem = hasItem1;
        }
        return hasItem;
      });
      const result = set(SelectedChannelStore_str, obj);
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    let channelId;
    let iter;
    guild = guild.guild;
    const id = guild.id;
    const unavailable = guild.unavailable;
    if (channelId === selectedChannelIds[id]) {
      channelId = null;
    }
    if (unavailable) {
      return false;
    } else {
      delete mostRecentSelectedTextChannelIds[id];
      delete selectedChannelIds[id];
      const Storage = Storage3.Storage;
      const obj = { selectedChannelId, selectedVoiceChannelId: channelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: iter.value() };
      set = Storage.set;
      const obj2 = _modDef12(selectedChannelIds);
      const values = obj2.values();
      const concat = values.concat;
      const obj3 = _modDef12;
      const combined = concat(obj3.values(mostRecentSelectedTextChannelIds));
      const found = combined.filter(GlobalUtils.isNotNullish);
      const uniqResult = found.uniq();
      iter = uniqResult.filter((item) => {
        basicChannel = basicChannel.getBasicChannel(item);
        let hasItem = set2.has(item);
        if (!hasItem) {
          const hasItem1 = null != basicChannel && set.has(basicChannel.type);
          hasItem = hasItem1;
        }
        return hasItem;
      });
      const result = set(SelectedChannelStore_str, obj);
    }
  },
  GUILD_ROLE_UPDATE: handleGuildRoleChange,
  GUILD_ROLE_DELETE: handleGuildRoleChange,
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(guildId) {
    guildId = guildId.guildId;
    const tmp = guildId.user.id === AuthenticationStore.getId() && navigateAwayFromSelectedIfInaccessible(guildId);
    return tmp;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    let iter;
    channelId = channelId.channelId;
    if (null == channelId) {
      const channel = ChannelStore.getChannel(channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      const tmp2 = null != guild_id && guild_id !== SelectedGuildStore.getGuildId() && selectedChannelIds[guild_id] === channelId;
      if (tmp2) {
        let id;
        if (null != guild_id) {
          const defaultChannel = GuildChannelStore.getDefaultChannel(guild_id);
          if (null != defaultChannel) {
            id = defaultChannel.id;
          }
        }
        selectedChannelIds[guild_id] = id;
      }
    }
    const Storage = Storage3.Storage;
    const obj = { selectedChannelId, selectedVoiceChannelId: channelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: iter.value() };
    set = Storage.set;
    const obj2 = _modDef12(selectedChannelIds);
    const values = obj2.values();
    const concat = values.concat;
    const obj3 = _modDef12;
    const combined = concat(obj3.values(mostRecentSelectedTextChannelIds));
    const found = combined.filter(GlobalUtils.isNotNullish);
    const uniqResult = found.uniq();
    iter = uniqResult.filter((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let hasItem = set2.has(item);
      if (!hasItem) {
        const hasItem1 = null != basicChannel && set.has(basicChannel.type);
        hasItem = hasItem1;
      }
      return hasItem;
    });
    const result = set(SelectedChannelStore_str, obj);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    let c10;
    let id;
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, sessionId) => {
      let interval;
      let iter;
      let iter2;
      if (sessionId.sessionId === closure_1_4) {
        const _clearInterval = clearInterval;
        clearInterval(interval);
        const channel = ChannelStore.getChannel(selectedVoiceChannelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        const tmp27 = sessionId.guildId !== guildId && null == sessionId.channelId;
        if (!tmp27) {
          selectedVoiceChannelId = sessionId.channelId;
        }
        const _Date = Date;
        lastConnectedTime = Date.now();
        if (null != selectedVoiceChannelId) {
          const _setInterval = setInterval;
          interval = setInterval(() => {
            let iter;
            lastConnectedTime = Date.now();
            const Storage = closure_1_0(closure_1_3[11]).Storage;
            set = Storage.set;
            const obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: iter.value() };
            const obj2 = closure_1_1(closure_1_3[12])(selectedChannelIds);
            const values = obj2.values();
            const concat = values.concat;
            const obj3 = closure_1_1(closure_1_3[12]);
            const combined = concat(obj3.values(mostRecentSelectedTextChannelIds));
            const found = combined.filter(closure_1_0(closure_1_3[13]).isNotNullish);
            const uniqResult = found.uniq();
            iter = uniqResult.filter((item) => {
              basicChannel = basicChannel.getBasicChannel(item);
              let hasItem = set2.has(item);
              if (!hasItem) {
                const hasItem1 = null != basicChannel && set.has(basicChannel.type);
                hasItem = hasItem1;
              }
              return hasItem;
            });
            const result = set(closure_1_26, obj);
          }, 60000);
        }
        const Storage2 = require("Storage").Storage;
        let obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: iter2.value() };
        set2 = Storage2.set;
        const obj8 = _modDef12(selectedChannelIds);
        let values = obj8.values();
        const concat2 = values.concat;
        const obj9 = _modDef12;
        const concat2Result = concat2(obj9.values(mostRecentSelectedTextChannelIds));
        let found = concat2Result.filter(require("GlobalUtils").isNotNullish);
        let uniqResult = found.uniq();
        iter2 = uniqResult.filter((item) => {
          basicChannel = basicChannel.getBasicChannel(item);
          let hasItem = set2.has(item);
          if (!hasItem) {
            const hasItem1 = null != basicChannel && set.has(basicChannel.type);
            hasItem = hasItem1;
          }
          return hasItem;
        });
        set2(SelectedChannelStore_str, obj);
      } else if (sessionId.userId !== id.getId()) {
        return acc;
      } else {
        const _clearInterval2 = clearInterval;
        clearInterval(interval);
        interval = undefined;
        lastConnectedTime = 0;
        const channel1 = ChannelStore.getChannel(selectedVoiceChannelId);
        let guildId1;
        if (channel1 != null) {
          guildId1 = channel1.getGuildId();
        }
        const channel2 = ChannelStore.getChannel(sessionId.channelId);
        let guildId2;
        if (channel2 != null) {
          guildId2 = channel2.getGuildId();
        }
        const tmp3 = null != guildId1 && guildId2 === guildId1 || selectedVoiceChannelId === sessionId.channelId;
        if (tmp3) {
          selectedVoiceChannelId = null;
        }
        let Storage = require("Storage").Storage;
        let obj2 = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: iter.value() };
        set = Storage.set;
        let obj3 = _modDef12(selectedChannelIds);
        const values2 = obj3.values();
        let concat = values2.concat;
        const obj4 = _modDef12;
        let combined = concat(obj4.values(mostRecentSelectedTextChannelIds));
        const found1 = combined.filter(require("GlobalUtils").isNotNullish);
        const uniqResult1 = found1.uniq();
        iter = uniqResult1.filter((item) => {
          basicChannel = basicChannel.getBasicChannel(item);
          let hasItem = set2.has(item);
          if (!hasItem) {
            const hasItem1 = null != basicChannel && set.has(basicChannel.type);
            hasItem = hasItem1;
          }
          return hasItem;
        });
        let result = set(SelectedChannelStore_str, obj2);
      }
      return true;
    }, false);
  },
  CHANNEL_FOLLOWER_CREATED: function handleChannelFollowingDestinationUpdate(channelId) {
    let iter;
    channelId = channelId.channelId;
    let tmp = null != lastChannelFollowingDestination;
    const guildId = channelId.guildId;
    if (tmp) {
      tmp = channelId === lastChannelFollowingDestination.channelId;
    }
    if (!tmp) {
      lastChannelFollowingDestination = { channelId, guildId };
      const obj = { channelId, guildId };
      const Storage = Storage3.Storage;
      const obj2 = { selectedChannelId, selectedVoiceChannelId: channelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: iter.value() };
      set = Storage.set;
      const obj3 = _modDef12(selectedChannelIds);
      const values = obj3.values();
      const concat = values.concat;
      const obj4 = _modDef12;
      const combined = concat(obj4.values(mostRecentSelectedTextChannelIds));
      const found = combined.filter(GlobalUtils.isNotNullish);
      const uniqResult = found.uniq();
      iter = uniqResult.filter((item) => {
        basicChannel = basicChannel.getBasicChannel(item);
        let hasItem = set2.has(item);
        if (!hasItem) {
          const hasItem1 = null != basicChannel && set.has(basicChannel.type);
          hasItem = hasItem1;
        }
        return hasItem;
      });
      const result = set(SelectedChannelStore_str, obj2);
    }
  },
  LOGOUT: function handleLogout() {
    let closure_27 = {};
    let c6 = null;
    c5 = undefined;
    mostRecentSelectedTextChannelIds = {};
    let closure_7 = {};
    const channelId = null;
    const Storage = Storage3.Storage;
    Storage.remove(SelectedChannelStore_str);
  }
};
const selectedChannelStore = new SelectedChannelStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/SelectedChannelStore.tsx");

export default selectedChannelStore;
export const findFirstVoiceChannelId = function findFirstVoiceChannelId(id) {
  const mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(id);
  const arr = _modDef12;
  const found = arr.find(mutableBasicGuildChannelsForGuild, (type) => type.type === constants.GUILD_VOICE);
  id = undefined;
  if (found != null) {
    id = found.id;
  }
  return id;
};
export { handleConnectionOpen };
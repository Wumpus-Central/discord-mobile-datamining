// === Module 2011: SelectedChannelStore ===

// Module 2011 (SelectedChannelStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import Storage3 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ChannelConstants from "ChannelConstants" /* 1964 */;
import ChannelRecord from "ChannelRecord" /* 1961 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

function handleConnectionOpen(sessionId) {
  sessionId = sessionId.sessionId;
  if (null != selectedVoiceChannelId) {
    const channel = ChannelStore.getChannel(selectedVoiceChannelId);
    let tmp3 = null != channel;
    if (tmp3) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = PermissionStore.can(BigFlagUtilsAll.combine(constants2.VIEW_CHANNEL, constants2.CONNECT), channel);
      }
      tmp3 = isPrivateResult;
    }
    if (!tmp3) {
      selectedVoiceChannelId = null;
    }
  }
  _require = false;
  const guildsArray = GuildStore.getGuildsArray();
  _modDef12.each(selectedChannelIds, (channelId, arg1) => {
    let tmp4 = null != channelId;
    if (tmp4) {
      let hasChannelResult = ChannelStore.hasChannel(channelId);
      if (!hasChannelResult) {
        hasChannelResult = channelId === c6;
      }
      if (!hasChannelResult) {
        hasChannelResult = set.has(channelId);
      }
      if (!hasChannelResult) {
        hasChannelResult = isGuildHomeChannel(channelId);
      }
      tmp4 = hasChannelResult;
    }
    if (!tmp4) {
      delete tmp3[tmp2];
      delete tmp[tmp2];
      c0 = true;
    }
  });
  _modDef12.each(mostRecentSelectedTextChannelIds, (arg0, arg1) => {
    let tmp3 = null != arg0;
    if (tmp3) {
      let hasChannelResult = ChannelStore.hasChannel(arg0);
      if (!hasChannelResult) {
        hasChannelResult = set.has(arg0);
      }
      tmp3 = hasChannelResult;
    }
    if (!tmp3) {
      delete tmp[tmp2];
      c0 = true;
    }
  });
  const item = guildsArray.forEach((id) => {
    if (null == dependencyMap[id.id]) {
      id = id.id;
      if (null != id) {
        if (null != tmp) {
          if (dependencyMap[id] !== tmp) {
            channel = channel.getChannel(tmp);
            let tmp4 = null != channel;
            if (tmp4) {
              tmp4 = closure_1_11(channel.type);
            }
            if (channel != null) {
              const guildId = channel.getGuildId();
            }
            let tmp7 = !tmp4;
            if (tmp4) {
              tmp7 = guildId !== id;
            }
            if (!tmp7) {
              dependencyMap[id] = tmp;
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
  if (_require) {
    const Storage = require("Storage").Storage;
    const obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: null };
    const values = tmp9(12)(selectedChannelIds).values();
    const obj6 = tmp9(12)(selectedChannelIds);
    const combined = values.concat(tmp9(12).values(mostRecentSelectedTextChannelIds));
    const found = combined.filter(require("GlobalUtils").isNotNullish);
    const tmp9Result = tmp9(12);
    const uniqResult = found.uniq();
    obj.knownThreadIds = found.uniq().filter((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let hasItem = set2.has(item);
      if (!hasItem) {
        let hasItem1 = null != basicChannel;
        if (hasItem1) {
          hasItem1 = set.has(basicChannel.type);
        }
        hasItem = hasItem1;
      }
      return hasItem;
    }).value();
    const result = Storage.set(SelectedChannelStore, obj);
    const iter = found.uniq().filter((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let hasItem = set2.has(item);
      if (!hasItem) {
        let hasItem1 = null != basicChannel;
        if (hasItem1) {
          hasItem1 = set.has(basicChannel.type);
        }
        hasItem = hasItem1;
      }
      return hasItem;
    });
  }
}
function navigateAwayFromChannel(id, guild_id) {
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
  const guild = GuildStore.getGuild(tmp2);
  let flag = false;
  if (selectedVoiceChannelId === id) {
    selectedVoiceChannelId = null;
    flag = true;
  }
  if (flag) {
    const Storage = Storage3.Storage;
    const obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: null };
    const values = _modDef12(selectedChannelIds).values();
    const obj2 = _modDef12(selectedChannelIds);
    const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
    const found = combined.filter(GlobalUtils.isNotNullish);
    const uniqResult = found.uniq();
    obj.knownThreadIds = found.uniq().filter((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let hasItem = set2.has(item);
      if (!hasItem) {
        let hasItem1 = null != basicChannel;
        if (hasItem1) {
          hasItem1 = set.has(basicChannel.type);
        }
        hasItem = hasItem1;
      }
      return hasItem;
    }).value();
    const result = Storage.set(SelectedChannelStore, obj);
    const iter = found.uniq().filter((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let hasItem = set2.has(item);
      if (!hasItem) {
        let hasItem1 = null != basicChannel;
        if (hasItem1) {
          hasItem1 = set.has(basicChannel.type);
        }
        hasItem = hasItem1;
      }
      return hasItem;
    });
  }
}
function handleChannelDelete(arg0) {
  ({ type, channel } = arg0);
  navigateAwayFromChannel(channel.id, channel.guild_id, channel.parent_id);
}
({ isGuildTextChannelType: closure_11, THREAD_CHANNEL_TYPES: closure_12 } = ChannelRecord);
({ ChannelTypes: closure_20, ME: closure_21, Permissions: closure_22, Routes } = Constants);
const isGuildHomeChannel = ChannelConstants.isGuildHomeChannel;
const SelectedChannelStore = "SelectedChannelStore";
let selectedChannelIds = {};
const dependencyMap = {};
const mostRecentSelectedTextChannelIds = {};
let set = new Set();
const Store = initializeDefault.Store;
class SelectedChannelStore extends Store {
}
const prototype = SelectedChannelStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage3.Storage;
  value = Storage.get(SelectedChannelStore);
  if (value == null) {
    const obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds };
    value = obj;
  }
  if (null != value.knownThreadIds) {
    const _Set = Set;
    set = new Set(value.knownThreadIds);
  }
  ({ selectedVoiceChannelId: c8, lastChannelFollowingDestination: closure_7, lastConnectedTime: closure_1_9, mostRecentSelectedTextChannelIds } = value);
  if (mostRecentSelectedTextChannelIds == null) {
    mostRecentSelectedTextChannelIds = {};
  }
  if (null != value.selectedChannelIds) {
    selectedChannelIds = value.selectedChannelIds;
  }
  this.mustEmitChanges((type) => {
    let tmp = "CONNECTION_OPEN" !== type.type;
    if (tmp) {
      tmp = "VOICE_STATE_UPDATES" !== type.type;
    }
    return tmp;
  });
  this.waitFor(AuthenticationStore, ChannelStore, GuildChannelStore, GuildStore, MediaEngineStore, PermissionStore, SelectedGuildStore);
};
prototype["getChannelId"] = function getChannelId(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let guildId = arg0;
  let tmp2 = null;
  if (arg0 !== __initData) {
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
    if (tmp5 == null) {
      let id;
      if (null != StringResult) {
        const defaultChannel = GuildChannelStore.getDefaultChannel(StringResult);
        if (null != defaultChannel) {
          id = defaultChannel.id;
        }
      }
      tmp7 = id;
    }
    let tmp6 = tmp7;
  } else {
    tmp6 = tmp5;
  }
  return tmp6;
};
prototype["getVoiceChannelId"] = function getVoiceChannelId() {
  let tmp = null;
  if (MediaEngineStore.isSupported()) {
    tmp = c8;
  }
  return tmp;
};
prototype["getMostRecentSelectedTextChannelId"] = function getMostRecentSelectedTextChannelId(guildId) {
  let tmp = null;
  if (null != guildId) {
    let tmp3 = mostRecentSelectedTextChannelIds[guildId];
    if (tmp3 == null) {
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["getCurrentlySelectedChannelId"] = function getCurrentlySelectedChannelId(guildId) {
  if (null != guildId) {
    let tmp = selectedChannelIds[guildId];
  } else {
    tmp = c6;
  }
  return tmp;
};
prototype["getLastSelectedChannelId"] = function getLastSelectedChannelId(arg0) {
  if (null != arg0) {
    let tmp = dependencyMap[arg0];
  } else {
    tmp = c5;
  }
  return tmp;
};
prototype["getLastSelectedChannels"] = function getLastSelectedChannels(arg0) {
  return dependencyMap[arg0];
};
prototype["getLastChannelFollowingDestination"] = function getLastChannelFollowingDestination() {
  return closure_7;
};
SelectedChannelStore.displayName = "SelectedChannelStore";
const selectedChannelStore = new SelectedChannelStore(DispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(selectedChannelId) {
    ({ sessionId: c4, selectedVoiceChannelId: c8 } = selectedChannelId);
    closure_25 = {};
    closure_26 = {};
    selectedChannelId = selectedChannelId.selectedChannelId;
    ({ selectedChannelId: closure_25[selectedChannelId.selectedGuildId], selectedGuildId } = selectedChannelId);
    if (null != selectedGuildId) {
      if (null != tmp) {
        if (mostRecentSelectedTextChannelIds[selectedGuildId] !== tmp) {
          let channel = ChannelStore.getChannel(tmp);
          let tmp4 = null != channel;
          if (tmp4) {
            tmp4 = closure_11(channel.type);
          }
          if (channel != null) {
            let guildId = channel.getGuildId();
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
    c0 = false;
    const guildsArray = GuildStore.getGuildsArray();
    _modDef12.each(closure_25, (channelId, arg1) => {
      let tmp4 = null != channelId;
      if (tmp4) {
        let hasChannelResult = ChannelStore.hasChannel(channelId);
        if (!hasChannelResult) {
          hasChannelResult = channelId === c6;
        }
        if (!hasChannelResult) {
          hasChannelResult = set.has(channelId);
        }
        if (!hasChannelResult) {
          hasChannelResult = isGuildHomeChannel(channelId);
        }
        tmp4 = hasChannelResult;
      }
      if (!tmp4) {
        delete tmp3[tmp2];
        delete tmp[tmp2];
        c0 = true;
      }
    });
    _modDef12.each(mostRecentSelectedTextChannelIds, (arg0, arg1) => {
      let tmp3 = null != arg0;
      if (tmp3) {
        let hasChannelResult = ChannelStore.hasChannel(arg0);
        if (!hasChannelResult) {
          hasChannelResult = set.has(arg0);
        }
        tmp3 = hasChannelResult;
      }
      if (!tmp3) {
        delete tmp[tmp2];
        c0 = true;
      }
    });
    const item = guildsArray.forEach((id) => {
      if (null == dependencyMap[id.id]) {
        id = id.id;
        if (null != id) {
          if (null != tmp) {
            if (dependencyMap[id] !== tmp) {
              channel = channel.getChannel(tmp);
              let tmp4 = null != channel;
              if (tmp4) {
                tmp4 = closure_1_11(channel.type);
              }
              if (channel != null) {
                const guildId = channel.getGuildId();
              }
              let tmp7 = !tmp4;
              if (tmp4) {
                tmp7 = guildId !== id;
              }
              if (!tmp7) {
                dependencyMap[id] = tmp;
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
      let tmp5 = null != selectedChannelId;
      if (tmp5) {
        tmp5 = channelId !== selectedChannelId;
      }
      if (tmp5) {
        c5 = selectedChannelId;
      }
      selectedChannelId = channelId;
      if (null != guildId) {
        if (null != channelId) {
          if (mostRecentSelectedTextChannelIds[guildId] !== channelId) {
            const channel = ChannelStore.getChannel(channelId);
            let tmp10 = null != channel;
            if (tmp10) {
              tmp10 = closure_1_11(channel.type);
            }
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            let tmp13 = !tmp10;
            if (tmp10) {
              tmp13 = guildId !== guildId;
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
        closure_26[String(guildId)] = selectedChannelIds[String(undefined, guildId)];
        const _String4 = String;
        selectedChannelIds[String(guildId)] = selectedChannelId;
        const StringResult = String(guildId);
      }
      const Storage = Storage3.Storage;
      const obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: null };
      const values = _modDef12(selectedChannelIds).values();
      const obj3 = _modDef12(selectedChannelIds);
      const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
      const found = combined.filter(GlobalUtils.isNotNullish);
      const uniqResult = found.uniq();
      obj.knownThreadIds = found.uniq().filter((item) => {
        basicChannel = basicChannel.getBasicChannel(item);
        let hasItem = set2.has(item);
        if (!hasItem) {
          let hasItem1 = null != basicChannel;
          if (hasItem1) {
            hasItem1 = set.has(basicChannel.type);
          }
          hasItem = hasItem1;
        }
        return hasItem;
      }).value();
      const result = Storage.set(SelectedChannelStore, obj);
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = channel.channel;
    const type = channel.type;
    if (constants.GUILD_ANNOUNCEMENT === type) {
      const guild_id = channel.guild_id;
      let tmp3 = null != guild_id;
      if (tmp3) {
        tmp3 = null == mostRecentSelectedTextChannelIds[guild_id];
      }
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
  CHANNEL_UPDATES: function handleChannelUpdates(arg0) {
    const iter = arg0.channels[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp = nextResult;
      if (nextResult.isScheduledForDeletion()) {
        let hasItem = set.has(tmp.type);
        let tmp6 = navigateAwayFromChannel(tmp.id, tmp.guild_id, tmp.parent_id);
      }
      continue;
    }
  },
  THREAD_DELETE: handleChannelDelete,
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    if (null == selectedChannelIds[guild.id]) {
      const id2 = guild.id;
      let id;
      if (null != id2) {
        const defaultChannel = GuildChannelStore.getDefaultChannel(id2);
        if (null != defaultChannel) {
          id = defaultChannel.id;
        }
      }
      selectedChannelIds[guild.id] = id;
      id = guild.id;
      if (null != id) {
        if (null != id) {
          if (mostRecentSelectedTextChannelIds[id] !== id) {
            const channel = ChannelStore.getChannel(id);
            let tmp7 = null != channel;
            if (tmp7) {
              tmp7 = closure_1_11(channel.type);
            }
            if (channel != null) {
              const guildId = channel.getGuildId();
            }
            let tmp10 = !tmp7;
            if (tmp7) {
              tmp10 = guildId !== id;
            }
            if (!tmp10) {
              mostRecentSelectedTextChannelIds[id] = id;
            }
          }
        }
      }
      const Storage = Storage3.Storage;
      const obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: null };
      const values = _modDef12(selectedChannelIds).values();
      const obj3 = _modDef12(selectedChannelIds);
      const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
      const found = combined.filter(GlobalUtils.isNotNullish);
      const uniqResult = found.uniq();
      obj.knownThreadIds = found.uniq().filter((item) => {
        basicChannel = basicChannel.getBasicChannel(item);
        let hasItem = set2.has(item);
        if (!hasItem) {
          let hasItem1 = null != basicChannel;
          if (hasItem1) {
            hasItem1 = set.has(basicChannel.type);
          }
          hasItem = hasItem1;
        }
        return hasItem;
      }).value();
      const result = Storage.set(SelectedChannelStore, obj);
      const iter = found.uniq().filter((item) => {
        basicChannel = basicChannel.getBasicChannel(item);
        let hasItem = set2.has(item);
        if (!hasItem) {
          let hasItem1 = null != basicChannel;
          if (hasItem1) {
            hasItem1 = set.has(basicChannel.type);
          }
          hasItem = hasItem1;
        }
        return hasItem;
      });
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (selectedVoiceChannelId === selectedChannelIds[guild.id]) {
      selectedVoiceChannelId = null;
    }
    if (guild.unavailable) {
      return false;
    } else {
      delete tmp[tmp2];
      delete tmp[tmp2];
      const Storage = Storage3.Storage;
      const obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: null };
      const values = _modDef12(selectedChannelIds).values();
      const obj2 = _modDef12(selectedChannelIds);
      const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
      const found = combined.filter(GlobalUtils.isNotNullish);
      const uniqResult = found.uniq();
      obj.knownThreadIds = found.uniq().filter((item) => {
        basicChannel = basicChannel.getBasicChannel(item);
        let hasItem = set2.has(item);
        if (!hasItem) {
          let hasItem1 = null != basicChannel;
          if (hasItem1) {
            hasItem1 = set.has(basicChannel.type);
          }
          hasItem = hasItem1;
        }
        return hasItem;
      }).value();
      const result = Storage.set(SelectedChannelStore, obj);
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      const channel = ChannelStore.getChannel(selectedVoiceChannelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      let tmp2 = null != guild_id;
      if (tmp2) {
        tmp2 = guild_id !== SelectedGuildStore.getGuildId();
      }
      if (tmp2) {
        tmp2 = selectedChannelIds[guild_id] === selectedVoiceChannelId;
      }
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
    selectedVoiceChannelId = channelId;
    const Storage = Storage3.Storage;
    const obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: null };
    const values = _modDef12(selectedChannelIds).values();
    const obj2 = _modDef12(selectedChannelIds);
    const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
    const found = combined.filter(GlobalUtils.isNotNullish);
    const uniqResult = found.uniq();
    obj.knownThreadIds = found.uniq().filter((item) => {
      basicChannel = basicChannel.getBasicChannel(item);
      let hasItem = set2.has(item);
      if (!hasItem) {
        let hasItem1 = null != basicChannel;
        if (hasItem1) {
          hasItem1 = set.has(basicChannel.type);
        }
        hasItem = hasItem1;
      }
      return hasItem;
    }).value();
    const result = Storage.set(SelectedChannelStore, obj);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((acc, sessionId) => {
      if (sessionId.sessionId === closure_1_4) {
        const _clearInterval = clearInterval;
        clearInterval(interval);
        const channel = ChannelStore.getChannel(selectedVoiceChannelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        if (!tmp26) {
          selectedVoiceChannelId = sessionId.channelId;
        }
        const _Date = Date;
        lastConnectedTime = Date.now();
        if (null != selectedVoiceChannelId) {
          const _setInterval = setInterval;
          interval = setInterval(() => {
            lastConnectedTime = Date.now();
            const Storage = closure_1_0(510).Storage;
            const obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: null };
            const values = closure_1_1(12)(selectedChannelIds).values();
            const obj2 = closure_1_1(12)(selectedChannelIds);
            const combined = values.concat(closure_1_1(12).values(mostRecentSelectedTextChannelIds));
            const found = combined.filter(closure_1_0(1369).isNotNullish);
            const obj4 = closure_1_1(12);
            const uniqResult = found.uniq();
            obj.knownThreadIds = found.uniq().filter((item) => {
              basicChannel = basicChannel.getBasicChannel(item);
              let hasItem = set2.has(item);
              if (!hasItem) {
                let hasItem1 = null != basicChannel;
                if (hasItem1) {
                  hasItem1 = set.has(basicChannel.type);
                }
                hasItem = hasItem1;
              }
              return hasItem;
            }).value();
            const result = Storage.set(closure_1_24, obj);
          }, 60000);
        }
        const Storage2 = require("Storage").Storage;
        let obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: null };
        let values = _modDef12(selectedChannelIds).values();
        const obj9 = _modDef12(selectedChannelIds);
        tmp26 = sessionId.guildId !== guildId && null == sessionId.channelId;
        let combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
        let found = combined.filter(require("GlobalUtils").isNotNullish);
        let uniqResult = found.uniq();
        obj.knownThreadIds = found.uniq().filter((item) => {
          basicChannel = basicChannel.getBasicChannel(item);
          let hasItem = set2.has(item);
          if (!hasItem) {
            let hasItem1 = null != basicChannel;
            if (hasItem1) {
              hasItem1 = set.has(basicChannel.type);
            }
            hasItem = hasItem1;
          }
          return hasItem;
        }).value();
        let result = Storage2.set(SelectedChannelStore, obj);
        const iter2 = found.uniq().filter((item) => {
          basicChannel = basicChannel.getBasicChannel(item);
          let hasItem = set2.has(item);
          if (!hasItem) {
            let hasItem1 = null != basicChannel;
            if (hasItem1) {
              hasItem1 = set.has(basicChannel.type);
            }
            hasItem = hasItem1;
          }
          return hasItem;
        });
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
        let tmp3 = null != guildId1 && guildId2 === guildId1;
        if (!tmp3) {
          tmp3 = selectedVoiceChannelId === sessionId.channelId;
        }
        if (tmp3) {
          selectedVoiceChannelId = null;
        }
        let Storage = require("Storage").Storage;
        obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: null };
        values = _modDef12(selectedChannelIds).values();
        const obj3 = _modDef12(selectedChannelIds);
        const combined1 = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
        const found1 = combined1.filter(require("GlobalUtils").isNotNullish);
        const uniqResult1 = found1.uniq();
        obj.knownThreadIds = found1.uniq().filter((item) => {
          basicChannel = basicChannel.getBasicChannel(item);
          let hasItem = set2.has(item);
          if (!hasItem) {
            let hasItem1 = null != basicChannel;
            if (hasItem1) {
              hasItem1 = set.has(basicChannel.type);
            }
            hasItem = hasItem1;
          }
          return hasItem;
        }).value();
        const result1 = Storage.set(SelectedChannelStore, obj);
        const iter = found1.uniq().filter((item) => {
          basicChannel = basicChannel.getBasicChannel(item);
          let hasItem = set2.has(item);
          if (!hasItem) {
            let hasItem1 = null != basicChannel;
            if (hasItem1) {
              hasItem1 = set.has(basicChannel.type);
            }
            hasItem = hasItem1;
          }
          return hasItem;
        });
      }
      return true;
    }, false);
  },
  CHANNEL_FOLLOWER_CREATED: function handleChannelFollowingDestinationUpdate(channelId) {
    channelId = channelId.channelId;
    let tmp = null != lastChannelFollowingDestination;
    if (tmp) {
      tmp = channelId === lastChannelFollowingDestination.channelId;
    }
    if (!tmp) {
      let obj = { channelId, guildId: channelId.guildId };
      lastChannelFollowingDestination = obj;
      const Storage = Storage3.Storage;
      obj = { selectedChannelId, selectedVoiceChannelId, lastChannelFollowingDestination, lastConnectedTime, selectedChannelIds, mostRecentSelectedTextChannelIds, knownThreadIds: null };
      const values = _modDef12(selectedChannelIds).values();
      const obj3 = _modDef12(selectedChannelIds);
      const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
      const found = combined.filter(GlobalUtils.isNotNullish);
      const uniqResult = found.uniq();
      obj.knownThreadIds = found.uniq().filter((item) => {
        basicChannel = basicChannel.getBasicChannel(item);
        let hasItem = set2.has(item);
        if (!hasItem) {
          let hasItem1 = null != basicChannel;
          if (hasItem1) {
            hasItem1 = set.has(basicChannel.type);
          }
          hasItem = hasItem1;
        }
        return hasItem;
      }).value();
      const result = Storage.set(SelectedChannelStore, obj);
      const iter = found.uniq().filter((item) => {
        basicChannel = basicChannel.getBasicChannel(item);
        let hasItem = set2.has(item);
        if (!hasItem) {
          let hasItem1 = null != basicChannel;
          if (hasItem1) {
            hasItem1 = set.has(basicChannel.type);
          }
          hasItem = hasItem1;
        }
        return hasItem;
      });
    }
  },
  LOGOUT: function handleLogout() {
    closure_25 = {};
    c6 = null;
    c5 = undefined;
    closure_27 = {};
    closure_7 = {};
    c8 = null;
    const Storage = Storage3.Storage;
    Storage.remove(SelectedChannelStore);
  }
});
let result = size.fileFinishedImporting("stores/SelectedChannelStore.tsx");

export default selectedChannelStore;
export const findFirstVoiceChannelId = function findFirstVoiceChannelId(id) {
  const mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(id);
  const found = _modDef12.find(mutableBasicGuildChannelsForGuild, (type) => type.type === constants.GUILD_VOICE);
  id = undefined;
  if (found != null) {
    id = found.id;
  }
  return id;
};
export { handleConnectionOpen };
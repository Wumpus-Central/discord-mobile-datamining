// discord_app/stores/SelectedChannelStore.tsx
import applyDefault from "../../_runtime/00012_apply.js";
import fromStringAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage3 from "../../discord_common/js/packages/storage/Storage.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import set2 from "../modules/channel/ChannelConstants.tsx";
import isDiscordFrontendDevelopment from "../utils/GlobalUtils.tsx";
import createChannelRecord from "../records/ChannelRecord.tsx";
import closure_13 from "AuthenticationStore.tsx";
import closure_14 from "ChannelStore.tsx";
import closure_15 from "GuildChannelStore.tsx";
import closure_16 from "GuildStore.tsx";
import closure_17 from "MediaEngineStore.tsx";
import closure_18 from "PermissionStore.tsx";
import closure_19 from "SelectedGuildStore.tsx";
import ME from "../Constants.tsx";
import set from "../../_runtime/00002_set.js";

function handleConnectionOpen(sessionId) {
  sessionId = sessionId.sessionId;
  if (null != c8) {
    const channel = store.getChannel(c8);
    let tmp3 = null != channel;
    if (tmp3) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = closure_18.can(fromStringAll.combine(constants2.VIEW_CHANNEL, constants2.CONNECT), channel);
        const obj2 = fromStringAll;
      }
      tmp3 = isPrivateResult;
    }
    if (!tmp3) {
      c8 = null;
    }
  }
  let _require = false;
  const guildsArray = store3.getGuildsArray();
  applyDefault.each(closure_25, (arg0, arg1) => {
    let tmp4 = null != arg0;
    if (tmp4) {
      let hasChannelResult = closure_1_14.hasChannel(arg0);
      if (!hasChannelResult) {
        hasChannelResult = arg0 === selectedChannelId;
      }
      if (!hasChannelResult) {
        hasChannelResult = closure_1_28.has(arg0);
      }
      if (!hasChannelResult) {
        hasChannelResult = closure_1_23(arg0);
      }
      tmp4 = hasChannelResult;
    }
    if (!tmp4) {
      delete tmp3[tmp2];
      delete tmp[tmp2];
      c0 = true;
    }
  });
  const obj3 = applyDefault;
  applyDefault.each(closure_27, (arg0, arg1) => {
    let tmp3 = null != arg0;
    if (tmp3) {
      let hasChannelResult = closure_1_14.hasChannel(arg0);
      if (!hasChannelResult) {
        hasChannelResult = closure_1_28.has(arg0);
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
              tmp4 = callback(channel.type);
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
  let tmp14 = null != closure_9;
  if (tmp14) {
    const _Date = Date;
    tmp14 = Date.now() - closure_9 >= 300000;
  }
  if (tmp14) {
    c8 = null;
    _require = true;
  }
  if (_require) {
    const Storage = require("../../discord_common/js/packages/storage/Storage.tsx").Storage;
    const obj = {
      selectedChannelId: null,
      selectedVoiceChannelId: null,
      lastChannelFollowingDestination: null,
      lastConnectedTime: null,
      selectedChannelIds: null,
      mostRecentSelectedTextChannelIds: null,
      knownThreadIds: null,
    };
    obj[0] = closure_6;
    obj[1] = c8;
    obj[2] = closure_7;
    obj[3] = closure_9;
    obj[4] = closure_25;
    obj[5] = closure_27;
    const values = tmp9(12)(closure_25).values();
    const obj6 = tmp9(12)(closure_25);
    const combined = values.concat(tmp9(12).values(closure_27));
    const found = combined.filter(require("../utils/GlobalUtils.tsx").isNotNullish);
    const tmp9Result = tmp9(12);
    const uniqResult = found.uniq();
    obj[6] = found
      .uniq()
      .filter((arg0) => {
        basicChannel = basicChannel.getBasicChannel(arg0);
        let hasItem = set2.has(arg0);
        if (!hasItem) {
          let hasItem1 = null != basicChannel;
          if (hasItem1) {
            hasItem1 = set.has(basicChannel.type);
          }
          hasItem = hasItem1;
        }
        return hasItem;
      })
      .value();
    const result = Storage.set(SelectedChannelStore, obj);
    const iter = found.uniq().filter((arg0) => {
      basicChannel = basicChannel.getBasicChannel(arg0);
      let hasItem = set2.has(arg0);
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
function navigateAwayFromChannel(id, guild_id, parent_id) {
  set.delete(id);
  let tmp2 = guild_id;
  if (null == guild_id) {
    const guildId = store4.getGuildId();
    const _String = String;
    tmp2 = guild_id;
    if (dependencyMap[String(undefined, guildId)] === id) {
      tmp2 = guildId;
    }
  }
  const guild = store3.getGuild(tmp2);
  let flag = false;
  if (c8 === id) {
    c8 = null;
    flag = true;
  }
  if (flag) {
    const Storage = Storage3.Storage;
    const obj = {
      selectedChannelId: null,
      selectedVoiceChannelId: null,
      lastChannelFollowingDestination: null,
      lastConnectedTime: null,
      selectedChannelIds: null,
      mostRecentSelectedTextChannelIds: null,
      knownThreadIds: null,
    };
    obj[0] = closure_6;
    obj[1] = c8;
    obj[2] = closure_7;
    obj[3] = closure_9;
    obj[4] = dependencyMap;
    obj[5] = closure_27;
    const values = applyDefault(dependencyMap).values();
    const obj2 = applyDefault(dependencyMap);
    const combined = values.concat(applyDefault.values(closure_27));
    const found = combined.filter(isDiscordFrontendDevelopment.isNotNullish);
    const obj4 = applyDefault;
    const uniqResult = found.uniq();
    obj[6] = found
      .uniq()
      .filter((arg0) => {
        basicChannel = basicChannel.getBasicChannel(arg0);
        let hasItem = set2.has(arg0);
        if (!hasItem) {
          let hasItem1 = null != basicChannel;
          if (hasItem1) {
            hasItem1 = set.has(basicChannel.type);
          }
          hasItem = hasItem1;
        }
        return hasItem;
      })
      .value();
    const result = Storage.set(SelectedChannelStore, obj);
    const iter = found.uniq().filter((arg0) => {
      basicChannel = basicChannel.getBasicChannel(arg0);
      let hasItem = set2.has(arg0);
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
({ isGuildTextChannelType: unpackModuleId, THREAD_CHANNEL_TYPES: closure_12 } = createChannelRecord);
({ ChannelTypes: closure_20, ME: closure_21, Permissions: closure_22, Routes } = ME);
const isGuildHomeChannel = set2.isGuildHomeChannel;
const SelectedChannelStore = "SelectedChannelStore";
let closure_25 = {};
let closure_26 = {};
let closure_27 = {};
let set = new Set();
const Store = initializeDefault.Store;
class SelectedChannelStore extends Store {}
const prototype = SelectedChannelStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage3.Storage;
  let value = Storage.get(SelectedChannelStore);
  if (value == null) {
    const obj = {
      selectedChannelId: null,
      selectedVoiceChannelId: null,
      lastChannelFollowingDestination: null,
      lastConnectedTime: null,
      selectedChannelIds: null,
      mostRecentSelectedTextChannelIds: null,
    };
    obj[0] = closure_6;
    obj[1] = closure_8;
    obj[2] = closure_7;
    obj[3] = closure_9;
    obj[4] = selectedChannelIds;
    obj[5] = mostRecentSelectedTextChannelIds;
    value = obj;
  }
  if (null != value.knownThreadIds) {
    const _Set = Set;
    set = new Set(value.knownThreadIds);
  }
  ({
    selectedVoiceChannelId: closure_8,
    lastChannelFollowingDestination: closure_7,
    lastConnectedTime: closure_9,
    mostRecentSelectedTextChannelIds,
  } = value);
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
  this.waitFor(closure_13, closure_14, closure_15, closure_16, closure_17, closure_18, closure_19);
};
prototype["getChannelId"] = function getChannelId(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let guildId = arg0;
  let tmp2 = null;
  if (arg0 !== closure_21) {
    if (guildId == null) {
      guildId = store4.getGuildId();
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
        const defaultChannel = store2.getDefaultChannel(StringResult);
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
  if (supported.isSupported()) {
    tmp = closure_8;
  }
  return tmp;
};
prototype["getMostRecentSelectedTextChannelId"] = function getMostRecentSelectedTextChannelId(guildId) {
  let tmp = null;
  if (null != guildId) {
    let tmp3 = dependencyMap3[guildId];
    if (tmp3 == null) {
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["getCurrentlySelectedChannelId"] = function getCurrentlySelectedChannelId(guildId) {
  if (null != guildId) {
    let tmp = dependencyMap[guildId];
  } else {
    tmp = closure_6;
  }
  return tmp;
};
prototype["getLastSelectedChannelId"] = function getLastSelectedChannelId(arg0) {
  if (null != arg0) {
    let tmp = dependencyMap2[arg0];
  } else {
    tmp = closure_5;
  }
  return tmp;
};
prototype["getLastSelectedChannels"] = function getLastSelectedChannels(arg0) {
  return dependencyMap2[arg0];
};
prototype["getLastChannelFollowingDestination"] = function getLastChannelFollowingDestination() {
  return closure_7;
};
SelectedChannelStore.displayName = "SelectedChannelStore";
const selectedChannelStore = new SelectedChannelStore(dispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(selectedChannelId) {
    ({ sessionId: closure_4, selectedVoiceChannelId: c8 } = selectedChannelId);
    closure_25 = {};
    closure_26 = {};
    selectedChannelId = selectedChannelId.selectedChannelId;
    ({ selectedChannelId: closure_25[selectedChannelId.selectedGuildId], selectedGuildId } = selectedChannelId);
    if (null != selectedGuildId) {
      if (null != tmp) {
        if (dependencyMap3[selectedGuildId] !== tmp) {
          let channel = store.getChannel(tmp);
          let tmp4 = null != channel;
          if (tmp4) {
            tmp4 = callback(channel.type);
          }
          if (channel != null) {
            let guildId = channel.getGuildId();
          }
          let tmp7 = !tmp4;
          if (tmp4) {
            tmp7 = guildId !== selectedGuildId;
          }
          if (!tmp7) {
            dependencyMap3[selectedGuildId] = tmp;
          }
        }
      }
    }
    c0 = false;
    const guildsArray = store3.getGuildsArray();
    applyDefault.each(closure_25, (arg0, arg1) => {
      let tmp4 = null != arg0;
      if (tmp4) {
        let hasChannelResult = closure_1_14.hasChannel(arg0);
        if (!hasChannelResult) {
          hasChannelResult = arg0 === selectedChannelId;
        }
        if (!hasChannelResult) {
          hasChannelResult = closure_1_28.has(arg0);
        }
        if (!hasChannelResult) {
          hasChannelResult = closure_1_23(arg0);
        }
        tmp4 = hasChannelResult;
      }
      if (!tmp4) {
        delete tmp3[tmp2];
        delete tmp[tmp2];
        c0 = true;
      }
    });
    const obj2 = applyDefault;
    applyDefault.each(dependencyMap3, (arg0, arg1) => {
      let tmp3 = null != arg0;
      if (tmp3) {
        let hasChannelResult = closure_1_14.hasChannel(arg0);
        if (!hasChannelResult) {
          hasChannelResult = closure_1_28.has(arg0);
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
                tmp4 = callback(channel.type);
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
          const defaultChannel = store2.getDefaultChannel(guildId);
          if (null != defaultChannel) {
            id = defaultChannel.id;
          }
        }
        channelId = id;
      }
      let tmp5 = null != channelId;
      if (tmp5) {
        tmp5 = channelId !== channelId;
      }
      if (tmp5) {
        closure_5 = channelId;
      }
      if (null != guildId) {
        if (null != channelId) {
          if (dependencyMap3[guildId] !== channelId) {
            const channel = store.getChannel(channelId);
            let tmp10 = null != channel;
            if (tmp10) {
              tmp10 = callback(channel.type);
            }
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            let tmp13 = !tmp10;
            if (tmp10) {
              tmp13 = guildId !== guildId;
            }
            if (!tmp13) {
              dependencyMap3[guildId] = channelId;
            }
          }
        }
      }
      const _String = String;
      if (dependencyMap[String(undefined, guildId)] !== channelId) {
        const _String2 = String;
        const _String3 = String;
        closure_26[String(guildId)] = dependencyMap[String(undefined, guildId)];
        const _String4 = String;
        dependencyMap[String(guildId)] = channelId;
        const StringResult = String(guildId);
      }
      const Storage = Storage3.Storage;
      const obj = {
        selectedChannelId: null,
        selectedVoiceChannelId: null,
        lastChannelFollowingDestination: null,
        lastConnectedTime: null,
        selectedChannelIds: null,
        mostRecentSelectedTextChannelIds: null,
        knownThreadIds: null,
      };
      obj[0] = channelId;
      obj[1] = closure_8;
      obj[2] = closure_7;
      obj[3] = closure_9;
      obj[4] = dependencyMap;
      obj[5] = dependencyMap3;
      const values = applyDefault(dependencyMap).values();
      const obj3 = applyDefault(dependencyMap);
      const combined = values.concat(applyDefault.values(dependencyMap3));
      const found = combined.filter(isDiscordFrontendDevelopment.isNotNullish);
      const obj5 = applyDefault;
      const uniqResult = found.uniq();
      obj[6] = found
        .uniq()
        .filter((arg0) => {
          basicChannel = basicChannel.getBasicChannel(arg0);
          let hasItem = set2.has(arg0);
          if (!hasItem) {
            let hasItem1 = null != basicChannel;
            if (hasItem1) {
              hasItem1 = set.has(basicChannel.type);
            }
            hasItem = hasItem1;
          }
          return hasItem;
        })
        .value();
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
        tmp3 = null == dependencyMap3[guild_id];
      }
      if (tmp3) {
        dependencyMap3[guild_id] = channel.id;
      }
      if (null != guild_id) {
        if (null == dependencyMap[guild_id]) {
          let id;
          if (null != guild_id) {
            const defaultChannel = store2.getDefaultChannel(guild_id);
            if (null != defaultChannel) {
              id = defaultChannel.id;
            }
          }
          dependencyMap[guild_id] = id;
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
        let tmp2 = set;
        let tmp3 = nextResult;
        let hasItem = set.has(tmp.type);
        let tmp5 = navigateAwayFromChannel;
        let tmp6 = navigateAwayFromChannel(tmp.id, tmp.guild_id, tmp.parent_id);
      }
      continue;
    }
  },
  THREAD_DELETE: handleChannelDelete,
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    if (null == dependencyMap[guild.id]) {
      const id2 = guild.id;
      let id;
      if (null != id2) {
        const defaultChannel = store2.getDefaultChannel(id2);
        if (null != defaultChannel) {
          id = defaultChannel.id;
        }
      }
      dependencyMap[guild.id] = id;
      id = guild.id;
      if (null != id) {
        if (null != id) {
          if (dependencyMap3[id] !== id) {
            const channel = store.getChannel(id);
            let tmp7 = null != channel;
            if (tmp7) {
              tmp7 = callback(channel.type);
            }
            if (channel != null) {
              const guildId = channel.getGuildId();
            }
            let tmp10 = !tmp7;
            if (tmp7) {
              tmp10 = guildId !== id;
            }
            if (!tmp10) {
              dependencyMap3[id] = id;
            }
          }
        }
      }
      const Storage = Storage3.Storage;
      const obj = {
        selectedChannelId: null,
        selectedVoiceChannelId: null,
        lastChannelFollowingDestination: null,
        lastConnectedTime: null,
        selectedChannelIds: null,
        mostRecentSelectedTextChannelIds: null,
        knownThreadIds: null,
      };
      obj[0] = closure_6;
      obj[1] = closure_8;
      obj[2] = closure_7;
      obj[3] = closure_9;
      obj[4] = dependencyMap;
      obj[5] = dependencyMap3;
      const values = applyDefault(dependencyMap).values();
      const obj3 = applyDefault(dependencyMap);
      const combined = values.concat(applyDefault.values(dependencyMap3));
      const found = combined.filter(isDiscordFrontendDevelopment.isNotNullish);
      const obj5 = applyDefault;
      const uniqResult = found.uniq();
      obj[6] = found
        .uniq()
        .filter((arg0) => {
          basicChannel = basicChannel.getBasicChannel(arg0);
          let hasItem = set2.has(arg0);
          if (!hasItem) {
            let hasItem1 = null != basicChannel;
            if (hasItem1) {
              hasItem1 = set.has(basicChannel.type);
            }
            hasItem = hasItem1;
          }
          return hasItem;
        })
        .value();
      const result = Storage.set(SelectedChannelStore, obj);
      const iter = found.uniq().filter((arg0) => {
        basicChannel = basicChannel.getBasicChannel(arg0);
        let hasItem = set2.has(arg0);
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
    if (c8 === dependencyMap[guild.id]) {
      c8 = null;
    }
    if (guild.unavailable) {
      return false;
    } else {
      delete tmp[tmp2];
      delete tmp[tmp2];
      const Storage = Storage3.Storage;
      const obj = {
        selectedChannelId: null,
        selectedVoiceChannelId: null,
        lastChannelFollowingDestination: null,
        lastConnectedTime: null,
        selectedChannelIds: null,
        mostRecentSelectedTextChannelIds: null,
        knownThreadIds: null,
      };
      obj[0] = closure_6;
      obj[1] = c8;
      obj[2] = closure_7;
      obj[3] = closure_9;
      obj[4] = dependencyMap;
      obj[5] = closure_27;
      const values = applyDefault(dependencyMap).values();
      const obj2 = applyDefault(dependencyMap);
      const combined = values.concat(applyDefault.values(closure_27));
      const found = combined.filter(isDiscordFrontendDevelopment.isNotNullish);
      const obj4 = applyDefault;
      const uniqResult = found.uniq();
      obj[6] = found
        .uniq()
        .filter((arg0) => {
          basicChannel = basicChannel.getBasicChannel(arg0);
          let hasItem = set2.has(arg0);
          if (!hasItem) {
            let hasItem1 = null != basicChannel;
            if (hasItem1) {
              hasItem1 = set.has(basicChannel.type);
            }
            hasItem = hasItem1;
          }
          return hasItem;
        })
        .value();
      const result = Storage.set(SelectedChannelStore, obj);
    }
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null == channelId) {
      const channel = store.getChannel(channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      let tmp2 = null != guild_id;
      if (tmp2) {
        tmp2 = guild_id !== store4.getGuildId();
      }
      if (tmp2) {
        tmp2 = dependencyMap[guild_id] === channelId;
      }
      if (tmp2) {
        let id;
        if (null != guild_id) {
          const defaultChannel = store2.getDefaultChannel(guild_id);
          if (null != defaultChannel) {
            id = defaultChannel.id;
          }
        }
        dependencyMap[guild_id] = id;
        const tmp6 = dependencyMap;
      }
    }
    const Storage = Storage3.Storage;
    const obj = {
      selectedChannelId: closure_6,
      selectedVoiceChannelId: channelId,
      lastChannelFollowingDestination: closure_7,
      lastConnectedTime: closure_9,
      selectedChannelIds: dependencyMap,
      mostRecentSelectedTextChannelIds: closure_27,
      knownThreadIds: null,
    };
    const values = applyDefault(dependencyMap).values();
    const obj2 = applyDefault(dependencyMap);
    const combined = values.concat(applyDefault.values(closure_27));
    const found = combined.filter(isDiscordFrontendDevelopment.isNotNullish);
    const obj4 = applyDefault;
    const uniqResult = found.uniq();
    obj[6] = found
      .uniq()
      .filter((arg0) => {
        basicChannel = basicChannel.getBasicChannel(arg0);
        let hasItem = set2.has(arg0);
        if (!hasItem) {
          let hasItem1 = null != basicChannel;
          if (hasItem1) {
            hasItem1 = set.has(basicChannel.type);
          }
          hasItem = hasItem1;
        }
        return hasItem;
      })
      .value();
    const result = Storage.set(SelectedChannelStore, obj);
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, sessionId) => {
      if (sessionId.sessionId === closure_4) {
        const _clearInterval = clearInterval;
        clearInterval(interval);
        const channel = store.getChannel(channelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        if (!tmp26) {
          channelId = sessionId.channelId;
        }
        const _Date = Date;
        c9 = Date.now();
        if (null != channelId) {
          const _setInterval = setInterval;
          interval = setInterval(() => {
            closure_9 = Date.now();
            const Storage = callback(595).Storage;
            const obj = {
              selectedChannelId: closure_6,
              selectedVoiceChannelId: c8,
              lastChannelFollowingDestination: closure_7,
              lastConnectedTime: closure_9,
              selectedChannelIds: closure_25,
              mostRecentSelectedTextChannelIds: closure_27,
              knownThreadIds: null,
            };
            const values = callback2(12)(closure_25).values();
            const obj2 = callback2(12)(closure_25);
            const combined = values.concat(callback2(12).values(closure_27));
            const found = combined.filter(callback(1471).isNotNullish);
            const obj4 = callback2(12);
            const uniqResult = found.uniq();
            obj[6] = found
              .uniq()
              .filter((arg0) => {
                basicChannel = basicChannel.getBasicChannel(arg0);
                let hasItem = set2.has(arg0);
                if (!hasItem) {
                  let hasItem1 = null != basicChannel;
                  if (hasItem1) {
                    hasItem1 = set.has(basicChannel.type);
                  }
                  hasItem = hasItem1;
                }
                return hasItem;
              })
              .value();
            const result = Storage.set(closure_24, obj);
          }, 60000);
        }
        const Storage2 = callback(595).Storage;
        let obj = {
          selectedChannelId: null,
          selectedVoiceChannelId: null,
          lastChannelFollowingDestination: null,
          lastConnectedTime: null,
          selectedChannelIds: null,
          mostRecentSelectedTextChannelIds: null,
          knownThreadIds: null,
        };
        obj[0] = closure_6;
        obj[1] = channelId;
        obj[2] = closure_7;
        obj[3] = c9;
        obj[4] = closure_25;
        obj[5] = closure_27;
        let values = callback2(12)(closure_25).values();
        const obj9 = callback2(12)(closure_25);
        tmp26 = sessionId.guildId !== guildId && null == sessionId.channelId;
        let combined = values.concat(callback2(12).values(closure_27));
        let found = combined.filter(callback(1471).isNotNullish);
        const obj11 = callback2(12);
        let uniqResult = found.uniq();
        obj[6] = found
          .uniq()
          .filter((arg0) => {
            basicChannel = basicChannel.getBasicChannel(arg0);
            let hasItem = set2.has(arg0);
            if (!hasItem) {
              let hasItem1 = null != basicChannel;
              if (hasItem1) {
                hasItem1 = set.has(basicChannel.type);
              }
              hasItem = hasItem1;
            }
            return hasItem;
          })
          .value();
        let result = Storage2.set(closure_24, obj);
        const iter2 = found.uniq().filter((arg0) => {
          basicChannel = basicChannel.getBasicChannel(arg0);
          let hasItem = set2.has(arg0);
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
        return arg0;
      } else {
        const _clearInterval2 = clearInterval;
        clearInterval(interval);
        interval = undefined;
        c9 = 0;
        const channel1 = store.getChannel(channelId);
        let guildId1;
        if (channel1 != null) {
          guildId1 = channel1.getGuildId();
        }
        const channel2 = store.getChannel(sessionId.channelId);
        let guildId2;
        if (channel2 != null) {
          guildId2 = channel2.getGuildId();
        }
        let tmp3 = null != guildId1 && guildId2 === guildId1;
        if (!tmp3) {
          tmp3 = channelId === sessionId.channelId;
        }
        if (tmp3) {
          channelId = null;
        }
        let Storage = callback(595).Storage;
        obj = {
          selectedChannelId: null,
          selectedVoiceChannelId: null,
          lastChannelFollowingDestination: null,
          lastConnectedTime: null,
          selectedChannelIds: null,
          mostRecentSelectedTextChannelIds: null,
          knownThreadIds: null,
        };
        obj[0] = closure_6;
        obj[1] = channelId;
        obj[2] = closure_7;
        obj[3] = c9;
        obj[4] = closure_25;
        obj[5] = closure_27;
        values = callback2(12)(closure_25).values();
        const obj13 = store;
        const obj3 = callback2(12)(closure_25);
        const combined1 = values.concat(callback2(12).values(closure_27));
        const found1 = combined1.filter(callback(1471).isNotNullish);
        const obj5 = callback2(12);
        const uniqResult1 = found1.uniq();
        obj[6] = found1
          .uniq()
          .filter((arg0) => {
            basicChannel = basicChannel.getBasicChannel(arg0);
            let hasItem = set2.has(arg0);
            if (!hasItem) {
              let hasItem1 = null != basicChannel;
              if (hasItem1) {
                hasItem1 = set.has(basicChannel.type);
              }
              hasItem = hasItem1;
            }
            return hasItem;
          })
          .value();
        const result1 = Storage.set(closure_24, obj);
        const iter = found1.uniq().filter((arg0) => {
          basicChannel = basicChannel.getBasicChannel(arg0);
          let hasItem = set2.has(arg0);
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
    let tmp = null != obj;
    if (tmp) {
      tmp = channelId === obj.channelId;
    }
    if (!tmp) {
      obj = { channelId: null, guildId: null };
      obj[0] = channelId;
      obj[1] = channelId.guildId;
      const Storage = Storage3.Storage;
      obj = {
        selectedChannelId: null,
        selectedVoiceChannelId: null,
        lastChannelFollowingDestination: null,
        lastConnectedTime: null,
        selectedChannelIds: null,
        mostRecentSelectedTextChannelIds: null,
        knownThreadIds: null,
      };
      obj[0] = closure_6;
      obj[1] = closure_8;
      obj[2] = obj;
      obj[3] = closure_9;
      obj[4] = closure_25;
      obj[5] = closure_27;
      const values = applyDefault(closure_25).values();
      const obj3 = applyDefault(closure_25);
      const combined = values.concat(applyDefault.values(closure_27));
      const found = combined.filter(isDiscordFrontendDevelopment.isNotNullish);
      const obj5 = applyDefault;
      const uniqResult = found.uniq();
      obj[6] = found
        .uniq()
        .filter((arg0) => {
          basicChannel = basicChannel.getBasicChannel(arg0);
          let hasItem = set2.has(arg0);
          if (!hasItem) {
            let hasItem1 = null != basicChannel;
            if (hasItem1) {
              hasItem1 = set.has(basicChannel.type);
            }
            hasItem = hasItem1;
          }
          return hasItem;
        })
        .value();
      const result = Storage.set(SelectedChannelStore, obj);
      const iter = found.uniq().filter((arg0) => {
        basicChannel = basicChannel.getBasicChannel(arg0);
        let hasItem = set2.has(arg0);
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
  },
});
let result = set.fileFinishedImporting("stores/SelectedChannelStore.tsx");

export default selectedChannelStore;
export const findFirstVoiceChannelId = function findFirstVoiceChannelId(id) {
  const mutableBasicGuildChannelsForGuild = store.getMutableBasicGuildChannelsForGuild(id);
  const found = applyDefault.find(mutableBasicGuildChannelsForGuild, (type) => type.type === constants.GUILD_VOICE);
  id = undefined;
  if (found != null) {
    id = found.id;
  }
  return id;
};
export { handleConnectionOpen };

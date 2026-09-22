// discord_app/stores/SelectedChannelStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import Storage3 from "../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import BigFlagUtilsAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import router_utils from "../modules/routing/router_utils.tsx";
import GlobalUtils from "../utils/GlobalUtils.tsx";
import NavigationRouteUtils from "../modules/main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import isAccessibleNonStaticChannelPathDefault from "../modules/links/isAccessibleNonStaticChannelPath.tsx";
import GatedChannelStore from "../modules/channel/GatedChannelStore.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildChannelStore from "GuildChannelStore.tsx";
import GuildStore from "GuildStore.tsx";
import MediaEngineStore from "MediaEngineStore.tsx";
import PermissionStore from "PermissionStore.tsx";
import SelectedGuildStore from "SelectedGuildStore.tsx";

require = fn;
function handleConnectionOpen(sessionId) {
  sessionId = sessionId.sessionId;
  if (null != selectedVoiceChannelId) {
    const channel = ChannelStore.getChannel(selectedVoiceChannelId);
    let tmp3 = null != channel;
    if (tmp3) {
      let isPrivateResult = channel.isPrivate();
      if (!isPrivateResult) {
        isPrivateResult = PermissionStore.can(
          BigFlagUtilsAll.combine(constants2.VIEW_CHANNEL, constants2.CONNECT),
          channel,
        );
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
              tmp4 = closure_1_12(channel.type);
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
    const obj = {
      selectedChannelId,
      selectedVoiceChannelId,
      lastChannelFollowingDestination,
      lastConnectedTime,
      selectedChannelIds,
      mostRecentSelectedTextChannelIds,
      knownThreadIds: null,
    };
    const values = _modDef12(selectedChannelIds).values();
    const obj6 = _modDef12(selectedChannelIds);
    const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
    const found = combined.filter(require("GlobalUtils").isNotNullish);
    const tmp9Result = _modDef12;
    const uniqResult = found.uniq();
    obj.knownThreadIds = found
      .uniq()
      .filter((item) => {
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
      })
      .value();
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
function navigateAwayFromChannel(id, guild_id, id2) {
  let flag = hasItem;
  if (hasItem === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = true;
  }
  set.delete(id);
  let tmp4 = guild_id;
  if (null == guild_id) {
    const guildId = SelectedGuildStore.getGuildId();
    const _String = String;
    tmp4 = guild_id;
    if (selectedChannelIds[String(undefined, guildId)] === id) {
      tmp4 = guildId;
    }
  }
  let tmp9 = null;
  if (null != GuildStore.getGuild(tmp4)) {
    tmp9 = tmp4;
  }
  let flag3 = false;
  if (selectedVoiceChannelId === id) {
    selectedVoiceChannelId = null;
    flag3 = true;
  }
  const StringResult = String(tmp9);
  if (!flag) {
    id = undefined;
    if (null != StringResult) {
      const defaultChannel = GuildChannelStore.getDefaultChannel(StringResult);
      if (null != defaultChannel) {
        id = defaultChannel.id;
      }
    }
    let tmp11 = id;
  } else {
    tmp11 = id2;
  }
  if (selectedChannelIds[StringResult] === id) {
    selectedChannelIds[StringResult] = tmp11;
    flag3 = true;
  }
  let tmp16 = null != tmp9;
  if (tmp16) {
    tmp16 = mostRecentSelectedTextChannelIds[tmp9] === id;
  }
  if (tmp16) {
    delete tmp[tmp2];
    flag3 = true;
  }
  let tmp19 = SelectedGuildStore.getGuildId() === tmp9;
  if (tmp19) {
    let tmp20 = flag2;
    if (tmp20) {
      tmp20 = NavigationRouteUtils.getSelectedChannelFromRoute() === id;
    }
    tmp19 = tmp20;
  }
  if (tmp19) {
    router_utils.replaceWith(__initData4.CHANNEL(tmp4, tmp11));
  }
  if (flag3) {
    const Storage = Storage3.Storage;
    const obj2 = {
      selectedChannelId,
      selectedVoiceChannelId,
      lastChannelFollowingDestination,
      lastConnectedTime,
      selectedChannelIds,
      mostRecentSelectedTextChannelIds,
      knownThreadIds: null,
    };
    const values = _modDef12(selectedChannelIds).values();
    const obj3 = _modDef12(selectedChannelIds);
    const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
    const found = combined.filter(GlobalUtils.isNotNullish);
    const uniqResult = found.uniq();
    obj2.knownThreadIds = found
      .uniq()
      .filter((item) => {
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
      })
      .value();
    const result = Storage.set(SelectedChannelStore, obj2);
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
function handleChannelDelete(channel) {
  channel = channel.channel;
  navigateAwayFromChannel(channel.id, channel.guild_id, channel.parent_id, "THREAD_DELETE" === channel.type);
}
function navigateAwayIfInaccessible(nextResult) {
  let result = nextResult.isScheduledForDeletion();
  if (!result) {
    result = !isAccessibleNonStaticChannelPathDefault(nextResult);
  }
  if (result) {
    const hasItem = set.has(nextResult.type);
    let channel = null;
    if (hasItem) {
      channel = ChannelStore.getChannel(nextResult.parent_id);
    }
    let id = null;
    if (null != channel) {
      let result1 = channel.isScheduledForDeletion();
      if (!result1) {
        result1 = !isAccessibleNonStaticChannelPathDefault(channel);
      }
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
    let result = channel.isScheduledForDeletion();
    if (!result) {
      result = !isAccessibleNonStaticChannelPathDefault(channel);
    }
    let flag = false;
    if (result) {
      const hasItem = set.has(channel.type);
      let channel1 = null;
      if (hasItem) {
        channel1 = ChannelStore.getChannel(channel.parent_id);
      }
      let id = null;
      if (null != channel1) {
        let result1 = channel1.isScheduledForDeletion();
        if (!result1) {
          result1 = !isAccessibleNonStaticChannelPathDefault(channel1);
        }
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
const ChannelRecord = fn(2046);
({ isGuildTextChannelType: closure_12, THREAD_CHANNEL_TYPES: map1 } = ChannelRecord);
const Constants = fn(1074);
({ ChannelTypes: closure_21, ME: closure_22, Permissions: closure_23, Routes: closure_24 } = Constants);
const isGuildHomeChannel = fn(2049).isGuildHomeChannel;
const SelectedChannelStore = "SelectedChannelStore";
let selectedChannelIds = {};
const dependencyMap = {};
const mostRecentSelectedTextChannelIds = {};
let set = new Set();
const Store = initializeDefault.Store;
class SelectedChannelStore extends Store {}
const prototype = SelectedChannelStore.prototype;
prototype["initialize"] = function initialize() {
  const Storage = Storage3.Storage;
  value = Storage.get(SelectedChannelStore);
  if (value == null) {
    const obj = {
      selectedChannelId,
      selectedVoiceChannelId,
      lastChannelFollowingDestination,
      lastConnectedTime,
      selectedChannelIds,
      mostRecentSelectedTextChannelIds,
    };
    value = obj;
  }
  if (null != value.knownThreadIds) {
    const _Set = Set;
    set = new Set(value.knownThreadIds);
  }
  ({
    selectedVoiceChannelId: c8,
    lastChannelFollowingDestination: closure_7,
    lastConnectedTime: closure_1_9,
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
  this.waitFor(
    AuthenticationStore,
    ChannelStore,
    GatedChannelStore,
    GuildChannelStore,
    GuildStore,
    MediaEngineStore,
    PermissionStore,
    SelectedGuildStore,
  );
};
prototype["getChannelId"] = function getChannelId(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let guildId = arg0;
  let tmp2 = null;
  if (arg0 !== __initData2) {
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
    closure_27 = {};
    closure_28 = {};
    selectedChannelId = selectedChannelId.selectedChannelId;
    ({ selectedChannelId: closure_27[selectedChannelId.selectedGuildId], selectedGuildId } = selectedChannelId);
    if (null != selectedGuildId) {
      if (null != tmp) {
        if (mostRecentSelectedTextChannelIds[selectedGuildId] !== tmp) {
          let channel = ChannelStore.getChannel(tmp);
          let tmp4 = null != channel;
          if (tmp4) {
            tmp4 = closure_12(channel.type);
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
    _modDef12.each(closure_27, (channelId, arg1) => {
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
                tmp4 = closure_1_12(channel.type);
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
              tmp10 = closure_1_12(channel.type);
            }
            if (channel != null) {
              const guildId1 = channel.getGuildId();
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
        closure_28[String(guildId)] = selectedChannelIds[String(undefined, guildId)];
        const _String4 = String;
        selectedChannelIds[String(guildId)] = selectedChannelId;
        const StringResult = String(guildId);
      }
      const Storage = Storage3.Storage;
      const obj = {
        selectedChannelId,
        selectedVoiceChannelId,
        lastChannelFollowingDestination,
        lastConnectedTime,
        selectedChannelIds,
        mostRecentSelectedTextChannelIds,
        knownThreadIds: null,
      };
      const values = _modDef12(selectedChannelIds).values();
      const obj3 = _modDef12(selectedChannelIds);
      const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
      const found = combined.filter(GlobalUtils.isNotNullish);
      const uniqResult = found.uniq();
      obj.knownThreadIds = found
        .uniq()
        .filter((item) => {
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
        })
        .value();
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
    set = new Set();
    let flag = false;
    const iter = arg0.channels[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp5 = navigateAwayIfInaccessible(nextResult) || flag;
      flag = tmp5;
      let addResult = set.add(tmp3.guild_id);
      continue;
    }
    for (const item10029 of set) {
      let tmp9 = navigateAwayFromSelectedIfInaccessible(item10029);
      if (!tmp9) {
        tmp9 = flag;
      }
      flag = tmp9;
      continue;
    }
    return flag;
  },
  THREAD_DELETE: handleChannelDelete,
  GUILD_CREATE: function handleGuildCreate(guild) {
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
            const channel = ChannelStore.getChannel(id1);
            let tmp7 = null != channel;
            if (tmp7) {
              tmp7 = closure_1_12(channel.type);
            }
            if (channel != null) {
              const guildId = channel.getGuildId();
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
      const obj = {
        selectedChannelId,
        selectedVoiceChannelId,
        lastChannelFollowingDestination,
        lastConnectedTime,
        selectedChannelIds,
        mostRecentSelectedTextChannelIds,
        knownThreadIds: null,
      };
      const values = _modDef12(selectedChannelIds).values();
      const obj3 = _modDef12(selectedChannelIds);
      const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
      const found = combined.filter(GlobalUtils.isNotNullish);
      const uniqResult = found.uniq();
      obj.knownThreadIds = found
        .uniq()
        .filter((item) => {
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
        })
        .value();
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
      const obj = {
        selectedChannelId,
        selectedVoiceChannelId,
        lastChannelFollowingDestination,
        lastConnectedTime,
        selectedChannelIds,
        mostRecentSelectedTextChannelIds,
        knownThreadIds: null,
      };
      const values = _modDef12(selectedChannelIds).values();
      const obj2 = _modDef12(selectedChannelIds);
      const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
      const found = combined.filter(GlobalUtils.isNotNullish);
      const uniqResult = found.uniq();
      obj.knownThreadIds = found
        .uniq()
        .filter((item) => {
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
        })
        .value();
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
  GUILD_ROLE_UPDATE: handleGuildRoleChange,
  GUILD_ROLE_DELETE: handleGuildRoleChange,
  GUILD_MEMBER_UPDATE: function handleGuildMemberUpdate(user) {
    let tmp = user.user.id === AuthenticationStore.getId();
    if (tmp) {
      tmp = navigateAwayFromSelectedIfInaccessible(user.guildId);
    }
    return tmp;
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
    const obj = {
      selectedChannelId,
      selectedVoiceChannelId,
      lastChannelFollowingDestination,
      lastConnectedTime,
      selectedChannelIds,
      mostRecentSelectedTextChannelIds,
      knownThreadIds: null,
    };
    const values = _modDef12(selectedChannelIds).values();
    const obj2 = _modDef12(selectedChannelIds);
    const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
    const found = combined.filter(GlobalUtils.isNotNullish);
    const uniqResult = found.uniq();
    obj.knownThreadIds = found
      .uniq()
      .filter((item) => {
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
      })
      .value();
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
            const obj = {
              selectedChannelId,
              selectedVoiceChannelId,
              lastChannelFollowingDestination,
              lastConnectedTime,
              selectedChannelIds,
              mostRecentSelectedTextChannelIds,
              knownThreadIds: null,
            };
            const values = closure_1_1(12)(selectedChannelIds).values();
            const obj2 = closure_1_1(12)(selectedChannelIds);
            const combined = values.concat(closure_1_1(12).values(mostRecentSelectedTextChannelIds));
            const found = combined.filter(closure_1_0(1370).isNotNullish);
            const obj4 = closure_1_1(12);
            const uniqResult = found.uniq();
            obj.knownThreadIds = found
              .uniq()
              .filter((item) => {
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
              })
              .value();
            const result = Storage.set(closure_1_26, obj);
          }, 60000);
        }
        const Storage2 = require("Storage").Storage;
        let obj = {
          selectedChannelId,
          selectedVoiceChannelId,
          lastChannelFollowingDestination,
          lastConnectedTime,
          selectedChannelIds,
          mostRecentSelectedTextChannelIds,
          knownThreadIds: null,
        };
        let values = _modDef12(selectedChannelIds).values();
        const obj9 = _modDef12(selectedChannelIds);
        tmp26 = sessionId.guildId !== guildId && null == sessionId.channelId;
        let combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
        let found = combined.filter(require("GlobalUtils").isNotNullish);
        let uniqResult = found.uniq();
        obj.knownThreadIds = found
          .uniq()
          .filter((item) => {
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
          })
          .value();
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
        let obj2 = {
          selectedChannelId,
          selectedVoiceChannelId,
          lastChannelFollowingDestination,
          lastConnectedTime,
          selectedChannelIds,
          mostRecentSelectedTextChannelIds,
          knownThreadIds: null,
        };
        const values2 = _modDef12(selectedChannelIds).values();
        const obj3 = _modDef12(selectedChannelIds);
        const combined1 = values2.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
        const found1 = combined1.filter(require("GlobalUtils").isNotNullish);
        const uniqResult1 = found1.uniq();
        obj2.knownThreadIds = found1
          .uniq()
          .filter((item) => {
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
          })
          .value();
        const result1 = Storage.set(SelectedChannelStore, obj2);
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
      const obj = { channelId, guildId: channelId.guildId };
      lastChannelFollowingDestination = obj;
      const Storage = Storage3.Storage;
      const obj2 = {
        selectedChannelId,
        selectedVoiceChannelId,
        lastChannelFollowingDestination,
        lastConnectedTime,
        selectedChannelIds,
        mostRecentSelectedTextChannelIds,
        knownThreadIds: null,
      };
      const values = _modDef12(selectedChannelIds).values();
      const obj3 = _modDef12(selectedChannelIds);
      const combined = values.concat(_modDef12.values(mostRecentSelectedTextChannelIds));
      const found = combined.filter(GlobalUtils.isNotNullish);
      const uniqResult = found.uniq();
      obj2.knownThreadIds = found
        .uniq()
        .filter((item) => {
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
        })
        .value();
      const result = Storage.set(SelectedChannelStore, obj2);
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
    closure_27 = {};
    c6 = null;
    c5 = undefined;
    closure_29 = {};
    closure_7 = {};
    c8 = null;
    const Storage = Storage3.Storage;
    Storage.remove(SelectedChannelStore);
  },
});
const size = fn(2);
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

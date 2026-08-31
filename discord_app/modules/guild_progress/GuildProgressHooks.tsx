// === Module 12003: usePermissions ===

// Module 12003 (usePermissions)
import closure_3 from "noop" /* 19 */;
import closure_4 from "fetchFingerprint" /* 1218 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import comparator from "comparator" /* 1982 */;
import closure_8 from "comparator" /* 1982 */;
import closure_9 from "handleInviteData" /* 4368 */;
import closure_10 from "createGuildRecordFromRust" /* 1909 */;
import closure_11 from "handlePopAllLayers" /* 12004 */;
import closure_12 from "reinjectEphemerals" /* 4703 */;
import closure_13 from "getUncachedChannelPermissions" /* 4091 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ GUILD_SELECTABLE_CHANNELS_KEY: closure_6, GUILD_VOCAL_CHANNELS_KEY: error } = comparator);
({ Permissions: closure_14, MessageTypes: closure_15 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_progress/GuildProgressHooks.tsx");

export const usePermissions = function usePermissions(channel, guild) {
  const _require = channel;
  closure_1 = guild;
  const items = [closure_13];
  const items1 = [guild, channel];
  return _require(589).useStateFromStoresObject(items, () => {
    const obj = { canInvite: channel(closure_1_2[11]).canViewInviteModal(closure_1_13, closure_1, channel), canManageGuild: null, canMessage: null, canCreateChannel: null };
    let canResult = null != closure_1;
    if (canResult) {
      canResult = obj3.can(closure_1_14.MANAGE_GUILD, tmp);
    }
    obj[1] = canResult;
    let canResult1 = null != tmp2;
    if (canResult1) {
      canResult1 = obj3.can(closure_1_14.SEND_MESSAGES, tmp2);
    }
    obj[2] = canResult1;
    let canResult2 = null != tmp;
    if (canResult2) {
      canResult2 = obj3.can(closure_1_14.MANAGE_CHANNELS, tmp);
    }
    obj[3] = canResult2;
    return obj;
  }, items1);
};
export const useGuildChannelCreated = function useGuildChannelCreated(arg0) {
  const _require = arg0;
  const items = [closure_8];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    function hasNewChannel(channel) {
      let tmp2 = null != closure_0;
      if (tmp2) {
        const obj = closure_1_1(closure_1_2[12]);
        const extractTimestampResult = closure_1_1(closure_1_2[12]).extractTimestamp(channel.channel.id);
        tmp2 = extractTimestampResult - closure_1_1(closure_1_2[12]).extractTimestamp(tmp.id) > 500;
        const obj2 = closure_1_1(closure_1_2[12]);
      }
      return tmp2;
    }
    const channels = closure_1_8.getChannels(id);
    return channels[closure_1_6].some(hasNewChannel) || channels[closure_1_7].some(hasNewChannel);
  }, items1);
};
export const useGuildPopulated = function useGuildPopulated(guild) {
  const _require = guild;
  const items = [closure_5];
  closure_1 = _require(stateFromStoresArray[10]).useStateFromStores(items, () => {
    let systemChannelId;
    if (guild != null) {
      systemChannelId = guild.systemChannelId;
    }
    return closure_1_5.getChannel(systemChannelId);
  });
  const obj = _require(stateFromStoresArray[10]);
  const items1 = [closure_12];
  stateFromStoresArray = _require(stateFromStoresArray[10]).useStateFromStoresArray(items1, () => {
    if (null != closure_1) {
      const messages = closure_1_12.getMessages(tmp.id);
      let toArrayResult = messages.toArray();
    } else {
      toArrayResult = [];
    }
    return toArrayResult;
  });
  const obj2 = _require(stateFromStoresArray[10]);
  const items2 = [closure_9];
  const items3 = [guild, stateFromStoresArray];
  return _require(stateFromStoresArray[10]).useStateFromStores(items2, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    let num = closure_1_9.getMemberCount(id);
    if (num == null) {
      num = 0;
    }
    return num > 1 || stateFromStoresArray.some((type) => type.type === constants.USER_JOIN);
  }, items3);
};
export const useGuildPersonalized = function useGuildPersonalized(guild) {
  const _require = guild;
  const items = [closure_11];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_11.hasLayers());
  const obj = _require(589);
  const items1 = [closure_10];
  const stateFromStores1 = _require(589).useStateFromStores(items1, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    return closure_1_10.getGuild(id);
  });
  let icon;
  if (stateFromStores1 != null) {
    icon = stateFromStores1.icon;
  }
  return null != icon && !stateFromStores;
};
export const useChannelsMessaged = function useChannelsMessaged(items3) {
  const _require = items3;
  const items = [closure_4];
  closure_1 = _require(589).useStateFromStores(items, () => id.getId());
  const obj = _require(589);
  const items1 = [closure_12];
  return _require(589).useStateFromStores(items1, () => callback(stateFromStoresArray[13]).some(closure_0, (id) => {
    const messages = closure_1_12.getMessages(id.id);
    const toArrayResult = messages.toArray();
    return closure_1_1(closure_1_2[13]).some(toArrayResult, (author) => {
      let tmp = author.author.id === closure_1;
      if (tmp) {
        tmp = !closure_1_1(closure_1_2[14])(author);
      }
      return tmp;
    });
  }));
};
export const useGuildMessaged = function useGuildMessaged(arg0) {
  let _require = arg0;
  const items = [closure_5];
  const stateFromStores = _require(589).useStateFromStores(items, () => {
    let mutableBasicGuildChannelsForGuild = null;
    if (null != closure_0) {
      mutableBasicGuildChannelsForGuild = closure_1_5.getMutableBasicGuildChannelsForGuild(tmp.id);
    }
    return mutableBasicGuildChannelsForGuild;
  });
  closure_1 = stateFromStores;
  const items1 = [stateFromStores];
  _require = React.useMemo(() => {
    if (null == callback) {
      let items = [];
    } else {
      items = callback(stateFromStoresArray[13]).values(tmp);
      const obj = callback(stateFromStoresArray[13]);
    }
    return items;
  }, items1);
  closure_1 = undefined;
  const obj = _require(589);
  const items2 = [closure_4];
  closure_1 = _require(589).useStateFromStores(items2, () => id.getId());
  const obj2 = _require(589);
  const items3 = [closure_12];
  return _require(589).useStateFromStores(items3, () => callback(stateFromStoresArray[13]).some(closure_0, (id) => {
    const messages = closure_1_12.getMessages(id.id);
    const toArrayResult = messages.toArray();
    return closure_1_1(closure_1_2[13]).some(toArrayResult, (author) => {
      let tmp = author.author.id === closure_1;
      if (tmp) {
        tmp = !closure_1_1(closure_1_2[14])(author);
      }
      return tmp;
    });
  }));
};
export const useCompletedStates = function useCompletedStates(guild) {
  let obj = { guildPopulated: null, guildMessaged: null, guildPersonalized: null, guildChannelCreated: null };
  let _require = guild;
  let items = [closure_5];
  closure_1 = _require(stateFromStoresArray[10]).useStateFromStores(items, () => {
    let systemChannelId;
    if (guild != null) {
      systemChannelId = guild.systemChannelId;
    }
    return closure_1_5.getChannel(systemChannelId);
  });
  let obj2 = _require(stateFromStoresArray[10]);
  let tmp = _require;
  let tmp2 = stateFromStoresArray;
  const items1 = [closure_12];
  stateFromStoresArray = _require(stateFromStoresArray[10]).useStateFromStoresArray(items1, () => {
    if (null != closure_1) {
      const messages = closure_1_12.getMessages(tmp.id);
      let toArrayResult = messages.toArray();
    } else {
      toArrayResult = [];
    }
    return toArrayResult;
  });
  const obj3 = _require(stateFromStoresArray[10]);
  const items2 = [closure_9];
  const items3 = [guild, stateFromStoresArray];
  obj[0] = _require(stateFromStoresArray[10]).useStateFromStores(items2, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    let num = closure_1_9.getMemberCount(id);
    if (num == null) {
      num = 0;
    }
    return num > 1 || stateFromStoresArray.some((type) => type.type === constants.USER_JOIN);
  }, items3);
  _require = guild;
  closure_1 = undefined;
  const obj4 = _require(stateFromStoresArray[10]);
  const items4 = [closure_5];
  const stateFromStores = _require(stateFromStoresArray[10]).useStateFromStores(items4, () => {
    let mutableBasicGuildChannelsForGuild = null;
    if (null != closure_0) {
      mutableBasicGuildChannelsForGuild = closure_1_5.getMutableBasicGuildChannelsForGuild(tmp.id);
    }
    return mutableBasicGuildChannelsForGuild;
  });
  closure_1 = stateFromStores;
  const items5 = [stateFromStores];
  _require = React.useMemo(() => {
    if (null == callback) {
      let items = [];
    } else {
      items = callback(stateFromStoresArray[13]).values(tmp);
      const obj = callback(stateFromStoresArray[13]);
    }
    return items;
  }, items5);
  closure_1 = undefined;
  const obj5 = _require(stateFromStoresArray[10]);
  const items6 = [closure_4];
  closure_1 = _require(stateFromStoresArray[10]).useStateFromStores(items6, () => id.getId());
  const obj6 = _require(stateFromStoresArray[10]);
  const items7 = [closure_12];
  obj[1] = _require(stateFromStoresArray[10]).useStateFromStores(items7, () => callback(stateFromStoresArray[13]).some(closure_0, (id) => {
    const messages = closure_1_12.getMessages(id.id);
    const toArrayResult = messages.toArray();
    return closure_1_1(closure_1_2[13]).some(toArrayResult, (author) => {
      let tmp = author.author.id === closure_1;
      if (tmp) {
        tmp = !closure_1_1(closure_1_2[14])(author);
      }
      return tmp;
    });
  }));
  _require = guild;
  const obj7 = _require(stateFromStoresArray[10]);
  const items8 = [closure_11];
  const stateFromStores1 = _require(stateFromStoresArray[10]).useStateFromStores(items8, () => closure_11.hasLayers());
  const obj8 = _require(stateFromStoresArray[10]);
  const items9 = [closure_10];
  const stateFromStores2 = _require(stateFromStoresArray[10]).useStateFromStores(items9, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    return closure_1_10.getGuild(id);
  });
  let icon;
  if (stateFromStores2 != null) {
    icon = stateFromStores2.icon;
  }
  obj[2] = null != icon && !stateFromStores1;
  _require = guild;
  const obj9 = _require(stateFromStoresArray[10]);
  const items10 = [closure_8];
  const items11 = [guild];
  obj[3] = tmp(tmp2[10]).useStateFromStores(items10, () => {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    function hasNewChannel(channel) {
      let tmp2 = null != closure_0;
      if (tmp2) {
        const obj = closure_1_1(closure_1_2[12]);
        const extractTimestampResult = closure_1_1(closure_1_2[12]).extractTimestamp(channel.channel.id);
        tmp2 = extractTimestampResult - closure_1_1(closure_1_2[12]).extractTimestamp(tmp.id) > 500;
        const obj2 = closure_1_1(closure_1_2[12]);
      }
      return tmp2;
    }
    const channels = closure_1_8.getChannels(id);
    return channels[closure_1_6].some(hasNewChannel) || channels[closure_1_7].some(hasNewChannel);
  }, items11);
  return obj;
};
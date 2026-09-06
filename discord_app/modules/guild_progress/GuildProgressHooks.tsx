// === Module 12472: GuildProgressHooks ===

// Module 12472 (GuildProgressHooks)
import _modDef12 from "module_12" /* 12 */;
import canViewInviteModal from "canViewInviteModal" /* 9774 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 4480 */;
import GuildStore from "GuildStore" /* 1979 */;
import LayerStore from "LayerStore" /* 12473 */;
import MessageStore from "MessageStore" /* 4781 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
let GuildChannelStore = fn(2012);
({ GUILD_SELECTABLE_CHANNELS_KEY: metroRequire, GUILD_VOCAL_CHANNELS_KEY: closure_7 } = GuildChannelStore);
const Constants = fn(1074);
({ Permissions: closure_14, MessageTypes: closure_15 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressHooks.tsx");

export const usePermissions = function usePermissions(channel, guild) {
  _require = channel;
  closure_1 = guild;
  const items = [PermissionStore];
  const items1 = [guild, channel];
  return require("initialize").useStateFromStoresObject(items, () => {
    const obj = { canInvite: canViewInviteModal.canViewInviteModal(PermissionStore, closure_1, closure_0), canManageGuild: null, canMessage: null, canCreateChannel: null };
    let canResult = null != closure_1;
    if (canResult) {
      canResult = obj3.can(constants.MANAGE_GUILD, tmp);
    }
    obj.canManageGuild = canResult;
    let canResult1 = null != tmp2;
    if (canResult1) {
      canResult1 = obj3.can(constants.SEND_MESSAGES, tmp2);
    }
    obj.canMessage = canResult1;
    let canResult2 = null != tmp;
    if (canResult2) {
      canResult2 = obj3.can(constants.MANAGE_CHANNELS, tmp);
    }
    obj.canCreateChannel = canResult2;
    return obj;
  }, items1);
};
export const useGuildChannelCreated = function useGuildChannelCreated(arg0) {
  _require = arg0;
  const items = [GuildChannelStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    id = undefined;
    if (guild != null) {
      id = guild.id;
    }
    function hasNewChannel(channel) {
      let tmp2 = null != guild;
      if (tmp2) {
        const obj = closure_1(stateFromStoresArray[12]);
        const extractTimestampResult = closure_1(stateFromStoresArray[12]).extractTimestamp(channel.channel.id);
        tmp2 = extractTimestampResult - closure_1(stateFromStoresArray[12]).extractTimestamp(tmp.id) > 500;
        const obj2 = closure_1(stateFromStoresArray[12]);
      }
      return tmp2;
    }
    const channels = GuildChannelStore.getChannels(id);
    return channels[timestampProducer].some(hasNewChannel) || channels[React5].some(hasNewChannel);
  }, items1);
};
export const useGuildPopulated = function useGuildPopulated(guild) {
  _require = guild;
  const items = [ChannelStore];
  closure_1 = require("initialize").useStateFromStores(items, () => {
    let systemChannelId;
    if (guild != null) {
      systemChannelId = guild.systemChannelId;
    }
    return ChannelStore.getChannel(systemChannelId);
  });
  const obj = require("initialize");
  const items1 = [MessageStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    if (null != closure_1) {
      messages = MessageStore.getMessages(tmp.id);
      let toArrayResult = messages.toArray();
    } else {
      toArrayResult = [];
    }
    return toArrayResult;
  });
  const obj2 = require("initialize");
  const items2 = [GuildMemberCountStore];
  const items3 = [guild, stateFromStoresArray];
  return require("initialize").useStateFromStores(items2, () => {
    id = undefined;
    if (guild != null) {
      id = guild.id;
    }
    let num = GuildMemberCountStore.getMemberCount(id);
    if (num == null) {
      num = 0;
    }
    return num > 1 || stateFromStoresArray.some((type) => type.type === constants.USER_JOIN);
  }, items3);
};
export const useGuildPersonalized = function useGuildPersonalized(guild) {
  _require = guild;
  const items = [LayerStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => LayerStore.hasLayers());
  const obj = require("initialize");
  const items1 = [GuildStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    id = undefined;
    if (guild != null) {
      id = guild.id;
    }
    return GuildStore.getGuild(id);
  });
  let icon;
  if (stateFromStores1 != null) {
    icon = stateFromStores1.icon;
  }
  return null != icon && !stateFromStores;
};
export const useChannelsMessaged = function useChannelsMessaged(items3) {
  _require = items3;
  const items = [AuthenticationStore];
  closure_1 = require("initialize").useStateFromStores(items, () => id.getId());
  const obj = require("initialize");
  const items1 = [MessageStore];
  return require("initialize").useStateFromStores(items1, () => _modDef12.some(closure_0, (id) => {
    messages = messages.getMessages(id.id);
    const toArrayResult = messages.toArray();
    return closure_1(stateFromStoresArray[13]).some(toArrayResult, (author) => {
      let tmp = author.author.id === closure_1_1;
      if (tmp) {
        tmp = !closure_2_1(stateFromStoresArray[14])(author);
      }
      return tmp;
    });
  }));
};
export const useGuildMessaged = function useGuildMessaged(arg0) {
  _require = arg0;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let mutableBasicGuildChannelsForGuild = null;
    if (null != closure_0) {
      mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(tmp.id);
    }
    return mutableBasicGuildChannelsForGuild;
  });
  const items1 = [stateFromStores];
  closure_129_0 = noop.useMemo(() => {
    if (null == closure_1) {
      let items = [];
    } else {
      items = _modDef12.values(tmp);
    }
    return items;
  }, items1);
  const obj = require("initialize");
  const items2 = [AuthenticationStore];
  closure_129_1 = require("initialize").useStateFromStores(items2, () => id.getId());
  const obj2 = require("initialize");
  const items3 = [MessageStore];
  return require("initialize").useStateFromStores(items3, () => _modDef12.some(closure_0, (id) => {
    messages = messages.getMessages(id.id);
    const toArrayResult = messages.toArray();
    return closure_1(stateFromStoresArray[13]).some(toArrayResult, (author) => {
      let tmp = author.author.id === closure_1_1;
      if (tmp) {
        tmp = !closure_2_1(stateFromStoresArray[14])(author);
      }
      return tmp;
    });
  }));
};
export const useCompletedStates = function useCompletedStates(guild) {
  let obj = { guildPopulated: null, guildMessaged: null, guildPersonalized: null, guildChannelCreated: null };
  _require = guild;
  let items = [ChannelStore];
  closure_1 = require("initialize").useStateFromStores(items, () => {
    let systemChannelId;
    if (guild != null) {
      systemChannelId = guild.systemChannelId;
    }
    return ChannelStore.getChannel(systemChannelId);
  });
  let obj2 = require("initialize");
  let tmp = _require;
  let tmp2 = stateFromStoresArray;
  const items1 = [MessageStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    if (null != closure_1) {
      messages = MessageStore.getMessages(tmp.id);
      let toArrayResult = messages.toArray();
    } else {
      toArrayResult = [];
    }
    return toArrayResult;
  });
  const obj3 = require("initialize");
  const items2 = [GuildMemberCountStore];
  const items3 = [guild, stateFromStoresArray];
  obj.guildPopulated = require("initialize").useStateFromStores(items2, () => {
    id = undefined;
    if (guild != null) {
      id = guild.id;
    }
    let num = GuildMemberCountStore.getMemberCount(id);
    if (num == null) {
      num = 0;
    }
    return num > 1 || stateFromStoresArray.some((type) => type.type === constants.USER_JOIN);
  }, items3);
  closure_129_0 = guild;
  const obj4 = require("initialize");
  const items4 = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items4, () => {
    let mutableBasicGuildChannelsForGuild = null;
    if (null != closure_0) {
      mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(tmp.id);
    }
    return mutableBasicGuildChannelsForGuild;
  });
  closure_129_1 = stateFromStores;
  const items5 = [stateFromStores];
  closure_130_0 = noop.useMemo(() => {
    if (null == closure_1) {
      let items = [];
    } else {
      items = _modDef12.values(tmp);
    }
    return items;
  }, items5);
  const obj5 = require("initialize");
  const items6 = [AuthenticationStore];
  closure_130_1 = require("initialize").useStateFromStores(items6, () => id.getId());
  const obj6 = require("initialize");
  const items7 = [MessageStore];
  obj.guildMessaged = require("initialize").useStateFromStores(items7, () => _modDef12.some(closure_0, (id) => {
    messages = messages.getMessages(id.id);
    const toArrayResult = messages.toArray();
    return closure_1(stateFromStoresArray[13]).some(toArrayResult, (author) => {
      let tmp = author.author.id === closure_1_1;
      if (tmp) {
        tmp = !closure_2_1(stateFromStoresArray[14])(author);
      }
      return tmp;
    });
  }));
  closure_131_0 = guild;
  const obj7 = require("initialize");
  const items8 = [LayerStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items8, () => LayerStore.hasLayers());
  const obj8 = require("initialize");
  const items9 = [GuildStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items9, () => {
    id = undefined;
    if (guild != null) {
      id = guild.id;
    }
    return GuildStore.getGuild(id);
  });
  let icon;
  if (stateFromStores2 != null) {
    icon = stateFromStores2.icon;
  }
  obj.guildPersonalized = null != icon && !stateFromStores1;
  closure_132_0 = guild;
  const obj9 = require("initialize");
  const items10 = [GuildChannelStore];
  const items11 = [guild];
  obj.guildChannelCreated = tmp(tmp2[10]).useStateFromStores(items10, () => {
    id = undefined;
    if (guild != null) {
      id = guild.id;
    }
    function hasNewChannel(channel) {
      let tmp2 = null != guild;
      if (tmp2) {
        const obj = closure_1(stateFromStoresArray[12]);
        const extractTimestampResult = closure_1(stateFromStoresArray[12]).extractTimestamp(channel.channel.id);
        tmp2 = extractTimestampResult - closure_1(stateFromStoresArray[12]).extractTimestamp(tmp.id) > 500;
        const obj2 = closure_1(stateFromStoresArray[12]);
      }
      return tmp2;
    }
    const channels = GuildChannelStore.getChannels(id);
    return channels[timestampProducer].some(hasNewChannel) || channels[React5].some(hasNewChannel);
  }, items11);
  return obj;
};
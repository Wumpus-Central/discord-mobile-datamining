// discord_app/modules/inbox/RecentMentionsStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import TimeUtils from "../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import AgeGateUtils from "../age_gate/AgeGateUtils.tsx";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import isMessageMentioned from "../messages/isMessageMentioned.tsx";
import isSystemMessageDefault from "../messages/isSystemMessage.tsx";
import MessageRecord from "../../records/MessageRecord.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const isMessageMentionedDefault = isMessageMentioned;

require = fn;
function findOrCreateMessageRecord(channel_id) {
  if (channel_id instanceof MessageRecord) {
    return channel_id;
  } else {
    let message = MessageStore.getMessage(channel_id.channel_id, channel_id.id);
    if (null == message) {
      message = MessageRecordUtils.createMessageRecord(channel_id);
    }
    return message;
  }
}
function hasMentionNotificationEnabled(channel_id) {
  const basicChannel = ChannelStore.getBasicChannel(channel_id.channel_id);
  if (null != basicChannel) {
    const GUILD_TEXTUAL = constants4.GUILD_TEXTUAL;
    if (GUILD_TEXTUAL.has(basicChannel.type)) {
      let obj = UserGuildSettingsStore;
      if (UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(basicChannel.guild_id, basicChannel.id)) {
        return false;
      } else {
        if (obj2.shouldShowAgeGateForChannelId(basicChannel.id)) {
          return false;
        } else {
          const result = obj.resolvedMessageNotifications(basicChannel);
          if (constants3.ALL_MESSAGES === result) {
            return true;
          } else if (tmp5.ONLY_MENTIONS === result) {
            const result1 = obj.isSuppressEveryoneEnabled(basicChannel.guild_id);
            const result2 = obj.isSuppressRolesEnabled(basicChannel.guild_id);
            const currentUser = UserStore.getCurrentUser();
            let tmp10 = null != currentUser;
            if (tmp10) {
              obj = { message: channel_id, userId: currentUser.id, suppressEveryone: result1, suppressRoles: result2 };
              tmp10 = isMessageMentionedDefault(obj);
            }
            return tmp10;
          } else {
            const NO_MESSAGES = tmp5.NO_MESSAGES;
            return false;
          }
        }
        obj2 = AgeGateUtils;
      }
    }
  }
  return false;
}
function parseMessage(message, channelId) {
  let channel_id = channelId;
  if (channelId === undefined) {
    channel_id = null;
  }
  if (isSystemMessageDefault(message)) {
    const SELF_MENTIONABLE_SYSTEM = constants2.SELF_MENTIONABLE_SYSTEM;
    if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
      return null;
    }
  }
  if (null == channel_id) {
    channel_id = message.channel_id;
  }
  const channel = ChannelStore.getChannel(channel_id);
  if (null != channel) {
    if (channel.type !== constants.DM) {
      if (closure_23.guildFilter === RecentMentionsFilters.THIS_SERVER) {
        const guildId = channel.getGuildId();
        if (guildId !== SelectedGuildStore.getGuildId()) {
          return null;
        }
      }
      const id = AuthenticationStore.getId();
      if (!RelationshipStore.isBlockedOrIgnoredForMessage(message)) {
        if (!tmp2(7638)(message, id)) {
          let tmp12 = message;
          if (!(message instanceof MessageRecord)) {
            message = MessageStore.getMessage(message.channel_id, message.id);
            if (null == message) {
              message = MessageRecordUtils.createMessageRecord(message);
            }
            tmp12 = message;
          }
          let obj = {
            message: tmp12,
            userId: id,
            suppressEveryone: !closure_23.everyoneFilter,
            suppressRoles: !closure_23.roleFilter,
          };
          let tmp20 = null;
          if (tmp2(4798)(obj)) {
            let tmp2ResultResult = c26;
            if (c26) {
              tmp2ResultResult = ReadStateStore.ackMessageId(channel.id) !== tmp12.id;
            }
            if (tmp2ResultResult) {
              obj = {
                message: tmp12,
                userId: id,
                suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(channel.getGuildId()),
                suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(channel.getGuildId()),
              };
              tmp2ResultResult = tmp2(4798)(obj);
              const tmp2Result = tmp2(4798);
            }
            tmp20 = tmp12;
            if (tmp2ResultResult) {
              c26 = false;
              tmp20 = tmp12;
            }
          }
          return tmp20;
        }
      }
      return null;
    }
  }
  return null;
}
function deleteMessage(arg0) {
  closure_0 = arg0;
  if (null == dependencyMap[arg0]) {
    return false;
  } else {
    delete tmp[tmp2];
    const obj = { deletedMessages: _modDef12.filter(substr, (id) => id.id === id) };
    ({ addedMessages, deletedMessages } = obj);
    if (null != addedMessages) {
      const item = addedMessages.forEach((getChannelId) => {
        if (null == dependencyMap[getChannelId.getChannelId(getChannelId)]) {
          dependencyMap[getChannelId.getChannelId()] = 0;
        }
        const channelId = getChannelId.getChannelId();
        dependencyMap[channelId] = dependencyMap[channelId] + 1;
      });
    }
    if (null != deletedMessages) {
      const item1 = deletedMessages.forEach((getChannelId) => {
        if (null != dependencyMap[getChannelId.getChannelId(getChannelId)]) {
          const _Math = Math;
          const channelId = getChannelId.getChannelId();
          dependencyMap[channelId] = Math.max(0, dependencyMap[getChannelId.getChannelId(getChannelId)] - 1);
        }
      });
    }
    substr = _modDef12.filter(substr, (id) => id.id !== id);
  }
}
function handleMessageDelete(id) {
  id = id.id;
  if (null != dependencyMap[id]) {
    delete tmp[tmp2];
    const obj = { deletedMessages: _modDef12.filter(substr, (id) => id.id === id) };
    ({ addedMessages, deletedMessages } = obj);
    if (null != addedMessages) {
      const item = addedMessages.forEach((getChannelId) => {
        if (null == dependencyMap[getChannelId.getChannelId(getChannelId)]) {
          dependencyMap[getChannelId.getChannelId()] = 0;
        }
        const channelId = getChannelId.getChannelId();
        dependencyMap[channelId] = dependencyMap[channelId] + 1;
      });
    }
    if (null != deletedMessages) {
      const item1 = deletedMessages.forEach((getChannelId) => {
        if (null != dependencyMap[getChannelId.getChannelId(getChannelId)]) {
          const _Math = Math;
          const channelId = getChannelId.getChannelId();
          dependencyMap[channelId] = Math.max(0, dependencyMap[getChannelId.getChannelId(getChannelId)] - 1);
        }
      });
    }
    substr = _modDef12.filter(substr, (id) => id.id !== id);
    const tmp4Result = _modDef12;
  }
  return false;
}
function handleSetRecentMentionsFilters(arg0) {
  const obj = {};
  const merged = Object.assign(closure_23);
  const obj2 = _modDef12;
  closure_23 = obj2.defaults(_modDef12.pick(arg0, ["guildFilter", "roleFilter", "everyoneFilter"]), closure_23);
  const Storage = items(510).Storage;
  const result = Storage.set(recentMentionFilterSettings, closure_23);
  let tmp4 = obj.guildFilter !== closure_23.guildFilter;
  if (tmp4) {
    tmp4 = closure_23.guildFilter === tmp3;
  }
  if (!tmp4) {
    let tmp7 = obj.everyoneFilter !== closure_23.everyoneFilter;
    if (tmp7) {
      tmp7 = closure_23.everyoneFilter === false;
    }
    tmp4 = tmp7;
  }
  if (!tmp4) {
    let tmp10 = obj.roleFilter !== closure_23.roleFilter;
    if (tmp10) {
      tmp10 = closure_23.roleFilter === false;
    }
    tmp4 = tmp10;
  }
  closure_20 = {};
  items = [];
  if (tmp4) {
    const item = items.forEach((item) => {
      const tmp = parseMessage(item);
      if (null != tmp) {
        items.push(tmp);
        closure_20[tmp.id] = true;
      }
    });
  }
  dependencyMap = {};
  const item1 = items.forEach((getChannelId) => {
    if (null == dependencyMap[getChannelId.getChannelId(getChannelId)]) {
      dependencyMap[getChannelId.getChannelId()] = 0;
    }
    const channelId = getChannelId.getChannelId();
    dependencyMap[channelId] = dependencyMap[channelId] + 1;
  });
  if (0 === items.length) {
    c24 = false;
  }
}
function handleRelationshipUpdate() {
  const obj = {
    deletedMessages: _modDef12.filter(substr, (message) => RelationshipStore.isBlockedOrIgnoredForMessage(message)),
  };
  ({ addedMessages, deletedMessages } = obj);
  if (null != addedMessages) {
    const item = addedMessages.forEach((getChannelId) => {
      if (null == dependencyMap[getChannelId.getChannelId(getChannelId)]) {
        dependencyMap[getChannelId.getChannelId()] = 0;
      }
      const channelId = getChannelId.getChannelId();
      dependencyMap[channelId] = dependencyMap[channelId] + 1;
    });
  }
  if (null != deletedMessages) {
    const item1 = deletedMessages.forEach((getChannelId) => {
      if (null != dependencyMap[getChannelId.getChannelId(getChannelId)]) {
        const _Math = Math;
        const channelId = getChannelId.getChannelId();
        dependencyMap[channelId] = Math.max(0, dependencyMap[getChannelId.getChannelId(getChannelId)] - 1);
      }
    });
  }
  substr = substr.filter((item) => !RelationshipStore.isBlockedOrIgnoredForMessage(item));
}
function handleDeleteChannel(channel) {
  channel = channel.channel;
  const items = [];
  closure_18 = items(12).filter(closure_18, (channel_id) => {
    let flag = channel_id.channel_id !== channel.id;
    if (!flag) {
      const id = channel_id.id;
      delete tmp2[tmp];
      items.push(channel_id);
      flag = false;
    }
    return flag;
  });
  ({ addedMessages, deletedMessages } = { deletedMessages: items });
  if (null != addedMessages) {
    const item = addedMessages.forEach((getChannelId) => {
      if (null == dependencyMap[getChannelId.getChannelId(getChannelId)]) {
        dependencyMap[getChannelId.getChannelId()] = 0;
      }
      const channelId = getChannelId.getChannelId();
      dependencyMap[channelId] = dependencyMap[channelId] + 1;
    });
  }
  if (null != deletedMessages) {
    const item1 = deletedMessages.forEach((getChannelId) => {
      if (null != dependencyMap[getChannelId.getChannelId(getChannelId)]) {
        const _Math = Math;
        const channelId = getChannelId.getChannelId();
        dependencyMap[channelId] = Math.max(0, dependencyMap[getChannelId.getChannelId(getChannelId)] - 1);
      }
    });
  }
}
const Constants = fn(1074);
const RecentMentionsFilters = Constants.RecentMentionsFilters;
({
  ChannelTypes: map1,
  MessageTypesSets: closure_14,
  UserNotificationSettings: closure_15,
  ChannelTypesSets: closure_16,
} = Constants);
const recentMentionFilterSettings = "recentMentionFilterSettings";
let substr = [];
let closure_19 = {};
let dependencyMap = {};
let c21 = false;
let c22 = true;
let Storage = fn(510).Storage;
let obj = { guildFilter: RecentMentionsFilters.ALL_SERVERS, everyoneFilter: true, roleFilter: true };
let closure_23 = Storage.get("recentMentionFilterSettings", obj);
let c24 = false;
let closure_25 = 0;
let c26 = false;
const Store = initializeDefault.Store;
class RecentMentionsStore extends Store {}
const prototype = RecentMentionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    AuthenticationStore,
    ChannelStore,
    MessageStore,
    ReadStateStore,
    RelationshipStore,
    SelectedGuildStore,
    UserGuildSettingsStore,
    UserStore,
  );
};
Object.defineProperty(prototype, "hasLoadedEver", {
  get: function hasLoadedEver() {
    return c24;
  },
  set: undefined,
});
Object.defineProperty(prototype, "lastLoaded", {
  get: function lastLoaded() {
    return closure_25;
  },
  set: undefined,
});
prototype["getMentions"] = function getMentions() {
  if (c24) {
    let tmp2 = substr;
  } else {
    tmp2 = null;
  }
  return tmp2;
};
prototype["getSettingsFilteredMentions"] = function getSettingsFilteredMentions() {
  if (c24) {
    let found = substr.filter(hasMentionNotificationEnabled);
  } else {
    found = null;
  }
  return found;
};
prototype["hasMention"] = function hasMention(arg0) {
  return dependencyMap[arg0];
};
Object.defineProperty(prototype, "loading", {
  get: function loading() {
    return c21;
  },
  set: undefined,
});
Object.defineProperty(prototype, "hasMore", {
  get: function hasMore() {
    return c22;
  },
  set: undefined,
});
Object.defineProperty(prototype, "guildFilter", {
  get: function guildFilter() {
    return closure_23.guildFilter;
  },
  set: undefined,
});
Object.defineProperty(prototype, "everyoneFilter", {
  get: function everyoneFilter() {
    return closure_23.everyoneFilter;
  },
  set: undefined,
});
Object.defineProperty(prototype, "roleFilter", {
  get: function roleFilter() {
    return closure_23.roleFilter;
  },
  set: undefined,
});
Object.defineProperty(prototype, "mentionsAreStale", {
  get: function mentionsAreStale() {
    return c26;
  },
  set: undefined,
});
Object.defineProperty(prototype, "mentionCountByChannel", {
  get: function mentionCountByChannel() {
    return closure_19;
  },
  set: undefined,
});
prototype["getMentionCountForChannel"] = function getMentionCountForChannel(arg0) {
  let num = closure_19[arg0];
  if (num == null) {
    num = 0;
  }
  return num;
};
RecentMentionsStore.displayName = "RecentMentionsStore";
obj = {
  LOAD_RECENT_MENTIONS: function handleLoadMentions(guildId) {
    c21 = true;
    let tmp = null == guildId.guildId;
    if (tmp) {
      tmp = closure_23.guildFilter === RecentMentionsFilters.THIS_SERVER;
    }
    if (tmp) {
      const obj = { guildFilter: RecentMentionsFilters.ALL_SERVERS };
      handleSetRecentMentionsFilters(obj);
    }
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function handleLoadMentionsSuccess(arg0) {
    ({ hasMoreAfter, messages, isAfter } = arg0);
    const mapped = _modDef12.map(messages, findOrCreateMessageRecord);
    ({ addedMessages, deletedMessages } = { addedMessages: mapped });
    if (null != addedMessages) {
      const item = addedMessages.forEach((getChannelId) => {
        if (null == dependencyMap[getChannelId.getChannelId(getChannelId)]) {
          dependencyMap[getChannelId.getChannelId()] = 0;
        }
        const channelId = getChannelId.getChannelId();
        dependencyMap[channelId] = dependencyMap[channelId] + 1;
      });
    }
    if (null != deletedMessages) {
      const item1 = deletedMessages.forEach((getChannelId) => {
        if (null != dependencyMap[getChannelId.getChannelId(getChannelId)]) {
          const _Math = Math;
          const channelId = getChannelId.getChannelId();
          dependencyMap[channelId] = Math.max(0, dependencyMap[getChannelId.getChannelId(getChannelId)] - 1);
        }
      });
    }
    if (isAfter) {
      substr = substr.concat(mapped);
    } else {
      substr = mapped;
      closure_20 = {};
    }
    const item2 = _modDef12.forEach(mapped, (id) => {
      dependencyMap[id.id] = true;
    });
    c21 = false;
    c22 = hasMoreAfter;
    const tmpResult = _modDef12;
    closure_25 = TimeUtils.now();
    c24 = true;
  },
  LOAD_RECENT_MENTIONS_FAILURE: function handleLoadMentionsFailure() {
    c21 = false;
  },
  SET_RECENT_MENTIONS_FILTER: handleSetRecentMentionsFilters,
  CLEAR_MENTIONS: function handleClearMentions() {
    substr = [];
    closure_20 = {};
    c24 = false;
    c26 = false;
    closure_19 = {};
  },
  TRUNCATE_MENTIONS: function handleTruncateMentions(size) {
    let length;
    size = size.size;
    ({ addedMessages, deletedMessages } = { deletedMessages: substr.slice(size) });
    if (null != addedMessages) {
      const item = addedMessages.forEach((getChannelId) => {
        if (null == dependencyMap[getChannelId.getChannelId(getChannelId)]) {
          dependencyMap[getChannelId.getChannelId()] = 0;
        }
        const channelId = getChannelId.getChannelId();
        dependencyMap[channelId] = dependencyMap[channelId] + 1;
      });
    }
    if (null != deletedMessages) {
      const item1 = deletedMessages.forEach((getChannelId) => {
        if (null != dependencyMap[getChannelId.getChannelId(getChannelId)]) {
          const _Math = Math;
          const channelId = getChannelId.getChannelId();
          dependencyMap[channelId] = Math.max(0, dependencyMap[getChannelId.getChannelId(getChannelId)] - 1);
        }
      });
    }
    let sum = size;
    if (size < substr.length) {
      do {
        let id = substr[sum].id;
        delete tmp2[tmp];
        sum = sum + 1;
        length = substr.length;
      } while (sum < length);
    }
    substr = substr.slice(0, size);
    if (substr.length > substr.length) {
      c22 = true;
    }
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    if (closure_23.guildFilter !== RecentMentionsFilters.THIS_SERVER) {
      return false;
    } else {
      c24 = false;
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    substr = [];
    closure_20 = {};
    c24 = false;
    c26 = false;
    closure_19 = {};
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const items = [];
    closure_18 = items(12).filter(closure_18, (channel_id) => {
      const channel = ChannelStore.getChannel(channel_id.channel_id);
      let flag = null != channel;
      if (flag) {
        flag = channel.getGuildId() !== guild.id;
      }
      if (!flag) {
        const id = channel_id.id;
        delete tmp2[tmp];
        items.push(channel_id);
        flag = false;
      }
      return flag;
    });
    ({ addedMessages, deletedMessages } = { deletedMessages: items });
    if (null != addedMessages) {
      const item = addedMessages.forEach((getChannelId) => {
        if (null == dependencyMap[getChannelId.getChannelId(getChannelId)]) {
          dependencyMap[getChannelId.getChannelId()] = 0;
        }
        const channelId = getChannelId.getChannelId();
        dependencyMap[channelId] = dependencyMap[channelId] + 1;
      });
    }
    if (null != deletedMessages) {
      const item1 = deletedMessages.forEach((getChannelId) => {
        if (null != dependencyMap[getChannelId.getChannelId(getChannelId)]) {
          const _Math = Math;
          const channelId = getChannelId.getChannelId();
          dependencyMap[channelId] = Math.max(0, dependencyMap[getChannelId.getChannelId(getChannelId)] - 1);
        }
      });
    }
  },
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    message = message.message;
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      let obj = { rawMessage: message, userId: currentUser.id, suppressRoles: false, suppressEveryone: false };
      if (obj2.isRawMessageMentioned(obj)) {
        const tmp3 = parseMessage(message, message.channelId);
        if (null == tmp3) {
          return false;
        } else {
          substr = substr.slice();
          substr.unshift(tmp3);
          closure_20[tmp3.id] = true;
          obj = { addedMessages: null };
          const items = [tmp3];
          obj.addedMessages = items;
          ({ addedMessages, deletedMessages } = obj);
          if (null != addedMessages) {
            const item = addedMessages.forEach((getChannelId) => {
              if (null == dependencyMap[getChannelId.getChannelId(getChannelId)]) {
                dependencyMap[getChannelId.getChannelId()] = 0;
              }
              const channelId = getChannelId.getChannelId();
              dependencyMap[channelId] = dependencyMap[channelId] + 1;
            });
          }
          if (null != deletedMessages) {
            const item1 = deletedMessages.forEach((getChannelId) => {
              if (null != dependencyMap[getChannelId.getChannelId(getChannelId)]) {
                const _Math = Math;
                const channelId = getChannelId.getChannelId();
                dependencyMap[channelId] = Math.max(0, dependencyMap[getChannelId.getChannelId(getChannelId)] - 1);
              }
            });
          }
        }
      }
      obj2 = isMessageMentioned;
    }
    return false;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    if (null != id) {
      if (null != dependencyMap[id]) {
        const findIndexResult = _modDef12.findIndex(substr, (id) => id.id === id);
        substr = substr.slice();
        if (null != substr[findIndexResult]) {
          substr[findIndexResult] = MessageRecordUtils.updateMessageRecord(tmp7, message.message);
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: handleMessageDelete,
  RECENT_MENTION_DELETE: handleMessageDelete,
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    const item = _modDef12.forEach(ids.ids, deleteMessage);
  },
  CHANNEL_DELETE: handleDeleteChannel,
  THREAD_DELETE: handleDeleteChannel,
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  SET_RECENT_MENTIONS_STALE: function handleSetRecentMentionsStale() {
    c26 = true;
  },
};
const recentMentionsStore = new RecentMentionsStore(DispatcherDefault, obj);
let size = fn(2);
let result = size.fileFinishedImporting("modules/inbox/RecentMentionsStore.tsx");

export default recentMentionsStore;
export { hasMentionNotificationEnabled };
export { parseMessage };

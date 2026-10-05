// === Module 7122: RecentMentionsStore ===

// Module 7122 (RecentMentionsStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import TimeUtils from "TimeUtils" /* 4919 */;
import AgeGateUtils from "AgeGateUtils" /* 5100 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5112 */;
import isMessageMentioned from "isMessageMentioned" /* 5309 */;
import isSystemMessageDefault from "isSystemMessage" /* 6773 */;
import shouldRemoveSelfMentionDefault from "shouldRemoveSelfMention" /* 7123 */;
import MessageRecord from "MessageRecord" /* 4520 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5110 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size_mod from "module_2" /* 2 */;

const isMessageMentionedDefault = isMessageMentioned;

let closure_14;
let closure_15;
let closure_16;
let map1;
const f94276 = (getChannelId) => {
  if (null == closure_1_19[getChannelId.getChannelId(getChannelId)]) {
    closure_1_19[getChannelId.getChannelId()] = 0;
  }
  const channelId = getChannelId.getChannelId();
  closure_1_19[channelId] = closure_1_19[channelId] + 1;
};
const f94277 = (getChannelId) => {
  if (null != closure_1_19[getChannelId.getChannelId(getChannelId)]) {
    const _Math = Math;
    const channelId = getChannelId.getChannelId();
    closure_1_19[channelId] = Math.max(0, closure_1_19[getChannelId.getChannelId(getChannelId)] - 1);
  }
};
function findOrCreateMessageRecord(channel_id) {
  if (channel_id instanceof MessageRecord) {
    return channel_id;
  } else {
    let message = MessageStore.getMessage(channel_id.channel_id, channel_id.id);
    if (null == message) {
      const obj = MessageRecordUtils;
      message = obj.createMessageRecord(channel_id);
    }
    return message;
  }
}
function hasMentionNotificationEnabled(channel_id) {
  const basicChannel = ChannelStore.getBasicChannel(channel_id.channel_id);
  if (null != basicChannel) {
    const GUILD_TEXTUAL = constants4.GUILD_TEXTUAL;
    if (GUILD_TEXTUAL.has(basicChannel.type)) {
      if (UserGuildSettingsStore.isGuildOrCategoryOrChannelMuted(basicChannel.guild_id, basicChannel.id)) {
        return false;
      } else {
        const obj2 = AgeGateUtils;
        if (obj2.shouldShowAgeGateForChannelId(basicChannel.id)) {
          return false;
        } else {
          const result = UserGuildSettingsStore.resolvedMessageNotifications(basicChannel);
          if (constants3.ALL_MESSAGES === result) {
            return true;
          } else if (constants3.ONLY_MENTIONS === result) {
            const result1 = UserGuildSettingsStore.isSuppressEveryoneEnabled(basicChannel.guild_id);
            const result2 = UserGuildSettingsStore.isSuppressRolesEnabled(basicChannel.guild_id);
            const currentUser = UserStore.getCurrentUser();
            let tmp10 = null != currentUser;
            if (tmp10) {
              const obj3 = { message: channel_id, userId: currentUser.id, suppressEveryone: result1, suppressRoles: result2 };
              tmp10 = isMessageMentionedDefault(obj3);
            }
            return tmp10;
          } else {
            const NO_MESSAGES = constants3.NO_MESSAGES;
            return false;
          }
        }
      }
    }
  }
  return false;
}
function parseMessage(message) {
  let tmp17;
  let tmp19;
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
    if (channel.type !== map1.DM) {
      if (closure_23.guildFilter === RecentMentionsFilters.THIS_SERVER) {
        const guildId = channel.getGuildId();
        if (guildId !== SelectedGuildStore.getGuildId()) {
          return null;
        }
      }
      const id = AuthenticationStore.getId();
      if (!RelationshipStore.isBlockedOrIgnoredForMessage(message)) {
        if (!shouldRemoveSelfMentionDefault(message, id)) {
          let tmp12 = message;
          if (!(message instanceof MessageRecord)) {
            message = MessageStore.getMessage(message.channel_id, message.id);
            if (null == message) {
              const obj2 = MessageRecordUtils;
              message = obj2.createMessageRecord(message);
            }
            tmp12 = message;
          }
          const obj = { message: tmp12, userId: id, suppressEveryone: tmp17, suppressRoles: tmp19 };
          let tmp20 = null;
          tmp17 = !closure_23.everyoneFilter;
          tmp19 = !closure_23.roleFilter;
          if (isMessageMentionedDefault(obj)) {
            let tmp2ResultResult = c26 && ReadStateStore.ackMessageId(channel.id) !== tmp12.id;
            if (tmp2ResultResult) {
              const obj3 = { message: tmp12, userId: id, suppressEveryone: UserGuildSettingsStore.isSuppressEveryoneEnabled(channel.getGuildId()), suppressRoles: UserGuildSettingsStore.isSuppressRolesEnabled(channel.getGuildId()) };
              const tmp2Result = isMessageMentionedDefault;
              tmp2ResultResult = tmp2Result(obj3);
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
  let addedMessages;
  let arr2;
  let deletedMessages;
  let closure_0 = arg0;
  if (null == closure_20[arg0]) {
    return false;
  } else {
    delete closure_20[tmp];
    const obj = { deletedMessages: arr2.filter(substr, (id) => id.id === id) };
    ({ addedMessages, deletedMessages } = obj);
    arr2 = _modDef12;
    if (null != addedMessages) {
      const item = addedMessages.forEach(f94276);
    }
    if (null != deletedMessages) {
      const item1 = deletedMessages.forEach(f94277);
    }
    const tmp5Result = _modDef12;
    substr = tmp5Result.filter(substr, (id) => id.id !== id);
  }
}
function handleMessageDelete(id) {
  let addedMessages;
  let arr;
  let deletedMessages;
  id = id.id;
  if (null != closure_20[id]) {
    delete closure_20[id];
    const obj = { deletedMessages: arr.filter(substr, (id) => id.id === id) };
    ({ addedMessages, deletedMessages } = obj);
    arr = _modDef12;
    if (null != addedMessages) {
      const item = addedMessages.forEach(f94276);
    }
    if (null != deletedMessages) {
      const item1 = deletedMessages.forEach(f94277);
    }
    const tmpResult = _modDef12;
    substr = tmpResult.filter(substr, (id) => id.id !== id);
  }
  return false;
}
function handleSetRecentMentionsFilters(arg0) {
  let items;
  const obj = {};
  const merged = Object.assign(closure_23);
  const defaults = _modDef12.defaults;
  _modDef12;
  const obj2 = _modDef12;
  closure_23 = defaults(obj2.pick(arg0, ["guildFilter", "roleFilter", "everyoneFilter"]), closure_23);
  const Storage = items(510).Storage;
  const result = Storage.set(recentMentionFilterSettings, closure_23);
  let tmp5 = obj.guildFilter !== closure_23.guildFilter && closure_23.guildFilter === tmp4;
  if (!tmp5) {
    let tmp8 = obj.everyoneFilter !== closure_23.everyoneFilter;
    if (tmp8) {
      tmp8 = closure_23.everyoneFilter === false;
    }
    tmp5 = tmp8;
  }
  if (!tmp5) {
    tmp5 = obj.roleFilter !== closure_23.roleFilter && closure_23.roleFilter === false;
    const tmp11 = obj.roleFilter !== closure_23.roleFilter && closure_23.roleFilter === false;
  }
  closure_20 = {};
  items = [];
  if (tmp5) {
    const item = items.forEach((item) => {
      const tmp = parseMessage(item);
      if (null != tmp) {
        items.push(tmp);
        closure_20[tmp.id] = true;
      }
    });
  }
  closure_19 = {};
  const item1 = items.forEach((getChannelId) => {
    if (null == closure_19[getChannelId.getChannelId(getChannelId)]) {
      closure_19[getChannelId.getChannelId()] = 0;
    }
    const channelId = getChannelId.getChannelId();
    closure_19[channelId] = closure_19[channelId] + 1;
  });
  if (0 === items.length) {
    c24 = false;
  }
}
function handleRelationshipUpdate() {
  let addedMessages;
  let arr;
  let deletedMessages;
  const obj = { deletedMessages: arr.filter(substr, (message) => RelationshipStore.isBlockedOrIgnoredForMessage(message)) };
  ({ addedMessages, deletedMessages } = obj);
  arr = _modDef12;
  if (null != addedMessages) {
    const item = addedMessages.forEach(f94276);
  }
  if (null != deletedMessages) {
    const item1 = deletedMessages.forEach(f94277);
  }
  substr = substr.filter((item) => !RelationshipStore.isBlockedOrIgnoredForMessage(item));
}
function handleDeleteChannel(channel) {
  let addedMessages;
  let deletedMessages;
  channel = channel.channel;
  const items = [];
  const arr2 = items(12);
  closure_18 = arr2.filter(closure_18, (channel_id) => {
    let flag = channel_id.channel_id !== channel.id;
    if (!flag) {
      delete closure_20[channel_id.id];
      items.push(channel_id);
      flag = false;
    }
    return flag;
  });
  ({ addedMessages, deletedMessages } = { deletedMessages: items });
  if (null != addedMessages) {
    const item = addedMessages.forEach(f94276);
  }
  if (null != deletedMessages) {
    const item1 = deletedMessages.forEach(f94277);
  }
}
const RecentMentionsFilters = Constants.RecentMentionsFilters;
({ ChannelTypes: map1, MessageTypesSets: closure_14, UserNotificationSettings: closure_15, ChannelTypesSets: closure_16 } = Constants);
const recentMentionFilterSettings = "recentMentionFilterSettings";
let substr = [];
let closure_19 = {};
let closure_20 = {};
let c21 = false;
let hasMoreAfter = true;
let Storage = Storage2.Storage;
let obj = { guildFilter: RecentMentionsFilters.ALL_SERVERS, everyoneFilter: true, roleFilter: true };
let closure_23 = Storage.get("recentMentionFilterSettings", obj);
let c24 = false;
let closure_25 = 0;
let c26 = false;
const Store = get_initializedDefault.Store;
class RecentMentionsStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelStore, MessageStore, ReadStateStore, RelationshipStore, SelectedGuildStore, UserGuildSettingsStore, UserStore);
  }
  getMentions() {
    let tmp3;
    if (c24) {
      tmp3 = substr;
    } else {
      tmp3 = null;
    }
    return tmp3;
  }
  getSettingsFilteredMentions() {
    let found;
    if (c24) {
      found = substr.filter(hasMentionNotificationEnabled);
    } else {
      found = null;
    }
    return found;
  }
  hasMention(arg0) {
    return closure_20[arg0];
  }
  getMentionCountForChannel(arg0) {
    let num = closure_19[arg0];
    if (num == null) {
      num = 0;
    }
    return num;
  }
}
const prototype = RecentMentionsStore.prototype;
Object.defineProperty(prototype, "hasLoadedEver", {
  get: function hasLoadedEver() {
    return c24;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastLoaded", {
  get: function lastLoaded() {
    return closure_25;
  },
  set: undefined
});
Object.defineProperty(prototype, "loading", {
  get: function loading() {
    return c21;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasMore", {
  get: function hasMore() {
    return hasMoreAfter;
  },
  set: undefined
});
Object.defineProperty(prototype, "guildFilter", {
  get: function guildFilter() {
    return closure_23.guildFilter;
  },
  set: undefined
});
Object.defineProperty(prototype, "everyoneFilter", {
  get: function everyoneFilter() {
    return closure_23.everyoneFilter;
  },
  set: undefined
});
Object.defineProperty(prototype, "roleFilter", {
  get: function roleFilter() {
    return closure_23.roleFilter;
  },
  set: undefined
});
Object.defineProperty(prototype, "mentionsAreStale", {
  get: function mentionsAreStale() {
    return c26;
  },
  set: undefined
});
Object.defineProperty(prototype, "mentionCountByChannel", {
  get: function mentionCountByChannel() {
    return closure_19;
  },
  set: undefined
});
RecentMentionsStore.displayName = "RecentMentionsStore";
let obj2 = {
  LOAD_RECENT_MENTIONS: function handleLoadMentions(guildId) {
    c21 = true;
    const tmp = null == guildId.guildId && closure_23.guildFilter === RecentMentionsFilters.THIS_SERVER;
    if (tmp) {
      const obj = { guildFilter: RecentMentionsFilters.ALL_SERVERS };
      handleSetRecentMentionsFilters(obj);
    }
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function handleLoadMentionsSuccess(arg0) {
    let addedMessages;
    let deletedMessages;
    let isAfter;
    let messages;
    ({ hasMoreAfter, messages, isAfter } = arg0);
    const arr = _modDef12;
    const mapped = arr.map(messages, findOrCreateMessageRecord);
    ({ addedMessages, deletedMessages } = { addedMessages: mapped });
    if (null != addedMessages) {
      const item = addedMessages.forEach(f94276);
    }
    if (null != deletedMessages) {
      const item1 = deletedMessages.forEach(f94277);
    }
    if (isAfter) {
      substr = substr.concat(mapped);
    } else {
      substr = mapped;
      closure_20 = {};
    }
    const tmpResult = _modDef12;
    const item2 = tmpResult.forEach(mapped, (id) => {
      closure_1_20[id.id] = true;
    });
    c21 = false;
    const obj = TimeUtils;
    closure_25 = obj.now();
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
    let addedMessages;
    let deletedMessages;
    let length;
    size = size.size;
    ({ addedMessages, deletedMessages } = { deletedMessages: substr.slice(size) });
    ({ deletedMessages: substr.slice(size) });
    if (null != addedMessages) {
      const item = addedMessages.forEach(f94276);
    }
    if (null != deletedMessages) {
      const item1 = deletedMessages.forEach(f94277);
    }
    let sum = size;
    if (size < substr.length) {
      do {
        delete closure_20[substr[tmp3].id];
        sum = sum + 1;
        length = substr.length;
      } while (sum < length);
    }
    const length2 = substr.length;
    substr = substr.slice(0, size);
    if (length2 > substr.length) {
      hasMoreAfter = true;
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
    let addedMessages;
    let deletedMessages;
    guild = guild.guild;
    const items = [];
    const arr2 = items(12);
    closure_18 = arr2.filter(closure_18, (channel_id) => {
      const channel = ChannelStore.getChannel(channel_id.channel_id);
      let flag = null != channel && channel.getGuildId() !== guild.id;
      if (!flag) {
        delete closure_20[channel_id.id];
        items.push(channel_id);
        flag = false;
      }
      return flag;
    });
    ({ addedMessages, deletedMessages } = { deletedMessages: items });
    if (null != addedMessages) {
      const item = addedMessages.forEach(f94276);
    }
    if (null != deletedMessages) {
      const item1 = deletedMessages.forEach(f94277);
    }
  },
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    let addedMessages;
    let deletedMessages;
    let items;
    message = message.message;
    let channelId = message.channelId;
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      const obj3 = { rawMessage: message, userId: currentUser.id, suppressRoles: false, suppressEveryone: false };
      const obj2 = isMessageMentioned;
      if (obj2.isRawMessageMentioned(obj3)) {
        const tmp3 = parseMessage(message, channelId);
        if (null == tmp3) {
          return false;
        } else {
          substr = substr.slice();
          substr.unshift(tmp3);
          closure_20[tmp3.id] = true;
          const obj = { addedMessages: items };
          items = [tmp3];
          ({ addedMessages, deletedMessages } = obj);
          if (null != addedMessages) {
            const item = addedMessages.forEach(f94276);
          }
          if (null != deletedMessages) {
            const item1 = deletedMessages.forEach(f94277);
          }
        }
      }
    }
    return false;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    if (null != id) {
      if (null != closure_20[id]) {
        const obj = _modDef12;
        const findIndexResult = obj.findIndex(substr, (id) => id.id === id);
        substr = substr.slice();
        if (null != substr[findIndexResult]) {
          const obj2 = MessageRecordUtils;
          substr[findIndexResult] = obj2.updateMessageRecord(substr[findIndexResult], message.message);
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: handleMessageDelete,
  RECENT_MENTION_DELETE: handleMessageDelete,
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    ids = ids.ids;
    const arr = _modDef12;
    const item = arr.forEach(ids, deleteMessage);
  },
  CHANNEL_DELETE: handleDeleteChannel,
  THREAD_DELETE: handleDeleteChannel,
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  SET_RECENT_MENTIONS_STALE: function handleSetRecentMentionsStale() {
    c26 = true;
  }
};
const recentMentionsStore = new RecentMentionsStore(DispatcherDefault, obj2);
let size = size_mod;
let result = size.fileFinishedImporting("modules/inbox/RecentMentionsStore.tsx");

export default recentMentionsStore;
export { hasMentionNotificationEnabled };
export { parseMessage };
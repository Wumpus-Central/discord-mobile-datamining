// discord_app/modules/inbox/RecentMentionsStore.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import sleep from "../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import shouldShowAgeGateForVoiceChannel from "../age_gate/AgeGateUtils.tsx";
import createMinimalMessageRecord from "../messages/MessageRecordUtils.tsx";
import isMentioned from "../messages/isMessageMentioned.tsx";
import isMentionedDefault from "../messages/isMessageMentioned.tsx";
import isSystemMessageDefault from "../messages/isSystemMessage.tsx";
import closure_3 from "../../records/MessageRecord.tsx";
import closure_4 from "../../stores/AuthenticationStore.tsx";
import closure_5 from "../../stores/ChannelStore.tsx";
import closure_6 from "../../stores/MessageStore.tsx";
import closure_7 from "../../stores/ReadStateStore.tsx";
import closure_8 from "../../stores/RelationshipStore.tsx";
import closure_9 from "../../stores/SelectedGuildStore.tsx";
import closure_10 from "../../stores/UserGuildSettingsStore.tsx";
import closure_11 from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import { Storage } from "../../../discord_common/js/packages/storage/Storage.tsx";

require = arg1;
function findOrCreateMessageRecord(channel_id) {
  if (channel_id instanceof closure_3) {
    return channel_id;
  } else {
    let message = store2.getMessage(channel_id.channel_id, channel_id.id);
    if (null == message) {
      message = createMinimalMessageRecord.createMessageRecord(channel_id);
      const obj = createMinimalMessageRecord;
    }
    return message;
  }
}
function hasMentionNotificationEnabled(channel_id) {
  const basicChannel = store.getBasicChannel(channel_id.channel_id);
  if (null != basicChannel) {
    const GUILD_TEXTUAL = constants4.GUILD_TEXTUAL;
    if (GUILD_TEXTUAL.has(basicChannel.type)) {
      let obj = closure_10;
      if (closure_10.isGuildOrCategoryOrChannelMuted(basicChannel.guild_id, basicChannel.id)) {
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
            const currentUser = authStore.getCurrentUser();
            let tmp10 = null != currentUser;
            if (tmp10) {
              obj = { message: null, userId: null, suppressEveryone: null, suppressRoles: null };
              obj[0] = channel_id;
              obj[1] = currentUser.id;
              obj[2] = result1;
              obj[3] = result2;
              tmp10 = isMentionedDefault(obj);
            }
            return tmp10;
          } else {
            const NO_MESSAGES = tmp5.NO_MESSAGES;
            return false;
          }
        }
        obj2 = shouldShowAgeGateForVoiceChannel;
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
  const channel = store.getChannel(channel_id);
  if (null != channel) {
    if (channel.type !== constants.DM) {
      if (closure_23.guildFilter === RecentMentionsFilters.THIS_SERVER) {
        const guildId = channel.getGuildId();
        if (guildId !== guildId.getGuildId()) {
          return null;
        }
      }
      id = id.getId();
      if (!blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message)) {
        if (!tmp2(7383)(message, id)) {
          let tmp12 = message;
          if (!(message instanceof closure_3)) {
            message = store2.getMessage(message.channel_id, message.id);
            if (null == message) {
              message = createMinimalMessageRecord.createMessageRecord(message);
              const obj2 = createMinimalMessageRecord;
            }
            tmp12 = message;
          }
          let obj = { message: null, userId: null, suppressEveryone: null, suppressRoles: null };
          obj[0] = tmp12;
          obj[1] = id;
          obj[2] = !closure_23.everyoneFilter;
          obj[3] = !closure_23.roleFilter;
          let tmp20 = null;
          if (tmp2(4751)(obj)) {
            let tmp2ResultResult = c26;
            if (c26) {
              tmp2ResultResult = closure_7.ackMessageId(channel.id) !== tmp12.id;
            }
            if (tmp2ResultResult) {
              obj = { message: null, userId: null, suppressEveryone: null, suppressRoles: null };
              obj[0] = tmp12;
              obj[1] = id;
              obj[2] = closure_10.isSuppressEveryoneEnabled(channel.getGuildId());
              obj[3] = closure_10.isSuppressRolesEnabled(channel.getGuildId());
              tmp2ResultResult = tmp2(4751)(obj);
              const tmp2Result = tmp2(4751);
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
    const obj = { deletedMessages: null };
    obj[0] = applyDefault.filter(closure_18, (id) => id.id === id);
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
    const arr2 = applyDefault;
    const tmp7 = importDefault;
    closure_18 = applyDefault.filter(closure_18, (id) => id.id !== id);
  }
}
function handleMessageDelete(id) {
  id = id.id;
  if (null != dependencyMap[id]) {
    delete tmp[tmp2];
    const obj = { deletedMessages: null };
    obj[0] = applyDefault.filter(closure_18, (id) => id.id === id);
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
    const arr = applyDefault;
    const tmp4 = importDefault;
    closure_18 = applyDefault.filter(closure_18, (id) => id.id !== id);
    const tmp4Result = applyDefault;
  }
  return false;
}
function handleSetRecentMentionsFilters(arg0) {
  const obj = {};
  const merged = Object.assign(closure_23);
  const obj2 = applyDefault;
  closure_23 = obj2.defaults(applyDefault.pick(arg0, ["guildFilter", "roleFilter", "everyoneFilter"]), closure_23);
  const Storage = items(595).Storage;
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
    const item = items.forEach((arg0) => {
      const tmp = closure_1_29(arg0);
      if (null != tmp) {
        items.push(tmp);
        closure_20[tmp.id] = true;
      }
    });
  }
  closure_19 = {};
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
    deletedMessages: applyDefault.filter(closure_18, (message) => closure_8.isBlockedOrIgnoredForMessage(message)),
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
  closure_18 = closure_18.filter((message) => !closure_8.isBlockedOrIgnoredForMessage(message));
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
const RecentMentionsFilters = ME.RecentMentionsFilters;
({
  ChannelTypes: map1,
  MessageTypesSets: closure_14,
  UserNotificationSettings: closure_15,
  ChannelTypesSets: closure_16,
} = ME);
const recentMentionFilterSettings = "recentMentionFilterSettings";
let closure_18 = [];
let closure_19 = {};
let closure_20 = {};
let c21 = false;
let c22 = true;
let obj = { guildFilter: RecentMentionsFilters.ALL_SERVERS, everyoneFilter: true, roleFilter: true };
let closure_23 = Storage.get("recentMentionFilterSettings", obj);
let c24 = false;
let c25 = 0;
let c26 = false;
const Store = initializeDefault.Store;
class RecentMentionsStore extends Store {}
const prototype = RecentMentionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_4, closure_5, closure_6, closure_7, closure_8, closure_9, closure_10, closure_11);
};
Object.defineProperty(prototype, "hasLoadedEver", {
  get: function hasLoadedEver() {
    return c24;
  },
  set: undefined,
});
Object.defineProperty(prototype, "lastLoaded", {
  get: function lastLoaded() {
    return c25;
  },
  set: undefined,
});
prototype["getMentions"] = function getMentions() {
  if (c24) {
    let tmp2 = closure_18;
  } else {
    tmp2 = null;
  }
  return tmp2;
};
prototype["getSettingsFilteredMentions"] = function getSettingsFilteredMentions() {
  if (c24) {
    let found = closure_18.filter(hasMentionNotificationEnabled);
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
  get: function everyoneFilter(arg0) {
    return closure_23.everyoneFilter;
  },
  set: undefined,
});
Object.defineProperty(prototype, "roleFilter", {
  get: function roleFilter(arg0) {
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
  let num = table[arg0];
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
      const obj = { guildFilter: null };
      obj[0] = RecentMentionsFilters.ALL_SERVERS;
      handleSetRecentMentionsFilters(obj);
    }
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function handleLoadMentionsSuccess(arg0) {
    ({ hasMoreAfter, messages, isAfter } = arg0);
    let mapped = applyDefault.map(messages, findOrCreateMessageRecord);
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
      mapped = mapped.concat(mapped);
    } else {
      closure_20 = {};
    }
    const arr = applyDefault;
    const tmp = importDefault;
    const item2 = applyDefault.forEach(mapped, (id) => {
      closure_20[id.id] = true;
    });
    c21 = false;
    const tmpResult = applyDefault;
    closure_25 = sleep.now();
    c24 = true;
  },
  LOAD_RECENT_MENTIONS_FAILURE: function handleLoadMentionsFailure() {
    c21 = false;
  },
  SET_RECENT_MENTIONS_FILTER: handleSetRecentMentionsFilters,
  CLEAR_MENTIONS: function handleClearMentions() {
    closure_18 = [];
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
        let tmp6 = closure_20;
        let tmp7 = substr;
        let id = substr[sum].id;
        delete tmp2[tmp];
        sum = sum + 1;
        let tmp8 = substr;
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
    closure_18 = [];
    closure_20 = {};
    c24 = false;
    c26 = false;
    closure_19 = {};
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const items = [];
    closure_18 = items(12).filter(closure_18, (channel_id) => {
      const channel = closure_1_5.getChannel(channel_id.channel_id);
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
    const currentUser = authStore.getCurrentUser();
    if (null != currentUser) {
      let obj = isMentioned;
      obj = { rawMessage: null, userId: null, suppressRoles: false, suppressEveryone: false };
      obj[0] = message;
      obj[1] = currentUser.id;
      if (obj.isRawMessageMentioned(obj)) {
        const tmp3 = parseMessage(message, message.channelId);
        if (null == tmp3) {
          return false;
        } else {
          substr = substr.slice();
          substr.unshift(tmp3);
          closure_20[tmp3.id] = true;
          obj = { addedMessages: null };
          const items = [tmp3];
          obj[0] = items;
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
    }
    return false;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    if (null != id) {
      if (null != dependencyMap[id]) {
        const findIndexResult = applyDefault.findIndex(substr, (id) => id.id === id);
        substr = substr.slice();
        if (null != substr[findIndexResult]) {
          substr[findIndexResult] = id(4737).updateMessageRecord(tmp7, message.message);
          const obj2 = id(4737);
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: handleMessageDelete,
  RECENT_MENTION_DELETE: handleMessageDelete,
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    const item = applyDefault.forEach(ids.ids, deleteMessage);
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
const recentMentionsStore = new RecentMentionsStore(dispatcherDefault, obj);
let result = require("set").fileFinishedImporting("modules/inbox/RecentMentionsStore.tsx");

export default recentMentionsStore;
export { hasMentionNotificationEnabled };
export { parseMessage };

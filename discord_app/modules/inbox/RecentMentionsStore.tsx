// discord_app/modules/inbox/RecentMentionsStore.tsx
import hasFlag from "hasFlag";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import reinjectEphemerals from "reinjectEphemerals";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import upsertRelationship from "upsertRelationship";
import handleConnectionOpen from "handleConnectionOpen";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { Storage } from "Storage";
import { Store } from "initialize";
import { apply } from "../../../_runtime/00012_apply.js";
import { sleep } from "../../../discord_common/js/packages/time-utils/TimeUtils.tsx";
import { shouldShowAgeGateForVoiceChannel } from "../age_gate/AgeGateUtils.tsx";
import { isMentioned } from "../messages/isMessageMentioned.tsx";
import { isSystemMessage } from "../messages/isSystemMessage.tsx";
import { createMinimalMessageRecord } from "../messages/MessageRecordUtils.tsx";

let closure_14;
let closure_15;
let closure_16;
let map1;
const require = arg1;
function findOrCreateMessageRecord(channel_id) {
  if (channel_id instanceof hasFlag) {
    return channel_id;
  } else {
    let message = store2.getMessage(channel_id.channel_id, channel_id.id);
    if (null == message) {
      message = createMinimalMessageRecord /* createMinimalMessageRecord */.createMessageRecord(channel_id);
      const obj = createMinimalMessageRecord /* createMinimalMessageRecord */;
    }
    return message;
  }
}
function hasMentionNotificationEnabled(channel_id) {
  const basicChannel = store.getBasicChannel(channel_id.channel_id);
  if (null != basicChannel) {
    const GUILD_TEXTUAL = constants4.GUILD_TEXTUAL;
    if (GUILD_TEXTUAL.has(basicChannel.type)) {
      let obj = updateUserGuildSettingsInternal;
      if (updateUserGuildSettingsInternal.isGuildOrCategoryOrChannelMuted(basicChannel.guild_id, basicChannel.id)) {
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
              tmp10 = isMentioned(obj);
            }
            return tmp10;
          } else {
            const NO_MESSAGES = tmp5.NO_MESSAGES;
            return false;
          }
        }
        obj2 = shouldShowAgeGateForVoiceChannel /* shouldShowAgeGateForVoiceChannel */;
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
  if (isSystemMessage(message)) {
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
        if (!tmp2(7019)(message, id)) {
          let tmp12 = message;
          if (!(message instanceof hasFlag)) {
            message = store2.getMessage(message.channel_id, message.id);
            if (null == message) {
              message = createMinimalMessageRecord /* createMinimalMessageRecord */.createMessageRecord(message);
              const obj2 = createMinimalMessageRecord /* createMinimalMessageRecord */;
            }
            tmp12 = message;
          }
          let obj = { message: null, userId: null, suppressEveryone: null, suppressRoles: null };
          obj[0] = tmp12;
          obj[1] = id;
          obj[2] = !closure_23.everyoneFilter;
          obj[3] = !closure_23.roleFilter;
          let tmp20 = null;
          if (tmp2(4518)(obj)) {
            let tmp2ResultResult = c26;
            if (c26) {
              tmp2ResultResult = generateOldThreadCutoff.ackMessageId(channel.id) !== tmp12.id;
            }
            if (tmp2ResultResult) {
              obj = { message: null, userId: null, suppressEveryone: null, suppressRoles: null };
              obj[0] = tmp12;
              obj[1] = id;
              obj[2] = updateUserGuildSettingsInternal.isSuppressEveryoneEnabled(channel.getGuildId());
              obj[3] = updateUserGuildSettingsInternal.isSuppressRolesEnabled(channel.getGuildId());
              tmp2ResultResult = tmp2(4518)(obj);
              const tmp2Result = tmp2(4518);
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
  let deletedMessages;
  let closure_0 = arg0;
  if (null == dependencyMap[arg0]) {
    return false;
  } else {
    delete tmp[tmp2];
    const obj = { deletedMessages: null };
    obj[0] = apply.filter(closure_18, (id) => id.id === id);
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
    const arr2 = apply;
    const tmp7 = importDefault;
    closure_18 = apply.filter(closure_18, (id) => id.id !== id);
  }
}
function handleMessageDelete(id) {
  let addedMessages;
  let deletedMessages;
  id = id.id;
  if (null != dependencyMap[id]) {
    delete tmp[tmp2];
    const obj = { deletedMessages: null };
    obj[0] = apply.filter(closure_18, (id) => id.id === id);
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
    const arr = apply;
    const tmp4 = importDefault;
    closure_18 = apply.filter(closure_18, (id) => id.id !== id);
    const tmp4Result = apply;
  }
  return false;
}
function handleSetRecentMentionsFilters(arg0) {
  const obj = {};
  const merged = Object.assign(closure_23);
  const obj2 = apply;
  closure_23 = obj2.defaults(apply.pick(arg0, ["guildFilter", "roleFilter", "everyoneFilter"]), closure_23);
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
  let closure_20 = {};
  items = [];
  if (tmp4) {
    const item = items.forEach((arg0) => {
      const tmp = outer1_29(arg0);
      if (null != tmp) {
        items.push(tmp);
        closure_20[tmp.id] = true;
      }
    });
  }
  let closure_19 = {};
  const item1 = items.forEach((getChannelId) => {
    if (null == dependencyMap[getChannelId.getChannelId(getChannelId)]) {
      dependencyMap[getChannelId.getChannelId()] = 0;
    }
    const channelId = getChannelId.getChannelId();
    dependencyMap[channelId] = dependencyMap[channelId] + 1;
  });
  if (0 === items.length) {
    let c24 = false;
  }
}
function handleRelationshipUpdate() {
  let addedMessages;
  let deletedMessages;
  const obj = { deletedMessages: null };
  obj[0] = apply.filter(closure_18, (message) => upsertRelationship.isBlockedOrIgnoredForMessage(message));
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
  closure_18 = closure_18.filter((message) => !upsertRelationship.isBlockedOrIgnoredForMessage(message));
}
function handleDeleteChannel(channel) {
  let addedMessages;
  let deletedMessages;
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
({ ChannelTypes: map1, MessageTypesSets: closure_14, UserNotificationSettings: closure_15, ChannelTypesSets: closure_16 } = ME);
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
class RecentMentionsStore extends Store {
}
const prototype = RecentMentionsStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, ensureGuildLoaded, reinjectEphemerals, generateOldThreadCutoff, upsertRelationship, handleConnectionOpen, updateUserGuildSettingsInternal, mergeGuildAvatar);
};
Object.defineProperty(prototype, "hasLoadedEver", {
  get: function hasLoadedEver() {
    return c24;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastLoaded", {
  get: function lastLoaded() {
    return c25;
  },
  set: undefined
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
  set: undefined
});
Object.defineProperty(prototype, "hasMore", {
  get: function hasMore() {
    return c22;
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
  get: function everyoneFilter(arg0) {
    return closure_23.everyoneFilter;
  },
  set: undefined
});
Object.defineProperty(prototype, "roleFilter", {
  get: function roleFilter(arg0) {
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
    let c21 = true;
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
    let addedMessages;
    let deletedMessages;
    let hasMoreAfter;
    let isAfter;
    let messages;
    ({ hasMoreAfter, messages, isAfter } = arg0);
    let mapped = apply.map(messages, findOrCreateMessageRecord);
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
      let closure_20 = {};
    }
    const arr = apply;
    const tmp = importDefault;
    const item2 = apply.forEach(mapped, (id) => {
      closure_20[id.id] = true;
    });
    let c21 = false;
    const tmpResult = apply;
    let closure_25 = sleep /* sleep */.now();
    let c24 = true;
  },
  LOAD_RECENT_MENTIONS_FAILURE: function handleLoadMentionsFailure() {
    let c21 = false;
  },
  SET_RECENT_MENTIONS_FILTER: handleSetRecentMentionsFilters,
  CLEAR_MENTIONS: function handleClearMentions() {
    let closure_18 = [];
    let closure_20 = {};
    let c24 = false;
    let c26 = false;
    let closure_19 = {};
  },
  TRUNCATE_MENTIONS: function handleTruncateMentions(size) {
    let addedMessages;
    let deletedMessages;
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
      let c22 = true;
    }
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    if (closure_23.guildFilter !== RecentMentionsFilters.THIS_SERVER) {
      return false;
    } else {
      let c24 = false;
    }
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_18 = [];
    let closure_20 = {};
    let c24 = false;
    let c26 = false;
    let closure_19 = {};
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    let addedMessages;
    let deletedMessages;
    guild = guild.guild;
    const items = [];
    closure_18 = items(12).filter(closure_18, (channel_id) => {
      const channel = outer1_5.getChannel(channel_id.channel_id);
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
    let addedMessages;
    let deletedMessages;
    message = message.message;
    const currentUser = authStore.getCurrentUser();
    if (null != currentUser) {
      let obj = isMentioned /* isMentioned */;
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
        const findIndexResult = apply.findIndex(substr, (id) => id.id === id);
        substr = substr.slice();
        if (null != substr[findIndexResult]) {
          substr[findIndexResult] = id(4504).updateMessageRecord(tmp7, message.message);
          const obj2 = id(4504);
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: handleMessageDelete,
  RECENT_MENTION_DELETE: handleMessageDelete,
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    const item = apply.forEach(ids.ids, deleteMessage);
  },
  CHANNEL_DELETE: handleDeleteChannel,
  THREAD_DELETE: handleDeleteChannel,
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  SET_RECENT_MENTIONS_STALE: function handleSetRecentMentionsStale() {
    let c26 = true;
  }
};
const recentMentionsStore = new RecentMentionsStore(require("dispatcher"), obj);
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/inbox/RecentMentionsStore.tsx");

export default recentMentionsStore;
export { hasMentionNotificationEnabled };
export { parseMessage };
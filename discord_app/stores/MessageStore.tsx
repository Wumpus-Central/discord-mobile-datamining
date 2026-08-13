// discord_app/stores/MessageStore.tsx
import canEditMessage from "canEditMessage";
import fetchFingerprint from "fetchFingerprint";
import initialize from "initialize";
import dropChannelIfEmpty from "dropChannelIfEmpty";
import _getSystemLocale from "_getSystemLocale";
import closure_8 from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import percentageScrolled from "percentageScrolled";
import comparator from "comparator";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import handleConnectionOpen from "handleConnectionOpen";
import closure_17 from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { Store } from "initialize";
import set from "initialize";
import { apply } from "../../_runtime/00012_apply.js";
import { mergeMessage } from "../lib/ChannelMessages.tsx";
import { items } from "../lib/MessageQueue.tsx";
import { redactionSettingToRenderedString } from "../modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import { _handleConnectionOpen } from "../modules/gateway/GatewayConnectionStore.tsx";
import { MAX_REACTIONS } from "../modules/reactions/ReactionUtils.tsx";
import { DISCORD_EPOCH } from "../utils/SnowflakeUtils.tsx";

let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let require = arg1;
function reinjectEphemerals(channelId, truncateResult) {
  let closure_0 = truncateResult;
  if (truncateResult.hasMoreAfter) {
    return truncateResult;
  } else {
    const messages = store.getMessages(channelId);
    if (0 === messages.length) {
      return truncateResult;
    } else {
      const found = messages.filter((id) => !truncateResult.has(id.id));
      let mutation = truncateResult;
      if (0 !== found.length) {
        mutation = truncateResult.mutate((_merge) => {
          _merge._merge(found);
          const _array = _merge._array;
          const sorted = _array.sort((id, id2) => callback(table[18]).compare(id.id, id2.id));
        }, true);
      }
      return mutation;
    }
  }
}
function handleConnectionOpen() {
  const item = mergeMessage.forEach((mutate) => {
    callback(table[19]).commit(mutate.mutate({ ready: false, loadingMore: false }));
  });
  set.clear();
}
function _addPushNotificationMessageIfNotCached() {
  const self = this;
  const tmp = callback2((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let fetchFingerprint = tmp3;
              let orCreate = tmp28;
              orCreate = undefined;
              const databaseResult = lib(1955).database();
              const basicChannel = outer1_9.getBasicChannel(closure_0);
              if (null != databaseResult) {
                if (null != basicChannel) {
                  let c5 = 1;
                  const obj4 = lib(1955);
                  c6 = 2;
                  c7 = 1;
                  let obj1 = { value: null, done: false };
                  obj1[0] = lib(1955).messages(databaseResult).get(basicChannel.guild_id, tmp35, tmp36.id);
                  return obj1;
                }
              }
              const obj9 = lib(1955);
              tmp35 = closure_0;
              tmp36 = lib;
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else if (null == arg1) {
              c5 = 0;
            }
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
          logger.log("Push notification message not in cache, adding directly", lib.id, lib.channel_id);
          obj1 = lib(5030);
          orCreate = obj1.getOrCreate(closure_0);
          lib(5030).commit(orCreate.receivePushNotification(lib, dependencyMap));
          closure_31.emitChange();
          c7 = 3;
          const obj3 = lib(5030);
        } catch (tmp27) {
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp27;
          } else {
            c6 = tmp;
          }
          tmp28 = c5;
        }
      }
    })();
  });
  const _addPushNotificationMessageIfNotCached = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function receiveMediaMentionMessage(item10037) {
  const media_mention = item10037.media_mention;
  let message_id;
  if (media_mention != null) {
    message_id = media_mention.message_id;
  }
  if (null != message_id) {
    const attachment_id = item10037.media_mention.attachment_id;
    const orCreate = mergeMessage.getOrCreate(attachment_id);
    let obj = {};
    const merged = Object.assign(item10037);
    obj.channel_id = attachment_id;
    obj.type = constants3.MEDIA_MENTION_MESSAGE;
    obj.id = item10037.media_mention.message_id;
    obj = { channel_id: null, message_id: null, type: null, guild_id: null };
    obj[0] = item10037.channel_id;
    obj[1] = item10037.media_mention.message_id;
    obj[2] = constants.DEFAULT;
    const channel = store2.getChannel(item10037.channel_id);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj[3] = guild_id;
    obj.message_reference = obj;
    const obj3 = mergeMessage;
    const tmp5 = importDefault;
    const mutation = orCreate.receiveMessage(obj, false).mutate({ ready: true });
    const receiveMessageResult = orCreate.receiveMessage(obj, false);
    tmp5(5030).commit(mutation);
    const tmp5Result = tmp5(5030);
  }
}
function handleCleanup() {
  const item = mergeMessage.forEach((channelId) => {
    channelId = channelId.channelId;
    if (null == channel.getChannel(channelId)) {
      callback(table[19]).clear(channelId);
      const obj = callback(table[19]);
    }
  });
}
function handleRelationshipUpdate() {
  let c0 = false;
  const item = mergeMessage.forEach((reset) => {
    outer1_1(outer1_2[19]).commit(reset.reset(reset.map((blocked) => {
      let result = blocked;
      if (blocked.blocked !== outer1_15.isBlockedForMessage(blocked)) {
        let c0 = true;
        result = blocked.set("blocked", obj.isBlockedForMessage(blocked));
      }
      let result1 = result;
      if (result.ignored !== outer1_15.isIgnoredForMessage(result)) {
        c0 = true;
        result1 = result.set("ignored", obj.isIgnoredForMessage(result));
      }
      return result1;
    })));
  });
  return c0;
}
function performAuthorUpdate(guildId) {
  let closure_0 = guildId;
  const item = mergeMessage.forEach((channelId) => {
    const channel = outer1_9.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id === items) {
      items = [];
      let c1 = false;
      const item = channelId.forEach((nick) => {
        let colorString;
        const messageAuthor = items(outer1_2[27]).getMessageAuthor(nick);
        ({ nick, colorString } = messageAuthor);
        if (nick === nick.nick) {
          if (colorString === nick.colorString) {
            items.push(nick);
          }
        }
        let c1 = true;
        items.push(nick.merge({ nick, colorString }));
      });
      if (c1) {
        outer1_1(outer1_2[19]).commit(channelId.reset(items));
        const obj = outer1_1(outer1_2[19]);
      }
    }
  });
}
function handleReaction(optimistic) {
  let channelId;
  let canEditMessage;
  let dependencyMap;
  let importDefault;
  let messageId;
  let userId;
  const _require = optimistic;
  ({ type: importDefault, emoji: dependencyMap, reactionType: canEditMessage } = optimistic);
  ({ channelId, messageId, userId } = optimistic);
  const value = mergeMessage.get(channelId);
  if (null == value) {
    return false;
  } else {
    if (obj3.shouldApplyReaction(optimistic)) {
      let fetchFingerprint = id.getId() === userId;
      const updateResult = value.update(messageId, (addReaction) => {
        if ("MESSAGE_REACTION_ADD" === closure_1) {
          let addReactionResult = addReaction.addReaction(closure_2, fetchFingerprint, optimistic.colors, canEditMessage);
        } else {
          addReactionResult = addReaction.removeReaction(closure_2, fetchFingerprint, canEditMessage);
        }
        return addReactionResult;
      });
      tmp(5030).commit(updateResult);
    } else {
      return false;
    }
    obj3 = _MAX_REACTIONS;
  }
  const obj = mergeMessage;
  tmp = importDefault;
}
function handleMessageSendFailedAutomod(arg0) {
  let messageData;
  let require;
  ({ type: require, messageData } = arg0);
  const failedMessageId = items.getFailedMessageId(messageData);
  const obj = items;
  const tmp3 = importDefault;
  const orCreate = mergeMessage.getOrCreate(messageData.message.channelId);
  if (orCreate.has(failedMessageId)) {
    const updateResult = orCreate.update(failedMessageId, (embeds) => {
      embeds = embeds.embeds;
      let length;
      if (embeds != null) {
        length = embeds.filter(outer1_0(outer1_2[30]).isNotAutomodEmbed).length;
      }
      let result = embeds;
      if (length > 0) {
        result = embeds.set("embeds", []);
      }
      let result1 = result;
      if ("MESSAGE_SEND_FAILED_AUTOMOD" === closure_0) {
        result1 = result.set("flags", outer1_0(outer1_2[24]).addFlag(result.flags, outer1_19.EPHEMERAL));
        const obj2 = outer1_0(outer1_2[24]);
      }
      return result1;
    });
    tmp3(5030).commit(updateResult);
  } else {
    return false;
  }
  let obj2 = mergeMessage;
}
({ MessageFlags: closure_19, MessageReferenceTypes: closure_20, MessageStates: closure_21, MessageTypes: closure_22, Permissions: closure_23 } = ME);
let set = new Set();
let closure_25 = new require("dropChannelIfEmpty")("MessageStore");
let c26 = false;
class MessageStore extends Store {
}
const prototype = MessageStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_8, ensureGuildLoaded, percentageScrolled, dropChannelIfEmpty, comparator, trackCommunicationDisabled, createGuildRecordFromRust, initialize, _getSystemLocale, getUncachedChannelPermissions, markAllUserIdListsStale, handleConnectionOpen, closure_17, mergeGuildAvatar);
  const items = [initialize];
  this.syncWith(items, () => {

  });
};
prototype["getMessages"] = function getMessages(arg0) {
  if (initialize.hasViewingRoles()) {
    const channel = store2.getChannel(arg0);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    if (initialize.isViewingRoles(guildId)) {
      if (!getUncachedChannelPermissions.can(constants4.VIEW_CHANNEL, channel)) {
        const tmp11 = new mergeMessage(arg0);
        return tmp11;
      }
    }
  }
  return mergeMessage.getOrCreate(arg0);
};
prototype["getMessage"] = function getMessage(arg0, arg1) {
  const orCreate = mergeMessage.getOrCreate(arg0);
  return orCreate.get(arg1);
};
prototype["getLastEditableMessage"] = function getLastEditableMessage(id) {
  const currentUser = authStore.getCurrentUser();
  const messages = this.getMessages(id);
  const tmp = apply;
  const reversed = apply(messages.toArray()).reverse();
  return reversed.find((arg0) => {
    let id;
    if (id != null) {
      id = id.id;
    }
    return outer1_1(outer1_2[32])(arg0, id);
  });
};
prototype["getLastChatCommandMessage"] = function getLastChatCommandMessage(arg0) {
  const currentUser = authStore.getCurrentUser();
  const messages = this.getMessages(arg0);
  const reversed = messages.toArray().reverse();
  return reversed.find((interaction) => {
    interaction = interaction.interaction;
    let type;
    if (interaction != null) {
      type = interaction.type;
    }
    let tmp4 = type === lib(outer1_2[33]).InteractionTypes.APPLICATION_COMMAND;
    if (tmp4) {
      const interactionData = interaction.interactionData;
      let type1;
      if (interactionData != null) {
        type1 = interactionData.type;
      }
      tmp4 = type1 === lib(outer1_2[33]).ApplicationCommandType.CHAT;
    }
    if (tmp4) {
      let id;
      if (lib != null) {
        id = lib.id;
      }
      tmp4 = interaction.interaction.user.id === id;
    }
    return tmp4;
  });
};
prototype["getLastMessage"] = function getLastMessage(channelId) {
  const messages = this.getMessages(channelId);
  const tmp = apply;
  const reversed = apply(messages.toArray()).reverse();
  return reversed.get(0);
};
prototype["getLastNonCurrentUserMessage"] = function getLastNonCurrentUserMessage(closure_0) {
  const currentUser = authStore.getCurrentUser();
  const messages = this.getMessages(closure_0);
  const tmp = apply;
  const reversed = apply(messages.toArray()).reverse();
  return reversed.find((author) => {
    let id;
    if (id != null) {
      id = id.id;
    }
    return author.author.id !== id;
  });
};
prototype["jumpedMessageId"] = function jumpedMessageId(arg0) {
  const value = mergeMessage.get(arg0);
  let jumpTargetId;
  if (value != null) {
    jumpTargetId = value.jumpTargetId;
  }
  return jumpTargetId;
};
prototype["focusedMessageId"] = function focusedMessageId(arg0) {
  const value = mergeMessage.get(arg0);
  let focusTargetId;
  if (value != null) {
    focusTargetId = value.focusTargetId;
  }
  return focusTargetId;
};
prototype["hasPresent"] = function hasPresent(arg0) {
  const value = mergeMessage.get(arg0);
  const obj = mergeMessage;
  return null != value && value.ready && value.hasPresent();
};
prototype["isReady"] = function isReady(arg0) {
  return mergeMessage.getOrCreate(arg0).ready;
};
prototype["whenReady"] = function whenReady(arg0, arg1) {
  const self = this;
  let closure_1 = arg0;
  let closure_0 = arg1;
  const result = this.addConditionalChangeListener(() => {
    if (self.isReady(closure_1)) {
      const _setImmediate = setImmediate;
      setImmediate(closure_0);
      return false;
    }
  });
};
prototype["isLoadingMessages"] = function isLoadingMessages(channelId) {
  return mergeMessage.getOrCreate(channelId).loadingMore;
};
prototype["hasCurrentUserSentMessage"] = function hasCurrentUserSentMessage(arg0) {
  const currentUser = authStore.getCurrentUser();
  const messages = this.getMessages(arg0);
  return null != messages.findNewest((author) => {
    let id;
    if (id != null) {
      id = id.id;
    }
    return author.author.id === id;
  });
};
prototype["hasCurrentUserSentWaveBlockingMessage"] = function hasCurrentUserSentWaveBlockingMessage(id) {
  const currentUser = authStore.getCurrentUser();
  const messages = this.getMessages(id);
  return null != messages.findNewest((type) => {
    let tmp = type.type !== outer1_22.FRIEND_REQUEST_ACCEPTED;
    if (tmp) {
      let id;
      if (id != null) {
        id = id.id;
      }
      tmp = type.author.id === id;
    }
    return tmp;
  });
};
prototype["hasCurrentUserSentMessageSinceAppStart"] = function hasCurrentUserSentMessageSinceAppStart() {
  return c26;
};
MessageStore.displayName = "MessageStore";
const messageStore = new MessageStore(require("dispatcher"), {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function handleBackgroundSyncChannelMessages(changesByChannelId) {
    changesByChannelId = changesByChannelId.changesByChannelId;
    for (const key10012 in changesByChannelId) {
      let tmp9 = importDefault;
      let tmp8 = key10012;
      let tmp10 = dependencyMap;
      let obj = mergeMessage;
      let value = obj.get(key10012);
      if (null == value) {
        continue;
      } else {
        let tmp = require;
        let _default = _handleConnectionOpen.default;
        let isConnectedResult = _default.isConnected();
        if (!value.cached) {
          if (isConnectedResult) {
            let tmp3 = tmp4;
            let _HermesInternal = HermesInternal;
            let str = "Skipping background message sync for ";
            let tmp4 = key10012;
            let str2 = " cached:";
            let str3 = " ready:";
            let str4 = " hasMoreAfter:";
            let str5 = " isConnected:";
            let tmp5 = isConnectedResult;
            let logResult = tmp4.log("Skipping background message sync for " + tmp8 + " cached:" + value.cached + " ready:" + value.ready + " hasMoreAfter:" + value.hasMoreAfter + " isConnected:" + isConnectedResult);
            continue;
          }
          continue;
        }
        let mergeDeltaResult = value.mergeDelta(changesByChannelId[key10012].new_messages, changesByChannelId[key10012].modified_messages, changesByChannelId[key10012].deleted_message_ids);
        continue;
      }
      continue;
    }
  },
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: function handleCacheLoaded(messages) {
    let tmp6;
    let tmp7;
    const entries = DISCORD_EPOCH.entries(messages.messages);
    const obj = DISCORD_EPOCH;
    while (tmp2 !== undefined) {
      let tmp4 = callback;
      let tmp5 = callback(tmp3, 2);
      let tmp8 = importDefault;
      let tmp9 = dependencyMap;
      [tmp6, tmp7] = tmp5;
      let obj2 = mergeMessage;
      let orCreate = obj2.getOrCreate(tmp6);
      let addCachedMessagesResult = orCreate.addCachedMessages(tmp7, true);
      let obj4 = mergeMessage;
      let commitResult = obj4.commit(addCachedMessagesResult);
      continue;
    }
  },
  LOAD_MESSAGES: function handleLoadMessages() {
    return true;
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(arg0) {
    let avoidInitialScroll;
    let channelId;
    let hasMoreAfter;
    let hasMoreBefore;
    let isAfter;
    let isBefore;
    let isStale;
    let jump;
    let messages;
    let truncate;
    ({ channelId, isBefore, isAfter, messages } = arg0);
    ({ jump, hasMoreBefore, hasMoreAfter, isStale, truncate, avoidInitialScroll } = arg0);
    const orCreate = mergeMessage.getOrCreate(channelId);
    const complete = orCreate.loadComplete({ newMessages: messages, isBefore, isAfter, jump, hasMoreBefore, hasMoreAfter, cached: isStale, hasFetched: true, avoidInitialScroll });
    let tmp3 = null == truncate;
    if (!tmp3) {
      let tmp4 = !isBefore;
      if (!isBefore) {
        tmp4 = !isAfter;
      }
      tmp3 = tmp4;
    }
    if (!tmp3) {
      let tmp5 = isBefore;
      if (isBefore) {
        tmp5 = isAfter;
      }
      tmp3 = tmp5;
    }
    let truncateResult = complete;
    if (!tmp3) {
      truncateResult = complete.truncate(isBefore, isAfter);
    }
    const obj = mergeMessage;
    const tmp = importDefault;
    const tmp7 = reinjectEphemerals(channelId, truncateResult);
    tmp(5030).commit(tmp7);
    for (const item10037 of messages) {
      let tmp9 = receiveMediaMentionMessage;
      let tmp10 = receiveMediaMentionMessage(item10037);
      continue;
    }
  },
  LOAD_MESSAGES_FAILURE: function handleLoadMessagesFailure(channelId) {
    const orCreate = mergeMessage.getOrCreate(channelId.channelId);
    const obj = mergeMessage;
    mergeMessage.commit(orCreate.mutate({ loadingMore: false, error: true }));
  },
  LOAD_MESSAGES_SUCCESS_CACHED: function handleLoadMessagesSuccessCached(truncate) {
    let after;
    let before;
    let channelId;
    let focus;
    let jump;
    let limit;
    ({ channelId, jump, focus, before, after, limit } = truncate);
    let obj = found(5030);
    const orCreate = obj.getOrCreate(channelId);
    let present;
    if (jump != null) {
      present = jump.present;
    }
    if (present) {
      let jumpToPresentResult = orCreate.jumpToPresent(limit);
    } else {
      let messageId;
      if (focus != null) {
        messageId = focus.messageId;
      }
      if (null != messageId) {
        jumpToPresentResult = orCreate.focusOnMessage(focus.messageId);
      } else {
        let messageId1;
        if (jump != null) {
          messageId1 = jump.messageId;
        }
        if (null != messageId1) {
          obj = { messageId: null, flash: null, offset: null, returnTargetId: null, jumpType: null, onJumpComplete: null };
          ({ messageId: obj4[0], flash: obj4[1], offset: obj4[2], returnMessageId: obj4[3], jumpType: obj4[4], onJumpComplete: obj4[5] } = jump);
          jumpToPresentResult = orCreate.jumpToMessage(obj);
        } else {
          jumpToPresentResult = orCreate;
          if (!tmp6) {
            jumpToPresentResult = orCreate.loadFromCache(null != before, limit);
          }
          tmp6 = null == before && null == after;
        }
      }
    }
    let tmp7 = null == truncate.truncate;
    if (!tmp7) {
      tmp7 = null == before && null == after;
      const tmp8 = null == before && null == after;
    }
    if (!tmp7) {
      tmp7 = null != before && null != after;
      const tmp9 = null != before && null != after;
    }
    let truncateResult = jumpToPresentResult;
    if (!tmp7) {
      truncateResult = jumpToPresentResult.truncate(null != before, null != after);
    }
    const require = truncateResult;
    let tmp10 = truncateResult;
    if (!truncateResult.hasMoreAfter) {
      const messages = store.getMessages(channelId);
      tmp10 = truncateResult;
      if (0 !== messages.length) {
        found = messages.filter((id) => !truncateResult.has(id.id));
        let mutation = truncateResult;
        if (0 !== found.length) {
          mutation = truncateResult.mutate((_merge) => {
            _merge._merge(found);
            const _array = _merge._array;
            const sorted = _array.sort((id, id2) => callback(table[18]).compare(id.id, id2.id));
          }, true);
        }
        tmp10 = mutation;
      }
    }
    found(5030).commit(tmp10);
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(channelId) {
    let obj = mergeMessage;
    const orCreate = obj.getOrCreate(channelId.channelId);
    const addCachedMessagesResult = orCreate.addCachedMessages(channelId.messages, channelId.stale);
    let isForegroundCacheLoad = channelId.isForegroundCacheLoad;
    if (isForegroundCacheLoad) {
      isForegroundCacheLoad = channelId.messages.length > 0;
    }
    if (isForegroundCacheLoad) {
      isForegroundCacheLoad = null == addCachedMessagesResult.jumpTargetId;
    }
    let mutation = addCachedMessagesResult;
    if (isForegroundCacheLoad) {
      obj = { initialScrollSequenceId: null, suppressRowAnimationSequenceId: null };
      obj[0] = addCachedMessagesResult.initialScrollSequenceId + 1;
      obj[1] = addCachedMessagesResult.suppressRowAnimationSequenceId + 1;
      mutation = addCachedMessagesResult.mutate(obj);
    }
    mergeMessage.commit(mutation);
  },
  LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function handleLoadMessageInteractionDataSuccess(messageId) {
    let closure_0 = messageId;
    messageId = messageId.messageId;
    const value = mergeMessage.get(messageId.channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(messageId, (set) => set.set("interactionData", messageId.interactionData));
        mergeMessage.commit(updateResult);
      }
    }
    return false;
  },
  TRUNCATE_MESSAGES: function handleTruncateMessages(arg0) {
    let channelId;
    let truncateBottom;
    let truncateTop;
    ({ channelId, truncateBottom, truncateTop } = arg0);
    tmp4.log("Truncating messages for " + channelId + " bottom:" + truncateBottom + " top:" + truncateTop);
    const orCreate = mergeMessage.getOrCreate(channelId);
    const obj = mergeMessage;
    const truncateResult = orCreate.truncate(truncateBottom, truncateTop);
    mergeMessage.commit(truncateResult);
  },
  CLEAR_MESSAGES: function handleClearMessages(channelId) {
    channelId = channelId.channelId;
    tmp4.log("Clearing messages for " + channelId);
    mergeMessage.clear(channelId);
    set.clear();
  },
  MESSAGE_CREATE: function handleIncomingMessage(isPushNotification) {
    let channelId;
    let message;
    let optimistic;
    ({ channelId, message, optimistic } = isPushNotification);
    const orCreate = mergeMessage.getOrCreate(channelId);
    const obj = mergeMessage;
    const tmp3 = require;
    const isConnectedResult = _handleConnectionOpen.default.isConnected();
    if (isPushNotification.isPushNotification) {
      if (tmp3Result.isIOSPushNotificationRawPayloadFixExperimentEnabled()) {
        (function addPushNotificationMessageIfNotCached(channelId, message, isConnectedResult) {
          const self = this;
          const apply = closure_28.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(channelId, message, isConnectedResult);
      } else {
        tmp4.log("Inserting message tapped on from a push notification", message.id, message.channel_id);
        let tmpResult = tmp(5030);
        tmpResult.commit(orCreate.receivePushNotification(message, isConnectedResult));
      }
      tmp3Result = tmp3(5033);
    } else {
      let ready = orCreate.ready;
      if (ready) {
        let tmp6 = !optimistic;
        if (optimistic) {
          tmp6 = !orCreate.has(message.id);
        }
        if (tmp6) {
          let hasItem = null != message.nonce;
          if (hasItem) {
            hasItem = message.state !== constants2.SENDING;
          }
          if (hasItem) {
            hasItem = set.has(message.nonce);
          }
          let removeResult = orCreate;
          if (hasItem) {
            removeResult = orCreate.remove(message.nonce);
            set.delete(message.nonce);
          }
          tmpResult = tmp(5030);
          tmpResult.commit(removeResult.receiveMessage(message, true === atBottom.isAtBottom(channelId)));
          receiveMediaMentionMessage(message);
          const receiveMessageResult = removeResult.receiveMessage(message, true === atBottom.isAtBottom(channelId));
        }
        ready = tmp6;
      }
      return ready;
    }
  },
  MESSAGE_SEND_FAILED: function handleSendFailed(channelId) {
    let messageId;
    let require;
    ({ messageId, reason: require } = channelId);
    const orCreate = mergeMessage.getOrCreate(channelId.channelId);
    if (null != orCreate) {
      if (orCreate.has(messageId)) {
        const value = orCreate.get(messageId, true);
        let isPollResult;
        if (value != null) {
          isPollResult = value.isPoll();
        }
        if (true === isPollResult) {
          let removeResult = orCreate.remove(messageId);
        } else {
          removeResult = orCreate.update(messageId, (set) => {
            const result = set.set("state", outer1_21.SEND_FAILED);
            if (result.isCommandType()) {
              let str3 = closure_0;
              if (closure_0 == null) {
                str3 = "";
              }
              const result1 = result.set("interactionError", str3);
              let result2 = result1.set("flags", outer1_0(outer1_2[24]).addFlag(result1.flags, outer1_19.EPHEMERAL));
              const obj3 = outer1_0(outer1_2[24]);
            } else {
              let str = closure_0;
              result2 = result;
              if (null != closure_0) {
                if (str == null) {
                  str = "";
                }
                result2 = result.set("interactionError", str);
              }
            }
            return result2;
          });
        }
        mergeMessage.commit(removeResult);
      }
    }
    return false;
  },
  MESSAGE_SEND_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_EDIT_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    const orCreate = mergeMessage.getOrCreate(message.message.channel_id);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        let tmpResult = tmp(5030);
        tmpResult.commit(orCreate.update(id, (message) => message(outer1_2[23]).updateMessageRecord(message, message.message)));
        message = message.message;
        const media_mention = message.media_mention;
        let message_id;
        if (media_mention != null) {
          message_id = media_mention.message_id;
        }
        if (null != message_id) {
          if ("content" in message) {
            tmpResult = tmp(5030);
            const orCreate1 = tmpResult.getOrCreate(message.media_mention.attachment_id);
            const updateResult1 = orCreate1.update(message.media_mention.message_id, (message) => {
              let obj = message(outer1_2[23]);
              obj = { content: message.content };
              return obj.updateMessageRecord(message, obj);
            });
            tmp(5030).commit(updateResult1);
            const tmpResult1 = tmp(5030);
          }
        }
      }
    }
    return false;
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleMessageExplicitContentScanTimeout(messageId) {
    messageId = messageId.messageId;
    const value = mergeMessage.get(messageId.channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(messageId, redactionSettingToRenderedString.handleExplicitMediaScanTimeoutForMessage);
        mergeMessage.commit(updateResult);
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    let obj = mergeMessage;
    const orCreate = obj.getOrCreate(id.channelId);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        if (orCreate.revealedMessageId !== id) {
          let value = orCreate.get(id);
          if (null != value) {
            const mediaMention = value.mediaMention;
            let attachment_id;
            if (mediaMention != null) {
              attachment_id = mediaMention.attachment_id;
            }
            if (null != attachment_id) {
              let tmpResult = tmp(5030);
              value = tmpResult.get(attachment_id);
              if (null != value) {
                const mediaMention2 = value.mediaMention;
                let message_id;
                if (mediaMention2 != null) {
                  message_id = mediaMention2.message_id;
                }
                if (null != message_id) {
                  tmpResult = tmp(5030);
                  tmpResult.commit(value.remove(message_id));
                  const removeResult = value.remove(message_id);
                }
              }
            }
          }
          const removeResult1 = orCreate.remove(id);
          tmp(5030).commit(removeResult1);
          set.delete(id);
        } else {
          let id2 = orCreate.getAfter(id);
          if (null == id2) {
            let mutation = orCreate.mutate({ revealedMessageId: null });
          }
          obj = { revealedMessageId: null };
          id2 = id2.id;
          obj[0] = id2;
          mutation = orCreate.mutate(obj);
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    ids = ids.ids;
    let orCreate;
    let mutation;
    let obj = mutation(5030);
    orCreate = obj.getOrCreate(ids.channelId);
    if (null == orCreate) {
      return false;
    } else {
      const item = ids.forEach((arg0) => {
        let value = orCreate.get(arg0);
        if (null != value) {
          const mediaMention = value.mediaMention;
          let attachment_id;
          if (mediaMention != null) {
            attachment_id = mediaMention.attachment_id;
          }
          if (null != attachment_id) {
            value = mutation(outer1_2[19]).get(attachment_id);
            if (null != value) {
              const mediaMention2 = value.mediaMention;
              let message_id;
              if (mediaMention2 != null) {
                message_id = mediaMention2.message_id;
              }
              if (null != message_id) {
                const removeResult = value.remove(message_id);
                tmp3(tmp4[19]).commit(removeResult);
                const tmp3Result = tmp3(tmp4[19]);
              }
            }
            const obj = mutation(outer1_2[19]);
            tmp3 = mutation;
            tmp4 = outer1_2;
          }
        }
      });
      const removeManyResult = orCreate.removeMany(ids);
      mutation = removeManyResult;
      if (orCreate === removeManyResult) {
        return false;
      } else {
        let tmp3 = removeManyResult;
        if (null != removeManyResult.revealedMessageId) {
          let tmpResult = tmp(12);
          tmp3 = removeManyResult;
          if (tmpResult.some(ids, (arg0) => mutation.revealedMessageId === arg0)) {
            let id = removeManyResult.getAfter(removeManyResult.revealedMessageId);
            if (null == id) {
              mutation = removeManyResult.mutate({ revealedMessageId: null });
            }
            obj = { revealedMessageId: null };
            id = id.id;
            obj[0] = id;
            mutation = removeManyResult.mutate(obj);
          }
        }
        tmpResult = tmp(5030);
        tmpResult.commit(tmp3);
        const item1 = ids.forEach((arg0) => {
          set.delete(arg0);
        });
      }
    }
  },
  MESSAGE_REVEAL: function handleMessageReveal(arg0) {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const orCreate = mergeMessage.getOrCreate(channelId);
    const obj = mergeMessage;
    mergeMessage.commit(orCreate.mutate({ revealedMessageId: messageId }));
  },
  THREAD_CREATE_LOCAL: function handleThreadCreateLocal(channelId) {
    const orCreate = mergeMessage.getOrCreate(channelId.channelId);
    const complete = orCreate.loadComplete({ newMessages: [], hasMoreAfter: false, hasMoreBefore: false });
    const obj = mergeMessage;
    mergeMessage.commit(complete);
  },
  CHANNEL_DELETE: handleCleanup,
  THREAD_DELETE: handleCleanup,
  GUILD_DELETE: handleCleanup,
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(arg0) {
    while (tmp !== undefined) {
      let tmp3 = performAuthorUpdate;
      let tmp4 = performAuthorUpdate(tmp2.guildId);
      continue;
    }
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(guildId) {
    guildId = guildId.guildId;
    let item = mergeMessage.forEach((channelId) => {
      const channel = outer1_9.getChannel(channelId.channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (guild_id === items) {
        items = [];
        let c1 = false;
        const item = channelId.forEach((nick) => {
          let colorString;
          const messageAuthor = items(outer1_2[27]).getMessageAuthor(nick);
          ({ nick, colorString } = messageAuthor);
          if (nick === nick.nick) {
            if (colorString === nick.colorString) {
              items.push(nick);
            }
          }
          let c1 = true;
          items.push(nick.merge({ nick, colorString }));
        });
        if (c1) {
          outer1_1(outer1_2[19]).commit(channelId.reset(items));
          const obj = outer1_1(outer1_2[19]);
        }
      }
    });
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(reactions) {
    let channelId;
    let messageId;
    reactions = reactions.reactions;
    ({ channelId, messageId } = reactions);
    const value = mergeMessage.get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (addReactionBatch) => {
        const currentUser = outer1_18.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return addReactionBatch.addReactionBatch(reactions, id);
      });
      tmp(5030).commit(updateResult);
    }
    const obj = mergeMessage;
    tmp = importDefault;
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(arg0) {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    const value = mergeMessage.get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (set) => set.set("reactions", []));
      tmp(5030).commit(updateResult);
    }
    const obj = mergeMessage;
    tmp = importDefault;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(emoji) {
    let channelId;
    let messageId;
    emoji = emoji.emoji;
    ({ channelId, messageId } = emoji);
    const value = mergeMessage.get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (removeReactionsForEmoji) => removeReactionsForEmoji.removeReactionsForEmoji(emoji));
      tmp(5030).commit(updateResult);
    }
    const obj = mergeMessage;
    tmp = importDefault;
  },
  LOGOUT: function handleLogout() {
    const item = mergeMessage.forEach((channelId) => {
      callback(table[19]).clear(channelId.channelId);
    });
    set.clear();
  },
  UPLOAD_START: function handleUploadStart(message) {
    message = message.message;
    let nonce;
    if (message != null) {
      nonce = message.nonce;
    }
    if (null != nonce) {
      set.add(message.nonce);
    }
  },
  UPLOAD_FAIL: function handleUploadFail(messageId) {
    messageId = messageId.messageId;
    if (null == messageId) {
      return false;
    } else {
      if (set.has(messageId)) {
        const orCreate = mergeMessage.getOrCreate(tmp);
        const value = orCreate.get(messageId);
        if (null == value) {
          return false;
        } else {
          const items = [value];
          const removeResult = orCreate.remove(messageId);
          obj5.delete(messageId);
          const mergeResult = orCreate.remove(messageId).merge(items);
          tmp2(5030).commit(mergeResult);
        }
        const obj = mergeMessage;
        tmp2 = importDefault;
      } else {
        return false;
      }
      obj5 = set;
    }
  },
  LOCAL_MESSAGE_CREATE: function handleLocalIncomingMesssage(message) {
    message = message.message;
    const currentUser = authStore.getCurrentUser();
    if (tmp2) {
      let c26 = true;
    }
  }
});
let result = set.fileFinishedImporting("stores/MessageStore.tsx");

export default messageStore;
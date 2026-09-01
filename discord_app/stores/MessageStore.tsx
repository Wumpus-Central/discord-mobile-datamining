// discord_app/stores/MessageStore.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import DISCORD_EPOCHDefault from "../utils/SnowflakeUtils.tsx";
import applyDefault from "../../_runtime/00012_apply.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import mergeMessageDefault from "../lib/ChannelMessages.tsx";
import isIOSPushNotificationRawPayloadFixExperimentEnabled from "../modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx";
import _handleConnectionOpen from "../modules/gateway/GatewayConnectionStore.tsx";
import redactionSettingToRenderedString from "../modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import items2 from "../lib/MessageQueue.tsx";
import closure_3 from "../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../modules/impersonate/ImpersonateStore.tsx";
import closure_6 from "../modules/messages/EphemeralMessageStore.tsx";
import closure_7 from "../modules/user_settings/LocaleStore.tsx";
import closure_8 from "AuthenticationStore.tsx";
import closure_9 from "ChannelStore.tsx";
import closure_10 from "DimensionStore.tsx";
import closure_11 from "GuildChannelStore.tsx";
import closure_12 from "GuildMemberStore.tsx";
import closure_13 from "GuildStore.tsx";
import closure_14 from "PermissionStore.tsx";
import closure_15 from "RelationshipStore.tsx";
import closure_16 from "SelectedChannelStore.tsx";
import closure_17 from "SelectedGuildStore.tsx";
import closure_18 from "UserStore.tsx";
import ME from "../Constants.tsx";
import set from "../../_runtime/00002_set.js";
import { MAX_REACTIONS } from "../modules/reactions/ReactionUtils.tsx";

require = arg1;
function reinjectEphemerals(channelId, truncateResult) {
  closure_0 = truncateResult;
  if (truncateResult.hasMoreAfter) {
    return truncateResult;
  } else {
    const messages = store.getMessages(channelId);
    if (0 === messages.length) {
      return truncateResult;
    } else {
      let firstResult = null;
      if (truncateResult.hasMoreBefore) {
        firstResult = truncateResult.first();
      }
      importDefault = firstResult;
      const found = messages.filter((id) => {
        const hasItem = truncateResult.has(id.id);
        let tmp2 = !hasItem;
        if (!hasItem) {
          let tmp5 = null == closure_1;
          if (!tmp5) {
            tmp5 = firstResult(found[18]).compare(id.id, tmp3.id) > 0;
            const obj = firstResult(found[18]);
          }
          tmp2 = tmp5;
        }
        return tmp2;
      });
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
  const item = mergeMessageDefault.forEach((mutate) => {
    callback(table[19]).commit(mutate.mutate({ ready: false, loadingMore: false }));
  });
  set.clear();
}
function _addPushNotificationMessageIfNotCached() {
  const self = this;
  const tmp = callback2((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function* (arg0, arg1, arg2) {
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
              closure_4 = tmp3;
              let orCreate = tmp28;
              orCreate = undefined;
              const databaseResult = lib(1956).database();
              const basicChannel = closure_1_9.getBasicChannel(closure_0);
              if (null != databaseResult) {
                if (null != basicChannel) {
                  c5 = 1;
                  const obj4 = lib(1956);
                  c6 = 2;
                  c7 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = lib(1956).messages(databaseResult).get(basicChannel.guild_id, tmp35, tmp36.id);
                  return obj1;
                }
              }
              const obj9 = lib(1956);
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
          obj1 = lib(5216);
          orCreate = obj1.getOrCreate(closure_0);
          lib(5216).commit(orCreate.receivePushNotification(lib, dependencyMap));
          closure_34.emitChange();
          c7 = 3;
          const obj3 = lib(5216);
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
  closure_30 = tmp;
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
    const orCreate = mergeMessageDefault.getOrCreate(attachment_id);
    let obj = {};
    const merged = Object.assign(item10037);
    obj.channel_id = attachment_id;
    obj.type = constants4.MEDIA_MENTION_MESSAGE;
    obj.id = item10037.media_mention.message_id;
    obj = { channel_id: null, message_id: null, type: null, guild_id: null };
    obj[0] = item10037.channel_id;
    obj[1] = item10037.media_mention.message_id;
    obj[2] = constants2.DEFAULT;
    const channel = store2.getChannel(item10037.channel_id);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj[3] = guild_id;
    obj.message_reference = obj;
    const obj3 = mergeMessageDefault;
    const tmp5 = importDefault;
    const mutation = orCreate.receiveMessage(obj, false).mutate({ ready: true });
    const receiveMessageResult = orCreate.receiveMessage(obj, false);
    tmp5(5216).commit(mutation);
    const tmp5Result = tmp5(5216);
  }
}
function invalidateInaccessibleMessages(arg0) {
  closure_0 = arg0;
  importDefault = false;
  const item = mergeMessageDefault.forEach((cached) => {
    if (!cached.cached) {
      const basicChannel = closure_1_9.getBasicChannel(cached.channelId);
      let guild_id;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      if (guild_id === guildId) {
        if (!closure_1_14.canBasicChannel(closure_1_19.VIEW_CHANNEL, basicChannel)) {
          callback(closure_1_2[19]).commit(cached.mutate({ cached: true }));
          callback = true;
          const obj = callback(closure_1_2[19]);
        }
      }
    }
  });
  return importDefault;
}
function handleRoleUpdate(guildId) {
  guildId = guildId.guildId;
  importDefault = false;
  const item = mergeMessageDefault.forEach((cached) => {
    if (!cached.cached) {
      const basicChannel = closure_1_9.getBasicChannel(cached.channelId);
      let guild_id;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      if (guild_id === guildId) {
        if (!closure_1_14.canBasicChannel(closure_1_19.VIEW_CHANNEL, basicChannel)) {
          callback(closure_1_2[19]).commit(cached.mutate({ cached: true }));
          callback = true;
          const obj = callback(closure_1_2[19]);
        }
      }
    }
  });
  return importDefault;
}
function handleCleanup() {
  const item = mergeMessageDefault.forEach((channelId) => {
    channelId = channelId.channelId;
    if (null == channel.getChannel(channelId)) {
      callback(table[19]).clear(channelId);
      const obj = callback(table[19]);
    }
  });
}
function handleRelationshipUpdate() {
  c0 = false;
  const item = mergeMessageDefault.forEach((reset) => {
    closure_1_1(closure_1_2[19]).commit(
      reset.reset(
        reset.map((blocked) => {
          let result = blocked;
          if (blocked.blocked !== closure_1_15.isBlockedForMessage(blocked)) {
            c0 = true;
            result = blocked.set("blocked", obj.isBlockedForMessage(blocked));
          }
          let result1 = result;
          if (result.ignored !== closure_1_15.isIgnoredForMessage(result)) {
            c0 = true;
            result1 = result.set("ignored", obj.isIgnoredForMessage(result));
          }
          return result1;
        }),
      ),
    );
  });
  return c0;
}
function performAuthorUpdate(guildId) {
  closure_0 = guildId;
  const item = mergeMessageDefault.forEach((channelId) => {
    const channel = closure_1_9.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id === items) {
      items = [];
      c1 = false;
      const item = channelId.forEach((nick) => {
        const messageAuthor = items(closure_1_2[27]).getMessageAuthor(nick);
        ({ nick, colorString } = messageAuthor);
        if (nick === nick.nick) {
          if (colorString === nick.colorString) {
            items.push(nick);
          }
        }
        c1 = true;
        items.push(nick.merge({ nick, colorString }));
      });
      if (c1) {
        closure_1_1(closure_1_2[19]).commit(channelId.reset(items));
        const obj = closure_1_1(closure_1_2[19]);
      }
    }
  });
}
function handleReaction(optimistic) {
  const _require = optimistic;
  ({ type: importDefault, channelId, emoji: dependencyMap, reactionType: closure_3 } = optimistic);
  ({ messageId, userId } = optimistic);
  const value = mergeMessageDefault.get(channelId);
  if (null == value) {
    return false;
  } else {
    if (obj4.shouldApplyReaction(optimistic)) {
      const basicChannel = store2.getBasicChannel(channelId);
      let type;
      if (basicChannel != null) {
        type = basicChannel.type;
      }
      closure_4 = type === constants.DM;
      closure_5 = id.getId() === userId;
      const updateResult = value.update(messageId, (addReaction) => {
        if ("MESSAGE_REACTION_ADD" === closure_1) {
          const obj = { colors: null, reactionType: null, isDMChannel: null };
          obj[0] = optimistic.colors;
          obj[1] = closure_3;
          obj[2] = closure_4;
          let addReactionResult = addReaction.addReaction(closure_2, closure_5, obj);
        } else {
          addReactionResult = addReaction.removeReaction(closure_2, closure_5, closure_3);
        }
        return addReactionResult;
      });
      mergeMessageDefault.commit(updateResult);
    } else {
      return false;
    }
    obj4 = MAX_REACTIONS;
  }
  let obj = mergeMessageDefault;
  const tmp = importDefault;
}
function handleMessageSendFailedAutomod(arg0) {
  ({ type: require, messageData } = arg0);
  const failedMessageId = items2.getFailedMessageId(messageData);
  const obj = items2;
  const tmp3 = importDefault;
  const orCreate = mergeMessageDefault.getOrCreate(messageData.message.channelId);
  if (orCreate.has(failedMessageId)) {
    const updateResult = orCreate.update(failedMessageId, (embeds) => {
      embeds = embeds.embeds;
      let length;
      if (embeds != null) {
        length = embeds.filter(closure_1_0(closure_1_2[30]).isNotAutomodEmbed).length;
      }
      let result = embeds;
      if (length > 0) {
        result = embeds.set("embeds", []);
      }
      let result1 = result;
      if ("MESSAGE_SEND_FAILED_AUTOMOD" === closure_0) {
        result1 = result.set("flags", closure_1_0(closure_1_2[24]).addFlag(result.flags, closure_1_21.EPHEMERAL));
        const obj2 = closure_1_0(closure_1_2[24]);
      }
      return result1;
    });
    mergeMessageDefault.commit(updateResult);
  } else {
    return false;
  }
  let obj2 = mergeMessageDefault;
}
({
  BasicPermissions: closure_19,
  ChannelTypes: closure_20,
  MessageFlags: closure_21,
  MessageReferenceTypes: closure_22,
  MessageStates: closure_23,
  MessageTypes: closure_24,
  Permissions: closure_25,
} = ME);
let set = new Set();
let closure_27 = new timestampDefault("MessageStore");
let c28 = false;
const Store = initializeDefault.Store;
class MessageStore extends Store {}
const prototype = MessageStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    closure_8,
    closure_9,
    closure_10,
    closure_6,
    closure_11,
    closure_12,
    closure_13,
    closure_5,
    closure_7,
    closure_14,
    closure_15,
    closure_16,
    closure_17,
    closure_18,
  );
  const items = [closure_5];
  this.syncWith(items, () => {});
};
prototype["getMessages"] = function getMessages(arg0) {
  if (closure_5.hasViewingRoles()) {
    const channel = store2.getChannel(arg0);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    if (closure_5.isViewingRoles(guildId)) {
      if (!closure_14.can(constants5.VIEW_CHANNEL, channel)) {
        const tmp11 = new mergeMessageDefault(arg0);
        return tmp11;
      }
    }
  }
  return mergeMessageDefault.getOrCreate(arg0);
};
prototype["getMessage"] = function getMessage(arg0, arg1) {
  const orCreate = mergeMessageDefault.getOrCreate(arg0);
  return orCreate.get(arg1);
};
prototype["getLastEditableMessage"] = function getLastEditableMessage(id) {
  const currentUser = authStore.getCurrentUser();
  const messages = this.getMessages(id);
  const tmp = applyDefault;
  const reversed = applyDefault(messages.toArray()).reverse();
  return reversed.find((arg0) => {
    let id;
    if (id != null) {
      id = id.id;
    }
    return closure_1_1(closure_1_2[32])(arg0, id);
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
    let tmp4 = type === lib(closure_1_2[33]).InteractionTypes.APPLICATION_COMMAND;
    if (tmp4) {
      const interactionData = interaction.interactionData;
      let type1;
      if (interactionData != null) {
        type1 = interactionData.type;
      }
      tmp4 = type1 === lib(closure_1_2[33]).ApplicationCommandType.CHAT;
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
  const tmp = applyDefault;
  const reversed = applyDefault(messages.toArray()).reverse();
  return reversed.get(0);
};
prototype["getLastNonCurrentUserMessage"] = function getLastNonCurrentUserMessage(closure_0) {
  const currentUser = authStore.getCurrentUser();
  const messages = this.getMessages(closure_0);
  const tmp = applyDefault;
  const reversed = applyDefault(messages.toArray()).reverse();
  return reversed.find((author) => {
    let id;
    if (id != null) {
      id = id.id;
    }
    return author.author.id !== id;
  });
};
prototype["jumpedMessageId"] = function jumpedMessageId(arg0) {
  const value = mergeMessageDefault.get(arg0);
  let jumpTargetId;
  if (value != null) {
    jumpTargetId = value.jumpTargetId;
  }
  return jumpTargetId;
};
prototype["focusedMessageId"] = function focusedMessageId(arg0) {
  const value = mergeMessageDefault.get(arg0);
  let focusTargetId;
  if (value != null) {
    focusTargetId = value.focusTargetId;
  }
  return focusTargetId;
};
prototype["hasPresent"] = function hasPresent(arg0) {
  const value = mergeMessageDefault.get(arg0);
  const obj = mergeMessageDefault;
  return null != value && value.ready && value.hasPresent();
};
prototype["isReady"] = function isReady(arg0) {
  return mergeMessageDefault.getOrCreate(arg0).ready;
};
prototype["whenReady"] = function whenReady(arg0, arg1) {
  const self = this;
  closure_1 = arg0;
  closure_0 = arg1;
  const result = this.addConditionalChangeListener(() => {
    if (self.isReady(closure_1)) {
      const _setImmediate = setImmediate;
      setImmediate(closure_0);
      return false;
    }
  });
};
prototype["isLoadingMessages"] = function isLoadingMessages(channelId) {
  return mergeMessageDefault.getOrCreate(channelId).loadingMore;
};
prototype["hasCurrentUserSentMessage"] = function hasCurrentUserSentMessage(arg0) {
  const currentUser = authStore.getCurrentUser();
  const messages = this.getMessages(arg0);
  return (
    null !=
    messages.findNewest((author) => {
      let id;
      if (id != null) {
        id = id.id;
      }
      return author.author.id === id;
    })
  );
};
prototype["hasCurrentUserSentWaveBlockingMessage"] = function hasCurrentUserSentWaveBlockingMessage(id) {
  const currentUser = authStore.getCurrentUser();
  const messages = this.getMessages(id);
  return (
    null !=
    messages.findNewest((type) => {
      let tmp = type.type !== closure_1_24.FRIEND_REQUEST_ACCEPTED;
      if (tmp) {
        let id;
        if (id != null) {
          id = id.id;
        }
        tmp = type.author.id === id;
      }
      return tmp;
    })
  );
};
prototype["hasCurrentUserSentMessageSinceAppStart"] = function hasCurrentUserSentMessageSinceAppStart() {
  return c28;
};
MessageStore.displayName = "MessageStore";
const messageStore = new MessageStore(dispatcherDefault, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function handleBackgroundSyncChannelMessages(changesByChannelId) {
    changesByChannelId = changesByChannelId.changesByChannelId;
    for (const key10012 in changesByChannelId) {
      let tmp9 = importDefault;
      let tmp8 = key10012;
      let tmp10 = dependencyMap;
      let obj = mergeMessageDefault;
      let value = obj.get(key10012);
      if (null == value) {
        continue;
      } else {
        let tmp = require;
        let _default = _handleConnectionOpen.default;
        let isConnectedResult = _default.isConnected();
        if (!value.cached) {
          if (isConnectedResult) {
            let tmp3 = logger;
            let _HermesInternal = HermesInternal;
            let str = "Skipping background message sync for ";
            let tmp4 = key10012;
            let str2 = " cached:";
            let str3 = " ready:";
            let str4 = " hasMoreAfter:";
            let str5 = " isConnected:";
            let tmp5 = isConnectedResult;
            let logResult = logger.log(
              "Skipping background message sync for " +
                tmp8 +
                " cached:" +
                value.cached +
                " ready:" +
                value.ready +
                " hasMoreAfter:" +
                value.hasMoreAfter +
                " isConnected:" +
                isConnectedResult,
            );
            continue;
          }
          continue;
        }
        let mergeDeltaResult = value.mergeDelta(
          changesByChannelId[key10012].new_messages,
          changesByChannelId[key10012].modified_messages,
          changesByChannelId[key10012].deleted_message_ids,
        );
        continue;
      }
      continue;
    }
  },
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  CACHE_LOADED: function handleCacheLoaded(messages) {
    const entries = DISCORD_EPOCHDefault.entries(messages.messages);
    const obj = DISCORD_EPOCHDefault;
    while (tmp2 !== undefined) {
      let tmp4 = callback;
      let tmp5 = callback(tmp3, 2);
      let tmp8 = importDefault;
      let tmp9 = dependencyMap;
      [tmp6, tmp7] = tmp5;
      let obj2 = mergeMessageDefault;
      let orCreate = obj2.getOrCreate(tmp6);
      let addCachedMessagesResult = orCreate.addCachedMessages(tmp7, true);
      let obj4 = mergeMessageDefault;
      let commitResult = obj4.commit(addCachedMessagesResult);
      continue;
    }
  },
  LOAD_MESSAGES: function handleLoadMessages() {
    return true;
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(arg0) {
    ({ channelId, isBefore, isAfter, messages } = arg0);
    ({ jump, hasMoreBefore, hasMoreAfter, isStale, truncate, avoidInitialScroll } = arg0);
    const orCreate = mergeMessageDefault.getOrCreate(channelId);
    const complete = orCreate.loadComplete({
      newMessages: messages,
      isBefore,
      isAfter,
      jump,
      hasMoreBefore,
      hasMoreAfter,
      cached: isStale,
      hasFetched: true,
      avoidInitialScroll,
    });
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
    const obj = mergeMessageDefault;
    const tmp = importDefault;
    const tmp7 = reinjectEphemerals(channelId, truncateResult);
    mergeMessageDefault.commit(tmp7);
    for (const item10037 of messages) {
      let tmp9 = receiveMediaMentionMessage;
      let tmp10 = receiveMediaMentionMessage(item10037);
      continue;
    }
  },
  LOAD_MESSAGES_FAILURE: function handleLoadMessagesFailure(channelId) {
    const orCreate = mergeMessageDefault.getOrCreate(channelId.channelId);
    const obj = mergeMessageDefault;
    mergeMessageDefault.commit(orCreate.mutate({ loadingMore: false, error: true }));
  },
  LOAD_MESSAGES_SUCCESS_CACHED: function handleLoadMessagesSuccessCached(truncate) {
    ({ channelId, jump, focus, before, after, limit } = truncate);
    let obj = importDefault(found[19]);
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
          obj = {
            messageId: null,
            flash: null,
            offset: null,
            returnTargetId: null,
            jumpType: null,
            onJumpComplete: null,
          };
          ({
            messageId: obj4[0],
            flash: obj4[1],
            offset: obj4[2],
            returnMessageId: obj4[3],
            jumpType: obj4[4],
            onJumpComplete: obj4[5],
          } = jump);
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
    require = truncateResult;
    let tmp10 = truncateResult;
    if (!truncateResult.hasMoreAfter) {
      const messages = store.getMessages(channelId);
      tmp10 = truncateResult;
      if (0 !== messages.length) {
        let firstResult = null;
        if (truncateResult.hasMoreBefore) {
          firstResult = truncateResult.first();
        }
        importDefault = firstResult;
        found = messages.filter((id) => {
          const hasItem = truncateResult.has(id.id);
          let tmp2 = !hasItem;
          if (!hasItem) {
            let tmp5 = null == closure_1;
            if (!tmp5) {
              tmp5 = firstResult(found[18]).compare(id.id, tmp3.id) > 0;
              const obj = firstResult(found[18]);
            }
            tmp2 = tmp5;
          }
          return tmp2;
        });
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
    importDefault(found[19]).commit(tmp10);
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(channelId) {
    let obj = mergeMessageDefault;
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
    mergeMessageDefault.commit(mutation);
  },
  LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function handleLoadMessageInteractionDataSuccess(messageId) {
    closure_0 = messageId;
    messageId = messageId.messageId;
    const value = mergeMessageDefault.get(messageId.channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(messageId, (set) => set.set("interactionData", messageId.interactionData));
        mergeMessageDefault.commit(updateResult);
      }
    }
    return false;
  },
  TRUNCATE_MESSAGES: function handleTruncateMessages(arg0) {
    ({ channelId, truncateBottom, truncateTop } = arg0);
    logger.log("Truncating messages for " + channelId + " bottom:" + truncateBottom + " top:" + truncateTop);
    const orCreate = mergeMessageDefault.getOrCreate(channelId);
    const obj = mergeMessageDefault;
    const truncateResult = orCreate.truncate(truncateBottom, truncateTop);
    mergeMessageDefault.commit(truncateResult);
  },
  CLEAR_MESSAGES: function handleClearMessages(channelId) {
    channelId = channelId.channelId;
    logger.log("Clearing messages for " + channelId);
    mergeMessageDefault.clear(channelId);
    set.clear();
  },
  MESSAGE_CREATE: function handleIncomingMessage(isPushNotification) {
    ({ channelId, message, optimistic } = isPushNotification);
    const orCreate = mergeMessageDefault.getOrCreate(channelId);
    const obj = mergeMessageDefault;
    const tmp3 = require;
    const isConnectedResult = _handleConnectionOpen.default.isConnected();
    if (isPushNotification.isPushNotification) {
      if (tmp3Result.isIOSPushNotificationRawPayloadFixExperimentEnabled()) {
        (function addPushNotificationMessageIfNotCached(channelId, message, isConnectedResult) {
          const self = this;
          const apply = closure_30.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(channelId, message, isConnectedResult);
      } else {
        logger.log("Inserting message tapped on from a push notification", message.id, message.channel_id);
        let tmpResult = tmp(5216);
        tmpResult.commit(orCreate.receivePushNotification(message, isConnectedResult));
      }
      tmp3Result = isIOSPushNotificationRawPayloadFixExperimentEnabled;
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
            hasItem = message.state !== constants3.SENDING;
          }
          if (hasItem) {
            hasItem = set.has(message.nonce);
          }
          let removeResult = orCreate;
          if (hasItem) {
            removeResult = orCreate.remove(message.nonce);
            set.delete(message.nonce);
          }
          tmpResult = tmp(5216);
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
    ({ messageId, reason: require } = channelId);
    const orCreate = mergeMessageDefault.getOrCreate(channelId.channelId);
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
            const result = set.set("state", closure_1_23.SEND_FAILED);
            if (result.isCommandType()) {
              let str3 = closure_0;
              if (closure_0 == null) {
                str3 = "";
              }
              const result1 = result.set("interactionError", str3);
              let result2 = result1.set(
                "flags",
                closure_1_0(closure_1_2[24]).addFlag(result1.flags, closure_1_21.EPHEMERAL),
              );
              const obj3 = closure_1_0(closure_1_2[24]);
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
        mergeMessageDefault.commit(removeResult);
      }
    }
    return false;
  },
  MESSAGE_SEND_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_EDIT_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    const orCreate = mergeMessageDefault.getOrCreate(message.message.channel_id);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        let tmpResult = tmp(5216);
        tmpResult.commit(
          orCreate.update(id, (message) => message(closure_1_2[23]).updateMessageRecord(message, message.message)),
        );
        message = message.message;
        const media_mention = message.media_mention;
        let message_id;
        if (media_mention != null) {
          message_id = media_mention.message_id;
        }
        if (null != message_id) {
          if ("content" in message) {
            tmpResult = tmp(5216);
            const orCreate1 = tmpResult.getOrCreate(message.media_mention.attachment_id);
            const updateResult1 = orCreate1.update(message.media_mention.message_id, (message) => {
              let obj = message(closure_1_2[23]);
              obj = { content: message.content };
              return obj.updateMessageRecord(message, obj);
            });
            tmp(5216).commit(updateResult1);
            const tmpResult1 = tmp(5216);
          }
        }
      }
    }
    return false;
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleMessageExplicitContentScanTimeout(messageId) {
    messageId = messageId.messageId;
    const value = mergeMessageDefault.get(messageId.channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(
          messageId,
          redactionSettingToRenderedString.handleExplicitMediaScanTimeoutForMessage,
        );
        mergeMessageDefault.commit(updateResult);
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    let obj = mergeMessageDefault;
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
              let tmpResult = tmp(5216);
              value = tmpResult.get(attachment_id);
              if (null != value) {
                const mediaMention2 = value.mediaMention;
                let message_id;
                if (mediaMention2 != null) {
                  message_id = mediaMention2.message_id;
                }
                if (null != message_id) {
                  tmpResult = tmp(5216);
                  tmpResult.commit(value.remove(message_id));
                  const removeResult = value.remove(message_id);
                }
              }
            }
          }
          const removeResult1 = orCreate.remove(id);
          tmp(5216).commit(removeResult1);
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
    let obj = mutation(5216);
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
            value = mutation(closure_1_2[19]).get(attachment_id);
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
            const obj = mutation(closure_1_2[19]);
            tmp3 = mutation;
            tmp4 = closure_1_2;
          }
        }
      });
      const removeManyResult = orCreate.removeMany(ids);
      mutation = removeManyResult;
      if (orCreate === removeManyResult) {
        return false;
      } else {
        let tmp8 = removeManyResult;
        if (null != removeManyResult.revealedMessageId) {
          let tmpResult = tmp(12);
          tmp8 = removeManyResult;
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
        tmpResult = tmp(5216);
        tmpResult.commit(tmp8);
        const item1 = ids.forEach((arg0) => {
          set.delete(arg0);
        });
      }
    }
  },
  MESSAGE_REVEAL: function handleMessageReveal(arg0) {
    ({ channelId, messageId } = arg0);
    const orCreate = mergeMessageDefault.getOrCreate(channelId);
    const obj = mergeMessageDefault;
    mergeMessageDefault.commit(orCreate.mutate({ revealedMessageId: messageId }));
  },
  THREAD_CREATE_LOCAL: function handleThreadCreateLocal(channelId) {
    const orCreate = mergeMessageDefault.getOrCreate(channelId.channelId);
    const complete = orCreate.loadComplete({ newMessages: [], hasMoreAfter: false, hasMoreBefore: false });
    const obj = mergeMessageDefault;
    mergeMessageDefault.commit(complete);
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    const obj = applyDefault;
    let flag = false;
    const uniqResult = applyDefault.uniq(channels.map((guild_id) => guild_id.guild_id));
    while (tmp2 !== undefined) {
      let tmp4 = invalidateInaccessibleMessages;
      if (invalidateInaccessibleMessages(tmp3)) {
        flag = true;
      }
      continue;
    }
    return flag;
  },
  GUILD_ROLE_UPDATE: handleRoleUpdate,
  GUILD_ROLE_DELETE: handleRoleUpdate,
  GUILD_MEMBER_UPDATE: function handleMemberUpdate(user) {
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let tmp3 = user.user.id === id;
    if (tmp3) {
      const guildId = user.guildId;
      importDefault = false;
      const item = mergeMessageDefault.forEach((cached) => {
        if (!cached.cached) {
          const basicChannel = closure_1_9.getBasicChannel(cached.channelId);
          let guild_id;
          if (basicChannel != null) {
            guild_id = basicChannel.guild_id;
          }
          if (guild_id === guildId) {
            if (!closure_1_14.canBasicChannel(closure_1_19.VIEW_CHANNEL, basicChannel)) {
              callback(closure_1_2[19]).commit(cached.mutate({ cached: true }));
              callback = true;
              const obj = callback(closure_1_2[19]);
            }
          }
        }
      });
      tmp3 = importDefault;
      const arr = mergeMessageDefault;
    }
    return tmp3;
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
    let item = mergeMessageDefault.forEach((channelId) => {
      const channel = closure_1_9.getChannel(channelId.channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (guild_id === items) {
        items = [];
        c1 = false;
        const item = channelId.forEach((nick) => {
          const messageAuthor = items(closure_1_2[27]).getMessageAuthor(nick);
          ({ nick, colorString } = messageAuthor);
          if (nick === nick.nick) {
            if (colorString === nick.colorString) {
              items.push(nick);
            }
          }
          c1 = true;
          items.push(nick.merge({ nick, colorString }));
        });
        if (c1) {
          closure_1_1(closure_1_2[19]).commit(channelId.reset(items));
          const obj = closure_1_1(closure_1_2[19]);
        }
      }
    });
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(reactions) {
    reactions = reactions.reactions;
    ({ channelId, messageId } = reactions);
    const value = mergeMessageDefault.get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (addReactionBatch) => {
        const currentUser = closure_1_18.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return addReactionBatch.addReactionBatch(reactions, id);
      });
      mergeMessageDefault.commit(updateResult);
    }
    const obj = mergeMessageDefault;
    const tmp = importDefault;
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(arg0) {
    ({ channelId, messageId } = arg0);
    const value = mergeMessageDefault.get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (set) => set.set("reactions", []));
      mergeMessageDefault.commit(updateResult);
    }
    const obj = mergeMessageDefault;
    const tmp = importDefault;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(emoji) {
    emoji = emoji.emoji;
    ({ channelId, messageId } = emoji);
    const value = mergeMessageDefault.get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (removeReactionsForEmoji) =>
        removeReactionsForEmoji.removeReactionsForEmoji(emoji),
      );
      mergeMessageDefault.commit(updateResult);
    }
    const obj = mergeMessageDefault;
    const tmp = importDefault;
  },
  LOGOUT: function handleLogout() {
    const item = mergeMessageDefault.forEach((channelId) => {
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
        const orCreate = mergeMessageDefault.getOrCreate(tmp);
        const value = orCreate.get(messageId);
        if (null == value) {
          return false;
        } else {
          const items = [value];
          const removeResult = orCreate.remove(messageId);
          obj5.delete(messageId);
          const mergeResult = orCreate.remove(messageId).merge(items);
          tmp2(5216).commit(mergeResult);
        }
        const obj = mergeMessageDefault;
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
      c28 = true;
    }
  },
});
let result = set.fileFinishedImporting("stores/MessageStore.tsx");

export default messageStore;

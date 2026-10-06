// === Module 5116: MessageStore ===

// Module 5116 (MessageStore)
import LoggerDefault from "Logger" /* 3 */;
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import Server from "Server" /* 1985 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 2078 */;
import ReactionUtils from "ReactionUtils" /* 4527 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5118 */;
import InteractionTypes from "InteractionTypes" /* 5126 */;
import ChannelMessagesDefault from "ChannelMessages" /* 5438 */;
import IOSPushNotificationRawPayloadFixExperiment from "IOSPushNotificationRawPayloadFixExperiment" /* 5441 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5443 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7122 */;
import MessageQueue from "MessageQueue" /* 7473 */;
import canEditMessageDefault from "canEditMessage" /* 11391 */;
import GuildAutomodMessageStoreUtils from "GuildAutomodMessageStoreUtils" /* 13590 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import EphemeralMessageStore from "EphemeralMessageStore" /* 5117 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import DimensionStore from "DimensionStore" /* 5437 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let addReactionBatch, embeds, importDefault, interaction, set2, set3;

let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
let closure_25;
function reinjectEphemerals(channelId, truncateResult) {
  let closure_0 = truncateResult;
  if (truncateResult.hasMoreAfter) {
    return truncateResult;
  } else {
    const messages = EphemeralMessageStore.getMessages(channelId);
    if (0 === messages.length) {
      return truncateResult;
    } else {
      let firstResult = null;
      if (truncateResult.hasMoreBefore) {
        firstResult = truncateResult.first();
      }
      importDefault = firstResult;
      const found = messages.filter((id) => {
        const hasItem = require.has(id.id);
        let tmp2 = !hasItem;
        if (tmp2) {
          let tmp5 = null == importDefault;
          if (!tmp5) {
            obj = SnowflakeUtilsDefault;
            tmp5 = obj.compare(id.id, tmp3.id) > 0;
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
          const sorted = _array.sort((id, id2) => {
            obj = closure_1_1(found[18]);
            return obj.compare(id.id, id2.id);
          });
        }, true);
      }
      return mutation;
    }
  }
}
function handleConnectionOpen() {
  const arr = ChannelMessagesDefault;
  const item = arr.forEach((mutate) => {
    obj = ChannelMessagesDefault;
    obj.commit(mutate.mutate({ ready: false, loadingMore: false }));
  });
  set.clear();
  map.clear();
}
let obj = function _addPushNotificationMessageIfNotCached() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_3;
    let closure_0 = arg0;
    const user = arg1;
    let closure_2 = arg2;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value, arg2) => {
      let messagesResult;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp25;
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              tmp25 = undefined;
              const obj9 = DatabaseDaosDefault;
              const databaseResult = obj9.database();
              basicChannel = basicChannel.getBasicChannel(closure_0);
              if (null != databaseResult) {
                if (null != basicChannel) {
                  c5 = 1;
                  c6 = 2;
                  c7 = 1;
                  const obj4 = DatabaseDaosDefault;
                  const obj7 = { value: messagesResult.get(basicChannel.guild_id, closure_0, user.id), done: false };
                  messagesResult = obj4.messages(databaseResult);
                  return obj7;
                }
              }
            }
          } else if (1 === tmp4) {
            c5 = 0;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else if (null != value) {
            c5 = 0;
            c7 = 3;
            return { value: "IconComponent", done: null };
          } else {
            c5 = 0;
          }
          closure_132_28.log("Push notification message not in cache, adding directly", user.id, user.channel_id);
          const obj2 = closure_132_1(closure_132_2[19]);
          tmp25 = obj2.getOrCreate(closure_0);
          const obj3 = closure_132_1(closure_132_2[19]);
          obj3.commit(tmp25.receivePushNotification(user, closure_2));
          closure_132_35.emitChange();
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp24) {
          tmp25 = c5;
          if (0 === c5) {
            c7 = 3;
            throw tmp24;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function receiveMediaMentionMessage(item10038) {
  let guild_id;
  let obj2;
  const media_mention = item10038.media_mention;
  let message_id;
  if (media_mention != null) {
    message_id = media_mention.message_id;
  }
  if (null != message_id) {
    const attachment_id = item10038.media_mention.attachment_id;
    const obj3 = ChannelMessagesDefault;
    const orCreate = obj3.getOrCreate(attachment_id);
    obj = { channel_id: attachment_id, type: constants6.MEDIA_MENTION_MESSAGE, id: item10038.media_mention.message_id, message_reference: obj2 };
    const merged = Object.assign(item10038);
    obj2 = { channel_id: item10038.channel_id, message_id: item10038.media_mention.message_id, type: constants4.DEFAULT, guild_id };
    const channel = ChannelStore.getChannel(item10038.channel_id);
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    const receiveMessageResult = orCreate.receiveMessage(obj, false);
    const mutation = receiveMessageResult.mutate({ ready: true });
    const tmp5Result = ChannelMessagesDefault;
    tmp5Result.commit(mutation);
  }
}
function invalidateInaccessibleMessages(arg0) {
  let c1;
  let closure_0 = arg0;
  importDefault = false;
  const arr = ChannelMessagesDefault;
  const item = arr.forEach((cached) => {
    if (!cached.cached) {
      const basicChannel = ChannelStore.getBasicChannel(cached.channelId);
      let guild_id;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      if (guild_id === guildId) {
        if (!PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel)) {
          obj = ChannelMessagesDefault;
          obj.commit(cached.mutate({ cached: true }));
          c1 = true;
        }
      }
    }
  });
  return importDefault;
}
function handleRoleUpdate(guildId) {
  let c1;
  guildId = guildId.guildId;
  importDefault = false;
  const arr = ChannelMessagesDefault;
  const item = arr.forEach((cached) => {
    if (!cached.cached) {
      const basicChannel = ChannelStore.getBasicChannel(cached.channelId);
      let guild_id;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      if (guild_id === guildId) {
        if (!PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel)) {
          obj = ChannelMessagesDefault;
          obj.commit(cached.mutate({ cached: true }));
          c1 = true;
        }
      }
    }
  });
  return importDefault;
}
function handleCleanup() {
  let channel;
  const arr = ChannelMessagesDefault;
  const item = arr.forEach((channelId) => {
    channelId = channelId.channelId;
    if (null == channel.getChannel(channelId)) {
      obj = ChannelMessagesDefault;
      obj.clear(channelId);
    }
  });
}
function handleRelationshipUpdate() {
  let blockedForMessage;
  let c0 = false;
  const arr = ChannelMessagesDefault;
  const item = arr.forEach((reset) => {
    obj = ChannelMessagesDefault;
    obj.commit(reset.reset(reset.map((blocked) => {
      let result = blocked;
      if (blocked.blocked !== blockedForMessage.isBlockedForMessage(blocked)) {
        c0 = true;
        result = blocked.set("blocked", blockedForMessage.isBlockedForMessage(blocked));
      }
      let result1 = result;
      if (result.ignored !== blockedForMessage.isIgnoredForMessage(result)) {
        c0 = true;
        result1 = result.set("ignored", blockedForMessage.isIgnoredForMessage(result));
      }
      return result1;
    })));
  });
  return c0;
}
function performAuthorUpdate(guildId) {
  let closure_0 = guildId;
  const arr = ChannelMessagesDefault;
  const item = arr.forEach((channelId) => {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id === guildId) {
      const items = [];
      let c1 = false;
      const item = channelId.forEach((nick) => {
        let colorString;
        obj = guildId(closure_2_2[27]);
        const messageAuthor = obj.getMessageAuthor(nick);
        ({ nick, colorString } = messageAuthor);
        if (nick === nick.nick) {
          if (colorString === nick.colorString) {
            items.push(nick);
          }
        }
        c1 = true;
        items.push(nick.merge({ nick, colorString }));
      });
      const tmp4 = c1;
      if (tmp4) {
        obj = ChannelMessagesDefault;
        obj.commit(channelId.reset(items));
      }
    }
  });
}
function handleReaction(optimistic) {
  let channelId;
  let closure_129_1;
  let closure_129_2;
  let closure_129_3;
  let messageId;
  let userId;
  let closure_0 = optimistic;
  ({ type: closure_129_1, channelId, emoji: closure_129_2, reactionType: closure_129_3 } = optimistic);
  ({ messageId, userId } = optimistic);
  obj = ChannelMessagesDefault;
  const value = obj.get(channelId);
  if (null == value) {
    return false;
  } else {
    const obj4 = ReactionUtils;
    if (obj4.shouldApplyReaction(optimistic)) {
      const basicChannel = ChannelStore.getBasicChannel(channelId);
      let type;
      if (basicChannel != null) {
        type = basicChannel.type;
      }
      let closure_4 = type === constants2.DM;
      let closure_5 = AuthenticationStore.getId() === userId;
      const updateResult = value.update(messageId, (addReaction) => {
        let addReactionResult;
        if ("MESSAGE_REACTION_ADD" === closure_1_1) {
          obj = { colors: colors.colors, reactionType, isDMChannel };
          addReactionResult = addReaction.addReaction(closure_1_2, closure_5, obj);
        } else {
          addReactionResult = addReaction.removeReaction(closure_1_2, closure_5, reactionType);
        }
        return addReactionResult;
      });
      const tmpResult = ChannelMessagesDefault;
      tmpResult.commit(updateResult);
    } else {
      return false;
    }
  }
}
function handleMessageSendFailedAutomod(arg0) {
  let messageData;
  ({ type: require, messageData } = arg0);
  const message = messageData.message;
  obj = MessageQueue;
  const failedMessageId = obj.getFailedMessageId(messageData);
  const channelId = message.channelId;
  const obj2 = ChannelMessagesDefault;
  const orCreate = obj2.getOrCreate(channelId);
  if (orCreate.has(failedMessageId)) {
    const updateResult = orCreate.update(failedMessageId, (embeds) => {
      embeds = embeds.embeds;
      let length;
      if (embeds != null) {
        length = embeds.filter(GuildAutomodMessageStoreUtils.isNotAutomodEmbed).length;
      }
      let result = embeds;
      if (length > 0) {
        result = embeds.set("embeds", []);
      }
      let result1 = result;
      if ("MESSAGE_SEND_FAILED_AUTOMOD" === require) {
        set = result.set;
        obj = FlagUtils;
        result1 = set("flags", obj.addFlag(result.flags, constants.EPHEMERAL));
      }
      return result1;
    });
    const tmp3Result = ChannelMessagesDefault;
    tmp3Result.commit(updateResult);
  } else {
    return false;
  }
}
({ BasicPermissions: closure_19, ChannelTypes: closure_20, MessageFlags: closure_21, MessageReferenceTypes: closure_22, MessageStates: closure_23, MessageTypes: closure_24, Permissions: closure_25 } = Constants);
let set = new Set();
const map = new Map();
let tmp5 = new LoggerDefault("MessageStore");
const logger = tmp5;
let c29 = false;
const Store = get_initializedDefault.Store;
class MessageStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, ChannelStore, DimensionStore, EphemeralMessageStore, GuildChannelStore, GuildMemberStore, GuildStore, ImpersonateStore, LocaleStore, PermissionStore, RelationshipStore, SelectedChannelStore, SelectedGuildStore, UserStore);
    const items = [ImpersonateStore];
    this.syncWith(items, () => {

    });
  }
  getMessages(arg0) {
    if (ImpersonateStore.hasViewingRoles()) {
      const channel = ChannelStore.getChannel(arg0);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      if (ImpersonateStore.isViewingRoles(guildId)) {
        if (!PermissionStore.can(constants7.VIEW_CHANNEL, channel)) {
          const self = this;
          const self2 = this;
          const tmp9 = new ChannelMessagesDefault(arg0);
          return tmp9;
        }
      }
    }
    const obj3 = ChannelMessagesDefault;
    return obj3.getOrCreate(arg0);
  }
  getMessage(arg0, arg1) {
    obj = ChannelMessagesDefault;
    const orCreate = obj.getOrCreate(arg0);
    return orCreate.get(arg1);
  }
  getAutomodRemovalNotice(id) {
    return map.get(id);
  }
  getLastEditableMessage(id) {
    id = UserStore.getCurrentUser();
    let tmp = _modDef12;
    const messages = this.getMessages(id);
    const tmpResult = tmp(messages.toArray());
    const reversed = tmpResult.reverse();
    return reversed.find((item) => {
      id = undefined;
      const tmp = canEditMessageDefault;
      if (id != null) {
        id = id.id;
      }
      return tmp(item, id);
    });
  }
  getLastChatCommandMessage(arg0) {
    let id = UserStore.getCurrentUser();
    const messages = this.getMessages(arg0);
    const toArrayResult = messages.toArray();
    const reversed = toArrayResult.reverse();
    return reversed.find((interaction) => {
      interaction = interaction.interaction;
      let type;
      if (interaction != null) {
        type = interaction.type;
      }
      let tmp4 = type === InteractionTypes.InteractionTypes.APPLICATION_COMMAND;
      if (tmp4) {
        const interactionData = interaction.interactionData;
        let type1;
        if (interactionData != null) {
          type1 = interactionData.type;
        }
        tmp4 = type1 === Server.ApplicationCommandType.CHAT;
      }
      if (tmp4) {
        let id1;
        id = interaction.interaction.user.id;
        if (id != null) {
          id1 = id.id;
        }
        tmp4 = id === id1;
      }
      return tmp4;
    });
  }
  getLastMessage(channelId) {
    const tmp = _modDef12;
    const messages = this.getMessages(channelId);
    const tmpResult = tmp(messages.toArray());
    const reversed = tmpResult.reverse();
    return reversed.get(0);
  }
  getLastNonCurrentUserMessage(arg0) {
    const currentUser = UserStore.getCurrentUser();
    const tmp = _modDef12;
    const messages = this.getMessages(arg0);
    const tmpResult = tmp(messages.toArray());
    const reversed = tmpResult.reverse();
    return reversed.find((author) => {
      let id1;
      id = author.author.id;
      if (id != null) {
        id1 = id.id;
      }
      return id !== id1;
    });
  }
  jumpedMessageId(arg0) {
    obj = ChannelMessagesDefault;
    const value = obj.get(arg0);
    let jumpTargetId;
    if (value != null) {
      jumpTargetId = value.jumpTargetId;
    }
    return jumpTargetId;
  }
  focusedMessageId(arg0) {
    obj = ChannelMessagesDefault;
    const value = obj.get(arg0);
    let focusTargetId;
    if (value != null) {
      focusTargetId = value.focusTargetId;
    }
    return focusTargetId;
  }
  hasPresent(arg0) {
    obj = ChannelMessagesDefault;
    const value = obj.get(arg0);
    const tmp = null != value && value.ready && value.hasPresent();
    return tmp;
  }
  isReady(arg0) {
    obj = ChannelMessagesDefault;
    return obj.getOrCreate(arg0).ready;
  }
  whenReady(arg0, arg1) {
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
  }
  isLoadingMessages(channelId) {
    obj = ChannelMessagesDefault;
    return obj.getOrCreate(channelId).loadingMore;
  }
  hasCurrentUserSentMessage(arg0) {
    const currentUser = UserStore.getCurrentUser();
    const messages = this.getMessages(arg0);
    return null != messages.findNewest((author) => {
      let id1;
      id = author.author.id;
      if (id != null) {
        id1 = id.id;
      }
      return id === id1;
    });
  }
  hasCurrentUserSentWaveBlockingMessage(id) {
    id = UserStore.getCurrentUser();
    const messages = this.getMessages(id);
    return null != messages.findNewest((type) => {
      let tmp = type.type !== constants.FRIEND_REQUEST_ACCEPTED;
      if (tmp) {
        let id1;
        id = type.author.id;
        if (id != null) {
          id1 = id.id;
        }
        tmp = id === id1;
      }
      return tmp;
    });
  }
  hasCurrentUserSentMessageSinceAppStart() {
    return c29;
  }
}
const prototype = MessageStore.prototype;
MessageStore.displayName = "MessageStore";
obj = {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function handleBackgroundSyncChannelMessages(changesByChannelId) {
    changesByChannelId = changesByChannelId.changesByChannelId;
    for (const key10012 in changesByChannelId) {
      obj = ChannelMessagesDefault;
      let value = obj.get(key10012);
      if (null == value) {
        continue;
      } else {
        let _default = GatewayConnectionStore.default;
        let isConnectedResult = _default.isConnected();
        if (!value.cached) {
          if (isConnectedResult) {
            let _HermesInternal = HermesInternal;
            let str = "Skipping background message sync for ";
            let str2 = " cached:";
            let str3 = " ready:";
            let str4 = " hasMoreAfter:";
            let str5 = " isConnected:";
            let logResult = logger.log("Skipping background message sync for " + key10012 + " cached:" + value.cached + " ready:" + value.ready + " hasMoreAfter:" + value.hasMoreAfter + " isConnected:" + isConnectedResult);
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
    obj = SnowflakeUtilsDefault;
    const entries = obj.entries(messages.messages);
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp7] = tmp5;
      let obj2 = ChannelMessagesDefault;
      let orCreate = obj2.getOrCreate(tmp6);
      let addCachedMessagesResult = orCreate.addCachedMessages(tmp7, true);
      let obj4 = ChannelMessagesDefault;
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
    let requestStartTime;
    let truncate;
    ({ channelId, isBefore, isAfter, messages } = arg0);
    ({ jump, hasMoreBefore, hasMoreAfter, isStale, truncate, avoidInitialScroll, requestStartTime } = arg0);
    obj = ChannelMessagesDefault;
    const orCreate = obj.getOrCreate(channelId);
    const complete = orCreate.loadComplete({ newMessages: messages, isBefore, isAfter, jump, hasMoreBefore, hasMoreAfter, cached: isStale, hasFetched: true, avoidInitialScroll, requestStartTime });
    let tmp3 = null == truncate;
    if (!tmp3) {
      tmp3 = !isBefore && !isAfter;
    }
    if (!tmp3) {
      tmp3 = isBefore && isAfter;
    }
    let truncateResult = complete;
    if (!tmp3) {
      truncateResult = complete.truncate(isBefore, isAfter);
    }
    const tmp7 = reinjectEphemerals(channelId, truncateResult);
    const tmpResult = ChannelMessagesDefault;
    tmpResult.commit(tmp7);
    for (const item10038 of messages) {
      let tmp10 = receiveMediaMentionMessage(item10038);
      continue;
    }
  },
  LOAD_MESSAGES_FAILURE: function handleLoadMessagesFailure(channelId) {
    channelId = channelId.channelId;
    obj = ChannelMessagesDefault;
    const orCreate = obj.getOrCreate(channelId);
    const obj3 = ChannelMessagesDefault;
    obj3.commit(orCreate.mutate({ loadingMore: false, error: true }));
  },
  LOAD_MESSAGES_SUCCESS_CACHED: function handleLoadMessagesSuccessCached(truncate) {
    let after;
    let before;
    let channelId;
    let focus;
    let found;
    let jump;
    let jumpToPresentResult;
    let limit;
    ({ channelId, jump, focus, before, after, limit } = truncate);
    truncate = truncate.truncate;
    let tmp2 = found;
    obj = require("ChannelMessages");
    const orCreate = obj.getOrCreate(channelId);
    let present;
    const tmp = importDefault;
    if (jump != null) {
      present = jump.present;
    }
    if (present) {
      jumpToPresentResult = orCreate.jumpToPresent(limit);
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
          const obj2 = { messageId: null, flash: null, offset: null, returnTargetId: null, jumpType: null, onJumpComplete: null };
          ({ messageId: obj4.messageId, flash: obj4.flash, offset: obj4.offset, returnMessageId: obj4.returnTargetId, jumpType: obj4.jumpType, onJumpComplete: obj4.onJumpComplete } = jump);
          jumpToPresentResult = orCreate.jumpToMessage(obj2);
        } else {
          jumpToPresentResult = orCreate;
          const tmp6 = null == before && null == after;
          if (!tmp6) {
            jumpToPresentResult = orCreate.loadFromCache(null != before, limit);
          }
        }
      }
    }
    let tmp7 = null == truncate;
    if (!tmp7) {
      tmp7 = null == before && null == after;
    }
    if (!tmp7) {
      tmp7 = null != before && null != after;
    }
    let truncateResult = jumpToPresentResult;
    if (!tmp7) {
      truncateResult = jumpToPresentResult.truncate(null != before, null != after);
    }
    require = truncateResult;
    let tmp10 = truncateResult;
    if (!truncateResult.hasMoreAfter) {
      const messages = EphemeralMessageStore.getMessages(channelId);
      tmp10 = truncateResult;
      if (0 !== messages.length) {
        let firstResult = null;
        if (truncateResult.hasMoreBefore) {
          firstResult = truncateResult.first();
        }
        importDefault = firstResult;
        found = messages.filter((id) => {
          const hasItem = require.has(id.id);
          let tmp2 = !hasItem;
          if (tmp2) {
            let tmp5 = null == importDefault;
            if (!tmp5) {
              obj = SnowflakeUtilsDefault;
              tmp5 = obj.compare(id.id, tmp3.id) > 0;
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
            const sorted = _array.sort((id, id2) => {
              obj = closure_1_1(found[18]);
              return obj.compare(id.id, id2.id);
            });
          }, true);
        }
        tmp10 = mutation;
      }
    }
    const tmpResult = tmp(tmp2[19]);
    tmpResult.commit(tmp10);
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(channelId) {
    obj = ChannelMessagesDefault;
    const orCreate = obj.getOrCreate(channelId.channelId);
    const addCachedMessagesResult = orCreate.addCachedMessages(channelId.messages, channelId.stale);
    const isForegroundCacheLoad = channelId.isForegroundCacheLoad && channelId.messages.length > 0 && null == addCachedMessagesResult.jumpTargetId;
    let mutation = addCachedMessagesResult;
    if (isForegroundCacheLoad) {
      const obj2 = { initialScrollSequenceId: addCachedMessagesResult.initialScrollSequenceId + 1, suppressRowAnimationSequenceId: addCachedMessagesResult.suppressRowAnimationSequenceId + 1 };
      mutation = addCachedMessagesResult.mutate(obj2);
    }
    const tmpResult = ChannelMessagesDefault;
    tmpResult.commit(mutation);
  },
  LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function handleLoadMessageInteractionDataSuccess(messageId) {
    let closure_0 = messageId;
    messageId = messageId.messageId;
    const channelId = messageId.channelId;
    obj = ChannelMessagesDefault;
    const value = obj.get(channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(messageId, (set) => set.set("interactionData", interactionData.interactionData));
        const tmpResult = ChannelMessagesDefault;
        tmpResult.commit(updateResult);
      }
    }
    return false;
  },
  TRUNCATE_MESSAGES: function handleTruncateMessages(arg0) {
    let channelId;
    let truncateBottom;
    let truncateTop;
    ({ channelId, truncateBottom, truncateTop } = arg0);
    logger.log("Truncating messages for " + channelId + " bottom:" + truncateBottom + " top:" + truncateTop);
    obj = ChannelMessagesDefault;
    const orCreate = obj.getOrCreate(channelId);
    const truncateResult = orCreate.truncate(truncateBottom, truncateTop);
    const obj3 = ChannelMessagesDefault;
    obj3.commit(truncateResult);
  },
  CLEAR_MESSAGES: function handleClearMessages(channelId) {
    channelId = channelId.channelId;
    logger.log("Clearing messages for " + channelId);
    obj = ChannelMessagesDefault;
    obj.clear(channelId);
    set.clear();
  },
  MESSAGE_CREATE: function handleIncomingMessage(isPushNotification) {
    let channelId;
    let message;
    let optimistic;
    let ready;
    function addPushNotificationMessageIfNotCached() {
      return obj(...arguments);
    }
    ({ channelId, message, optimistic } = isPushNotification);
    isPushNotification = isPushNotification.isPushNotification;
    obj = ChannelMessagesDefault;
    const orCreate = obj.getOrCreate(channelId);
    const _default = GatewayConnectionStore.default;
    const isConnectedResult = _default.isConnected();
    if (isPushNotification) {
      const tmp3Result = IOSPushNotificationRawPayloadFixExperiment;
      if (tmp3Result.isIOSPushNotificationRawPayloadFixExperimentEnabled()) {
        addPushNotificationMessageIfNotCached(channelId, message, isConnectedResult);
      } else {
        logger.log("Inserting message tapped on from a push notification", message.id, message.channel_id);
        const tmpResult = ChannelMessagesDefault;
        tmpResult.commit(orCreate.receivePushNotification(message, isConnectedResult));
      }
      ready = flag2;
    } else {
      ready = orCreate.ready;
      if (ready) {
        let tmp6 = !optimistic;
        if (optimistic) {
          tmp6 = !orCreate.has(message.id);
        }
        if (tmp6) {
          const hasItem = null != message.nonce && message.state !== constants5.SENDING && set.has(message.nonce);
          let removeResult = orCreate;
          if (hasItem) {
            removeResult = orCreate.remove(message.nonce);
            set.delete(message.nonce);
          }
          const receiveMessageResult = removeResult.receiveMessage(message, true === DimensionStore.isAtBottom(channelId));
          const tmpResult2 = ChannelMessagesDefault;
          tmpResult2.commit(receiveMessageResult);
          receiveMediaMentionMessage(message);
        }
        ready = tmp6;
      }
    }
    return ready;
  },
  MESSAGE_SEND_FAILED: function handleSendFailed(channelId) {
    let messageId;
    ({ messageId, reason: require } = channelId);
    channelId = channelId.channelId;
    obj = ChannelMessagesDefault;
    const orCreate = obj.getOrCreate(channelId);
    if (null != orCreate) {
      if (orCreate.has(messageId)) {
        let removeResult;
        const value = orCreate.get(messageId, true);
        let isPollResult;
        if (value != null) {
          isPollResult = value.isPoll();
        }
        if (true === isPollResult) {
          removeResult = orCreate.remove(messageId);
        } else {
          removeResult = orCreate.update(messageId, (set) => {
            let set3Result;
            const result = set.set("state", constants2.SEND_FAILED);
            if (result.isCommandType()) {
              let str3 = require;
              set2 = result.set;
              if (require == null) {
                str3 = "";
              }
              const set2Result = set2("interactionError", str3);
              set3 = set2Result.set;
              const obj2 = FlagUtils;
              set3Result = set3("flags", obj2.addFlag(set2Result.flags, constants.EPHEMERAL));
            } else {
              let str = require;
              set3Result = result;
              if (null != require) {
                if (str == null) {
                  str = "";
                }
                set3Result = set("interactionError", str);
              }
            }
            return set3Result;
          });
        }
        const tmpResult = ChannelMessagesDefault;
        tmpResult.commit(removeResult);
      }
    }
    return false;
  },
  MESSAGE_SEND_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  AUTO_MODERATION_CONTENT_DELETED: function handleAutomodContentDeleted(message) {
    message = message.message;
    if (null != message) {
      if (null == message.thread) {
        const channel_id = message.channel_id;
        const obj4 = ChannelMessagesDefault;
        const orCreate = obj4.getOrCreate(channel_id);
        let ready = orCreate.ready;
        if (ready) {
          const hasItem = orCreate.has(message.id);
          let tmp3 = !hasItem;
          obj = orCreate;
          if (!hasItem) {
            const receiveMessageResult = orCreate.receiveMessage(message, true === DimensionStore.isAtBottom(channel_id));
            tmp3 = !receiveMessageResult.has(message.id);
            obj = receiveMessageResult;
          }
          if (!tmp3) {
            const updateResult = obj.update(message.id, (set) => {
              obj = FlagUtils;
              return set.set("flags", obj.addFlag(set.set.flags, constants.EPHEMERAL));
            });
            const tmp11Result = ChannelMessagesDefault;
            tmp11Result.commit(updateResult);
            const result = map.set(message.id, tmp);
          }
          ready = tmp5;
        }
        return ready;
      }
    }
    return false;
  },
  MESSAGE_EDIT_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    const channel_id = message.message.channel_id;
    obj = ChannelMessagesDefault;
    const orCreate = obj.getOrCreate(channel_id);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        const updateResult = orCreate.update(id, (message) => {
          obj = MessageRecordUtils;
          return obj.updateMessageRecord(message, message.message);
        });
        const tmpResult = ChannelMessagesDefault;
        tmpResult.commit(updateResult);
        message = message.message;
        const media_mention = message.media_mention;
        let message_id;
        if (media_mention != null) {
          message_id = media_mention.message_id;
        }
        if (null != message_id) {
          if ("content" in message) {
            const attachment_id = message.media_mention.attachment_id;
            const tmpResult3 = ChannelMessagesDefault;
            const orCreate1 = tmpResult3.getOrCreate(attachment_id);
            const updateResult1 = orCreate1.update(message.media_mention.message_id, (message) => {
              obj = message(dependencyMap[23]);
              const obj2 = { content: message.content };
              return obj.updateMessageRecord(message, obj2);
            });
            const tmpResult4 = ChannelMessagesDefault;
            tmpResult4.commit(updateResult1);
          }
        }
      }
    }
    return false;
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleMessageExplicitContentScanTimeout(messageId) {
    messageId = messageId.messageId;
    const channelId = messageId.channelId;
    obj = ChannelMessagesDefault;
    const value = obj.get(channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(messageId, ExplicitMediaRedactionUtils.handleExplicitMediaScanTimeoutForMessage);
        const tmpResult = ChannelMessagesDefault;
        tmpResult.commit(updateResult);
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    let channelId;
    let local;
    id = id.id;
    ({ channelId, local } = id);
    obj = ChannelMessagesDefault;
    const orCreate = obj.getOrCreate(channelId);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        if (map.has(id)) {
          if (true !== local) {
            return false;
          } else {
            map.delete(id);
          }
        }
        let obj4 = orCreate;
        if (orCreate.revealedMessageId === id) {
          const after = orCreate.getAfter(id);
          if (null != after) {
            let mutation;
            if (after.blocked) {
              const obj2 = { revealedMessageId: after.id };
              mutation = orCreate.mutate(obj2);
            }
            obj4 = mutation;
          }
          mutation = orCreate.mutate({ revealedMessageId: null });
        }
        const value = obj4.get(id);
        if (null != value) {
          const mediaMention = value.mediaMention;
          let attachment_id;
          if (mediaMention != null) {
            attachment_id = mediaMention.attachment_id;
          }
          if (null != attachment_id) {
            const tmpResult = ChannelMessagesDefault;
            const value2 = tmpResult.get(attachment_id);
            if (null != value2) {
              const mediaMention2 = value.mediaMention;
              let message_id;
              if (mediaMention2 != null) {
                message_id = mediaMention2.message_id;
              }
              if (null != message_id) {
                const removeResult = value2.remove(message_id);
                const tmpResult3 = ChannelMessagesDefault;
                tmpResult3.commit(removeResult);
              }
            }
          }
        }
        const removeResult1 = obj4.remove(id);
        const tmpResult4 = ChannelMessagesDefault;
        tmpResult4.commit(removeResult1);
        set.delete(id);
      }
    }
    return false;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    ids = ids.ids;
    let mutation;
    const channelId = ids.channelId;
    obj = mutation(5438);
    const orCreate = obj.getOrCreate(channelId);
    if (null == orCreate) {
      return false;
    } else {
      const item = ids.forEach((item) => {
        const value = orCreate.get(item);
        if (null != value) {
          const mediaMention = value.mediaMention;
          let attachment_id;
          if (mediaMention != null) {
            attachment_id = mediaMention.attachment_id;
          }
          if (null != attachment_id) {
            obj = ChannelMessagesDefault;
            const value2 = obj.get(attachment_id);
            if (null != value2) {
              const mediaMention2 = value.mediaMention;
              let message_id;
              if (mediaMention2 != null) {
                message_id = mediaMention2.message_id;
              }
              if (null != message_id) {
                const removeResult = value2.remove(message_id);
                const tmp3Result = ChannelMessagesDefault;
                tmp3Result.commit(removeResult);
              }
            }
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
          tmp3 = removeManyResult;
          const tmpResult = mutation(12);
          if (tmpResult.some(ids, (arg0) => mutation.revealedMessageId === arg0)) {
            const after = removeManyResult.getAfter(removeManyResult.revealedMessageId);
            if (null != after) {
              if (after.blocked) {
                const obj2 = { revealedMessageId: after.id };
                mutation = removeManyResult.mutate(obj2);
              }
              tmp3 = mutation;
            }
            mutation = removeManyResult.mutate({ revealedMessageId: null });
          }
        }
        const tmpResult2 = mutation(5438);
        tmpResult2.commit(tmp3);
        const item1 = ids.forEach((item) => {
          set.delete(item);
        });
      }
    }
  },
  MESSAGE_REVEAL: function handleMessageReveal(arg0) {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    obj = ChannelMessagesDefault;
    const orCreate = obj.getOrCreate(channelId);
    const obj3 = ChannelMessagesDefault;
    obj3.commit(orCreate.mutate({ revealedMessageId: messageId }));
  },
  THREAD_CREATE_LOCAL: function handleThreadCreateLocal(channelId) {
    channelId = channelId.channelId;
    obj = ChannelMessagesDefault;
    const orCreate = obj.getOrCreate(channelId);
    const complete = orCreate.loadComplete({ newMessages: [], hasMoreAfter: false, hasMoreBefore: false });
    const obj3 = ChannelMessagesDefault;
    obj3.commit(complete);
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    let flag = false;
    obj = _modDef12;
    const uniqResult = obj.uniq(channels.map((guild_id) => guild_id.guild_id));
    const tmp2 = uniqResult[Symbol.iterator]();
    while (tmp2 !== undefined) {
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
    const id = user.user.id;
    const currentUser = UserStore.getCurrentUser();
    let id1;
    if (currentUser != null) {
      id1 = currentUser.id;
    }
    let tmp3 = id === id1;
    if (tmp3) {
      const guildId = user.guildId;
      importDefault = false;
      const arr = ChannelMessagesDefault;
      const item = arr.forEach((cached) => {
        if (!cached.cached) {
          const basicChannel = ChannelStore.getBasicChannel(cached.channelId);
          let guild_id;
          if (basicChannel != null) {
            guild_id = basicChannel.guild_id;
          }
          if (guild_id === guildId) {
            if (!PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel)) {
              obj = ChannelMessagesDefault;
              obj.commit(cached.mutate({ cached: true }));
              c1 = true;
            }
          }
        }
      });
      tmp3 = importDefault;
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
    const tmp = arg0.chunks[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = performAuthorUpdate(tmp2.guildId);
      continue;
    }
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(guildId) {
    guildId = guildId.guildId;
    const arr = ChannelMessagesDefault;
    let item = arr.forEach((channelId) => {
      const channel = ChannelStore.getChannel(channelId.channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (guild_id === guildId) {
        const items = [];
        let c1 = false;
        const item = channelId.forEach((nick) => {
          let colorString;
          obj = guildId(closure_2_2[27]);
          const messageAuthor = obj.getMessageAuthor(nick);
          ({ nick, colorString } = messageAuthor);
          if (nick === nick.nick) {
            if (colorString === nick.colorString) {
              items.push(nick);
            }
          }
          c1 = true;
          items.push(nick.merge({ nick, colorString }));
        });
        const tmp4 = c1;
        if (tmp4) {
          obj = ChannelMessagesDefault;
          obj.commit(channelId.reset(items));
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
    obj = ChannelMessagesDefault;
    const value = obj.get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (addReactionBatch) => {
        addReactionBatch = addReactionBatch.addReactionBatch;
        const currentUser = UserStore.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return addReactionBatch(reactions, id);
      });
      const tmpResult = ChannelMessagesDefault;
      tmpResult.commit(updateResult);
    }
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(arg0) {
    let channelId;
    let messageId;
    ({ channelId, messageId } = arg0);
    obj = ChannelMessagesDefault;
    const value = obj.get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (set) => set.set("reactions", []));
      const tmpResult = ChannelMessagesDefault;
      tmpResult.commit(updateResult);
    }
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(emoji) {
    let channelId;
    let messageId;
    emoji = emoji.emoji;
    ({ channelId, messageId } = emoji);
    obj = ChannelMessagesDefault;
    const value = obj.get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (removeReactionsForEmoji) => removeReactionsForEmoji.removeReactionsForEmoji(emoji));
      const tmpResult = ChannelMessagesDefault;
      tmpResult.commit(updateResult);
    }
  },
  LOGOUT: function handleLogout() {
    const arr = ChannelMessagesDefault;
    const item = arr.forEach((channelId) => {
      obj = ChannelMessagesDefault;
      obj.clear(channelId.channelId);
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
    } else if (set.has(messageId)) {
      obj = ChannelMessagesDefault;
      const orCreate = obj.getOrCreate(tmp);
      const value = orCreate.get(messageId);
      if (null == value) {
        return false;
      } else {
        const items = [value];
        const removeResult = orCreate.remove(messageId);
        const mergeResult = removeResult.merge(items);
        set.delete(messageId);
        const tmp2Result = ChannelMessagesDefault;
        tmp2Result.commit(mergeResult);
      }
    } else {
      return false;
    }
  },
  LOCAL_MESSAGE_CREATE: function handleLocalIncomingMesssage(message) {
    message = message.message;
    const currentUser = UserStore.getCurrentUser();
    const tmp2 = null != message && null != message.author && null != currentUser && message.author.id === currentUser.id;
    if (tmp2) {
      c29 = true;
    }
  }
};
const messageStore = new MessageStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/MessageStore.tsx");

export default messageStore;
// discord_app/stores/MessageStore.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import FlagUtils from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import Server from "../flow/Server.tsx";
import DatabaseDaosDefault from "../modules/app_database/DatabaseDaos.tsx";
import ReactionUtils from "../modules/reactions/ReactionUtils.tsx";
import MessageRecordUtils from "../modules/messages/MessageRecordUtils.tsx";
import ChannelMessagesDefault from "../lib/ChannelMessages.tsx";
import IOSPushNotificationRawPayloadFixExperiment from "../modules/notifications/IOSPushNotificationRawPayloadFixExperiment.tsx";
import GatewayConnectionStore from "../modules/gateway/GatewayConnectionStore.tsx";
import ExplicitMediaRedactionUtils from "../modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import MessageQueue from "../lib/MessageQueue.tsx";
import canEditMessageDefault from "../modules/messages/canEditMessage.tsx";
import GuildAutomodMessageStoreUtils from "../modules/guild_automod/GuildAutomodMessageStoreUtils.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import ImpersonateStore from "../modules/impersonate/ImpersonateStore.tsx";
import EphemeralMessageStore from "../modules/messages/EphemeralMessageStore.tsx";
import LocaleStore from "../modules/user_settings/LocaleStore.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import DimensionStore from "DimensionStore.tsx";
import GuildChannelStore from "GuildChannelStore.tsx";
import GuildMemberStore from "GuildMemberStore.tsx";
import GuildStore from "GuildStore.tsx";
import PermissionStore from "PermissionStore.tsx";
import RelationshipStore from "RelationshipStore.tsx";
import SelectedChannelStore from "SelectedChannelStore.tsx";
import SelectedGuildStore from "SelectedGuildStore.tsx";
import UserStore from "UserStore.tsx";

require = fn;
function reinjectEphemerals(channelId, truncateResult) {
  closure_0 = truncateResult;
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
        const hasItem = truncateResult.has(id.id);
        let tmp2 = !hasItem;
        if (!hasItem) {
          let tmp5 = null == firstResult;
          if (!tmp5) {
            tmp5 = SnowflakeUtilsDefault.compare(id.id, tmp3.id) > 0;
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
          const sorted = _array.sort((id, id2) => closure_1_1(found[18]).compare(id.id, id2.id));
        }, true);
      }
      return mutation;
    }
  }
}
function handleConnectionOpen() {
  const item = ChannelMessagesDefault.forEach((mutate) => {
    ChannelMessagesDefault.commit(mutate.mutate({ ready: false, loadingMore: false }));
  });
  set.clear();
}
let closure_30 = async function _addPushNotificationMessageIfNotCached(arg0, arg1, arg2) {
  closure_0 = arg0;
  let id = arg1;
  closure_2 = arg2;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value, arg2) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp28;
            closure_131_0 = closure_0;
            closure_131_1 = id;
            closure_131_2 = closure_2;
            let orCreate;
            const databaseResult = DatabaseDaosDefault.database();
            basicChannel = basicChannel.getBasicChannel(closure_0);
            if (null != databaseResult) {
              if (null != basicChannel) {
                c5 = 1;
                c6 = 2;
                c7 = 1;
                let obj1 = {
                  value: DatabaseDaosDefault.messages(databaseResult).get(basicChannel.guild_id, closure_0, id.id),
                  done: false,
                };
                return obj1;
              }
            }
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else if (null == value) {
            c5 = 0;
          }
          c5 = 0;
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
        closure_132_27.log(
          "Push notification message not in cache, adding directly",
          closure_131_1.id,
          closure_131_1.channel_id,
        );
        obj1 = closure_132_1(closure_132_2[19]);
        orCreate = obj1.getOrCreate(closure_131_0);
        closure_132_1(closure_132_2[19]).commit(orCreate.receivePushNotification(closure_131_1, closure_131_2));
        closure_132_34.emitChange();
        c7 = 3;
        const obj3 = closure_132_1(closure_132_2[19]);
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
};
function receiveMediaMentionMessage(item10037) {
  const media_mention = item10037.media_mention;
  let message_id;
  if (media_mention != null) {
    message_id = media_mention.message_id;
  }
  if (null != message_id) {
    const attachment_id = item10037.media_mention.attachment_id;
    const orCreate = ChannelMessagesDefault.getOrCreate(attachment_id);
    let obj = {};
    const merged = Object.assign(item10037);
    obj.channel_id = attachment_id;
    obj.type = constants6.MEDIA_MENTION_MESSAGE;
    obj.id = item10037.media_mention.message_id;
    obj = {
      channel_id: item10037.channel_id,
      message_id: item10037.media_mention.message_id,
      type: constants4.DEFAULT,
      guild_id: null,
    };
    const channel = ChannelStore.getChannel(item10037.channel_id);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj.guild_id = guild_id;
    obj.message_reference = obj;
    const mutation = orCreate.receiveMessage(obj, false).mutate({ ready: true });
    const receiveMessageResult = orCreate.receiveMessage(obj, false);
    ChannelMessagesDefault.commit(mutation);
    const tmp5Result = ChannelMessagesDefault;
  }
}
function invalidateInaccessibleMessages(arg0) {
  closure_0 = arg0;
  importDefault = false;
  const item = ChannelMessagesDefault.forEach((cached) => {
    if (!cached.cached) {
      const basicChannel = ChannelStore.getBasicChannel(cached.channelId);
      let guild_id;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      if (guild_id === guildId) {
        if (!PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel)) {
          ChannelMessagesDefault.commit(cached.mutate({ cached: true }));
          c1 = true;
        }
      }
    }
  });
  return importDefault;
}
function handleRoleUpdate(guildId) {
  guildId = guildId.guildId;
  importDefault = false;
  const item = ChannelMessagesDefault.forEach((cached) => {
    if (!cached.cached) {
      const basicChannel = ChannelStore.getBasicChannel(cached.channelId);
      let guild_id;
      if (basicChannel != null) {
        guild_id = basicChannel.guild_id;
      }
      if (guild_id === guildId) {
        if (!PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel)) {
          ChannelMessagesDefault.commit(cached.mutate({ cached: true }));
          c1 = true;
        }
      }
    }
  });
  return importDefault;
}
function handleCleanup() {
  const item = ChannelMessagesDefault.forEach((channelId) => {
    channelId = channelId.channelId;
    if (null == channel.getChannel(channelId)) {
      ChannelMessagesDefault.clear(channelId);
    }
  });
}
function handleRelationshipUpdate() {
  c0 = false;
  const item = ChannelMessagesDefault.forEach((reset) => {
    ChannelMessagesDefault.commit(
      reset.reset(
        reset.map((blocked) => {
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
        }),
      ),
    );
  });
  return c0;
}
function performAuthorUpdate(guildId) {
  closure_0 = guildId;
  const item = ChannelMessagesDefault.forEach((channelId) => {
    const channel = ChannelStore.getChannel(channelId.channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    if (guild_id === guildId) {
      const items = [];
      c1 = false;
      const item = channelId.forEach((nick) => {
        const messageAuthor = guildId(dependencyMap[27]).getMessageAuthor(nick);
        ({ nick, colorString } = messageAuthor);
        if (nick === nick.nick) {
          if (colorString === nick.colorString) {
            items.push(nick);
          }
        }
        c1 = true;
        items.push(nick.merge({ nick, colorString }));
        const obj = guildId(dependencyMap[27]);
      });
      if (c1) {
        ChannelMessagesDefault.commit(channelId.reset(items));
      }
    }
  });
}
function handleReaction(optimistic) {
  ({ type: importDefault, channelId, emoji: dependencyMap, reactionType: _slicedToArray } = optimistic);
  ({ messageId, userId } = optimistic);
  value = ChannelMessagesDefault.get(channelId);
  if (null == value) {
    return false;
  } else {
    if (obj4.shouldApplyReaction(optimistic)) {
      const basicChannel = ChannelStore.getBasicChannel(channelId);
      let type;
      if (basicChannel != null) {
        type = basicChannel.type;
      }
      const isDMChannel = type === constants2.DM;
      closure_5 = AuthenticationStore.getId() === userId;
      const updateResult = value.update(messageId, (addReaction) => {
        if ("MESSAGE_REACTION_ADD" === importDefault) {
          const obj = { colors: optimistic.colors, reactionType, isDMChannel };
          let addReactionResult = addReaction.addReaction(dependencyMap, closure_5, obj);
        } else {
          addReactionResult = addReaction.removeReaction(dependencyMap, closure_5, reactionType);
        }
        return addReactionResult;
      });
      ChannelMessagesDefault.commit(updateResult);
      const tmpResult = ChannelMessagesDefault;
    } else {
      return false;
    }
    obj4 = ReactionUtils;
  }
}
function handleMessageSendFailedAutomod(arg0) {
  ({ type: require, messageData } = arg0);
  const failedMessageId = MessageQueue.getFailedMessageId(messageData);
  const orCreate = ChannelMessagesDefault.getOrCreate(messageData.message.channelId);
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
      if ("MESSAGE_SEND_FAILED_AUTOMOD" === closure_1_0) {
        result1 = result.set("flags", FlagUtils.addFlag(result.flags, constants3.EPHEMERAL));
      }
      return result1;
    });
    ChannelMessagesDefault.commit(updateResult);
    const tmp3Result = ChannelMessagesDefault;
  } else {
    return false;
  }
}
const Constants = fn(1074);
({
  BasicPermissions: closure_19,
  ChannelTypes: closure_20,
  MessageFlags: closure_21,
  MessageReferenceTypes: closure_22,
  MessageStates: closure_23,
  MessageTypes: closure_24,
  Permissions: closure_25,
} = Constants);
const set = new Set();
const logger = new LoggerDefault("MessageStore");
let c28 = false;
const Store = initializeDefault.Store;
class MessageStore extends Store {}
const prototype = MessageStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(
    AuthenticationStore,
    ChannelStore,
    DimensionStore,
    EphemeralMessageStore,
    GuildChannelStore,
    GuildMemberStore,
    GuildStore,
    ImpersonateStore,
    LocaleStore,
    PermissionStore,
    RelationshipStore,
    SelectedChannelStore,
    SelectedGuildStore,
    UserStore,
  );
  const items = [ImpersonateStore];
  this.syncWith(items, () => {});
};
prototype["getMessages"] = function getMessages(arg0) {
  if (ImpersonateStore.hasViewingRoles()) {
    const channel = ChannelStore.getChannel(arg0);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    if (ImpersonateStore.isViewingRoles(guildId)) {
      if (!PermissionStore.can(constants7.VIEW_CHANNEL, channel)) {
        const tmp11 = new ChannelMessagesDefault(arg0);
        return tmp11;
      }
    }
  }
  return ChannelMessagesDefault.getOrCreate(arg0);
};
prototype["getMessage"] = function getMessage(arg0, arg1) {
  const orCreate = ChannelMessagesDefault.getOrCreate(arg0);
  return orCreate.get(arg1);
};
prototype["getLastEditableMessage"] = function getLastEditableMessage(id) {
  id = UserStore.getCurrentUser();
  const messages = this.getMessages(id);
  const reversed = _modDef12(messages.toArray()).reverse();
  return reversed.find((item) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return canEditMessageDefault(item, id);
  });
};
prototype["getLastChatCommandMessage"] = function getLastChatCommandMessage(arg0) {
  let id = UserStore.getCurrentUser();
  const messages = this.getMessages(arg0);
  const reversed = messages.toArray().reverse();
  return reversed.find((interaction) => {
    interaction = interaction.interaction;
    let type;
    if (interaction != null) {
      type = interaction.type;
    }
    let tmp4 = type === Server.InteractionTypes.APPLICATION_COMMAND;
    if (tmp4) {
      const interactionData = interaction.interactionData;
      let type1;
      if (interactionData != null) {
        type1 = interactionData.type;
      }
      tmp4 = type1 === Server.ApplicationCommandType.CHAT;
    }
    if (tmp4) {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      tmp4 = interaction.interaction.user.id === id;
    }
    return tmp4;
  });
};
prototype["getLastMessage"] = function getLastMessage(channelId) {
  const messages = this.getMessages(channelId);
  const reversed = _modDef12(messages.toArray()).reverse();
  return reversed.get(0);
};
prototype["getLastNonCurrentUserMessage"] = function getLastNonCurrentUserMessage(arg0) {
  let id = UserStore.getCurrentUser();
  const messages = this.getMessages(arg0);
  const reversed = _modDef12(messages.toArray()).reverse();
  return reversed.find((author) => {
    id = undefined;
    if (id != null) {
      id = id.id;
    }
    return author.author.id !== id;
  });
};
prototype["jumpedMessageId"] = function jumpedMessageId(arg0) {
  value = ChannelMessagesDefault.get(arg0);
  let jumpTargetId;
  if (value != null) {
    jumpTargetId = value.jumpTargetId;
  }
  return jumpTargetId;
};
prototype["focusedMessageId"] = function focusedMessageId(arg0) {
  value = ChannelMessagesDefault.get(arg0);
  let focusTargetId;
  if (value != null) {
    focusTargetId = value.focusTargetId;
  }
  return focusTargetId;
};
prototype["hasPresent"] = function hasPresent(arg0) {
  value = ChannelMessagesDefault.get(arg0);
  return null != value && value.ready && value.hasPresent();
};
prototype["isReady"] = function isReady(arg0) {
  return ChannelMessagesDefault.getOrCreate(arg0).ready;
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
  return ChannelMessagesDefault.getOrCreate(channelId).loadingMore;
};
prototype["hasCurrentUserSentMessage"] = function hasCurrentUserSentMessage(arg0) {
  let id = UserStore.getCurrentUser();
  const messages = this.getMessages(arg0);
  return (
    null !=
    messages.findNewest((author) => {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return author.author.id === id;
    })
  );
};
prototype["hasCurrentUserSentWaveBlockingMessage"] = function hasCurrentUserSentWaveBlockingMessage(id) {
  id = UserStore.getCurrentUser();
  const messages = this.getMessages(id);
  return (
    null !=
    messages.findNewest((type) => {
      let tmp = type.type !== constants6.FRIEND_REQUEST_ACCEPTED;
      if (tmp) {
        id = undefined;
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
const messageStore = new MessageStore(DispatcherDefault, {
  BACKGROUND_SYNC_CHANNEL_MESSAGES: function handleBackgroundSyncChannelMessages(changesByChannelId) {
    changesByChannelId = changesByChannelId.changesByChannelId;
    for (const key10012 in changesByChannelId) {
      let obj = ChannelMessagesDefault;
      value = obj.get(key10012);
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
            let logResult = logger.log(
              "Skipping background message sync for " +
                key10012 +
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
    const entries = SnowflakeUtilsDefault.entries(messages.messages);
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
    tmp2 = entries[Symbol.iterator]();
  },
  LOAD_MESSAGES: function handleLoadMessages() {
    return true;
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(arg0) {
    ({ channelId, isBefore, isAfter, messages } = arg0);
    ({ jump, hasMoreBefore, hasMoreAfter, isStale, truncate, avoidInitialScroll } = arg0);
    const orCreate = ChannelMessagesDefault.getOrCreate(channelId);
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
    const tmp7 = reinjectEphemerals(channelId, truncateResult);
    ChannelMessagesDefault.commit(tmp7);
    for (const item10037 of messages) {
      let tmp10 = receiveMediaMentionMessage(item10037);
      continue;
    }
    const tmpResult = ChannelMessagesDefault;
  },
  LOAD_MESSAGES_FAILURE: function handleLoadMessagesFailure(channelId) {
    const orCreate = ChannelMessagesDefault.getOrCreate(channelId.channelId);
    ChannelMessagesDefault.commit(orCreate.mutate({ loadingMore: false, error: true }));
  },
  LOAD_MESSAGES_SUCCESS_CACHED: function handleLoadMessagesSuccessCached(truncate) {
    ({ channelId, jump, focus, before, after, limit } = truncate);
    let obj = require("ChannelMessages");
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
            messageId: obj4.messageId,
            flash: obj4.flash,
            offset: obj4.offset,
            returnMessageId: obj4.returnTargetId,
            jumpType: obj4.jumpType,
            onJumpComplete: obj4.onJumpComplete,
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
      const messages = EphemeralMessageStore.getMessages(channelId);
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
            let tmp5 = null == firstResult;
            if (!tmp5) {
              tmp5 = SnowflakeUtilsDefault.compare(id.id, tmp3.id) > 0;
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
            const sorted = _array.sort((id, id2) => closure_1_1(found[18]).compare(id.id, id2.id));
          }, true);
        }
        tmp10 = mutation;
      }
    }
    require("ChannelMessages").commit(tmp10);
    const tmpResult = require("ChannelMessages");
  },
  LOCAL_MESSAGES_LOADED: function handleLocalMessagesLoaded(channelId) {
    let obj = ChannelMessagesDefault;
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
      obj = {
        initialScrollSequenceId: addCachedMessagesResult.initialScrollSequenceId + 1,
        suppressRowAnimationSequenceId: addCachedMessagesResult.suppressRowAnimationSequenceId + 1,
      };
      mutation = addCachedMessagesResult.mutate(obj);
    }
    ChannelMessagesDefault.commit(mutation);
    const tmpResult = ChannelMessagesDefault;
  },
  LOAD_MESSAGE_INTERACTION_DATA_SUCCESS: function handleLoadMessageInteractionDataSuccess(messageId) {
    messageId = messageId.messageId;
    value = ChannelMessagesDefault.get(messageId.channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(messageId, (set) => set.set("interactionData", messageId.interactionData));
        ChannelMessagesDefault.commit(updateResult);
        const tmpResult = ChannelMessagesDefault;
      }
    }
    return false;
  },
  TRUNCATE_MESSAGES: function handleTruncateMessages(arg0) {
    ({ channelId, truncateBottom, truncateTop } = arg0);
    logger.log("Truncating messages for " + channelId + " bottom:" + truncateBottom + " top:" + truncateTop);
    const orCreate = ChannelMessagesDefault.getOrCreate(channelId);
    const truncateResult = orCreate.truncate(truncateBottom, truncateTop);
    ChannelMessagesDefault.commit(truncateResult);
  },
  CLEAR_MESSAGES: function handleClearMessages(channelId) {
    channelId = channelId.channelId;
    logger.log("Clearing messages for " + channelId);
    ChannelMessagesDefault.clear(channelId);
    set.clear();
  },
  MESSAGE_CREATE: function handleIncomingMessage(isPushNotification) {
    ({ channelId, message, optimistic } = isPushNotification);
    const orCreate = ChannelMessagesDefault.getOrCreate(channelId);
    const isConnectedResult = GatewayConnectionStore.default.isConnected();
    if (isPushNotification.isPushNotification) {
      if (tmp3Result.isIOSPushNotificationRawPayloadFixExperimentEnabled()) {
        (function addPushNotificationMessageIfNotCached() {
          const self = this;
          const apply = closure_1_30.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(channelId, message, isConnectedResult);
      } else {
        logger.log("Inserting message tapped on from a push notification", message.id, message.channel_id);
        let tmpResult = ChannelMessagesDefault;
        tmpResult.commit(orCreate.receivePushNotification(message, isConnectedResult));
      }
      tmp3Result = IOSPushNotificationRawPayloadFixExperiment;
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
            hasItem = message.state !== constants5.SENDING;
          }
          if (hasItem) {
            hasItem = set.has(message.nonce);
          }
          let removeResult = orCreate;
          if (hasItem) {
            removeResult = orCreate.remove(message.nonce);
            set.delete(message.nonce);
          }
          tmpResult = ChannelMessagesDefault;
          tmpResult.commit(removeResult.receiveMessage(message, true === DimensionStore.isAtBottom(channelId)));
          receiveMediaMentionMessage(message);
          const receiveMessageResult = removeResult.receiveMessage(
            message,
            true === DimensionStore.isAtBottom(channelId),
          );
        }
        ready = tmp6;
      }
      return ready;
    }
    const _default = GatewayConnectionStore.default;
  },
  MESSAGE_SEND_FAILED: function handleSendFailed(channelId) {
    ({ messageId, reason: require } = channelId);
    const orCreate = ChannelMessagesDefault.getOrCreate(channelId.channelId);
    if (null != orCreate) {
      if (orCreate.has(messageId)) {
        value = orCreate.get(messageId, true);
        let isPollResult;
        if (value != null) {
          isPollResult = value.isPoll();
        }
        if (true === isPollResult) {
          let removeResult = orCreate.remove(messageId);
        } else {
          removeResult = orCreate.update(messageId, (set) => {
            const result = set.set("state", constants5.SEND_FAILED);
            if (result.isCommandType()) {
              let str3 = closure_1_0;
              if (closure_1_0 == null) {
                str3 = "";
              }
              const result1 = result.set("interactionError", str3);
              let result2 = result1.set("flags", FlagUtils.addFlag(result1.flags, constants3.EPHEMERAL));
            } else {
              let str = closure_1_0;
              result2 = result;
              if (null != closure_1_0) {
                if (str == null) {
                  str = "";
                }
                result2 = result.set("interactionError", str);
              }
            }
            return result2;
          });
        }
        ChannelMessagesDefault.commit(removeResult);
        const tmpResult = ChannelMessagesDefault;
      }
    }
    return false;
  },
  MESSAGE_SEND_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_EDIT_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    const orCreate = ChannelMessagesDefault.getOrCreate(message.message.channel_id);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        let tmpResult = ChannelMessagesDefault;
        tmpResult.commit(
          orCreate.update(id, (message) => MessageRecordUtils.updateMessageRecord(message, message.message)),
        );
        message = message.message;
        closure_129_0 = message;
        const media_mention = message.media_mention;
        let message_id;
        if (media_mention != null) {
          message_id = media_mention.message_id;
        }
        if (null != message_id) {
          if ("content" in message) {
            tmpResult = ChannelMessagesDefault;
            const orCreate1 = tmpResult.getOrCreate(message.media_mention.attachment_id);
            const updateResult1 = orCreate1.update(message.media_mention.message_id, (message) => {
              const obj = { content: message.content };
              return obj.updateMessageRecord(message, obj);
            });
            ChannelMessagesDefault.commit(updateResult1);
            const tmpResult1 = ChannelMessagesDefault;
          }
        }
        const updateResult = orCreate.update(id, (message) =>
          MessageRecordUtils.updateMessageRecord(message, message.message),
        );
      }
    }
    return false;
  },
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleMessageExplicitContentScanTimeout(messageId) {
    messageId = messageId.messageId;
    value = ChannelMessagesDefault.get(messageId.channelId);
    if (null != value) {
      if (value.has(messageId)) {
        const updateResult = value.update(
          messageId,
          ExplicitMediaRedactionUtils.handleExplicitMediaScanTimeoutForMessage,
        );
        ChannelMessagesDefault.commit(updateResult);
        const tmpResult = ChannelMessagesDefault;
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    let obj = ChannelMessagesDefault;
    const orCreate = obj.getOrCreate(id.channelId);
    if (null != orCreate) {
      if (orCreate.has(id)) {
        if (orCreate.revealedMessageId !== id) {
          value = orCreate.get(id);
          if (null != value) {
            const mediaMention = value.mediaMention;
            let attachment_id;
            if (mediaMention != null) {
              attachment_id = mediaMention.attachment_id;
            }
            if (null != attachment_id) {
              let tmpResult = ChannelMessagesDefault;
              value = tmpResult.get(attachment_id);
              if (null != value) {
                const mediaMention2 = value.mediaMention;
                let message_id;
                if (mediaMention2 != null) {
                  message_id = mediaMention2.message_id;
                }
                if (null != message_id) {
                  tmpResult = ChannelMessagesDefault;
                  tmpResult.commit(value.remove(message_id));
                  const removeResult = value.remove(message_id);
                }
              }
            }
          }
          const removeResult1 = orCreate.remove(id);
          ChannelMessagesDefault.commit(removeResult1);
          set.delete(id);
          const tmpResult1 = ChannelMessagesDefault;
        } else {
          let id2 = orCreate.getAfter(id);
          if (null == id2) {
            let mutation = orCreate.mutate({ revealedMessageId: null });
          }
          obj = { revealedMessageId: null };
          id2 = id2.id;
          obj.revealedMessageId = id2;
          mutation = orCreate.mutate(obj);
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    ids = ids.ids;
    let mutation;
    let obj = mutation(5272);
    const orCreate = obj.getOrCreate(ids.channelId);
    if (null == orCreate) {
      return false;
    } else {
      const item = ids.forEach((item) => {
        value = orCreate.get(item);
        if (null != value) {
          const mediaMention = value.mediaMention;
          let attachment_id;
          if (mediaMention != null) {
            attachment_id = mediaMention.attachment_id;
          }
          if (null != attachment_id) {
            value = ChannelMessagesDefault.get(attachment_id);
            if (null != value) {
              const mediaMention2 = value.mediaMention;
              let message_id;
              if (mediaMention2 != null) {
                message_id = mediaMention2.message_id;
              }
              if (null != message_id) {
                const removeResult = value.remove(message_id);
                ChannelMessagesDefault.commit(removeResult);
                const tmp3Result = ChannelMessagesDefault;
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
          let tmpResult = tmp(12);
          tmp3 = removeManyResult;
          if (tmpResult.some(ids, (arg0) => mutation.revealedMessageId === arg0)) {
            let id = removeManyResult.getAfter(removeManyResult.revealedMessageId);
            if (null == id) {
              mutation = removeManyResult.mutate({ revealedMessageId: null });
            }
            obj = { revealedMessageId: null };
            id = id.id;
            obj.revealedMessageId = id;
            mutation = removeManyResult.mutate(obj);
          }
        }
        tmpResult = tmp(5272);
        tmpResult.commit(tmp3);
        const item1 = ids.forEach((item) => {
          set.delete(item);
        });
      }
    }
  },
  MESSAGE_REVEAL: function handleMessageReveal(arg0) {
    ({ channelId, messageId } = arg0);
    const orCreate = ChannelMessagesDefault.getOrCreate(channelId);
    ChannelMessagesDefault.commit(orCreate.mutate({ revealedMessageId: messageId }));
  },
  THREAD_CREATE_LOCAL: function handleThreadCreateLocal(channelId) {
    const orCreate = ChannelMessagesDefault.getOrCreate(channelId.channelId);
    const complete = orCreate.loadComplete({ newMessages: [], hasMoreAfter: false, hasMoreBefore: false });
    ChannelMessagesDefault.commit(complete);
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    channels = channels.channels;
    let flag = false;
    const uniqResult = _modDef12.uniq(channels.map((guild_id) => guild_id.guild_id));
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
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    let tmp3 = user.user.id === id;
    if (tmp3) {
      const guildId = user.guildId;
      importDefault = false;
      const item = ChannelMessagesDefault.forEach((cached) => {
        if (!cached.cached) {
          const basicChannel = ChannelStore.getBasicChannel(cached.channelId);
          let guild_id;
          if (basicChannel != null) {
            guild_id = basicChannel.guild_id;
          }
          if (guild_id === guildId) {
            if (!PermissionStore.canBasicChannel(constants.VIEW_CHANNEL, basicChannel)) {
              ChannelMessagesDefault.commit(cached.mutate({ cached: true }));
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
    while (tmp !== undefined) {
      let tmp4 = performAuthorUpdate(tmp2.guildId);
      continue;
    }
    tmp = arg0.chunks[Symbol.iterator]();
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(guildId) {
    guildId = guildId.guildId;
    let item = ChannelMessagesDefault.forEach((channelId) => {
      const channel = ChannelStore.getChannel(channelId.channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      if (guild_id === guildId) {
        const items = [];
        c1 = false;
        const item = channelId.forEach((nick) => {
          const messageAuthor = guildId(dependencyMap[27]).getMessageAuthor(nick);
          ({ nick, colorString } = messageAuthor);
          if (nick === nick.nick) {
            if (colorString === nick.colorString) {
              items.push(nick);
            }
          }
          c1 = true;
          items.push(nick.merge({ nick, colorString }));
          const obj = guildId(dependencyMap[27]);
        });
        if (c1) {
          ChannelMessagesDefault.commit(channelId.reset(items));
        }
      }
    });
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(reactions) {
    reactions = reactions.reactions;
    ({ channelId, messageId } = reactions);
    value = ChannelMessagesDefault.get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (addReactionBatch) => {
        const currentUser = UserStore.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return addReactionBatch.addReactionBatch(reactions, id);
      });
      ChannelMessagesDefault.commit(updateResult);
      const tmpResult = ChannelMessagesDefault;
    }
  },
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(arg0) {
    ({ channelId, messageId } = arg0);
    value = ChannelMessagesDefault.get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (set) => set.set("reactions", []));
      ChannelMessagesDefault.commit(updateResult);
      const tmpResult = ChannelMessagesDefault;
    }
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(emoji) {
    emoji = emoji.emoji;
    ({ channelId, messageId } = emoji);
    value = ChannelMessagesDefault.get(channelId);
    if (null == value) {
      return false;
    } else {
      const updateResult = value.update(messageId, (removeReactionsForEmoji) =>
        removeReactionsForEmoji.removeReactionsForEmoji(emoji),
      );
      ChannelMessagesDefault.commit(updateResult);
      const tmpResult = ChannelMessagesDefault;
    }
  },
  LOGOUT: function handleLogout() {
    const item = ChannelMessagesDefault.forEach((channelId) => {
      ChannelMessagesDefault.clear(channelId.channelId);
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
      const orCreate = ChannelMessagesDefault.getOrCreate(tmp);
      value = orCreate.get(messageId);
      if (null == value) {
        return false;
      } else {
        const items = [value];
        const removeResult = orCreate.remove(messageId);
        set.delete(messageId);
        const mergeResult = orCreate.remove(messageId).merge(items);
        ChannelMessagesDefault.commit(mergeResult);
        const tmp2Result = ChannelMessagesDefault;
      }
    } else {
      return false;
    }
  },
  LOCAL_MESSAGE_CREATE: function handleLocalIncomingMesssage(message) {
    message = message.message;
    const currentUser = UserStore.getCurrentUser();
    if (tmp2) {
      c28 = true;
    }
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/MessageStore.tsx");

export default messageStore;

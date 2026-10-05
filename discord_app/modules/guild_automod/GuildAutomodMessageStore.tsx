// === Module 7597: GuildAutomodMessageStore ===

// Module 7597 (GuildAutomodMessageStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5112 */;
import AutomodMessageUtils from "AutomodMessageUtils" /* 7017 */;
import MessageQueue from "MessageQueue" /* 7462 */;
import AutomodErrorUtils from "AutomodErrorUtils" /* 7598 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5110 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function handleMessageSendFailedAutomod(messageData) {
  let obj3;
  let obj4;
  messageData = messageData.messageData;
  const errorResponseBody = messageData.errorResponseBody;
  const obj = MessageQueue;
  const failedMessageId = obj.getFailedMessageId(messageData);
  const obj2 = { id: failedMessageId, isBlockedEdit: obj3.isMessageDataEdit(messageData), messageData, errorMessage: obj4.getAutomodErrorMessage(messageData, errorResponseBody) };
  obj3 = MessageQueue;
  automodFailedMessages[failedMessageId] = obj2;
  closure_9 = closure_9 + 1;
  obj4 = AutomodErrorUtils;
  return true;
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const channel = ChannelStore.getChannel(messages.channelId);
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  if (null == guildId) {
    return false;
  } else {
    const reduced = messages.reduce((acc, type) => {
      if (type.type === constants.AUTO_MODERATION_ACTION) {
        const embeds = type.embeds;
        let someResult;
        if (embeds != null) {
          someResult = embeds.some((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
        }
        let tmp3 = acc;
        if (someResult) {
          let id;
          if (null == acc) {
            id = type.id;
          } else {
            SnowflakeUtilsDefault;
          }
          tmp3 = id;
        }
        return tmp3;
      } else {
        return acc;
      }
    }, lastIncidentAlertMessage[guildId]);
    let flag = null != reduced && lastIncidentAlertMessage[guildId] !== reduced;
    if (flag) {
      lastIncidentAlertMessage[guildId] = reduced;
      flag = true;
    }
    return flag;
  }
}
({ AbortCodes: hasOwnProperty, MessageEmbedTypes: metroRequire, MessageTypes: metroImportDefault } = Constants);
const metroImportAll = {};
let closure_9 = 0;
const authStore = {};
const unpackModuleId = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class GuildAutomodMessageStore extends PersistedStore {
  initialize(arg0) {
    let closure_10;
    let closure_8;
    this.waitFor(ChannelStore, MessageStore);
    if (null != arg0) {
      ({ automodFailedMessages: closure_8, mentionRaidDetectionByGuild: closure_10 } = arg0);
    }
  }
  getState() {
    return { automodFailedMessages, mentionRaidDetectionByGuild, lastIncidentAlertMessage };
  }
  getMessage(arg0) {
    let tmp = null;
    if (null != arg0) {
      let tmp3 = automodFailedMessages[arg0];
      if (tmp3 == null) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  }
  getMessagesVersion() {
    return closure_9;
  }
  getMentionRaidDetected(arg0) {
    let tmp = mentionRaidDetectionByGuild[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  getLastIncidentAlertMessage(arg0) {
    let tmp = lastIncidentAlertMessage[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
}
const prototype = GuildAutomodMessageStore.prototype;
GuildAutomodMessageStore.displayName = "GuildAutomodMessageStore";
GuildAutomodMessageStore.persistKey = "GuildAutomodMessages";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let flag = 0 !== Object.keys(closure_8).length;
    if (flag) {
      closure_8 = {};
      closure_9 = closure_9 + 1;
      flag = true;
    }
    return flag;
  },
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  MESSAGE_CREATE: function handleIncidentAlertMessageCreate(arg0) {
    let guildId;
    let message;
    ({ guildId, message } = arg0);
    if (null == guildId) {
      return false;
    } else if (message.type !== metroImportDefault.AUTO_MODERATION_ACTION) {
      return false;
    } else {
      const obj = MessageRecordUtils;
      const messageRecord = obj.createMessageRecord(message);
      const obj2 = AutomodMessageUtils;
      let result = obj2.isAutomodMessageRecord(messageRecord);
      if (result) {
        const tmpResult = AutomodMessageUtils;
        let flag = tmpResult.isAutomodNotification(messageRecord);
        if (flag) {
          lastIncidentAlertMessage[guildId] = messageRecord.id;
          flag = true;
        }
        result = flag;
      }
      return result;
    }
  },
  MESSAGE_SEND_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_EDIT_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  AUTO_MODERATION_CONTENT_DELETED: function handleAutomodContentDeleted(message) {
    message = message.message;
    let flag = null != message;
    if (flag) {
      const obj = { id: message.id, messageData: "Set", isBlockedEdit: null, errorMessage: tmp };
      automodFailedMessages[message.id] = obj;
      closure_9 = closure_9 + 1;
      flag = true;
    }
    return flag;
  },
  REMOVE_AUTOMOD_MESSAGE_NOTICE: function handleMessageNoticeRemove(messageId) {
    messageId = messageId.messageId;
    if (null != automodFailedMessages[messageId]) {
      delete automodFailedMessages[messageId];
    }
    closure_9 = closure_9 + 1;
    return true;
  },
  MESSAGE_END_EDIT: function handleMessageEndEdit(response) {
    response = response.response;
    let body;
    if (response != null) {
      body = response.body;
    }
    if (null == body) {
      return false;
    } else if (response.body.code === hasOwnProperty.AUTOMOD_MESSAGE_BLOCKED) {
      return false;
    } else {
      const id = response.body.id;
      if (null == id) {
        return false;
      } else {
        if (null != automodFailedMessages[id]) {
          delete automodFailedMessages[id];
        }
        closure_9 = closure_9 + 1;
      }
    }
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function handleMentionRaidDetection(decisionId) {
    const guildId = decisionId.guildId;
    mentionRaidDetectionByGuild[guildId] = { guildId, decisionId: decisionId.decisionId, suspiciousMentionActivityUntil: decisionId.suspiciousMentionActivityUntil };
    return true;
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function handleMentionRaidNoticeDismiss(arg0) {
    delete mentionRaidDetectionByGuild[arg0.guildId];
    return true;
  }
};
const guildAutomodMessageStore = new GuildAutomodMessageStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStore.tsx");

export default guildAutomodMessageStore;
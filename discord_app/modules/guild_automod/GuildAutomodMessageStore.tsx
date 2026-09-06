// discord_app/modules/guild_automod/GuildAutomodMessageStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import MessageRecordUtils from "../messages/MessageRecordUtils.tsx";
import AutomodMessageUtils from "AutomodMessageUtils.tsx";
import MessageQueue from "../../lib/MessageQueue.tsx";
import AutomodErrorUtils from "AutomodErrorUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";

require = fn;
function handleMessageSendFailedAutomod(messageData) {
  messageData = messageData.messageData;
  let obj = MessageQueue;
  const failedMessageId = obj.getFailedMessageId(messageData);
  obj = {
    id: failedMessageId,
    isBlockedEdit: MessageQueue.isMessageDataEdit(messageData),
    messageData,
    errorMessage: null,
  };
  obj.errorMessage = AutomodErrorUtils.getAutomodErrorMessage(messageData, messageData.errorResponseBody);
  closure_8[failedMessageId] = obj;
  closure_9 = closure_9 + 1;
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
          if (null == acc) {
            const id = type.id;
          }
          tmp3 = id;
        }
        return tmp3;
      } else {
        return acc;
      }
    }, lastIncidentAlertMessage[guildId]);
    let flag = null != reduced && tmp2[guildId] !== reduced;
    if (flag) {
      tmp2[guildId] = reduced;
      flag = true;
    }
    return flag;
  }
}
const Constants = fn(1074);
({ AbortCodes: hasOwnProperty, MessageEmbedTypes: metroRequire, MessageTypes: closure_7 } = Constants);
const automodFailedMessages = {};
let closure_9 = 0;
const mentionRaidDetectionByGuild = {};
const lastIncidentAlertMessage = {};
const PersistedStore = initializeDefault.PersistedStore;
class GuildAutomodMessageStore extends PersistedStore {}
const prototype = GuildAutomodMessageStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  this.waitFor(ChannelStore, MessageStore);
  if (null != arg0) {
    ({ automodFailedMessages: closure_8, mentionRaidDetectionByGuild: closure_10 } = arg0);
  }
};
prototype["getState"] = function getState() {
  return { automodFailedMessages, mentionRaidDetectionByGuild, lastIncidentAlertMessage };
};
prototype["getMessage"] = function getMessage(arg0) {
  let tmp = null;
  if (null != arg0) {
    let tmp3 = automodFailedMessages[arg0];
    if (tmp3 == null) {
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["getMessagesVersion"] = function getMessagesVersion() {
  return closure_9;
};
prototype["getMentionRaidDetected"] = function getMentionRaidDetected(arg0) {
  let tmp = mentionRaidDetectionByGuild[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getLastIncidentAlertMessage"] = function getLastIncidentAlertMessage(arg0) {
  let tmp = lastIncidentAlertMessage[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
GuildAutomodMessageStore.displayName = "GuildAutomodMessageStore";
GuildAutomodMessageStore.persistKey = "GuildAutomodMessages";
const guildAutomodMessageStore = new GuildAutomodMessageStore(DispatcherDefault, {
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
    ({ guildId, message } = arg0);
    if (null == guildId) {
      return false;
    } else if (message.type !== constants2.AUTO_MODERATION_ACTION) {
      return false;
    } else {
      const messageRecord = MessageRecordUtils.createMessageRecord(message);
      const tmp = require;
      let result = AutomodMessageUtils.isAutomodMessageRecord(messageRecord);
      if (result) {
        let flag = tmp(7508).isAutomodNotification(messageRecord);
        if (flag) {
          closure_11[guildId] = messageRecord.id;
          flag = true;
        }
        result = flag;
        const tmpResult = tmp(7508);
      }
      return result;
    }
  },
  MESSAGE_SEND_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_EDIT_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  REMOVE_AUTOMOD_MESSAGE_NOTICE: function handleMessageNoticeRemove(arg0) {
    if (null != automodFailedMessages[arg0.messageId]) {
      delete tmp[tmp2];
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
    } else if (response.body.code === constants.AUTOMOD_MESSAGE_BLOCKED) {
      return false;
    } else {
      const id = response.body.id;
      if (null == id) {
        return false;
      } else {
        if (null != automodFailedMessages[id]) {
          delete tmp[tmp2];
        }
        closure_9 = closure_9 + 1;
      }
    }
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function handleMentionRaidDetection(decisionId) {
    const guildId = decisionId.guildId;
    closure_10[guildId] = {
      guildId,
      decisionId: decisionId.decisionId,
      suspiciousMentionActivityUntil: decisionId.suspiciousMentionActivityUntil,
    };
    return true;
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function handleMentionRaidNoticeDismiss(arg0) {
    delete tmp[tmp2];
    return true;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStore.tsx");

export default guildAutomodMessageStore;

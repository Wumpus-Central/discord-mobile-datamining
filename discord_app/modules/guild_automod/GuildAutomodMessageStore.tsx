// discord_app/modules/guild_automod/GuildAutomodMessageStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import createMinimalMessageRecord from "../messages/MessageRecordUtils.tsx";
import getDecisionOutcomeFromMessage from "AutomodMessageUtils.tsx";
import items from "../../lib/MessageQueue.tsx";
import getAutomodErrorMessageFromErrorResponse from "AutomodErrorUtils.tsx";
import closure_3 from "../../stores/ChannelStore.tsx";
import closure_4 from "../../stores/MessageStore.tsx";
import ME from "../../Constants.tsx";

require = arg1;
function handleMessageSendFailedAutomod(messageData) {
  messageData = messageData.messageData;
  let obj = items;
  const failedMessageId = obj.getFailedMessageId(messageData);
  obj = { id: failedMessageId, isBlockedEdit: items.isMessageDataEdit(messageData), messageData, errorMessage: null };
  const obj3 = items;
  obj[3] = getAutomodErrorMessageFromErrorResponse.getAutomodErrorMessage(messageData, messageData.errorResponseBody);
  closure_8[failedMessageId] = obj;
  closure_9 = closure_9 + 1;
  return true;
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  channel = channel.getChannel(messages.channelId);
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  if (null == guildId) {
    return false;
  } else {
    const reduced = messages.reduce((arg0, type) => {
      if (type.type === constants.AUTO_MODERATION_ACTION) {
        const embeds = type.embeds;
        let someResult;
        if (embeds != null) {
          someResult = embeds.some((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
        }
        let tmp3 = arg0;
        if (someResult) {
          if (null == arg0) {
            const id = type.id;
          } else {
            const obj = callback(table[7]);
          }
          tmp3 = id;
        }
        return tmp3;
      } else {
        return arg0;
      }
    }, dependencyMap2[guildId]);
    let flag = null != reduced && tmp2[guildId] !== reduced;
    if (flag) {
      tmp2[guildId] = reduced;
      flag = true;
    }
    return flag;
  }
}
({ AbortCodes: c5, MessageEmbedTypes: closure_6, MessageTypes: error } = ME);
let closure_8 = {};
let c9 = 0;
let closure_10 = {};
let closure_11 = {};
const PersistedStore = initializeDefault.PersistedStore;
class GuildAutomodMessageStore extends PersistedStore {}
const prototype = GuildAutomodMessageStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  this.waitFor(closure_3, closure_4);
  if (null != arg0) {
    ({ automodFailedMessages: closure_8, mentionRaidDetectionByGuild: closure_10 } = arg0);
  }
};
prototype["getState"] = function getState() {
  return {
    automodFailedMessages: closure_8,
    mentionRaidDetectionByGuild: closure_10,
    lastIncidentAlertMessage: closure_11,
  };
};
prototype["getMessage"] = function getMessage(arg0) {
  let tmp = null;
  if (null != arg0) {
    let tmp3 = dependencyMap[arg0];
    if (tmp3 == null) {
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["getMessagesVersion"] = function getMessagesVersion() {
  return c9;
};
prototype["getMentionRaidDetected"] = function getMentionRaidDetected(arg0) {
  let tmp = table[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getLastIncidentAlertMessage"] = function getLastIncidentAlertMessage(arg0) {
  let tmp = dependencyMap2[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
GuildAutomodMessageStore.displayName = "GuildAutomodMessageStore";
GuildAutomodMessageStore.persistKey = "GuildAutomodMessages";
const guildAutomodMessageStore = new GuildAutomodMessageStore(dispatcherDefault, {
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
      const messageRecord = createMinimalMessageRecord.createMessageRecord(message);
      const obj = createMinimalMessageRecord;
      const tmp = require;
      let result = getDecisionOutcomeFromMessage.isAutomodMessageRecord(messageRecord);
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
    if (null != dependencyMap[arg0.messageId]) {
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
        if (null != dependencyMap[id]) {
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
let result = require("set").fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStore.tsx");

export default guildAutomodMessageStore;

// === Module 7609: AutomodErrorUtils ===

// Module 7609 (AutomodErrorUtils)
import Constants from "Constants" /* 1085 */;
import intl5 from "intl" /* 1126 */;
import MessageQueue from "MessageQueue" /* 7473 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

function getAutomodErrorMessageFromErrorResponse(errorResponseBody, id) {
  let code;
  let message;
  if (null == errorResponseBody) {
    return null;
  } else {
    ({ code, message } = errorResponseBody);
    if (set.has(code)) {
      if (null != message) {
        return message;
      } else if (null == id) {
        return null;
      } else {
        const channel = ChannelStore.getChannel(id);
        let isThreadResult;
        if (channel != null) {
          isThreadResult = channel.isThread();
        }
        if (isThreadResult) {
          const intl3 = intl5.intl;
          return intl3.string(intl5.t.DVdG9E);
        } else {
          let isForumPostResult;
          if (channel != null) {
            isForumPostResult = channel.isForumPost();
          }
          if (isForumPostResult) {
            if (code === AbortCodes.AUTOMOD_TITLE_BLOCKED) {
              const intl2 = intl5.intl;
              return intl2.string(intl5.t.ipgKDg);
            } else if (code === tmp4.AUTOMOD_MESSAGE_BLOCKED) {
              const intl = intl5.intl;
              return intl.string(intl5.t.ipgKDg);
            }
          } else if (channel != null) {
            channel.isForumLikeChannel();
          }
          return null;
        }
      }
    } else {
      return null;
    }
  }
}
function getAutomodErrorMessageFromMessageData(message) {
  let stringResult;
  const channel = ChannelStore.getChannel(message.message.channelId);
  const obj2 = MessageQueue;
  if (obj2.isMessageDataEdit(message)) {
    const intl4 = intl5.intl;
    stringResult = intl4.string(intl5.t.bU6o0z);
  } else {
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    if (isThreadResult) {
      const intl3 = intl5.intl;
      stringResult = intl3.string(intl5.t.DVdG9E);
    } else {
      let isForumPostResult;
      if (channel != null) {
        isForumPostResult = channel.isForumPost();
      }
      if (!isForumPostResult) {
        let isForumLikeChannelResult;
        if (channel != null) {
          isForumLikeChannelResult = channel.isForumLikeChannel();
        }
        if (!isForumLikeChannelResult) {
          const intl = intl5.intl;
          stringResult = intl.string(intl5.t.zQ69pv);
        }
      }
      const intl2 = intl5.intl;
      stringResult = intl2.string(intl5.t.ipgKDg);
    }
  }
  return stringResult;
}
const AbortCodes = Constants.AbortCodes;
class InvalidKeywordError extends Error {
}
class InvalidRegexPatternError extends Error {
}
const items = [, , ];
({ AUTOMOD_MESSAGE_BLOCKED: arr[0], AUTOMOD_TITLE_BLOCKED: arr[1], AUTOMOD_INVALID_RUST_SERVICE_RESPONSE: arr[2] } = AbortCodes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodErrorUtils.tsx");

export { InvalidKeywordError };
export { InvalidRegexPatternError };
export const AUTOMOD_ERROR_CODES = set;
export { getAutomodErrorMessageFromErrorResponse };
export { getAutomodErrorMessageFromMessageData };
export const getAutomodErrorMessage = function getAutomodErrorMessage(messageData, errorResponseBody) {
  let tmp = getAutomodErrorMessageFromErrorResponse(errorResponseBody);
  if (null == tmp) {
    let stringResult;
    if (null == messageData) {
      const intl = intl5.intl;
      stringResult = intl.string(intl5.t.zQ69pv);
    } else {
      stringResult = getAutomodErrorMessageFromMessageData(messageData);
    }
    tmp = stringResult;
  }
  return tmp;
};
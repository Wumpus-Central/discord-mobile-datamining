// === Module 7939: getAutomodErrorMessageFromErrorResponse ===

// Module 7939 (getAutomodErrorMessageFromErrorResponse)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import closure_2 from "ensureGuildLoaded" /* 1957 */;
import { AbortCodes } from "ME" /* 1074 */;
import set from "set" /* 2 */;

require = arg1;
function getAutomodErrorMessageFromErrorResponse(errorResponseBody, id) {
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
        const channel = store.getChannel(id);
        let isThreadResult;
        if (channel != null) {
          isThreadResult = channel.isThread();
        }
        if (isThreadResult) {
          const intl3 = getSystemLocale.intl;
          return intl3.string(getSystemLocale.t.DVdG9E);
        } else {
          let isForumPostResult;
          if (channel != null) {
            isForumPostResult = channel.isForumPost();
          }
          if (isForumPostResult) {
            if (code === AbortCodes.AUTOMOD_TITLE_BLOCKED) {
              const intl2 = getSystemLocale.intl;
              return intl2.string(getSystemLocale.t.ipgKDg);
            } else if (code === tmp4.AUTOMOD_MESSAGE_BLOCKED) {
              const intl = getSystemLocale.intl;
              return intl.string(getSystemLocale.t.ipgKDg);
            }
          } else {
            let isForumLikeChannelResult;
            if (channel != null) {
              isForumLikeChannelResult = channel.isForumLikeChannel();
            }
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
  const channel = store.getChannel(message.message.channelId);
  if (obj2.isMessageDataEdit(message)) {
    const intl4 = tmp(1114).intl;
    let stringResult = intl4.string(tmp(1114).t.bU6o0z);
  } else {
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    if (isThreadResult) {
      const intl3 = tmp(1114).intl;
      stringResult = intl3.string(tmp(1114).t.DVdG9E);
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
          const intl = tmp(1114).intl;
          stringResult = intl.string(tmp(1114).t.zQ69pv);
        }
      }
      const intl2 = tmp(1114).intl;
      stringResult = intl2.string(tmp(1114).t.ipgKDg);
    }
  }
  return stringResult;
}
class InvalidKeywordError extends Error {
}
const prototype = function InvalidRegexPatternError(intl) {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {
}
const items = [, , ];
({ AUTOMOD_MESSAGE_BLOCKED: arr[0], AUTOMOD_TITLE_BLOCKED: arr[1], AUTOMOD_INVALID_RUST_SERVICE_RESPONSE: arr[2] } = AbortCodes);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/guild_automod/AutomodErrorUtils.tsx");

export { InvalidKeywordError };
export const InvalidRegexPatternError = prototype;
export const AUTOMOD_ERROR_CODES = set;
export { getAutomodErrorMessageFromErrorResponse };
export { getAutomodErrorMessageFromMessageData };
export const getAutomodErrorMessage = function getAutomodErrorMessage(messageData, errorResponseBody) {
  const tmp = getAutomodErrorMessageFromErrorResponse(errorResponseBody);
  if (null != tmp) {
    return tmp;
  } else if (null == messageData) {
    const intl = getSystemLocale.intl;
    let stringResult = intl.string(getSystemLocale.t.zQ69pv);
  } else {
    stringResult = getAutomodErrorMessageFromMessageData(messageData);
  }
};
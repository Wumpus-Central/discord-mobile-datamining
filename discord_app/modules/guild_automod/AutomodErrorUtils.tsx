// discord_app/modules/guild_automod/AutomodErrorUtils.tsx
import util from "../../intl/index.native.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

require = fn;
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
        const channel = ChannelStore.getChannel(id);
        let isThreadResult;
        if (channel != null) {
          isThreadResult = channel.isThread();
        }
        if (isThreadResult) {
          const intl3 = util.intl;
          return intl3.string(util.t.DVdG9E);
        } else {
          let isForumPostResult;
          if (channel != null) {
            isForumPostResult = channel.isForumPost();
          }
          if (isForumPostResult) {
            if (code === AbortCodes.AUTOMOD_TITLE_BLOCKED) {
              const intl2 = util.intl;
              return intl2.string(util.t.ipgKDg);
            } else if (code === tmp4.AUTOMOD_MESSAGE_BLOCKED) {
              const intl = util.intl;
              return intl.string(util.t.ipgKDg);
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
  const channel = ChannelStore.getChannel(message.message.channelId);
  if (obj2.isMessageDataEdit(message)) {
    const intl4 = util.intl;
    let stringResult = intl4.string(util.t.bU6o0z);
  } else {
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    if (isThreadResult) {
      const intl3 = util.intl;
      stringResult = intl3.string(util.t.DVdG9E);
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
          const intl = util.intl;
          stringResult = intl.string(util.t.zQ69pv);
        }
      }
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.ipgKDg);
    }
  }
  return stringResult;
}
const AbortCodes = fn(1074).AbortCodes;
class InvalidKeywordError extends Error {}
const prototype = function InvalidRegexPatternError() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends Error {}
const items = [, ,];
({
  AUTOMOD_MESSAGE_BLOCKED: arr[0],
  AUTOMOD_TITLE_BLOCKED: arr[1],
  AUTOMOD_INVALID_RUST_SERVICE_RESPONSE: arr[2],
} = AbortCodes);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/AutomodErrorUtils.tsx");

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
    const intl = util.intl;
    let stringResult = intl.string(util.t.zQ69pv);
  } else {
    stringResult = getAutomodErrorMessageFromMessageData(messageData);
  }
};

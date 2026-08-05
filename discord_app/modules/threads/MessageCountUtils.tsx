// discord_app/modules/threads/MessageCountUtils.tsx
import AbortCodes from "AbortCodes";

let c3;
let c4;
function _formatMessageCountLabel(count, iTS3Xe, id) {
  let str = "0";
  if (null != count) {
    str = "0";
    if (count >= 0) {
      require("../../utils/SnowflakeUtils.tsx");
      if (null == id) {
        let str3 = "50+";
        str = str3;
      }
      let str4 = "100k+";
      if (count < closure_3) {
        const _HermesInternal = HermesInternal;
        str4 = "" + count;
      }
      str3 = str4;
    }
  }
  if ("0" === str) {
    const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let stringResult = intl2.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.eXHkhl);
  } else {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const obj = { count: null };
    obj[0] = str;
    stringResult = intl.formatToPlainString(iTS3Xe, obj);
  }
  return stringResult;
}
({ MAX_THREAD_MESSAGE_COUNT: c3, MAX_THREAD_MESSAGE_COUNT_OLD: c4 } = AbortCodes);
const result = require("getSystemLocale").fileFinishedImporting("modules/threads/MessageCountUtils.tsx");

export const shouldUseOldMaxMessageCount = function shouldUseOldMaxMessageCount(arg0) {
  return require("../../utils/SnowflakeUtils.tsx").compare("992549565104128000", arg0) > -1;
};
export const getMessageCountText = function getMessageCountText(stateFromStores, id) {
  if (null != stateFromStores) {
    if (stateFromStores >= 0) {
      require("../../utils/SnowflakeUtils.tsx");
      if (null == id) {
        let str = "50+";
        return str;
      }
      let str2 = "100k+";
      if (stateFromStores < closure_3) {
        const _HermesInternal = HermesInternal;
        str2 = "" + stateFromStores;
      }
      str = str2;
    }
  }
  return "0";
};
export const formatMobileMessageCountLabel = function formatMobileMessageCountLabel(count, id) {
  return _formatMessageCountLabel(count, require("../../intl/index.native.tsx") /* getSystemLocale */.t.iTS3Xe, id);
};
export const formatMessageCountLabel = function formatMessageCountLabel(count, id) {
  return _formatMessageCountLabel(count, require("../../intl/index.native.tsx") /* getSystemLocale */.t.rfAXDV, id);
};
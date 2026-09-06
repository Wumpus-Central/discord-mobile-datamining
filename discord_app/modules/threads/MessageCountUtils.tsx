// === Module 7887: MessageCountUtils ===

// Module 7887 (MessageCountUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import util from "util" /* 1114 */;
import ThreadConstants from "ThreadConstants" /* 1113 */;
import size from "module_2" /* 2 */;

function _formatMessageCountLabel(count, iTS3Xe, id) {
  let str = "0";
  if (null != count) {
    str = "0";
    if (count >= 0) {
      SnowflakeUtilsDefault;
      if (null == id) {
        let str3 = "50+";
        str = str3;
      }
      let str4 = "100k+";
      if (count < React3) {
        const _HermesInternal = HermesInternal;
        str4 = "" + count;
      }
      str3 = str4;
    }
  }
  if ("0" === str) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.eXHkhl);
  } else {
    const intl = util.intl;
    const obj = { count: str };
    stringResult = intl.formatToPlainString(iTS3Xe, obj);
  }
  return stringResult;
}
({ MAX_THREAD_MESSAGE_COUNT: c3, MAX_THREAD_MESSAGE_COUNT_OLD: closure_4 } = ThreadConstants);
const result = size.fileFinishedImporting("modules/threads/MessageCountUtils.tsx");

export const shouldUseOldMaxMessageCount = function shouldUseOldMaxMessageCount(arg0) {
  return SnowflakeUtilsDefault.compare("992549565104128000", arg0) > -1;
};
export const getMessageCountText = function getMessageCountText(stateFromStores, id) {
  if (null != stateFromStores) {
    if (stateFromStores >= 0) {
      SnowflakeUtilsDefault;
      if (null == id) {
        let str = "50+";
        return str;
      }
      let str2 = "100k+";
      if (stateFromStores < React3) {
        const _HermesInternal = HermesInternal;
        str2 = "" + stateFromStores;
      }
      str = str2;
    }
  }
  return "0";
};
export const formatMobileMessageCountLabel = function formatMobileMessageCountLabel(count, id) {
  return _formatMessageCountLabel(count, util.t.iTS3Xe, id);
};
export const formatMessageCountLabel = function formatMessageCountLabel(count, id) {
  return _formatMessageCountLabel(count, util.t.rfAXDV, id);
};
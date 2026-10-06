// === Module 7541: MessageCountUtils ===

// Module 7541 (MessageCountUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl3 from "intl" /* 1126 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
function _formatMessageCountLabel(count, iTS3Xe, id) {
  let stringResult;
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
      if (count < _false) {
        const _HermesInternal = HermesInternal;
        str4 = "" + count;
      }
      str3 = str4;
    }
  }
  if ("0" === str) {
    const intl2 = intl3.intl;
    stringResult = intl2.string(intl3.t.eXHkhl);
  } else {
    const intl = intl3.intl;
    const obj = { count: str };
    stringResult = intl.formatToPlainString(iTS3Xe, obj);
  }
  return stringResult;
}
({ MAX_THREAD_MESSAGE_COUNT: c3, MAX_THREAD_MESSAGE_COUNT_OLD: closure_4 } = ThreadConstants);
const result = size.fileFinishedImporting("modules/threads/MessageCountUtils.tsx");

export const shouldUseOldMaxMessageCount = function shouldUseOldMaxMessageCount(arg0) {
  const obj = SnowflakeUtilsDefault;
  return obj.compare("992549565104128000", arg0) > -1;
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
      if (stateFromStores < _false) {
        const _HermesInternal = HermesInternal;
        str2 = "" + stateFromStores;
      }
      str = str2;
    }
  }
  return "0";
};
export const formatMobileMessageCountLabel = function formatMobileMessageCountLabel(count, id) {
  return _formatMessageCountLabel(count, intl3.t.iTS3Xe, id);
};
export const formatMessageCountLabel = function formatMessageCountLabel(count, id) {
  return _formatMessageCountLabel(count, intl3.t.rfAXDV, id);
};
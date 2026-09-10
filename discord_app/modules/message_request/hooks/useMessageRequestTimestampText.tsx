// === Module 16974: useMessageRequestTimestampText ===

// Module 16974 (useMessageRequestTimestampText)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef4196 from "module_4196" /* 4196 */;
import ReadStateStore from "ReadStateStore" /* 4620 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  _require = channel;
  let obj = require("useMessageRequestPreview");
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: null };
  const items = [ReadStateStore];
  obj.lastMessageId = require("initialize").useStateFromStores(items, () => ReadStateStore.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj);
  if (obj.loaded) {
    if (null != message) {
      let extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message.id);
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = _modDef4196(extractTimestampResult).calendar();
      const obj6 = _modDef4196(extractTimestampResult);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessageId);
  }
  const obj3 = require("initialize");
};
export const useMessageRequestRelativeTimestampText = function useMessageRequestRelativeTimestampText(channel) {
  _require = channel;
  let obj = require("useMessageRequestPreview");
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: null };
  const items = [ReadStateStore];
  obj.lastMessageId = require("initialize").useStateFromStores(items, () => ReadStateStore.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj);
  if (obj.loaded) {
    if (null != message) {
      let extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message.id);
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = tmp(7832).getTimestampString(extractTimestampResult);
      const tmpResult = tmp(7832);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessageId);
  }
  const obj3 = require("initialize");
  tmp = _require;
};
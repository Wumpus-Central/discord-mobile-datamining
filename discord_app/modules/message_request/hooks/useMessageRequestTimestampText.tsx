// === Module 16093: useMessageRequestTimestampText ===

// Module 16093 (useMessageRequestTimestampText)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import tDefault from "t" /* 3975 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  const _require = channel;
  let obj = _require(11763);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: _require(589).useStateFromStores(items, () => closure_1_3.lastMessageId(id.id)) };
  items = [closure_3];
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj);
  if (obj.loaded) {
    if (null != message) {
      let extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(message.id);
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = tDefault(extractTimestampResult).calendar();
      const obj6 = tDefault(extractTimestampResult);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(lastMessageId);
  }
  const obj3 = _require(589);
};
export const useMessageRequestRelativeTimestampText = function useMessageRequestRelativeTimestampText(channel) {
  const _require = channel;
  let obj = _require(11763);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: _require(589).useStateFromStores(items, () => closure_1_3.lastMessageId(id.id)) };
  items = [closure_3];
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj);
  if (obj.loaded) {
    if (null != message) {
      let extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(message.id);
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = tmp(7528).getTimestampString(extractTimestampResult);
      const tmpResult = tmp(7528);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(lastMessageId);
  }
  const obj3 = _require(589);
  tmp = _require;
};
// === Module 16223: useMessageRequestTimestampText ===

// Module 16223 (useMessageRequestTimestampText)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import hooksDefault from "hooks" /* 3979 */;
import closure_3 from "generateOldThreadCutoff" /* 4395 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  const _require = channel;
  let obj = _require(12152);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: _require(589).useStateFromStores(items, () => closure_1_3.lastMessageId(id.id)) };
  items = [closure_3];
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj);
  if (obj.loaded) {
    if (null != message) {
      let extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(message.id);
      const obj5 = DISCORD_EPOCHDefault;
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = hooksDefault(extractTimestampResult).calendar();
      const obj6 = hooksDefault(extractTimestampResult);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(lastMessageId);
    const obj4 = DISCORD_EPOCHDefault;
  }
};
export const useMessageRequestRelativeTimestampText = function useMessageRequestRelativeTimestampText(channel) {
  const _require = channel;
  let obj = _require(12152);
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: _require(589).useStateFromStores(items, () => closure_1_3.lastMessageId(id.id)) };
  items = [closure_3];
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj);
  if (obj.loaded) {
    if (null != message) {
      let extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(message.id);
      const obj5 = DISCORD_EPOCHDefault;
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = _require(7384).getTimestampString(extractTimestampResult);
      const tmpResult = _require(7384);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(lastMessageId);
    const obj4 = DISCORD_EPOCHDefault;
  }
};
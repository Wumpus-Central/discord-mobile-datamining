// discord_app/modules/message_request/hooks/useMessageRequestTimestampText.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import _modDef4153 from "../../../../_runtime/metro/04153__.js";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";

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
      str = _modDef4153(extractTimestampResult).calendar();
      const obj6 = _modDef4153(extractTimestampResult);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessageId);
  }
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
      str = require("ThreadUtils").getTimestampString(extractTimestampResult);
      const tmpResult = require("ThreadUtils");
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(lastMessageId);
  }
};

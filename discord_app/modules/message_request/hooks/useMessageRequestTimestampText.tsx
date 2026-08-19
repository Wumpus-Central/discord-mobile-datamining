// discord_app/modules/message_request/hooks/useMessageRequestTimestampText.tsx
import DISCORD_EPOCHDefault from "../../../utils/SnowflakeUtils.tsx";
import tDefault from "../../../../_runtime/03975_t.js";
import generateOldThreadCutoff from "../../../stores/ReadStateStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { loadMessageRequestData } from "useMessageRequestPreview.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  const _require = channel;
  let obj = loadMessageRequestData;
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_3.lastMessageId(id.id)) };
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
  const obj3 = initialize;
};
export const useMessageRequestRelativeTimestampText = function useMessageRequestRelativeTimestampText(channel) {
  const _require = channel;
  let obj = loadMessageRequestData;
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_3.lastMessageId(id.id)) };
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
  const obj3 = initialize;
  tmp = _require;
};
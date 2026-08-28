// discord_app/modules/message_request/hooks/useMessageRequestTimestampText.tsx
import DISCORD_EPOCHDefault from "../../../utils/SnowflakeUtils.tsx";
import hooksDefault from "../../../../_runtime/04044_hooks.js";
import closure_3 from "../../../stores/ReadStateStore.tsx";
import { getAccessibilityLabelFormatter } from "../../threads/ThreadUtils.tsx";
import { loadMessageRequestData } from "useMessageRequestPreview.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

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
  let obj = loadMessageRequestData;
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_3.lastMessageId(id.id)) };
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
      str = require("../../threads/ThreadUtils.tsx").getTimestampString(extractTimestampResult);
      const tmpResult = getAccessibilityLabelFormatter;
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(lastMessageId);
    const obj4 = DISCORD_EPOCHDefault;
  }
};
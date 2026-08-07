// discord_app/modules/message_request/hooks/useMessageRequestTimestampText.tsx
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { t } from "../../../../_runtime/03883_t.js";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { DISCORD_EPOCH } from "../../../utils/SnowflakeUtils.tsx";
import { getAccessibilityLabelFormatter } from "../../threads/ThreadUtils.tsx";
import { loadMessageRequestData } from "useMessageRequestPreview.tsx";

const require = arg1;
const result = require("loadMessageRequestData").fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  let lastMessageId;
  let message;
  const _require = channel;
  let obj = _loadMessageRequestData;
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: null };
  const items = [generateOldThreadCutoff];
  obj[0] = _initialize.useStateFromStores(items, () => outer1_3.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj);
  if (obj.loaded) {
    if (null != message) {
      let extractTimestampResult = DISCORD_EPOCH.extractTimestamp(message.id);
      const obj5 = DISCORD_EPOCH;
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = t(extractTimestampResult).calendar();
      const obj6 = t(extractTimestampResult);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = DISCORD_EPOCH.extractTimestamp(lastMessageId);
    const obj4 = DISCORD_EPOCH;
  }
};
export const useMessageRequestRelativeTimestampText = function useMessageRequestRelativeTimestampText(channel) {
  let lastMessageId;
  let message;
  const _require = channel;
  let obj = _loadMessageRequestData;
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: null };
  const items = [generateOldThreadCutoff];
  obj[0] = _initialize.useStateFromStores(items, () => outer1_3.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj);
  if (obj.loaded) {
    if (null != message) {
      let extractTimestampResult = DISCORD_EPOCH.extractTimestamp(message.id);
      const obj5 = DISCORD_EPOCH;
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = _getAccessibilityLabelFormatter.getTimestampString(extractTimestampResult);
      const tmpResult = _getAccessibilityLabelFormatter;
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = DISCORD_EPOCH.extractTimestamp(lastMessageId);
    const obj4 = DISCORD_EPOCH;
  }
};
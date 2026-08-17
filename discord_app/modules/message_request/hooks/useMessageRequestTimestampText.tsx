// discord_app/modules/message_request/hooks/useMessageRequestTimestampText.tsx
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import tDefault from "t" /* 3975 */;
import closure_3 from "generateOldThreadCutoff" /* 4772 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { getAccessibilityLabelFormatter } from "../../threads/ThreadUtils.tsx";
import { loadMessageRequestData } from "useMessageRequestPreview.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  const _require = channel;
  let obj = _loadMessageRequestData;
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: _initialize.useStateFromStores(items, () => closure_1_3.lastMessageId(id.id)) };
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
      str = tDefault(extractTimestampResult).calendar();
      const obj6 = tDefault(extractTimestampResult);
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
  let obj = _loadMessageRequestData;
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: _initialize.useStateFromStores(items, () => closure_1_3.lastMessageId(id.id)) };
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
      str = _getAccessibilityLabelFormatter.getTimestampString(extractTimestampResult);
      const tmpResult = _getAccessibilityLabelFormatter;
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = DISCORD_EPOCHDefault.extractTimestamp(lastMessageId);
    const obj4 = DISCORD_EPOCHDefault;
  }
};
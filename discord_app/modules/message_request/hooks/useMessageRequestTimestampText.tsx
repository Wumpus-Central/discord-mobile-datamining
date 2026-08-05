// discord_app/modules/message_request/hooks/useMessageRequestTimestampText.tsx
import generateOldThreadCutoff from "generateOldThreadCutoff";

const require = arg1;
const result = require("loadMessageRequestData").fileFinishedImporting("modules/message_request/hooks/useMessageRequestTimestampText.tsx");

export const useMessageRequestTimestampText = function useMessageRequestTimestampText(channel) {
  let lastMessageId;
  let message;
  const _require = channel;
  let obj = _require("useMessageRequestPreview.tsx");
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: null };
  const items = [generateOldThreadCutoff];
  obj[0] = _require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => outer1_3.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj);
  if (obj.loaded) {
    if (null != message) {
      let extractTimestampResult = require("../../../utils/SnowflakeUtils.tsx").extractTimestamp(message.id);
      const obj5 = require("../../../utils/SnowflakeUtils.tsx");
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = require("../../../../_runtime/03867_t.js")(extractTimestampResult).calendar();
      const obj6 = require("../../../../_runtime/03867_t.js")(extractTimestampResult);
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = require("../../../utils/SnowflakeUtils.tsx").extractTimestamp(lastMessageId);
    const obj4 = require("../../../utils/SnowflakeUtils.tsx");
  }
};
export const useMessageRequestRelativeTimestampText = function useMessageRequestRelativeTimestampText(channel) {
  let lastMessageId;
  let message;
  const _require = channel;
  let obj = _require("useMessageRequestPreview.tsx");
  const messageRequestPreview = obj.useMessageRequestPreview(channel);
  obj = { lastMessageId: null };
  const items = [generateOldThreadCutoff];
  obj[0] = _require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => outer1_3.lastMessageId(id.id));
  const merged = Object.assign(messageRequestPreview);
  ({ lastMessageId, message } = obj);
  if (obj.loaded) {
    if (null != message) {
      let extractTimestampResult = require("../../../utils/SnowflakeUtils.tsx").extractTimestamp(message.id);
      const obj5 = require("../../../utils/SnowflakeUtils.tsx");
    }
    let str = "";
    if (null != extractTimestampResult) {
      str = _require("../../threads/ThreadUtils.tsx").getTimestampString(extractTimestampResult);
      const tmpResult = _require("../../threads/ThreadUtils.tsx");
    }
    return str;
  }
  extractTimestampResult = null;
  if (null != lastMessageId) {
    extractTimestampResult = require("../../../utils/SnowflakeUtils.tsx").extractTimestamp(lastMessageId);
    const obj4 = require("../../../utils/SnowflakeUtils.tsx");
  }
};
// === Module 10246: markChannelUnread ===

// Module 10246 (markChannelUnread)
import _markUnreadDefault from "_markUnread" /* 10247 */;
import closure_3 from "generateOldThreadCutoff" /* 4575 */;
import { ReadState } from "generateOldThreadCutoff" /* 4575 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/channel/markChannelUnread.tsx");

export default function markChannelUnread(arg0) {
  const lastMessageId = ReadState.get(arg0).lastMessageId;
  if (null != lastMessageId) {
    _markUnreadDefault(arg0, lastMessageId);
  }
};
export const useCanMarkChannelUnread = function useCanMarkChannelUnread(channel) {
  const _require = channel;
  const items = [closure_3];
  return _require(504).useStateFromStores(items, () => closure_1_3.canBeUnread(id.id) && closure_1_3.hasLastMessage(id.id) && !id.isCategory());
};
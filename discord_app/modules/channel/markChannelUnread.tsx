// === Module 10345: markChannelUnread ===

// Module 10345 (markChannelUnread)
import _markUnreadDefault from "_markUnread" /* 10346 */;
import closure_3 from "generateOldThreadCutoff" /* 4493 */;
import { ReadState } from "generateOldThreadCutoff" /* 4493 */;

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
  return _require(586).useStateFromStores(items, () => closure_1_3.canBeUnread(id.id) && closure_1_3.hasLastMessage(id.id) && !id.isCategory());
};
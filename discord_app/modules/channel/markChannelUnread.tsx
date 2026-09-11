// === Module 10335: markChannelUnread ===

// Module 10335 (markChannelUnread)
import markUnreadDefault from "markUnread" /* 10336 */;
import ReadStateStore from "ReadStateStore" /* 4621 */;

const require = fn;
const ReadState = fn(4621).ReadState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/markChannelUnread.tsx");

export default function markChannelUnread(arg0) {
  const lastMessageId = ReadState.get(arg0).lastMessageId;
  if (null != lastMessageId) {
    markUnreadDefault(arg0, lastMessageId);
  }
};
export const useCanMarkChannelUnread = function useCanMarkChannelUnread(channel) {
  _require = channel;
  const items = [ReadStateStore];
  return require("initialize").useStateFromStores(items, () => ReadStateStore.canBeUnread(id.id) && ReadStateStore.hasLastMessage(id.id) && !id.isCategory());
};
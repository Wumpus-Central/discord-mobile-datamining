// === Module 9709: markChannelUnread ===

// Module 9709 (markChannelUnread)
import markUnreadDefault from "markUnread" /* 9710 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;

const require = globalThis.__r;

const require = fn;
const ReadState = fn(4851).ReadState;
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
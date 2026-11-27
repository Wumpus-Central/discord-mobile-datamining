// === Module 10760: markChannelUnread ===

// Module 10760 (markChannelUnread)
import markUnreadDefault from "markUnread" /* 10761 */;
import ReadStateStore from "ReadStateStore" /* 6932 */;

const require = globalThis.__r;

const require = fn;
const ReadState = fn(6932).ReadState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/markChannelUnread.tsx");

export default function markChannelUnread(arg0) {
  const lastMessageId = ReadState.get(arg0).lastMessageId;
  if (null != lastMessageId) {
    markUnreadDefault(arg0, lastMessageId);
  }
};
export function useCanMarkChannelUnread(channel) {
  _require = channel;
  items = [ReadStateStore];
  return require("initialize").useStateFromStores(items, () => ReadStateStore.canBeUnread(id.id) && ReadStateStore.hasLastMessage(id.id) && !id.isCategory());
}
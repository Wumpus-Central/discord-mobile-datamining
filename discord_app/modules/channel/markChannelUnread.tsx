// discord_app/modules/channel/markChannelUnread.tsx
import markUnreadDefault from "../messages/markUnread.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";

const require = fn;
const ReadState = fn(4575).ReadState;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/markChannelUnread.tsx");

export default function markChannelUnread(arg0) {
  const lastMessageId = ReadState.get(arg0).lastMessageId;
  if (null != lastMessageId) {
    markUnreadDefault(arg0, lastMessageId);
  }
}
export const useCanMarkChannelUnread = function useCanMarkChannelUnread(channel) {
  _require = channel;
  const items = [ReadStateStore];
  return require("initialize").useStateFromStores(
    items,
    () => ReadStateStore.canBeUnread(id.id) && ReadStateStore.hasLastMessage(id.id) && !id.isCategory(),
  );
};

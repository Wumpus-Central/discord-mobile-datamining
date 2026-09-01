// discord_app/modules/channel/markChannelUnread.tsx
import _markUnreadDefault from "../messages/markUnread.tsx";
import closure_3 from "../../stores/ReadStateStore.tsx";
import { ReadState } from "../../stores/ReadStateStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/channel/markChannelUnread.tsx");

export default function markChannelUnread(arg0) {
  const lastMessageId = ReadState.get(arg0).lastMessageId;
  if (null != lastMessageId) {
    _markUnreadDefault(arg0, lastMessageId);
  }
}
export const useCanMarkChannelUnread = function useCanMarkChannelUnread(channel) {
  const _require = channel;
  const items = [closure_3];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(
    items,
    () => closure_1_3.canBeUnread(id.id) && closure_1_3.hasLastMessage(id.id) && !id.isCategory(),
  );
};

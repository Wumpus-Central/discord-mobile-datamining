// === Module 10534: useIsViewingActivity ===

// Module 10534 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 10522 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 10525 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6501 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4970).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4970);
  items = [ChannelRTCStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelRTCStore.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
}
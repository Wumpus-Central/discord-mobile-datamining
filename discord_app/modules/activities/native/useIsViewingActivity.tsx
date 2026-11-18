// === Module 10614: useIsViewingActivity ===

// Module 10614 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 10602 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 10605 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6528 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4999).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4999);
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
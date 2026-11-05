// === Module 11918: useIsViewingActivity ===

// Module 11918 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11905 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11908 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6981 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(5324).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(5324);
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
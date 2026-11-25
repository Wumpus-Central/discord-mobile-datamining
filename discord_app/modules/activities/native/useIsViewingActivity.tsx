// === Module 9987: useIsViewingActivity ===

// Module 9987 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9972 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9975 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6902 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(5188).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(5188);
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
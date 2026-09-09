// === Module 9525: useIsViewingActivity ===

// Module 9525 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9498 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9507 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4590 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4431).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4431);
  const items = [ChannelRTCStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelRTCStore.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
};
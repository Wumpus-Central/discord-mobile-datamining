// === Module 9493: useIsViewingActivity ===

// Module 9493 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9466 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9475 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4576 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4417).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4417);
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
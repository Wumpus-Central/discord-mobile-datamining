// === Module 9044: useIsViewingActivity ===

// Module 9044 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9028 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9031 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4861 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4721).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4721);
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
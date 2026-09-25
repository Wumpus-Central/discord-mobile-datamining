// === Module 8843: useIsViewingActivity ===

// Module 8843 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 8827 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 8830 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4845 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4688).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4688);
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
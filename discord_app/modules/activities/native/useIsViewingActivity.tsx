// === Module 8851: useIsViewingActivity ===

// Module 8851 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 8835 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 8838 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4692).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4692);
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
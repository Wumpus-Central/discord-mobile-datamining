// === Module 9745: useIsViewingActivity ===

// Module 9745 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9729 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9732 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4845 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4686).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4686);
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
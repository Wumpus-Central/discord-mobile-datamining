// === Module 9731: useIsViewingActivity ===

// Module 9731 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 9704 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9713 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4738 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4579).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(4579);
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
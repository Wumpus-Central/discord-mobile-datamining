// === Module 11712: useIsViewingActivity ===

// Module 11712 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11699 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11702 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6843 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(5198).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(5198);
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
}
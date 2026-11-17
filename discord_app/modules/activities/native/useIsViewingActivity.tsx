// === Module 11332: useIsViewingActivity ===

// Module 11332 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11320 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11323 */;
import ChannelRTCStore from "ChannelRTCStore" /* 7024 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(5486).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(5486);
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
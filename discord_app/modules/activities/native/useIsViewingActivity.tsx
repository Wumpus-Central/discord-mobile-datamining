// === Module 11849: useIsViewingActivity ===

// Module 11849 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11836 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11839 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6963 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(5321).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(5321);
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
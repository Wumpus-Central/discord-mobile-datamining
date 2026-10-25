// === Module 11376: useIsViewingActivity ===

// Module 11376 (useIsViewingActivity)
import ChannelCallModalDefault from "ChannelCallModal" /* 11363 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 11366 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6772 */;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsViewingActivity(channelId) {
  const cResult = channelId(576).c(4);
  channelId = channelId.channelId;
  let tmp4 = useIsActivityFocusedDefault(channelId);
  const obj = channelId(576);
  const tmp = channelId;
  const isModalOpen = channelId(5150).useIsModalOpen(ChannelCallModalDefault);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelRTCStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function c() {
      return ChannelRTCStore.getChatOpen(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const obj2 = channelId(5150);
  const stateFromStores = tmp(504).useStateFromStores(first, tmp8, tmp9);
  if (tmp4) {
    tmp4 = isModalOpen;
  }
  if (tmp4) {
    tmp4 = !stateFromStores;
  }
  return tmp4;
}) : (function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(5150).useIsModalOpen(ChannelCallModalDefault);
  const obj = channelId(5150);
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
});
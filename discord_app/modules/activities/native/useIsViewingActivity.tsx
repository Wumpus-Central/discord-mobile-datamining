// === Module 9555: useIsViewingActivity ===

// Module 9555 (useIsViewingActivity)
import ChannelCallCameraPreviewDefault from "ChannelCallCameraPreview" /* 9539 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 9542 */;
import closure_3 from "getParticipants" /* 4494 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4332).useIsModalOpen(ChannelCallCameraPreviewDefault);
  const obj = channelId(4332);
  const items = [closure_3];
  const items1 = [channelId];
  const stateFromStores = channelId(586).useStateFromStores(items, () => closure_1_3.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
};
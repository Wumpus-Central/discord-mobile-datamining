// discord_app/modules/activities/native/useIsViewingActivity.tsx
import ChannelCallCameraPreviewDefault from "ChannelCallCameraPreview" /* 8668 */;
import useIsActivityFocusedDefault from "useIsActivityFocused" /* 8679 */;
import closure_3 from "getParticipants" /* 4773 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocusedDefault(channelId);
  const isModalOpen = channelId(4229).useIsModalOpen(ChannelCallCameraPreviewDefault);
  const obj = channelId(4229);
  const items = [closure_3];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => closure_1_3.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
};
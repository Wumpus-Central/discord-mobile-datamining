// discord_app/modules/activities/native/useIsViewingActivity.tsx
import getParticipants from "getParticipants";
import { ChannelCallCameraPreview } from "../../video_calls/native/components/ChannelCallModal.tsx";
import { useIsActivityFocused } from "../useIsActivityFocused.tsx";

const require = arg1;
const result = require("navigationToRootTabHelper").fileFinishedImporting("modules/activities/native/useIsViewingActivity.tsx");

export const useIsViewingActivity = function useIsViewingActivity(channelId) {
  channelId = channelId.channelId;
  let tmp = useIsActivityFocused(channelId);
  const isModalOpen = channelId(4152).useIsModalOpen(ChannelCallCameraPreview);
  const obj = channelId(4152);
  const items = [getParticipants];
  const items1 = [channelId];
  const stateFromStores = channelId(589).useStateFromStores(items, () => outer1_3.getChatOpen(channelId), items1);
  if (tmp) {
    tmp = isModalOpen;
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  return tmp;
};
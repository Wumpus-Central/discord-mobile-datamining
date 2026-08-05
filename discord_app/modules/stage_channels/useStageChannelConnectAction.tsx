import { useCurrentUserStageRoles } from "useCurrentUserStageRoles.tsx";
import { useStageChannelIsLive } from "useStateChannelIsLive.tsx";
// discord_app/modules/stage_channels/useStageChannelConnectAction.tsx
const obj = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
const result = require("set").fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default function useStageChannelConnectAction(arg0) {
  if (!tmp) {
    if (useCurrentUserStageRoles(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
};
export const ChannelConnectAction = obj;
export const useStageChannelStartEvent = function useStageChannelStartEvent(id) {
  return { isLive: useStageChannelIsLive(id), isModerator: useCurrentUserStageRoles(id, true).moderator };
};
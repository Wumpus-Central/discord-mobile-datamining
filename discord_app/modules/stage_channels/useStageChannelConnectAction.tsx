// === Module 9744: useStageChannelConnectAction ===

// Module 9744 (useStageChannelConnectAction)
import useStateChannelIsLiveDefault from "useStateChannelIsLive" /* 8461 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 9740 */;
import size from "module_2" /* 2 */;

const ChannelConnectAction = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default function useStageChannelConnectAction(arg0) {
  if (!tmp) {
    if (useCurrentUserStageRolesDefault(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
  tmp = useStateChannelIsLiveDefault(arg0);
};
export { ChannelConnectAction };
export const useStageChannelStartEvent = function useStageChannelStartEvent(id) {
  return { isLive: useStateChannelIsLiveDefault(id), isModerator: useCurrentUserStageRolesDefault(id, true).moderator };
};
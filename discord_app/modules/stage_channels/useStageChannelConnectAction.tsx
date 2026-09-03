// === Module 9660: useStageChannelConnectAction ===

// Module 9660 (useStageChannelConnectAction)
import set from "set" /* 2 */;
import useStageChannelIsLiveDefault from "useStageChannelIsLive" /* 8686 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 9656 */;

const obj = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
const result = set.fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default function useStageChannelConnectAction(arg0) {
  if (!tmp) {
    if (useCurrentUserStageRolesDefault(arg0, true).moderator) {
      let NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
};
export const ChannelConnectAction = obj;
export const useStageChannelStartEvent = function useStageChannelStartEvent(id) {
  return { isLive: useStageChannelIsLiveDefault(id), isModerator: useCurrentUserStageRolesDefault(id, true).moderator };
};
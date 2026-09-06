// discord_app/modules/stage_channels/useStageChannelConnectAction.tsx
import useStateChannelIsLiveDefault from "useStateChannelIsLive.tsx";
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
}
export { ChannelConnectAction };
export const useStageChannelStartEvent = function useStageChannelStartEvent(id) {
  return { isLive: useStateChannelIsLiveDefault(id), isModerator: useCurrentUserStageRolesDefault(id, true).moderator };
};

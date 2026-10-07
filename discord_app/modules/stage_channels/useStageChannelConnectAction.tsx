// discord_app/modules/stage_channels/useStageChannelConnectAction.tsx
import c from "../../../_runtime/00576_c.js";
import useStateChannelIsLiveDefault from "useStateChannelIsLive.tsx";
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const ChannelConnectAction = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(3);
      const tmp2 = useStateChannelIsLiveDefault(arg0);
      const moderator = useCurrentUserStageRolesDefault(arg0, true).moderator;
      if (cResult[0] === tmp2) {
        if (cResult[1] === moderator) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const obj2 = { isLive: tmp2, isModerator: moderator };
      cResult[0] = tmp2;
      cResult[1] = moderator;
      cResult[2] = obj2;
      tmp3 = obj2;
    }
  : (arg0) => ({
      isLive: useStateChannelIsLiveDefault(arg0),
      isModerator: useCurrentUserStageRolesDefault(arg0, true).moderator,
    });
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      if (!tmp) {
        if (useCurrentUserStageRolesDefault(arg0, true).moderator) {
          let NORMAL = obj.START_EVENT;
        }
        return NORMAL;
      }
      NORMAL = obj.NORMAL;
      tmp = useStateChannelIsLiveDefault(arg0);
    }
  : (arg0) => {
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
export const useStageChannelStartEvent = tmp2;

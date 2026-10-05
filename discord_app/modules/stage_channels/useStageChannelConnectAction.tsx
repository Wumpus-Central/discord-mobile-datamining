// === Module 9172: useStageChannelConnectAction ===

// Module 9172 (useStageChannelConnectAction)
import react from "react" /* 576 */;
import useStateChannelIsLiveDefault from "useStateChannelIsLive" /* 8072 */;
import useCurrentUserStageRolesDefault from "useCurrentUserStageRoles" /* 9168 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ChannelConnectAction = { NORMAL: 0, [0]: "NORMAL", START_EVENT: 1, [1]: "START_EVENT" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react;
  const cResult = obj.c(3);
  const tmp2 = useStateChannelIsLiveDefault(arg0);
  const moderator = useCurrentUserStageRolesDefault(arg0, true).moderator;
  if (cResult[0] === tmp2) {
    let tmp3;
    if (cResult[1] === moderator) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const obj2 = { isLive: tmp2, isModerator: moderator };
  cResult[0] = tmp2;
  cResult[1] = moderator;
  cResult[2] = obj2;
  tmp3 = obj2;
}) : ((arg0) => {
  const obj = { isLive: useStateChannelIsLiveDefault(arg0), isModerator: useCurrentUserStageRolesDefault(arg0, true).moderator };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const tmp = useStateChannelIsLiveDefault(arg0);
  if (!tmp) {
    let NORMAL;
    if (useCurrentUserStageRolesDefault(arg0, true).moderator) {
      NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
}) : ((arg0) => {
  const tmp = useStateChannelIsLiveDefault(arg0);
  if (!tmp) {
    let NORMAL;
    if (useCurrentUserStageRolesDefault(arg0, true).moderator) {
      NORMAL = obj.START_EVENT;
    }
    return NORMAL;
  }
  NORMAL = obj.NORMAL;
});
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelConnectAction.tsx");

export default tmp3;
export { ChannelConnectAction };
export const useStageChannelStartEvent = tmp2;
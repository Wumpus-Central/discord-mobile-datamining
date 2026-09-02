// === Module 10138: useMyCurrentStageChannelRole ===

// Module 10138 (useMyCurrentStageChannelRole)
import closure_2 from "fetchFingerprint" /* 1215 */;
import closure_3 from "handleConnectionOpen" /* 1980 */;
import closure_4 from "buildStageChannelUserRoles" /* 5373 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannelRole.tsx");

export default function useMyCurrentStageChannelRole(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3, closure_4];
  const items1 = [arg0];
  return _require(586).useStateFromStores(items, () => {
    const id = closure_1_2.getId();
    let permissionsForUser = null;
    if (closure_1_3.getVoiceChannelId() === closure_0) {
      permissionsForUser = closure_1_4.getPermissionsForUser(id, tmp2);
    }
    return permissionsForUser;
  }, items1);
};
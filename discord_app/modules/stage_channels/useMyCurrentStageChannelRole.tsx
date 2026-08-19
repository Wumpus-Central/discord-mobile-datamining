// === Module 12591: useMyCurrentStageChannelRole ===

// Module 12591 (useMyCurrentStageChannelRole)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import buildStageChannelUserRoles from "buildStageChannelUserRoles" /* 4990 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannelRole.tsx");

export default function useMyCurrentStageChannelRole(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3, closure_4];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    const id = closure_1_2.getId();
    let permissionsForUser = null;
    if (closure_1_3.getVoiceChannelId() === closure_0) {
      permissionsForUser = closure_1_4.getPermissionsForUser(id, tmp2);
    }
    return permissionsForUser;
  }, items1);
};
// === Module 10847: useCurrentUserStageRoles ===

// Module 10847 (useCurrentUserStageRoles)
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "buildStageChannelUserRoles" /* 5246 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useCurrentUserStageRoles.tsx");

export default function useCurrentUserStageRoles(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [closure_3, closure_2];
  const items1 = [arg0, flag];
  return _require(flag[2]).useStateFromStoresObject(items, () => closure_1_3.getPermissionsForUser(closure_1_2.getId(), closure_0, flag), items1);
};
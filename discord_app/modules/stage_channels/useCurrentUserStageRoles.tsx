// === Module 10695: useCurrentUserStageRoles ===

// Module 10695 (useCurrentUserStageRoles)
import fetchFingerprint from "fetchFingerprint";
import buildStageChannelUserRoles from "buildStageChannelUserRoles";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useCurrentUserStageRoles.tsx");

export default function useCurrentUserStageRoles(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [buildStageChannelUserRoles, fetchFingerprint];
  const items1 = [arg0, flag];
  return _require(flag[2]).useStateFromStoresObject(items, () => outer1_3.getPermissionsForUser(outer1_2.getId(), closure_0, flag), items1);
};
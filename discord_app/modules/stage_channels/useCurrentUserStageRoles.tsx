// discord_app/modules/stage_channels/useCurrentUserStageRoles.tsx
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import buildStageChannelUserRoles from "StageChannelRoleStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useCurrentUserStageRoles.tsx");

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
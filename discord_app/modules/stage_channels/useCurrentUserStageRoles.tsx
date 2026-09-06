// discord_app/modules/stage_channels/useCurrentUserStageRoles.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import StageChannelRoleStore from "StageChannelRoleStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useCurrentUserStageRoles.tsx");

export default function useCurrentUserStageRoles(arg0) {
  _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [StageChannelRoleStore, AuthenticationStore];
  const items1 = [arg0, flag];
  return require("initialize").useStateFromStoresObject(
    items,
    () => StageChannelRoleStore.getPermissionsForUser(AuthenticationStore.getId(), closure_0, flag),
    items1,
  );
}

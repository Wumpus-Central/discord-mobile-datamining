// discord_app/modules/stage_channels/useMyCurrentStageChannelRole.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import StageChannelRoleStore from "StageChannelRoleStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannelRole.tsx");

export default function useMyCurrentStageChannelRole(arg0) {
  _require = arg0;
  const items = [AuthenticationStore, SelectedChannelStore, StageChannelRoleStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const id = AuthenticationStore.getId();
      let permissionsForUser = null;
      if (SelectedChannelStore.getVoiceChannelId() === closure_0) {
        permissionsForUser = StageChannelRoleStore.getPermissionsForUser(id, tmp2);
      }
      return permissionsForUser;
    },
    items1,
  );
}

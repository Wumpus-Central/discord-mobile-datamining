// discord_app/modules/stage_channels/useMyCurrentStageChannelRole.tsx
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import buildStageChannelUserRoles from "StageChannelRoleStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useMyCurrentStageChannelRole.tsx");

export default function useMyCurrentStageChannelRole(arg0) {
  const _require = arg0;
  const items = [closure_2, closure_3, closure_4];
  const items1 = [arg0];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const id = closure_1_2.getId();
    let permissionsForUser = null;
    if (closure_1_3.getVoiceChannelId() === closure_0) {
      permissionsForUser = closure_1_4.getPermissionsForUser(id, tmp2);
    }
    return permissionsForUser;
  }, items1);
};
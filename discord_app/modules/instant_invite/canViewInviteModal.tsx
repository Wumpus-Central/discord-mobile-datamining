// discord_app/modules/instant_invite/canViewInviteModal.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/instant_invite/canViewInviteModal.tsx");

export const canViewInviteModal = function canViewInviteModal(
  PermissionStore,
  guild,
  defaultChannel,
  stageInstanceByChannel,
) {
  let tmp = defaultChannel;
  if (defaultChannel == null) {
    tmp = guild;
  }
  let canResult = null != tmp;
  if (canResult) {
    canResult = PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, tmp);
  }
  if (!canResult) {
    canResult = null != guild && null != guild.vanityURLCode;
    const tmp5 = null != guild && null != guild.vanityURLCode;
  }
  if (!canResult) {
    let invite_code;
    if (stageInstanceByChannel != null) {
      invite_code = stageInstanceByChannel.invite_code;
    }
    canResult = null != invite_code;
  }
  return canResult;
};

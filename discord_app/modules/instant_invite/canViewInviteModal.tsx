// discord_app/modules/instant_invite/canViewInviteModal.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";

const Permissions = ME.Permissions;
const result = obj132.fileFinishedImporting("modules/instant_invite/canViewInviteModal.tsx");

export const canViewInviteModal = function canViewInviteModal(closure_6, guild, closure_0, stageInstanceByChannel) {
  let tmp = closure_0;
  if (closure_0 == null) {
    tmp = guild;
  }
  let canResult = null != tmp;
  if (canResult) {
    canResult = closure_6.can(Permissions.CREATE_INSTANT_INVITE, tmp);
  }
  if (!canResult) {
    canResult = null != guild && null != guild.vanityURLCode;
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
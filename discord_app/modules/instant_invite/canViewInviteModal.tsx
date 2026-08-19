// === Module 8802: canViewInviteModal ===

// Module 8802 (canViewInviteModal)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const Permissions = ME.Permissions;
const result = set.fileFinishedImporting("modules/instant_invite/canViewInviteModal.tsx");

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
// === Module 16919: handleInviteData ===

// Module 16919 (handleInviteData)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import hasFlag from "hasFlag" /* 1399 */;
import initializeDefault from "initialize" /* 5454 */;
import set2 from "set" /* 8631 */;
import _modDef12765 from "module_12765" /* 12765 */;
import inviteGuildHasPendingMemberDisabledVerification from "inviteGuildHasPendingMemberDisabledVerification" /* 12766 */;

function handleInviteData(invite) {
  const guild = invite.invite.guild;
  let num = invite.invite.flags;
  if (num == null) {
    num = 0;
  }
  if (null != guild) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      if (features != null) {
        hasItem = features.includes(GuildFeatures.HUB);
      }
    }
    if (hasItem) {
      _modDef12765.onOpenHubInvite(invite.invite);
      const obj5 = _modDef12765;
    }
  }
  let new_member = invite.invite.new_member;
  if (new_member) {
    let hasFlagResult = hasFlag.hasFlag(num, set2.GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      hasFlagResult = tmp3(1399).hasFlag(num, tmp3(8631).GuildInviteFlags.IS_APPLICATION_BYPASS);
      const tmp3Result = tmp3(1399);
    }
    new_member = !hasFlagResult;
    const obj = hasFlag;
  }
  if (new_member) {
    new_member = null != guild;
  }
  if (new_member) {
    new_member = inviteGuildHasPendingMemberDisabledVerification.inviteGuildHasPendingMemberDisabledVerification(guild);
    const obj3 = inviteGuildHasPendingMemberDisabledVerification;
  }
  if (new_member) {
    const result = inviteGuildHasPendingMemberDisabledVerification.openVerificationModalOrTransitionToApplication(guild.id);
    const obj4 = inviteGuildHasPendingMemberDisabledVerification;
  }
}
const GuildFeatures = ME.GuildFeatures;
initializeDefault;
let prototype = function GuildVerificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { INVITE_ACCEPT_SUCCESS: handleInviteData };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/guild_verification/GuildVerificationManager.tsx");

export default prototype;
// === Module 16589: handleInviteData ===

// Module 16589 (handleInviteData)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import hasFlag from "hasFlag" /* 1403 */;
import initializeDefault from "initialize" /* 5038 */;
import set from "set" /* 8056 */;
import _modDef12831 from "module_12831" /* 12831 */;
import inviteGuildHasPendingMemberDisabledVerification from "inviteGuildHasPendingMemberDisabledVerification" /* 12832 */;

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
      _modDef12831.onOpenHubInvite(invite.invite);
    }
  }
  let new_member = invite.invite.new_member;
  if (new_member) {
    let hasFlagResult = hasFlag.hasFlag(num, set.GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      hasFlagResult = hasFlag.hasFlag(num, set.GuildInviteFlags.IS_APPLICATION_BYPASS);
      const tmp3Result = hasFlag;
    }
    new_member = !hasFlagResult;
  }
  if (new_member) {
    new_member = null != guild;
  }
  if (new_member) {
    new_member = inviteGuildHasPendingMemberDisabledVerification.inviteGuildHasPendingMemberDisabledVerification(guild);
  }
  if (new_member) {
    const result = inviteGuildHasPendingMemberDisabledVerification.openVerificationModalOrTransitionToApplication(guild.id);
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
let result = obj132.fileFinishedImporting("modules/guild_verification/GuildVerificationManager.tsx");

export default prototype;
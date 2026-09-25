// === Module 17112: GuildVerificationManager ===

// Module 17112 (GuildVerificationManager)
import Constants from "Constants" /* 1074 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildInviteFlags from "GuildInviteFlags" /* 7832 */;
import HubUtilsDefault from "HubUtils" /* 12472 */;
import GuildVerificationUtils from "GuildVerificationUtils" /* 12473 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6534 */;
import size from "module_2" /* 2 */;

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
      HubUtilsDefault.onOpenHubInvite(invite.invite);
    }
  }
  let new_member = invite.invite.new_member;
  if (new_member) {
    let hasFlagResult = FlagUtils.hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      hasFlagResult = FlagUtils.hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_APPLICATION_BYPASS);
      const tmp3Result = FlagUtils;
    }
    new_member = !hasFlagResult;
  }
  if (new_member) {
    new_member = null != guild;
  }
  if (new_member) {
    new_member = GuildVerificationUtils.inviteGuildHasPendingMemberDisabledVerification(guild);
  }
  if (new_member) {
    const result = GuildVerificationUtils.openVerificationModalOrTransitionToApplication(guild.id);
  }
}
const GuildFeatures = Constants.GuildFeatures;
const prototype = function GuildVerificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { INVITE_ACCEPT_SUCCESS: handleInviteData };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
let result = size.fileFinishedImporting("modules/guild_verification/GuildVerificationManager.tsx");

export default prototype1;
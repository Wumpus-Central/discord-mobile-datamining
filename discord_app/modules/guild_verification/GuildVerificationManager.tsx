// === Module 16291: handleInviteData ===

// Module 16291 (handleInviteData)
import { GuildFeatures } from "ME";
import "initialize";

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
      importDefault(12542).onOpenHubInvite(invite.invite);
      const obj5 = importDefault(12542);
    }
  }
  let new_member = invite.invite.new_member;
  if (new_member) {
    let hasFlagResult = require(1384) /* hasFlag */.hasFlag(num, require(7683) /* set */.GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      hasFlagResult = tmp3(1384).hasFlag(num, tmp3(7683).GuildInviteFlags.IS_APPLICATION_BYPASS);
      const tmp3Result = tmp3(1384);
    }
    new_member = !hasFlagResult;
    const obj = require(1384) /* hasFlag */;
  }
  if (new_member) {
    new_member = null != guild;
  }
  if (new_member) {
    new_member = require(12543) /* inviteGuildHasPendingMemberDisabledVerification */.inviteGuildHasPendingMemberDisabledVerification(guild);
    const obj3 = require(12543) /* inviteGuildHasPendingMemberDisabledVerification */;
  }
  if (new_member) {
    const result = require(12543) /* inviteGuildHasPendingMemberDisabledVerification */.openVerificationModalOrTransitionToApplication(guild.id);
    const obj4 = require(12543) /* inviteGuildHasPendingMemberDisabledVerification */;
  }
}
let prototype = function GuildVerificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { INVITE_ACCEPT_SUCCESS: handleInviteData };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("hasFlag").fileFinishedImporting("modules/guild_verification/GuildVerificationManager.tsx");

export default prototype;
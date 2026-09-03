// discord_app/modules/guild_verification/GuildVerificationManager.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import set2 from "../../../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx";
import _modDef13031 from "../hub/HubUtils.native.tsx";
import inviteGuildHasPendingMemberDisabledVerification from "GuildVerificationUtils.tsx";

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
      _modDef13031.onOpenHubInvite(invite.invite);
      const obj5 = _modDef13031;
    }
  }
  let new_member = invite.invite.new_member;
  if (new_member) {
    let hasFlagResult = hasFlag.hasFlag(num, set2.GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      hasFlagResult = tmp3(1398).hasFlag(num, tmp3(8682).GuildInviteFlags.IS_APPLICATION_BYPASS);
      const tmp3Result = tmp3(1398);
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
    const result = inviteGuildHasPendingMemberDisabledVerification.openVerificationModalOrTransitionToApplication(
      guild.id,
    );
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
class prototype extends tmp2 {}
prototype = new prototype();
let result = set.fileFinishedImporting("modules/guild_verification/GuildVerificationManager.tsx");

export default prototype;

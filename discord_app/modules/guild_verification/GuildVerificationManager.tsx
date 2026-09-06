// discord_app/modules/guild_verification/GuildVerificationManager.tsx
import Constants from "../../Constants.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import GuildInviteFlags from "../../../discord_common/js/shared/shared-constants/GuildInviteFlags.tsx";
import HubUtilsDefault from "../hub/HubUtils.native.tsx";
import GuildVerificationUtils from "GuildVerificationUtils.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
let prototype = function GuildVerificationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { INVITE_ACCEPT_SUCCESS: handleInviteData };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
let result = size.fileFinishedImporting("modules/guild_verification/GuildVerificationManager.tsx");

export default prototype;

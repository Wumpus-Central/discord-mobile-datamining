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
      const obj5 = HubUtilsDefault;
      obj5.onOpenHubInvite(invite.invite);
    }
  }
  let new_member = invite.invite.new_member;
  if (new_member) {
    const obj = FlagUtils;
    let hasFlagResult = obj.hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_GUEST_INVITE);
    if (!hasFlagResult) {
      const tmp3Result = FlagUtils;
      hasFlagResult = tmp3Result.hasFlag(num, GuildInviteFlags.GuildInviteFlags.IS_APPLICATION_BYPASS);
    }
    new_member = !hasFlagResult;
  }
  if (new_member) {
    new_member = null != guild;
  }
  if (new_member) {
    const obj3 = GuildVerificationUtils;
    new_member = obj3.inviteGuildHasPendingMemberDisabledVerification(guild);
  }
  if (new_member) {
    const obj4 = GuildVerificationUtils;
    const result = obj4.openVerificationModalOrTransitionToApplication(guild.id);
  }
}
const GuildFeatures = Constants.GuildFeatures;
class GuildVerificationManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { INVITE_ACCEPT_SUCCESS: handleInviteData };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const guildVerificationManager = new GuildVerificationManager();
let result = size.fileFinishedImporting("modules/guild_verification/GuildVerificationManager.tsx");

export default guildVerificationManager;

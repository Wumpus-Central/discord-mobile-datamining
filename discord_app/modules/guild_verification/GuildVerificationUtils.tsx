// discord_app/modules/guild_verification/GuildVerificationUtils.tsx
import MAX_RESULTS_PER_PAGE from "../guild_member_verification/MemberVerificationTypes.tsx";
import transitionToMemberVerification from "../guild_member_verification/transitionToMemberVerification.native.tsx";
import openMemberVerificationModal from "../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import closure_2 from "../guild_member_verification/UserGuildJoinRequestStore.tsx";
import { GuildFeatures } from "../../Constants.tsx";

require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_verification/GuildVerificationUtils.tsx");

export const inviteGuildHasPendingMemberDisabledVerification = function inviteGuildHasPendingMemberDisabledVerification(
  guild,
) {
  const features = guild.features;
  let hasItem;
  if (features != null) {
    hasItem = features.includes(GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  if (hasItem) {
    const features2 = guild.features;
    let hasItem1;
    if (features2 != null) {
      hasItem1 = features2.includes(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    hasItem = hasItem1;
  }
  return hasItem;
};
export const openVerificationModalOrTransitionToApplication = function openVerificationModalOrTransitionToApplication(
  id,
) {
  request = request.getRequest(id);
  if (null != request) {
    if (request.applicationStatus !== MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.STARTED) {
      const result = transitionToMemberVerification.transitionToMemberVerification(id);
      const tmp2Result = transitionToMemberVerification;
    }
  }
  const result1 = openMemberVerificationModal.openMemberVerificationModal(id);
};

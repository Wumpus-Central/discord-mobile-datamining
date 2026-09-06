// discord_app/modules/guild_verification/GuildVerificationUtils.tsx
import MemberVerificationTypes from "../guild_member_verification/MemberVerificationTypes.tsx";
import transitionToMemberVerification from "../guild_member_verification/transitionToMemberVerification.native.tsx";
import MemberVerificationModalActionCreators from "../guild_member_verification/MemberVerificationModalActionCreators.tsx";
import UserGuildJoinRequestStore from "../guild_member_verification/UserGuildJoinRequestStore.tsx";

require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_verification/GuildVerificationUtils.tsx");

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
  const request = UserGuildJoinRequestStore.getRequest(id);
  if (null != request) {
    if (request.applicationStatus !== MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED) {
      const result = transitionToMemberVerification.transitionToMemberVerification(id);
      const tmp2Result = transitionToMemberVerification;
    }
  }
  const result1 = MemberVerificationModalActionCreators.openMemberVerificationModal(id);
};

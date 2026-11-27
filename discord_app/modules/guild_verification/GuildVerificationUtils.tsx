// === Module 14714: GuildVerificationUtils ===

// Module 14714 (GuildVerificationUtils)
import MemberVerificationTypes from "MemberVerificationTypes" /* 5079 */;
import transitionToMemberVerification from "transitionToMemberVerification" /* 6996 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 7031 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5077 */;

require = fn;
const GuildFeatures = fn(1071).GuildFeatures;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_verification/GuildVerificationUtils.tsx");

export function inviteGuildHasPendingMemberDisabledVerification(guild) {
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
}
export function openVerificationModalOrTransitionToApplication(id) {
  const request = UserGuildJoinRequestStore.getRequest(id);
  if (null != request) {
    if (request.applicationStatus !== MemberVerificationTypes.GuildJoinRequestApplicationStatuses.STARTED) {
      const result = transitionToMemberVerification.transitionToMemberVerification(id);
      const tmp2Result = transitionToMemberVerification;
    }
  }
  const result1 = MemberVerificationModalActionCreators.openMemberVerificationModal(id);
}
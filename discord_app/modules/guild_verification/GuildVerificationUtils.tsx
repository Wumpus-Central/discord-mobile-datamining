// === Module 13032: inviteGuildHasPendingMemberDisabledVerification ===

// Module 13032 (inviteGuildHasPendingMemberDisabledVerification)
import transitionTo from "transitionTo" /* 1219 */;
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4302 */;
import openMemberVerificationModal from "openMemberVerificationModal" /* 7658 */;
import closure_2 from "handleGatewayJoinRequestUpdate" /* 4300 */;
import ME from "ME" /* 673 */;

require = arg1;
({ GuildFeatures: c3, Routes: c4 } = ME);
let result = require("set").fileFinishedImporting("modules/guild_verification/GuildVerificationUtils.tsx");

export const inviteGuildHasPendingMemberDisabledVerification = function inviteGuildHasPendingMemberDisabledVerification(guild) {
  const features = guild.features;
  let hasItem;
  if (features != null) {
    hasItem = features.includes(constants.MEMBER_VERIFICATION_GATE_ENABLED);
  }
  if (hasItem) {
    const features2 = guild.features;
    let hasItem1;
    if (features2 != null) {
      hasItem1 = features2.includes(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    hasItem = hasItem1;
  }
  return hasItem;
};
export const openVerificationModalOrTransitionToApplication = function openVerificationModalOrTransitionToApplication(id) {
  request = request.getRequest(id);
  if (null != request) {
    if (request.applicationStatus !== MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.STARTED) {
      transitionTo.transitionTo(closure_4.GUILD_MEMBER_VERIFICATION(id));
      const tmp2Result = transitionTo;
    }
  }
  const result = openMemberVerificationModal.openMemberVerificationModal(id);
};
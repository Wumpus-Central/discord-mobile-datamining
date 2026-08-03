// === Module 12445: inviteGuildHasPendingMemberDisabledVerification ===

// Module 12445 (inviteGuildHasPendingMemberDisabledVerification)
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate";
import ME from "ME";

let c3;
let c4;
const require = arg1;
({ GuildFeatures: c3, Routes: c4 } = ME);
let result = require("MAX_RESULTS_PER_PAGE").fileFinishedImporting("modules/guild_verification/GuildVerificationUtils.tsx");

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
    if (request.applicationStatus !== require(4013) /* MAX_RESULTS_PER_PAGE */.GuildJoinRequestApplicationStatuses.STARTED) {
      require(1222) /* transitionTo */.transitionTo(closure_4.GUILD_MEMBER_VERIFICATION(id));
      const tmp2Result = require(1222) /* transitionTo */;
    }
  }
  const result = require(9150) /* openMemberVerificationModal */.openMemberVerificationModal(id);
};
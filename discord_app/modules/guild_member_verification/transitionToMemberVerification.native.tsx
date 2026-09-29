// === Module 6004: transitionToMemberVerification ===

// Module 6004 (transitionToMemberVerification)
import router_utils from "router_utils" /* 1101 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6005 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 6047 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4656 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export const transitionToMemberVerification = function transitionToMemberVerification(guildId) {
  if (null == GuildStore.getGuild(guildId)) {
    const request = UserGuildJoinRequestStore.getRequest(guildId);
    let applicationStatus;
    if (request != null) {
      applicationStatus = request.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      const result = MemberVerificationAlertActionCreators.openMemberVerificationPendingAlert(guildId);
      const tmp7Result = MemberVerificationAlertActionCreators;
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      const obj2 = { guildId, canWithdraw: true };
      const result1 = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert(obj2);
      const tmp7Result4 = MemberVerificationAlertActionCreators;
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
      router_utils.transitionToGuild(guildId);
      const tmp7Result5 = router_utils;
    } else {
      const result2 = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
      const tmp7Result6 = MemberVerificationModalActionCreators;
    }
  } else {
    router_utils.transitionToGuild(guildId);
  }
};
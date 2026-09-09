// === Module 5539: transitionToMemberVerification ===

// Module 5539 (transitionToMemberVerification)
import router_utils from "router_utils" /* 1100 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4398 */;
import MemberVerificationRouteExperiment from "MemberVerificationRouteExperiment" /* 5540 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5541 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5583 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4396 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export const transitionToMemberVerification = function transitionToMemberVerification(guildId) {
  let obj = MemberVerificationRouteExperiment;
  if (obj.getIsMemberVerificationRouteDeprecated("transitionToMemberVerification")) {
    if (null != GuildStore.getGuild(guildId)) {
      let tmpResult = router_utils;
      tmpResult.transitionToGuild(guildId);
    } else {
      const request = UserGuildJoinRequestStore.getRequest(guildId);
      let applicationStatus;
      if (request != null) {
        applicationStatus = request.applicationStatus;
      }
      if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        tmpResult = MemberVerificationAlertActionCreators;
        const result = tmpResult.openMemberVerificationPendingAlert(guildId);
      } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        obj = { guildId, canWithdraw: true };
        const result1 = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert(obj);
        const tmpResult1 = MemberVerificationAlertActionCreators;
      } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        router_utils.transitionToGuild(guildId);
        const tmpResult2 = router_utils;
      } else {
        const result2 = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
        const tmpResult3 = MemberVerificationModalActionCreators;
      }
    }
  } else {
    router_utils.transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult4 = router_utils;
  }
};
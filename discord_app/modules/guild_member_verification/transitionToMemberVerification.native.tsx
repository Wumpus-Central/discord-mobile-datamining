// === Module 5606: transitionToMemberVerification ===

// Module 5606 (transitionToMemberVerification)
import router_utils from "router_utils" /* 1100 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4461 */;
import MemberVerificationRouteExperiment from "MemberVerificationRouteExperiment" /* 5607 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5608 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 5650 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4459 */;

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export const transitionToMemberVerification = function transitionToMemberVerification(guildId) {
  if (obj.getIsMemberVerificationRouteDeprecated("transitionToMemberVerification")) {
    if (null != GuildStore.getGuild(guildId)) {
      router_utils.transitionToGuild(guildId);
      const tmpResult = router_utils;
    } else {
      const request = UserGuildJoinRequestStore.getRequest(guildId);
      let applicationStatus;
      if (request != null) {
        applicationStatus = request.applicationStatus;
      }
      if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        const result = MemberVerificationAlertActionCreators.openMemberVerificationPendingAlert(guildId);
        const tmpResult6 = MemberVerificationAlertActionCreators;
      } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        const obj2 = { guildId, canWithdraw: true };
        const result1 = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert(obj2);
        const tmpResult7 = MemberVerificationAlertActionCreators;
      } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        router_utils.transitionToGuild(guildId);
        const tmpResult8 = router_utils;
      } else {
        const result2 = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
        const tmpResult9 = MemberVerificationModalActionCreators;
      }
    }
  } else {
    router_utils.transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult10 = router_utils;
  }
  obj = MemberVerificationRouteExperiment;
};
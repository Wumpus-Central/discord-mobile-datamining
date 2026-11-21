// === Module 6517: transitionToMemberVerification ===

// Module 6517 (transitionToMemberVerification)
import router_utils from "router_utils" /* 1098 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4949 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 6518 */;
import MemberVerificationModalActionCreators from "MemberVerificationModalActionCreators" /* 7286 */;
import GuildStore from "GuildStore" /* 4784 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4947 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export function transitionToMemberVerification(guildId) {
  guild = GuildStore.getGuild(guildId);
  let joinedAt;
  if (guild != null) {
    joinedAt = guild.joinedAt;
  }
  if (null == joinedAt) {
    const request = UserGuildJoinRequestStore.getRequest(guildId);
    let applicationStatus;
    if (request != null) {
      applicationStatus = request.applicationStatus;
    }
    if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
      const result = MemberVerificationAlertActionCreators.openMemberVerificationPendingAlert(guildId);
      const tmp9Result = MemberVerificationAlertActionCreators;
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
      const obj2 = { guildId, canWithdraw: true };
      const result1 = MemberVerificationAlertActionCreators.openMemberVerificationRejectedAlert(obj2);
      const tmp9Result4 = MemberVerificationAlertActionCreators;
    } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
      router_utils.transitionToGuild(guildId);
      const tmp9Result5 = router_utils;
    } else {
      const result2 = MemberVerificationModalActionCreators.openMemberVerificationModal(guildId);
      const tmp9Result6 = MemberVerificationModalActionCreators;
    }
  } else {
    router_utils.transitionToGuild(guildId);
  }
}
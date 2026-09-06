// discord_app/modules/guild_member_verification/transitionToMemberVerification.native.tsx
import MemberVerificationRouteExperiment from "native/MemberVerificationRouteExperiment.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore.tsx";

require = fn;
const Routes = fn(1074).Routes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/transitionToMemberVerification.native.tsx");

export const transitionToMemberVerification = function transitionToMemberVerification(guildId) {
  let obj = MemberVerificationRouteExperiment;
  if (obj.getIsMemberVerificationRouteDeprecated("transitionToMemberVerification")) {
    if (null != GuildStore.getGuild(guildId)) {
      let tmpResult = tmp(1100);
      tmpResult.transitionToGuild(guildId);
    } else {
      const request = UserGuildJoinRequestStore.getRequest(guildId);
      let applicationStatus;
      if (request != null) {
        applicationStatus = request.applicationStatus;
      }
      if (tmp(4384).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        tmpResult = tmp(5527);
        const result = tmpResult.openMemberVerificationPendingAlert(guildId);
      } else if (tmp(4384).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        obj = { guildId, canWithdraw: true };
        const result1 = tmp(5527).openMemberVerificationRejectedAlert(obj);
        const tmpResult1 = tmp(5527);
      } else if (tmp(4384).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1100).transitionToGuild(guildId);
        const tmpResult2 = tmp(1100);
      } else {
        const result2 = tmp(5569).openMemberVerificationModal(guildId);
        const tmpResult3 = tmp(5569);
      }
    }
  } else {
    tmp(1100).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(guildId));
    const tmpResult4 = tmp(1100);
  }
};

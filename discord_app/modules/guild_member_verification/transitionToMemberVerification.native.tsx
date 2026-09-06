// discord_app/modules/guild_member_verification/transitionToMemberVerification.native.tsx
import RemoveMemberVerificationRouteExperiment from "native/MemberVerificationRouteExperiment.tsx";
import closure_2 from "../../stores/GuildStore.tsx";
import closure_3 from "UserGuildJoinRequestStore.tsx";
import { Routes } from "../../Constants.tsx";

require = arg1;
let result = require("set").fileFinishedImporting(
  "modules/guild_member_verification/transitionToMemberVerification.native.tsx",
);

export const transitionToMemberVerification = function transitionToMemberVerification(closure_0) {
  let obj = RemoveMemberVerificationRouteExperiment;
  if (obj.getIsMemberVerificationRouteDeprecated("transitionToMemberVerification")) {
    if (null != guild.getGuild(closure_0)) {
      let tmpResult = tmp(1100);
      tmpResult.transitionToGuild(closure_0);
    } else {
      request = request.getRequest(closure_0);
      let applicationStatus;
      if (request != null) {
        applicationStatus = request.applicationStatus;
      }
      if (tmp(4384).GuildJoinRequestApplicationStatuses.SUBMITTED === applicationStatus) {
        tmpResult = tmp(5527);
        const result = tmpResult.openMemberVerificationPendingAlert(closure_0);
      } else if (tmp(4384).GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
        obj = { guildId: null, canWithdraw: true };
        obj[0] = closure_0;
        const result1 = tmp(5527).openMemberVerificationRejectedAlert(obj);
        const tmpResult1 = tmp(5527);
      } else if (tmp(4384).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
        tmp(1100).transitionToGuild(closure_0);
        const tmpResult2 = tmp(1100);
      } else {
        const result2 = tmp(5569).openMemberVerificationModal(closure_0);
        const tmpResult3 = tmp(5569);
      }
    }
  } else {
    tmp(1100).transitionTo(Routes.GUILD_MEMBER_VERIFICATION(closure_0));
    const tmpResult4 = tmp(1100);
  }
};

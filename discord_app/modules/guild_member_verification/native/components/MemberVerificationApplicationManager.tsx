// === Module 17461: MemberVerificationApplicationManager ===

// Module 17461 (MemberVerificationApplicationManager)
import MemberVerificationTypes from "MemberVerificationTypes" /* 4431 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4951 */;
import MemberVerificationAlertActionCreators from "MemberVerificationAlertActionCreators" /* 5578 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 5592 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4428 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4429 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7191 */;

require = fn;
let prototype = function MemberVerificationApplicationManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.isShowingAlert = false;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.showApplicationApprovedAlert();
    },
    GUILD_JOIN_REQUEST_UPDATE() {
      return applyArgumentsResult.showApplicationApprovedAlert();
    },
    CHANNEL_SELECT() {
      return applyArgumentsResult.showApplicationApprovedAlert();
    }
  };
  applyArgumentsResult.showApplicationApprovedAlert = function showApplicationApprovedAlert() {
    const guildId = SelectedGuildStore.getGuildId();
    if (null == guildId) {
      if (applyArgumentsResult.isShowingAlert) {
        actions_AlertActionCreatorsDefault.close();
        tmp11.isShowingAlert = false;
      }
    } else {
      const request = UserGuildJoinRequestStore.getRequest(guildId);
      let applicationStatus;
      if (request != null) {
        applicationStatus = request.applicationStatus;
      }
      if (applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED) {
        if (applyArgumentsResult.isShowingAlert) {
          let lastSeen;
          if (request != null) {
            lastSeen = request.lastSeen;
          }
          if (null !== lastSeen) {
            actions_AlertActionCreatorsDefault.close();
            applyArgumentsResult.isShowingAlert = false;
          }
        }
        let tmp6 = applyArgumentsResult.isShowingAlert || null == request;
        if (!tmp6) {
          let lastSeen1;
          if (request != null) {
            lastSeen1 = request.lastSeen;
          }
          tmp6 = null !== lastSeen1;
        }
        if (!tmp6) {
          let result = MemberVerificationAlertActionCreators.openMemberVerificationSuccessAlert(guildId, () => {
            const result = GuildJoinRequestActionCreatorsDefault.ackUserGuildJoinRequest(guildId, request.joinRequestId);
          });
          applyArgumentsResult.isShowingAlert = true;
          const tmp3Result = MemberVerificationAlertActionCreators;
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationApplicationManager.tsx");

export default prototype;
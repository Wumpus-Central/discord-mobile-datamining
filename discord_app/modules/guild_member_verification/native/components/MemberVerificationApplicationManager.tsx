// === Module 16920: prototype ===

// Module 16920 (prototype)
import initializeDefault from "initialize" /* 5454 */;
import closure_3 from "handleConnectionOpen" /* 4269 */;
import closure_4 from "handleGatewayJoinRequestUpdate" /* 4270 */;

let require = arg1;
initializeDefault;
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
    const guildId = closure_1_3.getGuildId();
    if (null == guildId) {
      if (guildId.isShowingAlert) {
        closure_1_1(closure_1_2[3]).close();
        tmp11.isShowingAlert = false;
        const obj3 = closure_1_1(closure_1_2[3]);
      }
    } else {
      const request = closure_1_4.getRequest(guildId);
      let applicationStatus;
      if (request != null) {
        applicationStatus = request.applicationStatus;
      }
      if (applicationStatus === applyArgumentsResult(closure_1_2[4]).GuildJoinRequestApplicationStatuses.APPROVED) {
        if (guildId.isShowingAlert) {
          let lastSeen;
          if (request != null) {
            lastSeen = request.lastSeen;
          }
          if (null !== lastSeen) {
            closure_1_1(tmp4[3]).close();
            tmp17.isShowingAlert = false;
            const obj2 = closure_1_1(tmp4[3]);
          }
        }
        let tmp6 = tmp17.isShowingAlert || null == request;
        if (!tmp6) {
          let lastSeen1;
          if (request != null) {
            lastSeen1 = request.lastSeen;
          }
          tmp6 = null !== lastSeen1;
        }
        if (!tmp6) {
          let result = applyArgumentsResult(tmp4[5]).openMemberVerificationSuccessAlert(guildId, () => {
            const result = request(closure_1_2[6]).ackUserGuildJoinRequest(guildId, request.joinRequestId);
          });
          tmp17.isShowingAlert = true;
          const tmp3Result = applyArgumentsResult(tmp4[5]);
        }
      }
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
let result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/MemberVerificationApplicationManager.tsx");

export default prototype;
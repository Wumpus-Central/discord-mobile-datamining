// discord_app/modules/guild_communication_disabled/CommunicationDisabledManager.tsx
import trackCommunicationDisabled from "trackCommunicationDisabled";
import closure_5 from "trackCommunicationDisabled";
import mergeGuildAvatar from "mergeGuildAvatar";
import "initialize";

let c3;
let c4;
function clearGuildMemberTimeout(closure_2, closure_1) {
  member = member.getMember(closure_2, closure_1);
  user = user.getUser(closure_1);
  if (null != member) {
    if (null != user) {
      if (!obj6.isMemberCommunicationDisabled(member)) {
        let obj = {};
        const merged = Object.assign(member);
        obj.guildId = closure_2;
        let username = member.nick;
        if (username == null) {
          username = user.username;
        }
        obj.nick = username;
        const avatar = member.avatar;
        obj.avatar = avatar;
        let tmp5;
        if (null != member.avatarDecoration) {
          obj = {};
          const merged1 = Object.assign(member.avatarDecoration);
          tmp5 = obj;
        }
        obj.avatarDecoration = tmp5;
        const premiumSince = member.premiumSince;
        obj.premiumSince = premiumSince;
        let flag = member.isPending;
        if (flag == null) {
          flag = false;
        }
        obj.isPending = flag;
        obj = {};
        const merged2 = Object.assign(user);
        const email = user.email;
        obj.email = email;
        const phone = user.phone;
        obj.phone = phone;
        obj.user = obj;
        obj.communicationDisabledUntil = null;
        const obj1 = { type: "GUILD_MEMBER_UPDATE" };
        const merged3 = Object.assign(obj);
        importDefault(709).dispatch(obj1);
        const obj4 = importDefault(709);
      }
      obj6 = require(3902) /* isCommunicationDisabled */;
    }
  }
}
({ getGuildIdFromCommunicationDisabledUserKey: c3, getUserIdFromCommunicationDisabledUserKey: c4 } = trackCommunicationDisabled);
let c7 = null;
class CommunicationDisabledManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.clearGuildMemberTimeout = clearGuildMemberTimeout;
    return applyArgumentsResult;
  }
}
const prototype = CommunicationDisabledManager.prototype;
prototype["_initialize"] = function _initialize() {
  const interval = setInterval(() => {
    communicationDisabledUserMap = communicationDisabledUserMap.getCommunicationDisabledUserMap();
    const keys = Object.keys(communicationDisabledUserMap);
    const item = keys.forEach((arg0) => {
      const tmp = outer1_3(arg0);
      const tmp2 = outer1_4(arg0);
      if (!obj.isCommunicationDisabled(communicationDisabledUserMap[arg0])) {
        outer1_8(tmp, tmp2);
      }
    });
  }, 10000);
};
prototype["_terminate"] = function _terminate() {
  clearInterval(c7);
};
const communicationDisabledManager = new CommunicationDisabledManager();
const result = require("isCommunicationDisabled").fileFinishedImporting("modules/guild_communication_disabled/CommunicationDisabledManager.tsx");

export default communicationDisabledManager;
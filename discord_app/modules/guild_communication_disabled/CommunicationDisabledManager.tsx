// === Module 12027: clearGuildMemberTimeout ===

// Module 12027 (clearGuildMemberTimeout)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isCommunicationDisabled from "isCommunicationDisabled" /* 4110 */;
import initializeDefault from "initialize" /* 5486 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1992 */;
import closure_5 from "trackCommunicationDisabled" /* 1992 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;

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
        obj1 = { type: "GUILD_MEMBER_UPDATE" };
        const merged3 = Object.assign(obj);
        dispatcherDefault.dispatch(obj1);
        const obj4 = dispatcherDefault;
      }
      obj6 = isCommunicationDisabled;
    }
  }
}
({ getGuildIdFromCommunicationDisabledUserKey: c3, getUserIdFromCommunicationDisabledUserKey: c4 } = trackCommunicationDisabled);
let c7 = null;
initializeDefault;
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
      const tmp = closure_1_3(arg0);
      const tmp2 = closure_1_4(arg0);
      if (!obj.isCommunicationDisabled(communicationDisabledUserMap[arg0])) {
        closure_1_8(tmp, tmp2);
      }
    });
  }, 10000);
};
prototype["_terminate"] = function _terminate() {
  clearInterval(c7);
};
const communicationDisabledManager = new CommunicationDisabledManager();
const result = set.fileFinishedImporting("modules/guild_communication_disabled/CommunicationDisabledManager.tsx");

export default communicationDisabledManager;
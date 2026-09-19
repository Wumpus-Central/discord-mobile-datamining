// === Module 12715: CommunicationDisabledManager ===

// Module 12715 (CommunicationDisabledManager)
import DispatcherDefault from "Dispatcher" /* 573 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4383 */;
import GuildMemberStore_mod from "GuildMemberStore" /* 2105 */;
import UserStore from "UserStore" /* 1372 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7358 */;
import size from "module_2" /* 2 */;

function clearGuildMemberTimeout(guildId, arg1) {
  const member = GuildMemberStore.getMember(guildId, arg1);
  const user = UserStore.getUser(arg1);
  if (null != member) {
    if (null != user) {
      if (!obj6.isMemberCommunicationDisabled(member)) {
        const obj = {};
        const merged = Object.assign(member);
        obj.guildId = guildId;
        let username = member.nick;
        if (username == null) {
          username = user.username;
        }
        obj.nick = username;
        const avatar = member.avatar;
        obj.avatar = avatar;
        let tmp5;
        if (null != member.avatarDecoration) {
          const obj2 = {};
          const merged1 = Object.assign(member.avatarDecoration);
          tmp5 = obj2;
        }
        obj.avatarDecoration = tmp5;
        const premiumSince = member.premiumSince;
        obj.premiumSince = premiumSince;
        let flag = member.isPending;
        if (flag == null) {
          flag = false;
        }
        obj.isPending = flag;
        const obj3 = {};
        const merged2 = Object.assign(user);
        const email = user.email;
        obj3.email = email;
        const phone = user.phone;
        obj3.phone = phone;
        obj.user = obj3;
        obj.communicationDisabledUntil = null;
        const obj5 = { type: "GUILD_MEMBER_UPDATE" };
        const merged3 = Object.assign(obj);
        DispatcherDefault.dispatch(obj5);
      }
      obj6 = CommunicationDisabledUtils;
    }
  }
}
let GuildMemberStore = GuildMemberStore_mod;
({ getGuildIdFromCommunicationDisabledUserKey: c3, getUserIdFromCommunicationDisabledUserKey: closure_4 } = GuildMemberStore);
let GuildMemberStore = GuildMemberStore_mod;
let closure_7 = null;
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
    const item = keys.forEach((item) => {
      const tmp = closure_2_3(item);
      const tmp2 = closure_2_4(item);
      if (!obj.isCommunicationDisabled(communicationDisabledUserMap[item])) {
        clearGuildMemberTimeout(tmp, tmp2);
      }
      obj = CommunicationDisabledUtils;
    });
  }, 10000);
};
prototype["_terminate"] = function _terminate() {
  clearInterval(closure_7);
};
const communicationDisabledManager = new CommunicationDisabledManager();
const result = size.fileFinishedImporting("modules/guild_communication_disabled/CommunicationDisabledManager.tsx");

export default communicationDisabledManager;
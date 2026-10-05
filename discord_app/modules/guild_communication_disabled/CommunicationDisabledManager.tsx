// === Module 12119: CommunicationDisabledManager ===

// Module 12119 (CommunicationDisabledManager)
import DispatcherDefault from "Dispatcher" /* 584 */;
import CommunicationDisabledUtils from "CommunicationDisabledUtils" /* 4496 */;
import GuildMemberStore_mod from "GuildMemberStore" /* 2112 */;
import UserStore from "UserStore" /* 1377 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let communicationDisabledUserMap;

let c3;
let closure_4;
function clearGuildMemberTimeout(guildId, arg1) {
  let avatar;
  let email;
  let flag;
  let obj3;
  let phone;
  let premiumSince;
  let tmp5;
  let username;
  const member = GuildMemberStore.getMember(guildId, arg1);
  const user = UserStore.getUser(arg1);
  if (null != member) {
    if (null != user) {
      const obj5 = CommunicationDisabledUtils;
      if (!obj5.isMemberCommunicationDisabled(member)) {
        const obj = { guildId, nick: username, avatar, avatarDecoration: tmp5, premiumSince, isPending: flag, user: obj3, communicationDisabledUntil: null };
        const merged = Object.assign(member);
        username = member.nick;
        if (username == null) {
          username = user.username;
        }
        avatar = member.avatar;
        tmp5 = undefined;
        if (null != member.avatarDecoration) {
          const obj2 = {};
          const merged1 = Object.assign(member.avatarDecoration);
          tmp5 = obj2;
        }
        premiumSince = member.premiumSince;
        flag = member.isPending;
        if (flag == null) {
          flag = false;
        }
        obj3 = { email, phone };
        const merged2 = Object.assign(user);
        email = user.email;
        phone = user.phone;
        const obj4 = { type: "GUILD_MEMBER_UPDATE" };
        const dispatch = DispatcherDefault.dispatch;
        DispatcherDefault;
        const merged3 = Object.assign(obj);
        dispatch(obj4);
      }
    }
  }
}
let GuildMemberStore = GuildMemberStore_mod;
({ getGuildIdFromCommunicationDisabledUserKey: c3, getUserIdFromCommunicationDisabledUserKey: closure_4 } = GuildMemberStore);
GuildMemberStore = GuildMemberStore_mod;
let closure_7 = null;
class CommunicationDisabledManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.clearGuildMemberTimeout = clearGuildMemberTimeout;
    return applyArgumentsResult;
  }
  _initialize() {
    const interval = setInterval(() => {
      communicationDisabledUserMap = communicationDisabledUserMap.getCommunicationDisabledUserMap();
      const keys = Object.keys(communicationDisabledUserMap);
      const item = keys.forEach((item) => {
        const tmp = closure_2_3(item);
        const tmp2 = closure_2_4(item);
        const tmp3 = communicationDisabledUserMap[item];
        const obj = CommunicationDisabledUtils;
        if (!obj.isCommunicationDisabled(tmp3)) {
          clearGuildMemberTimeout(tmp, tmp2);
        }
      });
    }, 10000);
  }
  _terminate() {
    clearInterval(closure_7);
  }
}
const prototype = CommunicationDisabledManager.prototype;
const communicationDisabledManager = new CommunicationDisabledManager();
const result = size.fileFinishedImporting("modules/guild_communication_disabled/CommunicationDisabledManager.tsx");

export default communicationDisabledManager;
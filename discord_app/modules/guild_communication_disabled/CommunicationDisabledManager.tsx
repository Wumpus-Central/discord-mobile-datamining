// discord_app/modules/guild_communication_disabled/CommunicationDisabledManager.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../Dispatcher.tsx";
import isCommunicationDisabled from "CommunicationDisabledUtils.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import trackCommunicationDisabled from "../../stores/GuildMemberStore.tsx";
import trackCommunicationDisabled2 from "../../stores/GuildMemberStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";

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
    const item = keys.forEach((item, index) => {
      const tmp = closure_1_3(item);
      const tmp2 = closure_1_4(item);
      if (!obj.isCommunicationDisabled(communicationDisabledUserMap[item])) {
        closure_1_8(tmp, tmp2);
      }
      obj = communicationDisabledUserMap(closure_1_2[2]);
    });
  }, 10000);
};
prototype["_terminate"] = function _terminate() {
  clearInterval(c7);
};
const communicationDisabledManager = new CommunicationDisabledManager();
const result = obj132.fileFinishedImporting("modules/guild_communication_disabled/CommunicationDisabledManager.tsx");

export default communicationDisabledManager;
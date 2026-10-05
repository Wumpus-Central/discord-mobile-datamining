// === Module 13528: LocalPushNotificationStore ===

// Module 13528 (LocalPushNotificationStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants2 from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import _modDef4461 from "module_4461" /* 4461 */;
import PushNotificationDefault from "PushNotification" /* 8966 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5570 */;
import Constants from "Constants" /* 8707 */;
import size from "module_2" /* 2 */;

let userInfo;

let hasOwnProperty;
let metroRequire;
({ LocalNotificationTypes: hasOwnProperty, FIRE_DATE_FORMAT: metroRequire } = Constants);
const VerificationLevels = Constants2.VerificationLevels;
const set = new Set();
const Store = get_initializedDefault.Store;
class LocalPushNotificationStore extends Store {
  initialize() {
    this.waitFor(GuildStore, GuildVerificationStore);
  }
  isScheduled(arg0) {
    return set.has(arg0);
  }
}
const prototype = LocalPushNotificationStore.prototype;
LocalPushNotificationStore.displayName = "LocalPushNotificationStore";
let obj = {
  CONNECTION_OPEN: function handleCheckScheduledNotifs() {
    let obj = PushNotificationDefault;
    const scheduledLocalNotifications = obj.getScheduledLocalNotifications((arr) => {
      let guild;
      const found = arr.filter((userInfo) => null != userInfo.userInfo && userInfo.userInfo.type === constants.GUILD_VERIFICATION);
      const item = found.forEach((userInfo) => {
        userInfo = userInfo.userInfo;
        const guildId = userInfo.guildId;
        if (null != guild.getGuild(guildId)) {
          if (!closure_1_4.canChatInGuild(guildId)) {
            set.add(userInfo);
          }
        }
        const obj = closure_1_1(closure_1_2[4]);
        const result = obj.cancelLocalNotifications(userInfo);
        const obj2 = closure_1_1(closure_1_2[4]);
        const result1 = obj2.cancelLocalNotifications(userInfo);
        set.delete(userInfo);
      });
    });
  },
  GUILD_CREATE: function handleGuildVerificationChecked(guild) {
    let intl;
    const id = guild.guild.id;
    guild = GuildStore.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      const check = GuildVerificationStore.getCheck(id);
      if (!check.canChat) {
        if (guild.verificationLevel === VerificationLevels.MEDIUM) {
          let obj;
          const verificationLevel = guild.verificationLevel;
          if (VerificationLevels.MEDIUM === verificationLevel) {
            obj = _modDef4461(check.accountDeadline);
          } else if (VerificationLevels.HIGH === verificationLevel) {
            obj = _modDef4461(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(_modDef4461(), "minute")) {
              const obj2 = { type: hasOwnProperty.GUILD_VERIFICATION, guildId: guild.id };
              set.add(obj2);
              const obj3 = { userInfo: obj2, fireDate: obj.format(metroRequire), alertTitle: guild.name, alertBody: intl.string(intl2.t["hrDBa+"]), category: "local" };
              const scheduleLocalNotification = PushNotificationDefault.scheduleLocalNotification;
              PushNotificationDefault;
              intl = intl2.intl;
              const result = scheduleLocalNotification(obj3);
            }
          }
        }
      }
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const obj = { type: hasOwnProperty.GUILD_VERIFICATION, guildId: guild.guild.id };
    if (set.has(obj)) {
      const obj3 = PushNotificationDefault;
      const result = obj3.cancelLocalNotifications(obj);
      set.delete(obj);
    }
  },
  LOGOUT: function handleCancelAll() {
    set.clear();
    const obj = PushNotificationDefault;
    const result = obj.cancelAllLocalNotifications();
  }
};
const localPushNotificationStore = new LocalPushNotificationStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationStore.tsx");

export default localPushNotificationStore;
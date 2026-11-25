// === Module 15157: LocalPushNotificationStore ===

// Module 15157 (LocalPushNotificationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import util from "util" /* 1112 */;
import _modDef2168 from "module_2168" /* 2168 */;
import PushNotificationDefault from "PushNotification" /* 10235 */;
import GuildStore from "GuildStore" /* 4883 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6768 */;

require = fn;
const Constants = fn(7694);
({ LocalNotificationTypes: hasOwnProperty, FIRE_DATE_FORMAT: closure_6 } = Constants);
const VerificationLevels = fn(1071).VerificationLevels;
const set = new Set();
const Store = initializeDefault.Store;
class LocalPushNotificationStore extends Store {
}
const prototype = LocalPushNotificationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildStore, GuildVerificationStore);
};
prototype["isScheduled"] = function isScheduled(arg0) {
  return set.has(arg0);
};
LocalPushNotificationStore.displayName = "LocalPushNotificationStore";
const localPushNotificationStore = new LocalPushNotificationStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleCheckScheduledNotifs() {
    const scheduledLocalNotifications = PushNotificationDefault.getScheduledLocalNotifications((arr) => {
      const item = arr.forEach((userInfo) => {
        userInfo = userInfo.userInfo;
        let tmp = null != userInfo;
        if (tmp) {
          tmp = userInfo.type === constants.GUILD_VERIFICATION;
        }
        if (tmp) {
          const guildId = userInfo.guildId;
          if (null != guild.getGuild(guildId)) {
            if (!closure_1_4.canChatInGuild(guildId)) {
              set.add(userInfo);
            }
          }
          const result = closure_1_1(10235).cancelLocalNotifications(userInfo);
          const obj = closure_1_1(10235);
          const result1 = closure_1_1(10235).cancelLocalNotifications(userInfo);
          set.delete(userInfo);
          const obj2 = closure_1_1(10235);
        }
      });
    });
  },
  GUILD_CREATE: function handleGuildVerificationChecked(guild) {
    const id = guild.guild.id;
    guild = GuildStore.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      const check = GuildVerificationStore.getCheck(id);
      if (!check.canChat) {
        if (guild.verificationLevel === VerificationLevels.MEDIUM) {
          const verificationLevel = guild.verificationLevel;
          if (VerificationLevels.MEDIUM === verificationLevel) {
            let obj = _modDef2168(check.accountDeadline);
          } else if (VerificationLevels.HIGH === verificationLevel) {
            obj = _modDef2168(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(_modDef2168(), "minute")) {
              const obj2 = { type: constants.GUILD_VERIFICATION, guildId: guild.id };
              set.add(obj2);
              const obj3 = { userInfo: obj2, fireDate: obj.format(timestampProducer), alertTitle: guild.name, alertBody: null, category: "local" };
              const intl = util.intl;
              obj3.alertBody = intl.string(util.t["hrDBa+"]);
              const result = PushNotificationDefault.scheduleLocalNotification(obj3);
              const tmp15Result = PushNotificationDefault;
            }
          }
        }
      }
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const obj = { type: constants.GUILD_VERIFICATION, guildId: guild.guild.id };
    if (set.has(obj)) {
      const result = PushNotificationDefault.cancelLocalNotifications(obj);
      set.delete(obj);
    }
  },
  LOGOUT: function handleCancelAll() {
    set.clear();
    const result = PushNotificationDefault.cancelAllLocalNotifications();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationStore.tsx");

export default localPushNotificationStore;
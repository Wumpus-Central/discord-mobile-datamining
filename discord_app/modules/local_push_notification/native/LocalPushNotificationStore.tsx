// === Module 13823: LocalPushNotificationStore ===

// Module 13823 (LocalPushNotificationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import _modDef4229 from "module_4229" /* 4229 */;
import PushNotificationDefault from "PushNotification" /* 9827 */;
import GuildStore from "GuildStore" /* 1980 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5499 */;

require = fn;
const Constants = fn(13824);
({ LocalNotificationTypes: hasOwnProperty, FIRE_DATE_FORMAT: metroRequire } = Constants);
const VerificationLevels = fn(1074).VerificationLevels;
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
      const found = arr.filter((userInfo) => {
        let tmp = null != userInfo.userInfo;
        if (tmp) {
          tmp = userInfo.userInfo.type === constants.GUILD_VERIFICATION;
        }
        return tmp;
      });
      const item = found.forEach((userInfo) => {
        userInfo = userInfo.userInfo;
        const guildId = userInfo.guildId;
        if (null != guild.getGuild(guildId)) {
          if (!closure_1_4.canChatInGuild(guildId)) {
            set.add(userInfo);
          }
        }
        const result = closure_1_1(9827).cancelLocalNotifications(userInfo);
        const obj = closure_1_1(9827);
        const result1 = closure_1_1(9827).cancelLocalNotifications(userInfo);
        set.delete(userInfo);
        const obj2 = closure_1_1(9827);
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
            let obj = _modDef4229(check.accountDeadline);
          } else if (VerificationLevels.HIGH === verificationLevel) {
            obj = _modDef4229(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(_modDef4229(), "minute")) {
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
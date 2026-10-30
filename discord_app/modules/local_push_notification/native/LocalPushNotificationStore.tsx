// === Module 15563: LocalPushNotificationStore ===

// Module 15563 (LocalPushNotificationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import util from "util" /* 1114 */;
import _modDef2044 from "module_2044" /* 2044 */;
import PushNotificationDefault from "PushNotification" /* 10889 */;
import GuildStore from "GuildStore" /* 4880 */;
import GuildVerificationStore from "GuildVerificationStore" /* 6702 */;

require = fn;
const Constants = fn(10878);
({ LocalNotificationTypes: hasOwnProperty, FIRE_DATE_FORMAT: metroRequire } = Constants);
const VerificationLevels = fn(1072).VerificationLevels;
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
          const result = closure_1_1(10889).cancelLocalNotifications(userInfo);
          const obj = closure_1_1(10889);
          const result1 = closure_1_1(10889).cancelLocalNotifications(userInfo);
          set.delete(userInfo);
          const obj2 = closure_1_1(10889);
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
            let obj = _modDef2044(check.accountDeadline);
          } else if (VerificationLevels.HIGH === verificationLevel) {
            obj = _modDef2044(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(_modDef2044(), "minute")) {
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
// === Module 13320: set ===

// Module 13320 (set)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import tDefault from "t" /* 3978 */;
import NativeModulesDefault from "NativeModules" /* 11628 */;
import closure_3 from "createGuildRecordFromRust" /* 1910 */;
import closure_4 from "recomputeGuild" /* 4982 */;
import LocalNotificationTypes from "LocalNotificationTypes" /* 13321 */;
import { VerificationLevels } from "ME" /* 676 */;
import set from "set" /* 2 */;

require = arg1;
({ LocalNotificationTypes: c5, FIRE_DATE_FORMAT: closure_6 } = LocalNotificationTypes);
let set = new Set();
const Store = initializeDefault.Store;
class LocalPushNotificationStore extends Store {
}
const prototype = LocalPushNotificationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3, closure_4);
};
prototype["isScheduled"] = function isScheduled(arg0) {
  return set.has(arg0);
};
LocalPushNotificationStore.displayName = "LocalPushNotificationStore";
const localPushNotificationStore = new LocalPushNotificationStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleCheckScheduledNotifs() {
    const scheduledLocalNotifications = NativeModulesDefault.getScheduledLocalNotifications((arr) => {
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
          if (!closure_4.canChatInGuild(guildId)) {
            set.add(userInfo);
          }
        }
        const result = callback(11628).cancelLocalNotifications(userInfo);
        const obj = callback(11628);
        const result1 = callback(11628).cancelLocalNotifications(userInfo);
        set.delete(userInfo);
      });
    });
  },
  GUILD_CREATE: function handleGuildVerificationChecked(guild) {
    const id = guild.guild.id;
    guild = guild.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      check = check.getCheck(id);
      if (!check.canChat) {
        if (guild.verificationLevel === VerificationLevels.MEDIUM) {
          const verificationLevel = guild.verificationLevel;
          if (tmp2.MEDIUM === verificationLevel) {
            let obj = tDefault(check.accountDeadline);
          } else if (tmp2.HIGH === verificationLevel) {
            obj = tDefault(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(tDefault(), "minute")) {
              obj = { type: null, guildId: null };
              obj[0] = constants.GUILD_VERIFICATION;
              obj[1] = guild.id;
              set.add(obj);
              obj = { userInfo: null, fireDate: null, alertTitle: null, alertBody: null, category: "local" };
              obj[0] = obj;
              obj[1] = obj.format(closure_6);
              obj[2] = guild.name;
              const intl = getSystemLocale.intl;
              obj[3] = intl.string(getSystemLocale.t["hrDBa+"]);
              const result = tmp15(11628).scheduleLocalNotification(obj);
              const tmp15Result = tmp15(11628);
            }
            tmp15 = importDefault;
          }
        }
      }
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const obj = { type: constants.GUILD_VERIFICATION, guildId: guild.guild.id };
    if (set.has(obj)) {
      const result = NativeModulesDefault.cancelLocalNotifications(obj);
      set.delete(obj);
      const obj3 = NativeModulesDefault;
    }
  },
  LOGOUT: function handleCancelAll() {
    set.clear();
    const result = NativeModulesDefault.cancelAllLocalNotifications();
  }
});
let result = set.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationStore.tsx");

export default localPushNotificationStore;
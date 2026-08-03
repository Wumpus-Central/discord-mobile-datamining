// === Module 12848: set ===

// Module 12848 (set)
import createGuildRecordFromRust from "createGuildRecordFromRust";
import recomputeGuild from "recomputeGuild";
import LocalNotificationTypes from "LocalNotificationTypes";
import { VerificationLevels } from "ME";
import { Store } from "initialize";
import set from "LocalNotificationTypes";

let c5;
let closure_6;
const require = arg1;
({ LocalNotificationTypes: c5, FIRE_DATE_FORMAT: closure_6 } = LocalNotificationTypes);
let set = new Set();
class LocalPushNotificationStore extends Store {
}
const prototype = LocalPushNotificationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(createGuildRecordFromRust, recomputeGuild);
};
prototype["isScheduled"] = function isScheduled(arg0) {
  return set.has(arg0);
};
LocalPushNotificationStore.displayName = "LocalPushNotificationStore";
const localPushNotificationStore = new LocalPushNotificationStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleCheckScheduledNotifs() {
    const scheduledLocalNotifications = importDefault(10816).getScheduledLocalNotifications((arr) => {
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
          if (!recomputeGuild.canChatInGuild(guildId)) {
            set.add(userInfo);
          }
        }
        const result = callback(10816).cancelLocalNotifications(userInfo);
        const obj = callback(10816);
        const result1 = callback(10816).cancelLocalNotifications(userInfo);
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
            let obj = importDefault(3837)(check.accountDeadline);
          } else if (tmp2.HIGH === verificationLevel) {
            obj = importDefault(3837)(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(importDefault(3837)(), "minute")) {
              obj = { type: null, guildId: null };
              obj[0] = constants.GUILD_VERIFICATION;
              obj[1] = guild.id;
              set.add(obj);
              obj = { userInfo: null, fireDate: null, alertTitle: null, alertBody: null, category: "local" };
              obj[0] = obj;
              obj[1] = obj.format(closure_6);
              obj[2] = guild.name;
              const intl = require(1236) /* getSystemLocale */.intl;
              obj[3] = intl.string(require(1236) /* getSystemLocale */.t["hrDBa+"]);
              const result = tmp15(10816).scheduleLocalNotification(obj);
              const tmp15Result = tmp15(10816);
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
      const result = importDefault(10816).cancelLocalNotifications(obj);
      set.delete(obj);
      const obj3 = importDefault(10816);
    }
  },
  LOGOUT: function handleCancelAll() {
    set.clear();
    const result = importDefault(10816).cancelAllLocalNotifications();
  }
});
let result = set.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationStore.tsx");

export default localPushNotificationStore;
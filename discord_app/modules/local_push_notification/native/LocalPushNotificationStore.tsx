// discord_app/modules/local_push_notification/native/LocalPushNotificationStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import tDefault from "../../../../_runtime/03975_t.js";
import NativeModulesDefault from "../../../lib/pushnotification/PushNotification.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import recomputeGuild from "../../../stores/GuildVerificationStore.tsx";
import LocalNotificationTypes from "Constants.tsx";
import { VerificationLevels } from "../../../Constants.tsx";

require = fn;
({ LocalNotificationTypes: c5, FIRE_DATE_FORMAT: closure_6 } = LocalNotificationTypes);
const set = new Set();
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
      const found = arr.filter((item, index) => {
        let tmp = null != item.userInfo;
        if (tmp) {
          tmp = item.userInfo.type === constants.GUILD_VERIFICATION;
        }
        return tmp;
      });
      const item = found.forEach((item, index) => {
        const userInfo = item.userInfo;
        const guildId = userInfo.guildId;
        if (null != guild.getGuild(guildId)) {
          if (!closure_4.canChatInGuild(guildId)) {
            set.add(userInfo);
          }
        }
        const result = callback(11579).cancelLocalNotifications(userInfo);
        const obj = callback(11579);
        const result1 = callback(11579).cancelLocalNotifications(userInfo);
        set.delete(userInfo);
        const obj2 = callback(11579);
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
          if (VerificationLevels.MEDIUM === verificationLevel) {
            let obj = tDefault(check.accountDeadline);
          } else if (VerificationLevels.HIGH === verificationLevel) {
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
              const result = NativeModulesDefault.scheduleLocalNotification(obj);
              const tmp15Result = NativeModulesDefault;
            }
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
    }
  },
  LOGOUT: function handleCancelAll() {
    set.clear();
    const result = NativeModulesDefault.cancelAllLocalNotifications();
  }
});
let result = require("obj132").fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationStore.tsx");

export default localPushNotificationStore;
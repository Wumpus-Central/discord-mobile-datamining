// discord_app/modules/local_push_notification/native/LocalPushNotificationStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import hooksDefault from "../../../../_runtime/04075_hooks.js";
import NativeModulesDefault from "../../../lib/pushnotification/PushNotification.tsx";
import closure_3 from "../../../stores/GuildStore.tsx";
import closure_4 from "../../../stores/GuildVerificationStore.tsx";
import LocalNotificationTypes from "Constants.tsx";
import { VerificationLevels } from "../../../Constants.tsx";
import set from "../../../../_runtime/00002_set.js";

require = arg1;
({ LocalNotificationTypes: c5, FIRE_DATE_FORMAT: closure_6 } = LocalNotificationTypes);
let set = new Set();
const Store = initializeDefault.Store;
class LocalPushNotificationStore extends Store {}
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
        const result = callback(9657).cancelLocalNotifications(userInfo);
        const obj = callback(9657);
        const result1 = callback(9657).cancelLocalNotifications(userInfo);
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
            let obj = hooksDefault(check.accountDeadline);
          } else if (tmp2.HIGH === verificationLevel) {
            obj = hooksDefault(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(hooksDefault(), "minute")) {
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
              const result = tmp15(9657).scheduleLocalNotification(obj);
              const tmp15Result = tmp15(9657);
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
  },
});
let result = set.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationStore.tsx");

export default localPushNotificationStore;

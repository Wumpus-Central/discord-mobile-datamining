// discord_app/modules/local_push_notification/native/LocalPushNotificationStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef4153 from "../../../../_runtime/metro/04153__.js";
import PushNotificationDefault from "../../../lib/pushnotification/PushNotification.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildVerificationStore from "../../../stores/GuildVerificationStore.tsx";

require = fn;
const Constants = fn(13716);
({ LocalNotificationTypes: hasOwnProperty, FIRE_DATE_FORMAT: metroRequire } = Constants);
const VerificationLevels = fn(1074).VerificationLevels;
const set = new Set();
const Store = initializeDefault.Store;
class LocalPushNotificationStore extends Store {}
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
        const result = closure_1_1(9687).cancelLocalNotifications(userInfo);
        const obj = closure_1_1(9687);
        const result1 = closure_1_1(9687).cancelLocalNotifications(userInfo);
        set.delete(userInfo);
        const obj2 = closure_1_1(9687);
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
            let obj = _modDef4153(check.accountDeadline);
          } else if (VerificationLevels.HIGH === verificationLevel) {
            obj = _modDef4153(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(_modDef4153(), "minute")) {
              obj = { type: constants.GUILD_VERIFICATION, guildId: guild.id };
              set.add(obj);
              obj = { userInfo: null, fireDate: null, alertTitle: null, alertBody: null, category: "local" };
              obj.userInfo = obj;
              obj.fireDate = obj.format(timestampProducer);
              obj.alertTitle = guild.name;
              const intl = util.intl;
              obj.alertBody = intl.string(util.t["hrDBa+"]);
              const result = PushNotificationDefault.scheduleLocalNotification(obj);
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationStore.tsx");

export default localPushNotificationStore;

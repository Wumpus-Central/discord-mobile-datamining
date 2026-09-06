// === Module 7119: ? ===

// Module 7119
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4411 */;
import UserNotificationSettings from "UserNotificationSettings" /* 7114 */;
import handleConnectionOpenDefault from "handleConnectionOpen" /* 7116 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "updateUserGuildSettingsInternal" /* 4741 */;
import { Endpoints } from "ME" /* 1074 */;
import { NotificationSettingsUpdateType as closure_6 } from "AccountNotificationFlags" /* 4212 */;
import { ChannelNotificationSettingsFlags as closure_7 } from "MAX_FAVORITES" /* 1084 */;

require = arg1;
let result = require("set").fileFinishedImporting("actions/NotificationSettingsModalActionCreators.tsx");

export default {
  open(guildId) {
    let obj = dispatcherDefault;
    obj = { type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId };
    obj.dispatch(obj);
  },
  close() {
    dispatcherDefault.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
  },
  updateGuildNotificationSettings(guildId, muteSettings, NotificationLabel, location) {
    let obj = UserNotificationSettings;
    const currentGuildSettings = obj.getCurrentGuildSettings(guildId);
    const result = handleConnectionOpenDefault.saveUserGuildSettings(guildId, muteSettings);
    const obj2 = handleConnectionOpenDefault;
    obj = { type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId, settings: muteSettings };
    dispatcherDefault.dispatch(obj);
    const obj3 = dispatcherDefault;
    const result1 = UserNotificationSettings.trackGuildNotificationSettingsUpdate(guildId, muteSettings, currentGuildSettings, NotificationLabel, location);
  },
  updateGuildAndChannelNotificationSettings(guildId, channel_overrides, OptedIn, location) {
    const _require = guildId;
    importDefault = channel_overrides;
    dependencyMap = OptedIn;
    closure_3 = location;
    let obj = DISCORD_EPOCHDefault;
    const keys = obj.keys(channel_overrides.channel_overrides);
    const currentGuildSettings = _require(7114).getCurrentGuildSettings(guildId);
    const obj2 = _require(7114);
    const manyCurrentChannelSettings = _require(7114).getManyCurrentChannelSettings(guildId, keys);
    const obj3 = _require(7114);
    let result = handleConnectionOpenDefault.saveUserGuildSettings(guildId, channel_overrides);
    const obj4 = handleConnectionOpenDefault;
    obj = { type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId, settings: channel_overrides };
    dispatcherDefault.dispatch(obj);
    const obj5 = dispatcherDefault;
    const result1 = _require(7114).trackGuildNotificationSettingsUpdate(guildId, channel_overrides, currentGuildSettings, OptedIn, location);
    const obj7 = _require(7114);
    const keys1 = DISCORD_EPOCHDefault.keys(channel_overrides.channel_overrides);
    const item = keys1.forEach((channelId) => {
      const value = closure_4.get(channelId);
      let obj = guildId(OptedIn[6]);
      obj = { guildId, channelId, change: channel_overrides.channel_overrides[channelId], previous: value, label: OptedIn, location: closure_3 };
      const result = obj.trackChannelNotificationSettingsUpdate(obj);
    });
  },
  updateChannelOverrideSettings(guildId, id, muteSettings, NotificationLabel, location) {
    let obj = UserNotificationSettings;
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    obj1 = handleConnectionOpenDefault;
    obj = { [id]: muteSettings };
    const result = obj1.saveUserGuildSettings(guildId, { channel_overrides: obj });
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: muteSettings };
    dispatcherDefault.dispatch(obj);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = getSystemLocale.intl;
    AccessibilityAnnouncer.announce(intl.string(getSystemLocale.t.MlIsJ8));
    const obj4 = dispatcherDefault;
    obj1 = { guildId, channelId: id, change: muteSettings, previous: currentChannelSettings, label: NotificationLabel, location };
    const result1 = UserNotificationSettings.trackChannelNotificationSettingsUpdate(obj1);
  },
  updateChannelOverrideSettingsBulk(guildId, channel_overrides, OptedOut) {
    const _require = guildId;
    importDefault = channel_overrides;
    dependencyMap = OptedOut;
    closure_3 = arg3;
    let obj = DISCORD_EPOCHDefault;
    const keys = obj.keys(channel_overrides);
    const manyCurrentChannelSettings = _require(7114).getManyCurrentChannelSettings(guildId, keys);
    const obj2 = _require(7114);
    obj = { channel_overrides };
    const result = handleConnectionOpenDefault.saveUserGuildSettings(guildId, obj);
    const obj3 = handleConnectionOpenDefault;
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: channel_overrides };
    dispatcherDefault.dispatch(obj);
    const obj5 = dispatcherDefault;
    const keys1 = DISCORD_EPOCHDefault.keys(channel_overrides);
    const item = keys1.forEach((channelId) => {
      let obj = guildId(OptedOut[6]);
      obj = { guildId, channelId, change: table[channelId], previous: closure_4.get(channelId), label: OptedOut, location: closure_3 };
      return obj.trackChannelNotificationSettingsUpdate(obj);
    });
  },
  updateAppDMOverrideSettings(guildId, id, id2, change, NotificationLabel2) {
    let obj = UserNotificationSettings;
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    obj1 = handleConnectionOpenDefault;
    obj = { [id]: change };
    const result = obj1.saveUserGuildSettings(guildId, { channel_overrides: obj });
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: change };
    dispatcherDefault.dispatch(obj);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    const intl = getSystemLocale.intl;
    AccessibilityAnnouncer.announce(intl.string(getSystemLocale.t.MlIsJ8));
    const obj4 = dispatcherDefault;
    obj1 = { updateType: constants.AUTHORIZED_APP_DM, guildId, channelId: id, applicationId: id2, change, previous: currentChannelSettings, label: NotificationLabel2 };
    const result1 = UserNotificationSettings.trackChannelNotificationSettingsUpdate(obj1);
  },
  setForumThreadsCreated(channel, arg1) {
    if (arg1) {
      let NEW_FORUM_THREADS_OFF = tmp.NEW_FORUM_THREADS_ON;
      let tmp2 = tmp;
    } else {
      NEW_FORUM_THREADS_OFF = tmp.NEW_FORUM_THREADS_OFF;
      tmp2 = tmp;
    }
    const NotificationLabel = UserNotificationSettings.NotificationLabel;
    const result = this.updateChannelOverrideSettings(channel.guild_id, channel.id, { flags: channelFlags.getChannelFlags(channel) & ~(arg1 ? tmp2.NEW_FORUM_THREADS_OFF : tmp2.NEW_FORUM_THREADS_ON) | NEW_FORUM_THREADS_OFF }, NotificationLabel.forumThreadsCreated(arg1));
  },
  setAccountFlag(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              c0 = tmp5;
              c0 = undefined;
              const setFlagResult = closure_1_0(1384).setFlag(closure_1_4.accountNotificationSettings.flags, closure_1_0, closure_1_1);
              c0 = setFlagResult;
              const HTTP = closure_1_0(1272).HTTP;
              obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = closure_1_5.ACCOUNT_NOTIFICATION_SETTINGS;
              const obj2 = { flags: null };
              obj2[0] = setFlagResult;
              obj1[1] = obj2;
              const obj10 = closure_1_0(1384);
              obj1[2] = closure_1_0(1272).rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1);
              return obj3;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              obj1 = closure_1_1(573);
              const obj5 = { type: "NOTIFICATION_SETTINGS_UPDATE", settings: null };
              const obj6 = { flags: null };
              obj6[0] = c0;
              obj5[1] = obj6;
              dependencyMap = 2;
              c3 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = obj1.dispatch(obj5);
              return obj7;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp11) {
          c3 = tmp;
          throw tmp11;
        }
      }
    })();
  }
};
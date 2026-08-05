// discord_app/actions/NotificationSettingsModalActionCreators.tsx
import dispatcher from "dispatcher";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { Endpoints } from "ME";
import { NotificationSettingsUpdateType as closure_6 } from "AccountNotificationFlags";
import { ChannelNotificationSettingsFlags as closure_7 } from "MAX_FAVORITES";

const require = arg1;
let result = require("ME").fileFinishedImporting("actions/NotificationSettingsModalActionCreators.tsx");

export default {
  open(guildId) {
    let obj = require("../Dispatcher.tsx");
    obj = { type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId };
    obj.dispatch(obj);
  },
  close() {
    require("../Dispatcher.tsx").dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
  },
  updateGuildNotificationSettings(guildId, muteSettings, NotificationLabel, location) {
    let obj = require("../utils/NotificationSettingsUtils.tsx") /* UserNotificationSettings */;
    const currentGuildSettings = obj.getCurrentGuildSettings(guildId);
    const result = require("../modules/user_settings/UserGuildSettingsManager.tsx").saveUserGuildSettings(guildId, muteSettings);
    const obj2 = require("../modules/user_settings/UserGuildSettingsManager.tsx");
    obj = { type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId, settings: muteSettings };
    require("../Dispatcher.tsx").dispatch(obj);
    const obj3 = require("../Dispatcher.tsx");
    const result1 = require("../utils/NotificationSettingsUtils.tsx") /* UserNotificationSettings */.trackGuildNotificationSettingsUpdate(guildId, muteSettings, currentGuildSettings, NotificationLabel, location);
  },
  updateGuildAndChannelNotificationSettings(guildId, channel_overrides, OptedIn, location) {
    const _require = guildId;
    const importDefault = channel_overrides;
    const dependencyMap = OptedIn;
    let dispatcher = location;
    let obj = require("../utils/SnowflakeUtils.tsx");
    const keys = obj.keys(channel_overrides.channel_overrides);
    const currentGuildSettings = _require("../utils/NotificationSettingsUtils.tsx").getCurrentGuildSettings(guildId);
    const obj2 = _require("../utils/NotificationSettingsUtils.tsx");
    const manyCurrentChannelSettings = _require("../utils/NotificationSettingsUtils.tsx").getManyCurrentChannelSettings(guildId, keys);
    const obj3 = _require("../utils/NotificationSettingsUtils.tsx");
    let result = require("../modules/user_settings/UserGuildSettingsManager.tsx").saveUserGuildSettings(guildId, channel_overrides);
    const obj4 = require("../modules/user_settings/UserGuildSettingsManager.tsx");
    obj = { type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId, settings: channel_overrides };
    require("../Dispatcher.tsx").dispatch(obj);
    const obj5 = require("../Dispatcher.tsx");
    const result1 = _require("../utils/NotificationSettingsUtils.tsx").trackGuildNotificationSettingsUpdate(guildId, channel_overrides, currentGuildSettings, OptedIn, location);
    const obj7 = _require("../utils/NotificationSettingsUtils.tsx");
    const keys1 = require("../utils/SnowflakeUtils.tsx").keys(channel_overrides.channel_overrides);
    const item = keys1.forEach((channelId) => {
      const value = updateUserGuildSettingsInternal.get(channelId);
      let obj = guildId(OptedIn[6]);
      obj = { guildId, channelId, change: channel_overrides.channel_overrides[channelId], previous: value, label: OptedIn, location: dispatcher };
      const result = obj.trackChannelNotificationSettingsUpdate(obj);
    });
  },
  updateChannelOverrideSettings(guildId, id, muteSettings, NotificationLabel, location) {
    let obj = require("../utils/NotificationSettingsUtils.tsx") /* UserNotificationSettings */;
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    let obj1 = require("../modules/user_settings/UserGuildSettingsManager.tsx");
    obj = { [id]: muteSettings };
    const result = obj1.saveUserGuildSettings(guildId, { channel_overrides: obj });
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: muteSettings };
    require("../Dispatcher.tsx").dispatch(obj);
    const AccessibilityAnnouncer = require("../design/shared.tsx") /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
    AccessibilityAnnouncer.announce(intl.string(require("../intl/index.native.tsx") /* getSystemLocale */.t.MlIsJ8));
    const obj4 = require("../Dispatcher.tsx");
    obj1 = { guildId, channelId: id, change: muteSettings, previous: currentChannelSettings, label: NotificationLabel, location };
    const result1 = require("../utils/NotificationSettingsUtils.tsx") /* UserNotificationSettings */.trackChannelNotificationSettingsUpdate(obj1);
  },
  updateChannelOverrideSettingsBulk(guildId, channel_overrides, OptedOut) {
    const _require = guildId;
    const importDefault = channel_overrides;
    const dependencyMap = OptedOut;
    let dispatcher = arg3;
    let obj = require("../utils/SnowflakeUtils.tsx");
    const keys = obj.keys(channel_overrides);
    const manyCurrentChannelSettings = _require("../utils/NotificationSettingsUtils.tsx").getManyCurrentChannelSettings(guildId, keys);
    const obj2 = _require("../utils/NotificationSettingsUtils.tsx");
    obj = { channel_overrides };
    const result = require("../modules/user_settings/UserGuildSettingsManager.tsx").saveUserGuildSettings(guildId, obj);
    const obj3 = require("../modules/user_settings/UserGuildSettingsManager.tsx");
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: channel_overrides };
    require("../Dispatcher.tsx").dispatch(obj);
    const obj5 = require("../Dispatcher.tsx");
    const keys1 = require("../utils/SnowflakeUtils.tsx").keys(channel_overrides);
    const item = keys1.forEach((channelId) => {
      let obj = guildId(OptedOut[6]);
      obj = { guildId, channelId, change: table[channelId], previous: updateUserGuildSettingsInternal.get(channelId), label: OptedOut, location: dispatcher };
      return obj.trackChannelNotificationSettingsUpdate(obj);
    });
  },
  updateAppDMOverrideSettings(guildId, id, id2, change, NotificationLabel2) {
    let obj = require("../utils/NotificationSettingsUtils.tsx") /* UserNotificationSettings */;
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    let obj1 = require("../modules/user_settings/UserGuildSettingsManager.tsx");
    obj = { [id]: change };
    const result = obj1.saveUserGuildSettings(guildId, { channel_overrides: obj });
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: change };
    require("../Dispatcher.tsx").dispatch(obj);
    const AccessibilityAnnouncer = require("../design/shared.tsx") /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl = require("../intl/index.native.tsx") /* getSystemLocale */.intl;
    AccessibilityAnnouncer.announce(intl.string(require("../intl/index.native.tsx") /* getSystemLocale */.t.MlIsJ8));
    const obj4 = require("../Dispatcher.tsx");
    obj1 = { updateType: constants.AUTHORIZED_APP_DM, guildId, channelId: id, applicationId: id2, change, previous: currentChannelSettings, label: NotificationLabel2 };
    const result1 = require("../utils/NotificationSettingsUtils.tsx") /* UserNotificationSettings */.trackChannelNotificationSettingsUpdate(obj1);
  },
  setForumThreadsCreated(channel, arg1) {
    if (arg1) {
      let NEW_FORUM_THREADS_OFF = tmp.NEW_FORUM_THREADS_ON;
      let tmp2 = tmp;
    } else {
      NEW_FORUM_THREADS_OFF = tmp.NEW_FORUM_THREADS_OFF;
      tmp2 = tmp;
    }
    const NotificationLabel = require("../utils/NotificationSettingsUtils.tsx") /* UserNotificationSettings */.NotificationLabel;
    const result = this.updateChannelOverrideSettings(channel.guild_id, channel.id, { flags: channelFlags.getChannelFlags(channel) & ~(arg1 ? tmp2.NEW_FORUM_THREADS_OFF : tmp2.NEW_FORUM_THREADS_ON) | NEW_FORUM_THREADS_OFF }, NotificationLabel.forumThreadsCreated(arg1));
  },
  setAccountFlag(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
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
              let closure_1 = tmp2;
              let c0 = tmp5;
              c0 = undefined;
              const setFlagResult = outer1_0(1384).setFlag(outer1_4.accountNotificationSettings.flags, outer1_0, outer1_1);
              c0 = setFlagResult;
              const HTTP = outer1_0(530).HTTP;
              let obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = outer1_5.ACCOUNT_NOTIFICATION_SETTINGS;
              const obj2 = { flags: null };
              obj2[0] = setFlagResult;
              obj1[1] = obj2;
              const obj10 = outer1_0(1384);
              obj1[2] = outer1_0(530).rejectWithMigratedError();
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
              obj1 = outer1_1(709);
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
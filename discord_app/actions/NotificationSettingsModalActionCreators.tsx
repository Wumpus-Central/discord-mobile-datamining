// === Module 6614: NotificationSettingsModalActionCreators ===

// Module 6614 (NotificationSettingsModalActionCreators)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import intl2 from "intl" /* 1126 */;
import NotificationConstants from "NotificationConstants" /* 4522 */;
import shared from "shared" /* 4729 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6609 */;
import UserGuildSettingsManagerDefault from "UserGuildSettingsManager" /* 6611 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2, c3, dependencyMap, importDefault;

const Endpoints = Constants.Endpoints;
const constants = UserSettingsConstants.ChannelNotificationSettingsFlags;
let obj = {
  open(guildId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId };
    obj.dispatch(obj2);
  },
  close() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
  },
  updateGuildNotificationSettings(guildId, muteSettings, NotificationLabel, location) {
    const obj = NotificationSettingsUtils;
    const currentGuildSettings = obj.getCurrentGuildSettings(guildId);
    const obj2 = UserGuildSettingsManagerDefault;
    const result = obj2.saveUserGuildSettings(guildId, muteSettings);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId, settings: muteSettings };
    obj3.dispatch(obj4);
    const obj5 = NotificationSettingsUtils;
    const result1 = obj5.trackGuildNotificationSettingsUpdate(guildId, muteSettings, currentGuildSettings, NotificationLabel, location);
  },
  updateGuildAndChannelNotificationSettings(guildId, channel_overrides, OptedIn, location) {
    let closure_4;
    let label;
    _require = guildId;
    importDefault = channel_overrides;
    dependencyMap = OptedIn;
    const _location = location;
    let obj = SnowflakeUtilsDefault;
    const keys = obj.keys(channel_overrides.channel_overrides);
    let obj2 = require("NotificationSettingsUtils");
    const currentGuildSettings = obj2.getCurrentGuildSettings(guildId);
    const obj3 = require("NotificationSettingsUtils");
    const manyCurrentChannelSettings = obj3.getManyCurrentChannelSettings(guildId, keys);
    const obj4 = UserGuildSettingsManagerDefault;
    let result = obj4.saveUserGuildSettings(guildId, channel_overrides);
    const obj5 = DispatcherDefault;
    const obj6 = { type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId, settings: channel_overrides };
    obj5.dispatch(obj6);
    const obj7 = require("NotificationSettingsUtils");
    const result1 = obj7.trackGuildNotificationSettingsUpdate(guildId, channel_overrides, currentGuildSettings, OptedIn, location);
    const obj8 = SnowflakeUtilsDefault;
    const keys1 = obj8.keys(channel_overrides.channel_overrides);
    const item = keys1.forEach((channelId) => {
      const value = closure_4.get(channelId);
      const obj = NotificationSettingsUtils;
      const obj2 = { guildId, channelId, change: channel_overrides.channel_overrides[channelId], previous: value, label, location: _location };
      const result = obj.trackChannelNotificationSettingsUpdate(obj2);
    });
  },
  updateChannelOverrideSettings(arg0) {
    let _location;
    let accessibilityAnnouncement;
    let channelId;
    let guildId;
    let label;
    let settings;
    ({ guildId, channelId, settings, accessibilityAnnouncement } = arg0);
    ({ label, location: _location } = arg0);
    const obj = NotificationSettingsUtils;
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, channelId);
    const obj2 = UserGuildSettingsManagerDefault;
    const obj3 = { channel_overrides: { [channelId]: settings } };
    const result = obj2.saveUserGuildSettings(guildId, obj3);
    const obj4 = DispatcherDefault;
    obj4.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId, settings });
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    let message;
    const announce = AccessibilityAnnouncer.announce;
    if (accessibilityAnnouncement != null) {
      message = accessibilityAnnouncement.message;
    }
    if (message == null) {
      const intl = intl2.intl;
      message = intl.string(intl2.t.MlIsJ8);
    }
    let assertiveness;
    if (accessibilityAnnouncement != null) {
      assertiveness = accessibilityAnnouncement.assertiveness;
    }
    announce(message, assertiveness);
    const tmpResult = NotificationSettingsUtils;
    const result1 = tmpResult.trackChannelNotificationSettingsUpdate({ guildId, channelId, change: settings, previous: currentChannelSettings, label, location: _location });
  },
  updateChannelOverrideSettingsBulk(guildId, channel_overrides, OptedOut, _location) {
    let closure_4;
    let label;
    _require = guildId;
    importDefault = channel_overrides;
    dependencyMap = OptedOut;
    let obj = SnowflakeUtilsDefault;
    const keys = obj.keys(channel_overrides);
    let obj2 = require("NotificationSettingsUtils");
    const manyCurrentChannelSettings = obj2.getManyCurrentChannelSettings(guildId, keys);
    const obj3 = UserGuildSettingsManagerDefault;
    const obj4 = { channel_overrides };
    const result = obj3.saveUserGuildSettings(guildId, obj4);
    const obj5 = DispatcherDefault;
    const obj6 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: channel_overrides };
    obj5.dispatch(obj6);
    const obj7 = SnowflakeUtilsDefault;
    const keys1 = obj7.keys(channel_overrides);
    const item = keys1.forEach((channelId) => {
      const obj = NotificationSettingsUtils;
      const obj2 = { guildId, channelId, change: channel_overrides[channelId], previous: closure_4.get(channelId), label, location: _location };
      return obj.trackChannelNotificationSettingsUpdate(obj2);
    });
  },
  updateAppDMOverrideSettings(guildId, id, id2, settings, NotificationLabel2) {
    const obj = NotificationSettingsUtils;
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    const obj2 = UserGuildSettingsManagerDefault;
    const obj3 = { channel_overrides: { [id]: settings } };
    const result = obj2.saveUserGuildSettings(guildId, obj3);
    const obj4 = DispatcherDefault;
    const obj5 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings };
    obj4.dispatch(obj5);
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const announce = AccessibilityAnnouncer.announce;
    const intl = intl2.intl;
    announce(intl.string(intl2.t.MlIsJ8));
    const obj6 = NotificationSettingsUtils;
    const obj7 = { updateType: constants.AUTHORIZED_APP_DM, guildId, channelId: id, applicationId: id2, change: settings, previous: currentChannelSettings, label: NotificationLabel2 };
    const result1 = obj6.trackChannelNotificationSettingsUpdate(obj7);
  },
  setForumThreadsCreated(channel, arg1) {
    let NEW_FORUM_THREADS_OFF;
    let NotificationLabel;
    let tmp2;
    let tmp3;
    if (arg1) {
      NEW_FORUM_THREADS_OFF = constants.NEW_FORUM_THREADS_ON;
      tmp2 = constants;
    } else {
      NEW_FORUM_THREADS_OFF = constants.NEW_FORUM_THREADS_OFF;
      tmp2 = constants;
    }
    const obj = { guildId: channel.guild_id, channelId: channel.id, settings: { flags: UserGuildSettingsStore.getChannelFlags(channel) & ~tmp3 | NEW_FORUM_THREADS_OFF }, label: NotificationLabel.forumThreadsCreated(arg1) };
    tmp3 = arg1 ? tmp2.NEW_FORUM_THREADS_OFF : tmp2.NEW_FORUM_THREADS_ON;
    const updateChannelOverrideSettings = this.updateChannelOverrideSettings;
    ({ flags: UserGuildSettingsStore.getChannelFlags(channel) & ~tmp3 | NEW_FORUM_THREADS_OFF });
    NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = updateChannelOverrideSettings(obj);
  },
  setAccountFlag(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      let obj13;
      let obj5;
      let obj9;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let flags;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              flags = UserGuildSettingsStore.accountNotificationSettings.flags;
              const obj10 = flags(c2[11]);
              const setFlagResult = obj10.setFlag(flags, flags, tmp);
              flags = setFlagResult;
              const HTTP = flags(c2[12]).HTTP;
              const request = { url: constants.ACCOUNT_NOTIFICATION_SETTINGS, body: obj5, rejectWithError: obj13.rejectWithMigratedError() };
              obj5 = { flags: setFlagResult };
              const patch = HTTP.patch;
              obj13 = flags(c2[12]);
              c2 = 1;
              c3 = 1;
              const obj6 = { value: patch(request), done: false };
              return obj6;
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const obj8 = { type: "NOTIFICATION_SETTINGS_UPDATE", settings: obj9 };
              obj9 = { flags };
              const obj2 = tmp(c2[5]);
              c2 = 2;
              c3 = 1;
              const obj11 = { value: obj2.dispatch(obj8), done: false };
              return obj11;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          c3 = 3;
          throw tmp10;
        }
      }
    })();
  }
};
let result = size.fileFinishedImporting("actions/NotificationSettingsModalActionCreators.tsx");

export default obj;
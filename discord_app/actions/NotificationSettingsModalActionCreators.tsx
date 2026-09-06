// discord_app/actions/NotificationSettingsModalActionCreators.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import util from "../intl/index.native.tsx";
import shared from "../design/shared.tsx";
import NotificationSettingsUtils from "../utils/NotificationSettingsUtils.tsx";
import UserGuildSettingsManagerDefault from "../modules/user_settings/UserGuildSettingsManager.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import UserGuildSettingsStore from "../stores/UserGuildSettingsStore.tsx";

require = fn;
const Endpoints = fn(1074).Endpoints;
const constants = fn(4212).NotificationSettingsUpdateType;
let closure_7 = fn(1084).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("actions/NotificationSettingsModalActionCreators.tsx");

export default {
  open(guildId) {
    const obj = { type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId };
    obj.dispatch(obj);
  },
  close() {
    DispatcherDefault.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
  },
  updateGuildNotificationSettings(guildId, muteSettings, NotificationLabel, location) {
    let obj = NotificationSettingsUtils;
    const currentGuildSettings = obj.getCurrentGuildSettings(guildId);
    const result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guildId, muteSettings);
    obj = { type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId, settings: muteSettings };
    DispatcherDefault.dispatch(obj);
    const result1 = NotificationSettingsUtils.trackGuildNotificationSettingsUpdate(
      guildId,
      muteSettings,
      currentGuildSettings,
      NotificationLabel,
      location,
    );
  },
  updateGuildAndChannelNotificationSettings(guildId, channel_overrides, OptedIn, location) {
    _require = guildId;
    importDefault = channel_overrides;
    dependencyMap = OptedIn;
    const _location = location;
    let obj = SnowflakeUtilsDefault;
    const keys = obj.keys(channel_overrides.channel_overrides);
    const currentGuildSettings = require("NotificationSettingsUtils").getCurrentGuildSettings(guildId);
    const obj2 = require("NotificationSettingsUtils");
    const manyCurrentChannelSettings = require("NotificationSettingsUtils").getManyCurrentChannelSettings(
      guildId,
      keys,
    );
    const obj3 = require("NotificationSettingsUtils");
    let result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guildId, channel_overrides);
    obj = { type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId, settings: channel_overrides };
    DispatcherDefault.dispatch(obj);
    const result1 = require("NotificationSettingsUtils").trackGuildNotificationSettingsUpdate(
      guildId,
      channel_overrides,
      currentGuildSettings,
      OptedIn,
      location,
    );
    const obj7 = require("NotificationSettingsUtils");
    const keys1 = SnowflakeUtilsDefault.keys(channel_overrides.channel_overrides);
    const item = keys1.forEach((channelId) => {
      value = closure_4.get(channelId);
      const obj = {
        guildId,
        channelId,
        change: channel_overrides.channel_overrides[channelId],
        previous: value,
        label,
        location: _location,
      };
      const result = obj.trackChannelNotificationSettingsUpdate(obj);
    });
  },
  updateChannelOverrideSettings(guildId, id, muteSettings, NotificationLabel, location) {
    let obj = NotificationSettingsUtils;
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    let obj1 = UserGuildSettingsManagerDefault;
    obj = { channel_overrides: { [id]: muteSettings } };
    const result = obj1.saveUserGuildSettings(guildId, obj);
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: muteSettings };
    DispatcherDefault.dispatch(obj);
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t.MlIsJ8));
    obj1 = {
      guildId,
      channelId: id,
      change: muteSettings,
      previous: currentChannelSettings,
      label: NotificationLabel,
      location,
    };
    const result1 = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate(obj1);
  },
  updateChannelOverrideSettingsBulk(guildId, channel_overrides, OptedOut, _location) {
    _require = guildId;
    importDefault = channel_overrides;
    dependencyMap = OptedOut;
    let obj = SnowflakeUtilsDefault;
    const keys = obj.keys(channel_overrides);
    const manyCurrentChannelSettings = require("NotificationSettingsUtils").getManyCurrentChannelSettings(
      guildId,
      keys,
    );
    const obj2 = require("NotificationSettingsUtils");
    obj = { channel_overrides };
    const result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guildId, obj);
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: channel_overrides };
    DispatcherDefault.dispatch(obj);
    const keys1 = SnowflakeUtilsDefault.keys(channel_overrides);
    const item = keys1.forEach((channelId) => {
      const obj = {
        guildId,
        channelId,
        change: closure_1[channelId],
        previous: closure_4.get(channelId),
        label,
        location: _location,
      };
      return obj.trackChannelNotificationSettingsUpdate(obj);
    });
  },
  updateAppDMOverrideSettings(guildId, id, id2, settings, NotificationLabel2) {
    let obj = NotificationSettingsUtils;
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    let obj1 = UserGuildSettingsManagerDefault;
    obj = { channel_overrides: { [id]: settings } };
    const result = obj1.saveUserGuildSettings(guildId, obj);
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings };
    DispatcherDefault.dispatch(obj);
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t.MlIsJ8));
    obj1 = {
      updateType: constants.AUTHORIZED_APP_DM,
      guildId,
      channelId: id,
      applicationId: id2,
      change: settings,
      previous: currentChannelSettings,
      label: NotificationLabel2,
    };
    const result1 = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate(obj1);
  },
  setForumThreadsCreated(channel, arg1) {
    if (arg1) {
      let NEW_FORUM_THREADS_OFF = tmp.NEW_FORUM_THREADS_ON;
      let tmp2 = tmp;
    } else {
      NEW_FORUM_THREADS_OFF = tmp.NEW_FORUM_THREADS_OFF;
      tmp2 = tmp;
    }
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = this.updateChannelOverrideSettings(
      channel.guild_id,
      channel.id,
      {
        flags:
          (UserGuildSettingsStore.getChannelFlags(channel) &
            ~(arg1 ? tmp2.NEW_FORUM_THREADS_OFF : tmp2.NEW_FORUM_THREADS_ON)) |
          NEW_FORUM_THREADS_OFF,
      },
      NotificationLabel.forumThreadsCreated(arg1),
    );
  },
  setAccountFlag(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp5;
              closure_128_0 = undefined;
              const setFlagResult = closure_0(1384).setFlag(
                UserGuildSettingsStore.accountNotificationSettings.flags,
                closure_0,
                tmp2,
              );
              closure_128_0 = setFlagResult;
              const HTTP = closure_0(1272).HTTP;
              const request = { url: constants.ACCOUNT_NOTIFICATION_SETTINGS, body: null, rejectWithError: null };
              let obj1 = { flags: setFlagResult };
              request.body = obj1;
              const obj10 = closure_0(1384);
              request.rejectWithError = closure_0(1272).rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              const obj2 = { value: HTTP.patch(request), done: false };
              return obj2;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              obj1 = tmp2(573);
              const obj4 = { type: "NOTIFICATION_SETTINGS_UPDATE", settings: null };
              const obj5 = { flags: closure_128_0 };
              obj4.settings = obj5;
              dependencyMap = 2;
              c3 = 1;
              const obj6 = { value: obj1.dispatch(obj4), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
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
  },
};

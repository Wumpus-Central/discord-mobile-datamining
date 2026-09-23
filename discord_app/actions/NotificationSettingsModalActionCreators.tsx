// discord_app/actions/NotificationSettingsModalActionCreators.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import util from "../intl/index.native.tsx";
import shared from "../design/shared.tsx";
import NotificationSettingsUtils from "../utils/NotificationSettingsUtils.tsx";
import UserGuildSettingsManagerDefault from "../modules/user_settings/UserGuildSettingsManager.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import UserGuildSettingsStore from "../stores/UserGuildSettingsStore.tsx";

const require = globalThis.__r;

require = fn;
const Endpoints = fn(1074).Endpoints;
fn(4475).NotificationSettingsUpdateType;
const constants = fn(1084).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("actions/NotificationSettingsModalActionCreators.tsx");

export default {
  open(guildId) {
    DispatcherDefault.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId });
  },
  close() {
    DispatcherDefault.dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
  },
  updateGuildNotificationSettings(guildId, muteSettings, NotificationLabel, location) {
    const currentGuildSettings = NotificationSettingsUtils.getCurrentGuildSettings(guildId);
    const result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guildId, muteSettings);
    DispatcherDefault.dispatch({ type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId, settings: muteSettings });
    const obj4 = { type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId, settings: muteSettings };
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
    const keys = SnowflakeUtilsDefault.keys(channel_overrides.channel_overrides);
    const currentGuildSettings = require("NotificationSettingsUtils").getCurrentGuildSettings(guildId);
    const obj2 = require("NotificationSettingsUtils");
    const manyCurrentChannelSettings = require("NotificationSettingsUtils").getManyCurrentChannelSettings(
      guildId,
      keys,
    );
    const obj3 = require("NotificationSettingsUtils");
    let result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guildId, channel_overrides);
    DispatcherDefault.dispatch({
      type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
      guildId,
      settings: channel_overrides,
    });
    const obj6 = { type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId, settings: channel_overrides };
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
      const result = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate({
        guildId,
        channelId,
        change: channel_overrides.channel_overrides[channelId],
        previous: value,
        label,
        location: _location,
      });
    });
  },
  updateChannelOverrideSettings(arg0) {
    ({ guildId, channelId, settings, accessibilityAnnouncement } = arg0);
    ({ label, location: _location } = arg0);
    const currentChannelSettings = NotificationSettingsUtils.getCurrentChannelSettings(guildId, channelId);
    const result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guildId, {
      channel_overrides: { [channelId]: settings },
    });
    const obj3 = { channel_overrides: { [channelId]: settings } };
    DispatcherDefault.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId, settings });
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    let message;
    if (accessibilityAnnouncement != null) {
      message = accessibilityAnnouncement.message;
    }
    if (message == null) {
      const intl = util.intl;
      message = intl.string(util.t.MlIsJ8);
    }
    let assertiveness;
    if (accessibilityAnnouncement != null) {
      assertiveness = accessibilityAnnouncement.assertiveness;
    }
    AccessibilityAnnouncer.announce(message, assertiveness);
    const result1 = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate({
      guildId,
      channelId,
      change: settings,
      previous: currentChannelSettings,
      label,
      location: _location,
    });
    const tmpResult = NotificationSettingsUtils;
  },
  updateChannelOverrideSettingsBulk(guildId, channel_overrides, OptedOut, _location) {
    _require = guildId;
    importDefault = channel_overrides;
    dependencyMap = OptedOut;
    const keys = SnowflakeUtilsDefault.keys(channel_overrides);
    const manyCurrentChannelSettings = require("NotificationSettingsUtils").getManyCurrentChannelSettings(
      guildId,
      keys,
    );
    const obj2 = require("NotificationSettingsUtils");
    const result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guildId, { channel_overrides });
    const obj4 = { channel_overrides };
    DispatcherDefault.dispatch({
      type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
      guildId,
      overrides: channel_overrides,
    });
    const obj6 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: channel_overrides };
    const keys1 = SnowflakeUtilsDefault.keys(channel_overrides);
    const item = keys1.forEach((channelId) => {
      const obj = NotificationSettingsUtils;
      return obj.trackChannelNotificationSettingsUpdate({
        guildId,
        channelId,
        change: closure_1[channelId],
        previous: closure_4.get(channelId),
        label,
        location: _location,
      });
    });
  },
  updateAppDMOverrideSettings(guildId, id, id2, settings, NotificationLabel2) {
    const currentChannelSettings = NotificationSettingsUtils.getCurrentChannelSettings(guildId, id);
    const result = UserGuildSettingsManagerDefault.saveUserGuildSettings(guildId, {
      channel_overrides: { [id]: settings },
    });
    const obj3 = { channel_overrides: { [id]: settings } };
    DispatcherDefault.dispatch({ type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings });
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.string(util.t.MlIsJ8));
    const obj5 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings };
    const result1 = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate({
      updateType: constants.AUTHORIZED_APP_DM,
      guildId,
      channelId: id,
      applicationId: id2,
      change: settings,
      previous: currentChannelSettings,
      label: NotificationLabel2,
    });
  },
  setForumThreadsCreated(channel, arg1) {
    if (arg1) {
      let NEW_FORUM_THREADS_OFF = constants.NEW_FORUM_THREADS_ON;
      let tmp2 = constants;
    } else {
      NEW_FORUM_THREADS_OFF = constants.NEW_FORUM_THREADS_OFF;
      tmp2 = constants;
    }
    const obj = {
      guildId: channel.guild_id,
      channelId: channel.id,
      settings: {
        flags:
          (UserGuildSettingsStore.getChannelFlags(channel) &
            ~(arg1 ? tmp2.NEW_FORUM_THREADS_OFF : tmp2.NEW_FORUM_THREADS_ON)) |
          NEW_FORUM_THREADS_OFF,
      },
      label: null,
    };
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    obj.label = NotificationLabel.forumThreadsCreated(arg1);
    const result = this.updateChannelOverrideSettings(obj);
    const obj2 = {
      flags:
        (UserGuildSettingsStore.getChannelFlags(channel) &
          ~(arg1 ? tmp2.NEW_FORUM_THREADS_OFF : tmp2.NEW_FORUM_THREADS_ON)) |
        NEW_FORUM_THREADS_OFF,
    };
    const tmp3 = arg1 ? tmp2.NEW_FORUM_THREADS_OFF : tmp2.NEW_FORUM_THREADS_ON;
  },
  setAccountFlag(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp5;
              closure_128_0 = undefined;
              const setFlagResult = closure_0(1385).setFlag(
                UserGuildSettingsStore.accountNotificationSettings.flags,
                closure_0,
                tmp2,
              );
              closure_128_0 = setFlagResult;
              const HTTP = closure_0(1271).HTTP;
              const request = { url: constants.ACCOUNT_NOTIFICATION_SETTINGS, body: null, rejectWithError: null };
              const obj5 = { flags: setFlagResult };
              request.body = obj5;
              const obj10 = closure_0(1385);
              request.rejectWithError = closure_0(1271).rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              const obj6 = { value: HTTP.patch(request), done: false };
              return obj6;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const obj8 = { type: "NOTIFICATION_SETTINGS_UPDATE", settings: null };
              const obj9 = { flags: closure_128_0 };
              obj8.settings = obj9;
              dependencyMap = 2;
              c3 = 1;
              const obj11 = { value: tmp2(573).dispatch(obj8), done: false };
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

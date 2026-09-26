// === Module 6534: OptInChannelsActionCreators ===

// Module 6534 (OptInChannelsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2026 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import ImpersonateActionCreators from "ImpersonateActionCreators" /* 5864 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import UserGuildSettingsManagerDefault from "UserGuildSettingsManager" /* 6537 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ImpersonateStore from "ImpersonateStore" /* 2101 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;

const require = globalThis.__r;

require = fn;
let closure_10 = async function _persistOptInChannelUpdates2(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          if (null != closure_0) {
            if (!fullServerPreview.isFullServerPreview(closure_0)) {
              const obj5 = {};
              const obj6 = { channel_overrides: tmp22 };
              obj5[closure_0] = obj6;
              c4 = 1;
              c5 = 1;
              const obj7 = { value: UserGuildSettingsManagerDefault.saveUserGuildSettingsBulk(obj5), done: false };
              return obj7;
            }
          }
          c5 = 3;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const obj8 = { type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES", guildId: closure_130_0, updates: closure_130_1 };
        closure_131_1(closure_131_2[10]).dispatch(obj8);
        const obj = closure_131_1(closure_131_2[10]);
      }
      c5 = 3;
      const obj9 = { value, done: true };
      return obj9;
    } catch (tmp16) {
      c5 = tmp;
      throw tmp16;
    }
  }
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const UserSettingsConstants = fn(1084);
({ ChannelNotificationSettingsFlags: closure_8, GuildNotificationSettingsFlags: closure_9 } = UserSettingsConstants);
let apply = fn(12);
const size = fn(2);
let result = size.fileFinishedImporting("modules/opt_in_channels/OptInChannelsActionCreators.tsx");

export const setOptInChannel = function setOptInChannel(guild_id, id, optInEnabled, location) {
  if (null != guild_id) {
    if (ImpersonateStore.isFullServerPreview(guild_id)) {
      if (optInEnabled) {
        const items = [id];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (optInEnabled) {
        let items2 = [];
      } else {
        items2 = [id];
      }
      const result = ImpersonateActionCreators.updateImpersonatedChannels(guild_id, items1, items2);
    } else {
      const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
      let setFlagResult = channelIdFlags;
      if (!optInEnabled) {
        setFlagResult = FlagUtils.setFlag(channelIdFlags, constants.FAVORITED, false);
      }
      const obj3 = { flags: null };
      const currentChannelSettings = NotificationSettingsUtils.getCurrentChannelSettings(guild_id, id);
      obj3.flags = FlagUtils.setFlag(setFlagResult, constants.OPT_IN_ENABLED, optInEnabled);
      const obj6 = {};
      const obj7 = { channel_overrides: null };
      const obj8 = {};
      obj8[id] = obj3;
      obj7.channel_overrides = obj8;
      obj6[guild_id] = obj7;
      const result1 = UserGuildSettingsManagerDefault.saveUserGuildSettingsBulk(obj6);
      const obj10 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: guild_id, channelId: id, settings: obj3 };
      DispatcherDefault.dispatch(obj10);
      const obj12 = { guildId: guild_id, channelId: id, change: obj3, previous: currentChannelSettings, label: null, location: null };
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      obj12.label = NotificationLabel.optedIn(optInEnabled);
      obj12.location = location;
      const result2 = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate(obj12);
      const result3 = UserSettingsProtoActionCreators.updateUserGuildSettings(guild_id, (guildOnboardingProgress) => {
        let hasFlagResult = require("FlagUtils").hasFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
        if (hasFlagResult) {
          hasFlagResult = !require("FlagUtils").hasFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
          const tmpResult = require("FlagUtils");
        }
        let flag = !hasFlagResult;
        if (!hasFlagResult) {
          guildOnboardingProgress.guildOnboardingProgress = require("FlagUtils").addFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
          const tmpResult3 = require("FlagUtils");
          guildOnboardingProgress.guildOnboardingProgress = require("FlagUtils").setFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
          flag = true;
          const tmpResult4 = require("FlagUtils");
        }
        return flag;
      }, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
      const obj15 = {};
      const obj14 = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild_id));
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(id)));
      let str = "remove";
      if (optInEnabled) {
        str = "add";
      }
      obj15.action_type = str;
      obj15.location = location;
      obj14.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj15);
    }
  }
};
export const updateOptInChannelsImmediate = function updateOptInChannelsImmediate(guildId, channelId, optInEnabled, location) {
  if (null != guildId) {
    if (ImpersonateStore.isFullServerPreview(guildId)) {
      if (optInEnabled) {
        const items = [channelId];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (optInEnabled) {
        let items2 = [];
      } else {
        items2 = [channelId];
      }
      const result = ImpersonateActionCreators.updateImpersonatedChannels(guildId, items1, items2);
      const result1 = ImpersonateActionCreators.updateImpersonatedData(guildId, { optInEnabled: true });
      const tmp26Result = ImpersonateActionCreators;
    } else {
      const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, channelId);
      let setFlagResult = channelIdFlags;
      if (!optInEnabled) {
        setFlagResult = FlagUtils.setFlag(channelIdFlags, constants.FAVORITED, false);
      }
      const obj4 = { flags: null };
      const currentChannelSettings = NotificationSettingsUtils.getCurrentChannelSettings(guildId, channelId);
      obj4.flags = FlagUtils.setFlag(setFlagResult, constants.OPT_IN_ENABLED, optInEnabled);
      if (!UserGuildSettingsStore.isOptInEnabled(guildId)) {
        const tmp6Result = FlagUtils;
        const setFlagResult1 = FlagUtils.setFlag(UserGuildSettingsStore.getGuildFlags(guildId), constants2.OPT_IN_CHANNELS_ON, true);
        const obj6 = {};
        const obj8 = { channel_overrides: null, flags: null };
        const obj9 = {};
        obj9[channelId] = obj4;
        obj8.channel_overrides = obj9;
        obj8.flags = setFlagResult1;
        obj6[guildId] = obj8;
        const result2 = UserGuildSettingsManagerDefault.saveUserGuildSettingsBulk(obj6);
      }
      const obj10 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId, settings: obj4 };
      DispatcherDefault.dispatch(obj10);
      const obj12 = { guildId, channelId, change: obj4, previous: currentChannelSettings, label: null, location: null };
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      obj12.label = NotificationLabel.optedIn(optInEnabled);
      obj12.location = location;
      const result3 = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate(obj12);
      const tmp6Result5 = NotificationSettingsUtils;
      const result4 = UserSettingsProtoActionCreators.updateUserGuildSettings(guildId, (guildOnboardingProgress) => {
        let hasFlagResult = require("FlagUtils").hasFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
        if (hasFlagResult) {
          hasFlagResult = !require("FlagUtils").hasFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
          const tmpResult = require("FlagUtils");
        }
        let flag = !hasFlagResult;
        if (!hasFlagResult) {
          guildOnboardingProgress.guildOnboardingProgress = require("FlagUtils").addFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
          const tmpResult3 = require("FlagUtils");
          guildOnboardingProgress.guildOnboardingProgress = require("FlagUtils").setFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
          flag = true;
          const tmpResult4 = require("FlagUtils");
        }
        return flag;
      }, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
      const tmp6Result6 = UserSettingsProtoActionCreators;
      const obj13 = {};
      const obj16 = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      const tmp6Result7 = AppAnalyticsUtils;
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(channelId)));
      let str = "remove";
      if (optInEnabled) {
        str = "add";
      }
      obj13.action_type = str;
      obj13.location = location;
      obj16.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj13);
      const tmp6Result8 = AppAnalyticsUtils;
    }
  }
};
export const updateOptInChannelsBatched = apply.debounce((arg0, arg1) => (function _persistOptInChannelUpdates() {
  const self = this;
  const apply = closure_1_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
})(arg0, arg1), 1000);
export const bulkOptInChannels = function bulkOptInChannels(id, arr, arg2) {
  _require = id;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let channel_overrides;
  if (null != id) {
    if (ImpersonateStore.isFullServerPreview(id)) {
      const result = require("ImpersonateActionCreators").updateImpersonatedChannels(id, arr, []);
      if (flag) {
        const result1 = tmp22(5864).updateImpersonatedData(id, { optInEnabled: true });
        const tmp22Result = tmp22(5864);
      }
      const obj12 = require("ImpersonateActionCreators");
      tmp22 = _require;
    } else {
      channel_overrides = {};
      const item = arr.forEach((item) => {
        const obj = { flags: null };
        const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(closure_0, item);
        obj.flags = FlagUtils.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true);
        obj[item] = obj;
      });
      if (flag) {
        const obj6 = require("FlagUtils");
        const setFlagResult = require("FlagUtils").setFlag(UserGuildSettingsStore.getGuildFlags(id), constants2.OPT_IN_CHANNELS_ON, true);
        const obj4 = { flags: setFlagResult, channel_overrides };
        const result2 = channel_overrides(6540).updateGuildAndChannelNotificationSettings(id, obj4, require("NotificationSettingsUtils").NotificationLabels.OptedIn);
        const obj7 = channel_overrides(6540);
        const obj8 = {};
        const obj9 = channel_overrides(1241);
        const merged = Object.assign(require("AppAnalyticsUtils").collectGuildAnalyticsMetadata(id));
        obj8.action_type = "add_many_and_enable_guild";
        obj8.location = location;
        obj9.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj8);
        const obj11 = require("AppAnalyticsUtils");
      } else {
        const result3 = channel_overrides(6540).updateChannelOverrideSettingsBulk(id, channel_overrides, require("NotificationSettingsUtils").NotificationLabels.OptedIn);
        const obj2 = channel_overrides(6540);
        const obj10 = {};
        const obj3 = channel_overrides(1241);
        const merged1 = Object.assign(require("AppAnalyticsUtils").collectGuildAnalyticsMetadata(id));
        obj10.action_type = "add_many";
        obj10.location = location;
        obj3.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj10);
        const obj5 = require("AppAnalyticsUtils");
      }
    }
  }
};
export const bulkOptOutChannels = function bulkOptOutChannels(id, arr, location) {
  _require = id;
  if (null != id) {
    if (ImpersonateStore.isFullServerPreview(id)) {
      const result = require("ImpersonateActionCreators").updateImpersonatedChannels(id, [], arr);
      const obj6 = require("ImpersonateActionCreators");
    } else {
      const obj = {};
      const item = arr.forEach((item) => {
        obj = { flags: null };
        const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(closure_0, item);
        obj.flags = FlagUtils.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, false);
        obj[item] = obj;
      });
      const result1 = obj(6540).updateChannelOverrideSettingsBulk(id, obj, require("NotificationSettingsUtils").NotificationLabels.OptedOut);
      const obj2 = obj(6540);
      const obj4 = {};
      const obj3 = obj(1241);
      const merged = Object.assign(require("AppAnalyticsUtils").collectGuildAnalyticsMetadata(id));
      obj4.action_type = "remove_many";
      obj4.location = location;
      obj3.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj4);
      const obj5 = require("AppAnalyticsUtils");
    }
  }
};
export const setGuildOptIn = function setGuildOptIn(id, optInEnabled, location) {
  if (ImpersonateStore.isFullServerPreview(id)) {
    const obj2 = { optInEnabled };
    const result = ImpersonateActionCreators.updateImpersonatedData(id, obj2);
  } else {
    const guildFlags = UserGuildSettingsStore.getGuildFlags(id);
    const obj5 = { flags: null };
    const obj = NotificationSettingsModalActionCreatorsDefault;
    obj5.flags = FlagUtils.setFlag(guildFlags, constants2.OPT_IN_CHANNELS_ON, optInEnabled);
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result1 = obj.updateGuildNotificationSettings(id, obj5, NotificationLabel.optedIn(optInEnabled));
    const obj8 = {};
    const obj4 = AnalyticsUtilsDefault;
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(id));
    let str = "guild_disabled";
    if (optInEnabled) {
      str = "guild_enabled";
    }
    obj8.action_type = str;
    obj8.location = location;
    obj4.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj8);
  }
};
export const setIsFavorite = function setIsFavorite(guildId, id, setting, location) {
  if (null != guildId) {
    if (!ImpersonateStore.isFullServerPreview(guildId)) {
      const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, id);
      const hasFlagResult = FlagUtils.hasFlag(channelIdFlags, constants.OPT_IN_ENABLED);
      let tmp9 = !hasFlagResult;
      if (!hasFlagResult) {
        tmp9 = setting;
      }
      let setFlagResult = channelIdFlags;
      if (tmp9) {
        setFlagResult = FlagUtils.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true);
        const tmp5Result = FlagUtils;
      }
      const channel = ChannelStore.getChannel(id);
      let name;
      if (channel != null) {
        name = channel.name;
      }
      if (null != name) {
        if ("" !== name) {
          const intl = util.intl;
          const t = { message: null, assertiveness: "polite" };
          const obj2 = { channelName: name };
          t.message = intl.formatToPlainString(setting ? t.CcNVYB : t.zSYTEX, obj2);
          const tmp15 = setting ? t.CcNVYB : t.zSYTEX;
        }
      }
      const obj3 = { guildId, channelId: id, settings: null, label: null, accessibilityAnnouncement: null };
      const obj4 = { flags: null };
      const obj5 = NotificationSettingsModalActionCreatorsDefault;
      obj4.flags = FlagUtils.setFlag(setFlagResult, constants.FAVORITED, setting);
      obj3.settings = obj4;
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      obj3.label = NotificationLabel.favorited(setting);
      obj3.accessibilityAnnouncement = undefined;
      const result = obj5.updateChannelOverrideSettings(obj3);
      const tmp5Result3 = FlagUtils;
      const obj6 = {};
      const obj9 = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      let str2 = "unfavorited";
      if (setting) {
        str2 = "favorited";
      }
      obj6.action_type = str2;
      obj6.location = location;
      obj9.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj6);
      const tmp5Result4 = AppAnalyticsUtils;
    }
  }
};
export const setMessagesFavorite = function setMessagesFavorite(id, setting) {
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(null, id);
  const obj2 = { guildId: null, channelId: id, settings: null, label: null };
  const obj3 = { flags: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  obj3.flags = FlagUtils.setFlag(channelIdFlags, constants.FAVORITED, setting);
  obj2.settings = obj3;
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  obj2.label = NotificationLabel.favorited(setting);
  const result = obj.updateChannelOverrideSettings(obj2);
};
export const enableGuildNotice = function enableGuildNotice(guildId) {
  const result = UserSettingsProtoActionCreators.updateUserGuildSettings(guildId, (guildOnboardingProgress) => {
    const hasFlagResult = require("FlagUtils").hasFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
    let flag = !hasFlagResult;
    if (!hasFlagResult) {
      guildOnboardingProgress.guildOnboardingProgress = require("FlagUtils").addFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
      flag = true;
      const tmpResult = require("FlagUtils");
    }
    return flag;
  }, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const dismissGuildNotice = function dismissGuildNotice(guildId) {
  const result = UserSettingsProtoActionCreators.updateUserGuildSettings(guildId, (guildOnboardingProgress) => {
    let hasFlagResult = require("FlagUtils").hasFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
    if (hasFlagResult) {
      hasFlagResult = !require("FlagUtils").hasFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
      const tmpResult = require("FlagUtils");
    }
    let flag = !hasFlagResult;
    if (!hasFlagResult) {
      guildOnboardingProgress.guildOnboardingProgress = require("FlagUtils").addFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
      const tmpResult3 = require("FlagUtils");
      guildOnboardingProgress.guildOnboardingProgress = require("FlagUtils").setFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
      flag = true;
      const tmpResult4 = require("FlagUtils");
    }
    return flag;
  }, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const clearGuildNotice = function clearGuildNotice(guildId) {
  const items = [...UserGuildSettingsStore.getOptedInChannels(guildId)];
  _require = guildId;
  let obj;
  if (null != guildId) {
    if (ImpersonateStore.isFullServerPreview(guildId)) {
      const result = require("ImpersonateActionCreators").updateImpersonatedChannels(guildId, [], items);
      const obj6 = require("ImpersonateActionCreators");
    } else {
      obj = {};
      const item = items.forEach((item) => {
        obj = { flags: null };
        const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(closure_0, item);
        obj.flags = FlagUtils.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, false);
        obj[item] = obj;
      });
      const result1 = obj(6540).updateChannelOverrideSettingsBulk(guildId, obj, require("NotificationSettingsUtils").NotificationLabels.OptedOut);
      const obj2 = obj(6540);
      const obj4 = {};
      const obj3 = obj(1241);
      const merged = Object.assign(require("AppAnalyticsUtils").collectGuildAnalyticsMetadata(guildId));
      obj4.action_type = "remove_many";
      obj4.location = undefined;
      obj3.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj4);
      const obj5 = require("AppAnalyticsUtils");
    }
  }
  const result2 = require("UserSettingsProtoActionCreators").updateUserGuildSettings(guildId, (guildOnboardingProgress) => {
    guildOnboardingProgress.guildOnboardingProgress = guildId(1385).setFlag(guildOnboardingProgress.guildOnboardingProgress, guildId(1186).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
    obj = guildId(1385);
    guildOnboardingProgress.guildOnboardingProgress = guildId(1385).setFlag(guildOnboardingProgress.guildOnboardingProgress, guildId(1186).GuildOnboardingProgress.GUILD_NOTICE_CLEARED, false);
    return true;
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
  const obj7 = require("UserSettingsProtoActionCreators");
};
export const dimissFavoriteSuggestion = function dimissFavoriteSuggestion(guildId, channelId) {
  DispatcherDefault.dispatch({ type: "DISMISS_FAVORITE_SUGGESTION", guildId, channelId });
};
export const setRecentlyActiveCollapsed = function setRecentlyActiveCollapsed(guildId, collapsed) {
  DispatcherDefault.dispatch({ type: "SET_RECENTLY_ACTIVE_COLLAPSED", guildId, collapsed });
};
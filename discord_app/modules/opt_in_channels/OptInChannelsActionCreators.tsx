// discord_app/modules/opt_in_channels/OptInChannelsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import intl2 from "../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettingsProtoActionCreators from "../user_settings/UserSettingsProtoActionCreators.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import ImpersonateActionCreators from "../impersonate/ImpersonateActionCreators.tsx";
import NotificationSettingsUtils from "../../utils/NotificationSettingsUtils.tsx";
import UserGuildSettingsManagerDefault from "../user_settings/UserGuildSettingsManager.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../actions/NotificationSettingsModalActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import 00012__ from "../../../_runtime/metro/00012__.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_2, closure_3;

let c9;
let metroImportAll;
const f92580 = (guildOnboardingProgress) => {
  obj = require("FlagUtils");
  let hasFlagResult = obj.hasFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
  if (hasFlagResult) {
    const tmpResult = require("FlagUtils");
    hasFlagResult = !tmpResult.hasFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
  }
  let flag = !hasFlagResult;
  if (flag) {
    const tmpResult3 = require("FlagUtils");
    guildOnboardingProgress.guildOnboardingProgress = tmpResult3.addFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
    const tmpResult4 = require("FlagUtils");
    guildOnboardingProgress.guildOnboardingProgress = tmpResult4.setFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
    flag = true;
  }
  return flag;
};
let obj = function _persistOptInChannelUpdates2() {
  let fullServerPreview;
  obj = _asyncToGenerator(async (guildId, updates) => {
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj4;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              if (null != guildId) {
                if (!fullServerPreview.isFullServerPreview(guildId)) {
                  const obj5 = {};
                  const obj6 = { channel_overrides: tmp20 };
                  obj5[guildId] = obj6;
                  c4 = 1;
                  c5 = 1;
                  const obj7 = { value: obj4.saveUserGuildSettingsBulk(obj5), done: false };
                  obj4 = UserGuildSettingsManagerDefault;
                  return obj7;
                }
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            const obj9 = { type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES", guildId, updates };
            obj = closure_131_1(closure_131_2[10]);
            obj.dispatch(obj9);
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          c5 = 3;
          throw tmp15;
        }
      }
    })();
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
({ ChannelNotificationSettingsFlags: metroImportAll, GuildNotificationSettingsFlags: c9 } = UserSettingsConstants);
const debounceResult = module_12.debounce((arg0, arg1) => {
  function _persistOptInChannelUpdates() {
    return obj(...arguments);
  }
  return _persistOptInChannelUpdates(arg0, arg1);
}, 1000);
let result = size.fileFinishedImporting("modules/opt_in_channels/OptInChannelsActionCreators.tsx");

export const setOptInChannel = function setOptInChannel(guild_id, id, optInEnabled, location) {
  let NotificationLabel;
  let obj4;
  let obj8;
  let str;
  if (null != guild_id) {
    if (ImpersonateStore.isFullServerPreview(guild_id)) {
      let items1;
      let items2;
      const updateImpersonatedChannels = ImpersonateActionCreators.updateImpersonatedChannels;
      ImpersonateActionCreators;
      if (optInEnabled) {
        const items = [id];
        items1 = items;
      } else {
        items1 = [];
      }
      if (optInEnabled) {
        items2 = [];
      } else {
        items2 = [id];
      }
      const result = updateImpersonatedChannels(guild_id, items1, items2);
    } else {
      const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
      let setFlagResult = channelIdFlags;
      if (!optInEnabled) {
        obj = FlagUtils;
        setFlagResult = obj.setFlag(channelIdFlags, metroImportAll.FAVORITED, false);
      }
      const obj3 = { flags: obj4.setFlag(setFlagResult, metroImportAll.OPT_IN_ENABLED, optInEnabled) };
      const obj2 = NotificationSettingsUtils;
      const currentChannelSettings = obj2.getCurrentChannelSettings(guild_id, id);
      const obj6 = {};
      const obj7 = { channel_overrides: obj8 };
      obj8 = {};
      obj8[id] = obj3;
      obj6[guild_id] = obj7;
      obj4 = FlagUtils;
      const obj5 = UserGuildSettingsManagerDefault;
      const result1 = obj5.saveUserGuildSettingsBulk(obj6);
      const obj10 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: guild_id, channelId: id, settings: obj3 };
      const obj9 = DispatcherDefault;
      obj9.dispatch(obj10);
      const obj11 = { guildId: guild_id, channelId: id, change: obj3, previous: currentChannelSettings, label: NotificationLabel.optedIn(optInEnabled), location };
      const trackChannelNotificationSettingsUpdate = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate;
      NotificationSettingsUtils;
      NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result2 = trackChannelNotificationSettingsUpdate(obj11);
      const obj12 = UserSettingsProtoActionCreators;
      const result3 = obj12.updateUserGuildSettings(guild_id, f92580, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
      const obj13 = { action_type: str, location };
      const track = AnalyticsUtilsDefault.track;
      const CHANNEL_LIST_UPDATED = AnalyticEvents.CHANNEL_LIST_UPDATED;
      AnalyticsUtilsDefault;
      const obj14 = AppAnalyticsUtils;
      const merged = Object.assign(obj14.collectGuildAnalyticsMetadata(guild_id));
      const obj15 = AppAnalyticsUtils;
      const merged1 = Object.assign(obj15.collectChannelAnalyticsMetadata(ChannelStore.getChannel(id)));
      str = "remove";
      if (optInEnabled) {
        str = "add";
      }
      track(CHANNEL_LIST_UPDATED, obj13);
    }
  }
};
export const updateOptInChannelsImmediate = function updateOptInChannelsImmediate(guildId, channelId, optInEnabled, location) {
  let NotificationLabel;
  let obj5;
  let obj9;
  let str;
  if (null != guildId) {
    if (ImpersonateStore.isFullServerPreview(guildId)) {
      let items1;
      let items2;
      const updateImpersonatedChannels = ImpersonateActionCreators.updateImpersonatedChannels;
      ImpersonateActionCreators;
      if (optInEnabled) {
        const items = [channelId];
        items1 = items;
      } else {
        items1 = [];
      }
      if (optInEnabled) {
        items2 = [];
      } else {
        items2 = [channelId];
      }
      const result = updateImpersonatedChannels(guildId, items1, items2);
      const tmp28Result = ImpersonateActionCreators;
      const result1 = tmp28Result.updateImpersonatedData(guildId, { optInEnabled: true });
    } else {
      const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, channelId);
      let setFlagResult = channelIdFlags;
      if (!optInEnabled) {
        let flag = false;
        const obj2 = FlagUtils;
        setFlagResult = obj2.setFlag(channelIdFlags, metroImportAll.FAVORITED, false);
      }
      const obj4 = { flags: obj5.setFlag(setFlagResult, metroImportAll.OPT_IN_ENABLED, optInEnabled) };
      const obj3 = NotificationSettingsUtils;
      const currentChannelSettings = obj3.getCurrentChannelSettings(guildId, channelId);
      obj5 = FlagUtils;
      if (!UserGuildSettingsStore.isOptInEnabled(guildId)) {
        const tmp6Result = FlagUtils;
        const obj6 = {};
        const obj8 = { channel_overrides: obj9, flags: tmp6Result.setFlag(UserGuildSettingsStore.getGuildFlags(guildId), constants2.OPT_IN_CHANNELS_ON, true) };
        obj9 = {};
        obj9[channelId] = obj4;
        obj6[guildId] = obj8;
        const obj7 = UserGuildSettingsManagerDefault;
        const result2 = obj7.saveUserGuildSettingsBulk(obj6);
      }
      const obj10 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId, settings: obj4 };
      const obj11 = DispatcherDefault;
      obj11.dispatch(obj10);
      const obj12 = { guildId, channelId, change: obj4, previous: currentChannelSettings, label: NotificationLabel.optedIn(optInEnabled), location };
      const trackChannelNotificationSettingsUpdate = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate;
      NotificationSettingsUtils;
      NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result3 = trackChannelNotificationSettingsUpdate(obj12);
      const tmp6Result6 = UserSettingsProtoActionCreators;
      const result4 = tmp6Result6.updateUserGuildSettings(guildId, f92580, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
      const obj13 = { action_type: str, location };
      const track = AnalyticsUtilsDefault.track;
      const CHANNEL_LIST_UPDATED = AnalyticEvents.CHANNEL_LIST_UPDATED;
      AnalyticsUtilsDefault;
      const tmp6Result7 = AppAnalyticsUtils;
      const merged = Object.assign(tmp6Result7.collectGuildAnalyticsMetadata(guildId));
      const tmp6Result8 = AppAnalyticsUtils;
      const merged1 = Object.assign(tmp6Result8.collectChannelAnalyticsMetadata(ChannelStore.getChannel(channelId)));
      str = "remove";
      if (optInEnabled) {
        str = "add";
      }
      track(CHANNEL_LIST_UPDATED, obj13);
    }
  }
};
export const updateOptInChannelsBatched = debounceResult;
export const bulkOptInChannels = function bulkOptInChannels(id, arr, arg2) {
  _require = id;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let channel_overrides;
  if (null != id) {
    if (ImpersonateStore.isFullServerPreview(id)) {
      const obj10 = require("ImpersonateActionCreators");
      const result = obj10.updateImpersonatedChannels(id, arr, []);
      const tmp24 = _require;
      if (flag) {
        const tmp24Result = tmp24(5942);
        const result1 = tmp24Result.updateImpersonatedData(id, { optInEnabled: true });
      }
    } else {
      channel_overrides = {};
      const item = arr.forEach((item) => {
        let channelIdFlags;
        let obj2;
        obj = { flags: obj2.setFlag(channelIdFlags, metroImportAll.OPT_IN_ENABLED, true) };
        channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(id, item);
        obj[item] = obj;
        obj2 = FlagUtils;
      });
      if (flag) {
        const obj5 = require("FlagUtils");
        const obj3 = { flags: obj5.setFlag(UserGuildSettingsStore.getGuildFlags(id), constants2.OPT_IN_CHANNELS_ON, true), channel_overrides };
        const obj6 = channel_overrides(6614);
        const result2 = obj6.updateGuildAndChannelNotificationSettings(id, obj3, require("NotificationSettingsUtils").NotificationLabels.OptedIn);
        const obj7 = { action_type: "add_many_and_enable_guild", location };
        const track2 = channel_overrides(1252).track;
        const CHANNEL_LIST_UPDATED2 = AnalyticEvents.CHANNEL_LIST_UPDATED;
        channel_overrides(1252);
        const obj9 = require("AppAnalyticsUtils");
        const merged = Object.assign(obj9.collectGuildAnalyticsMetadata(id));
        track2(CHANNEL_LIST_UPDATED2, obj7);
      } else {
        let obj2 = channel_overrides(6614);
        const result3 = obj2.updateChannelOverrideSettingsBulk(id, channel_overrides, require("NotificationSettingsUtils").NotificationLabels.OptedIn);
        const obj8 = { action_type: "add_many", location };
        const track = channel_overrides(1252).track;
        const CHANNEL_LIST_UPDATED = AnalyticEvents.CHANNEL_LIST_UPDATED;
        channel_overrides(1252);
        const obj4 = require("AppAnalyticsUtils");
        const merged1 = Object.assign(obj4.collectGuildAnalyticsMetadata(id));
        track(CHANNEL_LIST_UPDATED, obj8);
      }
    }
  }
};
export const bulkOptOutChannels = function bulkOptOutChannels(id, arr, location) {
  _require = id;
  if (null != id) {
    if (ImpersonateStore.isFullServerPreview(id)) {
      const obj5 = require("ImpersonateActionCreators");
      const result = obj5.updateImpersonatedChannels(id, [], arr);
    } else {
      obj = {};
      const item = arr.forEach((item) => {
        let channelIdFlags;
        let obj2;
        obj = { flags: obj2.setFlag(channelIdFlags, metroImportAll.OPT_IN_ENABLED, false) };
        channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, item);
        obj[item] = obj;
        obj2 = FlagUtils;
      });
      const obj2 = obj(6614);
      const result1 = obj2.updateChannelOverrideSettingsBulk(id, obj, require("NotificationSettingsUtils").NotificationLabels.OptedOut);
      const obj3 = { action_type: "remove_many", location };
      const track = obj(1252).track;
      const CHANNEL_LIST_UPDATED = AnalyticEvents.CHANNEL_LIST_UPDATED;
      obj(1252);
      const obj4 = require("AppAnalyticsUtils");
      const merged = Object.assign(obj4.collectGuildAnalyticsMetadata(id));
      track(CHANNEL_LIST_UPDATED, obj3);
    }
  }
};
export const setGuildOptIn = function setGuildOptIn(id, optInEnabled, location) {
  let obj2;
  let str;
  if (ImpersonateStore.isFullServerPreview(id)) {
    const obj3 = { optInEnabled };
    const obj5 = ImpersonateActionCreators;
    const result = obj5.updateImpersonatedData(id, obj3);
  } else {
    const guildFlags = UserGuildSettingsStore.getGuildFlags(id);
    obj = { flags: obj2.setFlag(guildFlags, constants2.OPT_IN_CHANNELS_ON, optInEnabled) };
    const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
    NotificationSettingsModalActionCreatorsDefault;
    obj2 = FlagUtils;
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result1 = updateGuildNotificationSettings(id, obj, NotificationLabel.optedIn(optInEnabled));
    const obj6 = { action_type: str, location };
    const track = AnalyticsUtilsDefault.track;
    const CHANNEL_LIST_UPDATED = AnalyticEvents.CHANNEL_LIST_UPDATED;
    AnalyticsUtilsDefault;
    const obj4 = AppAnalyticsUtils;
    const merged = Object.assign(obj4.collectGuildAnalyticsMetadata(id));
    str = "guild_disabled";
    if (optInEnabled) {
      str = "guild_enabled";
    }
    track(CHANNEL_LIST_UPDATED, obj6);
  }
};
export const setIsFavorite = function setIsFavorite(guildId, id, setting, location) {
  let NotificationLabel;
  let obj3;
  let obj5;
  let str2;
  let tmp5Result3;
  if (null != guildId) {
    if (!ImpersonateStore.isFullServerPreview(guildId)) {
      const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, id);
      let setFlagResult = channelIdFlags;
      obj = FlagUtils;
      const tmp9 = !obj.hasFlag(channelIdFlags, metroImportAll.OPT_IN_ENABLED) && setting;
      if (tmp9) {
        const tmp5Result = FlagUtils;
        setFlagResult = tmp5Result.setFlag(channelIdFlags, metroImportAll.OPT_IN_ENABLED, true);
      }
      const channel = ChannelStore.getChannel(id);
      let name;
      if (channel != null) {
        name = channel.name;
      }
      let tmp14;
      if (null != name) {
        if ("" !== name) {
          const intl = intl2.intl;
          const formatToPlainString = intl.formatToPlainString;
          const t = intl2.t;
          const obj2 = { message: formatToPlainString(setting ? t.CcNVYB : t.zSYTEX, obj3), assertiveness: "polite" };
          tmp14 = obj2;
          obj3 = { channelName: name };
        }
      }
      const obj4 = { guildId, channelId: id, settings: obj5, label: NotificationLabel.favorited(setting), accessibilityAnnouncement: tmp14 };
      obj5 = { flags: tmp5Result3.setFlag(setFlagResult, metroImportAll.FAVORITED, setting) };
      const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
      NotificationSettingsModalActionCreatorsDefault;
      tmp5Result3 = FlagUtils;
      NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateChannelOverrideSettings(obj4);
      const obj6 = { action_type: str2, location };
      const track = AnalyticsUtilsDefault.track;
      const CHANNEL_LIST_UPDATED = AnalyticEvents.CHANNEL_LIST_UPDATED;
      AnalyticsUtilsDefault;
      const tmp5Result4 = AppAnalyticsUtils;
      const merged = Object.assign(tmp5Result4.collectGuildAnalyticsMetadata(guildId));
      str2 = "unfavorited";
      if (setting) {
        str2 = "favorited";
      }
      track(CHANNEL_LIST_UPDATED, obj6);
    }
  }
};
export const setMessagesFavorite = function setMessagesFavorite(id, setting) {
  let NotificationLabel;
  let obj2;
  let obj3;
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(null, id);
  obj = { guildId: null, channelId: id, settings: obj2, label: NotificationLabel.favorited(setting) };
  obj2 = { flags: obj3.setFlag(channelIdFlags, metroImportAll.FAVORITED, setting) };
  const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
  NotificationSettingsModalActionCreatorsDefault;
  obj3 = FlagUtils;
  NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = updateChannelOverrideSettings(obj);
};
export const enableGuildNotice = function enableGuildNotice(guildId) {
  obj = UserSettingsProtoActionCreators;
  const result = obj.updateUserGuildSettings(guildId, (guildOnboardingProgress) => {
    obj = require("FlagUtils");
    let flag = !obj.hasFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
    obj.hasFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
    if (flag) {
      const tmpResult = require("FlagUtils");
      guildOnboardingProgress.guildOnboardingProgress = tmpResult.addFlag(guildOnboardingProgress.guildOnboardingProgress, require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
      flag = true;
    }
    return flag;
  }, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const dismissGuildNotice = function dismissGuildNotice(guildId) {
  obj = UserSettingsProtoActionCreators;
  const result = obj.updateUserGuildSettings(guildId, f92580, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const clearGuildNotice = function clearGuildNotice(guildId) {
  const items = [...UserGuildSettingsStore.getOptedInChannels(guildId)];
  _require = guildId;
  obj = undefined;
  if (null != guildId) {
    if (ImpersonateStore.isFullServerPreview(guildId)) {
      const obj5 = require("ImpersonateActionCreators");
      const result = obj5.updateImpersonatedChannels(guildId, [], items);
    } else {
      obj = {};
      const item = items.forEach((item) => {
        let channelIdFlags;
        let obj2;
        obj = { flags: obj2.setFlag(channelIdFlags, metroImportAll.OPT_IN_ENABLED, false) };
        channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, item);
        obj[item] = obj;
        obj2 = FlagUtils;
      });
      let obj2 = obj(6614);
      const result1 = obj2.updateChannelOverrideSettingsBulk(guildId, obj, require("NotificationSettingsUtils").NotificationLabels.OptedOut);
      const obj3 = { action_type: "remove_many", location: undefined };
      const track = obj(1252).track;
      const CHANNEL_LIST_UPDATED = AnalyticEvents.CHANNEL_LIST_UPDATED;
      obj(1252);
      const obj4 = require("AppAnalyticsUtils");
      const merged = Object.assign(obj4.collectGuildAnalyticsMetadata(guildId));
      track(CHANNEL_LIST_UPDATED, obj3);
    }
  }
  const obj6 = require("UserSettingsProtoActionCreators");
  const result2 = obj6.updateUserGuildSettings(guildId, (guildOnboardingProgress) => {
    obj = guildId(dependencyMap[7]);
    guildOnboardingProgress.guildOnboardingProgress = obj.setFlag(guildOnboardingProgress.guildOnboardingProgress, guildId(dependencyMap[17]).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
    const obj2 = guildId(dependencyMap[7]);
    guildOnboardingProgress.guildOnboardingProgress = obj2.setFlag(guildOnboardingProgress.guildOnboardingProgress, guildId(dependencyMap[17]).GuildOnboardingProgress.GUILD_NOTICE_CLEARED, false);
    return true;
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const dimissFavoriteSuggestion = function dimissFavoriteSuggestion(guildId, channelId) {
  obj = DispatcherDefault;
  const obj2 = { type: "DISMISS_FAVORITE_SUGGESTION", guildId, channelId };
  obj.dispatch(obj2);
};
export const setRecentlyActiveCollapsed = function setRecentlyActiveCollapsed(guildId, collapsed) {
  obj = DispatcherDefault;
  const obj2 = { type: "SET_RECENTLY_ACTIVE_COLLAPSED", guildId, collapsed };
  obj.dispatch(obj2);
};
// discord_app/modules/opt_in_channels/OptInChannelsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import UserSettingsProtoActionCreators from "../user_settings/UserSettingsProtoActionCreators.tsx";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import ImpersonateActionCreators from "../impersonate/ImpersonateActionCreators.tsx";
import NotificationSettingsUtils from "../../utils/NotificationSettingsUtils.tsx";
import UserGuildSettingsManagerDefault from "../user_settings/UserGuildSettingsManager.tsx";
import NotificationSettingsModalActionCreatorsDefault from "../../actions/NotificationSettingsModalActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";

require = fn;
let closure_10 = async function _persistOptInChannelUpdates2(arg0) {
  if (c5 === 2) {
    c5 = 3;
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          if (null != closure_0) {
            if (!fullServerPreview.isFullServerPreview(closure_0)) {
              let obj3 = UserGuildSettingsManagerDefault;
              const obj1 = {};
              const obj2 = { channel_overrides: tmp22 };
              obj1[closure_0] = obj2;
              c4 = 1;
              c5 = 1;
              obj3 = { value: null, done: false };
              obj3.value = obj3.saveUserGuildSettingsBulk(obj1);
              return obj3;
            }
          }
          c5 = 3;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        obj = closure_131_1(closure_131_2[10]);
        const obj4 = {
          type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES",
          guildId: closure_130_0,
          updates: closure_130_1,
        };
        obj.dispatch(obj4);
      }
      c5 = 3;
      const obj5 = { value, done: true };
      return obj5;
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
        let obj = FlagUtils;
        setFlagResult = obj.setFlag(channelIdFlags, constants.FAVORITED, false);
      }
      let obj1 = NotificationSettingsUtils;
      obj = { flags: null };
      const currentChannelSettings = obj1.getCurrentChannelSettings(guild_id, id);
      let obj3 = FlagUtils;
      obj.flags = obj3.setFlag(setFlagResult, constants.OPT_IN_ENABLED, optInEnabled);
      let obj4 = UserGuildSettingsManagerDefault;
      obj = {};
      obj1 = { channel_overrides: null };
      const obj2 = {};
      obj2[id] = obj;
      obj1.channel_overrides = obj2;
      obj[guild_id] = obj1;
      const result1 = obj4.saveUserGuildSettingsBulk(obj);
      obj3 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: guild_id, channelId: id, settings: obj };
      DispatcherDefault.dispatch(obj3);
      obj4 = {
        guildId: guild_id,
        channelId: id,
        change: obj,
        previous: currentChannelSettings,
        label: null,
        location: null,
      };
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      obj4.label = NotificationLabel.optedIn(optInEnabled);
      obj4.location = location;
      const result2 = NotificationSettingsUtils.trackChannelNotificationSettingsUpdate(obj4);
      const result3 = UserSettingsProtoActionCreators.updateUserGuildSettings(
        guild_id,
        (guildOnboardingProgress) => {
          let hasFlagResult = require("FlagUtils").hasFlag(
            guildOnboardingProgress.guildOnboardingProgress,
            require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED,
          );
          if (hasFlagResult) {
            let tmpResult = require("FlagUtils");
            hasFlagResult = !tmpResult.hasFlag(
              guildOnboardingProgress.guildOnboardingProgress,
              require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN,
            );
          }
          let flag = !hasFlagResult;
          if (!hasFlagResult) {
            tmpResult = require("FlagUtils");
            guildOnboardingProgress.guildOnboardingProgress = tmpResult.addFlag(
              guildOnboardingProgress.guildOnboardingProgress,
              require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED,
            );
            guildOnboardingProgress.guildOnboardingProgress = require("FlagUtils").setFlag(
              guildOnboardingProgress.guildOnboardingProgress,
              require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN,
              false,
            );
            flag = true;
            const tmpResult1 = require("FlagUtils");
          }
          return flag;
        },
        UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION,
      );
      const obj5 = {};
      const obj14 = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guild_id));
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(id)));
      let str = "remove";
      if (optInEnabled) {
        str = "add";
      }
      obj5.action_type = str;
      obj5.location = location;
      obj14.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj5);
    }
  }
};
export const updateOptInChannelsImmediate = function updateOptInChannelsImmediate(
  guildId,
  channelId,
  optInEnabled,
  location,
) {
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
      let obj = UserGuildSettingsStore;
      const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guildId, channelId);
      let setFlagResult = channelIdFlags;
      if (!optInEnabled) {
        let obj1 = FlagUtils;
        setFlagResult = obj1.setFlag(channelIdFlags, constants.FAVORITED, false);
      }
      let obj2 = NotificationSettingsUtils;
      obj = { flags: null };
      const currentChannelSettings = obj2.getCurrentChannelSettings(guildId, channelId);
      let obj4 = FlagUtils;
      obj.flags = obj4.setFlag(setFlagResult, constants.OPT_IN_ENABLED, optInEnabled);
      if (!obj.isOptInEnabled(guildId)) {
        let tmp6Result = FlagUtils;
        const setFlagResult1 = tmp6Result.setFlag(obj.getGuildFlags(guildId), constants2.OPT_IN_CHANNELS_ON, true);
        obj = {};
        obj1 = { channel_overrides: null, flags: null };
        obj2 = {};
        obj2[channelId] = obj;
        obj1.channel_overrides = obj2;
        obj1.flags = setFlagResult1;
        obj[guildId] = obj1;
        const result2 = UserGuildSettingsManagerDefault.saveUserGuildSettingsBulk(obj);
      }
      const obj3 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId, settings: obj };
      DispatcherDefault.dispatch(obj3);
      tmp6Result = NotificationSettingsUtils;
      obj4 = { guildId, channelId, change: obj, previous: currentChannelSettings, label: null, location: null };
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      obj4.label = NotificationLabel.optedIn(optInEnabled);
      obj4.location = location;
      const result3 = tmp6Result.trackChannelNotificationSettingsUpdate(obj4);
      const result4 = UserSettingsProtoActionCreators.updateUserGuildSettings(
        guildId,
        (guildOnboardingProgress) => {
          let hasFlagResult = require("FlagUtils").hasFlag(
            guildOnboardingProgress.guildOnboardingProgress,
            require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED,
          );
          if (hasFlagResult) {
            let tmpResult = require("FlagUtils");
            hasFlagResult = !tmpResult.hasFlag(
              guildOnboardingProgress.guildOnboardingProgress,
              require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN,
            );
          }
          let flag = !hasFlagResult;
          if (!hasFlagResult) {
            tmpResult = require("FlagUtils");
            guildOnboardingProgress.guildOnboardingProgress = tmpResult.addFlag(
              guildOnboardingProgress.guildOnboardingProgress,
              require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED,
            );
            guildOnboardingProgress.guildOnboardingProgress = require("FlagUtils").setFlag(
              guildOnboardingProgress.guildOnboardingProgress,
              require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN,
              false,
            );
            flag = true;
            const tmpResult1 = require("FlagUtils");
          }
          return flag;
        },
        UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION,
      );
      const tmp6Result1 = UserSettingsProtoActionCreators;
      const obj5 = {};
      const obj16 = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
      const tmp6Result2 = AppAnalyticsUtils;
      const merged1 = Object.assign(
        AppAnalyticsUtils.collectChannelAnalyticsMetadata(ChannelStore.getChannel(channelId)),
      );
      let str = "remove";
      if (optInEnabled) {
        str = "add";
      }
      obj5.action_type = str;
      obj5.location = location;
      obj16.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj5);
      const tmp6Result3 = AppAnalyticsUtils;
    }
  }
};
export const updateOptInChannelsBatched = apply.debounce(
  (arg0, arg1) =>
    (function _persistOptInChannelUpdates() {
      const self = this;
      const apply = closure_1_10.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(arg0, arg1),
  1000,
);
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
        const result1 = tmp22(5552).updateImpersonatedData(id, { optInEnabled: true });
        const tmp22Result = tmp22(5552);
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
        const setFlagResult = require("FlagUtils").setFlag(
          UserGuildSettingsStore.getGuildFlags(id),
          constants2.OPT_IN_CHANNELS_ON,
          true,
        );
        channel_overrides = { flags: setFlagResult, channel_overrides: null };
        channel_overrides.channel_overrides = channel_overrides;
        const result2 = channel_overrides(7119).updateGuildAndChannelNotificationSettings(
          id,
          channel_overrides,
          require("NotificationSettingsUtils").NotificationLabels.OptedIn,
        );
        const obj7 = channel_overrides(7119);
        channel_overrides = {};
        const obj9 = channel_overrides(1242);
        const merged = Object.assign(require("AppAnalyticsUtils").collectGuildAnalyticsMetadata(id));
        channel_overrides.action_type = "add_many_and_enable_guild";
        channel_overrides.location = location;
        obj9.track(AnalyticEvents.CHANNEL_LIST_UPDATED, channel_overrides);
        const obj11 = require("AppAnalyticsUtils");
      } else {
        let obj1 = channel_overrides(7119);
        const result3 = obj1.updateChannelOverrideSettingsBulk(
          id,
          channel_overrides,
          require("NotificationSettingsUtils").NotificationLabels.OptedIn,
        );
        obj1 = {};
        const obj3 = channel_overrides(1242);
        const merged1 = Object.assign(require("AppAnalyticsUtils").collectGuildAnalyticsMetadata(id));
        obj1.action_type = "add_many";
        obj1.location = location;
        obj3.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj1);
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
      let obj = {};
      const item = arr.forEach((item) => {
        obj = { flags: null };
        const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(closure_0, item);
        obj.flags = FlagUtils.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, false);
        obj[item] = obj;
      });
      const result1 = obj(7119).updateChannelOverrideSettingsBulk(
        id,
        obj,
        require("NotificationSettingsUtils").NotificationLabels.OptedOut,
      );
      const obj2 = obj(7119);
      obj = {};
      const obj3 = obj(1242);
      const merged = Object.assign(require("AppAnalyticsUtils").collectGuildAnalyticsMetadata(id));
      obj.action_type = "remove_many";
      obj.location = location;
      obj3.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj);
      const obj5 = require("AppAnalyticsUtils");
    }
  }
};
export const setGuildOptIn = function setGuildOptIn(id, optInEnabled, location) {
  if (ImpersonateStore.isFullServerPreview(id)) {
    let obj = { optInEnabled };
    const result = ImpersonateActionCreators.updateImpersonatedData(id, obj);
  } else {
    const guildFlags = UserGuildSettingsStore.getGuildFlags(id);
    obj = { flags: FlagUtils.setFlag(guildFlags, constants2.OPT_IN_CHANNELS_ON, optInEnabled) };
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result1 = obj.updateGuildNotificationSettings(id, obj, NotificationLabel.optedIn(optInEnabled));
    const obj1 = {};
    const obj4 = AnalyticsUtilsDefault;
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(id));
    let str = "guild_disabled";
    if (optInEnabled) {
      str = "guild_enabled";
    }
    obj1.action_type = str;
    obj1.location = location;
    obj4.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj1);
  }
};
export const setIsFavorite = function setIsFavorite(id, id, setting, location) {
  if (null != id) {
    if (!ImpersonateStore.isFullServerPreview(id)) {
      const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(id, id);
      let obj = FlagUtils;
      const hasFlagResult = obj.hasFlag(channelIdFlags, constants.OPT_IN_ENABLED);
      let tmp9 = !hasFlagResult;
      if (!hasFlagResult) {
        tmp9 = setting;
      }
      let setFlagResult = channelIdFlags;
      if (tmp9) {
        let tmp5Result = FlagUtils;
        setFlagResult = tmp5Result.setFlag(channelIdFlags, constants.OPT_IN_ENABLED, true);
      }
      const obj3 = NotificationSettingsModalActionCreatorsDefault;
      obj = { flags: null };
      tmp5Result = FlagUtils;
      obj.flags = tmp5Result.setFlag(setFlagResult, constants.FAVORITED, setting);
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = obj3.updateChannelOverrideSettings(id, id, obj, NotificationLabel.favorited(setting));
      obj = {};
      const obj6 = AnalyticsUtilsDefault;
      const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(id));
      let str = "unfavorited";
      if (setting) {
        str = "favorited";
      }
      obj.action_type = str;
      obj.location = location;
      obj6.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj);
      const tmp5Result1 = AppAnalyticsUtils;
    }
  }
};
export const setMessagesFavorite = function setMessagesFavorite(id, setting) {
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(null, id);
  const obj = { flags: FlagUtils.setFlag(channelIdFlags, constants.FAVORITED, setting) };
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(null, id, obj, NotificationLabel.favorited(setting));
};
export const enableGuildNotice = function enableGuildNotice(guildId) {
  const result = UserSettingsProtoActionCreators.updateUserGuildSettings(
    guildId,
    (guildOnboardingProgress) => {
      const hasFlagResult = require("FlagUtils").hasFlag(
        guildOnboardingProgress.guildOnboardingProgress,
        require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN,
      );
      let flag = !hasFlagResult;
      if (!hasFlagResult) {
        guildOnboardingProgress.guildOnboardingProgress = require("FlagUtils").addFlag(
          guildOnboardingProgress.guildOnboardingProgress,
          require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN,
        );
        flag = true;
        const tmpResult = require("FlagUtils");
      }
      return flag;
    },
    UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
export const dismissGuildNotice = function dismissGuildNotice(guildId) {
  const result = UserSettingsProtoActionCreators.updateUserGuildSettings(
    guildId,
    (guildOnboardingProgress) => {
      let hasFlagResult = require("FlagUtils").hasFlag(
        guildOnboardingProgress.guildOnboardingProgress,
        require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED,
      );
      if (hasFlagResult) {
        let tmpResult = require("FlagUtils");
        hasFlagResult = !tmpResult.hasFlag(
          guildOnboardingProgress.guildOnboardingProgress,
          require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN,
        );
      }
      let flag = !hasFlagResult;
      if (!hasFlagResult) {
        tmpResult = require("FlagUtils");
        guildOnboardingProgress.guildOnboardingProgress = tmpResult.addFlag(
          guildOnboardingProgress.guildOnboardingProgress,
          require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_CLEARED,
        );
        guildOnboardingProgress.guildOnboardingProgress = require("FlagUtils").setFlag(
          guildOnboardingProgress.guildOnboardingProgress,
          require("preloaded_user_settings").GuildOnboardingProgress.GUILD_NOTICE_SHOWN,
          false,
        );
        flag = true;
        const tmpResult1 = require("FlagUtils");
      }
      return flag;
    },
    UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
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
      const result1 = obj(7119).updateChannelOverrideSettingsBulk(
        guildId,
        obj,
        require("NotificationSettingsUtils").NotificationLabels.OptedOut,
      );
      const obj2 = obj(7119);
      obj = {};
      const obj3 = obj(1242);
      const merged = Object.assign(require("AppAnalyticsUtils").collectGuildAnalyticsMetadata(guildId));
      obj.action_type = "remove_many";
      obj.location = undefined;
      obj3.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj);
      const obj5 = require("AppAnalyticsUtils");
    }
  }
  const result2 = require("UserSettingsProtoActionCreators").updateUserGuildSettings(
    guildId,
    (guildOnboardingProgress) => {
      guildOnboardingProgress.guildOnboardingProgress = guildId(1384).setFlag(
        guildOnboardingProgress.guildOnboardingProgress,
        guildId(1187).GuildOnboardingProgress.GUILD_NOTICE_SHOWN,
        false,
      );
      obj = guildId(1384);
      guildOnboardingProgress.guildOnboardingProgress = guildId(1384).setFlag(
        guildOnboardingProgress.guildOnboardingProgress,
        guildId(1187).GuildOnboardingProgress.GUILD_NOTICE_CLEARED,
        false,
      );
      return true;
    },
    require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
  const obj7 = require("UserSettingsProtoActionCreators");
};
export const dimissFavoriteSuggestion = function dimissFavoriteSuggestion(guildId, channelId) {
  const obj = { type: "DISMISS_FAVORITE_SUGGESTION", guildId, channelId };
  obj.dispatch(obj);
};
export const setRecentlyActiveCollapsed = function setRecentlyActiveCollapsed(guildId, collapsed) {
  const obj = { type: "SET_RECENTLY_ACTIVE_COLLAPSED", guildId, collapsed };
  obj.dispatch(obj);
};

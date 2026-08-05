// discord_app/modules/opt_in_channels/OptInChannelsActionCreators.tsx
import closure_3 from "MAX_FAVORITES";
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { AnalyticEvents } from "ME";
import MAX_FAVORITES from "MAX_FAVORITES";
import apply from "collectGuildAnalyticsMetadata";
import { hasFlag } from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import { NotificationSettingsModalActionCreators } from "../../actions/NotificationSettingsModalActionCreators.tsx";
import { dispatcher } from "../../Dispatcher.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { UserNotificationSettings } from "../../utils/NotificationSettingsUtils.tsx";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";
import { updateImpersonating } from "../impersonate/ImpersonateActionCreators.tsx";
import { handleConnectionOpen } from "../user_settings/UserGuildSettingsManager.tsx";
import { updateUserGuildSettings } from "../user_settings/UserSettingsProtoActionCreators.tsx";

let c9;
let metroImportAll;
const require = arg1;
function _persistOptInChannelUpdates2() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === fullServerPreview) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_3 = tmp5;
              const table = tmp2;
              if (null != closure_0) {
                if (!fullServerPreview.isFullServerPreview(tmp22)) {
                  let obj3 = callback(outer1_2[9]);
                  const obj1 = {};
                  const obj2 = { channel_overrides: null };
                  obj2[0] = tmp23;
                  obj1[tmp22] = obj2;
                  fullServerPreview = 1;
                  c5 = 1;
                  obj3 = { value: null, done: false };
                  obj3[0] = obj3.saveUserGuildSettingsBulk(obj1);
                  return obj3;
                }
              }
              c5 = 3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            obj = callback(table[10]);
            const obj4 = { type: "USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES", guildId: null, updates: null };
            obj4[1] = closure_0;
            obj4[2] = callback;
            obj.dispatch(obj4);
          }
          c5 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } catch (tmp16) {
          c5 = tmp;
          throw tmp16;
        }
      }
    })();
  });
  const _persistOptInChannelUpdates2 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ChannelNotificationSettingsFlags: metroImportAll, GuildNotificationSettingsFlags: c9 } = MAX_FAVORITES);
const debounceResult = apply.debounce((arg0, arg1) => (function _persistOptInChannelUpdates(arg0, arg1) {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
})(arg0, arg1), 1000);
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/opt_in_channels/OptInChannelsActionCreators.tsx");

export const setOptInChannel = function setOptInChannel(guildId1, id, arg2, location) {
  if (null != guildId1) {
    if (initialize.isFullServerPreview(guildId1)) {
      if (arg2) {
        const items = [id];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg2) {
        let items2 = [];
      } else {
        items2 = [id];
      }
      const result = updateImpersonating.updateImpersonatedChannels(guildId1, items1, items2);
      const obj18 = updateImpersonating;
    } else {
      const channelIdFlags = store2.getChannelIdFlags(guildId1, id);
      let setFlagResult = channelIdFlags;
      if (!arg2) {
        let obj = hasFlag;
        setFlagResult = obj.setFlag(channelIdFlags, constants.FAVORITED, false);
      }
      let obj1 = UserNotificationSettings;
      obj = { flags: null };
      const currentChannelSettings = obj1.getCurrentChannelSettings(guildId1, id);
      let obj3 = hasFlag;
      obj[0] = obj3.setFlag(setFlagResult, constants.OPT_IN_ENABLED, arg2);
      let obj4 = handleConnectionOpen;
      obj = {};
      obj1 = { channel_overrides: null };
      const obj2 = {};
      obj2[id] = obj;
      obj1[0] = obj2;
      obj[guildId1] = obj1;
      const result1 = obj4.saveUserGuildSettingsBulk(obj);
      obj3 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: null, channelId: null, settings: null };
      obj3[1] = guildId1;
      obj3[2] = id;
      obj3[3] = obj;
      dispatcher.dispatch(obj3);
      const obj9 = dispatcher;
      obj4 = { guildId: null, channelId: null, change: null, previous: null, label: null, location: null };
      obj4[0] = guildId1;
      obj4[1] = id;
      obj4[2] = obj;
      obj4[3] = currentChannelSettings;
      const NotificationLabel = UserNotificationSettings.NotificationLabel;
      obj4[4] = NotificationLabel.optedIn(arg2);
      obj4[5] = location;
      const result2 = UserNotificationSettings.trackChannelNotificationSettingsUpdate(obj4);
      const obj11 = UserNotificationSettings;
      const result3 = updateUserGuildSettings.updateUserGuildSettings(guildId1, (guildOnboardingProgress) => {
        let hasFlagResult = callback(1384).hasFlag(guildOnboardingProgress.guildOnboardingProgress, callback(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
        if (hasFlagResult) {
          let tmpResult = tmp(1384);
          hasFlagResult = !tmpResult.hasFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
        }
        let flag = !hasFlagResult;
        if (!hasFlagResult) {
          tmpResult = tmp(1384);
          guildOnboardingProgress.guildOnboardingProgress = tmpResult.addFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
          guildOnboardingProgress.guildOnboardingProgress = tmp(1384).setFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
          flag = true;
          const tmpResult1 = tmp(1384);
        }
        return flag;
      }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
      const obj13 = updateUserGuildSettings;
      const obj5 = {};
      const obj14 = expandEventProperties;
      const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId1));
      const obj16 = collectGuildAnalyticsMetadata;
      const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadata(store.getChannel(id)));
      let str = "remove";
      if (arg2) {
        str = "add";
      }
      obj5.action_type = str;
      obj5.location = location;
      obj14.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj5);
      const obj17 = collectGuildAnalyticsMetadata;
    }
  }
};
export const updateOptInChannelsImmediate = function updateOptInChannelsImmediate(closure_0, id, arg2, location) {
  if (null != closure_0) {
    if (initialize.isFullServerPreview(closure_0)) {
      if (arg2) {
        const items = [id];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg2) {
        let items2 = [];
      } else {
        items2 = [id];
      }
      const result = updateImpersonating.updateImpersonatedChannels(closure_0, items1, items2);
      const obj20 = updateImpersonating;
      const tmp26 = require;
      const result1 = updateImpersonating.updateImpersonatedData(closure_0, { optInEnabled: true });
    } else {
      let obj = store2;
      const channelIdFlags = store2.getChannelIdFlags(closure_0, id);
      let setFlagResult = channelIdFlags;
      if (!arg2) {
        let obj1 = hasFlag;
        setFlagResult = obj1.setFlag(channelIdFlags, constants.FAVORITED, false);
      }
      let obj2 = UserNotificationSettings;
      obj = { flags: null };
      const currentChannelSettings = obj2.getCurrentChannelSettings(closure_0, id);
      let obj4 = hasFlag;
      obj[0] = obj4.setFlag(setFlagResult, constants.OPT_IN_ENABLED, arg2);
      if (!obj.isOptInEnabled(closure_0)) {
        let tmp6Result = tmp6(1384);
        const setFlagResult1 = tmp6Result.setFlag(obj.getGuildFlags(closure_0), constants2.OPT_IN_CHANNELS_ON, true);
        obj = {};
        obj1 = { channel_overrides: null, flags: null };
        obj2 = {};
        obj2[id] = obj;
        obj1[0] = obj2;
        obj1[1] = setFlagResult1;
        obj[closure_0] = obj1;
        const result2 = handleConnectionOpen.saveUserGuildSettingsBulk(obj);
        const obj7 = handleConnectionOpen;
      }
      const obj3 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: null, channelId: null, settings: null };
      obj3[1] = closure_0;
      obj3[2] = id;
      obj3[3] = obj;
      dispatcher.dispatch(obj3);
      tmp6Result = tmp6(5210);
      obj4 = { guildId: null, channelId: null, change: null, previous: null, label: null, location: null };
      obj4[0] = closure_0;
      obj4[1] = id;
      obj4[2] = obj;
      obj4[3] = currentChannelSettings;
      const NotificationLabel = tmp6(5210).NotificationLabel;
      obj4[4] = NotificationLabel.optedIn(arg2);
      obj4[5] = location;
      const result3 = tmp6Result.trackChannelNotificationSettingsUpdate(obj4);
      const obj11 = dispatcher;
      const result4 = updateUserGuildSettings.updateUserGuildSettings(closure_0, (guildOnboardingProgress) => {
        let hasFlagResult = callback(1384).hasFlag(guildOnboardingProgress.guildOnboardingProgress, callback(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
        if (hasFlagResult) {
          let tmpResult = tmp(1384);
          hasFlagResult = !tmpResult.hasFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
        }
        let flag = !hasFlagResult;
        if (!hasFlagResult) {
          tmpResult = tmp(1384);
          guildOnboardingProgress.guildOnboardingProgress = tmpResult.addFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
          guildOnboardingProgress.guildOnboardingProgress = tmp(1384).setFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
          flag = true;
          const tmpResult1 = tmp(1384);
        }
        return flag;
      }, tmp6(1355).UserSettingsDelay.INFREQUENT_USER_ACTION);
      const tmp6Result1 = updateUserGuildSettings;
      const obj5 = {};
      const obj16 = expandEventProperties;
      const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(closure_0));
      const tmp6Result2 = collectGuildAnalyticsMetadata;
      const merged1 = Object.assign(collectGuildAnalyticsMetadata.collectChannelAnalyticsMetadata(store.getChannel(id)));
      let str = "remove";
      if (arg2) {
        str = "add";
      }
      obj5.action_type = str;
      obj5.location = location;
      obj16.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj5);
      const tmp6Result3 = collectGuildAnalyticsMetadata;
    }
  }
};
export const updateOptInChannelsBatched = debounceResult;
export const bulkOptInChannels = function bulkOptInChannels(id, arr, arg2, location) {
  const _require = id;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  let obj;
  if (null != id) {
    if (initialize.isFullServerPreview(id)) {
      const result = _updateImpersonating.updateImpersonatedChannels(id, arr, []);
      if (flag) {
        const result1 = _updateImpersonating.updateImpersonatedData(id, { optInEnabled: true });
        const tmp22Result = _updateImpersonating;
      }
    } else {
      obj = {};
      const item = arr.forEach((id) => {
        const obj = { flags: null };
        const channelIdFlags = outer1_6.getChannelIdFlags(id, id);
        obj[0] = id(outer1_2[7]).setFlag(channelIdFlags, outer1_8.OPT_IN_ENABLED, true);
        obj[id] = obj;
      });
      if (flag) {
        const obj6 = _hasFlag;
        const setFlagResult = _hasFlag.setFlag(store2.getGuildFlags(id), constants2.OPT_IN_CHANNELS_ON, true);
        obj = { flags: null, channel_overrides: null };
        obj[0] = setFlagResult;
        obj[1] = obj;
        const result2 = obj(5215).updateGuildAndChannelNotificationSettings(id, obj, _UserNotificationSettings.NotificationLabels.OptedIn);
        const obj7 = obj(5215);
        obj = {};
        const obj9 = obj(698);
        const merged = Object.assign(_collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(id));
        obj.action_type = "add_many_and_enable_guild";
        obj.location = location;
        obj9.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj);
        const obj11 = _collectGuildAnalyticsMetadata;
      } else {
        let obj1 = obj(5215);
        const result3 = obj1.updateChannelOverrideSettingsBulk(id, obj, _UserNotificationSettings.NotificationLabels.OptedIn);
        obj1 = {};
        const obj3 = obj(698);
        const merged1 = Object.assign(_collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(id));
        obj1.action_type = "add_many";
        obj1.location = location;
        obj3.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj1);
        const obj5 = _collectGuildAnalyticsMetadata;
      }
    }
  }
};
export const bulkOptOutChannels = function bulkOptOutChannels(closure_0, arr, location) {
  const _require = closure_0;
  if (null != closure_0) {
    if (initialize.isFullServerPreview(closure_0)) {
      const result = _updateImpersonating.updateImpersonatedChannels(closure_0, [], arr);
      const obj6 = _updateImpersonating;
    } else {
      let obj = {};
      const item = arr.forEach((id) => {
        const obj = { flags: null };
        const channelIdFlags = outer1_6.getChannelIdFlags(callback, id);
        obj[0] = callback(outer1_2[7]).setFlag(channelIdFlags, outer1_8.OPT_IN_ENABLED, false);
        obj[id] = obj;
      });
      const result1 = obj(5215).updateChannelOverrideSettingsBulk(closure_0, obj, _UserNotificationSettings.NotificationLabels.OptedOut);
      const obj2 = obj(5215);
      obj = {};
      const obj3 = obj(698);
      const merged = Object.assign(_collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(closure_0));
      obj.action_type = "remove_many";
      obj.location = location;
      obj3.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj);
      const obj5 = _collectGuildAnalyticsMetadata;
    }
  }
};
export const setGuildOptIn = function setGuildOptIn(id, arg1) {
  if (initialize.isFullServerPreview(id)) {
    let obj = { optInEnabled: null };
    obj[0] = arg1;
    const result = updateImpersonating.updateImpersonatedData(id, obj);
    const obj7 = updateImpersonating;
  } else {
    const guildFlags = store2.getGuildFlags(id);
    obj = NotificationSettingsModalActionCreators;
    obj = { flags: null };
    obj[0] = hasFlag.setFlag(guildFlags, constants2.OPT_IN_CHANNELS_ON, arg1);
    const NotificationLabel = UserNotificationSettings.NotificationLabel;
    const result1 = obj.updateGuildNotificationSettings(id, obj, NotificationLabel.optedIn(arg1));
    const obj3 = hasFlag;
    const obj1 = {};
    const obj4 = expandEventProperties;
    const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(id));
    let str = "guild_disabled";
    if (arg1) {
      str = "guild_enabled";
    }
    obj1.action_type = str;
    obj1.location = arg2;
    obj4.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj1);
    const obj6 = collectGuildAnalyticsMetadata;
  }
};
export const setIsFavorite = function setIsFavorite(guildId1, id, arg2, location) {
  if (null != guildId1) {
    if (!initialize.isFullServerPreview(guildId1)) {
      const channelIdFlags = store2.getChannelIdFlags(guildId1, id);
      let obj = hasFlag;
      const hasFlagResult = obj.hasFlag(channelIdFlags, constants.OPT_IN_ENABLED);
      let tmp9 = !hasFlagResult;
      if (!hasFlagResult) {
        tmp9 = arg2;
      }
      let setFlagResult = channelIdFlags;
      if (tmp9) {
        let tmp5Result = tmp5(1384);
        setFlagResult = tmp5Result.setFlag(channelIdFlags, tmp7.OPT_IN_ENABLED, true);
      }
      const obj3 = NotificationSettingsModalActionCreators;
      obj = { flags: null };
      tmp5Result = tmp5(1384);
      obj[0] = tmp5Result.setFlag(setFlagResult, constants.FAVORITED, arg2);
      const NotificationLabel = tmp5(5210).NotificationLabel;
      const result = obj3.updateChannelOverrideSettings(guildId1, id, obj, NotificationLabel.favorited(arg2));
      obj = {};
      const obj6 = expandEventProperties;
      const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(guildId1));
      let str = "unfavorited";
      if (arg2) {
        str = "favorited";
      }
      obj.action_type = str;
      obj.location = location;
      obj6.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj);
      const tmp5Result1 = collectGuildAnalyticsMetadata;
    }
  }
};
export const setMessagesFavorite = function setMessagesFavorite(id, arg1) {
  const channelIdFlags = store2.getChannelIdFlags(null, id);
  let obj = NotificationSettingsModalActionCreators;
  obj = { flags: null };
  obj[0] = hasFlag.setFlag(channelIdFlags, constants.FAVORITED, arg1);
  const NotificationLabel = UserNotificationSettings.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(null, id, obj, NotificationLabel.favorited(arg1));
};
export const enableGuildNotice = function enableGuildNotice(closure_0) {
  const result = updateUserGuildSettings.updateUserGuildSettings(closure_0, (guildOnboardingProgress) => {
    const hasFlagResult = callback(1384).hasFlag(guildOnboardingProgress.guildOnboardingProgress, callback(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
    let flag = !hasFlagResult;
    if (!hasFlagResult) {
      guildOnboardingProgress.guildOnboardingProgress = tmp(1384).addFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
      flag = true;
      const tmpResult = tmp(1384);
    }
    return flag;
  }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const dismissGuildNotice = function dismissGuildNotice(closure_0) {
  const result = updateUserGuildSettings.updateUserGuildSettings(closure_0, (guildOnboardingProgress) => {
    let hasFlagResult = callback(1384).hasFlag(guildOnboardingProgress.guildOnboardingProgress, callback(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
    if (hasFlagResult) {
      let tmpResult = tmp(1384);
      hasFlagResult = !tmpResult.hasFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
    }
    let flag = !hasFlagResult;
    if (!hasFlagResult) {
      tmpResult = tmp(1384);
      guildOnboardingProgress.guildOnboardingProgress = tmpResult.addFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
      guildOnboardingProgress.guildOnboardingProgress = tmp(1384).setFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
      flag = true;
      const tmpResult1 = tmp(1384);
    }
    return flag;
  }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const clearGuildNotice = function clearGuildNotice(closure_0) {
  const items = [...updateUserGuildSettingsInternal.getOptedInChannels(closure_0)];
  const _require = closure_0;
  let obj;
  if (null != closure_0) {
    if (initialize.isFullServerPreview(closure_0)) {
      const result = _updateImpersonating.updateImpersonatedChannels(closure_0, [], items);
      const obj6 = _updateImpersonating;
    } else {
      obj = {};
      const item = items.forEach((id) => {
        const obj = { flags: null };
        const channelIdFlags = outer1_6.getChannelIdFlags(callback, id);
        obj[0] = callback(outer1_2[7]).setFlag(channelIdFlags, outer1_8.OPT_IN_ENABLED, false);
        obj[id] = obj;
      });
      const result1 = obj(5215).updateChannelOverrideSettingsBulk(closure_0, obj, _UserNotificationSettings.NotificationLabels.OptedOut);
      const obj2 = obj(5215);
      obj = {};
      const obj3 = obj(698);
      const merged = Object.assign(_collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(closure_0));
      obj.action_type = "remove_many";
      obj.location = undefined;
      obj3.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj);
      const obj5 = _collectGuildAnalyticsMetadata;
    }
  }
  const result2 = _updateUserGuildSettings.updateUserGuildSettings(closure_0, (guildOnboardingProgress) => {
    guildOnboardingProgress.guildOnboardingProgress = callback(1384).setFlag(guildOnboardingProgress.guildOnboardingProgress, callback(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
    const obj = callback(1384);
    guildOnboardingProgress.guildOnboardingProgress = callback(1384).setFlag(guildOnboardingProgress.guildOnboardingProgress, callback(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED, false);
    return true;
  }, _updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const dimissFavoriteSuggestion = function dimissFavoriteSuggestion(guildId, channelId) {
  let obj = dispatcher;
  obj = { type: "DISMISS_FAVORITE_SUGGESTION", guildId, channelId };
  obj.dispatch(obj);
};
export const setRecentlyActiveCollapsed = function setRecentlyActiveCollapsed(guildId, collapsed) {
  let obj = dispatcher;
  obj = { type: "SET_RECENTLY_ACTIVE_COLLAPSED", guildId, collapsed };
  obj.dispatch(obj);
};
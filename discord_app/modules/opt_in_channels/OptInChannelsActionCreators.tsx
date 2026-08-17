// discord_app/modules/opt_in_channels/OptInChannelsActionCreators.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import updateUserGuildSettings from "../user_settings/UserSettingsProtoActionCreators.tsx";
import hasFlag from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import collectGuildAnalyticsMetadata from "../app_analytics/AppAnalyticsUtils.tsx";
import updateImpersonating from "../impersonate/ImpersonateActionCreators.tsx";
import UserNotificationSettings from "../../utils/NotificationSettingsUtils.tsx";
import handleConnectionOpenDefault from "../user_settings/UserGuildSettingsManager.tsx";
import _modDef6798 from "../../actions/NotificationSettingsModalActionCreators.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../impersonate/ImpersonateStore.tsx";
import closure_5 from "../../stores/ChannelStore.tsx";
import closure_6 from "../../stores/UserGuildSettingsStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";
import MAX_FAVORITES from "../user_settings/UserSettingsConstants.tsx";
import apply from "../../../_runtime/00012_apply.js";
import { hasFlag } from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import { UserNotificationSettings } from "../../utils/NotificationSettingsUtils.tsx";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";
import { updateImpersonating } from "../impersonate/ImpersonateActionCreators.tsx";
import { updateUserGuildSettings } from "../user_settings/UserSettingsProtoActionCreators.tsx";

require = arg1;
function _persistOptInChannelUpdates2() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              closure_3 = tmp5;
              const table = tmp2;
              if (null != closure_0) {
                if (!fullServerPreview.isFullServerPreview(tmp22)) {
                  let obj3 = callback(closure_1_2[9]);
                  obj1 = {};
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
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ChannelNotificationSettingsFlags: closure_8, GuildNotificationSettingsFlags: c9 } = MAX_FAVORITES);
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
let result = require("set").fileFinishedImporting("modules/opt_in_channels/OptInChannelsActionCreators.tsx");

export const setOptInChannel = function setOptInChannel(guildId1, id, arg2, location) {
  if (null != guildId1) {
    if (closure_4.isFullServerPreview(guildId1)) {
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
      obj1 = UserNotificationSettings;
      obj = { flags: null };
      const currentChannelSettings = obj1.getCurrentChannelSettings(guildId1, id);
      let obj3 = hasFlag;
      obj[0] = obj3.setFlag(setFlagResult, constants.OPT_IN_ENABLED, arg2);
      let obj4 = handleConnectionOpenDefault;
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
      dispatcherDefault.dispatch(obj3);
      const obj9 = dispatcherDefault;
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
        let hasFlagResult = callback(1403).hasFlag(guildOnboardingProgress.guildOnboardingProgress, callback(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
        if (hasFlagResult) {
          let tmpResult = tmp(1403);
          hasFlagResult = !tmpResult.hasFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
        }
        let flag = !hasFlagResult;
        if (!hasFlagResult) {
          tmpResult = tmp(1403);
          guildOnboardingProgress.guildOnboardingProgress = tmpResult.addFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
          guildOnboardingProgress.guildOnboardingProgress = tmp(1403).setFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
          flag = true;
          const tmpResult1 = tmp(1403);
        }
        return flag;
      }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
      const obj13 = updateUserGuildSettings;
      const obj5 = {};
      const obj14 = expandEventPropertiesDefault;
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
    if (closure_4.isFullServerPreview(closure_0)) {
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
        obj1 = hasFlag;
        setFlagResult = obj1.setFlag(channelIdFlags, constants.FAVORITED, false);
      }
      let obj2 = UserNotificationSettings;
      obj = { flags: null };
      const currentChannelSettings = obj2.getCurrentChannelSettings(closure_0, id);
      let obj4 = hasFlag;
      obj[0] = obj4.setFlag(setFlagResult, constants.OPT_IN_ENABLED, arg2);
      if (!obj.isOptInEnabled(closure_0)) {
        let tmp6Result = tmp6(1403);
        const setFlagResult1 = tmp6Result.setFlag(obj.getGuildFlags(closure_0), constants2.OPT_IN_CHANNELS_ON, true);
        obj = {};
        obj1 = { channel_overrides: null, flags: null };
        obj2 = {};
        obj2[id] = obj;
        obj1[0] = obj2;
        obj1[1] = setFlagResult1;
        obj[closure_0] = obj1;
        const result2 = handleConnectionOpenDefault.saveUserGuildSettingsBulk(obj);
        const obj7 = handleConnectionOpenDefault;
      }
      const obj3 = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId: null, channelId: null, settings: null };
      obj3[1] = closure_0;
      obj3[2] = id;
      obj3[3] = obj;
      dispatcherDefault.dispatch(obj3);
      tmp6Result = tmp6(6795);
      obj4 = { guildId: null, channelId: null, change: null, previous: null, label: null, location: null };
      obj4[0] = closure_0;
      obj4[1] = id;
      obj4[2] = obj;
      obj4[3] = currentChannelSettings;
      const NotificationLabel = tmp6(6795).NotificationLabel;
      obj4[4] = NotificationLabel.optedIn(arg2);
      obj4[5] = location;
      const result3 = tmp6Result.trackChannelNotificationSettingsUpdate(obj4);
      const obj11 = dispatcherDefault;
      const result4 = updateUserGuildSettings.updateUserGuildSettings(closure_0, (guildOnboardingProgress) => {
        let hasFlagResult = callback(1403).hasFlag(guildOnboardingProgress.guildOnboardingProgress, callback(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
        if (hasFlagResult) {
          let tmpResult = tmp(1403);
          hasFlagResult = !tmpResult.hasFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
        }
        let flag = !hasFlagResult;
        if (!hasFlagResult) {
          tmpResult = tmp(1403);
          guildOnboardingProgress.guildOnboardingProgress = tmpResult.addFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
          guildOnboardingProgress.guildOnboardingProgress = tmp(1403).setFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
          flag = true;
          const tmpResult1 = tmp(1403);
        }
        return flag;
      }, tmp6(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
      const tmp6Result1 = updateUserGuildSettings;
      const obj5 = {};
      const obj16 = expandEventPropertiesDefault;
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
    if (closure_4.isFullServerPreview(id)) {
      const result = _updateImpersonating.updateImpersonatedChannels(id, arr, []);
      if (flag) {
        const result1 = _updateImpersonating.updateImpersonatedData(id, { optInEnabled: true });
        const tmp22Result = _updateImpersonating;
      }
    } else {
      obj = {};
      const item = arr.forEach((id) => {
        obj = { flags: null };
        const channelIdFlags = closure_1_6.getChannelIdFlags(id, id);
        obj[0] = id(closure_1_2[7]).setFlag(channelIdFlags, closure_1_8.OPT_IN_ENABLED, true);
        obj[id] = obj;
      });
      if (flag) {
        const obj6 = _hasFlag;
        const setFlagResult = _hasFlag.setFlag(store2.getGuildFlags(id), constants2.OPT_IN_CHANNELS_ON, true);
        obj = { flags: null, channel_overrides: null };
        obj[0] = setFlagResult;
        obj[1] = obj;
        const result2 = obj(6798).updateGuildAndChannelNotificationSettings(id, obj, _UserNotificationSettings.NotificationLabels.OptedIn);
        const obj7 = obj(6798);
        obj = {};
        const obj9 = obj(698);
        const merged = Object.assign(_collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(id));
        obj.action_type = "add_many_and_enable_guild";
        obj.location = location;
        obj9.track(AnalyticEvents.CHANNEL_LIST_UPDATED, obj);
        const obj11 = _collectGuildAnalyticsMetadata;
      } else {
        obj1 = obj(6798);
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
    if (closure_4.isFullServerPreview(closure_0)) {
      const result = _updateImpersonating.updateImpersonatedChannels(closure_0, [], arr);
      const obj6 = _updateImpersonating;
    } else {
      let obj = {};
      const item = arr.forEach((id) => {
        obj = { flags: null };
        const channelIdFlags = closure_1_6.getChannelIdFlags(callback, id);
        obj[0] = callback(closure_1_2[7]).setFlag(channelIdFlags, closure_1_8.OPT_IN_ENABLED, false);
        obj[id] = obj;
      });
      const result1 = obj(6798).updateChannelOverrideSettingsBulk(closure_0, obj, _UserNotificationSettings.NotificationLabels.OptedOut);
      const obj2 = obj(6798);
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
  if (closure_4.isFullServerPreview(id)) {
    let obj = { optInEnabled: null };
    obj[0] = arg1;
    const result = updateImpersonating.updateImpersonatedData(id, obj);
    const obj7 = updateImpersonating;
  } else {
    const guildFlags = store2.getGuildFlags(id);
    obj = _modDef6798;
    obj = { flags: null };
    obj[0] = hasFlag.setFlag(guildFlags, constants2.OPT_IN_CHANNELS_ON, arg1);
    const NotificationLabel = UserNotificationSettings.NotificationLabel;
    const result1 = obj.updateGuildNotificationSettings(id, obj, NotificationLabel.optedIn(arg1));
    const obj3 = hasFlag;
    obj1 = {};
    const obj4 = expandEventPropertiesDefault;
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
    if (!closure_4.isFullServerPreview(guildId1)) {
      const channelIdFlags = store2.getChannelIdFlags(guildId1, id);
      let obj = hasFlag;
      const hasFlagResult = obj.hasFlag(channelIdFlags, constants.OPT_IN_ENABLED);
      let tmp9 = !hasFlagResult;
      if (!hasFlagResult) {
        tmp9 = arg2;
      }
      let setFlagResult = channelIdFlags;
      if (tmp9) {
        let tmp5Result = tmp5(1403);
        setFlagResult = tmp5Result.setFlag(channelIdFlags, tmp7.OPT_IN_ENABLED, true);
      }
      const obj3 = _modDef6798;
      obj = { flags: null };
      tmp5Result = tmp5(1403);
      obj[0] = tmp5Result.setFlag(setFlagResult, constants.FAVORITED, arg2);
      const NotificationLabel = tmp5(6795).NotificationLabel;
      const result = obj3.updateChannelOverrideSettings(guildId1, id, obj, NotificationLabel.favorited(arg2));
      obj = {};
      const obj6 = expandEventPropertiesDefault;
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
  let obj = _modDef6798;
  obj = { flags: hasFlag.setFlag(channelIdFlags, constants.FAVORITED, arg1) };
  const NotificationLabel = UserNotificationSettings.NotificationLabel;
  const result = obj.updateChannelOverrideSettings(null, id, obj, NotificationLabel.favorited(arg1));
};
export const enableGuildNotice = function enableGuildNotice(closure_0) {
  const result = updateUserGuildSettings.updateUserGuildSettings(closure_0, (guildOnboardingProgress) => {
    const hasFlagResult = callback(1403).hasFlag(guildOnboardingProgress.guildOnboardingProgress, callback(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
    let flag = !hasFlagResult;
    if (!hasFlagResult) {
      guildOnboardingProgress.guildOnboardingProgress = tmp(1403).addFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
      flag = true;
      const tmpResult = tmp(1403);
    }
    return flag;
  }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const dismissGuildNotice = function dismissGuildNotice(closure_0) {
  const result = updateUserGuildSettings.updateUserGuildSettings(closure_0, (guildOnboardingProgress) => {
    let hasFlagResult = callback(1403).hasFlag(guildOnboardingProgress.guildOnboardingProgress, callback(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
    if (hasFlagResult) {
      let tmpResult = tmp(1403);
      hasFlagResult = !tmpResult.hasFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN);
    }
    let flag = !hasFlagResult;
    if (!hasFlagResult) {
      tmpResult = tmp(1403);
      guildOnboardingProgress.guildOnboardingProgress = tmpResult.addFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED);
      guildOnboardingProgress.guildOnboardingProgress = tmp(1403).setFlag(guildOnboardingProgress.guildOnboardingProgress, tmp(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
      flag = true;
      const tmpResult1 = tmp(1403);
    }
    return flag;
  }, updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const clearGuildNotice = function clearGuildNotice(closure_0) {
  const items = [...closure_6.getOptedInChannels(closure_0)];
  const _require = closure_0;
  let obj;
  if (null != closure_0) {
    if (closure_4.isFullServerPreview(closure_0)) {
      const result = _updateImpersonating.updateImpersonatedChannels(closure_0, [], items);
      const obj6 = _updateImpersonating;
    } else {
      obj = {};
      const item = items.forEach((id) => {
        obj = { flags: null };
        const channelIdFlags = closure_1_6.getChannelIdFlags(callback, id);
        obj[0] = callback(closure_1_2[7]).setFlag(channelIdFlags, closure_1_8.OPT_IN_ENABLED, false);
        obj[id] = obj;
      });
      const result1 = obj(6798).updateChannelOverrideSettingsBulk(closure_0, obj, _UserNotificationSettings.NotificationLabels.OptedOut);
      const obj2 = obj(6798);
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
    guildOnboardingProgress.guildOnboardingProgress = callback(1403).setFlag(guildOnboardingProgress.guildOnboardingProgress, callback(1306).GuildOnboardingProgress.GUILD_NOTICE_SHOWN, false);
    obj = callback(1403);
    guildOnboardingProgress.guildOnboardingProgress = callback(1403).setFlag(guildOnboardingProgress.guildOnboardingProgress, callback(1306).GuildOnboardingProgress.GUILD_NOTICE_CLEARED, false);
    return true;
  }, _updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const dimissFavoriteSuggestion = function dimissFavoriteSuggestion(guildId, channelId) {
  let obj = dispatcherDefault;
  obj = { type: "DISMISS_FAVORITE_SUGGESTION", guildId, channelId };
  obj.dispatch(obj);
};
export const setRecentlyActiveCollapsed = function setRecentlyActiveCollapsed(guildId, collapsed) {
  let obj = dispatcherDefault;
  obj = { type: "SET_RECENTLY_ACTIVE_COLLAPSED", guildId, collapsed };
  obj.dispatch(obj);
};
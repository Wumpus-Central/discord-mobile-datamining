// === Module 17543: FrecencyUserSettingsManager ===

// Module 17543 (FrecencyUserSettingsManager)
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import DurationsDefault from "Durations" /* 1102 */;
import frecency_user_settings from "frecency_user_settings" /* 1232 */;
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import ApplicationConstants from "ApplicationConstants" /* 1360 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2033 */;
import FrecencyStore2 from "FrecencyStore" /* 5701 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationCommandFrecencyStore from "ApplicationCommandFrecencyStore" /* 8829 */;
import ApplicationFrecencyStore from "ApplicationFrecencyStore" /* 8828 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import SoundboardStore from "SoundboardStore" /* 5687 */;
import StickersPersistedStore from "StickersPersistedStore" /* 5693 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

const FrecencyStore = FrecencyStore2;
let c3, c4;

function handleConnectionOpen() {
  let closure_16;
  let timeout;
  c17 = true;
  let c0 = true;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => saveProtos(c0), closure_14);
}
function handleAppStateUpdate(state) {
  const tmp = c17 && "active" !== state.state;
  if (tmp) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c16);
    c16 = null;
    saveProtos(false);
  }
}
function handleConnectionClosed() {
  if (c17) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c16);
    c16 = null;
    saveProtos(false);
  }
}
function saveProtos() {
  return obj(...arguments);
}
let actions = function _saveProtos() {
  let obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp;
            resetTimer(closure_2_15, false);
            if (!UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS)) {
              let hasPendingUsageResult = StickersPersistedStore.hasPendingUsage() || EmojiStore.hasPendingUsage() || ApplicationCommandFrecencyStore.hasPendingUsage() || ApplicationFrecencyStore.hasPendingUsage() || SoundboardStore.hasPendingUsage();
              if (!hasPendingUsageResult) {
                const hasPendingUsageResult1 = FrecencyStore.hasPendingUsage() && !closure_0;
                hasPendingUsageResult = hasPendingUsageResult1;
              }
              if (hasPendingUsageResult) {
                const obj2 = UserSettingsProtoActionCreators;
                let result = obj2.markUserSettingsLoadOkayForDevelopment();
                const FrecencyUserSettingsActionCreators = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
                c3 = 1;
                c4 = 1;
                const obj5 = { value: FrecencyUserSettingsActionCreators.loadIfNecessary(), done: false };
                return obj5;
              }
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        const arr = closure_130_1(closure_130_2[15]);
        const item = arr.forEach(closure_130_0(closure_130_2[12]).UserSettingsActionCreatorsByType, (markDirtyIfHasPendingChange) => {
          const result = markDirtyIfHasPendingChange.markDirtyIfHasPendingChange();
        });
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp24) {
        c4 = 3;
        throw tmp24;
      }
    }
  });
  return obj(...arguments);
};
function resetTimer(arg0, arg1) {
  let closure_16;
  let timeout;
  let c0 = false;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => saveProtos(c0), arg0);
}
const MAX_NUM_SELECTED_ITEMS = FrecencyStore2.MAX_NUM_SELECTED_ITEMS;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const FREQUENCY_ITEM_LIMIT = ApplicationConstants.FREQUENCY_ITEM_LIMIT;
const random = Math.random();
let closure_14 = 10 + random * (10 * DurationsDefault.Millis.SECOND);
let result = 2 * DurationsDefault.Millis.HOUR;
const random1 = Math.random();
let closure_15 = result + floor(random1 * (10 * DurationsDefault.Millis.MINUTE));
let c16 = null;
let c17 = false;
class FrecencyUserSettingsManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    actions = { POST_CONNECTION_OPEN: handleConnectionOpen, CONNECTION_RESUMED: handleConnectionOpen, CONNECTION_CLOSED: handleConnectionClosed, APP_STATE_UPDATE: handleAppStateUpdate };
    applyArgumentsResult.actions = actions;
    return applyArgumentsResult;
  }
  _initialize() {
    let obj = {
      hasChanges() {
        return false;
      },
      processProto() {
        let closure_16;
        let timeout;
        let c0 = false;
        if (null != timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => saveProtos(c0), closure_15);
      }
    };
    const beforeSendCallbacks = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
    beforeSendCallbacks.push(obj);
    let obj2 = {
      hasChanges() {
        const hasPendingUsageResult = StickersPersistedStore.hasPendingUsage() && UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
        return hasPendingUsageResult;
      },
      processProto(stickerFrecency) {
        const hasPendingUsageResult = StickersPersistedStore.hasPendingUsage() && UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
        if (hasPendingUsageResult) {
          const StickerFrecency = frecency_user_settings.StickerFrecency;
          stickerFrecency.stickerFrecency = StickerFrecency.create();
          stickerFrecency = stickerFrecency.stickerFrecency;
          const obj = user_settings_UserSettingsUtils;
          stickerFrecency.stickers = obj.serializeUsageHistory(StickersPersistedStore.stickerFrecencyWithoutFetchingLatest.usageHistory, 100);
        }
      }
    };
    const beforeSendCallbacks1 = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
    beforeSendCallbacks1.push(obj2);
    const beforeSendCallbacks2 = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
    const obj3 = {
      hasChanges() {
        const hasPendingUsageResult = EmojiStore.hasPendingUsage() && UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
        return hasPendingUsageResult;
      },
      processProto(emojiFrecency) {
        const hasPendingUsageResult = EmojiStore.hasPendingUsage() && UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
        if (hasPendingUsageResult) {
          const EmojiFrecency = frecency_user_settings.EmojiFrecency;
          emojiFrecency.emojiFrecency = EmojiFrecency.create();
          const EmojiFrecency2 = frecency_user_settings.EmojiFrecency;
          emojiFrecency.emojiReactionFrecency = EmojiFrecency2.create();
          emojiFrecency = emojiFrecency.emojiFrecency;
          const obj = user_settings_UserSettingsUtils;
          emojiFrecency.emojis = obj.serializeUsageHistory(EmojiStore.emojiFrecencyWithoutFetchingLatest.usageHistory, 100);
          const emojiReactionFrecency = emojiFrecency.emojiReactionFrecency;
          const obj2 = user_settings_UserSettingsUtils;
          emojiReactionFrecency.emojis = obj2.serializeUsageHistory(EmojiStore.emojiReactionFrecencyWithoutFetchingLatest.usageHistory, 100);
        }
      }
    };
    beforeSendCallbacks2.push(obj3);
    const beforeSendCallbacks3 = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
    const obj4 = {
      hasChanges() {
        const hasPendingUsageResult = SoundboardStore.hasPendingUsage() && UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
        return hasPendingUsageResult;
      },
      processProto(playedSoundFrecency) {
        const hasPendingUsageResult = SoundboardStore.hasPendingUsage() && UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
        if (hasPendingUsageResult) {
          const PlayedSoundFrecency = frecency_user_settings.PlayedSoundFrecency;
          playedSoundFrecency.playedSoundFrecency = PlayedSoundFrecency.create();
          playedSoundFrecency = playedSoundFrecency.playedSoundFrecency;
          const obj = user_settings_UserSettingsUtils;
          playedSoundFrecency.playedSounds = obj.serializeUsageHistory(SoundboardStore.playedSoundFrecencyWithoutFetchingLatest.usageHistory, FREQUENCY_ITEM_LIMIT);
        }
      }
    };
    beforeSendCallbacks3.push(obj4);
    const beforeSendCallbacks4 = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
    const obj5 = {
      hasChanges() {
        const hasPendingUsageResult = ApplicationCommandFrecencyStore.hasPendingUsage() && UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
        return hasPendingUsageResult;
      },
      processProto(applicationCommandFrecency) {
        const hasPendingUsageResult = ApplicationCommandFrecencyStore.hasPendingUsage() && UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
        if (hasPendingUsageResult) {
          const ApplicationCommandFrecency = frecency_user_settings.ApplicationCommandFrecency;
          applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
          applicationCommandFrecency = applicationCommandFrecency.applicationCommandFrecency;
          const obj2 = user_settings_UserSettingsUtils;
          applicationCommandFrecency.applicationCommands = obj2.serializeUsageHistory(ApplicationCommandFrecencyStore.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500);
        }
      }
    };
    beforeSendCallbacks4.push(obj5);
    const beforeSendCallbacks5 = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
    const obj6 = {
      hasChanges() {
        const hasPendingUsageResult = ApplicationFrecencyStore.hasPendingUsage() && UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
        return hasPendingUsageResult;
      },
      processProto(applicationFrecency) {
        const hasPendingUsageResult = ApplicationFrecencyStore.hasPendingUsage() && UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
        if (hasPendingUsageResult) {
          const ApplicationFrecency = frecency_user_settings.ApplicationFrecency;
          applicationFrecency.applicationFrecency = ApplicationFrecency.create();
          applicationFrecency = applicationFrecency.applicationFrecency;
          const obj2 = user_settings_UserSettingsUtils;
          applicationFrecency.applications = obj2.serializeUsageHistory(ApplicationFrecencyStore.getApplicationFrecencyWithoutLoadingLatest().usageHistory, FREQUENCY_ITEM_LIMIT);
        }
      }
    };
    beforeSendCallbacks5.push(obj6);
    const beforeSendCallbacks6 = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
    const obj7 = {
      hasChanges() {
        const hasPendingUsageResult = FrecencyStore.hasPendingUsage() && UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
        return hasPendingUsageResult;
      },
      processProto(guildAndChannelFrecency) {
        const hasPendingUsageResult = FrecencyStore.hasPendingUsage() && UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
        if (hasPendingUsageResult) {
          const GuildAndChannelFrecency = frecency_user_settings.GuildAndChannelFrecency;
          guildAndChannelFrecency.guildAndChannelFrecency = GuildAndChannelFrecency.create();
          guildAndChannelFrecency = guildAndChannelFrecency.guildAndChannelFrecency;
          const obj = user_settings_UserSettingsUtils;
          guildAndChannelFrecency.guildAndChannels = obj.serializeUsageHistory(FrecencyStore.frecencyWithoutFetchingLatest.usageHistory, MAX_NUM_SELECTED_ITEMS);
        }
      }
    };
    beforeSendCallbacks6.push(obj7);
  }
}
const prototype = FrecencyUserSettingsManager.prototype;
const frecencyUserSettingsManager = new FrecencyUserSettingsManager();
const result1 = size.fileFinishedImporting("modules/user_settings/FrecencyUserSettingsManager.tsx");

export default frecencyUserSettingsManager;
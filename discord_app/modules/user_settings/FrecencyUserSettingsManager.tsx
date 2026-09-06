// discord_app/modules/user_settings/FrecencyUserSettingsManager.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import frecency_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/frecency_user_settings.tsx";
import user_settings_UserSettingsUtils from "UserSettingsUtils.tsx";
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationCommandFrecencyStore from "../application_commands/ApplicationCommandFrecencyStore.tsx";
import ApplicationFrecencyStore from "../applications/ApplicationFrecencyStore.tsx";
import EmojiStore from "../emojis/EmojiStore.tsx";
import SoundboardStore from "../soundboard/SoundboardStore.tsx";
import StickersPersistedStore from "../stickers/StickersPersistedStore.tsx";
import FrecencyStore from "../../stores/FrecencyStore.tsx";
import UserSettingsProtoStore from "UserSettingsProtoStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function handleConnectionOpen() {
  c17 = true;
  c0 = true;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => saveProtos(c0), closure_14);
}
function handleAppStateUpdate(state) {
  let tmp = c17;
  if (c17) {
    tmp = "active" !== state.state;
  }
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
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _saveProtos(arg0) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp2;
          resetTimer(__initData, false);
          if (!UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS)) {
            let hasPendingUsageResult = StickersPersistedStore.hasPendingUsage();
            if (!hasPendingUsageResult) {
              hasPendingUsageResult = EmojiStore.hasPendingUsage();
            }
            if (!hasPendingUsageResult) {
              hasPendingUsageResult = ApplicationCommandFrecencyStore.hasPendingUsage();
            }
            if (!hasPendingUsageResult) {
              hasPendingUsageResult = ApplicationFrecencyStore.hasPendingUsage();
            }
            if (!hasPendingUsageResult) {
              hasPendingUsageResult = SoundboardStore.hasPendingUsage();
            }
            if (!hasPendingUsageResult) {
              let hasPendingUsageResult1 = FrecencyStore.hasPendingUsage();
              if (hasPendingUsageResult1) {
                hasPendingUsageResult1 = !closure_0;
              }
              hasPendingUsageResult = hasPendingUsageResult1;
            }
            if (hasPendingUsageResult) {
              let obj1 = UserSettingsProtoActionCreators;
              let result = obj1.markUserSettingsLoadOkayForDevelopment();
              const FrecencyUserSettingsActionCreators =
                UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators;
              c3 = 1;
              c4 = 1;
              obj1 = { value: FrecencyUserSettingsActionCreators.loadIfNecessary(), done: false };
              return obj1;
            }
          }
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj = { value, done: true };
        return obj;
      }
      const item = closure_130_1(closure_130_2[15]).forEach(
        closure_130_0(closure_130_2[12]).UserSettingsActionCreatorsByType,
        (markDirtyIfHasPendingChange) => {
          const result = markDirtyIfHasPendingChange.markDirtyIfHasPendingChange();
        },
      );
      c4 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp25) {
      c4 = tmp;
      throw tmp25;
    }
  }
};
function resetTimer(arg0, arg1) {
  c0 = false;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => saveProtos(c0), arg0);
}
const MAX_NUM_SELECTED_ITEMS = fn(5509).MAX_NUM_SELECTED_ITEMS;
const UserSettingsTypes = fn(1084).UserSettingsTypes;
const FREQUENCY_ITEM_LIMIT = fn(1350).FREQUENCY_ITEM_LIMIT;
const random = Math.random();
let closure_14 = 10 + random * (10 * DurationsDefault.Millis.SECOND);
let result = 2 * DurationsDefault.Millis.HOUR;
const random1 = Math.random();
let closure_15 = result + Math.floor(random1 * (10 * DurationsDefault.Millis.MINUTE));
let c16 = null;
let c17 = false;
class FrecencyUserSettingsManager extends tmp5 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = {
      POST_CONNECTION_OPEN: handleConnectionOpen,
      CONNECTION_RESUMED: handleConnectionOpen,
      CONNECTION_CLOSED: handleConnectionClosed,
      APP_STATE_UPDATE: handleAppStateUpdate,
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
FrecencyUserSettingsManager.prototype["_initialize"] = function _initialize() {
  let obj = {
    hasChanges() {
      return false;
    },
    processProto() {
      c0 = false;
      if (null != timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => saveProtos(c0), closure_15);
    },
  };
  UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push(obj);
  const beforeSendCallbacks = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  obj = {
    hasChanges() {
      let hasPendingUsageResult = StickersPersistedStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(stickerFrecency) {
      let hasPendingUsageResult = StickersPersistedStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const StickerFrecency = frecency_user_settings.StickerFrecency;
        stickerFrecency.stickerFrecency = StickerFrecency.create();
        stickerFrecency.stickerFrecency.stickers = user_settings_UserSettingsUtils.serializeUsageHistory(
          StickersPersistedStore.stickerFrecencyWithoutFetchingLatest.usageHistory,
          100,
        );
      }
    },
  };
  UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push(obj);
  const beforeSendCallbacks1 = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  obj = {
    hasChanges() {
      let hasPendingUsageResult = EmojiStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(emojiFrecency) {
      let hasPendingUsageResult = EmojiStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const EmojiFrecency = frecency_user_settings.EmojiFrecency;
        emojiFrecency.emojiFrecency = EmojiFrecency.create();
        const EmojiFrecency2 = frecency_user_settings.EmojiFrecency;
        emojiFrecency.emojiReactionFrecency = EmojiFrecency2.create();
        emojiFrecency.emojiFrecency.emojis = user_settings_UserSettingsUtils.serializeUsageHistory(
          EmojiStore.emojiFrecencyWithoutFetchingLatest.usageHistory,
          100,
        );
        emojiFrecency.emojiReactionFrecency.emojis = user_settings_UserSettingsUtils.serializeUsageHistory(
          EmojiStore.emojiReactionFrecencyWithoutFetchingLatest.usageHistory,
          100,
        );
      }
    },
  };
  UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push(obj);
  const beforeSendCallbacks2 = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
    hasChanges() {
      let hasPendingUsageResult = SoundboardStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(playedSoundFrecency) {
      let hasPendingUsageResult = SoundboardStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const PlayedSoundFrecency = frecency_user_settings.PlayedSoundFrecency;
        playedSoundFrecency.playedSoundFrecency = PlayedSoundFrecency.create();
        playedSoundFrecency.playedSoundFrecency.playedSounds = user_settings_UserSettingsUtils.serializeUsageHistory(
          SoundboardStore.playedSoundFrecencyWithoutFetchingLatest.usageHistory,
          FREQUENCY_ITEM_LIMIT,
        );
      }
    },
  });
  const beforeSendCallbacks3 = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  const obj1 = {
    hasChanges() {
      let hasPendingUsageResult = SoundboardStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(playedSoundFrecency) {
      let hasPendingUsageResult = SoundboardStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const PlayedSoundFrecency = frecency_user_settings.PlayedSoundFrecency;
        playedSoundFrecency.playedSoundFrecency = PlayedSoundFrecency.create();
        playedSoundFrecency.playedSoundFrecency.playedSounds = user_settings_UserSettingsUtils.serializeUsageHistory(
          SoundboardStore.playedSoundFrecencyWithoutFetchingLatest.usageHistory,
          FREQUENCY_ITEM_LIMIT,
        );
      }
    },
  };
  UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
    hasChanges() {
      let hasPendingUsageResult = ApplicationCommandFrecencyStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(applicationCommandFrecency) {
      let hasPendingUsageResult = ApplicationCommandFrecencyStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const ApplicationCommandFrecency = frecency_user_settings.ApplicationCommandFrecency;
        applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
        applicationCommandFrecency.applicationCommandFrecency.applicationCommands =
          user_settings_UserSettingsUtils.serializeUsageHistory(
            ApplicationCommandFrecencyStore.getCommandFrecencyWithoutLoadingLatest().usageHistory,
            500,
          );
      }
    },
  });
  const beforeSendCallbacks4 = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  let obj2 = {
    hasChanges() {
      let hasPendingUsageResult = ApplicationCommandFrecencyStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(applicationCommandFrecency) {
      let hasPendingUsageResult = ApplicationCommandFrecencyStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const ApplicationCommandFrecency = frecency_user_settings.ApplicationCommandFrecency;
        applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
        applicationCommandFrecency.applicationCommandFrecency.applicationCommands =
          user_settings_UserSettingsUtils.serializeUsageHistory(
            ApplicationCommandFrecencyStore.getCommandFrecencyWithoutLoadingLatest().usageHistory,
            500,
          );
      }
    },
  };
  UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
    hasChanges() {
      let hasPendingUsageResult = ApplicationFrecencyStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(applicationFrecency) {
      let hasPendingUsageResult = ApplicationFrecencyStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const ApplicationFrecency = frecency_user_settings.ApplicationFrecency;
        applicationFrecency.applicationFrecency = ApplicationFrecency.create();
        applicationFrecency.applicationFrecency.applications = user_settings_UserSettingsUtils.serializeUsageHistory(
          ApplicationFrecencyStore.getApplicationFrecencyWithoutLoadingLatest().usageHistory,
          FREQUENCY_ITEM_LIMIT,
        );
      }
    },
  });
  const beforeSendCallbacks5 = UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  const obj3 = {
    hasChanges() {
      let hasPendingUsageResult = ApplicationFrecencyStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(applicationFrecency) {
      let hasPendingUsageResult = ApplicationFrecencyStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const ApplicationFrecency = frecency_user_settings.ApplicationFrecency;
        applicationFrecency.applicationFrecency = ApplicationFrecency.create();
        applicationFrecency.applicationFrecency.applications = user_settings_UserSettingsUtils.serializeUsageHistory(
          ApplicationFrecencyStore.getApplicationFrecencyWithoutLoadingLatest().usageHistory,
          FREQUENCY_ITEM_LIMIT,
        );
      }
    },
  };
  UserSettingsProtoActionCreators.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
    hasChanges() {
      let hasPendingUsageResult = FrecencyStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(guildAndChannelFrecency) {
      let hasPendingUsageResult = FrecencyStore.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = UserSettingsProtoStore.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const GuildAndChannelFrecency = frecency_user_settings.GuildAndChannelFrecency;
        guildAndChannelFrecency.guildAndChannelFrecency = GuildAndChannelFrecency.create();
        guildAndChannelFrecency.guildAndChannelFrecency.guildAndChannels =
          user_settings_UserSettingsUtils.serializeUsageHistory(
            FrecencyStore.frecencyWithoutFetchingLatest.usageHistory,
            MAX_NUM_SELECTED_ITEMS,
          );
      }
    },
  });
};
const frecencyUserSettingsManager = new FrecencyUserSettingsManager();
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/FrecencyUserSettingsManager.tsx");

export default frecencyUserSettingsManager;

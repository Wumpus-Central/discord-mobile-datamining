// discord_app/modules/user_settings/FrecencyUserSettingsManager.tsx
import obj132Default from "../../utils/Durations.tsx";
import updateUserGuildSettings from "UserSettingsProtoActionCreators.tsx";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import handleUserSettingsProtoStoreChange from "../application_commands/ApplicationCommandFrecencyStore.tsx";
import handleUserSettingsProtoStoreChange2 from "../applications/ApplicationFrecencyStore.tsx";
import getEmojiToGroupId from "../emojis/EmojiStore.tsx";
import handleSoundCreateOrUpdate from "../soundboard/SoundboardStore.tsx";
import handleStickersStoreUpdate from "../stickers/StickersPersistedStore.tsx";
import handleChannelSelect from "../../stores/FrecencyStore.tsx";
import { MAX_NUM_SELECTED_ITEMS } from "../../stores/FrecencyStore.tsx";
import handleConnectionClosedOrResumed from "UserSettingsProtoStore.tsx";
import { UserSettingsTypes } from "UserSettingsConstants.tsx";
import { FREQUENCY_ITEM_LIMIT } from "../applications/ApplicationConstants.tsx";

require = fn;
function handleConnectionOpen() {
  c17 = true;
  c0 = true;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => closure_1_21(c0), closure_14);
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
function saveProtos(arg0) {
  const self = this;
  const apply = _saveProtos.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _saveProtos() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp2;
              closure_1 = tmp2;
              closure_1_23(closure_1_15, false);
              if (!closure_1_11.hasLoaded(closure_1_12.FRECENCY_AND_FAVORITES_SETTINGS)) {
                let hasPendingUsageResult = closure_1_8.hasPendingUsage();
                if (!hasPendingUsageResult) {
                  hasPendingUsageResult = closure_1_6.hasPendingUsage();
                }
                if (!hasPendingUsageResult) {
                  hasPendingUsageResult = c4.hasPendingUsage();
                }
                if (!hasPendingUsageResult) {
                  hasPendingUsageResult = closure_1_5.hasPendingUsage();
                }
                if (!hasPendingUsageResult) {
                  hasPendingUsageResult = closure_1_7.hasPendingUsage();
                }
                if (!hasPendingUsageResult) {
                  let hasPendingUsageResult1 = closure_1_9.hasPendingUsage();
                  if (hasPendingUsageResult1) {
                    hasPendingUsageResult1 = !callback;
                  }
                  hasPendingUsageResult = hasPendingUsageResult1;
                }
                if (hasPendingUsageResult) {
                  obj1 = callback(closure_1_2[12]);
                  let result = obj1.markUserSettingsLoadOkayForDevelopment();
                  const FrecencyUserSettingsActionCreators = callback(closure_1_2[12]).FrecencyUserSettingsActionCreators;
                  c3 = 1;
                  c4 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = FrecencyUserSettingsActionCreators.loadIfNecessary();
                  return obj1;
                }
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          const item = closure_1_1(closure_1_2[15]).forEach(callback(closure_1_2[12]).UserSettingsActionCreatorsByType, (markDirtyIfHasPendingChange) => {
            const result = markDirtyIfHasPendingChange.markDirtyIfHasPendingChange();
          });
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp25) {
          c4 = tmp;
          throw tmp25;
        }
      }
    })();
  });
  closure_22 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function resetTimer(arg0, arg1) {
  c0 = false;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => closure_1_21(c0), arg0);
}
const random = Math.random();
let closure_14 = 10 + random * (10 * obj132Default.Millis.SECOND);
let result = 2 * obj132Default.Millis.HOUR;
const random1 = Math.random();
let closure_15 = result + Math.floor(random1 * (10 * obj132Default.Millis.MINUTE));
let c16 = null;
let c17 = false;
initializeDefault;
class FrecencyUserSettingsManager extends tmp5 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { POST_CONNECTION_OPEN: handleConnectionOpen, CONNECTION_RESUMED: handleConnectionOpen, CONNECTION_CLOSED: handleConnectionClosed, APP_STATE_UPDATE: handleAppStateUpdate };
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
      timeout = setTimeout(() => closure_1_21(c0), closure_15);
    }
  };
  updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push(obj);
  const beforeSendCallbacks = updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  obj = {
    hasChanges() {
      let hasPendingUsageResult = closure_8.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = closure_11.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(stickerFrecency) {
      let hasPendingUsageResult = closure_8.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = closure_11.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const StickerFrecency = callback(1341).StickerFrecency;
        stickerFrecency.stickerFrecency = StickerFrecency.create();
        stickerFrecency.stickerFrecency.stickers = callback(1342).serializeUsageHistory(closure_8.stickerFrecencyWithoutFetchingLatest.usageHistory, 100);
        const obj = callback(1342);
      }
    }
  };
  updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push(obj);
  const beforeSendCallbacks1 = updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  obj = {
    hasChanges() {
      let hasPendingUsageResult = closure_6.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = closure_11.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(emojiFrecency) {
      let hasPendingUsageResult = closure_6.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = closure_11.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const EmojiFrecency = callback(1341).EmojiFrecency;
        emojiFrecency.emojiFrecency = EmojiFrecency.create();
        const EmojiFrecency2 = callback(1341).EmojiFrecency;
        emojiFrecency.emojiReactionFrecency = EmojiFrecency2.create();
        emojiFrecency.emojiFrecency.emojis = callback(1342).serializeUsageHistory(closure_6.emojiFrecencyWithoutFetchingLatest.usageHistory, 100);
        const obj = callback(1342);
        emojiFrecency.emojiReactionFrecency.emojis = callback(1342).serializeUsageHistory(closure_6.emojiReactionFrecencyWithoutFetchingLatest.usageHistory, 100);
        const obj2 = callback(1342);
      }
    }
  };
  updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push(obj);
  const beforeSendCallbacks2 = updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
    hasChanges() {
      let hasPendingUsageResult = closure_7.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = closure_11.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(playedSoundFrecency) {
      let hasPendingUsageResult = closure_7.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = closure_11.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const PlayedSoundFrecency = callback(1341).PlayedSoundFrecency;
        playedSoundFrecency.playedSoundFrecency = PlayedSoundFrecency.create();
        playedSoundFrecency.playedSoundFrecency.playedSounds = callback(1342).serializeUsageHistory(closure_7.playedSoundFrecencyWithoutFetchingLatest.usageHistory, closure_13);
        const obj = callback(1342);
      }
    }
  });
  const beforeSendCallbacks3 = updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
    hasChanges() {
      let hasPendingUsageResult = closure_4.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = closure_11.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(applicationCommandFrecency) {
      let hasPendingUsageResult = closure_4.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = closure_11.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const ApplicationCommandFrecency = callback(1341).ApplicationCommandFrecency;
        applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
        applicationCommandFrecency.applicationCommandFrecency.applicationCommands = callback(1342).serializeUsageHistory(closure_4.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500);
        const obj2 = callback(1342);
      }
    }
  });
  const beforeSendCallbacks4 = updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
    hasChanges() {
      let hasPendingUsageResult = closure_5.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = closure_11.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(applicationFrecency) {
      let hasPendingUsageResult = closure_5.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = closure_11.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const ApplicationFrecency = callback(1341).ApplicationFrecency;
        applicationFrecency.applicationFrecency = ApplicationFrecency.create();
        applicationFrecency.applicationFrecency.applications = callback(1342).serializeUsageHistory(closure_5.getApplicationFrecencyWithoutLoadingLatest().usageHistory, closure_13);
        const obj2 = callback(1342);
      }
    }
  });
  const beforeSendCallbacks5 = updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  updateUserGuildSettings.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
    hasChanges() {
      let hasPendingUsageResult = closure_9.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = closure_11.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(guildAndChannelFrecency) {
      let hasPendingUsageResult = closure_9.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = closure_11.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const GuildAndChannelFrecency = callback(1341).GuildAndChannelFrecency;
        guildAndChannelFrecency.guildAndChannelFrecency = GuildAndChannelFrecency.create();
        guildAndChannelFrecency.guildAndChannelFrecency.guildAndChannels = callback(1342).serializeUsageHistory(closure_9.frecencyWithoutFetchingLatest.usageHistory, closure_10);
        const obj = callback(1342);
      }
    }
  });
};
const frecencyUserSettingsManager = new FrecencyUserSettingsManager();
const result1 = require("obj132").fileFinishedImporting("modules/user_settings/FrecencyUserSettingsManager.tsx");

export default frecencyUserSettingsManager;
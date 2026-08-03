// === Module 16271: handleConnectionOpen ===

// Module 16271 (handleConnectionOpen)
import handleStickersStoreUpdate from "handleStickersStoreUpdate";
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange";
import closure_5 from "handleUserSettingsProtoStoreChange";
import getEmojiToGroupId from "getEmojiToGroupId";
import handleSoundCreateOrUpdate from "handleSoundCreateOrUpdate";
import closure_8 from "handleStickersStoreUpdate";
import handleChannelSelect from "handleChannelSelect";
import { MAX_NUM_SELECTED_ITEMS } from "handleChannelSelect";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { UserSettingsTypes } from "MAX_FAVORITES";
import { FREQUENCY_ITEM_LIMIT } from "ApplicationTypes";
import "initialize";

const require = arg1;
function handleConnectionOpen() {
  let c17 = true;
  let c0 = true;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => outer1_21(c0), closure_14);
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let closure_2 = tmp2;
              let closure_1 = tmp2;
              outer1_23(outer1_15, false);
              if (!outer1_11.hasLoaded(outer1_12.FRECENCY_AND_FAVORITES_SETTINGS)) {
                let hasPendingUsageResult = outer1_8.hasPendingUsage();
                if (!hasPendingUsageResult) {
                  hasPendingUsageResult = outer1_6.hasPendingUsage();
                }
                if (!hasPendingUsageResult) {
                  hasPendingUsageResult = c4.hasPendingUsage();
                }
                if (!hasPendingUsageResult) {
                  hasPendingUsageResult = outer1_5.hasPendingUsage();
                }
                if (!hasPendingUsageResult) {
                  hasPendingUsageResult = outer1_7.hasPendingUsage();
                }
                if (!hasPendingUsageResult) {
                  let hasPendingUsageResult1 = outer1_9.hasPendingUsage();
                  if (hasPendingUsageResult1) {
                    hasPendingUsageResult1 = !tmp31;
                  }
                  hasPendingUsageResult = hasPendingUsageResult1;
                }
                if (hasPendingUsageResult) {
                  let obj1 = callback(outer1_2[12]);
                  let result = obj1.markUserSettingsLoadOkayForDevelopment();
                  const FrecencyUserSettingsActionCreators = callback(outer1_2[12]).FrecencyUserSettingsActionCreators;
                  c3 = 1;
                  c4 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = FrecencyUserSettingsActionCreators.loadIfNecessary();
                  return obj1;
                }
              }
              tmp31 = callback;
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
          const item = outer1_1(outer1_2[15]).forEach(callback(outer1_2[12]).UserSettingsActionCreatorsByType, (markDirtyIfHasPendingChange) => {
            const result = markDirtyIfHasPendingChange.markDirtyIfHasPendingChange();
          });
          c4 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp25) {
          c4 = tmp;
          throw tmp25;
        }
      }
    })();
  });
  const _saveProtos = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function resetTimer(arg0, arg1) {
  let c0 = false;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => outer1_21(c0), arg0);
}
const random = Math.random();
let closure_14 = 10 + random * (10 * require("set").Millis.SECOND);
let result = 2 * require("set").Millis.HOUR;
const random1 = Math.random();
let closure_15 = result + Math.floor(random1 * (10 * require("set").Millis.MINUTE));
let c16 = null;
let c17 = false;
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
      let c0 = false;
      if (null != timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => outer1_21(c0), closure_15);
    }
  };
  require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push(obj);
  const beforeSendCallbacks = require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  obj = {
    hasChanges() {
      let hasPendingUsageResult = closure_8.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(stickerFrecency) {
      let hasPendingUsageResult = closure_8.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const StickerFrecency = callback(1341).StickerFrecency;
        stickerFrecency.stickerFrecency = StickerFrecency.create();
        stickerFrecency.stickerFrecency.stickers = callback(1342).serializeUsageHistory(closure_8.stickerFrecencyWithoutFetchingLatest.usageHistory, 100);
        const obj = callback(1342);
      }
    }
  };
  require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push(obj);
  const beforeSendCallbacks1 = require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  obj = {
    hasChanges() {
      let hasPendingUsageResult = getEmojiToGroupId.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(emojiFrecency) {
      let hasPendingUsageResult = getEmojiToGroupId.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const EmojiFrecency = callback(1341).EmojiFrecency;
        emojiFrecency.emojiFrecency = EmojiFrecency.create();
        const EmojiFrecency2 = callback(1341).EmojiFrecency;
        emojiFrecency.emojiReactionFrecency = EmojiFrecency2.create();
        emojiFrecency.emojiFrecency.emojis = callback(1342).serializeUsageHistory(tmp.emojiFrecencyWithoutFetchingLatest.usageHistory, 100);
        const obj = callback(1342);
        emojiFrecency.emojiReactionFrecency.emojis = callback(1342).serializeUsageHistory(tmp.emojiReactionFrecencyWithoutFetchingLatest.usageHistory, 100);
        const obj2 = callback(1342);
      }
    }
  };
  require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push(obj);
  const beforeSendCallbacks2 = require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
    hasChanges() {
      let hasPendingUsageResult = handleSoundCreateOrUpdate.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(playedSoundFrecency) {
      let hasPendingUsageResult = handleSoundCreateOrUpdate.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const PlayedSoundFrecency = callback(1341).PlayedSoundFrecency;
        playedSoundFrecency.playedSoundFrecency = PlayedSoundFrecency.create();
        playedSoundFrecency.playedSoundFrecency.playedSounds = callback(1342).serializeUsageHistory(handleSoundCreateOrUpdate.playedSoundFrecencyWithoutFetchingLatest.usageHistory, closure_13);
        const obj = callback(1342);
      }
    }
  });
  const beforeSendCallbacks3 = require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  const obj1 = {
    hasChanges() {
      let hasPendingUsageResult = handleSoundCreateOrUpdate.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(playedSoundFrecency) {
      let hasPendingUsageResult = handleSoundCreateOrUpdate.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const PlayedSoundFrecency = callback(1341).PlayedSoundFrecency;
        playedSoundFrecency.playedSoundFrecency = PlayedSoundFrecency.create();
        playedSoundFrecency.playedSoundFrecency.playedSounds = callback(1342).serializeUsageHistory(handleSoundCreateOrUpdate.playedSoundFrecencyWithoutFetchingLatest.usageHistory, closure_13);
        const obj = callback(1342);
      }
    }
  };
  require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
    hasChanges() {
      let hasPendingUsageResult = handleUserSettingsProtoStoreChange.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(applicationCommandFrecency) {
      let hasPendingUsageResult = handleUserSettingsProtoStoreChange.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const ApplicationCommandFrecency = callback(1341).ApplicationCommandFrecency;
        applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
        applicationCommandFrecency.applicationCommandFrecency.applicationCommands = callback(1342).serializeUsageHistory(handleUserSettingsProtoStoreChange.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500);
        const obj2 = callback(1342);
      }
    }
  });
  const beforeSendCallbacks4 = require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  let obj2 = {
    hasChanges() {
      let hasPendingUsageResult = handleUserSettingsProtoStoreChange.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(applicationCommandFrecency) {
      let hasPendingUsageResult = handleUserSettingsProtoStoreChange.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const ApplicationCommandFrecency = callback(1341).ApplicationCommandFrecency;
        applicationCommandFrecency.applicationCommandFrecency = ApplicationCommandFrecency.create();
        applicationCommandFrecency.applicationCommandFrecency.applicationCommands = callback(1342).serializeUsageHistory(handleUserSettingsProtoStoreChange.getCommandFrecencyWithoutLoadingLatest().usageHistory, 500);
        const obj2 = callback(1342);
      }
    }
  };
  require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
    hasChanges() {
      let hasPendingUsageResult = closure_5.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(applicationFrecency) {
      let hasPendingUsageResult = closure_5.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const ApplicationFrecency = callback(1341).ApplicationFrecency;
        applicationFrecency.applicationFrecency = ApplicationFrecency.create();
        applicationFrecency.applicationFrecency.applications = callback(1342).serializeUsageHistory(closure_5.getApplicationFrecencyWithoutLoadingLatest().usageHistory, closure_13);
        const obj2 = callback(1342);
      }
    }
  });
  const beforeSendCallbacks5 = require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks;
  const obj3 = {
    hasChanges() {
      let hasPendingUsageResult = closure_5.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(applicationFrecency) {
      let hasPendingUsageResult = closure_5.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const ApplicationFrecency = callback(1341).ApplicationFrecency;
        applicationFrecency.applicationFrecency = ApplicationFrecency.create();
        applicationFrecency.applicationFrecency.applications = callback(1342).serializeUsageHistory(closure_5.getApplicationFrecencyWithoutLoadingLatest().usageHistory, closure_13);
        const obj2 = callback(1342);
      }
    }
  };
  require(1355) /* updateUserGuildSettings */.FrecencyUserSettingsActionCreators.beforeSendCallbacks.push({
    hasChanges() {
      let hasPendingUsageResult = handleChannelSelect.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      return hasPendingUsageResult;
    },
    processProto(guildAndChannelFrecency) {
      let hasPendingUsageResult = handleChannelSelect.hasPendingUsage();
      if (hasPendingUsageResult) {
        hasPendingUsageResult = handleConnectionClosedOrResumed.hasLoaded(constants.FRECENCY_AND_FAVORITES_SETTINGS);
      }
      if (hasPendingUsageResult) {
        const GuildAndChannelFrecency = callback(1341).GuildAndChannelFrecency;
        guildAndChannelFrecency.guildAndChannelFrecency = GuildAndChannelFrecency.create();
        guildAndChannelFrecency.guildAndChannelFrecency.guildAndChannels = callback(1342).serializeUsageHistory(handleChannelSelect.frecencyWithoutFetchingLatest.usageHistory, closure_10);
        const obj = callback(1342);
      }
    }
  });
};
const frecencyUserSettingsManager = new FrecencyUserSettingsManager();
const result1 = require("handleUserSettingsProtoStoreChange").fileFinishedImporting("modules/user_settings/FrecencyUserSettingsManager.tsx");

export default frecencyUserSettingsManager;
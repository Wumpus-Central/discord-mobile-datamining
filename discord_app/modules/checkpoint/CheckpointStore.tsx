// === Module 14253: CheckpointStore ===

// Module 14253 (CheckpointStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 2110 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6421 */;
import CheckpointTrait from "CheckpointTrait" /* 6422 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6745 */;
import CheckpointFlows from "CheckpointFlows" /* 14255 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
let obj = { INIT: 0, [0]: "INIT", FETCHING: 1, [1]: "FETCHING", SUCCESS: 2, [2]: "SUCCESS", ERROR: 3, [3]: "ERROR" };
let obj2 = { volume: 1, isMuted: false, progress: null };
let closure_5 = {};
let merged = Object.assign(obj2);
obj = {};
let c7 = null;
let c8 = null;
let c9 = null;
let c10 = false;
let c11 = null;
let INIT = obj.INIT;
let c13 = null;
let c14 = false;
const PersistedStore = initializeDefault.PersistedStore;
class CheckpointStore extends PersistedStore {
}
const prototype = CheckpointStore.prototype;
prototype["getState"] = function getState() {
  return obj;
};
prototype["initialize"] = function initialize(arg0) {
  this.waitFor(UserStore);
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(arg0);
  }
};
Object.defineProperty(prototype, "volume", {
  get: function volume() {
    return obj.volume;
  },
  set: undefined
});
Object.defineProperty(prototype, "isMuted", {
  get: function isMuted() {
    return obj.isMuted;
  },
  set: undefined
});
Object.defineProperty(prototype, "stats", {
  get: function stats() {
    return c7;
  },
  set: undefined
});
Object.defineProperty(prototype, "globalStats", {
  get: function globalStats() {
    return c8;
  },
  set: undefined
});
Object.defineProperty(prototype, "character", {
  get: function character() {
    return c9;
  },
  set: undefined
});
Object.defineProperty(prototype, "compactAssets", {
  get: function compactAssets() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "availability", {
  get: function availability() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "isCharacterCreatorEnabled", {
  get: function isCharacterCreatorEnabled() {
    return c11 === require("CheckpointAvailability").CheckpointAvailability.FULL;
  },
  set: undefined
});
Object.defineProperty(prototype, "fetchState", {
  get: function fetchState() {
    return INIT;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetching", {
  get: function isFetching() {
    return INIT === obj.FETCHING;
  },
  set: undefined
});
Object.defineProperty(prototype, "isSaving", {
  get: function isSaving() {
    return c14;
  },
  set: undefined
});
Object.defineProperty(prototype, "progress", {
  get: function progress() {
    return obj.progress;
  },
  set: undefined
});
Object.defineProperty(prototype, "selectedCharacterTraits", {
  get: function selectedCharacterTraits() {
    let tmp = c13;
    if (c13 == null) {
      tmp = c9;
    }
    if (tmp == null) {
      tmp = closure_5;
    }
    return tmp;
  },
  set: undefined
});
CheckpointStore.displayName = "Checkpoint2026Store";
CheckpointStore.persistKey = "Checkpoint2026Store";
const items = [
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    obj.progress = null;
    return obj;
  },
  (arg0) => {
    const merged = Object.assign(arg0);
    return { volume: 1 };
  },
  (progress) => {
    obj = {};
    const merged = Object.assign(progress);
    let tmp2 = null;
    if (null != progress.progress) {
      obj2 = {};
      const merged1 = Object.assign(progress.progress);
      obj2.availability = require("CheckpointAvailability").CheckpointAvailability.FULL;
      tmp2 = obj2;
    }
    obj.progress = tmp2;
    return obj;
  }
];
CheckpointStore.migrations = items;
const checkpointStore = new CheckpointStore(DispatcherDefault, {
  CHECKPOINT_TOGGLE_MUTE: function handleToggleMute() {
    obj.isMuted = !obj.isMuted;
  },
  CHECKPOINT_SET_VOLUME: function handleSetVolume(volume) {
    volume = volume.volume;
    if (obj.volume === volume) {
      if (!obj.isMuted) {
        return false;
      }
    }
    obj.volume = volume;
    obj.isMuted = false;
  },
  CHECKPOINT_FETCH_START: function handleFetchStart() {
    INIT = obj.FETCHING;
  },
  CHECKPOINT_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ stats: c7, globalStats: c8, character: c9, compactAssets: c10, availability: c11 } = arg0);
    INIT = obj.SUCCESS;
    const progress = obj.progress;
    if (null != progress) {
      if (c11 !== require("CheckpointAvailability").CheckpointAvailability.UNAVAILABLE) {
        let tmp5 = null;
      }
      tmp.progress = tmp5;
      selectedCharacterTraits = null;
      const progress2 = obj.progress;
      let tmp10 = c11 === require("CheckpointAvailability").CheckpointAvailability.FULL;
      if (tmp10) {
        tmp10 = null == c9;
      }
      if (tmp10) {
        tmp10 = null != progress2;
      }
      if (tmp10) {
        selectedCharacterTraits = (function getUnlockedTraits(selectedCharacterTraits) {
          obj2 = {};
          const values = Object.values(CheckpointTrait.CheckpointTrait);
          const iter = values[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp4 = nextResult;
            let tmp5 = selectedCharacterTraits[nextResult];
            let tmp6 = tmp5;
            let result = null == tmp5;
            if (!result) {
              let obj3 = CheckpointCharacterTraits;
              let obj4 = { stats, hasNitro: isPremiumResult, savedCharacter };
              result = obj3.isTraitSelectionLocked(tmp4, tmp6, obj4);
            }
            if (!result) {
              obj2[tmp4] = tmp6;
            }
            continue;
          }
          return obj2;
        })(progress2.selectedCharacterTraits);
        obj = {};
        const merged = Object.assign(progress2);
        obj.selectedCharacterTraits = selectedCharacterTraits;
        obj.progress = obj;
      }
    }
    tmp5 = progress;
  },
  CHECKPOINT_FETCH_FAILED: function handleFetchFailed() {
    INIT = obj.ERROR;
  },
  CHECKPOINT_COMPLETE_START: function handleCompleteStart() {
    c14 = true;
  },
  CHECKPOINT_COMPLETE_SUCCESS: function handleCompleteSuccess(character) {
    character = character.character;
    c13 = null;
    c14 = false;
  },
  CHECKPOINT_COMPLETE_FAILED: function handleCompleteFailed() {
    c14 = false;
  },
  CHECKPOINT_RESET_SUCCESS: function handleResetSuccess() {
    c9 = null;
    c13 = null;
    obj.progress = null;
  },
  CHECKPOINT_SELECT_CHARACTER_TRAIT: function handleSelectCharacterTrait(trait) {
    let tmp = selectedCharacterTraits;
    if (selectedCharacterTraits == null) {
      tmp = c9;
    }
    if (tmp == null) {
      tmp = closure_5;
    }
    obj = {};
    const merged = Object.assign(tmp);
    obj[trait.trait] = trait.optionId;
    selectedCharacterTraits = obj;
    if (null != obj.progress) {
      obj2 = {};
      const merged1 = Object.assign(obj.progress);
      obj2.selectedCharacterTraits = selectedCharacterTraits;
      obj.progress = obj2;
    }
  },
  CHECKPOINT_SAVE_PROGRESS: function handleSaveProgress(stage) {
    stage = stage.stage;
    if (null == availability) {
      return false;
    } else {
      const obj3 = { stats, character, isCharacterCreatorEnabled: availability === require("CheckpointAvailability").CheckpointAvailability.FULL };
      if (obj2.hasCheckpointSummaryRoute(obj3)) {
        const progress = obj.progress;
        let stage1;
        if (progress != null) {
          stage1 = progress.stage;
        }
        if (stage1 === CheckpointNavigation.CheckpointCharacterStage.SUMMARY) {
          return false;
        } else {
          let tmp3 = c13;
          if (c13 == null) {
            tmp3 = character;
          }
          if (tmp3 == null) {
            tmp3 = closure_5;
          }
          let stage2;
          if (progress != null) {
            stage2 = progress.stage;
          }
          if (stage2 === stage) {
            if (progress.selectedCharacterTraits === tmp3) {
              return false;
            }
          }
          obj = { stage, selectedCharacterTraits: tmp3, availability };
          obj.progress = obj;
        }
      } else {
        return false;
      }
      obj2 = CheckpointFlows;
    }
  },
  LOGOUT: function handleLogout() {
    obj = {};
    const merged = Object.assign(obj2);
    c7 = null;
    c8 = null;
    c9 = null;
    c10 = false;
    c11 = null;
    INIT = obj.INIT;
    c13 = null;
    c14 = false;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/CheckpointStore.tsx");

export default checkpointStore;
export const CheckpointFetchStates = obj;
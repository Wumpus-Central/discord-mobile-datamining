// discord_app/modules/checkpoint/CheckpointStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let obj = { INIT: 0, [0]: "INIT", FETCHING: 1, [1]: "FETCHING", SUCCESS: 2, [2]: "SUCCESS", ERROR: 3, [3]: "ERROR" };
const obj2 = { isMuted: false };
let closure_2 = {};
let merged = Object.assign(obj2);
obj = {};
let c4 = null;
let c5 = null;
let c6 = null;
let INIT = obj.INIT;
let c8 = null;
const PersistedStore = initializeDefault.PersistedStore;
class CheckpointStore extends PersistedStore {}
const prototype = CheckpointStore.prototype;
prototype["getState"] = function getState() {
  return obj;
};
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(arg0);
  }
};
Object.defineProperty(prototype, "isMuted", {
  get: function isMuted() {
    return obj.isMuted;
  },
  set: undefined,
});
Object.defineProperty(prototype, "stats", {
  get: function stats() {
    return c4;
  },
  set: undefined,
});
Object.defineProperty(prototype, "globalStats", {
  get: function globalStats() {
    return c5;
  },
  set: undefined,
});
Object.defineProperty(prototype, "character", {
  get: function character() {
    return c6;
  },
  set: undefined,
});
Object.defineProperty(prototype, "fetchState", {
  get: function fetchState() {
    return INIT;
  },
  set: undefined,
});
Object.defineProperty(prototype, "selectedCharacterTraits", {
  get: function selectedCharacterTraits() {
    let tmp = c8;
    if (c8 == null) {
      tmp = c6;
    }
    if (tmp == null) {
      tmp = closure_2;
    }
    return tmp;
  },
  set: undefined,
});
CheckpointStore.displayName = "Checkpoint2026Store";
CheckpointStore.persistKey = "Checkpoint2026Store";
const checkpointStore = new CheckpointStore(DispatcherDefault, {
  CHECKPOINT_TOGGLE_MUTE: function handleToggleMute() {
    obj.isMuted = !obj.isMuted;
  },
  CHECKPOINT_FETCH_START: function handleFetchStart() {
    INIT = obj.FETCHING;
  },
  CHECKPOINT_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ stats: c4, globalStats: c5, character: c6 } = arg0);
    INIT = obj.SUCCESS;
  },
  CHECKPOINT_FETCH_FAILED: function handleFetchFailed() {
    INIT = obj.ERROR;
  },
  CHECKPOINT_COMPLETE_SUCCESS: function handleCompleteSuccess(character) {
    character = character.character;
    c8 = null;
  },
  CHECKPOINT_RESET_SUCCESS: function handleResetSuccess() {
    c6 = null;
    c8 = null;
  },
  CHECKPOINT_SELECT_CHARACTER_TRAIT: function handleSelectCharacterTrait(trait) {
    let tmp = c8;
    if (c8 == null) {
      tmp = c6;
    }
    if (tmp == null) {
      tmp = closure_2;
    }
    obj = {};
    const merged = Object.assign(tmp);
    obj[trait.trait] = trait.optionId;
    c8 = obj;
  },
  CHECKPOINT_RESET_EDITED_CHARACTER: function handleResetEditedCharacter() {
    c8 = null;
  },
  LOGOUT: function handleLogout() {
    obj = {};
    const merged = Object.assign(obj2);
    c4 = null;
    c5 = null;
    c6 = null;
    INIT = obj.INIT;
    c8 = null;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointStore.tsx");

export default checkpointStore;
export const CheckpointFetchStates = obj;

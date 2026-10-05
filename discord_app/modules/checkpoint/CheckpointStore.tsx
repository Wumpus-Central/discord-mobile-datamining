// discord_app/modules/checkpoint/CheckpointStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = { INIT: 0, [0]: "INIT", FETCHING: 1, [1]: "FETCHING", SUCCESS: 2, [2]: "SUCCESS", ERROR: 3, [3]: "ERROR" };
const obj2 = { isMuted: false };
const obj3 = {};
let merged = Object.assign(obj2);
obj = obj3;
let c3 = null;
let c4 = null;
let INIT = obj.INIT;
const PersistedStore = get_initializedDefault.PersistedStore;
class CheckpointStore extends PersistedStore {
  getState() {
    return obj;
  }
  initialize(arg0) {
    if (null != arg0) {
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(arg0);
    }
  }
}
const prototype = CheckpointStore.prototype;
Object.defineProperty(prototype, "isMuted", {
  get: function isMuted() {
    return obj.isMuted;
  },
  set: undefined,
});
Object.defineProperty(prototype, "stats", {
  get: function stats() {
    return c3;
  },
  set: undefined,
});
Object.defineProperty(prototype, "character", {
  get: function character() {
    return c4;
  },
  set: undefined,
});
Object.defineProperty(prototype, "fetchState", {
  get: function fetchState() {
    return INIT;
  },
  set: undefined,
});
CheckpointStore.displayName = "Checkpoint2026Store";
CheckpointStore.persistKey = "Checkpoint2026Store";
const obj4 = {
  CHECKPOINT_TOGGLE_MUTE: function handleToggleMute() {
    obj.isMuted = !obj.isMuted;
  },
  CHECKPOINT_FETCH_START: function handleFetchStart() {
    INIT = obj.FETCHING;
  },
  CHECKPOINT_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ stats: c3, character: c4 } = arg0);
    INIT = obj.SUCCESS;
  },
  CHECKPOINT_FETCH_FAILED: function handleFetchFailed() {
    INIT = obj.ERROR;
  },
  CHECKPOINT_COMPLETE_SUCCESS: function handleCompleteSuccess(character) {
    character = character.character;
  },
  CHECKPOINT_RESET_SUCCESS: function handleResetSuccess() {
    c4 = null;
  },
  LOGOUT: function handleLogout() {
    obj = {};
    const merged = Object.assign(obj2);
    c3 = null;
    c4 = null;
    INIT = obj.INIT;
  },
};
const checkpointStore = new CheckpointStore(DispatcherDefault, obj4);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointStore.tsx");

export default checkpointStore;
export const CheckpointFetchStates = obj;

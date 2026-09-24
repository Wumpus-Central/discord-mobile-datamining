// discord_app/modules/checkpoint/CheckpointStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let obj = { isMuted: false };
let merged = Object.assign(obj);
obj = {};
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
CheckpointStore.displayName = "Checkpoint2026Store";
CheckpointStore.persistKey = "Checkpoint2026Store";
const checkpointStore = new CheckpointStore(DispatcherDefault, {
  CHECKPOINT_TOGGLE_MUTE: function handleToggleMute() {
    obj.isMuted = !obj.isMuted;
  },
  LOGOUT: function handleLogout() {
    obj = {};
    const merged = Object.assign(obj);
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointStore.tsx");

export default checkpointStore;

// === Module 9596: AVErrorStore ===

// Module 9596 (AVErrorStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import SetUtils from "SetUtils" /* 1974 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function isAVErrorContextOfType(type, CAMERA_SEND_LOW_FPS) {
  return type.type === CAMERA_SEND_LOW_FPS;
}
let activeErrors = new Map();
let map1 = new Map();
const Store = initializeDefault.Store;
class AVErrorStore extends Store {
}
const prototype = AVErrorStore.prototype;
prototype["hasActiveErrorOfType"] = function hasActiveErrorOfType(arg0) {
  let items = map1.get(arg0);
  if (items == null) {
    items = [];
  }
  return items.length > 0;
};
prototype["getActiveErrors"] = function getActiveErrors() {
  if (!(activeErrors instanceof Map)) {
    const _Map = Map;
    const map = new Map();
    activeErrors = map;
  }
  return activeErrors;
};
prototype["getActiveErrorsOfType"] = function getActiveErrorsOfType(CAMERA_SEND_LOW_FPS) {
  const items = [];
  value = map1.get(CAMERA_SEND_LOW_FPS);
  if (null == value) {
    return items;
  } else {
    const tmp3 = value[Symbol.iterator]();
    while (tmp3 !== undefined) {
      value = activeErrors.get(tmp5);
      let tmp9 = value;
      let tmp10 = null != value;
      if (tmp10) {
        tmp10 = isAVErrorContextOfType(tmp9, CAMERA_SEND_LOW_FPS);
      }
      if (tmp10) {
        let arr = items.push(tmp9);
      }
      continue;
    }
    return items;
  }
};
AVErrorStore.displayName = "AVErrorStore";
const aVErrorStore = new AVErrorStore(DispatcherDefault, {
  ACTIVE_AV_ERRORS_CHANGED: function handleActiveErrorsChanged(activeErrors) {
    activeErrors = activeErrors.activeErrors;
    if (activeErrors instanceof Map) {
      const _Map = Map;
      if (!(activeErrors instanceof Map)) {
        const _Map2 = Map;
        const map = new Map();
        activeErrors = map;
      }
      const _Set = Set;
      const set = new Set(activeErrors.keys());
      const _Set2 = Set;
      const set1 = new Set(activeErrors.keys());
      if (obj.areSetsEqual(set, set1)) {
        return false;
      } else {
        const _Map3 = Map;
        map1 = new Map();
        const entries = activeErrors.entries();
        const tmp24 = entries[Symbol.iterator]();
        while (tmp24 !== undefined) {
          let tmp30 = _slicedToArray(tmp27, 2);
          [tmp31, tmp32] = tmp30;
          let items = map1.get(tmp32.type);
          if (items == null) {
            items = [];
          }
          let arr = items.push(tmp31);
          let result = map1.set(tmp32.type, items);
          continue;
        }
      }
      obj = SetUtils;
    } else {
      return false;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/errors/av_errors/AVErrorStore.tsx");

export default aVErrorStore;
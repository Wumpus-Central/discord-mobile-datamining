// === Module 9130: AVErrorStore ===

// Module 9130 (AVErrorStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SetUtils from "SetUtils" /* 2069 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let set;

function isAVErrorContextOfType(type, CAMERA_SEND_LOW_FPS) {
  return type.type === CAMERA_SEND_LOW_FPS;
}
let map = new Map();
let activeErrors = map;
let map1 = new Map();
const Store = get_initializedDefault.Store;
class AVErrorStore extends Store {
  hasActiveErrorOfType(arg0) {
    let items = map1.get(arg0);
    if (items == null) {
      items = [];
    }
    return items.length > 0;
  }
  getActiveErrors() {
    if (!(activeErrors instanceof Map)) {
      const _Map = Map;
      const self = this;
      const self2 = this;
      activeErrors = new Map();
      map = new Map();
    }
    return activeErrors;
  }
  getActiveErrorsOfType(CAMERA_SEND_LOW_FPS) {
    const items = [];
    const value = map1.get(CAMERA_SEND_LOW_FPS);
    if (null == value) {
      return items;
    } else {
      const tmp3 = value[Symbol.iterator]();
      while (tmp3 !== undefined) {
        let value2 = activeErrors.get(tmp5);
        let tmp9 = value2;
        let tmp10 = null != value2;
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
  }
}
const prototype = AVErrorStore.prototype;
AVErrorStore.displayName = "AVErrorStore";
let obj = {
  ACTIVE_AV_ERRORS_CHANGED: function handleActiveErrorsChanged(activeErrors) {
    let tmp23;
    let tmp24;
    activeErrors = activeErrors.activeErrors;
    if (activeErrors instanceof Map) {
      const _Map = Map;
      if (!(activeErrors instanceof Map)) {
        const _Map2 = Map;
        const self = this;
        const self2 = this;
        activeErrors = new Map();
        map = new Map();
      }
      const _Set = Set;
      const self3 = this;
      const self4 = this;
      const _Set2 = Set;
      const self5 = this;
      const self6 = this;
      set = new Set(activeErrors.keys());
      const set1 = new Set(activeErrors.keys());
      const obj = SetUtils;
      if (obj.areSetsEqual(set, set1)) {
        return false;
      } else {
        const _Map3 = Map;
        const self7 = this;
        const self8 = this;
        map1 = new Map();
        const entries = activeErrors.entries();
        const tmp16 = entries[Symbol.iterator]();
        while (tmp16 !== undefined) {
          let tmp22 = _slicedToArray(tmp19, 2);
          [tmp23, tmp24] = tmp22;
          let items = map1.get(tmp24.type);
          if (items == null) {
            items = [];
          }
          let arr = items.push(tmp23);
          let result = map1.set(tmp24.type, items);
          continue;
        }
      }
    } else {
      return false;
    }
  }
};
const aVErrorStore = new AVErrorStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/errors/av_errors/AVErrorStore.tsx");

export default aVErrorStore;
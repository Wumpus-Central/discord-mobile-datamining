// discord_app/modules/errors/av_errors/AVErrorStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import areSetsEqual from "../../../../discord_common/js/shared/utils/SetUtils.tsx";
import closure_2 from "../../../../_runtime/metro/00032__slicedToArray.js";

require = arg1;
function isAVErrorContextOfType(type, CAMERA_SEND_LOW_FPS) {
  return type.type === CAMERA_SEND_LOW_FPS;
}
let map = new Map();
let map1 = new Map();
const Store = initializeDefault.Store;
class AVErrorStore extends Store {}
const prototype = AVErrorStore.prototype;
prototype["hasActiveErrorOfType"] = function hasActiveErrorOfType(arg0) {
  let items = map1.get(arg0);
  if (items == null) {
    items = [];
  }
  return items.length > 0;
};
prototype["getActiveErrors"] = function getActiveErrors() {
  if (!(map instanceof Map)) {
    const _Map = Map;
    map = new Map();
  }
  return map;
};
prototype["getActiveErrorsOfType"] = function getActiveErrorsOfType(CAMERA_SEND_LOW_FPS) {
  const items = [];
  let value = map1.get(CAMERA_SEND_LOW_FPS);
  if (null == value) {
    return items;
  } else {
    const tmp3 = value[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp7 = map;
      value = map.get(tmp5);
      let tmp9 = value;
      let tmp10 = null != value;
      if (tmp10) {
        let tmp11 = isAVErrorContextOfType;
        let tmp12 = value;
        tmp10 = isAVErrorContextOfType(tmp9, CAMERA_SEND_LOW_FPS);
      }
      if (tmp10) {
        let tmp13 = value;
        let arr = items.push(tmp9);
      }
      continue;
    }
    return items;
  }
};
AVErrorStore.displayName = "AVErrorStore";
const aVErrorStore = new AVErrorStore(dispatcherDefault, {
  ACTIVE_AV_ERRORS_CHANGED: function handleActiveErrorsChanged(activeErrors) {
    activeErrors = activeErrors.activeErrors;
    if (activeErrors instanceof Map) {
      const _Map = Map;
      if (!(activeErrors instanceof Map)) {
        const _Map2 = Map;
        map = new Map();
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
          let tmp29 = callback;
          let tmp30 = callback(tmp27, 2);
          [tmp31, tmp32] = tmp30;
          let tmp34 = map1;
          let tmp33 = tmp32;
          let items = map1.get(tmp32.type);
          if (items == null) {
            items = [];
          }
          let tmp35 = tmp31;
          let arr = items.push(tmp31);
          let tmp37 = map1;
          let tmp38 = tmp32;
          let result = map1.set(tmp33.type, items);
          continue;
        }
      }
      obj = areSetsEqual;
    } else {
      return false;
    }
  },
});
let result = require("set").fileFinishedImporting("modules/errors/av_errors/AVErrorStore.tsx");

export default aVErrorStore;

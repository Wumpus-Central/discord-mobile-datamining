// === Module 4768: ? ===

// Module 4768
import module_4769 from "module_4769" /* 4769 */;
import size from "module_2" /* 2 */;

let c2 = 1;
const useToastStore = module_4769.create(() => {
  const obj = { currentToastMap: new Map(), queuedToastsMap: null };
  const map = new Map();
  obj.queuedToastsMap = new Map();
  return obj;
});
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Toast/toastUtils.shared.tsx");

export { useToastStore };
export const showToast = function showToast(surface) {
  let str;
  if (surface != null) {
    str = surface.surface;
  }
  if (str == null) {
    str = "app";
  }
  let obj = { toast: surface, key: null };
  closure_2 = tmp + 1;
  obj.key = +closure_2;
  str(obj[1]).batchUpdates(() => {
    obj.setState((currentToastMap) => {
      currentToastMap = currentToastMap.currentToastMap;
      const _Map = Map;
      if (currentToastMap.has(str)) {
        const _Map1 = new _Map(currentToastMap.queuedToastsMap);
        let items1 = _Map1.get(str);
        if (items1 == null) {
          items1 = [];
        }
        const items = [];
        items[HermesBuiltin.arraySpread(items1, 0)] = closure_1_1;
        const result = _Map1.set(str, items);
        obj = {};
        const merged = Object.assign(currentToastMap);
        obj.queuedToastsMap = _Map1;
        return obj;
      } else {
        const _Map2 = new _Map(currentToastMap.currentToastMap);
        const result1 = _Map2.set(str, closure_1_1);
        const obj2 = {};
        const merged1 = Object.assign(currentToastMap);
        obj2.currentToastMap = _Map2;
        return obj2;
      }
    });
  });
};
export const popToast = function popToast(arg0) {
  let str = arg0;
  if (arg0 === undefined) {
    str = "app";
  }
  str(1271).batchUpdates(() => {
    obj.setState((queuedToastsMap) => {
      queuedToastsMap = queuedToastsMap.queuedToastsMap;
      let items = queuedToastsMap.get(str);
      if (items == null) {
        items = [];
      }
      if (0 === items.length) {
        const _Map = Map;
        const map = new Map(queuedToastsMap.currentToastMap);
        map.delete(str);
        const obj2 = {};
        const merged = Object.assign(queuedToastsMap);
        obj2.currentToastMap = map;
        return obj2;
      } else {
        const _Map2 = Map;
        const map1 = new Map(queuedToastsMap.currentToastMap);
        const _Map3 = Map;
        const map2 = new Map(queuedToastsMap.queuedToastsMap);
        value2 = map2.get(str);
        if (value2 == null) {
          value2 = [];
        }
        const result = map1.set(str, value2[0]);
        const result1 = map2.set(str, value2.slice(1));
        const obj = {};
        const merged1 = Object.assign(queuedToastsMap);
        obj.currentToastMap = map1;
        obj.queuedToastsMap = map2;
        return obj;
      }
    });
  });
};
// === Module 4570: ? ===

// Module 4570
import module_4571 from "module_4571" /* 4571 */;
import size from "module_2" /* 2 */;

let closure_2, map, map1;

let c2 = 1;
const useToastStore = module_4571.create(() => {
  const obj = { currentToastMap: new Map(), queuedToastsMap: new Map() };
  new Map();
  new Map();
  return obj;
});
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Toast/toastUtils.shared.tsx");

export { useToastStore };
export const showToast = function showToast(toManaToastResult) {
  let str;
  if (toManaToastResult != null) {
    str = toManaToastResult.surface;
  }
  if (str == null) {
    str = "app";
  }
  let obj = { toast: toManaToastResult, key: +closure_2 };
  closure_2 = tmp + 1;
  let obj2 = str(obj[1]);
  obj2.batchUpdates(() => {
    obj.setState(function(currentToastMap) {
      currentToastMap = currentToastMap.currentToastMap;
      const _Map = Map;
      if (currentToastMap.has(str)) {
        const self4 = this;
        const self3 = this;
        const _Map1 = new _Map(currentToastMap.queuedToastsMap);
        let items1 = _Map1.get(str);
        if (items1 == null) {
          items1 = [];
        }
        const items = [];
        items[HermesBuiltin.arraySpread(items, items1, 0)] = closure_1_1;
        const result = _Map1.set(str, items);
        obj = { queuedToastsMap: _Map1 };
        const merged = Object.assign(currentToastMap);
        return obj;
      } else {
        const self = this;
        const self2 = this;
        const _Map2 = new _Map(currentToastMap.currentToastMap);
        const result1 = _Map2.set(str, closure_1_1);
        const obj2 = { currentToastMap: _Map2 };
        const merged1 = Object.assign(currentToastMap);
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
  let obj = str(1259);
  obj.batchUpdates(() => {
    let obj;
    obj.setState(function(queuedToastsMap) {
      queuedToastsMap = queuedToastsMap.queuedToastsMap;
      let items = queuedToastsMap.get(str);
      if (items == null) {
        items = [];
      }
      if (0 === items.length) {
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map(queuedToastsMap.currentToastMap);
        map.delete(str);
        const obj2 = { currentToastMap: map };
        const merged = Object.assign(queuedToastsMap);
        return obj2;
      } else {
        const _Map2 = Map;
        const self3 = this;
        const self4 = this;
        map1 = new Map(queuedToastsMap.currentToastMap);
        const _Map3 = Map;
        const self5 = this;
        const self6 = this;
        const map2 = new Map(queuedToastsMap.queuedToastsMap);
        let value2 = map2.get(str);
        if (value2 == null) {
          value2 = [];
        }
        const result = map1.set(str, value2[0]);
        const result1 = map2.set(str, value2.slice(1));
        const obj = { currentToastMap: map1, queuedToastsMap: map2 };
        const merged1 = Object.assign(queuedToastsMap);
        return obj;
      }
    });
  });
};
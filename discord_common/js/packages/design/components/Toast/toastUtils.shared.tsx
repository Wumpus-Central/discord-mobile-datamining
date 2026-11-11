// === Module 5954: ? ===

// Module 5954
import module_5254 from "module_5254" /* 5254 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c2 = 1;
const useToastStore = module_5254.create(() => {
  const obj = { currentToastMap: new Map(), queuedToastsMap: null };
  const map = new Map();
  obj.queuedToastsMap = new Map();
  return obj;
});
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Toast/toastUtils.shared.tsx");

export { useToastStore };
export function showToast(surface) {
  _require = surface;
  let str;
  if (surface != null) {
    str = surface.surface;
  }
  if (str == null) {
    str = "app";
  }
  let obj = { toast: surface, key: null };
  obj = tmp + 1;
  obj.key = +obj;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((currentToastMap) => {
      currentToastMap = currentToastMap.currentToastMap;
      value = currentToastMap.get(str);
      if (null != value) {
        const _Map = Map;
        const map = new Map(currentToastMap.queuedToastsMap);
        let value2 = map.get(str);
        if (value2 == null) {
          value2 = [];
        }
        items = [];
        HermesBuiltin.arraySpread(value2, 0);
        let num3 = -1;
        if (null != toastKey.toastKey) {
          num3 = items.findIndex((toast) => toast.toast.toastKey === toastKey.toastKey);
        }
        if (-1 === num3) {
          items.push(closure_1_2);
        } else {
          items[num3] = closure_1_2;
        }
        const result = map.set(str, items);
        obj = {};
        const merged = Object.assign(currentToastMap);
        obj.queuedToastsMap = map;
        return obj;
      }
      const map1 = new Map(currentToastMap.currentToastMap);
      const result1 = map1.set(str, closure_1_2);
      const obj2 = {};
      const merged1 = Object.assign(currentToastMap);
      obj2.currentToastMap = map1;
      return obj2;
    });
  });
}
export function popToast(arg0) {
  let str = arg0;
  if (arg0 === undefined) {
    str = "app";
  }
  str(1259).batchUpdates(() => {
    obj.setState((queuedToastsMap) => {
      queuedToastsMap = queuedToastsMap.queuedToastsMap;
      items = queuedToastsMap.get(str);
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
        let value2 = map2.get(str);
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
}
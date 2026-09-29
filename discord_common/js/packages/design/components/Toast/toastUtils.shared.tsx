// discord_common/js/packages/design/components/Toast/toastUtils.shared.tsx
import 04543__ from "../../../../../../_runtime/metro/04543__.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const useToastStore = module_4543.create(() => {
  const obj = { currentToastMap: new Map(), queuedToastsMap: null };
  const map = new Map();
  obj.queuedToastsMap = new Map();
  return obj;
});
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Toast/toastUtils.shared.tsx");

export { useToastStore };
export const showToast = function showToast(surface) {
  _require = surface;
  let str;
  if (surface != null) {
    str = surface.surface;
  }
  if (str == null) {
    str = "app";
  }
  require("ReactBatchUpdates").batchUpdates(() => {
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
        items[HermesBuiltin.arraySpread(items1, 0)] = surface;
        const result = _Map1.set(str, items);
        const obj = {};
        const merged = Object.assign(currentToastMap);
        obj.queuedToastsMap = _Map1;
        return obj;
      } else {
        const _Map2 = new _Map(currentToastMap.currentToastMap);
        const result1 = _Map2.set(str, surface);
        const obj2 = {};
        const merged1 = Object.assign(currentToastMap);
        obj2.currentToastMap = _Map2;
        return obj2;
      }
    });
  });
};
export const popToast = function popToast() {
  let str = arg0;
  if (arg0 === undefined) {
    str = "app";
  }
  str(1248).batchUpdates(() => {
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
        map1 = new Map(queuedToastsMap.currentToastMap);
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
// discord_app/modules/reanimated/native/useStateFromSharedValue.tsx
import ReanimatedRexport from "../ReanimatedRexport.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let c4 = 9999999;
const map = new Map();
let closure_6 = {
  code: "function useStateFromSharedValueTsx1(id,listener,sharedValue){const{runOnJS}=this.__closure;sharedValue.addListener(id,function(value){return runOnJS(listener)(value);});}",
};
let closure_7 = { code: "function useStateFromSharedValueTsx2(id,sharedValue){sharedValue.removeListener(id);}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/reanimated/native/useStateFromSharedValue.tsx");

export default function useStateFromSharedValue(arg0) {
  const tmp = _slicedToArray(
    noop.useState(() => closure_0.get()),
    2,
  );
  closure_0 = arg0;
  closure_1 = tmp2;
  const items = [arg0, tmp[1]];
  const layoutEffect = noop.useLayoutEffect(() => {
    let obj = map;
    value = map.get(set);
    if (value == null) {
      const _Set = Set;
      set = new Set();
      obj = {
        sharedValue: tmp,
        listeners: set,
        valueListener(arg0) {
          closure_0 = arg0;
          set(1249).batchUpdates(() => {
            for (const item10005 of set) {
              let item10005Result = item10005(closure_0);
              continue;
            }
          });
        },
        listenerId: null,
      };
      sum = sum + 1;
      obj.listenerId = sum;
      value = obj;
    }
    set = value;
    let listeners = value.listeners;
    listeners.add(callback);
    if (1 === value.listeners.size) {
      const result = obj.set(tmp, value);
      let fn = function n(arg0, arg1, addListener) {
        closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => set(4296).runOnJS(closure_0)(arg0));
      };
      obj = { runOnJS: activeIndex(callback[3]).runOnJS };
      fn.__closure = obj;
      fn.__workletHash = 568027628003;
      fn.__initData = __initData;
      activeIndex(callback[3]).runOnUI(fn)(value.listenerId, value.valueListener, tmp);
      const obj3 = activeIndex(callback[3]);
    }
    return () => {
      const listeners = set.listeners;
      listeners.delete(callback);
      if (0 === set.listeners.size) {
        const fn = function n(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 15997703035823;
        fn.__initData = __initData;
        ReanimatedRexport.runOnUI(fn)(set.listenerId, closure_0);
        map.delete(closure_0);
      }
    };
  }, items);
  return tmp[0];
}
export const useDerivedStateFromSharedValue = function useDerivedStateFromSharedValue(activeIndex, current) {
  [tmp2, _slicedToArray] = _slicedToArray(
    noop.useState(() => callback(activeIndex.get(), undefined)),
    2,
  );
  noop = noop.useRef(current);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_3.current = current;
  });
  current = noop.useCallback((arg0) => {
    closure_0 = arg0;
    return closure_2((current) => ref.current(closure_0, current));
  }, []);
  const items = [activeIndex, current];
  const layoutEffect1 = noop.useLayoutEffect(() => {
    let obj = map;
    value = map.get(set);
    if (value == null) {
      const _Set = Set;
      set = new Set();
      obj = {
        sharedValue: tmp,
        listeners: set,
        valueListener(arg0) {
          closure_0 = arg0;
          set(1249).batchUpdates(() => {
            for (const item10005 of set) {
              let item10005Result = item10005(closure_0);
              continue;
            }
          });
        },
        listenerId: null,
      };
      sum = sum + 1;
      obj.listenerId = sum;
      value = obj;
    }
    set = value;
    let listeners = value.listeners;
    listeners.add(callback);
    if (1 === value.listeners.size) {
      const result = obj.set(tmp, value);
      let fn = function n(arg0, arg1, addListener) {
        closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => set(4296).runOnJS(closure_0)(arg0));
      };
      obj = { runOnJS: activeIndex(callback[3]).runOnJS };
      fn.__closure = obj;
      fn.__workletHash = 568027628003;
      fn.__initData = __initData;
      activeIndex(callback[3]).runOnUI(fn)(value.listenerId, value.valueListener, tmp);
      const obj3 = activeIndex(callback[3]);
    }
    return () => {
      const listeners = set.listeners;
      listeners.delete(callback);
      if (0 === set.listeners.size) {
        const fn = function n(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 15997703035823;
        fn.__initData = __initData;
        ReanimatedRexport.runOnUI(fn)(set.listenerId, closure_0);
        map.delete(closure_0);
      }
    };
  }, items);
  return tmp2;
};

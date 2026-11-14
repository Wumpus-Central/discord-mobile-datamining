// === Module 11253: useStateFromSharedValue ===

// Module 11253 (useStateFromSharedValue)
import _mod1708 from "module_1708" /* 1708 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let c4 = 9999999;
const map = new Map();
let closure_6 = { code: "(function useStateFromSharedValueTsx1(id,listener,sharedValue){let[scheduleOnRN]=this.__closure;sharedValue.addListener(id,function(value){return scheduleOnRN(listener,value);});})" };
let closure_7 = { code: "(function useStateFromSharedValueTsx2(id,sharedValue){sharedValue.removeListener(id);})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/reanimated/native/useStateFromSharedValue.tsx");

export default function useStateFromSharedValue(arg0) {
  const tmp = _slicedToArray(noop.useState(() => closure_0.get()), 2);
  closure_0 = arg0;
  closure_1 = tmp2;
  items = [arg0, tmp[1]];
  const layoutEffect = noop.useLayoutEffect(() => {
    value = map.get(c0);
    if (value == null) {
      const _Set = Set;
      const set = new Set();
      c0 = set;
      const obj2 = {
        sharedValue: tmp,
        listeners: set,
        valueListener(arg0) {
            closure_0 = arg0;
            _undefined(current[2]).batchUpdates(() => {
              for (const item10005 of c0) {
                let item10005Result = item10005(closure_0);
                continue;
              }
            });
          },
        listenerId: null
      };
      sum = sum + 1;
      obj2.listenerId = sum;
      value = obj2;
    }
    c0 = value;
    let listeners = value.listeners;
    listeners.add(callback);
    if (1 === value.listeners.size) {
      const result = map.set(tmp, value);
      const obj3 = activeIndex(callback[3]);
      items = [closure_1_6, activeIndex(callback[3]).scheduleOnRN];
      c0 = undefined;
      [tmp11, tmp12] = items;
      function useStateFromSharedValueTsx1(arg0, arg1, addListener) {
        closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => c0(closure_0, arg0));
      }
      const items1 = [tmp12];
      useStateFromSharedValueTsx1.__closure = items1;
      useStateFromSharedValueTsx1.__workletHash = 17232455290583;
      useStateFromSharedValueTsx1.__initData = tmp11;
      obj3.scheduleOnUI(useStateFromSharedValueTsx1, value.listenerId, value.valueListener, tmp);
    }
    return () => {
      const listeners = _undefined.listeners;
      listeners.delete(callback);
      if (0 === _undefined.listeners.size) {
        items = [closure_7];
        [tmp3] = items;
        function useStateFromSharedValueTsx2(arg0, removeListener) {
          removeListener.removeListener(arg0);
        }
        useStateFromSharedValueTsx2.__workletHash = 7876346397934;
        useStateFromSharedValueTsx2.__initData = tmp3;
        _mod1708.scheduleOnUI(useStateFromSharedValueTsx2, _undefined.listenerId, closure_0);
        map.delete(closure_0);
      }
    };
  }, items);
  return tmp[0];
};
export function useDerivedStateFromSharedValue(activeIndex, current) {
  [tmp2, _slicedToArray] = noop.useState(() => callback(activeIndex.get(), undefined));
  noop = noop.useRef(current);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_3.current = current;
  });
  current = noop.useCallback((arg0) => {
    closure_0 = arg0;
    return closure_2((items1) => ref.current(closure_0, items1));
  }, []);
  items = [activeIndex, current];
  const layoutEffect1 = noop.useLayoutEffect(() => {
    value = map.get(c0);
    if (value == null) {
      const _Set = Set;
      const set = new Set();
      c0 = set;
      const obj2 = {
        sharedValue: tmp,
        listeners: set,
        valueListener(arg0) {
            closure_0 = arg0;
            _undefined(current[2]).batchUpdates(() => {
              for (const item10005 of c0) {
                let item10005Result = item10005(closure_0);
                continue;
              }
            });
          },
        listenerId: null
      };
      sum = sum + 1;
      obj2.listenerId = sum;
      value = obj2;
    }
    c0 = value;
    let listeners = value.listeners;
    listeners.add(callback);
    if (1 === value.listeners.size) {
      const result = map.set(tmp, value);
      const obj3 = activeIndex(callback[3]);
      items = [closure_1_6, activeIndex(callback[3]).scheduleOnRN];
      c0 = undefined;
      [tmp11, tmp12] = items;
      function useStateFromSharedValueTsx1(arg0, arg1, addListener) {
        closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => c0(closure_0, arg0));
      }
      const items1 = [tmp12];
      useStateFromSharedValueTsx1.__closure = items1;
      useStateFromSharedValueTsx1.__workletHash = 17232455290583;
      useStateFromSharedValueTsx1.__initData = tmp11;
      obj3.scheduleOnUI(useStateFromSharedValueTsx1, value.listenerId, value.valueListener, tmp);
    }
    return () => {
      const listeners = _undefined.listeners;
      listeners.delete(callback);
      if (0 === _undefined.listeners.size) {
        items = [closure_7];
        [tmp3] = items;
        function useStateFromSharedValueTsx2(arg0, removeListener) {
          removeListener.removeListener(arg0);
        }
        useStateFromSharedValueTsx2.__workletHash = 7876346397934;
        useStateFromSharedValueTsx2.__initData = tmp3;
        _mod1708.scheduleOnUI(useStateFromSharedValueTsx2, _undefined.listenerId, closure_0);
        map.delete(closure_0);
      }
    };
  }, items);
  return tmp2;
}
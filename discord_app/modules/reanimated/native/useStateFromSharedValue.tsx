// === Module 8265: map ===

// Module 8265 (map)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
let c4 = 9999999;
const map = new Map();
let closure_6 = { code: "function useStateFromSharedValueTsx1(id,listener,sharedValue){const{runOnJS}=this.__closure;sharedValue.addListener(id,function(value){return runOnJS(listener)(value);});}" };
let closure_7 = { code: "function useStateFromSharedValueTsx2(id,sharedValue){sharedValue.removeListener(id);}" };
let result = require("set").fileFinishedImporting("modules/reanimated/native/useStateFromSharedValue.tsx");

export default function useStateFromSharedValue(arg0) {
  closure_0 = arg0;
  const tmp = callback(React.useState(() => closure_0.get()), 2);
  closure_0 = arg0;
  closure_1 = tmp2;
  const items = [arg0, tmp[1]];
  const layoutEffect = React.useLayoutEffect(() => {
    let obj = closure_1_5;
    let value = closure_1_5.get(set);
    if (value == null) {
      const _Set = Set;
      set = new Set();
      obj = { sharedValue: null, listeners: null, valueListener: null, listenerId: null };
      obj[0] = tmp;
      obj[1] = set;
      obj[2] = function valueListener(arg0) {
        closure_0 = arg0;
        set(closure_1_1[2]).batchUpdates(() => {
          for (const item10005 of closure_0) {
            let tmp = closure_0;
            let item10005Result = item10005(closure_0);
            continue;
          }
        });
      };
      sum = sum + 1;
      obj[3] = sum;
      value = obj;
    }
    set = value;
    let listeners = value.listeners;
    listeners.add(callback);
    if (1 === value.listeners.size) {
      const result = obj.set(tmp, value);
      let fn = function n(arg0, arg1, addListener) {
        closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => callback(closure_1_1[3]).runOnJS(callback)(arg0));
      };
      obj = { runOnJS: null };
      obj[0] = activeIndex(callback[3]).runOnJS;
      fn.__closure = obj;
      fn.__workletHash = 568027628003;
      fn.__initData = closure_1_6;
      activeIndex(callback[3]).runOnUI(fn)(value.listenerId, value.valueListener, tmp);
      const obj3 = activeIndex(callback[3]);
    }
    return () => {
      const listeners = set.listeners;
      listeners.delete(closure_1_1);
      if (0 === set.listeners.size) {
        const fn = function n(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 15997703035823;
        fn.__initData = closure_2_7;
        set(callback[3]).runOnUI(fn)(set.listenerId, set);
        closure_2_5.delete(set);
        const obj = set(callback[3]);
      }
    };
  }, items);
  return tmp[0];
};
export const useDerivedStateFromSharedValue = function useDerivedStateFromSharedValue(activeIndex, first) {
  closure_0 = activeIndex;
  let callback = first;
  [tmp2, closure_2] = callback(React.useState(() => callback(activeIndex.get(), undefined)), 2);
  React = React.useRef(first);
  const layoutEffect = React.useLayoutEffect(() => {
    closure_3.current = callback;
  });
  callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    return callback((current) => closure_1_3.current(closure_0, current));
  }, []);
  closure_0 = activeIndex;
  const items = [activeIndex, callback];
  const layoutEffect1 = React.useLayoutEffect(() => {
    let obj = closure_1_5;
    let value = closure_1_5.get(set);
    if (value == null) {
      const _Set = Set;
      set = new Set();
      obj = { sharedValue: null, listeners: null, valueListener: null, listenerId: null };
      obj[0] = tmp;
      obj[1] = set;
      obj[2] = function valueListener(arg0) {
        closure_0 = arg0;
        set(closure_1_1[2]).batchUpdates(() => {
          for (const item10005 of closure_0) {
            let tmp = closure_0;
            let item10005Result = item10005(closure_0);
            continue;
          }
        });
      };
      sum = sum + 1;
      obj[3] = sum;
      value = obj;
    }
    set = value;
    let listeners = value.listeners;
    listeners.add(callback);
    if (1 === value.listeners.size) {
      const result = obj.set(tmp, value);
      let fn = function n(arg0, arg1, addListener) {
        closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => callback(closure_1_1[3]).runOnJS(callback)(arg0));
      };
      obj = { runOnJS: null };
      obj[0] = activeIndex(callback[3]).runOnJS;
      fn.__closure = obj;
      fn.__workletHash = 568027628003;
      fn.__initData = closure_1_6;
      activeIndex(callback[3]).runOnUI(fn)(value.listenerId, value.valueListener, tmp);
      const obj3 = activeIndex(callback[3]);
    }
    return () => {
      const listeners = set.listeners;
      listeners.delete(closure_1_1);
      if (0 === set.listeners.size) {
        const fn = function n(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 15997703035823;
        fn.__initData = closure_2_7;
        set(callback[3]).runOnUI(fn)(set.listenerId, set);
        closure_2_5.delete(set);
        const obj = set(callback[3]);
      }
    };
  }, items);
  return tmp2;
};
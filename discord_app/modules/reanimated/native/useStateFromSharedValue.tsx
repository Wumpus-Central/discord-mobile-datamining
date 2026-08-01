// === Module 8122: map ===

// Module 8122 (map)
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
let c4 = 9999999;
const map = new Map();
let closure_6 = { code: "function useStateFromSharedValueTsx1(id,listener,sharedValue){const{runOnJS}=this.__closure;sharedValue.addListener(id,function(value){return runOnJS(listener)(value);});}" };
let closure_7 = { code: "function useStateFromSharedValueTsx2(id,sharedValue){sharedValue.removeListener(id);}" };
let result = require("batchUpdates").fileFinishedImporting("modules/reanimated/native/useStateFromSharedValue.tsx");

export default function useStateFromSharedValue(arg0) {
  let closure_0 = arg0;
  const tmp = callback(React.useState(() => closure_0.get()), 2);
  closure_0 = arg0;
  const dependencyMap = tmp2;
  const items = [arg0, tmp[1]];
  const layoutEffect = React.useLayoutEffect(() => {
    let obj = outer1_5;
    let value = outer1_5.get(set);
    if (value == null) {
      const _Set = Set;
      set = new Set();
      obj = { sharedValue: null, listeners: null, valueListener: null, listenerId: null };
      obj[0] = tmp;
      obj[1] = set;
      obj[2] = function valueListener(arg0) {
        let closure_0 = arg0;
        set(outer1_1[2]).batchUpdates(() => {
          for (const item10005 of closure_0) {
            let tmp = closure_0;
            let item10005Result = item10005(closure_0);
            continue;
          }
        });
      };
      const sum = outer1_4 + 1;
      outer1_4 = sum;
      obj[3] = sum;
      value = obj;
    }
    set = value;
    let listeners = value.listeners;
    listeners.add(callback);
    if (1 === value.listeners.size) {
      const result = obj.set(tmp, value);
      let fn = function n(arg0, arg1, addListener) {
        let closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => callback(outer1_1[3]).runOnJS(callback)(arg0));
      };
      obj = { runOnJS: null };
      obj[0] = activeIndex(callback[3]).runOnJS;
      fn.__closure = obj;
      fn.__workletHash = 568027628003;
      fn.__initData = outer1_6;
      activeIndex(callback[3]).runOnUI(fn)(value.listenerId, value.valueListener, tmp);
      const obj3 = activeIndex(callback[3]);
    }
    return () => {
      const listeners = set.listeners;
      listeners.delete(outer1_1);
      if (0 === set.listeners.size) {
        const fn = function n(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 15997703035823;
        fn.__initData = outer2_7;
        set(callback[3]).runOnUI(fn)(set.listenerId, set);
        outer2_5.delete(set);
        const obj = set(callback[3]);
      }
    };
  }, items);
  return tmp[0];
};
export const useDerivedStateFromSharedValue = function useDerivedStateFromSharedValue(activeIndex, stateFromStores) {
  let _slicedToArray;
  let tmp2;
  let closure_0 = activeIndex;
  let callback = stateFromStores;
  [tmp2, _slicedToArray] = callback(React.useState(() => callback(activeIndex.get(), undefined)), 2);
  React = React.useRef(stateFromStores);
  const layoutEffect = React.useLayoutEffect(() => {
    noop.current = callback;
  });
  callback = React.useCallback((arg0) => {
    let closure_0 = arg0;
    return callback((current) => outer1_3.current(closure_0, current));
  }, []);
  closure_0 = activeIndex;
  const items = [activeIndex, callback];
  const layoutEffect1 = React.useLayoutEffect(() => {
    let obj = outer1_5;
    let value = outer1_5.get(set);
    if (value == null) {
      const _Set = Set;
      set = new Set();
      obj = { sharedValue: null, listeners: null, valueListener: null, listenerId: null };
      obj[0] = tmp;
      obj[1] = set;
      obj[2] = function valueListener(arg0) {
        let closure_0 = arg0;
        set(outer1_1[2]).batchUpdates(() => {
          for (const item10005 of closure_0) {
            let tmp = closure_0;
            let item10005Result = item10005(closure_0);
            continue;
          }
        });
      };
      const sum = outer1_4 + 1;
      outer1_4 = sum;
      obj[3] = sum;
      value = obj;
    }
    set = value;
    let listeners = value.listeners;
    listeners.add(callback);
    if (1 === value.listeners.size) {
      const result = obj.set(tmp, value);
      let fn = function n(arg0, arg1, addListener) {
        let closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => callback(outer1_1[3]).runOnJS(callback)(arg0));
      };
      obj = { runOnJS: null };
      obj[0] = activeIndex(callback[3]).runOnJS;
      fn.__closure = obj;
      fn.__workletHash = 568027628003;
      fn.__initData = outer1_6;
      activeIndex(callback[3]).runOnUI(fn)(value.listenerId, value.valueListener, tmp);
      const obj3 = activeIndex(callback[3]);
    }
    return () => {
      const listeners = set.listeners;
      listeners.delete(outer1_1);
      if (0 === set.listeners.size) {
        const fn = function n(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 15997703035823;
        fn.__initData = outer2_7;
        set(callback[3]).runOnUI(fn)(set.listenerId, set);
        outer2_5.delete(set);
        const obj = set(callback[3]);
      }
    };
  }, items);
  return tmp2;
};
// === Module 7952: useStateFromSharedValue ===

// Module 7952 (useStateFromSharedValue)
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set, sum;

let c4 = 9999999;
const map = new Map();
let closure_6 = { code: "function useStateFromSharedValueTsx1(id,listener,sharedValue_0){const{runOnJS}=this.__closure;sharedValue_0.addListener(id,function(value){return runOnJS(listener)(value);});}" };
let closure_7 = { code: "function useStateFromSharedValueTsx2(id_0,sharedValue_1){sharedValue_1.removeListener(id_0);}" };
let closure_8 = { code: "function useStateFromSharedValueTsx3(id,listener,sharedValue_0){const{runOnJS}=this.__closure;sharedValue_0.addListener(id,function(value){return runOnJS(listener)(value);});}" };
let closure_9 = { code: "function useStateFromSharedValueTsx4(id_0,sharedValue_1){sharedValue_1.removeListener(id_0);}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === arg1) {
    let tmp2;
    let tmp3;
    if (cResult[1] === arg0) {
      tmp2 = cResult[2];
      tmp3 = cResult[3];
    }
    const layoutEffect = react.useLayoutEffect(tmp2, tmp3);
  }
  let fn = function c() {
    let value;
    value = map.get(value);
    if (value == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      const obj2 = {
        sharedValue: value,
        listeners: new Set(),
        valueListener(arg0) {
            closure_0 = arg0;
            const obj = set(closure_1_1[2]);
            obj.batchUpdates(() => {
              for (const item10005 of set) {
                let item10005Result = item10005(closure_0);
                continue;
              }
            });
          },
        listenerId: sum
      };
      sum = sum + 1;
      value = obj2;
    }
    let listeners = value.listeners;
    listeners.add(closure_1);
    if (1 === value.listeners.size) {
      const result = map.set(tmp, value);
      let fn = function n(arg0, arg1, addListener) {
        closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => {
          const obj = closure_0(closure_2_1[5]);
          return obj.runOnJS(closure_0)(arg0);
        });
      };
      const obj3 = { runOnJS: value(closure_1[5]).runOnJS };
      const runOnUI = value(closure_1[5]).runOnUI;
      value(closure_1[5]);
      fn.__closure = obj3;
      fn.__workletHash = 580393174787;
      fn.__initData = __initData;
      runOnUI(fn)(value.listenerId, value.valueListener, value);
    }
    return () => {
      const listeners = value.listeners;
      listeners.delete(closure_1);
      if (0 === value.listeners.size) {
        const fn = function n(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 6985202571919;
        fn.__initData = __initData;
        const obj = ReanimatedRexport;
        obj.runOnUI(fn)(value.listenerId, value);
        map.delete(value);
      }
    };
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp3 = items;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  const layoutEffect = react.useLayoutEffect(function() {
    let value;
    value = map.get(value);
    if (value == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      const obj2 = {
        sharedValue: value,
        listeners: set,
        valueListener(arg0) {
            closure_0 = arg0;
            const obj = set(closure_1_1[2]);
            obj.batchUpdates(() => {
              for (const item10005 of set) {
                let item10005Result = item10005(closure_0);
                continue;
              }
            });
          },
        listenerId: sum
      };
      sum = sum + 1;
      value = obj2;
    }
    let listeners = value.listeners;
    listeners.add(closure_1);
    if (1 === value.listeners.size) {
      const result = map.set(tmp, value);
      let fn = function n(arg0, arg1, addListener) {
        closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => {
          const obj = closure_0(closure_2_1[5]);
          return obj.runOnJS(closure_0)(arg0);
        });
      };
      const obj3 = { runOnJS: value(closure_1[5]).runOnJS };
      const runOnUI = value(closure_1[5]).runOnUI;
      value(closure_1[5]);
      fn.__closure = obj3;
      fn.__workletHash = 4734743082561;
      fn.__initData = __initData;
      runOnUI(fn)(value.listenerId, value.valueListener, value);
    }
    return () => {
      const listeners = value.listeners;
      listeners.delete(closure_1);
      if (0 === value.listeners.size) {
        const fn = function n(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 12630924966217;
        fn.__initData = __initData;
        const obj = ReanimatedRexport;
        obj.runOnUI(fn)(value.listenerId, value);
        map.delete(value);
      }
    };
  }, items);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp2;
  let closure_0 = arg0;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function u() {
      return closure_0.get();
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = _slicedToArray(react.useState(tmp2), 2);
  const first = tmp3[0];
  closure_10(arg0, tmp3[1]);
  return first;
}) : ((arg0) => {
  let closure_0 = arg0;
  const tmp = _slicedToArray(react.useState(() => closure_0.get()), 2);
  const first = tmp[0];
  closure_10(arg0, tmp[1]);
  return first;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_129_2;
  let tmp5;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === arg1) {
    let tmp2;
    let tmp6;
    let tmp9;
    if (cResult[1] === arg0) {
      tmp2 = cResult[2];
    }
    [tmp5, closure_129_2] = react.useState(tmp2);
    _slicedToArray(react.useState(tmp2), 2);
    let closure_3 = react.useRef(arg1);
    if (cResult[3] !== arg1) {
      const fn2 = function c() {
        closure_3.current = current;
      };
      cResult[3] = arg1;
      cResult[4] = fn2;
      tmp6 = fn2;
    } else {
      tmp6 = cResult[4];
    }
    const layoutEffect = react.useLayoutEffect(tmp6);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function _(arg0) {
        let ref;
        closure_0 = arg0;
        return closure_2((current) => ref.current(closure_0, current));
      };
      cResult[5] = fn3;
      tmp9 = fn3;
    } else {
      tmp9 = cResult[5];
    }
    closure_10(arg0, tmp9);
    return tmp5;
  }
  const fn = function l() {
    return current(closure_0.get(), undefined);
  };
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  let closure_129_2;
  let tmp2;
  const f96134 = () => current(closure_0.get(), undefined);
  let closure_0 = arg0;
  let closure_1 = arg1;
  [tmp2, closure_129_2] = react.useState(f96134);
  _slicedToArray(react.useState(f96134), 2);
  let closure_3 = react.useRef(arg1);
  const layoutEffect = react.useLayoutEffect(() => {
    closure_3.current = current;
  });
  closure_10(arg0, react.useCallback((arg0) => {
    let ref;
    closure_0 = arg0;
    return closure_2((current) => ref.current(closure_0, current));
  }, []));
  return tmp2;
});
let result = size.fileFinishedImporting("modules/reanimated/native/useStateFromSharedValue.tsx");

export default tmp3;
export const useDerivedStateFromSharedValue = tmp4;
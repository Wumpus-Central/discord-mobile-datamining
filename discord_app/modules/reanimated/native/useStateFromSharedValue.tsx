// === Module 7941: useStateFromSharedValue ===

// Module 7941 (useStateFromSharedValue)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let c4 = 9999999;
const map = new Map();
let closure_6 = { code: "function useStateFromSharedValueTsx1(id,listener,sharedValue_0){const{runOnJS}=this.__closure;sharedValue_0.addListener(id,function(value){return runOnJS(listener)(value);});}" };
let closure_7 = { code: "function useStateFromSharedValueTsx2(id_0,sharedValue_1){sharedValue_1.removeListener(id_0);}" };
let closure_8 = { code: "function useStateFromSharedValueTsx3(id,listener,sharedValue_0){const{runOnJS}=this.__closure;sharedValue_0.addListener(id,function(value){return runOnJS(listener)(value);});}" };
let closure_9 = { code: "function useStateFromSharedValueTsx4(id_0,sharedValue_1){sharedValue_1.removeListener(id_0);}" };
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(4);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
      let tmp3 = cResult[3];
    }
    const layoutEffect = noop.useLayoutEffect(tmp2, tmp3);
  }
  let fn = function c() {
    value = map.get(set);
    if (value == null) {
      const _Set = Set;
      set = new Set();
      const obj2 = {
        sharedValue: tmp,
        listeners: set,
        valueListener(arg0) {
            closure_0 = arg0;
            set(1259).batchUpdates(() => {
              for (const item10005 of set) {
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
    set = value;
    let listeners = value.listeners;
    listeners.add(dependencyMap);
    if (1 === value.listeners.size) {
      const result = map.set(tmp, value);
      let fn = function n(arg0, arg1, addListener) {
        closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => set(dependencyMap[5]).runOnJS(closure_0)(arg0));
      };
      const obj4 = { runOnJS: closure_0(4612).runOnJS };
      fn.__closure = obj4;
      fn.__workletHash = 580393174787;
      fn.__initData = __initData;
      closure_0(4612).runOnUI(fn)(value.listenerId, value.valueListener, tmp);
      const obj3 = closure_0(4612);
    }
    return () => {
      const listeners = set.listeners;
      listeners.delete(closure_1);
      if (0 === set.listeners.size) {
        const fn = function n(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 6985202571919;
        fn.__initData = __initData;
        ReanimatedRexport.runOnUI(fn)(set.listenerId, closure_0);
        map.delete(closure_0);
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
  let obj = require("c");
}) : ((arg0, arg1) => {
  closure_0 = arg0;
  dependencyMap = arg1;
  const items = [arg0, arg1];
  const layoutEffect = noop.useLayoutEffect(() => {
    value = map.get(set);
    if (value == null) {
      const _Set = Set;
      set = new Set();
      const obj2 = {
        sharedValue: tmp,
        listeners: set,
        valueListener(arg0) {
            closure_0 = arg0;
            set(1259).batchUpdates(() => {
              for (const item10005 of set) {
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
    set = value;
    let listeners = value.listeners;
    listeners.add(dependencyMap);
    if (1 === value.listeners.size) {
      const result = map.set(tmp, value);
      let fn = function n(arg0, arg1, addListener) {
        closure_0 = arg1;
        addListener.addListener(arg0, (arg0) => set(4612).runOnJS(closure_0)(arg0));
      };
      const obj4 = { runOnJS: closure_0(4612).runOnJS };
      fn.__closure = obj4;
      fn.__workletHash = 4734743082561;
      fn.__initData = __initData;
      closure_0(4612).runOnUI(fn)(value.listenerId, value.valueListener, tmp);
      const obj3 = closure_0(4612);
    }
    return () => {
      const listeners = set.listeners;
      listeners.delete(closure_1);
      if (0 === set.listeners.size) {
        const fn = function n(arg0, removeListener) {
          removeListener.removeListener(arg0);
        };
        fn.__closure = {};
        fn.__workletHash = 12630924966217;
        fn.__initData = __initData;
        ReanimatedRexport.runOnUI(fn)(set.listenerId, closure_0);
        map.delete(closure_0);
      }
    };
  }, items);
});
fn(558);
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  closure_0 = arg0;
  const cResult = c.c(2);
  if (cResult[0] !== arg0) {
    const fn = function u() {
      return closure_0.get();
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const tmp3 = _slicedToArray(noop.useState(tmp2), 2);
  closure_10(arg0, tmp3[1]);
  return tmp3[0];
}) : ((arg0) => {
  closure_0 = arg0;
  const tmp = _slicedToArray(noop.useState(() => closure_0.get()), 2);
  closure_10(arg0, tmp[1]);
  return tmp[0];
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/reanimated/native/useStateFromSharedValue.tsx");

export default tmp3;
export const useDerivedStateFromSharedValue = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, current) => {
  closure_0 = arg0;
  const cResult = c.c(6);
  if (cResult[0] === current) {
    if (cResult[1] === arg0) {
      let tmp2 = cResult[2];
    }
    [tmp5, _slicedToArray] = noop.useState(tmp2);
    closure_3 = noop.useRef(current);
    if (cResult[3] !== current) {
      const fn2 = function c() {
        closure_3.current = current;
      };
      cResult[3] = current;
      cResult[4] = fn2;
      let tmp6 = fn2;
    } else {
      tmp6 = cResult[4];
    }
    const layoutEffect = noop.useLayoutEffect(tmp6);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn3 = function _(arg0) {
        closure_0 = arg0;
        return closure_2((current) => ref.current(closure_0, current));
      };
      cResult[5] = fn3;
      let tmp9 = fn3;
    } else {
      tmp9 = cResult[5];
    }
    closure_10(arg0, tmp9);
    return tmp5;
  }
  const fn = function l() {
    return current(closure_0.get(), undefined);
  };
  cResult[0] = current;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((arg0, current) => {
  closure_0 = arg0;
  [tmp2, _slicedToArray] = noop.useState(() => current(closure_0.get(), undefined));
  closure_3 = noop.useRef(current);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_3.current = current;
  });
  closure_10(arg0, noop.useCallback((arg0) => {
    closure_0 = arg0;
    return closure_2((current) => ref.current(closure_0, current));
  }, []));
  return tmp2;
});
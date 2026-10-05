// === Module 1796: ? ===

// Module 1796
import react from "react" /* 19 */;
import startMapper from "startMapper" /* 1687 */;

const require = globalThis.__r;
let _require, dependencyMap;

let useEffect = react.useEffect;
let closure_3 = { code: "function pnpm_useAnimatedReactionTs1(){const{prepare,react,previous}=this.__closure;const input=prepare();react(input,previous.value);previous.value=input;}" };

export const useAnimatedReaction = function useAnimatedReaction(fn, fn2, items) {
  let previous;
  let react;
  _require = fn;
  dependencyMap = fn2;
  let obj = require("module_1795");
  useEffect = obj.useSharedValue(null);
  let __closure = fn.__closure;
  const _Object = Object;
  const tmp2 = _require;
  if (__closure == null) {
    __closure = {};
  }
  let values2 = values(__closure);
  const tmp2Result = tmp2(1646);
  let tmp4 = tmp2Result.shouldBeUseWeb() && !values2.length;
  let arr2 = items;
  if (tmp4) {
    let length;
    if (arr2 != null) {
      length = arr2.length;
    }
    tmp4 = length;
  }
  if (tmp4) {
    values2 = arr2;
  }
  if (undefined === arr2) {
    let __closure1 = fn.__closure;
    const _Object2 = Object;
    const values3 = Object.values;
    if (__closure1 == null) {
      __closure1 = {};
    }
    items = [, ];
    let __closure2 = fn2.__closure;
    const _Object3 = Object;
    const values6 = Object.values;
    const arraySpreadResult = HermesBuiltin.arraySpread(items, values3(__closure1), 0);
    if (__closure2 == null) {
      __closure2 = {};
    }
    const arraySpreadResult2 = HermesBuiltin.arraySpread(items, values6(__closure2), arraySpreadResult);
    items[arraySpreadResult2] = fn.__workletHash;
    items[arraySpreadResult2 + 1] = fn2.__workletHash;
    arr2 = items;
  } else {
    arr2.push(fn.__workletHash, fn2.__workletHash);
  }
  useEffect(() => {
    let closure_0;
    let value;
    const fn = function t() {
      const tmp = closure_0();
      react(tmp, value.value);
      value.value = tmp;
    };
    let obj = { prepare, react, previous };
    fn.__closure = obj;
    fn.__workletHash = 3026350450260;
    fn.__initData = values2;
    const obj2 = prepare(react[3]);
    prepare = obj2.startMapper(fn, values2);
    return () => {
      const obj = startMapper;
      obj.stopMapper(closure_0);
    };
  }, arr2);
};
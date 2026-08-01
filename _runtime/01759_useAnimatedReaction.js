// === Module 1759: useAnimatedReaction ===

// Module 1759 (useAnimatedReaction)
import { useEffect } from "noop";

let closure_3 = { code: "function pnpm_useAnimatedReactionTs1(){const{prepare,react,previous}=this.__closure;const input=prepare();react(input,previous.value);previous.value=input;}" };

export const useAnimatedReaction = function useAnimatedReaction(fn, fn2, items1) {
  const _require = fn;
  const dependencyMap = fn2;
  const useEffect = _require(1758).useSharedValue(null);
  let __closure = fn.__closure;
  if (__closure == null) {
    __closure = {};
  }
  const values = Object.values(__closure);
  let arr2 = values;
  const obj = _require(1758);
  let tmp = _require;
  let tmp3 = _require(1609).shouldBeUseWeb() && !values.length;
  arr2 = items1;
  if (tmp3) {
    let length;
    if (arr2 != null) {
      length = arr2.length;
    }
    tmp3 = length;
  }
  if (undefined === arr2) {
    let __closure1 = fn.__closure;
    if (__closure1 == null) {
      __closure1 = {};
    }
    const items = [, ];
    let arraySpreadResult = HermesBuiltin.arraySpread(Object.values(__closure1), 0);
    let __closure2 = fn2.__closure;
    if (__closure2 == null) {
      __closure2 = {};
    }
    arraySpreadResult = HermesBuiltin.arraySpread(Object.values(__closure2), arraySpreadResult);
    items[arraySpreadResult] = fn.__workletHash;
    items[arraySpreadResult + 1] = fn2.__workletHash;
    arr2 = items;
  } else {
    arr2.push(fn.__workletHash, fn2.__workletHash);
  }
  useEffect(() => {
    const fn = function t() {
      const tmp = callback();
      dependencyMap(tmp, value.value);
      value.value = tmp;
    };
    fn.__closure = { prepare: callback, react: table, previous: closure_2 };
    fn.__workletHash = 3026350450260;
    fn.__initData = arr2;
    callback = callback(table[3]).startMapper(fn, arr2);
    return () => {
      callback(1650).stopMapper(callback);
    };
  }, arr2);
};
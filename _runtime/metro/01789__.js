// _runtime/metro/01789__.js
import _mod19 from "00019__.js";
import runOnRuntime from "../01680_runOnRuntime.js";

let useEffect = _mod19.useEffect;
let closure_3 = {
  code: "function pnpm_useAnimatedReactionTs1(){const{prepare,react,previous}=this.__closure;const input=prepare();react(input,previous.value);previous.value=input;}",
};

export const useAnimatedReaction = function useAnimatedReaction(fn, fn2, items) {
  _require = fn;
  dependencyMap = fn2;
  useEffect = require("01788__.js").useSharedValue(null);
  let __closure = fn.__closure;
  if (__closure == null) {
    __closure = {};
  }
  const values = Object.values(__closure);
  const obj = require("01788__.js");
  let tmp3 = require("01639__.js").shouldBeUseWeb() && !values.length;
  let arr2 = items;
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
    items = [,];
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
      const tmp = closure_0();
      react(tmp, value.value);
      value.value = tmp;
    };
    fn.__closure = { prepare, react, previous };
    fn.__workletHash = 3026350450260;
    fn.__initData = arr2;
    prepare = prepare(react[3]).startMapper(fn, arr2);
    return () => {
      runOnRuntime.stopMapper(closure_0);
    };
  }, arr2);
};

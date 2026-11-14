// === Module 1896: useAnimatedReactionCommon ===

// Module 1896 (useAnimatedReactionCommon)
import _mod19 from "module_19" /* 19 */;
import _mod1830 from "module_1830" /* 1830 */;

const require = globalThis.__r;

let useEffect = _mod19.useEffect;
let closure_3 = { code: "(function pnpm_useAnimatedReactionCommonTs1(){let[prepare,react,previous]=this.__closure;const input=prepare();react(input,previous.value);previous.value=input;})" };

export function useAnimatedReactionBase(__closure, __closure2, arg2, __closure) {
  _require = __closure;
  dependencyMap = __closure2;
  useEffect = __closure;
  closure_3 = require("module_1894").useSharedValue(null);
  if (undefined === arg2) {
    __closure = __closure.__closure;
    if (__closure == null) {
      __closure = [];
    }
    items = [, ];
    const arraySpreadResult = HermesBuiltin.arraySpread(__closure, 0);
    let __closure1 = __closure2.__closure;
    if (__closure1 == null) {
      __closure1 = [];
    }
    const arraySpreadResult3 = HermesBuiltin.arraySpread(__closure1, arraySpreadResult);
    items[arraySpreadResult3] = __closure.__workletHash;
    items[arraySpreadResult3 + 1] = __closure2.__workletHash;
    let items1 = items;
  } else {
    items1 = [, ];
    const arraySpreadResult4 = HermesBuiltin.arraySpread(arg2, 0);
    items1[arraySpreadResult4] = __closure.__workletHash;
    items1[arraySpreadResult4 + 1] = __closure2.__workletHash;
  }
  useEffect(() => {
    items = [closure_3, closure_0, dependencyMap, closure_3];
    [tmp, tmp2, tmp3, tmp4] = items;
    function pnpm_useAnimatedReactionCommonTs1() {
      const tmp = closure_0();
      dependencyMap(tmp, value.value);
      value.value = tmp;
    }
    const items1 = [tmp2, tmp3, tmp4];
    pnpm_useAnimatedReactionCommonTs1.__closure = items1;
    pnpm_useAnimatedReactionCommonTs1.__workletHash = 15168030966528;
    pnpm_useAnimatedReactionCommonTs1.__initData = tmp;
    closure_0 = _mod1830.startMapper(pnpm_useAnimatedReactionCommonTs1, value);
    return () => {
      closure_0(1830).stopMapper(closure_0);
    };
  }, items1);
}
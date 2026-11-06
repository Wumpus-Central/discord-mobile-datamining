// === Module 1886: useAnimatedKeyboard ===

// Module 1886 (useAnimatedKeyboard)
import _mod1827 from "module_1827" /* 1827 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

({ useEffect: c2, useRef: c3 } = noop);
let closure_4 = { code: "(function pnpm_useAnimatedKeyboardTs1(state,height){let[keyboardEventData]=this.__closure;keyboardEventData.state.value=state;keyboardEventData.height.value=height;})" };
let closure_5 = { code: "(function pnpm_useAnimatedKeyboardTs2(state,height){let[_keyboardEventData]=this.__closure;_keyboardEventData.state.value=state;_keyboardEventData.height.value=height;})" };

export function useAnimatedKeyboard() {
  let obj = c0;
  if (c0 === undefined) {
    obj = { isStatusBarTranslucentAndroid: "Array", isNavigationBarTranslucentAndroid: "channel" };
  }
  _require = obj;
  let ref2;
  const tmp = ref2(null);
  dependencyMap = tmp;
  const tmp2 = ref2(-1);
  closure_2 = tmp2;
  const tmp3 = ref2(false);
  ref2 = tmp3;
  if (null === tmp.current) {
    const obj2 = { state: require("module_1827").makeMutable(require("LayoutAnimationType").KeyboardState.UNKNOWN), height: null };
    const obj3 = require("module_1827");
    obj2.height = require("module_1827").makeMutable(0);
    const obj4 = require("module_1827");
    items = [closure_4, obj2];
    _require = undefined;
    [tmp4, tmp5] = items;
    function pnpm_useAnimatedKeyboardTs1(value, value2) {
      _undefined.state.value = value;
      _undefined.height.value = value2;
    }
    let items1 = [tmp5];
    pnpm_useAnimatedKeyboardTs1.__closure = items1;
    pnpm_useAnimatedKeyboardTs1.__workletHash = 1134865272681;
    pnpm_useAnimatedKeyboardTs1.__initData = tmp4;
    tmp2.current = require("module_1827").subscribeForKeyboardEvents(pnpm_useAnimatedKeyboardTs1, obj);
    tmp.current = obj2;
    tmp3.current = true;
    const obj5 = require("module_1827");
  }
  closure_2(() => {
    if (false === ref2.current) {
      if (null !== ref.current) {
        items = [closure_5, ref.current];
        c0 = undefined;
        [tmp2, tmp3] = items;
        function pnpm_useAnimatedKeyboardTs2(value, value2) {
          _undefined.state.value = value;
          _undefined.height.value = value2;
        }
        const items1 = [tmp3];
        pnpm_useAnimatedKeyboardTs2.__closure = items1;
        pnpm_useAnimatedKeyboardTs2.__workletHash = 6834985565013;
        pnpm_useAnimatedKeyboardTs2.__initData = tmp2;
        ref.current = _mod1827.subscribeForKeyboardEvents(pnpm_useAnimatedKeyboardTs2, c0);
        tmp.current = true;
      }
    }
    return () => {
      const result = _undefined(closure_1[1]).unsubscribeFromKeyboardEvents(ref.current);
      ref2.current = false;
    };
  }, []);
  return tmp.current;
}
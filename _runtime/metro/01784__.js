// === Module 1784: ? ===

// Module 1784
import noop from "module_19" /* 19 */;

({ useEffect: c2, useRef: c3 } = noop);
let closure_4 = { code: "function pnpm_useAnimatedKeyboardTs1(state,height){const{keyboardEventData}=this.__closure;keyboardEventData.state.value=state;keyboardEventData.height.value=height;}" };
let closure_5 = { code: "function pnpm_useAnimatedKeyboardTs2(state,height){const{_keyboardEventData}=this.__closure;_keyboardEventData.state.value=state;_keyboardEventData.height.value=height;}" };

export const useAnimatedKeyboard = function useAnimatedKeyboard() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { isStatusBarTranslucentAndroid: "hash", isNavigationBarTranslucentAndroid: "call" };
  }
  let ref2;
  obj = undefined;
  const tmp = ref2(null);
  dependencyMap = tmp;
  const tmp2 = ref2(-1);
  closure_2 = tmp2;
  const tmp3 = ref2(false);
  ref2 = tmp3;
  if (null === tmp.current) {
    obj = { state: null, height: null };
    obj.state = obj(1680).makeMutable(obj(1661).KeyboardState.UNKNOWN);
    const obj3 = obj(1680);
    obj.height = obj(1680).makeMutable(0);
    const obj4 = obj(1680);
    let fn = function c(value, value2) {
      obj.state.value = value;
      obj.height.value = value2;
    };
    obj = { keyboardEventData: null };
    obj.keyboardEventData = obj;
    fn.__closure = obj;
    fn.__workletHash = 4393537867728;
    fn.__initData = obj;
    tmp2.current = obj(1680).subscribeForKeyboardEvents(fn, obj);
    tmp.current = obj;
    tmp3.current = true;
    const obj5 = obj(1680);
  }
  closure_2(() => {
    if (false === ref2.current) {
      if (null !== ref.current) {
        const current = ref.current;
        obj(ref[1]);
        const fn = function u(value, value2) {
          current.state.value = value;
          current.height.value = value2;
        };
        obj = { _keyboardEventData: current };
        fn.__closure = obj;
        fn.__workletHash = 5041909921996;
        fn.__initData = __initData;
        ref.current = obj.subscribeForKeyboardEvents(fn, current);
        tmp.current = true;
      }
    }
    return () => {
      obj = obj(closure_1[1]);
      const result = obj.unsubscribeFromKeyboardEvents(ref.current);
      ref2.current = false;
    };
  }, []);
  return tmp.current;
};
// _runtime/01802_useAnimatedKeyboard.js
import noop from "00019_noop.js";

({ useEffect: obj1, useRef: c3 } = noop);
let closure_4 = { code: "function pnpm_useAnimatedKeyboardTs1(state,height){const{keyboardEventData}=this.__closure;keyboardEventData.state.value=state;keyboardEventData.height.value=height;}" };
let closure_5 = { code: "function pnpm_useAnimatedKeyboardTs2(state,height){const{_keyboardEventData}=this.__closure;_keyboardEventData.state.value=state;_keyboardEventData.height.value=height;}" };

export const useAnimatedKeyboard = function useAnimatedKeyboard() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { isStatusBarTranslucentAndroid: "r", isNavigationBarTranslucentAndroid: "accessibilityRole" };
  }
  dependencyMap = undefined;
  let callback;
  let callback2;
  obj = undefined;
  const tmp = callback2(null);
  dependencyMap = tmp;
  const tmp2 = callback2(-1);
  callback = tmp2;
  const tmp3 = callback2(false);
  callback2 = tmp3;
  if (null === tmp.current) {
    obj = { state: null, height: null };
    obj[0] = obj(1698).makeMutable(obj(1679).KeyboardState.UNKNOWN);
    const obj3 = obj(1698);
    obj[1] = obj(1698).makeMutable(0);
    const obj4 = obj(1698);
    let fn = function c(value, value2) {
      obj.state.value = value;
      obj.height.value = value2;
    };
    obj = { keyboardEventData: null };
    obj[0] = obj;
    fn.__closure = obj;
    fn.__workletHash = 4393537867728;
    fn.__initData = obj;
    tmp2.current = obj(1698).subscribeForKeyboardEvents(fn, obj);
    tmp.current = obj;
    tmp3.current = true;
    const obj5 = obj(1698);
  }
  callback(() => {
    if (false === ref2.current) {
      if (null !== ref.current) {
        const current = ref.current;
        obj = obj(ref[1]);
        const fn = function u(value, value2) {
          current.state.value = value;
          current.height.value = value2;
        };
        obj = { _keyboardEventData: null };
        obj[0] = current;
        fn.__closure = obj;
        fn.__workletHash = 5041909921996;
        fn.__initData = closure_1_5;
        closure_2.current = obj.subscribeForKeyboardEvents(fn, current);
        tmp.current = true;
      }
    }
    return () => {
      const result = current(closure_1_1[1]).unsubscribeFromKeyboardEvents(ref.current);
      closure_3.current = false;
    };
  }, []);
  return tmp.current;
};
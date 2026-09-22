// === Module 1785: ? ===

// Module 1785
import noop from "module_19" /* 19 */;

({ useEffect: c2, useRef: c3 } = noop);
let closure_4 = { code: "function pnpm_useAnimatedKeyboardTs1(state,height){const{keyboardEventData}=this.__closure;keyboardEventData.state.value=state;keyboardEventData.height.value=height;}" };
let closure_5 = { code: "function pnpm_useAnimatedKeyboardTs2(state,height){const{_keyboardEventData}=this.__closure;_keyboardEventData.state.value=state;_keyboardEventData.height.value=height;}" };

export const useAnimatedKeyboard = function useAnimatedKeyboard() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { isStatusBarTranslucentAndroid: "Array", isNavigationBarTranslucentAndroid: "flex" };
  }
  let ref2;
  let obj2;
  const tmp = ref2(null);
  dependencyMap = tmp;
  const tmp2 = ref2(-1);
  closure_2 = tmp2;
  const tmp3 = ref2(false);
  ref2 = tmp3;
  if (null === tmp.current) {
    obj2 = { state: obj(1681).makeMutable(obj(1662).KeyboardState.UNKNOWN), height: null };
    const obj3 = obj(1681);
    obj2.height = obj(1681).makeMutable(0);
    const obj4 = obj(1681);
    let fn = function c(value, value2) {
      obj2.state.value = value;
      obj2.height.value = value2;
    };
    const obj6 = { keyboardEventData: obj2 };
    fn.__closure = obj6;
    fn.__workletHash = 4393537867728;
    fn.__initData = obj2;
    tmp2.current = obj(1681).subscribeForKeyboardEvents(fn, obj);
    tmp.current = obj2;
    tmp3.current = true;
    const obj5 = obj(1681);
  }
  closure_2(() => {
    if (false === ref2.current) {
      if (null !== ref.current) {
        const current = ref.current;
        obj = obj(ref[1]);
        const fn = function u(value, value2) {
          current.state.value = value;
          current.height.value = value2;
        };
        obj2 = { _keyboardEventData: current };
        fn.__closure = obj2;
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
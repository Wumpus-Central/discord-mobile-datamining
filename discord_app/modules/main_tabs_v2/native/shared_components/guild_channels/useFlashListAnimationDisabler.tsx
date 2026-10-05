// === Module 13928: useFlashListAnimationDisabler ===

// Module 13928 (useFlashListAnimationDisabler)
import react2 from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const __initData = { code: "function useFlashListAnimationDisablerTsx1(){const{lastId}=this.__closure;return lastId.get();}" };
const __initData2 = { code: "function useFlashListAnimationDisablerTsx2(current,prev){const{enableAnimation}=this.__closure;if(current!==prev){enableAnimation.set(false);}}" };
const __initData3 = { code: "function useFlashListAnimationDisablerTsx3(finished){const{enableAnimation}=this.__closure;if(finished&&!enableAnimation.get()){enableAnimation.set(true);}}" };
const __initData4 = { code: "function useFlashListAnimationDisablerTsx4(){const{lastId}=this.__closure;return lastId.get();}" };
const __initData5 = { code: "function useFlashListAnimationDisablerTsx5(current,prev){const{enableAnimation}=this.__closure;if(current!==prev){enableAnimation.set(false);}}" };
const __initData6 = { code: "function useFlashListAnimationDisablerTsx6(finished){const{enableAnimation}=this.__closure;if(finished&&!enableAnimation.get()){enableAnimation.set(true);}}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((point) => {
  let closure_0 = point;
  const obj = react2;
  const cResult = obj.c(9);
  const obj2 = ReanimatedRexport;
  const sharedValue = obj2.useSharedValue(false);
  const obj3 = ReanimatedRexport;
  const sharedValue1 = obj3.useSharedValue(point);
  if (cResult[0] === point) {
    let tmp6;
    let tmp7;
    let tmp13;
    if (cResult[1] === sharedValue1) {
      tmp6 = cResult[2];
      tmp7 = cResult[3];
    }
    const effect = react.useEffect(tmp6, tmp7);
    const fn2 = function h() {
      return sharedValue1.get();
    };
    const obj4 = { lastId: sharedValue1 };
    fn2.__closure = obj4;
    fn2.__workletHash = 9889142626009;
    fn2.__initData = __initData;
    const fn3 = function c(arg0, arg1) {
      if (arg0 !== arg1) {
        const result = sharedValue.set(false);
      }
    };
    const obj5 = { enableAnimation: sharedValue };
    fn3.__closure = obj5;
    fn3.__workletHash = 6114249067388;
    fn3.__initData = __initData2;
    const tmpResult = ReanimatedRexport;
    const animatedReaction = tmpResult.useAnimatedReaction(fn2, fn3);
    if (cResult[4] !== sharedValue) {
      const fn4 = function b(arg0) {
        const tmp = arg0 && !sharedValue.get();
        if (tmp) {
          const result = sharedValue.set(true);
        }
      };
      const obj6 = { enableAnimation: sharedValue };
      fn4.__closure = obj6;
      fn4.__workletHash = 5697261629076;
      fn4.__initData = __initData3;
      cResult[4] = sharedValue;
      cResult[5] = fn4;
      tmp13 = fn4;
    } else {
      tmp13 = cResult[5];
    }
    if (cResult[6] === sharedValue) {
      let tmp15;
      if (cResult[7] === tmp13) {
        tmp15 = cResult[8];
      }
      return tmp15;
    }
    const items = [sharedValue, tmp13];
    cResult[6] = sharedValue;
    cResult[7] = tmp13;
    cResult[8] = items;
    tmp15 = items;
  }
  const fn = function u() {
    const result = sharedValue1.set(closure_0);
  };
  const items1 = [sharedValue1, point];
  cResult[0] = point;
  cResult[1] = sharedValue1;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : ((point) => {
  let closure_0 = point;
  const obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(false);
  const obj2 = ReanimatedRexport;
  const sharedValue1 = obj2.useSharedValue(point);
  const items = [sharedValue1, point];
  const effect = react.useEffect(() => {
    const result = sharedValue1.set(closure_0);
  }, items);
  const fn = function o() {
    return sharedValue1.get();
  };
  fn.__closure = { lastId: sharedValue1 };
  fn.__workletHash = 5993669810236;
  fn.__initData = __initData4;
  const fn2 = function s(arg0, arg1) {
    if (arg0 !== arg1) {
      const result = sharedValue.set(false);
    }
  };
  fn2.__closure = { enableAnimation: sharedValue };
  fn2.__workletHash = 12840122256347;
  fn2.__initData = __initData5;
  const obj3 = ReanimatedRexport;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  const fn3 = function f(arg0) {
    const tmp = arg0 && !sharedValue.get();
    if (tmp) {
      const result = sharedValue.set(true);
    }
  };
  fn3.__closure = { enableAnimation: sharedValue };
  fn3.__workletHash = 11635413445681;
  fn3.__initData = __initData6;
  const items1 = [sharedValue];
  const items2 = [sharedValue, react.useCallback(fn3, items1)];
  return items2;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useFlashListAnimationDisabler.tsx");

export const useFlashListAnimationDisabler = tmp2;
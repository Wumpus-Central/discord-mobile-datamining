// === Module 13995: useFlashListAnimationDisabler ===

// Module 13995 (useFlashListAnimationDisabler)
import closure_2 from "noop" /* 19 */;

const require = arg1;
let closure_3 = { code: "function useFlashListAnimationDisablerTsx1(){const{lastId}=this.__closure;return lastId.get();}" };
let closure_4 = { code: "function useFlashListAnimationDisablerTsx2(current,prev){const{enableAnimation}=this.__closure;if(current!==prev){enableAnimation.set(false);}}" };
let closure_5 = { code: "function useFlashListAnimationDisablerTsx3(finished){const{enableAnimation}=this.__closure;if(finished&&!enableAnimation.get()){enableAnimation.set(true);}}" };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/useFlashListAnimationDisabler.tsx");

export const useFlashListAnimationDisabler = function useFlashListAnimationDisabler(userId) {
  const _require = userId;
  sharedValue = _require(sharedValue[1]).useSharedValue(false);
  const obj = _require(sharedValue[1]);
  const sharedValue1 = _require(sharedValue[1]).useSharedValue(userId);
  const items = [sharedValue1, userId];
  const effect = sharedValue1.useEffect(() => {
    const result = sharedValue1.set(closure_0);
  }, items);
  const obj2 = _require(sharedValue[1]);
  const fn = function _() {
    return sharedValue1.get();
  };
  fn.__closure = { lastId: sharedValue1 };
  fn.__workletHash = 9889142626009;
  fn.__initData = closure_3;
  const fn2 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      const result = sharedValue.set(false);
    }
  };
  fn2.__closure = { enableAnimation: sharedValue };
  fn2.__workletHash = 6114249067388;
  fn2.__initData = closure_4;
  const animatedReaction = _require(sharedValue[1]).useAnimatedReaction(fn, fn2);
  const fn3 = function b(arg0) {
    let tmp = arg0;
    if (arg0) {
      tmp = !sharedValue.get();
    }
    if (tmp) {
      const result = sharedValue.set(true);
    }
  };
  fn3.__closure = { enableAnimation: sharedValue };
  fn3.__workletHash = 5697261629076;
  fn3.__initData = closure_5;
  const items1 = [sharedValue];
  const items2 = [sharedValue, sharedValue1.useCallback(fn3, items1)];
  return items2;
};
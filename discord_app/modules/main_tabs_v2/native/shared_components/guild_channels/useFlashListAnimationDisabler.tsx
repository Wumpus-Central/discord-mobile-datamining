// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/useFlashListAnimationDisabler.tsx
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const __initData = {
  code: "function useFlashListAnimationDisablerTsx1(){const{lastId}=this.__closure;return lastId.get();}",
};
const __initData2 = {
  code: "function useFlashListAnimationDisablerTsx2(current,prev){const{enableAnimation}=this.__closure;if(current!==prev){enableAnimation.set(false);}}",
};
const __initData3 = {
  code: "function useFlashListAnimationDisablerTsx3(finished){const{enableAnimation}=this.__closure;if(finished&&!enableAnimation.get()){enableAnimation.set(true);}}",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/useFlashListAnimationDisabler.tsx",
);

export const useFlashListAnimationDisabler = function useFlashListAnimationDisabler(userId) {
  closure_0 = userId;
  const sharedValue = ReanimatedRexport.useSharedValue(false);
  const sharedValue1 = ReanimatedRexport.useSharedValue(userId);
  const items = [sharedValue1, userId];
  const effect = noop.useEffect(() => {
    const result = sharedValue1.set(closure_0);
  }, items);
  const fn = function _() {
    return sharedValue1.get();
  };
  fn.__closure = { lastId: sharedValue1 };
  fn.__workletHash = 9889142626009;
  fn.__initData = __initData;
  const fn2 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      const result = sharedValue.set(false);
    }
  };
  fn2.__closure = { enableAnimation: sharedValue };
  fn2.__workletHash = 6114249067388;
  fn2.__initData = __initData2;
  const animatedReaction = ReanimatedRexport.useAnimatedReaction(fn, fn2);
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
  fn3.__initData = __initData3;
  const items1 = [sharedValue];
  const items2 = [sharedValue, noop.useCallback(fn3, items1)];
  return items2;
};

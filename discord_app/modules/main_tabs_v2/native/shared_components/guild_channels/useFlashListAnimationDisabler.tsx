// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/useFlashListAnimationDisabler.tsx
import _mod1655 from "../../../../../../_runtime/metro/01655__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = {
  code: "(function useFlashListAnimationDisablerTsx1(){let[lastId]=this.__closure;return lastId.get();})",
};
let closure_4 = {
  code: "(function useFlashListAnimationDisablerTsx2(current,prev){let[enableAnimation]=this.__closure;if(current!==prev){enableAnimation.set(false);}})",
};
let closure_5 = {
  code: "(function useFlashListAnimationDisablerTsx3(finished){let[enableAnimation]=this.__closure;if(finished&&!enableAnimation.get()){enableAnimation.set(true);}})",
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/useFlashListAnimationDisabler.tsx",
);

export function useFlashListAnimationDisabler(userId) {
  const sharedValue = _mod1655.useSharedValue(false);
  const sharedValue1 = _mod1655.useSharedValue(userId);
  items = [sharedValue1, userId];
  const effect = noop.useEffect(() => {
    const result = sharedValue1.set(c0);
  }, items);
  const items1 = [closure_3, sharedValue1];
  [tmp4, tmp5] = items1;
  function useFlashListAnimationDisablerTsx1() {
    return _undefined.get();
  }
  const items2 = [tmp5];
  useFlashListAnimationDisablerTsx1.__closure = items2;
  useFlashListAnimationDisablerTsx1.__workletHash = 16187209688288;
  useFlashListAnimationDisablerTsx1.__initData = tmp4;
  const items3 = [closure_4, sharedValue];
  [tmp6, tmp7] = items3;
  function useFlashListAnimationDisablerTsx2(arg0, arg1) {
    if (arg0 !== arg1) {
      const result = _undefined.set(false);
    }
  }
  const items4 = [tmp7];
  useFlashListAnimationDisablerTsx2.__closure = items4;
  useFlashListAnimationDisablerTsx2.__workletHash = 6865280416933;
  useFlashListAnimationDisablerTsx2.__initData = tmp6;
  const animatedReaction = _mod1655.useAnimatedReaction(
    useFlashListAnimationDisablerTsx1,
    useFlashListAnimationDisablerTsx2,
  );
  const items5 = [closure_5, sharedValue];
  c0 = undefined;
  [tmp9, tmp10] = items5;
  function useFlashListAnimationDisablerTsx3(arg0) {
    let tmp = arg0;
    if (arg0) {
      tmp = !_undefined.get();
    }
    if (tmp) {
      const result = _undefined.set(true);
    }
  }
  const items6 = [tmp10];
  useFlashListAnimationDisablerTsx3.__closure = items6;
  useFlashListAnimationDisablerTsx3.__workletHash = 8857429510125;
  useFlashListAnimationDisablerTsx3.__initData = tmp9;
  const items7 = [sharedValue];
  const items8 = [sharedValue, noop.useCallback(useFlashListAnimationDisablerTsx3, items7)];
  return items8;
}

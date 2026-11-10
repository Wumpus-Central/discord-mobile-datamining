// discord_app/modules/media_viewer/native/useOverlayLayoutDriver.tsx
import native from "../../../design/void/native.tsx";
import _mod1652 from "../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = {
  code: "(function useOverlayLayoutDriverTsx1(){let[interpolate,animationDriver]=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[-50,-50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};})",
};
let closure_4 = {
  code: "(function useOverlayLayoutDriverTsx2(){let[interpolate,animationDriver]=this.__closure;return{transform:[{translateY:interpolate(animationDriver.get(),[0,0.75,1],[50,50,0])}],opacity:interpolate(animationDriver.get(),[0,0.75,1],[0,0,1])};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/useOverlayLayoutDriver.tsx");

export function useOverlayLayoutDriver() {
  sharedValue = sharedValue(1652).useSharedValue(0);
  let obj = sharedValue(1652);
  const mediaViewerDimensions = sharedValue(8947).useMediaViewerDimensions();
  items = [sharedValue, ,];
  ({ height: arr[1], width: arr[2] } = mediaViewerDimensions);
  const effect = noop.useEffect(() => {
    const obj = timing_timing;
    const result = sharedValue.set(obj.withTiming(1, { duration: 300, easing: native.STANDARD_EASING }));
  }, items);
  return sharedValue;
}
export function useHeaderLayoutAnimation(animationDriver) {
  items = [closure_3, _mod1652.interpolate, animationDriver];
  c0 = undefined;
  c1 = undefined;
  [tmp, tmp2, tmp3] = items;
  function useOverlayLayoutDriverTsx1() {
    const obj = { transform: null, opacity: null };
    items = [{ translateY: _undefined(_undefined2.get(), [0, 0.75, 1], [-50, -50, 0]) }];
    obj.transform = items;
    obj.opacity = _undefined(_undefined2.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  }
  const items1 = [tmp2, tmp3];
  useOverlayLayoutDriverTsx1.__closure = items1;
  useOverlayLayoutDriverTsx1.__workletHash = 9211883579773;
  useOverlayLayoutDriverTsx1.__initData = tmp;
  return _mod1652.useAnimatedStyle(useOverlayLayoutDriverTsx1);
}
export function useFooterLayoutAnimation(overlayLayoutDriver) {
  items = [closure_4, _mod1652.interpolate, overlayLayoutDriver];
  c0 = undefined;
  c1 = undefined;
  [tmp, tmp2, tmp3] = items;
  function useOverlayLayoutDriverTsx2() {
    const obj = { transform: null, opacity: null };
    items = [{ translateY: _undefined(_undefined2.get(), [0, 0.75, 1], [50, 50, 0]) }];
    obj.transform = items;
    obj.opacity = _undefined(_undefined2.get(), [0, 0.75, 1], [0, 0, 1]);
    return obj;
  }
  const items1 = [tmp2, tmp3];
  useOverlayLayoutDriverTsx2.__closure = items1;
  useOverlayLayoutDriverTsx2.__workletHash = 11051399715838;
  useOverlayLayoutDriverTsx2.__initData = tmp;
  return _mod1652.useAnimatedStyle(useOverlayLayoutDriverTsx2);
}

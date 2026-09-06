// === Module 16967: useLaunchPadPullTabMinimized ===

// Module 16967 (useLaunchPadPullTabMinimized)
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
const DCDScrollTracker = get_ActivityIndicator.NativeModules.DCDScrollTracker;
let tmp3;
if (DCDScrollTracker) {
  tmp3 = new tmp3(DCDScrollTracker);
}
let closure_3 = tmp3;
const __initData = { code: "function useLaunchPadPullTabMinimizedTsx1(){const{launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll}=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadPullTabMinimized.tsx");

export default function useLaunchPadPullTabMinimized(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  let launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const isVoicePanelFullscreen = launchPadSharedState(launchPadPullTabState[3]).useIsVoicePanelFullscreen();
  const obj = launchPadSharedState(launchPadPullTabState[3]);
  const sharedValue = launchPadSharedState(launchPadPullTabState[2]).useSharedValue(false);
  closure_129_0 = sharedValue;
  const items = [sharedValue];
  const effect = isVoicePanelFullscreen.useEffect(() => {
    closure_0 = -1;
    let addListenerResult;
    if (sharedValue != null) {
      addListenerResult = sharedValue.addListener("isScrollingOrDragging", (isScrollingOrDragging) => {
        clearTimeout(timeout);
        if (isScrollingOrDragging.isScrollingOrDragging) {
          let result = launchPadSharedState.set(true);
        } else {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            const result = closure_1_0.set(false);
          }, 1000);
        }
      });
    }
    launchPadPullTabState = addListenerResult;
    return () => {
      clearTimeout(closure_0);
      if (addListenerResult != null) {
        addListenerResult.remove();
      }
    };
  }, items);
  const obj2 = launchPadSharedState(launchPadPullTabState[2]);
  const fn = function u() {
    value = launchPadPullTabState.get().minimized || isVoicePanelFullscreen;
    if (value) {
      value = launchPadSharedState.get() <= 0;
    }
    if (!value) {
      value = sharedValue.get();
    }
    return value;
  };
  fn.__closure = { launchPadPullTabState, isVoicePanelOpen: isVoicePanelFullscreen, launchPadSharedState, isMinimizedDuringScroll: sharedValue };
  fn.__workletHash = 14263056934448;
  fn.__initData = __initData;
  return launchPadSharedState(launchPadPullTabState[2]).useDerivedValue(fn);
};
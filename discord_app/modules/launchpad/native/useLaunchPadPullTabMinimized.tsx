// discord_app/modules/launchpad/native/useLaunchPadPullTabMinimized.tsx
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";

const require = fn;
const DCDScrollTracker = get_ActivityIndicator.NativeModules.DCDScrollTracker;
let tmp3;
if (DCDScrollTracker) {
  tmp3 = new tmp3(DCDScrollTracker);
}
let closure_3 = tmp3;
let closure_4 = { code: "function useLaunchPadPullTabMinimizedTsx1(){const{launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll}=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();}" };
let result = require("obj132").fileFinishedImporting("modules/launchpad/native/useLaunchPadPullTabMinimized.tsx");

export default function useLaunchPadPullTabMinimized(launchPadSharedState) {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  let launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  let sharedValue;
  const isVoicePanelFullscreen = sharedValue(launchPadPullTabState[3]).useIsVoicePanelFullscreen();
  sharedValue = undefined;
  const obj = sharedValue(launchPadPullTabState[3]);
  sharedValue = sharedValue(launchPadPullTabState[2]).useSharedValue(false);
  const items = [sharedValue];
  const effect = isVoicePanelFullscreen.useEffect(() => {
    c0 = -1;
    let addListenerResult;
    if (sharedValue != null) {
      addListenerResult = sharedValue.addListener("isScrollingOrDragging", (isScrollingOrDragging) => {
        clearTimeout(timeout);
        if (isScrollingOrDragging.isScrollingOrDragging) {
          let result = v1.set(true);
        } else {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            const result = closure_0.set(false);
          }, 1000);
        }
      });
    }
    launchPadPullTabState = addListenerResult;
    return () => {
      clearTimeout(c0);
      if (addListenerResult != null) {
        addListenerResult.remove();
      }
    };
  }, items);
  const obj2 = sharedValue(launchPadPullTabState[2]);
  const fn = function u() {
    let value = launchPadPullTabState.get().minimized || isVoicePanelFullscreen;
    if (value) {
      value = sharedValue.get() <= 0;
    }
    if (!value) {
      value = sharedValue.get();
    }
    return value;
  };
  fn.__closure = { launchPadPullTabState, isVoicePanelOpen: isVoicePanelFullscreen, launchPadSharedState, isMinimizedDuringScroll: sharedValue };
  fn.__workletHash = 14263056934448;
  fn.__initData = closure_4;
  return sharedValue(launchPadPullTabState[2]).useDerivedValue(fn);
};
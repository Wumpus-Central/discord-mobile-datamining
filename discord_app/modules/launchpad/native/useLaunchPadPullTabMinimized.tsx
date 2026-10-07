// === Module 17417: useLaunchPadPullTabMinimized ===

// Module 17417 (useLaunchPadPullTabMinimized)
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import VoicePanelUtils from "VoicePanelUtils" /* 9622 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
const DCDScrollTracker = get_ActivityIndicator.NativeModules.DCDScrollTracker;
let tmp32;
if (DCDScrollTracker) {
  tmp32 = new tmp3(DCDScrollTracker);
}
let closure_3 = tmp32;
let ReactCompilerGating = fn(558);
let closure_4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = sharedValue(576).c(3);
  const obj = sharedValue(576);
  sharedValue = sharedValue(4618).useSharedValue(false);
  if (cResult[0] !== sharedValue) {
    const fn = function t() {
      closure_0 = -1;
      let addListenerResult;
      if (closure_1_3 != null) {
        addListenerResult = closure_1_3.addListener("isScrollingOrDragging", (isScrollingOrDragging) => {
          clearTimeout(timeout);
          if (isScrollingOrDragging.isScrollingOrDragging) {
            let result = sharedValue.set(true);
          } else {
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              const result = closure_1_0.set(false);
            }, 1000);
          }
        });
      }
      closure_1 = addListenerResult;
      return () => {
        clearTimeout(closure_0);
        if (addListenerResult != null) {
          addListenerResult.remove();
        }
      };
    };
    const items = [sharedValue];
    cResult[0] = sharedValue;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp4 = items;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const effect = noop.useEffect(tmp3, tmp4);
  return sharedValue;
}) : (() => {
  sharedValue = sharedValue(4618).useSharedValue(false);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    closure_0 = -1;
    let addListenerResult;
    if (closure_1_3 != null) {
      addListenerResult = closure_1_3.addListener("isScrollingOrDragging", (isScrollingOrDragging) => {
        clearTimeout(timeout);
        if (isScrollingOrDragging.isScrollingOrDragging) {
          let result = sharedValue.set(true);
        } else {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            const result = closure_1_0.set(false);
          }, 1000);
        }
      });
    }
    closure_1 = addListenerResult;
    return () => {
      clearTimeout(closure_0);
      if (addListenerResult != null) {
        addListenerResult.remove();
      }
    };
  }, items);
  return sharedValue;
});
const __initData = { code: "function useLaunchPadPullTabMinimizedTsx1(){const{launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll}=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();}" };
const __initData2 = { code: "function useLaunchPadPullTabMinimizedTsx2(){const{launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll}=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();}" };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadPullTabMinimized.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((launchPadSharedState) => {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const isVoicePanelFullscreen = VoicePanelUtils.useIsVoicePanelFullscreen();
  const tmp2 = closure_4();
  closure_3 = tmp2;
  const fn = function t() {
    value = launchPadPullTabState.get().minimized || isVoicePanelFullscreen;
    if (value) {
      value = launchPadSharedState.get() <= 0;
    }
    if (!value) {
      value = closure_3.get();
    }
    return value;
  };
  fn.__closure = { launchPadPullTabState, isVoicePanelOpen: isVoicePanelFullscreen, launchPadSharedState, isMinimizedDuringScroll: tmp2 };
  fn.__workletHash = 14263056934448;
  fn.__initData = __initData;
  return ReanimatedRexport.useDerivedValue(fn);
}) : ((launchPadSharedState) => {
  launchPadSharedState = launchPadSharedState.launchPadSharedState;
  const launchPadPullTabState = launchPadSharedState.launchPadPullTabState;
  const isVoicePanelFullscreen = VoicePanelUtils.useIsVoicePanelFullscreen();
  const tmp2 = closure_4();
  closure_3 = tmp2;
  const fn = function l() {
    value = launchPadPullTabState.get().minimized || isVoicePanelFullscreen;
    if (value) {
      value = launchPadSharedState.get() <= 0;
    }
    if (!value) {
      value = closure_3.get();
    }
    return value;
  };
  fn.__closure = { launchPadPullTabState, isVoicePanelOpen: isVoicePanelFullscreen, launchPadSharedState, isMinimizedDuringScroll: tmp2 };
  fn.__workletHash = 12013643918259;
  fn.__initData = __initData2;
  return ReanimatedRexport.useDerivedValue(fn);
});
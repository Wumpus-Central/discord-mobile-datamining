// === Module 19655: useLaunchPadPullTabMinimized ===

// Module 19655 (useLaunchPadPullTabMinimized)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
const DCDScrollTracker = get_ActivityIndicator.NativeModules.DCDScrollTracker;
let tmp32;
if (DCDScrollTracker) {
  tmp32 = new tmp3(DCDScrollTracker);
}
let closure_3 = tmp32;
let closure_4 = { code: "(function useLaunchPadPullTabMinimizedTsx1(){let[launchPadPullTabState,isVoicePanelOpen,launchPadSharedState,isMinimizedDuringScroll]=this.__closure;const isMinimized=(launchPadPullTabState.get().minimized||isVoicePanelOpen)&&launchPadSharedState.get()<=0;return isMinimized||isMinimizedDuringScroll.get();})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/launchpad/native/useLaunchPadPullTabMinimized.tsx");

export default function useLaunchPadPullTabMinimized(arg0) {
  ({ launchPadSharedState, launchPadPullTabState } = arg0);
  _require = undefined;
  const isVoicePanelFullscreen = require("VoicePanelUtils").useIsVoicePanelFullscreen();
  const obj = require("VoicePanelUtils");
  const sharedValue = require("module_1652").useSharedValue(false);
  _require = sharedValue;
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    closure_0 = -1;
    let addListenerResult;
    if (_undefined3 != null) {
      addListenerResult = _undefined3.addListener("isScrollingOrDragging", (isScrollingOrDragging) => {
        clearTimeout(timeout);
        if (isScrollingOrDragging.isScrollingOrDragging) {
          let result = c0.set(true);
        } else {
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            const result = closure_1_0.set(false);
          }, 1000);
        }
      });
    }
    c1 = addListenerResult;
    return () => {
      clearTimeout(closure_0);
      if (addListenerResult != null) {
        addListenerResult.remove();
      }
    };
  }, items);
  const obj2 = require("module_1652");
  const items1 = [closure_4, launchPadPullTabState, isVoicePanelFullscreen, launchPadSharedState, sharedValue];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c3 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8] = items1;
  function useLaunchPadPullTabMinimizedTsx1() {
    value = _undefined.get().minimized || c1;
    if (value) {
      value = _undefined2.get() <= 0;
    }
    if (!value) {
      value = _undefined3.get();
    }
    return value;
  }
  const items2 = [tmp5, tmp6, tmp7, tmp8];
  useLaunchPadPullTabMinimizedTsx1.__closure = items2;
  useLaunchPadPullTabMinimizedTsx1.__workletHash = 11967190027017;
  useLaunchPadPullTabMinimizedTsx1.__initData = tmp4;
  return require("module_1652").useDerivedValue(useLaunchPadPullTabMinimizedTsx1);
};
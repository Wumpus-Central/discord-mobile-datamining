// === Module 11587: useBottomSheetFlashListBottomViewabilityInset ===

// Module 11587 (useBottomSheetFlashListBottomViewabilityInset)
import closure_3 from "noop" /* 19 */;

const require = arg1;
let closure_4 = { code: "function useBottomSheetFlashListBottomViewabilityInsetTsx1(){const{bottomSheetPosition}=this.__closure;var _bottomSheetPosition$,_bottomSheetPosition;return(_bottomSheetPosition$=(_bottomSheetPosition=bottomSheetPosition)===null||_bottomSheetPosition===void 0?void 0:_bottomSheetPosition.get())!==null&&_bottomSheetPosition$!==void 0?_bottomSheetPosition$:0;}" };
let closure_5 = { code: "function useBottomSheetFlashListBottomViewabilityInsetTsx2(sheetPosition){const{distanceBetweenExpandedScreenTopAndSheetTop,runOnJS,handleBottomViewabilityInsetDebounced}=this.__closure;const bottomViewabilityInset=sheetPosition-distanceBetweenExpandedScreenTopAndSheetTop;runOnJS(handleBottomViewabilityInsetDebounced)(bottomViewabilityInset);}" };
const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx");

export const useBottomSheetFlashListBottomViewabilityInset = function useBottomSheetFlashListBottomViewabilityInset() {
  let obj = bottomVisibilityInsetRef;
  const context = bottomVisibilityInsetRef.useContext(bottomSheetPosition(8971).AppLauncherContext);
  bottomSheetPosition = undefined;
  if (context != null) {
    bottomSheetPosition = context.bottomSheetPosition;
  }
  const flashListRef = obj.useRef(null);
  const diff = flashListRef(1494)().height - flashListRef(10913)().maximum;
  dependencyMap = diff;
  bottomVisibilityInsetRef = obj.useRef(9999);
  const memo = obj.useMemo(() => flashListRef(diff[4]).debounce((current) => {
    closure_3.current = current;
    current = ref.current;
    if (current != null) {
      current.updateViewableItems();
    }
  }, 200), []);
  const tmp = flashListRef;
  const tmp3 = flashListRef(1494)();
  const fn = function u() {
    let num;
    if (bottomSheetPosition != null) {
      num = bottomSheetPosition.get();
    }
    if (num == null) {
      num = 0;
    }
    return num;
  };
  fn.__closure = { bottomSheetPosition };
  fn.__workletHash = 3750973667946;
  fn.__initData = memo;
  const fn2 = function s(arg0) {
    bottomSheetPosition(diff[5]).runOnJS(memo)(arg0 - closure_2);
  };
  obj = { distanceBetweenExpandedScreenTopAndSheetTop: diff, runOnJS: tmp4(4185).runOnJS, handleBottomViewabilityInsetDebounced: memo };
  fn2.__closure = obj;
  fn2.__workletHash = 6025307858098;
  fn2.__initData = closure_5;
  const animatedReaction = bottomSheetPosition(4185).useAnimatedReaction(fn, fn2);
  return { flashListRef, bottomVisibilityInsetRef };
};
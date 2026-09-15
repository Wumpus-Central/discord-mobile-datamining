// === Module 12232: useBottomSheetFlashListBottomViewabilityInset ===

// Module 12232 (useBottomSheetFlashListBottomViewabilityInset)
import _modDef12 from "module_12" /* 12 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { code: "function useBottomSheetFlashListBottomViewabilityInsetTsx1(){const{bottomSheetPosition}=this.__closure;var _bottomSheetPosition$,_bottomSheetPosition;return(_bottomSheetPosition$=(_bottomSheetPosition=bottomSheetPosition)===null||_bottomSheetPosition===void 0?void 0:_bottomSheetPosition.get())!==null&&_bottomSheetPosition$!==void 0?_bottomSheetPosition$:0;}" };
const __initData = { code: "function useBottomSheetFlashListBottomViewabilityInsetTsx2(sheetPosition){const{distanceBetweenExpandedScreenTopAndSheetTop,runOnJS,handleBottomViewabilityInsetDebounced}=this.__closure;const bottomViewabilityInset=sheetPosition-distanceBetweenExpandedScreenTopAndSheetTop;runOnJS(handleBottomViewabilityInsetDebounced)(bottomViewabilityInset);}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx");

export const useBottomSheetFlashListBottomViewabilityInset = function useBottomSheetFlashListBottomViewabilityInset() {
  const context = bottomVisibilityInsetRef.useContext(bottomSheetPosition(11353).AppLauncherContext);
  bottomSheetPosition = undefined;
  if (context != null) {
    bottomSheetPosition = context.bottomSheetPosition;
  }
  const flashListRef = obj.useRef(null);
  const diff = flashListRef(1478)().height - flashListRef(11494)().maximum;
  dependencyMap = diff;
  bottomVisibilityInsetRef = obj.useRef(9999);
  const memo = obj.useMemo(() => _modDef12.debounce((current) => {
    bottomVisibilityInsetRef.current = current;
    current = ref.current;
    if (current != null) {
      current.updateViewableItems();
    }
  }, 200), []);
  const tmp3 = flashListRef(1478)();
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
    ReanimatedRexport.runOnJS(memo)(arg0 - diff);
  };
  const tmp4Result = bottomSheetPosition(4376);
  fn2.__closure = { distanceBetweenExpandedScreenTopAndSheetTop: diff, runOnJS: bottomSheetPosition(4376).runOnJS, handleBottomViewabilityInsetDebounced: memo };
  fn2.__workletHash = 6025307858098;
  fn2.__initData = __initData;
  const animatedReaction = tmp4Result.useAnimatedReaction(fn, fn2);
  return { flashListRef, bottomVisibilityInsetRef };
};
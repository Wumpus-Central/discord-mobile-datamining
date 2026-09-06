// === Module 12098: useBottomSheetFlashListBottomViewabilityInset ===

// Module 12098 (useBottomSheetFlashListBottomViewabilityInset)
import _modDef12 from "module_12" /* 12 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { code: "function useBottomSheetFlashListBottomViewabilityInsetTsx1(){const{bottomSheetPosition}=this.__closure;var _bottomSheetPosition$,_bottomSheetPosition;return(_bottomSheetPosition$=(_bottomSheetPosition=bottomSheetPosition)===null||_bottomSheetPosition===void 0?void 0:_bottomSheetPosition.get())!==null&&_bottomSheetPosition$!==void 0?_bottomSheetPosition$:0;}" };
const __initData = { code: "function useBottomSheetFlashListBottomViewabilityInsetTsx2(sheetPosition){const{distanceBetweenExpandedScreenTopAndSheetTop,runOnJS,handleBottomViewabilityInsetDebounced}=this.__closure;const bottomViewabilityInset=sheetPosition-distanceBetweenExpandedScreenTopAndSheetTop;runOnJS(handleBottomViewabilityInsetDebounced)(bottomViewabilityInset);}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx");

export const useBottomSheetFlashListBottomViewabilityInset = function useBottomSheetFlashListBottomViewabilityInset() {
  let obj = bottomVisibilityInsetRef;
  const context = bottomVisibilityInsetRef.useContext(bottomSheetPosition(11215).AppLauncherContext);
  bottomSheetPosition = undefined;
  if (context != null) {
    bottomSheetPosition = context.bottomSheetPosition;
  }
  const flashListRef = obj.useRef(null);
  const diff = flashListRef(1477)().height - flashListRef(11356)().maximum;
  dependencyMap = diff;
  bottomVisibilityInsetRef = obj.useRef(9999);
  const memo = obj.useMemo(() => _modDef12.debounce((current) => {
    bottomVisibilityInsetRef.current = current;
    current = ref.current;
    if (current != null) {
      current.updateViewableItems();
    }
  }, 200), []);
  const tmp3 = flashListRef(1477)();
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
  obj = { distanceBetweenExpandedScreenTopAndSheetTop: diff, runOnJS: tmp4(4296).runOnJS, handleBottomViewabilityInsetDebounced: memo };
  fn2.__closure = obj;
  fn2.__workletHash = 6025307858098;
  fn2.__initData = __initData;
  const animatedReaction = bottomSheetPosition(4296).useAnimatedReaction(fn, fn2);
  return { flashListRef, bottomVisibilityInsetRef };
};
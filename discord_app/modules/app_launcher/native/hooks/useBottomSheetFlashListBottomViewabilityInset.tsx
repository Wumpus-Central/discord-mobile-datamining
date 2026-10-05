// === Module 11722: useBottomSheetFlashListBottomViewabilityInset ===

// Module 11722 (useBottomSheetFlashListBottomViewabilityInset)
import _modDef12 from "module_12" /* 12 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let current, dependencyMap;

let closure_4 = { code: "function useBottomSheetFlashListBottomViewabilityInsetTsx1(){const{bottomSheetPosition}=this.__closure;var _bottomSheetPosition$,_bottomSheetPosition;return(_bottomSheetPosition$=(_bottomSheetPosition=bottomSheetPosition)===null||_bottomSheetPosition===void 0?void 0:_bottomSheetPosition.get())!==null&&_bottomSheetPosition$!==void 0?_bottomSheetPosition$:0;}" };
const __initData = { code: "function useBottomSheetFlashListBottomViewabilityInsetTsx2(sheetPosition){const{distanceBetweenExpandedScreenTopAndSheetTop,runOnJS,handleBottomViewabilityInsetDebounced}=this.__closure;const bottomViewabilityInset=sheetPosition-distanceBetweenExpandedScreenTopAndSheetTop;runOnJS(handleBottomViewabilityInsetDebounced)(bottomViewabilityInset);}" };
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/useBottomSheetFlashListBottomViewabilityInset.tsx");

export const useBottomSheetFlashListBottomViewabilityInset = function useBottomSheetFlashListBottomViewabilityInset() {
  let bottomSheetPosition;
  let bottomVisibilityInsetRef;
  let flashListRef;
  let obj = bottomVisibilityInsetRef;
  const tmp3 = flashListRef(1484)();
  const context = bottomVisibilityInsetRef.useContext(bottomSheetPosition(10994).AppLauncherContext);
  bottomSheetPosition = undefined;
  const tmp = flashListRef;
  if (context != null) {
    bottomSheetPosition = context.bottomSheetPosition;
  }
  const maximum = tmp(9776)().maximum;
  flashListRef = obj.useRef(null);
  const diff = tmp3.height - maximum;
  dependencyMap = diff;
  bottomVisibilityInsetRef = obj.useRef(9999);
  const memo = obj.useMemo(() => {
    let ref;
    const obj = _modDef12;
    return obj.debounce((current) => {
      bottomVisibilityInsetRef.current = current;
      current = ref.current;
      if (current != null) {
        current.updateViewableItems();
      }
    }, 200);
  }, []);
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
    const obj = ReanimatedRexport;
    obj.runOnJS(memo)(arg0 - dependencyMap);
  };
  const tmp4Result = bottomSheetPosition(4612);
  fn2.__closure = { distanceBetweenExpandedScreenTopAndSheetTop: diff, runOnJS: bottomSheetPosition(4612).runOnJS, handleBottomViewabilityInsetDebounced: memo };
  fn2.__workletHash = 6025307858098;
  fn2.__initData = __initData;
  ({ distanceBetweenExpandedScreenTopAndSheetTop: diff, runOnJS: bottomSheetPosition(4612).runOnJS, handleBottomViewabilityInsetDebounced: memo });
  const animatedReaction = tmp4Result.useAnimatedReaction(fn, fn2);
  return { flashListRef, bottomVisibilityInsetRef };
};
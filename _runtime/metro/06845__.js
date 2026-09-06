// === Module 6845: ? ===

// Module 6845
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import GESTURE_SOURCE from "GESTURE_SOURCE" /* 6628 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6655 */;
import noop from "module_19" /* 19 */;
import cancelAnimation from "cancelAnimation" /* 1636 */;

({ useContext: c2, useMemo: c3, memo } = noop);
const jsx = jsxProd.jsx;
let closure_5 = cancelAnimation.createAnimatedComponent(_mod17.RefreshControl);
const __initData = { code: "function pnpm_BottomSheetRefreshControlAndroidTsx1(){const{animatedScrollableState,SCROLLABLE_STATE}=this.__closure;return{enabled:animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED};}" };
const memoResult = memo(function BottomSheetRefreshControlComponent(arg0) {
  ({ onRefresh, scrollableGesture } = arg0);
  const merged = Object.assign(arg0, Object.assign({ onRefresh: 0, scrollableGesture: 0 }));
  let iter;
  const tmp4 = iter(scrollableGesture(6639).BottomSheetDraggableContext);
  dependencyMap = tmp4;
  let obj = scrollableGesture(6632);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  iter = bottomSheetInternal.animatedScrollableState;
  if (!tmp4) {
    if (bottomSheetInternal.enableContentPanningGesture) {
      throw "'BottomSheetRefreshControl' cannot be used out of the BottomSheet!";
    }
  }
  const fn = function f() {
    return { enabled: iter.value === GESTURE_SOURCE.SCROLLABLE_STATE.UNLOCKED };
  };
  obj = { animatedScrollableState: iter, SCROLLABLE_STATE: tmp2(6628).SCROLLABLE_STATE };
  fn.__closure = obj;
  fn.__workletHash = 8403038560398;
  fn.__initData = __initData;
  let items = [iter.value];
  const animatedProps = scrollableGesture(1636).useAnimatedProps(fn, items);
  const items1 = [tmp4, scrollableGesture];
  const tmp7 = closure_3(() => {
    let result;
    if (closure_1) {
      const Gesture = LegacyBaseButton.Gesture;
      const NativeResult = Gesture.Native();
      const simultaneousWithExternalGesture = NativeResult.simultaneousWithExternalGesture;
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(closure_1.toGestureArray(), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(scrollableGesture.toGestureArray(), arraySpreadResult);
      result = HermesBuiltin.apply(items, NativeResult).shouldCancelWhenOutside(true);
      const applyResult = HermesBuiltin.apply(items, NativeResult);
    }
    return result;
  }, items1);
  if (tmp7) {
    obj = { gesture: tmp7, children: null };
    const obj1 = {};
    const merged1 = Object.assign(merged);
    obj1.onRefresh = onRefresh;
    obj1.animatedProps = animatedProps;
    obj.children = tmp8(closure_5, obj1);
    let tmp8Result = tmp8(tmp2(6655).GestureDetector, obj);
  } else {
    const obj2 = {};
    const merged2 = Object.assign(merged);
    obj2.onRefresh = onRefresh;
    obj2.animatedProps = animatedProps;
    tmp8Result = tmp8(closure_5, obj2);
  }
  return tmp8Result;
});
memoResult.displayName = "BottomSheetRefreshControl";

export default memoResult;
// _runtime/05842_memo.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import noopDefault from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";
import cancelAnimationDefault from "01653_cancelAnimation.js";
import noop from "00019_noop.js";

({ useContext: obj1, useMemo: c3, memo } = noop);
noopDefault;
const jsx = jsxProd.jsx;
let closure_5 = cancelAnimationDefault.createAnimatedComponent(get_ActivityIndicator.RefreshControl);
let closure_6 = { code: "function pnpm_BottomSheetRefreshControlAndroidTsx1(){const{animatedScrollableState,SCROLLABLE_STATE}=this.__closure;return{enabled:animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED};}" };
const memoResult = memo(function BottomSheetRefreshControlComponent(arg0) {
  ({ onRefresh, scrollableGesture } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  dependencyMap = undefined;
  let iter;
  const tmp4 = iter(scrollableGesture(5636).BottomSheetDraggableContext);
  dependencyMap = tmp4;
  let obj = scrollableGesture(5629);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  iter = bottomSheetInternal.animatedScrollableState;
  if (!tmp4) {
    if (bottomSheetInternal.enableContentPanningGesture) {
      throw "'BottomSheetRefreshControl' cannot be used out of the BottomSheet!";
    }
  }
  const fn = function f() {
    return { enabled: iter.value === scrollableGesture(5625).SCROLLABLE_STATE.UNLOCKED };
  };
  obj = { animatedScrollableState: iter, SCROLLABLE_STATE: tmp2(5625).SCROLLABLE_STATE };
  fn.__closure = obj;
  fn.__workletHash = 8403038560398;
  fn.__initData = closure_6;
  let items = [iter.value];
  const animatedProps = scrollableGesture(1653).useAnimatedProps(fn, items);
  const items1 = [tmp4, scrollableGesture];
  const tmp7 = callback(() => {
    let result;
    if (dependencyMap) {
      const Gesture = scrollableGesture(5652).Gesture;
      const NativeResult = Gesture.Native();
      const simultaneousWithExternalGesture = NativeResult.simultaneousWithExternalGesture;
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(dependencyMap.toGestureArray(), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(scrollableGesture.toGestureArray(), arraySpreadResult);
      result = HermesBuiltin.apply(items, NativeResult).shouldCancelWhenOutside(true);
      const applyResult = HermesBuiltin.apply(items, NativeResult);
    }
    return result;
  }, items1);
  if (tmp7) {
    obj = { gesture: null, children: null };
    obj[0] = tmp7;
    obj1 = {};
    const merged1 = Object.assign(merged);
    obj1.onRefresh = onRefresh;
    obj1.animatedProps = animatedProps;
    obj[1] = tmp8(closure_5, obj1);
    let tmp8Result = tmp8(tmp2(5652).GestureDetector, obj);
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
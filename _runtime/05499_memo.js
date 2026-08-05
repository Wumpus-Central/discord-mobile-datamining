// _runtime/05499_memo.js
import noop from "noop";
import "noop";
import { jsx } from "jsxProd";

let c3;
let memo;
let obj1;
({ useContext: obj1, useMemo: c3, memo } = noop);
let closure_5 = require("cancelAnimation").createAnimatedComponent(require("get ActivityIndicator").RefreshControl);
let closure_6 = { code: "function pnpm_BottomSheetRefreshControlAndroidTsx1(){const{animatedScrollableState,SCROLLABLE_STATE}=this.__closure;return{enabled:animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED};}" };
const memoResult = memo(function BottomSheetRefreshControlComponent(arg0) {
  let onRefresh;
  let scrollableGesture;
  ({ onRefresh, scrollableGesture } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  let dependencyMap;
  let iter;
  const tmp4 = iter(scrollableGesture(5352).BottomSheetDraggableContext);
  dependencyMap = tmp4;
  let obj = scrollableGesture(5345);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  iter = bottomSheetInternal.animatedScrollableState;
  if (!tmp4) {
    if (bottomSheetInternal.enableContentPanningGesture) {
      throw "'BottomSheetRefreshControl' cannot be used out of the BottomSheet!";
    }
  }
  const fn = function f() {
    return { enabled: iter.value === scrollableGesture(_undefined[6]).SCROLLABLE_STATE.UNLOCKED };
  };
  obj = { animatedScrollableState: iter, SCROLLABLE_STATE: tmp2(5341).SCROLLABLE_STATE };
  fn.__closure = obj;
  fn.__workletHash = 8403038560398;
  fn.__initData = closure_6;
  let items = [iter.value];
  const animatedProps = scrollableGesture(1606).useAnimatedProps(fn, items);
  const items1 = [tmp4, scrollableGesture];
  const tmp7 = callback(() => {
    let result;
    if (_undefined) {
      const Gesture = scrollableGesture(_undefined[7]).Gesture;
      const NativeResult = Gesture.Native();
      const simultaneousWithExternalGesture = NativeResult.simultaneousWithExternalGesture;
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(_undefined.toGestureArray(), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(scrollableGesture.toGestureArray(), arraySpreadResult);
      result = HermesBuiltin.apply(items, NativeResult).shouldCancelWhenOutside(true);
      const applyResult = HermesBuiltin.apply(items, NativeResult);
    }
    return result;
  }, items1);
  if (tmp7) {
    obj = { gesture: null, children: null };
    obj[0] = tmp7;
    const obj1 = {};
    const merged1 = Object.assign(merged);
    obj1.onRefresh = onRefresh;
    obj1.animatedProps = animatedProps;
    obj[1] = tmp8(closure_5, obj1);
    let tmp8Result = tmp8(tmp2(5368).GestureDetector, obj);
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
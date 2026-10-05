// _runtime/metro/06330__.js
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";
import GESTURE_SOURCE from "../06113_GESTURE_SOURCE.js";
import LegacyBaseButton from "../06140_LegacyBaseButton.js";
import react_mod from "../00019_react.js";
import cancelAnimation from "01643__.js";

let dependencyMap;

let c2;
let c3;
let memo;
let react = react_mod;
({ useContext: c2, useMemo: c3, memo } = react);
react = react_mod;
const RefreshControl = react_native.RefreshControl;
const jsx = Fragment.jsx;
let closure_5 = cancelAnimation.createAnimatedComponent(RefreshControl);
const __initData = {
  code: "function pnpm_BottomSheetRefreshControlAndroidTsx1(){const{animatedScrollableState,SCROLLABLE_STATE}=this.__closure;return{enabled:animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED};}",
};
const memoResult = memo(function BottomSheetRefreshControlComponent(arg0) {
  let closure_1;
  let onRefresh;
  let scrollableGesture;
  let tmp8Result;
  ({ onRefresh, scrollableGesture } = arg0);
  const merged = Object.assign(arg0, Object.assign({ onRefresh: 0, scrollableGesture: 0 }));
  let iter;
  const tmp4 = iter(scrollableGesture(6124).BottomSheetDraggableContext);
  dependencyMap = tmp4;
  let obj = scrollableGesture(6117);
  const bottomSheetInternal = obj.useBottomSheetInternal();
  iter = bottomSheetInternal.animatedScrollableState;
  if (!tmp4) {
    if (bottomSheetInternal.enableContentPanningGesture) {
      throw "'BottomSheetRefreshControl' cannot be used out of the BottomSheet!";
    }
  }
  const fn = function f() {
    const obj = { enabled: iter.value === GESTURE_SOURCE.SCROLLABLE_STATE.UNLOCKED };
    return obj;
  };
  const tmp2Result = scrollableGesture(1643);
  fn.__closure = { animatedScrollableState: iter, SCROLLABLE_STATE: scrollableGesture(6113).SCROLLABLE_STATE };
  fn.__workletHash = 8403038560398;
  fn.__initData = __initData;
  let items = [iter.value];
  ({ animatedScrollableState: iter, SCROLLABLE_STATE: scrollableGesture(6113).SCROLLABLE_STATE });
  const animatedProps = tmp2Result.useAnimatedProps(fn, items);
  const items1 = [tmp4, scrollableGesture];
  const tmp7 = closure_3(() => {
    let result;
    if (closure_1) {
      const Gesture = LegacyBaseButton.Gesture;
      const NativeResult = Gesture.Native();
      const simultaneousWithExternalGesture = NativeResult.simultaneousWithExternalGesture;
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, closure_1.toGestureArray(), 0);
      HermesBuiltin.arraySpread(items, scrollableGesture.toGestureArray(), arraySpreadResult);
      const applyResult = HermesBuiltin.apply(simultaneousWithExternalGesture, items, NativeResult);
      result = applyResult.shouldCancelWhenOutside(true);
    }
    return result;
  }, items1);
  if (tmp7) {
    const GestureDetector = scrollableGesture(6140).GestureDetector;
    const merged1 = Object.assign(merged);
    tmp8Result = <GestureDetector gesture={tmp7}>{null}</GestureDetector>;
  } else {
    const merged2 = Object.assign(merged);
    tmp8Result = <closure_5 onRefresh={onRefresh} animatedProps={animatedProps} />;
  }
  return tmp8Result;
});
memoResult.displayName = "BottomSheetRefreshControl";

export default memoResult;

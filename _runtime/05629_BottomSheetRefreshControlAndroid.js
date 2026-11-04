// === Module 5629: BottomSheetRefreshControlAndroid ===

// Module 5629 (BottomSheetRefreshControlAndroid)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5428 */;
import noop_mod from "module_19" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;

const require = globalThis.__r;

let noop = noop_mod;
({ useContext: c2, useMemo: c3, memo } = noop);
let noop = noop_mod;
const jsx = jsxProd.jsx;
let closure_5 = module_1652.createAnimatedComponent(_mod17.RefreshControl);
let closure_6 = { code: "(function pnpm_BottomSheetRefreshControlAndroidTsx1(){let[animatedScrollableState,SCROLLABLE_STATE]=this.__closure;return{enabled:animatedScrollableState.value===SCROLLABLE_STATE.UNLOCKED};})" };
const memoResult = memo(function BottomSheetRefreshControlComponent(arg0) {
  ({ onRefresh, scrollableGesture } = arg0);
  _require = scrollableGesture;
  const merged = Object.assign(arg0, Object.assign({ onRefresh: 0, scrollableGesture: 0 }));
  const tmp4 = closure_2(require("module_5412").BottomSheetDraggableContext);
  dependencyMap = tmp4;
  const bottomSheetInternal = require("module_5405").useBottomSheetInternal();
  if (!tmp4) {
    if (bottomSheetInternal.enableContentPanningGesture) {
      throw "'BottomSheetRefreshControl' cannot be used out of the BottomSheet!";
    }
  }
  const obj = require("module_5405");
  items = [closure_6, bottomSheetInternal.animatedScrollableState, require("value2").SCROLLABLE_STATE];
  _require = undefined;
  dependencyMap = undefined;
  [tmp6, tmp7, tmp8] = items;
  function pnpm_BottomSheetRefreshControlAndroidTsx1() {
    return { enabled: _undefined.value === _undefined2.UNLOCKED };
  }
  const items1 = [tmp7, tmp8];
  pnpm_BottomSheetRefreshControlAndroidTsx1.__closure = items1;
  pnpm_BottomSheetRefreshControlAndroidTsx1.__workletHash = 14408881775319;
  pnpm_BottomSheetRefreshControlAndroidTsx1.__initData = tmp6;
  const items2 = [bottomSheetInternal.animatedScrollableState.value];
  const animatedProps = require("module_1652").useAnimatedProps(pnpm_BottomSheetRefreshControlAndroidTsx1, items2);
  const items3 = [tmp4, scrollableGesture];
  const tmp10 = closure_3(() => {
    let result;
    if (_undefined2) {
      const Gesture = LegacyBaseButton.Gesture;
      const NativeResult = Gesture.Native();
      const simultaneousWithExternalGesture = NativeResult.simultaneousWithExternalGesture;
      items = [];
      HermesBuiltin.arraySpread(_undefined.toGestureArray(), HermesBuiltin.arraySpread(_undefined2.toGestureArray(), 0));
      const arraySpreadResult = HermesBuiltin.arraySpread(_undefined2.toGestureArray(), 0);
      result = HermesBuiltin.apply(items, NativeResult).shouldCancelWhenOutside(true);
      const applyResult = HermesBuiltin.apply(items, NativeResult);
    }
    return result;
  }, items3);
  if (tmp10) {
    const obj2 = { gesture: tmp10, children: null };
    const obj3 = {};
    const merged1 = Object.assign(merged);
    obj3.onRefresh = onRefresh;
    obj3.animatedProps = animatedProps;
    obj2.children = <closure_5 />;
    let tmp11Result = jsx(tmp2(5428).GestureDetector, { gesture: tmp10, children: null });
  } else {
    const obj4 = {};
    const merged2 = Object.assign(merged);
    obj4.onRefresh = onRefresh;
    obj4.animatedProps = animatedProps;
    tmp11Result = <closure_5 />;
  }
  return tmp11Result;
});
memoResult.displayName = "BottomSheetRefreshControl";

export default memoResult;
// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles((height) => {
  let obj = { row: null, rowInner: null, rowHeaderWrapper: null, placeholderAvatar: null, placeholderText: null };
  obj = { paddingHorizontal: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", height };
  obj.row = obj;
  obj = { marginHorizontal: nativeDefault.space.PX_16, flex: 1 };
  obj.rowInner = obj;
  obj.rowHeaderWrapper = { alignItems: "center", flexDirection: "row" };
  const size = {
    width: nativeDefault.space.PX_32,
    height: nativeDefault.space.PX_32,
    borderRadius: nativeDefault.radii.lg,
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  };
  obj.placeholderAvatar = size;
  obj.placeholderText = {
    height: 20,
    borderRadius: nativeDefault.radii.sm,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  };
  return obj;
});
const __initData = {
  code: "function UserPlaceholderRowTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx",
);

export default noop.memo(function UserPlaceholderRow(animate) {
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  ({ height, row } = animate);
  if (height === undefined) {
    height = flag(576).space.PX_48;
  }
  let sharedValue;
  flag = undefined;
  const tmp3 = closure_8(height);
  let obj = sharedValue(4296);
  sharedValue = obj.useSharedValue(1);
  let obj1 = sharedValue(504);
  const items = [AccessibilityStore];
  if (flag) {
    flag = !obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  }
  const items1 = [flag, sharedValue];
  const effect = noop.useEffect(() => {
    if (flag) {
      const obj2 = ReanimatedRexport;
      let obj = { duration: 2 * timingPresets.timingSlowDuration };
      const withTimingResult = timing.withTiming(0.3, obj);
      obj = { duration: 2 * timingPresets.timingSlowDuration };
      const result = set(obj.withRepeat(obj2.withSequence(withTimingResult, timing.withTiming(1, obj)), -1, true));
    } else {
      const result1 = set(1);
    }
  }, items1);
  const fn = function v() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10137317865125;
  fn.__initData = __initData;
  const animatedStyle = sharedValue(4296).useAnimatedStyle(fn);
  obj = { style: null, collapsable: false, children: null };
  const items2 = [tmp3.row, animatedStyle];
  obj.style = items2;
  obj = { style: tmp3.placeholderAvatar };
  const items3 = [closure_6(View, obj)];
  obj1 = { style: tmp3.rowInner, children: null };
  let obj2 = { style: tmp3.rowHeaderWrapper, children: null };
  let obj3 = { style: null };
  const items4 = [tmp3.placeholderText];
  const obj4 = { width: null };
  let result = 10000 * Math.sin(row);
  obj4.width = "" + 40 * (result - Math.floor(result)) + 40 + "%";
  items4[1] = obj4;
  obj3.style = items4;
  obj2.children = closure_6(View, obj3);
  obj1.children = closure_6(View, obj2);
  items3[1] = closure_6(View, obj1);
  obj.children = items3;
  return closure_7(flag(4296).View, obj);
});

// === Module 9273: UserPlaceholderRow ===

// Module 9273 (UserPlaceholderRow)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4563 */;
import timing from "timing" /* 4830 */;
import timingPresets from "timingPresets" /* 4833 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles((height) => {
  const obj = { row: { paddingHorizontal: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", height }, rowInner: null, rowHeaderWrapper: null, placeholderAvatar: null, placeholderText: null };
  const obj2 = { paddingHorizontal: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", height };
  obj.rowInner = { marginHorizontal: nativeDefault.space.PX_16, flex: 1 };
  obj.rowHeaderWrapper = { alignItems: "center", flexDirection: "row" };
  const size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.placeholderAvatar = size;
  const obj3 = { marginHorizontal: nativeDefault.space.PX_16, flex: 1 };
  obj.placeholderText = { height: 20, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  return obj;
});
const __initData = { code: "function UserPlaceholderRowTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx");

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
  sharedValue = sharedValue(4563).useSharedValue(1);
  let obj = sharedValue(4563);
  const tmp4 = sharedValue;
  const items = [AccessibilityStore];
  if (flag) {
    flag = !obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  }
  const items1 = [flag, sharedValue];
  const effect = noop.useEffect(() => {
    if (flag) {
      const obj = ReanimatedRexport;
      const obj2 = ReanimatedRexport;
      const obj4 = { duration: 2 * timingPresets.timingSlowDuration };
      const withTimingResult = timing.withTiming(0.3, obj4);
      const obj6 = { duration: 2 * timingPresets.timingSlowDuration };
      const result = set(obj.withRepeat(obj2.withSequence(withTimingResult, timing.withTiming(1, obj6)), -1, true));
    } else {
      const result1 = set(1);
    }
  }, items1);
  obj2 = sharedValue(504);
  const fn = function v() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10137317865125;
  fn.__initData = __initData;
  const animatedStyle = tmp4(4563).useAnimatedStyle(fn);
  let obj3 = { style: null, collapsable: false, children: null };
  const items2 = [tmp3.row, animatedStyle];
  obj3.style = items2;
  const items3 = [closure_6(View, { style: tmp3.placeholderAvatar }), ];
  let obj5 = { style: tmp3.rowInner, children: null };
  let obj6 = { style: tmp3.rowHeaderWrapper, children: null };
  const obj7 = { style: null };
  const items4 = [tmp3.placeholderText, ];
  const obj8 = { width: null };
  let result = 10000 * Math.sin(row);
  obj8.width = "" + 40 * (result - Math.floor(result)) + 40 + "%";
  items4[1] = obj8;
  obj7.style = items4;
  obj6.children = closure_6(View, obj7);
  obj5.children = closure_6(View, obj6);
  items3[1] = closure_6(View, obj5);
  obj3.children = items3;
  return closure_7(flag(4563).View, obj3);
});
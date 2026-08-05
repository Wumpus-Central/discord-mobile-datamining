import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles((height) => {
  let obj = { row: null, rowInner: null, rowHeaderWrapper: null, placeholderAvatar: null, placeholderText: null };
  obj = { paddingHorizontal: Themes.space.PX_16, flexDirection: "row", alignItems: "center", height };
  obj[0] = obj;
  obj = { marginHorizontal: Themes.space.PX_16, flex: 1 };
  obj[1] = obj;
  obj[2] = { alignItems: "center", flexDirection: "row" };
  obj[3] = { width: Themes.space.PX_32, height: Themes.space.PX_32, borderRadius: Themes.radii.lg, overflow: "hidden", backgroundColor: Themes.colors.BORDER_SUBTLE };
  const obj1 = { width: Themes.space.PX_32, height: Themes.space.PX_32, borderRadius: Themes.radii.lg, overflow: "hidden", backgroundColor: Themes.colors.BORDER_SUBTLE };
  obj[4] = { height: 20, borderRadius: Themes.radii.sm, backgroundColor: Themes.colors.BORDER_SUBTLE };
  return obj;
});
let closure_9 = { code: "function UserPlaceholderRowTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const memoResult = importAllResult.memo(function UserPlaceholderRow(animate) {
  let height;
  let row;
  let flag = animate.animate;
  if (flag === undefined) {
    flag = true;
  }
  ({ height, row } = animate);
  if (height === undefined) {
    height = flag(712).space.PX_48;
  }
  let sharedValue;
  flag = undefined;
  const tmp3 = callback3(height);
  let obj = sharedValue(4146);
  sharedValue = obj.useSharedValue(1);
  let obj1 = sharedValue(589);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  if (flag) {
    flag = !obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  }
  const items1 = [flag, sharedValue];
  const effect = importAllResult.useEffect(() => {
    if (flag) {
      let obj = sharedValue(outer1_2[6]);
      const obj2 = sharedValue(outer1_2[6]);
      obj = { duration: null };
      obj[0] = 2 * sharedValue(outer1_2[9]).timingSlowDuration;
      const obj3 = sharedValue(outer1_2[8]);
      const withTimingResult = sharedValue(outer1_2[8]).withTiming(0.3, obj);
      obj = { duration: null };
      obj[0] = 2 * sharedValue(outer1_2[9]).timingSlowDuration;
      const result = set(obj.withRepeat(obj2.withSequence(withTimingResult, sharedValue(outer1_2[8]).withTiming(1, obj)), -1, true));
      const obj5 = sharedValue(outer1_2[8]);
    } else {
      const result1 = set(1);
    }
  }, items1);
  const fn = function v() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 10137317865125;
  fn.__initData = closure_9;
  const animatedStyle = sharedValue(4146).useAnimatedStyle(fn);
  obj = { style: items2, collapsable: false, children: null };
  items2 = [tmp3.row, animatedStyle];
  obj = { style: tmp3.placeholderAvatar };
  const items3 = [callback(View, obj), ];
  obj1 = { style: tmp3.rowInner, children: null };
  let obj2 = { style: tmp3.rowHeaderWrapper, children: null };
  let obj3 = { style: null };
  const items4 = [tmp3.placeholderText, ];
  const obj4 = { width: null };
  let result = 10000 * Math.sin(row);
  obj4[0] = "" + 40 * (result - Math.floor(result)) + 40 + "%";
  items4[1] = obj4;
  obj3[0] = items4;
  obj2[1] = callback(View, obj3);
  obj1[1] = callback(View, obj2);
  items3[1] = callback(View, obj1);
  obj[2] = items3;
  return callback2(flag(4146).View, obj);
});
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx");

export default memoResult;
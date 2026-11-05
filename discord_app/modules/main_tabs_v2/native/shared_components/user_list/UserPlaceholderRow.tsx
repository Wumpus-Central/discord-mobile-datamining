// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5143);
let closure_8 = createStyles.createStyles((height) => {
  const obj = {
    row: { paddingHorizontal: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", height },
    rowInner: null,
    rowHeaderWrapper: null,
    placeholderAvatar: null,
    placeholderText: null,
  };
  const obj2 = { paddingHorizontal: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", height };
  obj.rowInner = { marginHorizontal: nativeDefault.space.PX_16, flex: 1 };
  obj.rowHeaderWrapper = { alignItems: "center", flexDirection: "row" };
  const size = {
    width: nativeDefault.space.PX_32,
    height: nativeDefault.space.PX_32,
    borderRadius: nativeDefault.radii.lg,
    overflow: "hidden",
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  };
  obj.placeholderAvatar = size;
  const obj3 = { marginHorizontal: nativeDefault.space.PX_16, flex: 1 };
  obj.placeholderText = {
    height: 20,
    borderRadius: nativeDefault.radii.sm,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  };
  return obj;
});
let closure_9 = {
  code: "(function UserPlaceholderRowTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
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
    height = flag(575).space.PX_48;
  }
  _require = undefined;
  flag = undefined;
  const tmp3 = closure_8(height);
  const sharedValue = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(1);
  _require = sharedValue;
  let obj = require("../../../../../../_runtime/metro/01652__.js");
  const tmp4 = _require;
  items = [AccessibilityStore];
  if (flag) {
    flag = !obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  }
  const items1 = [flag, sharedValue];
  const effect = noop.useEffect(() => {
    if (flag) {
      const obj = _mod1652;
      const obj2 = _mod1652;
      const obj4 = { duration: 2 * timingPresets.timingSlowDuration };
      const withTimingResult = timing_timing.withTiming(0.3, obj4);
      const obj6 = { duration: 2 * timingPresets.timingSlowDuration };
      const result = set(
        obj.withRepeat(obj2.withSequence(withTimingResult, timing_timing.withTiming(1, obj6)), -1, true),
      );
    } else {
      const result1 = set(1);
    }
  }, items1);
  obj2 = require("initialize");
  const items2 = [closure_9, sharedValue];
  _require = undefined;
  [tmp8, tmp9] = items2;
  class UserPlaceholderRowTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items3 = [tmp9];
  UserPlaceholderRowTsx1.__closure = items3;
  UserPlaceholderRowTsx1.__workletHash = 5854204937948;
  UserPlaceholderRowTsx1.__initData = tmp8;
  const animatedStyle = tmp4(1652).useAnimatedStyle(UserPlaceholderRowTsx1);
  let obj3 = { style: null, collapsable: false, children: null };
  const items4 = [tmp3.row, animatedStyle];
  obj3.style = items4;
  const items5 = [closure_6(View, { style: tmp3.placeholderAvatar })];
  let obj5 = { style: tmp3.rowInner, children: null };
  let obj6 = { style: tmp3.rowHeaderWrapper, children: null };
  const obj7 = { style: null };
  const items6 = [tmp3.placeholderText];
  const obj8 = { width: null };
  let result = 10000 * Math.sin(row);
  obj8.width = "" + 40 * (result - Math.floor(result)) + 40 + "%";
  items6[1] = obj8;
  obj7.style = items6;
  obj6.children = closure_6(View, obj7);
  obj5.children = closure_6(View, obj6);
  items5[1] = closure_6(View, obj5);
  obj3.children = items5;
  return closure_7(flag(1652).View, obj3);
});

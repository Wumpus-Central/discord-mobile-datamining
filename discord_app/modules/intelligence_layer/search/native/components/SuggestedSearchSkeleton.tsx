// discord_app/modules/intelligence_layer/search/native/components/SuggestedSearchSkeleton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5243);
const obj2 = {
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingVertical: fn(9000).SEARCH_ROW_TAP_STATE_PADDING,
  },
  icon: null,
  labels: null,
  line: null,
};
let size = {
  width: 18,
  height: 18,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
  marginRight: nativeDefault.space.PX_12,
};
obj2.icon = size;
obj2.labels = { flex: 1, height: fn(14633).SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT, justifyContent: "center" };
const size1 = {
  height: 16,
  width: "72%",
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.line = size1;
let closure_7 = createStyles.createStyles(obj2);
let closure_8 = {
  code: "(function SuggestedSearchSkeletonTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/intelligence_layer/search/native/components/SuggestedSearchSkeleton.tsx",
);

export default function SuggestedSearchSkeleton() {
  const tmp = closure_7();
  const sharedValue = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(0.4);
  _require = sharedValue;
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = _mod1652;
    const result = _undefined.set(obj.withRepeat(timing_timing.withTiming(1, { duration: 700 }), -1, true));
  }, items);
  let obj = require("../../../../../../_runtime/metro/01652__.js");
  const items1 = [closure_8, sharedValue];
  _require = undefined;
  [tmp5, tmp6] = items1;
  class SuggestedSearchSkeletonTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp6];
  SuggestedSearchSkeletonTsx1.__closure = items2;
  SuggestedSearchSkeletonTsx1.__workletHash = 13808253704974;
  SuggestedSearchSkeletonTsx1.__initData = tmp5;
  const animatedStyle = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    SuggestedSearchSkeletonTsx1,
  );
  const obj3 = { style: null, "aria-hidden": true, children: null };
  const items3 = [tmp.row, animatedStyle];
  obj3.style = items3;
  const items4 = [closure_5(View, { style: tmp.icon })];
  const obj5 = { style: tmp.labels, children: closure_5(View, { style: tmp.line }) };
  items4[1] = closure_5(View, obj5);
  obj3.children = items4;
  return closure_6(_modDef1652.View, obj3);
}

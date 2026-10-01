// === Module 16761: SuggestedSearchSkeleton ===

// Module 16761 (SuggestedSearchSkeleton)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4595 */;
import timing from "timing" /* 4846 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4845);
const obj2 = { row: { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: fn(7477).SEARCH_ROW_TAP_STATE_PADDING }, icon: null, labels: null, line: null };
let size = { width: 18, height: 18, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginRight: nativeDefault.space.PX_12 };
obj2.icon = size;
obj2.labels = { flex: 1, height: fn(12058).SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT, justifyContent: "center" };
const size1 = { height: 16, width: "72%", borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.line = size1;
let closure_7 = createStyles.createStyles(obj2);
const __initData = { code: "function SuggestedSearchSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchSkeleton.tsx");

export default function SuggestedSearchSkeleton() {
  const tmp = closure_7();
  sharedValue = sharedValue(4595).useSharedValue(0.4);
  const items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 700 }), -1, true));
  }, items);
  let obj = sharedValue(4595);
  const fn = function l() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 9760194902231;
  fn.__initData = __initData;
  const animatedStyle = sharedValue(4595).useAnimatedStyle(fn);
  const obj3 = { style: null, "aria-hidden": true, children: null };
  const items1 = [tmp.row, animatedStyle];
  obj3.style = items1;
  const items2 = [closure_5(View, { style: tmp.icon }), ];
  const obj5 = { style: tmp.labels, children: closure_5(View, { style: tmp.line }) };
  items2[1] = closure_5(View, obj5);
  obj3.children = items2;
  return closure_6(ReanimatedRexportDefault.View, obj3);
};
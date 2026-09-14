// === Module 8031: ConversationPreviewSkeleton ===

// Module 8031 (ConversationPreviewSkeleton)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4373 */;
import timing from "timing" /* 4637 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_5 = fn(7700).MOBILE_PREVIEW_MESSAGE_COUNT;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4636);
const obj2 = { row: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_4 }, rowSpacing: null, avatar: null, lines: null, lineName: null, lineText: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_4 };
obj2.rowSpacing = { marginTop: nativeDefault.space.PX_26 };
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.avatar = size;
const obj4 = { marginTop: nativeDefault.space.PX_26 };
obj2.lines = { flex: 1, gap: nativeDefault.space.PX_4 };
const size1 = { height: 10, width: "35%", borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj2.lineName = size1;
const obj5 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj2.lineText = { height: 10, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let closure_8 = createStyles.createStyles(obj2);
const __initData = { code: "function ConversationPreviewSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewSkeleton.tsx");

export default function ConversationPreviewSkeleton() {
  _require = closure_8();
  const sharedValue = require("ReanimatedRexport").useSharedValue(0.4);
  let items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 700 }), -1, true));
  }, items);
  let obj = require("ReanimatedRexport");
  const fn = function p() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 11432452203963;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  let obj3 = {
    style: animatedStyle,
    "aria-hidden": true,
    children: Array.from({ length: closure_5 }, (arg0, arg1) => {
      const items = [row.row, ];
      const obj = { style: items, children: null };
      items[1] = arg1 > 0 && row.rowSpacing;
      const items1 = [timestampProducer(View, { style: row.avatar }), ];
      const obj3 = { style: row.lines, children: null };
      const items2 = [timestampProducer(View, { style: row.lineName }), timestampProducer(View, { style: row.lineText })];
      obj3.children = items2;
      items1[1] = React5(View, obj3);
      obj.children = items1;
      return React5(View, obj, arg1);
    })
  };
  return closure_6(sharedValue(4373).View, obj3);
};
// discord_app/modules/conversations/components/native/ConversationPreviewSkeleton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_5 = fn(7598).MOBILE_PREVIEW_MESSAGE_COUNT;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { row: null, rowSpacing: null, avatar: null, lines: null, lineName: null, lineText: null };
createStyles = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_4,
};
createStyles.row = createStyles;
createStyles.rowSpacing = { marginTop: nativeDefault.space.PX_26 };
let size = {
  width: 24,
  height: 24,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
createStyles.avatar = size;
const obj1 = { marginTop: nativeDefault.space.PX_26 };
createStyles.lines = { flex: 1, gap: nativeDefault.space.PX_4 };
const size1 = {
  height: 10,
  width: "35%",
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
createStyles.lineName = size1;
const obj2 = { flex: 1, gap: nativeDefault.space.PX_4 };
createStyles.lineText = {
  height: 10,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
let closure_8 = createStyles.createStyles(createStyles);
const __initData = {
  code: "function ConversationPreviewSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewSkeleton.tsx");

export default function ConversationPreviewSkeleton() {
  _require = closure_8();
  let obj = require("ReanimatedRexport");
  const sharedValue = obj.useSharedValue(0.4);
  let items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = ReanimatedRexport;
    const result = sharedValue.set(obj.withRepeat(timing.withTiming(1, { duration: 700 }), -1, true));
  }, items);
  const fn = function p() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 11432452203963;
  fn.__initData = __initData;
  const animatedStyle = require("ReanimatedRexport").useAnimatedStyle(fn);
  obj = { style: animatedStyle, "aria-hidden": true, children: null };
  obj = { length: closure_5 };
  obj.children = Array.from(obj, (arg0, arg1) => {
    const items = [row.row];
    let obj = { style: items, children: null };
    items[1] = arg1 > 0 && row.rowSpacing;
    obj = { style: row.avatar };
    const items1 = [timestampProducer(View, obj)];
    obj = { style: row.lines, children: null };
    const items2 = [timestampProducer(View, { style: row.lineName }), timestampProducer(View, { style: row.lineText })];
    obj.children = items2;
    items1[1] = React5(View, obj);
    obj.children = items1;
    return React5(View, obj, arg1);
  });
  return closure_6(sharedValue(4296).View, obj);
}

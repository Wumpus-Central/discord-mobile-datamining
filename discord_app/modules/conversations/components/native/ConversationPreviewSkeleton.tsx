// === Module 9155: ConversationPreviewSkeleton ===

// Module 9155 (ConversationPreviewSkeleton)
import nativeDefault from "native" /* 575 */;
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
let closure_5 = fn(5957).MOBILE_PREVIEW_MESSAGE_COUNT;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5306);
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
let closure_9 = { code: "(function ConversationPreviewSkeletonTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})" };
size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewSkeleton.tsx");

export default function ConversationPreviewSkeleton() {
  _require = closure_8();
  const sharedValue = require("module_1655").useSharedValue(0.4);
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    const obj = _mod1655;
    const result = sharedValue.set(obj.withRepeat(timing_timing.withTiming(1, { duration: 700 }), -1, true));
  }, items);
  let obj = require("module_1655");
  let items1 = [closure_9, sharedValue];
  _require = undefined;
  [tmp4, tmp5] = items1;
  class ConversationPreviewSkeletonTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  let items2 = [tmp5];
  ConversationPreviewSkeletonTsx1.__closure = items2;
  ConversationPreviewSkeletonTsx1.__workletHash = 5339375401250;
  ConversationPreviewSkeletonTsx1.__initData = tmp4;
  const animatedStyle = require("module_1655").useAnimatedStyle(ConversationPreviewSkeletonTsx1);
  let obj3 = {
    style: animatedStyle,
    "aria-hidden": true,
    children: Array.from({ length: closure_5 }, (arg0, id) => {
      items = [_undefined.row, ];
      const obj = { style: items, children: null };
      items[1] = id > 0 && _undefined.rowSpacing;
      const items1 = [timestampProducer(View, { style: _undefined.avatar }), ];
      const obj3 = { style: _undefined.lines, children: null };
      const items2 = [timestampProducer(View, { style: _undefined.lineName }), timestampProducer(View, { style: _undefined.lineText })];
      obj3.children = items2;
      items1[1] = metroImportDefault(View, obj3);
      obj.children = items1;
      return metroImportDefault(View, obj, id);
    })
  };
  return closure_6(sharedValue(1655).View, obj3);
};
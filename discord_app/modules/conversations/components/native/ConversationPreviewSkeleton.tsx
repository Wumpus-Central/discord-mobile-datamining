import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";
// discord_app/modules/conversations/components/native/ConversationPreviewSkeleton.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { MOBILE_PREVIEW_MESSAGE_COUNT as closure_5 } from "CONVERSATION_COLORS";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { row: null, rowSpacing: null, avatar: null, lines: null, lineName: null, lineText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: require("Themes").space.PX_26 };
const obj1 = { marginTop: require("Themes").space.PX_26 };
createCacheKey[2] = { width: 24, height: 24, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
const obj2 = { width: 24, height: 24, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
createCacheKey[3] = { flex: 1, gap: require("Themes").space.PX_4 };
const obj3 = { flex: 1, gap: require("Themes").space.PX_4 };
createCacheKey[4] = { height: 10, width: "35%", borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
const obj4 = { height: 10, width: "35%", borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
createCacheKey[5] = { height: 10, borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_9 = { code: "function ConversationPreviewSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const obj5 = { height: 10, borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
let result = require("CONVERSATION_COLORS").fileFinishedImporting("modules/conversations/components/native/ConversationPreviewSkeleton.tsx");

export default function ConversationPreviewSkeleton() {
  const _require = createCacheKey();
  let obj = _ReanimatedRexport;
  const sharedValue = obj.useSharedValue(0.4);
  let items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = lib(outer1_2[6]);
    const result = sharedValue.set(obj.withRepeat(lib(outer1_2[7]).withTiming(1, { duration: 700 }), -1, true));
  }, items);
  const fn = function p() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 11432452203963;
  fn.__initData = closure_9;
  const animatedStyle = _ReanimatedRexport.useAnimatedStyle(fn);
  obj = { style: animatedStyle, "aria-hidden": true, children: null };
  obj = { length: closure_5 };
  obj[2] = Array.from(obj, (arg0, arg1) => {
    const items = [lib.row, ];
    let obj = { style: items, children: null };
    items[1] = arg1 > 0 && lib.rowSpacing;
    obj = { style: tmp3.avatar };
    const items1 = [outer1_6(outer1_4, obj), ];
    obj = { style: tmp3.lines, children: null };
    const items2 = [outer1_6(outer1_4, { style: lib.lineName }), outer1_6(outer1_4, { style: lib.lineText })];
    obj[1] = items2;
    items1[1] = outer1_7(outer1_4, obj);
    obj[1] = items1;
    return outer1_7(outer1_4, obj, arg1);
  });
  return callback(sharedValue(4146).View, obj);
};
// discord_app/modules/conversations/components/native/ConversationPreviewSkeleton.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { MOBILE_PREVIEW_MESSAGE_COUNT as closure_5 } from "../../ConversationConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { ReanimatedRexport } from "../../../reanimated/ReanimatedRexport.tsx";

const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { row: null, rowSpacing: null, avatar: null, lines: null, lineName: null, lineText: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: ThemesDefault.space.PX_26 };
const obj1 = { marginTop: ThemesDefault.space.PX_26 };
createCacheKey[2] = { width: 24, height: 24, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
const obj2 = { width: 24, height: 24, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
createCacheKey[3] = { flex: 1, gap: ThemesDefault.space.PX_4 };
const obj3 = { flex: 1, gap: ThemesDefault.space.PX_4 };
createCacheKey[4] = { height: 10, width: "35%", borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
const obj4 = { height: 10, width: "35%", borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
createCacheKey[5] = { height: 10, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let closure_9 = { code: "function ConversationPreviewSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const obj5 = { height: 10, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
let result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationPreviewSkeleton.tsx");

export default function ConversationPreviewSkeleton() {
  const _require = callback2();
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(0.4);
  let items = [sharedValue];
  const effect = React.useEffect(() => {
    const obj = lib(closure_1_2[6]);
    const result = sharedValue.set(obj.withRepeat(lib(closure_1_2[7]).withTiming(1, { duration: 700 }), -1, true));
  }, items);
  const fn = function p() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 11432452203963;
  fn.__initData = closure_9;
  const animatedStyle = require("../../../reanimated/ReanimatedRexport.tsx").useAnimatedStyle(fn);
  obj = {
    style: animatedStyle,
    "aria-hidden": true,
    children: Array.from(obj, (arg0, arg1) => {
      const items = [lib.row, ];
      let obj = { style: items, children: null };
      items[1] = arg1 > 0 && lib.rowSpacing;
      obj = { style: tmp3.avatar };
      const items1 = [closure_1_6(closure_1_4, obj), ];
      obj = { style: tmp3.lines, children: null };
      const items2 = [closure_1_6(closure_1_4, { style: lib.lineName }), closure_1_6(closure_1_4, { style: lib.lineText })];
      obj[1] = items2;
      items1[1] = closure_1_7(closure_1_4, obj);
      obj[1] = items1;
      return closure_1_7(closure_1_4, obj, arg1);
    })
  };
  obj = { length: closure_5 };
  return callback(sharedValue(4120).View, obj);
};
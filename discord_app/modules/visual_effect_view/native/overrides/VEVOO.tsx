// discord_app/modules/visual_effect_view/native/overrides/VEVOO.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../devtools/dev_settings/DevSettingsStore.tsx";
import { DEV_WIDGET_SIZE } from "../../../devtools/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
function VisualEffectViewOverrideOverlay_(arg0) {
  const x = arg0.x;
  const _require = x;
  const y = arg0.y;
  importDefault = y;
  let PX_8;
  const tmp = callback3();
  PX_8 = importDefault(PX_8[6]).space.PX_8;
  let obj = _require(PX_8[7]);
  const fn = function _() {
    const obj = { top: null, left: null };
    const sum = closure_1.get() - PX_8 + closure_1_5;
    obj[0] = x(PX_8[8]).withSpring(sum, x(PX_8[9]).springUnclamped);
    const obj2 = x(PX_8[8]);
    const diff = x.get() - PX_8;
    obj[1] = x(PX_8[8]).withSpring(diff, x(PX_8[9]).springUnclamped);
    return obj;
  };
  obj = { withSpring: _require(PX_8[8]).withSpring, y, px8: PX_8, DEV_WIDGET_SIZE, springUnclamped: _require(PX_8[9]).springUnclamped, x };
  fn.__closure = obj;
  fn.__workletHash = 8104480272354;
  fn.__initData = closure_9;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [tmp.wrapper, animatedStyle];
  obj1 = { style: tmp.scrollView, children: null };
  let obj2 = { title: "Blur View Global Overrides", sectionBodyStyle: tmp.scrollViewContent, children: null };
  const items1 = [callback(importDefault(PX_8[11]), {}), callback(importDefault(PX_8[12]), {}), callback(importDefault(PX_8[13]), {})];
  obj2[2] = items1;
  obj1[1] = callback2(_require(PX_8[10]).FormSection, obj2);
  const items2 = [callback(ScrollView, obj1), ];
  const obj3 = { styles: tmp.close, type: "neutral", IconComponent: _require(PX_8[15]).XSmallIcon, onPress: arg0.onClose, accessibilityLabel: "Close" };
  items2[1] = callback(importDefault(PX_8[14]), obj3);
  obj[1] = items2;
  return callback2(importDefault(PX_8[7]).View, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const styles = createCacheKey.createStyles({ zeroPadding: { paddingVertical: 0, paddingHorizontal: 0 }, zeroPaddingVertical: { paddingVertical: 0 }, zeroPaddingHorizontal: { paddingHorizontal: 0 }, zeroHeight: { height: 0 }, enabledSwitchStyle: { alignSelf: "flex-start" } });
let obj = { wrapper: null, scrollView: null, scrollViewContent: null, close: null };
obj = { borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_660, borderRadius: ThemesDefault.radii.lg, position: "absolute", top: 0, left: 0, width: 300, height: 400 };
let merged = Object.assign(ThemesDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj[0] = obj;
createCacheKey = { borderRadius: ThemesDefault.radii.lg, paddingTop: ThemesDefault.space.PX_24, overflow: "hidden" };
obj[1] = createCacheKey;
createCacheKey = { paddingBottom: ThemesDefault.space.PX_24 };
obj[2] = createCacheKey;
const merged1 = Object.assign(ThemesDefault.shadows.SHADOW_LOW_HOVER);
obj[3] = { position: "absolute", right: ThemesDefault.space.PX_8, top: ThemesDefault.space.PX_8 };
let closure_8 = createCacheKey.createStyles(obj);
let closure_9 = { code: "function VEVOOTsx1(){const{withSpring,y,px8,DEV_WIDGET_SIZE,springUnclamped,x}=this.__closure;return{top:withSpring(y.get()-px8+DEV_WIDGET_SIZE,springUnclamped),left:withSpring(x.get()-px8,springUnclamped)};}" };
let obj3 = { position: "absolute", right: ThemesDefault.space.PX_8, top: ThemesDefault.space.PX_8 };
const memoResult = importAllResult.memo(function VisualEffectViewOverrideOverlay(arg0) {
  let obj = initialize;
  const items = [closure_4];
  let tmp = null;
  if (obj.useStateFromStores(items, () => closure_4.get("visual_effect_view_overrides"))) {
    obj = { onClose: null };
    obj[0] = function onClose() {
      callback(table[17]).toggle("visual_effect_view_overrides", false);
    };
    const merged = Object.assign(arg0);
    tmp = callback(VisualEffectViewOverrideOverlay_, obj);
  }
  return tmp;
});
const result = require("set").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOO.tsx");

export default memoResult;
export const useVisualEffectViewOverrideSharedStyles = styles;
// === Module 14924: VisualEffectViewOverrideOverlay_ ===

// Module 14924 (VisualEffectViewOverrideOverlay_)
import { ScrollView } from "toggle";
import getUserAgnosticState from "getUserAgnosticState";
import { DEV_WIDGET_SIZE } from "STORAGE_KEY_LOG_DISPATCHES";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let closure_6;
let error;
const require = arg1;
function VisualEffectViewOverrideOverlay_(arg0) {
  const x = arg0.x;
  const _require = x;
  const y = arg0.y;
  const importDefault = y;
  let PX_8;
  const tmp = callback3();
  PX_8 = importDefault(PX_8[6]).space.PX_8;
  let obj = _require(PX_8[7]);
  const fn = function _() {
    const obj = { top: null, left: null };
    const sum = closure_1.get() - PX_8 + outer1_5;
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
  const obj1 = { style: tmp.scrollView, children: null };
  let obj2 = { title: "Blur View Global Overrides", sectionBodyStyle: tmp.scrollViewContent, children: null };
  const items1 = [callback(importDefault(PX_8[11]), {}), callback(importDefault(PX_8[12]), {}), callback(importDefault(PX_8[13]), {})];
  obj2[2] = items1;
  obj1[1] = callback2(_require(PX_8[10]).FormSection, obj2);
  const items2 = [callback(ScrollView, obj1), ];
  const obj3 = { styles: tmp.close, type: "neutral", IconComponent: null, onPress: null, accessibilityLabel: "Close" };
  obj3[2] = _require(PX_8[15]).XSmallIcon;
  obj3[3] = arg0.onClose;
  items2[1] = callback(importDefault(PX_8[14]), obj3);
  obj[1] = items2;
  return callback2(importDefault(PX_8[7]).View, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const styles = createCacheKey.createStyles({ zeroPadding: { paddingVertical: 0, paddingHorizontal: 0 }, zeroPaddingVertical: { paddingVertical: 0 }, zeroPaddingHorizontal: { paddingHorizontal: 0 }, zeroHeight: { height: 0 }, enabledSwitchStyle: { alignSelf: "flex-start" } });
let obj = { wrapper: null, scrollView: null, scrollViewContent: null, close: null };
obj = { borderColor: require("Themes").colors.BORDER_SUBTLE, borderWidth: 1, backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_660, borderRadius: require("Themes").radii.lg, position: "absolute", top: 0, left: 0, width: 300, height: 400 };
let merged = Object.assign(require("Themes").shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj[0] = obj;
createCacheKey = { borderRadius: require("Themes").radii.lg, paddingTop: require("Themes").space.PX_24, overflow: "hidden" };
obj[1] = createCacheKey;
createCacheKey = { paddingBottom: require("Themes").space.PX_24 };
obj[2] = createCacheKey;
const merged1 = Object.assign(require("Themes").shadows.SHADOW_LOW_HOVER);
obj[3] = { position: "absolute", right: require("Themes").space.PX_8, top: require("Themes").space.PX_8 };
let closure_8 = createCacheKey.createStyles(obj);
let closure_9 = { code: "function VEVOOTsx1(){const{withSpring,y,px8,DEV_WIDGET_SIZE,springUnclamped,x}=this.__closure;return{top:withSpring(y.get()-px8+DEV_WIDGET_SIZE,springUnclamped),left:withSpring(x.get()-px8,springUnclamped)};}" };
let obj3 = { position: "absolute", right: require("Themes").space.PX_8, top: require("Themes").space.PX_8 };
const memoResult = importAllResult.memo(function VisualEffectViewOverrideOverlay(arg0) {
  let obj = require(589) /* initialize */;
  const items = [getUserAgnosticState];
  let tmp = null;
  if (obj.useStateFromStores(items, () => getUserAgnosticState.get("visual_effect_view_overrides"))) {
    obj = { onClose: null };
    obj[0] = function onClose() {
      callback(table[17]).toggle("visual_effect_view_overrides", false);
    };
    const merged = Object.assign(arg0);
    tmp = callback(VisualEffectViewOverrideOverlay_, obj);
  }
  return tmp;
});
const result = require("getUserAgnosticState").fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOO.tsx");

export default memoResult;
export const useVisualEffectViewOverrideSharedStyles = styles;
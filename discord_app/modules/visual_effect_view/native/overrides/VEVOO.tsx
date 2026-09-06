// discord_app/modules/visual_effect_view/native/overrides/VEVOO.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../../devtools/dev_settings/DevSettingsStore.tsx";

require = fn;
function VisualEffectViewOverrideOverlay_(arg0) {
  const x = arg0.x;
  _require = x;
  const y = arg0.y;
  importDefault = y;
  let PX_8;
  const tmp = closure_8();
  PX_8 = require("native").space.PX_8;
  let obj = require("ReanimatedRexport");
  const fn = function _() {
    const rect = { top: null, left: null };
    const sum = closure_1.get() - PX_8 + DEV_WIDGET_SIZE;
    rect.top = spring.withSpring(sum, springPresets.springUnclamped);
    const diff = closure_0.get() - PX_8;
    rect.left = spring.withSpring(diff, springPresets.springUnclamped);
    return rect;
  };
  const point = {
    withSpring: require("spring").withSpring,
    y,
    px8: PX_8,
    DEV_WIDGET_SIZE,
    springUnclamped: require("springPresets").springUnclamped,
    x,
  };
  fn.__closure = point;
  fn.__workletHash = 8104480272354;
  fn.__initData = __initData;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: null, children: null };
  const items = [tmp.wrapper, animatedStyle];
  obj.style = items;
  obj = { style: tmp.scrollView, children: null };
  const obj1 = { title: "Blur View Global Overrides", sectionBodyStyle: tmp.scrollViewContent, children: null };
  const items1 = [
    closure_6(require("VEVOOPropBlurAmount"), {}),
    closure_6(require("VEVOOPropTintColor"), {}),
    closure_6(require("VEVOOPropBlurEffectName"), {}),
  ];
  obj1.children = items1;
  obj.children = closure_7(require("Form").FormSection, obj1);
  const items2 = [closure_6(ScrollView, obj)];
  let obj2 = {
    styles: tmp.close,
    type: "neutral",
    IconComponent: require("XSmallIcon").XSmallIcon,
    onPress: arg0.onClose,
    accessibilityLabel: "Close",
  };
  items2[1] = closure_6(require("ActionButton"), obj2);
  obj.children = items2;
  return closure_7(require("ReanimatedRexport").View, obj);
}
const ScrollView = fn(17).ScrollView;
const DEV_WIDGET_SIZE = fn(574).DEV_WIDGET_SIZE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(4560);
const styles = createStyles.createStyles({
  zeroPadding: { paddingVertical: 0, paddingHorizontal: 0 },
  zeroPaddingVertical: { paddingVertical: 0 },
  zeroPaddingHorizontal: { paddingHorizontal: 0 },
  zeroHeight: { height: 0 },
  enabledSwitchStyle: { alignSelf: "flex-start" },
});
fn(4560);
let obj = { wrapper: null, scrollView: null, scrollViewContent: null, close: null };
let size = {
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_660,
  borderRadius: nativeDefault.radii.lg,
  position: "absolute",
  top: 0,
  left: 0,
  width: 300,
  height: 400,
};
let merged = Object.assign(nativeDefault.shadows.SHADOW_MOBILE_NAVIGATOR_X);
obj.wrapper = size;
obj = { borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_24, overflow: "hidden" };
obj.scrollView = obj;
createStyles = { paddingBottom: nativeDefault.space.PX_24 };
obj.scrollViewContent = createStyles;
let rect = { position: "absolute", right: nativeDefault.space.PX_8, top: nativeDefault.space.PX_8 };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
obj.close = rect;
let closure_8 = createStyles.createStyles(obj);
const __initData = {
  code: "function VEVOOTsx1(){const{withSpring,y,px8,DEV_WIDGET_SIZE,springUnclamped,x}=this.__closure;return{top:withSpring(y.get()-px8+DEV_WIDGET_SIZE,springUnclamped),left:withSpring(x.get()-px8,springUnclamped)};}",
};
size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOO.tsx");

export default noop.memo(function VisualEffectViewOverrideOverlay(arg0) {
  let obj = initialize;
  const items = [DevSettingsStore];
  let tmp = null;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("visual_effect_view_overrides"))) {
    obj = {
      onClose() {
        require("DevSettingsActions").toggle("visual_effect_view_overrides", false);
      },
    };
    const merged = Object.assign(arg0);
    tmp = timestampProducer(VisualEffectViewOverrideOverlay_, obj);
  }
  return tmp;
});
export const useVisualEffectViewOverrideSharedStyles = styles;

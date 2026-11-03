// discord_app/modules/visual_effect_view/native/overrides/VEVOO.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import springPresets from "../../../../design/animation/reanimated/spring/springPresets.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import ActionButtonDefault from "../../../../components_native/common/ActionButton.tsx";
import VEVOOPropBlurAmountDefault from "VEVOOPropBlurAmount.tsx";
import VEVOOPropTintColorDefault from "VEVOOPropTintColor.tsx";
import VEVOOPropBlurEffectNameDefault from "VEVOOPropBlurEffectName.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import DevSettingsStore from "../../../devtools/dev_settings/DevSettingsStore.tsx";

const require = globalThis.__r;
const _modDef1652 = _mod1652;

require = fn;
function VisualEffectViewOverrideOverlay_(arg0) {
  ({ onClose, x, y } = arg0);
  const tmp = closure_8();
  items = [
    closure_9,
    spring_spring.withSpring,
    y,
    nativeDefault.space.PX_8,
    DEV_WIDGET_SIZE,
    springPresets.springUnclamped,
    x,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = items;
  class VEVOOTsx1 {
    constructor() {
      rect = {
        top: closure_0(closure_1.get() - closure_2 + closure_3, closure_4),
        left: closure_0(closure_5.get() - closure_2, closure_4),
      };
      return rect;
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11];
  VEVOOTsx1.__closure = items1;
  VEVOOTsx1.__workletHash = 4442371406619;
  VEVOOTsx1.__initData = tmp5;
  const animatedStyle = _mod1652.useAnimatedStyle(VEVOOTsx1);
  const obj2 = { style: null, children: null };
  const items2 = [tmp.wrapper, animatedStyle];
  obj2.style = items2;
  const obj3 = { style: tmp.scrollView, children: null };
  const obj4 = { title: "Blur View Global Overrides", sectionBodyStyle: tmp.scrollViewContent, children: null };
  const items3 = [
    timestampProducer(VEVOOPropBlurAmountDefault, {}),
    timestampProducer(VEVOOPropTintColorDefault, {}),
    timestampProducer(VEVOOPropBlurEffectNameDefault, {}),
  ];
  obj4.children = items3;
  obj3.children = React5(Form.FormSection, obj4);
  const items4 = [timestampProducer(ScrollView, obj3)];
  const obj5 = { styles: tmp.close, type: "neutral", IconComponent: null, onPress: null, accessibilityLabel: "Close" };
  obj5.IconComponent = XSmallIcon.XSmallIcon;
  obj5.onPress = onClose;
  items4[1] = timestampProducer(ActionButtonDefault, obj5);
  obj2.children = items4;
  return React5(_modDef1652.View, obj2);
}
const ScrollView = fn(17).ScrollView;
const DEV_WIDGET_SIZE = fn(573).DEV_WIDGET_SIZE;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(5141);
const styles = createStyles.createStyles({
  zeroPadding: { paddingVertical: 0, paddingHorizontal: 0 },
  zeroPaddingVertical: { paddingVertical: 0 },
  zeroPaddingHorizontal: { paddingHorizontal: 0 },
  zeroHeight: { height: 0 },
  enabledSwitchStyle: { alignSelf: "flex-start" },
});
createStyles = fn(5141);
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
obj.scrollView = { borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_24, overflow: "hidden" };
let obj4 = { borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_24, overflow: "hidden" };
obj.scrollViewContent = { paddingBottom: nativeDefault.space.PX_24 };
let rect = { position: "absolute", right: nativeDefault.space.PX_8, top: nativeDefault.space.PX_8 };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
obj.close = rect;
let closure_8 = createStyles.createStyles(obj);
let closure_9 = {
  code: "(function VEVOOTsx1(){let[withSpring,y,px8,DEV_WIDGET_SIZE,springUnclamped,x]=this.__closure;return{top:withSpring(y.get()-px8+DEV_WIDGET_SIZE,springUnclamped),left:withSpring(x.get()-px8,springUnclamped)};})",
};
let obj5 = { paddingBottom: nativeDefault.space.PX_24 };
size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOO.tsx");

export default noop.memo(function VisualEffectViewOverrideOverlay(arg0) {
  items = [DevSettingsStore];
  let tmp = null;
  if (obj.useStateFromStores(items, () => DevSettingsStore.get("visual_effect_view_overrides"))) {
    const obj2 = {
      onClose() {
        require("DevSettingsActions").toggle("visual_effect_view_overrides", false);
      },
    };
    const merged = Object.assign(arg0);
    tmp = timestampProducer(VisualEffectViewOverrideOverlay_, obj2);
  }
  return tmp;
});
export const useVisualEffectViewOverrideSharedStyles = styles;

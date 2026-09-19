// discord_app/modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import ReanimatedNativeViewDefault from "../../../core/native/ReanimatedNativeView.tsx";
import VoicePanelHeaderGlassBlurDefault from "../shared/VoicePanelHeaderGlassBlur.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let obj = {
  titleWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    height: fn(12522).CONTROLS_DRAWER_HEADER_SIZE,
  },
  titlePill: { borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 },
  titlePillBG: null,
};
let obj3 = { borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 };
obj.titlePillBG = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
const __initData = {
  code: "function VoicePanelControlsDrawerTitleTsx1(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};}",
};
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx");

export default noop.memo(function VoicePanelControlsDrawerTitle(children) {
  let shown = children.shown;
  let flag = children.disablePill;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, blurStyle } = children);
  const tmp = closure_6();
  const sharedValue = ReanimatedRexport.useSharedValue(true);
  let backgroundColor = tmp.titlePillBG.backgroundColor;
  const fn = function p() {
    if (null != shown) {
      value = shown.get();
    } else {
      value = sharedValue.get();
    }
    backgroundColor = "transparent";
    if (value) {
      backgroundColor = "transparent";
    }
    return { backgroundColor };
  };
  fn.__closure = { shown, _shown: sharedValue, disablePill: flag, backgroundColor };
  fn.__workletHash = 14837285839887;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const obj3 = { style: null, children: null };
  const items = [tmp.titleWrapper, style];
  obj3.style = items;
  const tmp8 = NativeViewDefault;
  if (shown == null) {
    shown = sharedValue;
  }
  const items1 = [React4(VoicePanelHeaderGlassBlurDefault, { shown, style: StyleSheet.absoluteFillObject, blurStyle })];
  const obj5 = { style: null, children: null };
  const items2 = [tmp.titlePill, animatedStyle];
  obj5.style = items2;
  const obj4 = { shown, style: StyleSheet.absoluteFillObject, blurStyle };
  obj5.children = React4(Text_Text.Text, {
    variant: "redesign/heading-18/bold",
    color: "mobile-text-heading-primary",
    accessibilityRole: "header",
    children: children.title,
  });
  items1[1] = React4(ReanimatedNativeViewDefault, obj5);
  obj3.children = items1;
  return hasOwnProperty(tmp8, obj3);
});

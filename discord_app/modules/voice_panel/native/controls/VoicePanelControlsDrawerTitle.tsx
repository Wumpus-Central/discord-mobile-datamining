// === Module 12280: VoicePanelControlsDrawerTitle ===

// Module 12280 (VoicePanelControlsDrawerTitle)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import NativeViewDefault from "NativeView" /* 5589 */;
import VoicePanelHeaderGlassBlurDefault from "VoicePanelHeaderGlassBlur" /* 12281 */;
import noop from "module_19" /* 19 */;

const Text_Text = tmp2(4556);
const ReanimatedNativeViewDefault = tmp7(7073);
require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let obj = { titleWrapper: { position: "absolute", top: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center", padding: 16, height: fn(12271).CONTROLS_DRAWER_HEADER_SIZE }, titlePill: null, titlePillBG: null };
obj = { borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 };
obj.titlePill = obj;
const createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.titlePillBG = createStyles;
let closure_6 = createStyles.createStyles(obj);
const __initData = { code: "function VoicePanelControlsDrawerTitleTsx1(){const{shown,_shown,disablePill,backgroundColor}=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};}" };
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
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(true);
  let backgroundColor = tmp.titlePillBG.backgroundColor;
  let obj1 = ReanimatedRexport;
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
  const animatedStyle = obj1.useAnimatedStyle(fn);
  obj = { style: null, children: null };
  const items = [tmp.titleWrapper, style];
  obj.style = items;
  const tmp6 = hasOwnProperty;
  const tmp8 = NativeViewDefault;
  if (shown == null) {
    shown = sharedValue;
  }
  obj = { shown, style: StyleSheet.absoluteFillObject, blurStyle };
  const items1 = [React4(VoicePanelHeaderGlassBlurDefault, obj), ];
  obj1 = { style: null, children: null };
  const items2 = [tmp.titlePill, animatedStyle];
  obj1.style = items2;
  obj1.children = React4(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: children.title });
  items1[1] = React4(ReanimatedNativeViewDefault, obj1);
  obj.children = items1;
  return tmp6(tmp8, obj);
});
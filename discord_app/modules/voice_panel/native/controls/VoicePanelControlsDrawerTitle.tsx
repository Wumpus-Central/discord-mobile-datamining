// === Module 14047: VoicePanelControlsDrawerTitle ===

// Module 14047 (VoicePanelControlsDrawerTitle)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import Text_Text from "Text/Text" /* 5761 */;
import NativeViewDefault from "NativeView" /* 7101 */;
import VoicePanelHeaderGlassBlurDefault from "VoicePanelHeaderGlassBlur" /* 14048 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5141);
let obj = { titleWrapper: { position: "absolute", top: 0, left: 0, right: 0, justifyContent: "center", alignItems: "center", padding: 16, height: fn(11409).CONTROLS_DRAWER_HEADER_SIZE }, titlePill: { borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 }, titlePillBG: null };
let obj3 = { borderRadius: nativeDefault.radii.round, paddingHorizontal: 12, paddingTop: 1, paddingBottom: 2 };
obj.titlePillBG = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = { code: "(function VoicePanelControlsDrawerTitleTsx1(){let[shown,_shown,disablePill,backgroundColor]=this.__closure;const showBGColor=shown!=null?shown.get():_shown.get();return{backgroundColor:showBGColor&&!disablePill?backgroundColor:'transparent'};})" };
const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/VoicePanelControlsDrawerTitle.tsx");

export default noop.memo(function VoicePanelControlsDrawerTitle(children) {
  ({ shown, disablePill } = children);
  if (disablePill === undefined) {
    disablePill = false;
  }
  ({ style, blurStyle } = children);
  const tmp = closure_6();
  const sharedValue = _mod1652.useSharedValue(true);
  items = [closure_7, shown, sharedValue, disablePill, tmp.titlePillBG.backgroundColor];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items;
  class VoicePanelControlsDrawerTitleTsx1 {
    constructor() {
      obj = closure_0;
      if (null != closure_0) {
        value = obj.get();
      } else {
        tmp = closure_1;
        value = closure_1.get();
      }
      backgroundColor = "transparent";
      if (value) {
        tmp3 = closure_2;
        backgroundColor = "transparent";
        if (!closure_2) {
          backgroundColor = closure_3;
        }
      }
      return { backgroundColor };
    }
  }
  const items1 = [tmp6, tmp7, tmp8, tmp9];
  VoicePanelControlsDrawerTitleTsx1.__closure = items1;
  VoicePanelControlsDrawerTitleTsx1.__workletHash = 6652044620822;
  VoicePanelControlsDrawerTitleTsx1.__initData = tmp5;
  const animatedStyle = _mod1652.useAnimatedStyle(VoicePanelControlsDrawerTitleTsx1);
  const obj3 = { style: null, children: null };
  const items2 = [tmp.titleWrapper, style];
  obj3.style = items2;
  const tmp13 = NativeViewDefault;
  if (shown == null) {
    shown = sharedValue;
  }
  const items3 = [React4(VoicePanelHeaderGlassBlurDefault, { shown, style: StyleSheet.absoluteFillObject, blurStyle }), ];
  const obj5 = { style: null, children: React4(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: children.title }) };
  const items4 = [tmp.titlePill, animatedStyle];
  obj5.style = items4;
  items3[1] = React4(_modDef1652.View, obj5);
  obj3.children = items3;
  return hasOwnProperty(tmp13, obj3);
});
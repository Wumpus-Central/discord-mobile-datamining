// === Module 12780: MediaModalSpoilerOverlay ===

// Module 12780 (MediaModalSpoilerOverlay)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import useToken from "useToken" /* 4580 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5773 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5865 */;
import useMediaItemSpoilerState from "useMediaItemSpoilerState" /* 12765 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let PlatformUtils;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unsafe_rawColors;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { spoilerOverlayContainer: { justifyContent: "center", alignContent: "center", flex: 1 }, obscureContentContainer: obj2, spoilerOverlayBackground: obj3 };
obj2 = { gap: nativeDefault.space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, height: nativeDefault.space.PX_32, backgroundColor: PlatformUtils ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_600, flexGrow: 0, justifyContent: "center", alignItems: "center", alignSelf: "center" };
PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
unsafe_rawColors = nativeDefault.unsafe_rawColors;
let closure_8 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((index) => {
  let Text;
  let intl2;
  let items;
  let items1;
  let obj9;
  let source;
  let str2;
  let style;
  const obj = react2;
  const cResult = obj.c(17);
  ({ style, source } = index);
  index = index.index;
  const tmp4 = closure_8();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  const obj3 = useMediaItemSpoilerState;
  const tmp7 = _slicedToArray(obj3.useMediaItemSpoilerState(index), 2);
  if (tmp7[0]) {
    if (cResult[0] === tmp7[1]) {
      let tmp10;
      let str;
      if (cResult[1] === style) {
        tmp10 = cResult[2];
      }
      if (source.obscure) {
        str = "dark";
      } else {
        PlatformUtils;
        str = "light";
      }
      if (cResult[3] === token) {
        let tmp12;
        let tmp19;
        if (cResult[4] === str) {
          tmp12 = cResult[5];
        }
        if (cResult[6] === source.obscure) {
          if (cResult[7] === tmp4.obscureContentContainer) {
            let tmp16;
            if (cResult[8] === tmp4.spoilerOverlayBackground) {
              tmp16 = cResult[9];
            }
            if (cResult[10] === tmp4.spoilerOverlayContainer) {
              let tmp23;
              if (cResult[11] === tmp16) {
                tmp23 = cResult[12];
              }
              if (cResult[13] === tmp10) {
                if (cResult[14] === tmp12) {
                  let tmp27;
                  if (cResult[15] === tmp23) {
                    tmp27 = cResult[16];
                  }
                  return tmp27;
                }
              }
              const obj4 = { style: tmp10, children: items };
              items = [tmp12, tmp23];
              const tmp29 = metroImportDefault(ReanimatedRexportDefault.View, obj4);
              cResult[13] = tmp10;
              cResult[14] = tmp12;
              cResult[15] = tmp23;
              cResult[16] = tmp29;
              tmp27 = tmp29;
            }
            const obj5 = { style: tmp4.spoilerOverlayContainer, children: tmp16 };
            const tmp26 = metroRequire(hasOwnProperty, obj5);
            cResult[10] = tmp4.spoilerOverlayContainer;
            cResult[11] = tmp16;
            cResult[12] = tmp26;
            tmp23 = tmp26;
          }
        }
        if (source.obscure) {
          const obj6 = { style: tmp4.obscureContentContainer, children: items1 };
          items1 = [metroRequire(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "white" }), ];
          const obj7 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: intl2.string(intl3.t.SpxcUR) };
          const Text2 = Text_Text.Text;
          intl2 = intl3.intl;
          items1[1] = metroRequire(Text2, obj7);
          tmp19 = metroImportDefault(hasOwnProperty, obj6);
        } else {
          const obj8 = { style: tmp4.spoilerOverlayBackground, children: metroRequire(Text, obj9) };
          obj9 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: str2.toUpperCase() };
          Text = Text_Text.Text;
          const intl = intl3.intl;
          str2 = intl.string(intl3.t["F+x38C"]);
          tmp19 = metroRequire(hasOwnProperty, obj8);
        }
        cResult[6] = source.obscure;
        cResult[7] = tmp4.obscureContentContainer;
        cResult[8] = tmp4.spoilerOverlayBackground;
        cResult[9] = tmp19;
        tmp16 = tmp19;
      }
      const obj10 = { blurTheme: str, android_fallbackColor: token, style: React3.absoluteFill };
      const tmp15 = metroRequire(VisualEffectViewDefault, obj10);
      cResult[3] = token;
      cResult[4] = str;
      cResult[5] = tmp15;
      tmp12 = tmp15;
    }
    const items2 = [style, React3.absoluteFill, tmp7[1]];
    cResult[0] = tmp7[1];
    cResult[1] = style;
    cResult[2] = items2;
    tmp10 = items2;
  } else {
    return null;
  }
}) : ((source) => {
  let index;
  let intl2;
  let items;
  let items1;
  let str2;
  let style;
  let tmp11Result;
  source = source.source;
  ({ style, index } = source);
  const tmp = closure_8();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  let tmp9Result2 = null;
  const obj2 = useMediaItemSpoilerState;
  const tmp6 = _slicedToArray(obj2.useMediaItemSpoilerState(index), 2);
  if (tmp6[0]) {
    let str;
    const obj3 = { style: items, children: items1 };
    items = [style, React3.absoluteFill, tmp7];
    const View = ReanimatedRexportDefault.View;
    const tmp4Result = VisualEffectViewDefault;
    if (source.obscure) {
      str = "dark";
    } else {
      PlatformUtils;
      str = "light";
    }
    const obj4 = { blurTheme: str, android_fallbackColor: token, style: React3.absoluteFill };
    items1 = [metroRequire(tmp4Result, obj4), ];
    const obj6 = { style: null, children: null };
    const obj5 = { style: tmp.spoilerOverlayContainer, children: tmp11Result };
    if (source.obscure) {
      obj6.style = tmp.obscureContentContainer;
      const items2 = [metroRequire(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "white" }), ];
      const obj7 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: intl2.string(intl3.t.SpxcUR) };
      const Text2 = Text_Text.Text;
      intl2 = intl3.intl;
      items2[1] = metroRequire(Text2, obj7);
      obj6.children = items2;
      tmp11Result = metroImportDefault(hasOwnProperty, obj6);
    } else {
      obj6.style = tmp.spoilerOverlayBackground;
      const obj8 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: str2.toUpperCase() };
      const Text = Text_Text.Text;
      const intl = intl3.intl;
      str2 = intl.string(intl3.t["F+x38C"]);
      obj6.children = metroRequire(Text, obj8);
      tmp11Result = metroRequire(hasOwnProperty, obj6);
    }
    items1[1] = metroRequire(hasOwnProperty, obj5);
    tmp9Result2 = metroImportDefault(View, obj3);
  }
  return tmp9Result2;
}));
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx");

export default memoResult;
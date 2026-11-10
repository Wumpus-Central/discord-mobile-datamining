// === Module 15058: MediaModalSpoilerOverlay ===

// Module 15058 (MediaModalSpoilerOverlay)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import PlatformUtils2 from "PlatformUtils" /* 1377 */;
import _modDef1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5726 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5730 */;
import Text_Text from "Text/Text" /* 5753 */;
import ImageWarningIcon from "ImageWarningIcon" /* 8730 */;
import useMediaItemSpoilerState from "useMediaItemSpoilerState" /* 15035 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5142);
let obj = { spoilerOverlayContainer: { justifyContent: "center", alignContent: "center", flex: 1 }, obscureContentContainer: { gap: nativeDefault.space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" }, spoilerOverlayBackground: null };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, height: nativeDefault.space.PX_32, backgroundColor: null, flexGrow: 0, justifyContent: "center", alignItems: "center", alignSelf: "center" };
let PlatformUtils = fn(1377);
PlatformUtils = PlatformUtils.isAndroid();
const unsafe_rawColors = nativeDefault.unsafe_rawColors;
obj4.backgroundColor = PlatformUtils ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_600;
obj.spoilerOverlayBackground = obj4;
let closure_8 = createStyles.createStyles(obj);
let obj3 = { gap: nativeDefault.space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx");

export default noop.memo(function MediaModalSpoilerOverlay(source) {
  source = source.source;
  ({ style, index } = source);
  let items2 = closure_8();
  let stringResult = dependencyMap;
  const token = useToken.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  if (!tmp5[0]) {
    return null;
  } else {
    const obj3 = { style: null, children: null };
    items = [style, absoluteFill.absoluteFill, tmp6];
    obj3.style = items;
    if (source.obscure) {
      let str = "dark";
    } else {
      PlatformUtils2;
      str = "light";
    }
    const obj4 = { blurTheme: str, android_fallbackColor: token, style: absoluteFill.absoluteFill };
    const items1 = [timestampProducer(VisualEffectViewDefault, obj4), ];
    let obj5 = { style: items2.spoilerOverlayContainer, children: null };
    const obj6 = { style: null, children: null };
    if (source.obscure) {
      obj6.style = items2.obscureContentContainer;
      items2 = [timestampProducer(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "white" }), ];
      const obj7 = { accessibilityRole: "text", variant: "heading-sm/medium", color: "text-overlay-light", children: null };
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.SpxcUR);
      obj7.children = stringResult;
      items2[1] = timestampProducer(Text_Text.Text, obj7);
      obj6.children = items2;
      let tmp9Result = metroImportDefault(hasOwnProperty, obj6);
    } else {
      obj6.style = items2.spoilerOverlayBackground;
      const obj8 = { accessibilityRole: "text", variant: "heading-sm/medium", color: "text-overlay-light", children: null };
      const intl = util.intl;
      obj8.children = intl.string(util.t["F+x38C"]).toUpperCase();
      obj6.children = timestampProducer(Text_Text.Text, obj8);
      tmp9Result = timestampProducer(hasOwnProperty, obj6);
      const str2 = intl.string(util.t["F+x38C"]);
    }
    obj5.children = tmp9Result;
    obj5 = timestampProducer(hasOwnProperty, obj5);
    items1[1] = obj5;
    obj3.children = items1;
    metroImportDefault(_modDef1652.View, obj3);
    const tmp3Result = VisualEffectViewDefault;
  }
  tmp5 = _slicedToArray(useMediaItemSpoilerState.useMediaItemSpoilerState(index), 2);
});
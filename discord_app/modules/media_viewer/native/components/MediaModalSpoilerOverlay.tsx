// === Module 12979: MediaModalSpoilerOverlay ===

// Module 12979 (MediaModalSpoilerOverlay)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import useMediaItemSpoilerState from "useMediaItemSpoilerState" /* 12964 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let obj = { spoilerOverlayContainer: { justifyContent: "center", alignContent: "center", flex: 1 }, obscureContentContainer: null, spoilerOverlayBackground: null };
obj = { gap: nativeDefault.space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" };
obj.obscureContentContainer = obj;
const createStyles = { paddingHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.lg, height: nativeDefault.space.PX_32, backgroundColor: null, flexGrow: 0, justifyContent: "center", alignItems: "center", alignSelf: "center" };
let PlatformUtils = fn(1115);
PlatformUtils = PlatformUtils.isAndroid();
const unsafe_rawColors = nativeDefault.unsafe_rawColors;
createStyles.backgroundColor = PlatformUtils ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_600;
obj.spoilerOverlayBackground = createStyles;
let closure_8 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx");

export default noop.memo(function MediaModalSpoilerOverlay(source) {
  source = source.source;
  ({ style, index } = source);
  let items2 = closure_8();
  let stringResult = dependencyMap;
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  let obj1 = useMediaItemSpoilerState;
  if (!tmp5[0]) {
    return null;
  } else {
    obj = { style: null, children: null };
    const items = [style, absoluteFill.absoluteFill, tmp6];
    obj.style = items;
    if (source.obscure) {
      let str = "dark";
    } else {
      str = "light";
      const tmpResult = tmp(1115);
    }
    obj = { blurTheme: str, android_fallbackColor: token, style: absoluteFill.absoluteFill };
    const items1 = [timestampProducer(tmp3(4965), obj), ];
    obj1 = { style: items2.spoilerOverlayContainer, children: null };
    const obj2 = { style: null, children: null };
    if (source.obscure) {
      obj2.style = items2.obscureContentContainer;
      items2 = [tmp9(tmp(5081).ImageWarningIcon, { size: "lg", color: "white" }), ];
      const obj3 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: null };
      const intl2 = tmp(1114).intl;
      stringResult = intl2.string(tmp(1114).t.SpxcUR);
      obj3.children = stringResult;
      items2[1] = tmp9(tmp(4556).Text, obj3);
      obj2.children = items2;
      let tmp9Result = tmp7(tmp11, obj2);
    } else {
      obj2.style = items2.spoilerOverlayBackground;
      const obj4 = { accessibilityRole: "text", variant: "heading-md/medium", color: "text-overlay-light", children: null };
      const intl = tmp(1114).intl;
      obj4.children = intl.string(tmp(1114).t["F+x38C"]).toUpperCase();
      obj2.children = tmp9(tmp(4556).Text, obj4);
      tmp9Result = tmp9(tmp11, obj2);
      const str2 = intl.string(tmp(1114).t["F+x38C"]);
    }
    obj1.children = tmp9Result;
    obj1 = tmp9(tmp11, obj1);
    items1[1] = obj1;
    obj.children = items1;
    React5(tmp3(4296).View, obj);
    const tmp3Result = tmp3(4965);
  }
});
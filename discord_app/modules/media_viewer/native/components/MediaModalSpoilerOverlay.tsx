// discord_app/modules/media_viewer/native/components/MediaModalSpoilerOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils2 from "../../../../utils/PlatformUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import ImageWarningIcon from "../../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import useMediaItemSpoilerState from "../useMediaItemSpoilerState.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let obj = {
  spoilerOverlayContainer: { justifyContent: "center", alignContent: "center", flex: 1 },
  obscureContentContainer: null,
  spoilerOverlayBackground: null,
};
obj = { gap: nativeDefault.space.PX_4, justifyContent: "center", alignItems: "center", alignSelf: "center" };
obj.obscureContentContainer = obj;
const createStyles = {
  paddingHorizontal: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.lg,
  height: nativeDefault.space.PX_32,
  backgroundColor: null,
  flexGrow: 0,
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
};
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
      PlatformUtils2;
      str = "light";
    }
    obj = { blurTheme: str, android_fallbackColor: token, style: absoluteFill.absoluteFill };
    const items1 = [timestampProducer(VisualEffectViewDefault, obj)];
    obj1 = { style: items2.spoilerOverlayContainer, children: null };
    const obj2 = { style: null, children: null };
    if (source.obscure) {
      obj2.style = items2.obscureContentContainer;
      items2 = [timestampProducer(ImageWarningIcon.ImageWarningIcon, { size: "lg", color: "white" })];
      const obj3 = {
        accessibilityRole: "text",
        variant: "heading-md/medium",
        color: "text-overlay-light",
        children: null,
      };
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.SpxcUR);
      obj3.children = stringResult;
      items2[1] = timestampProducer(Text_Text.Text, obj3);
      obj2.children = items2;
      let tmp9Result = React5(hasOwnProperty, obj2);
    } else {
      obj2.style = items2.spoilerOverlayBackground;
      const obj4 = {
        accessibilityRole: "text",
        variant: "heading-md/medium",
        color: "text-overlay-light",
        children: null,
      };
      const intl = util.intl;
      obj4.children = intl.string(util.t["F+x38C"]).toUpperCase();
      obj2.children = timestampProducer(Text_Text.Text, obj4);
      tmp9Result = timestampProducer(hasOwnProperty, obj2);
      const str2 = intl.string(util.t["F+x38C"]);
    }
    obj1.children = tmp9Result;
    obj1 = timestampProducer(hasOwnProperty, obj1);
    items1[1] = obj1;
    obj.children = items1;
    React5(ReanimatedRexportDefault.View, obj);
    const tmp3Result = VisualEffectViewDefault;
  }
  tmp5 = _slicedToArray(obj1.useMediaItemSpoilerState(index), 2);
});

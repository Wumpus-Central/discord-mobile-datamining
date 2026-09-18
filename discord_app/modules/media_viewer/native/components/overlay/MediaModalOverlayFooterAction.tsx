// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayFooterAction.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import VisualEffectViewDefault from "../../../../visual_effect_view/native/VisualEffectView.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../../components_native/common/SafeAreaView.tsx";
import MediaViewerThumbnailsDefault from "../MediaViewerThumbnails.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  container: { paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 },
  buttonContainer: null,
};
let obj3 = { paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.buttonContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaModalOverlayFooterAction.tsx",
);

export const MediaModalOverlayFooterAction = function MediaModalOverlayFooterAction(arg0) {
  ({ footerAction, sliderElement, syncer } = arg0);
  const tmp = closure_8();
  const rect = { bottom: true, left: true, right: true, style: tmp.container, children: null };
  if (null != sliderElement) {
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      const obj = { blurTheme: "dark", style: absoluteFill.absoluteFill };
      isIOSResult = hasOwnProperty(VisualEffectViewDefault, obj);
    }
    const items = [isIOSResult, sliderElement];
    let tmp12 = null;
    if (tmp2) {
      const obj2 = { syncer };
      tmp12 = hasOwnProperty(MediaViewerThumbnailsDefault, obj2);
    }
    const obj3 = { children: null };
    items[2] = tmp12;
    obj3.children = items;
    let tmp3Result = React5(timestampProducer, obj3);
    const tmp4Result = PlatformUtils;
  } else {
    tmp3Result = null;
  }
  const items1 = [tmp3Result];
  const obj4 = {
    style: tmp.buttonContainer,
    children: hasOwnProperty(components_Button_Button.Button, {
      size: "lg",
      text: footerAction.text,
      onPress: footerAction.onPress,
    }),
  };
  items1[1] = hasOwnProperty(React4, obj4);
  rect.children = items1;
  return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
};

// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayFooterAction.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import isBlurDisabledDefault from "../../../../visual_effect_view/native/VisualEffectView.tsx";
import Button from "../../../../../design/components/Button/native/Button.native.tsx";
import SafeAreaPaddingView from "../../../../../components_native/common/SafeAreaView.tsx";
import ObscuredViewDefault from "../MediaViewerThumbnails.tsx";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, buttonContainer: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaModalOverlayFooterAction.tsx",
);

export const MediaModalOverlayFooterAction = function MediaModalOverlayFooterAction(arg0) {
  ({ footerAction, sliderElement, syncer } = arg0);
  const tmp = callback2();
  let obj = { bottom: true, left: true, right: true, style: tmp.container, children: null };
  if (null != sliderElement) {
    let isIOSResult = tmp4(1115).isIOS();
    if (isIOSResult) {
      obj = { blurTheme: "dark", style: null };
      obj[1] = absoluteFill.absoluteFill;
      isIOSResult = callback(isBlurDisabledDefault, obj);
    }
    const items = [isIOSResult, sliderElement];
    let tmp12 = null;
    if (tmp2) {
      obj = { syncer: null };
      obj[0] = syncer;
      tmp12 = callback(ObscuredViewDefault, obj);
    }
    obj1 = { children: null };
    items[2] = tmp12;
    obj1[0] = items;
    let tmp3Result = tmp3(closure_6, obj1);
    const tmp4Result = tmp4(1115);
    const tmp7 = closure_6;
  } else {
    tmp3Result = null;
  }
  const items1 = [
    tmp3Result,
    callback(closure_4, { style: tmp.buttonContainer, children: callback(Button.Button, obj3) }),
  ];
  obj[4] = items1;
  return closure_7(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};

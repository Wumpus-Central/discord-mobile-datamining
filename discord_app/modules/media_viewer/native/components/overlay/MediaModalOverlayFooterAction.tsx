// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayFooterAction.tsx
import c from "../../../../../../_runtime/00576_c.js";
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
const createStyles = fn(5092);
let obj2 = {
  container: { paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 },
  buttonContainer: null,
};
let obj3 = { paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.buttonContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaModalOverlayFooterAction.tsx",
);

export const MediaModalOverlayFooterAction = ReactCompilerGating.isReactCompilerEnabled()
  ? function MediaModalOverlayFooterAction(arg0) {
      const cResult = c.c(15);
      ({ footerAction, sliderElement, syncer } = arg0);
      const tmp4 = closure_8();
      if (cResult[0] === syncer.sources.length > 1) {
        if (cResult[1] === tmp6) {
          if (cResult[2] === sliderElement) {
            if (cResult[3] === syncer) {
              let tmp7 = cResult[4];
            }
            if (cResult[5] === footerAction.onPress) {
              if (cResult[6] === footerAction.text) {
                let tmp18 = cResult[7];
              }
              if (cResult[8] === tmp4.buttonContainer) {
                if (cResult[9] === tmp18) {
                  let tmp21 = cResult[10];
                }
                if (cResult[11] === tmp4.container) {
                  if (cResult[12] === tmp7) {
                    if (cResult[13] === tmp21) {
                      let tmp25 = cResult[14];
                    }
                    return tmp25;
                  }
                }
                const rect = { bottom: true, left: true, right: true, style: tmp4.container, children: null };
                const items = [tmp7, tmp21];
                rect.children = items;
                const tmp27 = React5(common_SafeAreaView.SafeAreaPaddingView, rect);
                cResult[11] = tmp4.container;
                cResult[12] = tmp7;
                cResult[13] = tmp21;
                cResult[14] = tmp27;
                tmp25 = tmp27;
              }
              const obj2 = { style: tmp4.buttonContainer, children: tmp18 };
              const tmp24 = hasOwnProperty(React4, obj2);
              cResult[8] = tmp4.buttonContainer;
              cResult[9] = tmp18;
              cResult[10] = tmp24;
              tmp21 = tmp24;
            }
            ({ text: obj6.text, onPress: obj6.onPress } = footerAction);
            const tmp20 = hasOwnProperty(components_Button_Button.Button, { size: "lg", text: null, onPress: null });
            cResult[5] = footerAction.onPress;
            cResult[6] = footerAction.text;
            cResult[7] = tmp20;
            tmp18 = tmp20;
            const obj3 = { size: "lg", text: null, onPress: null };
          }
        }
      }
      let tmp9Result = null;
      if (null != sliderElement || syncer.sources.length > 1) {
        let isIOSResult = PlatformUtils.isIOS();
        if (isIOSResult) {
          const obj4 = { blurTheme: "dark", style: React3.absoluteFill };
          isIOSResult = hasOwnProperty(VisualEffectViewDefault, obj4);
        }
        const items1 = [isIOSResult, sliderElement];
        let tmp15 = null;
        if (tmp5) {
          const obj5 = { syncer };
          tmp15 = hasOwnProperty(MediaViewerThumbnailsDefault, obj5);
        }
        const obj7 = { children: null };
        items1[2] = tmp15;
        obj7.children = items1;
        tmp9Result = React5(timestampProducer, obj7);
        const tmpResult = PlatformUtils;
      }
      cResult[0] = syncer.sources.length > 1;
      cResult[1] = null != sliderElement || syncer.sources.length > 1;
      cResult[2] = sliderElement;
      cResult[3] = syncer;
      cResult[4] = tmp9Result;
      tmp7 = tmp9Result;
    }
  : function MediaModalOverlayFooterAction(arg0) {
      ({ footerAction, sliderElement, syncer } = arg0);
      const tmp = closure_8();
      const rect = { bottom: true, left: true, right: true, style: tmp.container, children: null };
      if (null != sliderElement) {
        let isIOSResult = PlatformUtils.isIOS();
        if (isIOSResult) {
          const obj = { blurTheme: "dark", style: React3.absoluteFill };
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

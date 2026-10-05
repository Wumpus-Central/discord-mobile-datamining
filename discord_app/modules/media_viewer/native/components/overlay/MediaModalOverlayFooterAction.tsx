// === Module 12771: MediaModalOverlayFooterAction ===

// Module 12771 (MediaModalOverlayFooterAction)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5773 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import MediaViewerThumbnailsDefault from "MediaViewerThumbnails" /* 12764 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({ StyleSheet: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, buttonContainer: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let footerAction;
  let items;
  let sliderElement;
  let syncer;
  const obj = react2;
  const cResult = obj.c(15);
  ({ footerAction, sliderElement, syncer } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === syncer.sources.length > 1) {
    if (cResult[1] === (null != sliderElement || syncer.sources.length > 1)) {
      if (cResult[2] === sliderElement) {
        let tmp7;
        if (cResult[3] === syncer) {
          tmp7 = cResult[4];
        }
        if (cResult[5] === footerAction.onPress) {
          let tmp18;
          if (cResult[6] === footerAction.text) {
            tmp18 = cResult[7];
          }
          if (cResult[8] === tmp4.buttonContainer) {
            let tmp21;
            if (cResult[9] === tmp18) {
              tmp21 = cResult[10];
            }
            if (cResult[11] === tmp4.container) {
              if (cResult[12] === tmp7) {
                let tmp25;
                if (cResult[13] === tmp21) {
                  tmp25 = cResult[14];
                }
                return tmp25;
              }
            }
            const rect = { bottom: true, left: true, right: true, style: tmp4.container, children: items };
            items = [tmp7, tmp21];
            const tmp27 = metroImportDefault(common_SafeAreaView.SafeAreaPaddingView, rect);
            cResult[11] = tmp4.container;
            cResult[12] = tmp7;
            cResult[13] = tmp21;
            cResult[14] = tmp27;
            tmp25 = tmp27;
          }
          const obj2 = { style: tmp4.buttonContainer, children: tmp18 };
          const tmp24 = hasOwnProperty(React3, obj2);
          cResult[8] = tmp4.buttonContainer;
          cResult[9] = tmp18;
          cResult[10] = tmp24;
          tmp21 = tmp24;
        }
        const obj3 = { size: "lg", text: null, onPress: null };
        ({ text: obj6.text, onPress: obj6.onPress } = footerAction);
        const tmp20 = hasOwnProperty(components_Button_Button.Button, obj3);
        cResult[5] = footerAction.onPress;
        cResult[6] = footerAction.text;
        cResult[7] = tmp20;
        tmp18 = tmp20;
      }
    }
  }
  let tmp9Result = null;
  if (null != sliderElement || syncer.sources.length > 1) {
    const tmpResult = PlatformUtils;
    let isIOSResult = tmpResult.isIOS();
    if (isIOSResult) {
      const obj4 = { blurTheme: "dark", style: _false.absoluteFill };
      isIOSResult = hasOwnProperty(VisualEffectViewDefault, obj4);
    }
    const items1 = [isIOSResult, sliderElement, ];
    let tmp15 = null;
    if (syncer.sources.length > 1) {
      const obj5 = { syncer };
      tmp15 = hasOwnProperty(MediaViewerThumbnailsDefault, obj5);
    }
    const obj7 = { children: items1 };
    items1[2] = tmp15;
    tmp9Result = metroImportDefault(metroRequire, obj7);
  }
  cResult[0] = syncer.sources.length > 1;
  cResult[1] = null != sliderElement || syncer.sources.length > 1;
  cResult[2] = sliderElement;
  cResult[3] = syncer;
  cResult[4] = tmp9Result;
  tmp7 = tmp9Result;
}) : ((arg0) => {
  let footerAction;
  let items1;
  let obj5;
  let sliderElement;
  let syncer;
  let tmp3Result;
  ({ footerAction, sliderElement, syncer } = arg0);
  const tmp = closure_8();
  const rect = { bottom: true, left: true, right: true, style: tmp.container, children: items1 };
  const tmp2 = syncer.sources.length > 1;
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  if (null != sliderElement) {
    const tmp4Result = PlatformUtils;
    let isIOSResult = tmp4Result.isIOS();
    if (isIOSResult) {
      const obj = { blurTheme: "dark", style: _false.absoluteFill };
      isIOSResult = hasOwnProperty(VisualEffectViewDefault, obj);
    }
    const items = [isIOSResult, sliderElement, ];
    let tmp12 = null;
    if (tmp2) {
      const obj2 = { syncer };
      tmp12 = hasOwnProperty(MediaViewerThumbnailsDefault, obj2);
    }
    const obj3 = { children: items };
    items[2] = tmp12;
    tmp3Result = metroImportDefault(metroRequire, obj3);
  } else {
    tmp3Result = null;
  }
  items1 = [tmp3Result, ];
  const obj4 = { style: tmp.buttonContainer, children: hasOwnProperty(components_Button_Button.Button, obj5) };
  obj5 = { size: "lg", text: footerAction.text, onPress: footerAction.onPress };
  items1[1] = hasOwnProperty(React3, obj4);
  return metroImportDefault(SafeAreaPaddingView, rect);
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayFooterAction.tsx");

export const MediaModalOverlayFooterAction = tmp6;
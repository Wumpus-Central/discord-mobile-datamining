// === Module 15316: QuestHomeEmptyState ===

// Module 15316 (QuestHomeEmptyState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useToken from "useToken" /* 4818 */;
import useChatLayoutDefault from "useChatLayout" /* 4979 */;
import Text_Text from "Text/Text" /* 5088 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import FastImageDefault from "FastImage" /* 6156 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6813 */;
import _modDef15317 from "module_15317" /* 15317 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const VerticalGradient = fn(1085).VerticalGradient;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1 }, emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 }, emptyStateContentContainer: { top: -55, paddingHorizontal: nativeDefault.space.PX_32 }, emptyStateContentTitle: { textAlign: "center" }, emptyStateContentDescription: { textAlign: "center", marginTop: 4 }, emptyImage: { flex: 1, width: "100%", aspectRatio: 1.6375545851528384, minWidth: "100%", position: "absolute", bottom: 0, zIndex: -1 }, backgroundImage: null, gradient: null, actionWrapper: null };
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.width = "100%";
obj4.height = undefined;
obj2.backgroundImage = obj4;
obj2.gradient = { height: 22, width: "100%", position: "absolute", bottom: 0 };
obj2.actionWrapper = { marginTop: 16, alignSelf: "center" };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { top: -55, paddingHorizontal: nativeDefault.space.PX_32 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function QuestHomeEmptyState(arg0) {
  const cResult = c.c(35);
  ({ action, title, subtitle } = arg0);
  if (cResult[0] !== title) {
    let stringResult = title;
    if (undefined === title) {
      const intl = util.intl;
      stringResult = intl.string(util.t.SdlRnK);
    }
    cResult[0] = title;
    cResult[1] = stringResult;
    let tmp4 = stringResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== subtitle) {
    let stringResult1 = subtitle;
    if (undefined === subtitle) {
      const intl2 = util.intl;
      stringResult1 = intl2.string(util.t["R7mv+G"]);
    }
    cResult[2] = subtitle;
    cResult[3] = stringResult1;
    let tmp6 = stringResult1;
  } else {
    tmp6 = cResult[3];
  }
  const tmp8 = closure_8();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const isAndroidResult = PlatformUtils.isAndroid();
    cResult[4] = isAndroidResult;
    let tmp11 = isAndroidResult;
    const tmpResult2 = PlatformUtils;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === tmp8.emptyStateContentTitle) {
    if (cResult[6] === tmp4) {
      let tmp13 = cResult[7];
    }
    if (cResult[8] === tmp8.emptyStateContentDescription) {
      if (cResult[9] === tmp6) {
        let tmp15 = cResult[10];
      }
      if (cResult[11] === action) {
        if (cResult[12] === tmp8.actionWrapper) {
          let tmp18 = cResult[13];
        }
        if (cResult[14] === tmp8.emptyStateContentContainer) {
          if (cResult[15] === tmp13) {
            if (cResult[16] === tmp15) {
              if (cResult[17] === tmp18) {
                let tmp23 = cResult[18];
              }
              if (cResult[19] === token) {
                if (cResult[20] === isChatLockedOpen) {
                  if (cResult[21] === tmp8.backgroundImage) {
                    if (cResult[22] === tmp8.emptyImage) {
                      if (cResult[23] === tmp8.gradient) {
                        let tmp27 = cResult[24];
                      }
                      if (cResult[25] === tmp8.emptyStateContainer) {
                        if (cResult[26] === tmp27) {
                          if (cResult[27] === tmp23) {
                            let tmp35 = cResult[28];
                          }
                          if (cResult[29] === tmp8.container) {
                            if (cResult[30] === tmp35) {
                              let tmp39 = cResult[31];
                            }
                            if (cResult[32] === tmp8.container) {
                              if (cResult[33] === tmp39) {
                                let tmp43 = cResult[34];
                              }
                              return tmp43;
                            }
                            const obj2 = { bottom: tmp11, style: tmp8.container, children: tmp39 };
                            const tmp45 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj2);
                            cResult[32] = tmp8.container;
                            cResult[33] = tmp39;
                            cResult[34] = tmp45;
                            tmp43 = tmp45;
                          }
                          const obj3 = { style: tmp8.container, children: tmp35 };
                          const tmp42 = hasOwnProperty(React3, obj3);
                          cResult[29] = tmp8.container;
                          cResult[30] = tmp35;
                          cResult[31] = tmp42;
                          tmp39 = tmp42;
                        }
                      }
                      const obj4 = { style: tmp8.emptyStateContainer, children: null };
                      const items = [tmp23, tmp27];
                      obj4.children = items;
                      const tmp38 = timestampProducer(React3, obj4);
                      cResult[25] = tmp8.emptyStateContainer;
                      cResult[26] = tmp27;
                      cResult[27] = tmp23;
                      cResult[28] = tmp38;
                      tmp35 = tmp38;
                    }
                  }
                }
              }
              let tmp28 = null;
              if (!isChatLockedOpen) {
                const obj5 = { children: null };
                const obj6 = { style: tmp8.emptyImage, children: null };
                const obj7 = { style: tmp8.backgroundImage, source: _modDef15317, resizeMode: "cover" };
                obj6.children = hasOwnProperty(FastImageDefault, obj7);
                const items1 = [hasOwnProperty(React3, obj6), ];
                const obj8 = { style: tmp8.gradient, end: null, start: null, colors: null };
                ({ END: obj11.end, START: obj11.start } = VerticalGradient);
                const items2 = ["rgba(0, 0, 0, 0)", token];
                obj8.colors = items2;
                items1[1] = hasOwnProperty(LinearGradientDefault, obj8);
                obj5.children = items1;
                tmp28 = timestampProducer(React5, obj5);
                const tmp9Result = FastImageDefault;
              }
              cResult[19] = token;
              cResult[20] = isChatLockedOpen;
              cResult[21] = tmp8.backgroundImage;
              cResult[22] = tmp8.emptyImage;
              cResult[23] = tmp8.gradient;
              cResult[24] = tmp28;
              tmp27 = tmp28;
            }
          }
        }
        const obj9 = { style: tmp8.emptyStateContentContainer, children: null };
        const items3 = [tmp13, tmp15, tmp18];
        obj9.children = items3;
        const tmp26 = timestampProducer(React3, obj9);
        cResult[14] = tmp8.emptyStateContentContainer;
        cResult[15] = tmp13;
        cResult[16] = tmp15;
        cResult[17] = tmp18;
        cResult[18] = tmp26;
        tmp23 = tmp26;
      }
      let tmp20 = null != action;
      if (tmp20) {
        const obj10 = { style: tmp8.actionWrapper, children: action };
        tmp20 = hasOwnProperty(React3, obj10);
      }
      cResult[11] = action;
      cResult[12] = tmp8.actionWrapper;
      cResult[13] = tmp20;
      tmp18 = tmp20;
    }
    const obj12 = { variant: "text-md/normal", color: "text-default", style: tmp8.emptyStateContentDescription, children: tmp6 };
    const tmp17 = hasOwnProperty(Text_Text.Text, obj12);
    cResult[8] = tmp8.emptyStateContentDescription;
    cResult[9] = tmp6;
    cResult[10] = tmp17;
    tmp15 = tmp17;
  }
  const tmp14 = hasOwnProperty(Text_Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp8.emptyStateContentTitle, children: tmp4 });
  cResult[5] = tmp8.emptyStateContentTitle;
  cResult[6] = tmp4;
  cResult[7] = tmp14;
  tmp13 = tmp14;
  const obj13 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp8.emptyStateContentTitle, children: tmp4 };
  const tmpResult = useToken;
}) : (function QuestHomeEmptyState(subtitle) {
  ({ action, title } = subtitle);
  if (title === undefined) {
    const intl = util.intl;
    title = intl.string(util.t.SdlRnK);
  }
  subtitle = subtitle.subtitle;
  if (subtitle === undefined) {
    const intl2 = util.intl;
    subtitle = intl2.string(util.t["R7mv+G"]);
  }
  const tmp5 = closure_8();
  const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const obj2 = { bottom: null, style: null, children: null };
  obj2.bottom = PlatformUtils.isAndroid();
  obj2.style = tmp5.container;
  const obj4 = { style: tmp5.container, children: null };
  const obj5 = { style: tmp5.emptyStateContainer, children: null };
  const obj6 = { style: tmp5.emptyStateContentContainer, children: null };
  const items = [hasOwnProperty(Text_Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.emptyStateContentTitle, children: title }), hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: "text-default", style: tmp5.emptyStateContentDescription, children: subtitle }), ];
  let tmp9Result = null != action;
  if (tmp9Result) {
    const obj9 = { style: tmp5.actionWrapper, children: action };
    tmp9Result = hasOwnProperty(React3, obj9);
  }
  items[2] = tmp9Result;
  obj6.children = items;
  const items1 = [timestampProducer(React3, obj6), ];
  let tmp11Result = null;
  if (!useChatLayoutDefault().isChatLockedOpen) {
    const obj10 = { children: null };
    const obj11 = { style: tmp5.emptyImage, children: null };
    const obj12 = { style: tmp5.backgroundImage, source: _modDef15317, resizeMode: "cover" };
    obj11.children = hasOwnProperty(FastImageDefault, obj12);
    const items2 = [hasOwnProperty(React3, obj11), ];
    const obj24 = { style: tmp5.gradient, end: null, start: null, colors: null };
    ({ END: obj13.end, START: obj13.start } = VerticalGradient);
    const items3 = ["rgba(0, 0, 0, 0)", token];
    obj24.colors = items3;
    items2[1] = hasOwnProperty(LinearGradientDefault, obj24);
    obj10.children = items2;
    tmp11Result = timestampProducer(React5, obj10);
    const tmp7Result = FastImageDefault;
  }
  items1[1] = tmp11Result;
  obj5.children = items1;
  obj4.children = timestampProducer(React3, obj5);
  obj2.children = hasOwnProperty(React3, obj4);
  return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj2);
});
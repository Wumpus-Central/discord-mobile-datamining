// discord_app/modules/quests/native/QuestHomeEmptyState.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import useChatLayoutDefault from "../../chat/native/useChatLayout.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import LinearGradientDefault from "../../../../_runtime/05295_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import _modDef16857 from "../../../../_runtime/metro/16857__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const VerticalGradient = fn(1084).VerticalGradient;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(5005);
let obj2 = {
  container: { flex: 1 },
  emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 },
  emptyStateContainerBelowContent: { justifyContent: "flex-start", paddingTop: nativeDefault.space.PX_16 },
  emptyStateContentContainer: null,
  emptyStateContentContainerScreenCentered: null,
  emptyStateContentTitle: null,
  emptyStateContentDescription: null,
  emptyImage: null,
  backgroundImage: null,
  gradient: null,
  actionWrapper: null,
};
let obj3 = { justifyContent: "flex-start", paddingTop: nativeDefault.space.PX_16 };
obj2.emptyStateContentContainer = { paddingHorizontal: nativeDefault.space.PX_32 };
obj2.emptyStateContentContainerScreenCentered = { top: -55 };
obj2.emptyStateContentTitle = { textAlign: "center" };
obj2.emptyStateContentDescription = { textAlign: "center", marginTop: 4 };
obj2.emptyImage = {
  flex: 1,
  width: "100%",
  aspectRatio: 1.6375545851528384,
  minWidth: "100%",
  position: "absolute",
  bottom: 0,
  zIndex: -1,
};
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.width = "100%";
obj5.height = undefined;
obj2.backgroundImage = obj5;
obj2.gradient = { height: 22, width: "100%", position: "absolute", bottom: 0 };
obj2.actionWrapper = { marginTop: 16, alignSelf: "center" };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { paddingHorizontal: nativeDefault.space.PX_32 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function QuestHomeEmptyState(arg0) {
      const cResult = c.c(41);
      ({ hasContentAbove, action, title, subtitle } = arg0);
      if (cResult[0] !== title) {
        let stringResult = title;
        if (undefined === title) {
          const intl = util.intl;
          stringResult = intl.string(util.t.SdlRnK);
        }
        cResult[0] = title;
        cResult[1] = stringResult;
        let tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== subtitle) {
        let stringResult1 = subtitle;
        if (undefined === subtitle) {
          const intl2 = util.intl;
          stringResult1 = intl2.string(util.t["R7mv+G"]);
        }
        cResult[2] = subtitle;
        cResult[3] = stringResult1;
        let tmp7 = stringResult1;
      } else {
        tmp7 = cResult[3];
      }
      const tmp9 = closure_8();
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
      const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const isAndroidResult = PlatformUtils.isAndroid();
        cResult[4] = isAndroidResult;
        let tmp12 = isAndroidResult;
        const tmpResult2 = PlatformUtils;
      } else {
        tmp12 = cResult[4];
      }
      let emptyStateContainerBelowContent = tmp4;
      if (undefined !== hasContentAbove && hasContentAbove) {
        emptyStateContainerBelowContent = tmp9.emptyStateContainerBelowContent;
      }
      if (cResult[5] === tmp9.emptyStateContainer) {
        if (cResult[6] === emptyStateContainerBelowContent) {
          let tmp14 = cResult[7];
        }
        let emptyStateContentContainerScreenCentered = !tmp4;
        if (!tmp4) {
          emptyStateContentContainerScreenCentered = tmp9.emptyStateContentContainerScreenCentered;
        }
        if (cResult[8] === tmp9.emptyStateContentContainer) {
          if (cResult[9] === emptyStateContentContainerScreenCentered) {
            let tmp15 = cResult[10];
          }
          if (cResult[11] === tmp9.emptyStateContentTitle) {
            if (cResult[12] === tmp5) {
              let tmp16 = cResult[13];
            }
            if (cResult[14] === tmp9.emptyStateContentDescription) {
              if (cResult[15] === tmp7) {
                let tmp19 = cResult[16];
              }
              if (cResult[17] === action) {
                if (cResult[18] === tmp9.actionWrapper) {
                  let tmp22 = cResult[19];
                }
                if (cResult[20] === tmp15) {
                  if (cResult[21] === tmp16) {
                    if (cResult[22] === tmp19) {
                      if (cResult[23] === tmp22) {
                        let tmp27 = cResult[24];
                      }
                      if (cResult[25] === token) {
                        if (cResult[26] === isChatLockedOpen) {
                          if (cResult[27] === tmp9.backgroundImage) {
                            if (cResult[28] === tmp9.emptyImage) {
                              if (cResult[29] === tmp9.gradient) {
                                let tmp31 = cResult[30];
                              }
                              if (cResult[31] === tmp27) {
                                if (cResult[32] === tmp31) {
                                  if (cResult[33] === tmp14) {
                                    let tmp39 = cResult[34];
                                  }
                                  if (cResult[35] === tmp9.container) {
                                    if (cResult[36] === tmp39) {
                                      let tmp43 = cResult[37];
                                    }
                                    if (cResult[38] === tmp9.container) {
                                      if (cResult[39] === tmp43) {
                                        let tmp47 = cResult[40];
                                      }
                                      return tmp47;
                                    }
                                    const obj2 = { bottom: tmp12, style: tmp9.container, children: tmp43 };
                                    const tmp49 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj2);
                                    cResult[38] = tmp9.container;
                                    cResult[39] = tmp43;
                                    cResult[40] = tmp49;
                                    tmp47 = tmp49;
                                  }
                                  const obj3 = { style: tmp9.container, children: tmp39 };
                                  const tmp46 = hasOwnProperty(React3, obj3);
                                  cResult[35] = tmp9.container;
                                  cResult[36] = tmp39;
                                  cResult[37] = tmp46;
                                  tmp43 = tmp46;
                                }
                              }
                              const obj4 = { style: tmp14, children: null };
                              const items = [tmp27, tmp31];
                              obj4.children = items;
                              const tmp42 = timestampProducer(React3, obj4);
                              cResult[31] = tmp27;
                              cResult[32] = tmp31;
                              cResult[33] = tmp14;
                              cResult[34] = tmp42;
                              tmp39 = tmp42;
                            }
                          }
                        }
                      }
                      let tmp32 = null;
                      if (!isChatLockedOpen) {
                        const obj5 = { children: null };
                        const obj6 = { style: tmp9.emptyImage, children: null };
                        const obj7 = { style: tmp9.backgroundImage, source: _modDef16857, resizeMode: "cover" };
                        obj6.children = hasOwnProperty(FastImageDefault, obj7);
                        const items1 = [hasOwnProperty(React3, obj6)];
                        const obj8 = { style: tmp9.gradient, end: null, start: null, colors: null };
                        ({ END: obj11.end, START: obj11.start } = VerticalGradient);
                        const items2 = ["rgba(0, 0, 0, 0)", token];
                        obj8.colors = items2;
                        items1[1] = hasOwnProperty(LinearGradientDefault, obj8);
                        obj5.children = items1;
                        tmp32 = timestampProducer(React5, obj5);
                        const tmp10Result = FastImageDefault;
                      }
                      cResult[25] = token;
                      cResult[26] = isChatLockedOpen;
                      cResult[27] = tmp9.backgroundImage;
                      cResult[28] = tmp9.emptyImage;
                      cResult[29] = tmp9.gradient;
                      cResult[30] = tmp32;
                      tmp31 = tmp32;
                    }
                  }
                }
                const obj9 = { style: tmp15, children: null };
                const items3 = [tmp16, tmp19, tmp22];
                obj9.children = items3;
                const tmp30 = timestampProducer(React3, obj9);
                cResult[20] = tmp15;
                cResult[21] = tmp16;
                cResult[22] = tmp19;
                cResult[23] = tmp22;
                cResult[24] = tmp30;
                tmp27 = tmp30;
              }
              let tmp24 = null != action;
              if (tmp24) {
                const obj10 = { style: tmp9.actionWrapper, children: action };
                tmp24 = hasOwnProperty(React3, obj10);
              }
              cResult[17] = action;
              cResult[18] = tmp9.actionWrapper;
              cResult[19] = tmp24;
              tmp22 = tmp24;
            }
            const obj12 = {
              variant: "text-md/normal",
              color: "text-default",
              style: tmp9.emptyStateContentDescription,
              children: tmp7,
            };
            const tmp21 = hasOwnProperty(Text_Text.Text, obj12);
            cResult[14] = tmp9.emptyStateContentDescription;
            cResult[15] = tmp7;
            cResult[16] = tmp21;
            tmp19 = tmp21;
          }
          const obj13 = {
            variant: "heading-xl/bold",
            color: "mobile-text-heading-primary",
            style: tmp9.emptyStateContentTitle,
            children: tmp5,
          };
          const tmp18 = hasOwnProperty(Text_Text.Text, obj13);
          cResult[11] = tmp9.emptyStateContentTitle;
          cResult[12] = tmp5;
          cResult[13] = tmp18;
          tmp16 = tmp18;
        }
        const items4 = [tmp9.emptyStateContentContainer, emptyStateContentContainerScreenCentered];
        cResult[8] = tmp9.emptyStateContentContainer;
        cResult[9] = emptyStateContentContainerScreenCentered;
        cResult[10] = items4;
        tmp15 = items4;
      }
      const items5 = [tmp9.emptyStateContainer, emptyStateContainerBelowContent];
      cResult[5] = tmp9.emptyStateContainer;
      cResult[6] = emptyStateContainerBelowContent;
      cResult[7] = items5;
      tmp14 = items5;
      const tmpResult = useToken;
    }
  : function QuestHomeEmptyState(hasContentAbove) {
      let flag = hasContentAbove.hasContentAbove;
      if (flag === undefined) {
        flag = false;
      }
      ({ action, title } = hasContentAbove);
      if (title === undefined) {
        const intl = util.intl;
        title = intl.string(util.t.SdlRnK);
      }
      let subtitle = hasContentAbove.subtitle;
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
      const items = [tmp5.emptyStateContainer];
      let emptyStateContainerBelowContent = flag;
      if (flag) {
        emptyStateContainerBelowContent = tmp5.emptyStateContainerBelowContent;
      }
      const obj5 = { style: items, children: null };
      items[1] = emptyStateContainerBelowContent;
      const items1 = [tmp5.emptyStateContentContainer];
      let emptyStateContentContainerScreenCentered = !flag;
      if (!flag) {
        emptyStateContentContainerScreenCentered = tmp5.emptyStateContentContainerScreenCentered;
      }
      const obj6 = { style: items1, children: null };
      items1[1] = emptyStateContentContainerScreenCentered;
      const items2 = [
        hasOwnProperty(Text_Text.Text, {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: tmp5.emptyStateContentTitle,
          children: title,
        }),
        hasOwnProperty(Text_Text.Text, {
          variant: "text-md/normal",
          color: "text-default",
          style: tmp5.emptyStateContentDescription,
          children: subtitle,
        }),
      ];
      let tmp10Result = null != action;
      if (tmp10Result) {
        const obj9 = { style: tmp5.actionWrapper, children: action };
        tmp10Result = hasOwnProperty(React3, obj9);
      }
      items2[2] = tmp10Result;
      obj6.children = items2;
      const items3 = [timestampProducer(React3, obj6)];
      let tmp12Result = null;
      if (!useChatLayoutDefault().isChatLockedOpen) {
        const obj10 = { children: null };
        const obj11 = { style: tmp5.emptyImage, children: null };
        const obj12 = { style: tmp5.backgroundImage, source: _modDef16857, resizeMode: "cover" };
        obj11.children = hasOwnProperty(FastImageDefault, obj12);
        const items4 = [hasOwnProperty(React3, obj11)];
        const obj24 = { style: tmp5.gradient, end: null, start: null, colors: null };
        ({ END: obj13.end, START: obj13.start } = VerticalGradient);
        const items5 = ["rgba(0, 0, 0, 0)", token];
        obj24.colors = items5;
        items4[1] = hasOwnProperty(LinearGradientDefault, obj24);
        obj10.children = items4;
        tmp12Result = timestampProducer(React5, obj10);
        const tmp8Result = FastImageDefault;
      }
      items3[1] = tmp12Result;
      obj5.children = items3;
      obj4.children = timestampProducer(React3, obj5);
      obj2.children = hasOwnProperty(React3, obj4);
      return hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj2);
    };

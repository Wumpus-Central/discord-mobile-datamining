// discord_app/modules/quests/native/QuestHomeEmptyState.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import useChatLayoutDefault from "../../chat/native/useChatLayout.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import _modDef14863 from "../../../../_runtime/metro/14863__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ImageBackground: closure_4 } = get_ActivityIndicator);
const VerticalGradient = fn(1085).VerticalGradient;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { flex: 1 },
  emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 },
  emptyStateContentContainer: { top: -55, paddingHorizontal: nativeDefault.space.PX_32 },
  emptyStateContentTitle: { textAlign: "center" },
  emptyStateContentDescription: { textAlign: "center", marginTop: 4 },
  emptyImage: {
    flex: 1,
    width: "100%",
    aspectRatio: 1.6375545851528384,
    minWidth: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: -1,
  },
  gradient: { height: 22, width: "100%", position: "absolute", bottom: 0 },
  actionWrapper: { marginTop: 16, alignSelf: "center" },
};
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { top: -55, paddingHorizontal: nativeDefault.space.PX_32 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(34);
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
      const tmp8 = closure_9();
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
                      if (cResult[21] === tmp8.emptyImage) {
                        if (cResult[22] === tmp8.gradient) {
                          let tmp27 = cResult[23];
                        }
                        if (cResult[24] === tmp8.emptyStateContainer) {
                          if (cResult[25] === tmp27) {
                            if (cResult[26] === tmp23) {
                              let tmp34 = cResult[27];
                            }
                            if (cResult[28] === tmp8.container) {
                              if (cResult[29] === tmp34) {
                                let tmp38 = cResult[30];
                              }
                              if (cResult[31] === tmp8.container) {
                                if (cResult[32] === tmp38) {
                                  let tmp42 = cResult[33];
                                }
                                return tmp42;
                              }
                              const obj2 = { bottom: tmp11, style: tmp8.container, children: tmp38 };
                              const tmp44 = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj2);
                              cResult[31] = tmp8.container;
                              cResult[32] = tmp38;
                              cResult[33] = tmp44;
                              tmp42 = tmp44;
                            }
                            const obj3 = { style: tmp8.container, children: tmp34 };
                            const tmp41 = timestampProducer(React3, obj3);
                            cResult[28] = tmp8.container;
                            cResult[29] = tmp34;
                            cResult[30] = tmp41;
                            tmp38 = tmp41;
                          }
                        }
                        const obj4 = { style: tmp8.emptyStateContainer, children: null };
                        const items = [tmp23, tmp27];
                        obj4.children = items;
                        const tmp37 = React5(React3, obj4);
                        cResult[24] = tmp8.emptyStateContainer;
                        cResult[25] = tmp27;
                        cResult[26] = tmp23;
                        cResult[27] = tmp37;
                        tmp34 = tmp37;
                      }
                    }
                  }
                  let tmp28 = null;
                  if (!isChatLockedOpen) {
                    const obj5 = { children: null };
                    const obj6 = { style: tmp8.emptyImage, source: _modDef14863, resizeMode: "cover" };
                    const items1 = [timestampProducer(React4, obj6)];
                    const obj7 = { style: tmp8.gradient, end: null, start: null, colors: null };
                    ({ END: obj10.end, START: obj10.start } = VerticalGradient);
                    const items2 = ["rgba(0, 0, 0, 0)", token];
                    obj7.colors = items2;
                    items1[1] = timestampProducer(LinearGradientDefault, obj7);
                    obj5.children = items1;
                    tmp28 = React5(closure_1_8, obj5);
                  }
                  cResult[19] = token;
                  cResult[20] = isChatLockedOpen;
                  cResult[21] = tmp8.emptyImage;
                  cResult[22] = tmp8.gradient;
                  cResult[23] = tmp28;
                  tmp27 = tmp28;
                }
              }
            }
            const obj8 = { style: tmp8.emptyStateContentContainer, children: null };
            const items3 = [tmp13, tmp15, tmp18];
            obj8.children = items3;
            const tmp26 = React5(React3, obj8);
            cResult[14] = tmp8.emptyStateContentContainer;
            cResult[15] = tmp13;
            cResult[16] = tmp15;
            cResult[17] = tmp18;
            cResult[18] = tmp26;
            tmp23 = tmp26;
          }
          let tmp20 = null != action;
          if (tmp20) {
            const obj9 = { style: tmp8.actionWrapper, children: action };
            tmp20 = timestampProducer(React3, obj9);
          }
          cResult[11] = action;
          cResult[12] = tmp8.actionWrapper;
          cResult[13] = tmp20;
          tmp18 = tmp20;
        }
        const obj11 = {
          variant: "text-md/normal",
          color: "text-default",
          style: tmp8.emptyStateContentDescription,
          children: tmp6,
        };
        const tmp17 = timestampProducer(Text_Text.Text, obj11);
        cResult[8] = tmp8.emptyStateContentDescription;
        cResult[9] = tmp6;
        cResult[10] = tmp17;
        tmp15 = tmp17;
      }
      const tmp14 = timestampProducer(Text_Text.Text, {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp8.emptyStateContentTitle,
        children: tmp4,
      });
      cResult[5] = tmp8.emptyStateContentTitle;
      cResult[6] = tmp4;
      cResult[7] = tmp14;
      tmp13 = tmp14;
      const obj12 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp8.emptyStateContentTitle,
        children: tmp4,
      };
      const tmpResult = useToken;
    }
  : (subtitle) => {
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
      const tmp5 = closure_9();
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
      const obj2 = { bottom: null, style: null, children: null };
      obj2.bottom = PlatformUtils.isAndroid();
      obj2.style = tmp5.container;
      const obj4 = { style: tmp5.container, children: null };
      const obj5 = { style: tmp5.emptyStateContainer, children: null };
      const obj6 = { style: tmp5.emptyStateContentContainer, children: null };
      const items = [
        timestampProducer(Text_Text.Text, {
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: tmp5.emptyStateContentTitle,
          children: title,
        }),
        timestampProducer(Text_Text.Text, {
          variant: "text-md/normal",
          color: "text-default",
          style: tmp5.emptyStateContentDescription,
          children: subtitle,
        }),
      ];
      let tmp9Result = null != action;
      if (tmp9Result) {
        const obj9 = { style: tmp5.actionWrapper, children: action };
        tmp9Result = timestampProducer(React3, obj9);
      }
      items[2] = tmp9Result;
      obj6.children = items;
      const items1 = [React5(React3, obj6)];
      let tmp11Result = null;
      if (!useChatLayoutDefault().isChatLockedOpen) {
        const obj10 = { children: null };
        const obj11 = { style: tmp5.emptyImage, source: _modDef14863, resizeMode: "cover" };
        const items2 = [timestampProducer(React4, obj11)];
        const obj22 = { style: tmp5.gradient, end: null, start: null, colors: null };
        ({ END: obj12.end, START: obj12.start } = VerticalGradient);
        const items3 = ["rgba(0, 0, 0, 0)", token];
        obj22.colors = items3;
        items2[1] = timestampProducer(LinearGradientDefault, obj22);
        obj10.children = items2;
        tmp11Result = React5(closure_1_8, obj10);
      }
      items1[1] = tmp11Result;
      obj5.children = items1;
      obj4.children = React5(React3, obj5);
      obj2.children = timestampProducer(React3, obj4);
      return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj2);
    };

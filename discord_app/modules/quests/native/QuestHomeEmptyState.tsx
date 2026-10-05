// === Module 14866: QuestHomeEmptyState ===

// Module 14866 (QuestHomeEmptyState)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useToken from "useToken" /* 4580 */;
import useChatLayoutDefault from "useChatLayout" /* 4739 */;
import Text_Text from "Text/Text" /* 4886 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import AssetRegistryDefault from "AssetRegistry" /* 14867 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: c3, ImageBackground: closure_4 } = react_native);
const VerticalGradient = Constants.VerticalGradient;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let obj = { container: { flex: 1 }, emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 }, emptyStateContentContainer: obj2, emptyStateContentTitle: { textAlign: "center" }, emptyStateContentDescription: { textAlign: "center", marginTop: 4 }, emptyImage: { flex: 1, width: "100%", aspectRatio: 1.6375545851528384, minWidth: "100%", position: "absolute", bottom: 0, zIndex: -1 }, gradient: { height: 22, width: "100%", position: "absolute", bottom: 0 }, actionWrapper: { marginTop: 16, alignSelf: "center" } };
obj2 = { top: -55, paddingHorizontal: nativeDefault.space.PX_32 };
let closure_9 = createStyles.createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let action;
  let items;
  let items1;
  let items2;
  let items3;
  let subtitle;
  let title;
  let tmp11;
  let tmp4;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(34);
  ({ action, title, subtitle } = arg0);
  if (cResult[0] !== title) {
    let stringResult = title;
    if (undefined === title) {
      const intl = intl3.intl;
      stringResult = intl.string(intl3.t.SdlRnK);
    }
    cResult[0] = title;
    cResult[1] = stringResult;
    tmp4 = stringResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== subtitle) {
    let stringResult1 = subtitle;
    if (undefined === subtitle) {
      const intl2 = intl3.intl;
      stringResult1 = intl2.string(intl3.t["R7mv+G"]);
    }
    cResult[2] = subtitle;
    cResult[3] = stringResult1;
    tmp6 = stringResult1;
  } else {
    tmp6 = cResult[3];
  }
  const tmp8 = closure_9();
  const tmpResult = useToken;
  const token = tmpResult.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult2 = PlatformUtils;
    const isAndroidResult = tmpResult2.isAndroid();
    cResult[4] = isAndroidResult;
    tmp11 = isAndroidResult;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === tmp8.emptyStateContentTitle) {
    let tmp13;
    if (cResult[6] === tmp4) {
      tmp13 = cResult[7];
    }
    if (cResult[8] === tmp8.emptyStateContentDescription) {
      let tmp15;
      if (cResult[9] === tmp6) {
        tmp15 = cResult[10];
      }
      if (cResult[11] === action) {
        let tmp18;
        if (cResult[12] === tmp8.actionWrapper) {
          tmp18 = cResult[13];
        }
        if (cResult[14] === tmp8.emptyStateContentContainer) {
          if (cResult[15] === tmp13) {
            if (cResult[16] === tmp15) {
              let tmp23;
              if (cResult[17] === tmp18) {
                tmp23 = cResult[18];
              }
              if (cResult[19] === token) {
                if (cResult[20] === isChatLockedOpen) {
                  if (cResult[21] === tmp8.emptyImage) {
                    let tmp27;
                    if (cResult[22] === tmp8.gradient) {
                      tmp27 = cResult[23];
                    }
                    if (cResult[24] === tmp8.emptyStateContainer) {
                      if (cResult[25] === tmp27) {
                        let tmp34;
                        if (cResult[26] === tmp23) {
                          tmp34 = cResult[27];
                        }
                        if (cResult[28] === tmp8.container) {
                          let tmp38;
                          if (cResult[29] === tmp34) {
                            tmp38 = cResult[30];
                          }
                          if (cResult[31] === tmp8.container) {
                            let tmp42;
                            if (cResult[32] === tmp38) {
                              tmp42 = cResult[33];
                            }
                            return tmp42;
                          }
                          const obj2 = { bottom: tmp11, style: tmp8.container, children: tmp38 };
                          const tmp44 = metroRequire(common_SafeAreaView.SafeAreaPaddingView, obj2);
                          cResult[31] = tmp8.container;
                          cResult[32] = tmp38;
                          cResult[33] = tmp44;
                          tmp42 = tmp44;
                        }
                        const obj3 = { style: tmp8.container, children: tmp34 };
                        const tmp41 = metroRequire(_false, obj3);
                        cResult[28] = tmp8.container;
                        cResult[29] = tmp34;
                        cResult[30] = tmp41;
                        tmp38 = tmp41;
                      }
                    }
                    const obj4 = { style: tmp8.emptyStateContainer, children: items };
                    items = [tmp23, tmp27];
                    const tmp37 = metroImportDefault(_false, obj4);
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
                const obj5 = { children: items1 };
                const obj6 = { style: tmp8.emptyImage, source: AssetRegistryDefault, resizeMode: "cover" };
                items1 = [metroRequire(React3, obj6), ];
                const obj7 = { style: tmp8.gradient, end: null, start: null, colors: items2 };
                ({ END: obj10.end, START: obj10.start } = VerticalGradient);
                items2 = ["rgba(0, 0, 0, 0)", token];
                items1[1] = metroRequire(LinearGradientDefault, obj7);
                tmp28 = metroImportDefault(metroImportAll, obj5);
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
        const obj8 = { style: tmp8.emptyStateContentContainer, children: items3 };
        items3 = [tmp13, tmp15, tmp18];
        const tmp26 = metroImportDefault(_false, obj8);
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
        tmp20 = metroRequire(_false, obj9);
      }
      cResult[11] = action;
      cResult[12] = tmp8.actionWrapper;
      cResult[13] = tmp20;
      tmp18 = tmp20;
    }
    const obj11 = { variant: "text-md/normal", color: "text-default", style: tmp8.emptyStateContentDescription, children: tmp6 };
    const tmp17 = metroRequire(Text_Text.Text, obj11);
    cResult[8] = tmp8.emptyStateContentDescription;
    cResult[9] = tmp6;
    cResult[10] = tmp17;
    tmp15 = tmp17;
  }
  const obj12 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp8.emptyStateContentTitle, children: tmp4 };
  const tmp14 = metroRequire(Text_Text.Text, obj12);
  cResult[5] = tmp8.emptyStateContentTitle;
  cResult[6] = tmp4;
  cResult[7] = tmp14;
  tmp13 = tmp14;
}) : ((subtitle) => {
  let action;
  let items;
  let items1;
  let items2;
  let items3;
  let obj3;
  let obj4;
  let obj5;
  let title;
  ({ action, title } = subtitle);
  if (title === undefined) {
    const intl = intl3.intl;
    title = intl.string(intl3.t.SdlRnK);
  }
  subtitle = subtitle.subtitle;
  if (subtitle === undefined) {
    const intl2 = intl3.intl;
    subtitle = intl2.string(intl3.t["R7mv+G"]);
  }
  const tmp5 = closure_9();
  const obj = useToken;
  const token = obj.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  const obj2 = { bottom: obj3.isAndroid(), style: tmp5.container, children: metroRequire(_false, obj4) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj3 = PlatformUtils;
  obj4 = { style: tmp5.container, children: metroImportDefault(_false, obj5) };
  const obj6 = { style: tmp5.emptyStateContentContainer, children: items };
  items = [, , ];
  obj5 = { style: tmp5.emptyStateContainer, children: items1 };
  const obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.emptyStateContentTitle, children: title };
  items[0] = metroRequire(Text_Text.Text, obj7);
  const obj8 = { variant: "text-md/normal", color: "text-default", style: tmp5.emptyStateContentDescription, children: subtitle };
  items[1] = metroRequire(Text_Text.Text, obj8);
  let tmp9Result = null != action;
  if (tmp9Result) {
    const obj9 = { style: tmp5.actionWrapper, children: action };
    tmp9Result = metroRequire(_false, obj9);
  }
  items[2] = tmp9Result;
  items1 = [metroImportDefault(_false, obj6), ];
  let tmp11Result = null;
  if (!isChatLockedOpen) {
    const obj10 = { children: items2 };
    const obj11 = { style: tmp5.emptyImage, source: AssetRegistryDefault, resizeMode: "cover" };
    items2 = [metroRequire(React3, obj11), ];
    const obj22 = { style: tmp5.gradient, end: null, start: null, colors: items3 };
    ({ END: obj12.end, START: obj12.start } = VerticalGradient);
    items3 = ["rgba(0, 0, 0, 0)", token];
    items2[1] = metroRequire(LinearGradientDefault, obj22);
    tmp11Result = metroImportDefault(metroImportAll, obj10);
  }
  items1[1] = tmp11Result;
  return metroRequire(SafeAreaPaddingView, obj2);
});
const result = size.fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default tmp5;
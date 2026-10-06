// === Module 8116: StageChannelAgeVerificationNotice ===

// Module 8116 (StageChannelAgeVerificationNotice)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import WarningIcon2 from "WarningIcon" /* 4809 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4818 */;
import Text_Text from "Text/Text" /* 4892 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5108 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 5586 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, containerWithDivider: obj3, divider: obj4, noticeContainer: obj5, icon: { flexShrink: 0 }, linkText: { textDecorationLine: "underline" }, contentText: { flex: 1 } };
obj2 = { marginTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
obj4 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((onConfirmPress) => {
  let formatResult;
  let tmp = onConfirmPress;
  let obj = onConfirmPress(576);
  const cResult = obj.c(4);
  onConfirmPress = onConfirmPress.onConfirmPress;
  const tmp4 = closure_8();
  let closure_1 = tmp4;
  let obj2 = onConfirmPress(5108);
  const isVerifiedTeen = obj2.useIsVerifiedTeen();
  if (cResult[0] === isVerifiedTeen) {
    if (cResult[1] === onConfirmPress) {
      let tmp6;
      if (cResult[2] === tmp4) {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  }
  const intl = tmp(1126).intl;
  const format = intl.format;
  const t = tmp(1126).t;
  if (isVerifiedTeen) {
    const obj3 = {
      hook(children) {
          let obj = {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const tmp = closure_1(dependencyMap[11]);
              const obj = closure_1(dependencyMap[12]);
              tmp(obj.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
              if (onConfirmPress != null) {
                onConfirmPress();
              }
            },
            children
          };
          return hasOwnProperty(Text_Text.Text, obj);
        }
    };
    formatResult = format(t.iWGjcg, obj3);
  } else {
    const obj4 = {
      hook(children) {
          let obj = {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const obj = closure_1(dependencyMap[13]);
              const obj2 = { entryPoint: onConfirmPress(dependencyMap[14]).AgeVerificationModalEntryPoint.START_STAGE_PROMPT };
              const result = obj.showAgeVerificationGetStartedModal(obj2);
              if (closure_1_0 != null) {
                closure_1_0();
              }
            },
            children
          };
          return hasOwnProperty(Text_Text.Text, obj);
        }
    };
    formatResult = format(t.edpbxy, obj4);
  }
  cResult[0] = isVerifiedTeen;
  cResult[1] = onConfirmPress;
  cResult[2] = tmp4;
  cResult[3] = formatResult;
  tmp6 = formatResult;
}) : ((onConfirmPress) => {
  let formatResult;
  onConfirmPress = onConfirmPress.onConfirmPress;
  let closure_1 = closure_8();
  let obj = onConfirmPress(5108);
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  const intl = onConfirmPress(1126).intl;
  const format = intl.format;
  const t = onConfirmPress(1126).t;
  if (isVerifiedTeen) {
    let obj2 = {
      hook(children) {
          let obj = {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const tmp = closure_1(dependencyMap[11]);
              const obj = closure_1(dependencyMap[12]);
              tmp(obj.getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
              if (onConfirmPress != null) {
                onConfirmPress();
              }
            },
            children
          };
          return hasOwnProperty(Text_Text.Text, obj);
        }
    };
    formatResult = format(t.iWGjcg, obj2);
  } else {
    const obj3 = {
      hook(children) {
          let obj = {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const obj = closure_1(dependencyMap[13]);
              const obj2 = { entryPoint: onConfirmPress(dependencyMap[14]).AgeVerificationModalEntryPoint.START_STAGE_PROMPT };
              const result = obj.showAgeVerificationGetStartedModal(obj2);
              if (closure_1_0 != null) {
                closure_1_0();
              }
            },
            children
          };
          return hasOwnProperty(Text_Text.Text, obj);
        }
    };
    formatResult = format(t.edpbxy, obj3);
  }
  return formatResult;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((onConfirmPress) => {
  let items;
  const obj = react2;
  const cResult = obj.c(17);
  onConfirmPress = onConfirmPress.onConfirmPress;
  const noBackground = onConfirmPress.noBackground;
  const tmp4 = closure_8();
  const obj2 = AgeVerificationUtils;
  const isVerifiedTeen = obj2.useIsVerifiedTeen();
  if (noBackground) {
    let WarningIcon;
    if (cResult[0] === isVerifiedTeen) {
      let tmp14;
      let tmp18;
      if (cResult[1] === tmp4.icon) {
        tmp14 = cResult[2];
      }
      if (cResult[3] !== onConfirmPress) {
        const obj3 = { onConfirmPress };
        const tmp21 = hasOwnProperty(closure_9, obj3);
        cResult[3] = onConfirmPress;
        cResult[4] = tmp21;
        tmp18 = tmp21;
      } else {
        tmp18 = cResult[4];
      }
      if (cResult[5] === tmp4.contentText) {
        let tmp22;
        if (cResult[6] === tmp18) {
          tmp22 = cResult[7];
        }
        if (cResult[8] === tmp4.noticeContainer) {
          if (cResult[9] === tmp14) {
            let tmp25;
            if (cResult[10] === tmp22) {
              tmp25 = cResult[11];
            }
            return tmp25;
          }
        }
        const obj4 = { style: tmp4.noticeContainer, children: items };
        items = [tmp14, tmp22];
        const tmp28 = metroRequire(View, obj4);
        cResult[8] = tmp4.noticeContainer;
        cResult[9] = tmp14;
        cResult[10] = tmp22;
        cResult[11] = tmp28;
        tmp25 = tmp28;
      }
      const obj5 = { variant: "text-sm/medium", color: "text-subtle", style: tmp4.contentText, children: tmp18 };
      const tmp24 = hasOwnProperty(Text_Text.Text, obj5);
      cResult[5] = tmp4.contentText;
      cResult[6] = tmp18;
      cResult[7] = tmp24;
      tmp22 = tmp24;
    }
    if (isVerifiedTeen) {
      WarningIcon = CircleInformationIcon.CircleInformationIcon;
    } else {
      WarningIcon = WarningIcon2.WarningIcon;
    }
    obj6 = { size: "refresh_sm", color: nativeDefault.colors.TEXT_DEFAULT, style: tmp4.icon };
    const tmp15Result = hasOwnProperty(WarningIcon, obj6);
    cResult[0] = isVerifiedTeen;
    cResult[1] = tmp4.icon;
    cResult[2] = tmp15Result;
    tmp14 = tmp15Result;
  } else {
    let tmp7;
    const HelpMessageTypes = native.HelpMessageTypes;
    const tmp6 = isVerifiedTeen ? HelpMessageTypes.INFO : HelpMessageTypes.WARNING;
    if (cResult[12] !== onConfirmPress) {
      const obj7 = { onConfirmPress };
      const tmp10 = hasOwnProperty(closure_9, obj7);
      cResult[12] = onConfirmPress;
      cResult[13] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[13];
    }
    if (cResult[14] === tmp6) {
      let tmp11;
      if (cResult[15] === tmp7) {
        tmp11 = cResult[16];
      }
      return tmp11;
    }
    const obj8 = { messageType: tmp6, children: tmp7 };
    const tmp13 = hasOwnProperty(native.HelpMessage, obj8);
    cResult[14] = tmp6;
    cResult[15] = tmp7;
    cResult[16] = tmp13;
    tmp11 = tmp13;
  }
}) : ((onConfirmPress) => {
  let items;
  let obj5;
  let obj7;
  let tmp5Result;
  onConfirmPress = onConfirmPress.onConfirmPress;
  const noBackground = onConfirmPress.noBackground;
  const tmp = closure_8();
  const obj = AgeVerificationUtils;
  const isVerifiedTeen = obj.useIsVerifiedTeen();
  if (noBackground) {
    let WarningIcon;
    const obj2 = { style: tmp.noticeContainer, children: items };
    if (isVerifiedTeen) {
      WarningIcon = CircleInformationIcon.CircleInformationIcon;
    } else {
      WarningIcon = WarningIcon2.WarningIcon;
    }
    const obj3 = { size: "refresh_sm", color: nativeDefault.colors.TEXT_DEFAULT, style: tmp.icon };
    items = [hasOwnProperty(WarningIcon, obj3), ];
    const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.contentText, children: hasOwnProperty(closure_9, obj5) };
    obj5 = { onConfirmPress };
    const Text = Text_Text.Text;
    items[1] = hasOwnProperty(Text, obj4);
    tmp5Result = metroRequire(View, obj2);
  } else {
    const HelpMessage = native.HelpMessage;
    const HelpMessageTypes = native.HelpMessageTypes;
    obj6 = { messageType: isVerifiedTeen ? HelpMessageTypes.INFO : HelpMessageTypes.WARNING, children: hasOwnProperty(closure_9, obj7) };
    obj7 = { onConfirmPress };
    tmp5Result = hasOwnProperty(HelpMessage, obj6);
  }
  return tmp5Result;
});
let obj6 = { TOP: 0, [0]: "TOP", BOTTOM: 1, [1]: "BOTTOM" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let divider;
  let items2;
  let noBackground;
  let onConfirmPress;
  let style;
  const obj = react2;
  const cResult = obj.c(21);
  ({ noBackground, onConfirmPress, style, divider, channelId } = arg0);
  const tmp2 = closure_8();
  const useShouldAgeVerifyToSpeakForCurrentUser = useStageSpeakingForCurrentUser.useShouldAgeVerifyToSpeakForCurrentUser;
  useStageSpeakingForCurrentUser;
  if (useShouldAgeVerifyToSpeakForCurrentUser(channelId)) {
    let arr;
    if (cResult[0] !== divider) {
      const _Array = Array;
      let tmp5 = divider;
      if (!Array.isArray(divider)) {
        let items1;
        if (null != divider) {
          const items = [divider];
          items1 = items;
        } else {
          items1 = [];
        }
        tmp5 = items1;
      }
      cResult[0] = divider;
      cResult[1] = tmp5;
      arr = tmp5;
    } else {
      arr = cResult[1];
    }
    if (cResult[2] === arr) {
      let tmp6;
      if (cResult[3] === tmp2.divider) {
        tmp6 = cResult[4];
      }
      const tmp11 = arr.length > 0 ? tmp2.containerWithDivider : tmp2.container;
      if (cResult[5] === style) {
        let tmp12;
        if (cResult[6] === tmp11) {
          tmp12 = cResult[7];
        }
        if (cResult[8] === noBackground) {
          let tmp13;
          if (cResult[9] === onConfirmPress) {
            tmp13 = cResult[10];
          }
          if (cResult[11] === tmp12) {
            let tmp17;
            if (cResult[12] === tmp13) {
              tmp17 = cResult[13];
            }
            if (cResult[14] === arr) {
              let tmp21;
              if (cResult[15] === tmp2.divider) {
                tmp21 = cResult[16];
              }
              if (cResult[17] === tmp6) {
                if (cResult[18] === tmp17) {
                  let tmp26;
                  if (cResult[19] === tmp21) {
                    tmp26 = cResult[20];
                  }
                  return tmp26;
                }
              }
              const obj2 = { children: items2 };
              items2 = [tmp6, tmp17, tmp21];
              const tmp29 = metroRequire(metroImportDefault, obj2);
              cResult[17] = tmp6;
              cResult[18] = tmp17;
              cResult[19] = tmp21;
              cResult[20] = tmp29;
              tmp26 = tmp29;
            }
            let hasItem = arr.includes(obj6.BOTTOM);
            if (hasItem) {
              const obj3 = { style: tmp2.divider };
              hasItem = hasOwnProperty(View, obj3);
            }
            cResult[14] = arr;
            cResult[15] = tmp2.divider;
            cResult[16] = hasItem;
            tmp21 = hasItem;
          }
          const obj4 = { style: tmp12, children: tmp13 };
          const tmp20 = hasOwnProperty(View, obj4);
          cResult[11] = tmp12;
          cResult[12] = tmp13;
          cResult[13] = tmp20;
          tmp17 = tmp20;
        }
        const obj5 = { noBackground, onConfirmPress };
        const tmp16 = hasOwnProperty(closure_10, obj5);
        cResult[8] = noBackground;
        cResult[9] = onConfirmPress;
        cResult[10] = tmp16;
        tmp13 = tmp16;
      }
      const items3 = [tmp11, style];
      cResult[5] = style;
      cResult[6] = tmp11;
      cResult[7] = items3;
      tmp12 = items3;
    }
    let hasItem1 = arr.includes(obj6.TOP);
    if (hasItem1) {
      obj6 = { style: tmp2.divider };
      hasItem1 = hasOwnProperty(View, obj6);
    }
    cResult[2] = arr;
    cResult[3] = tmp2.divider;
    cResult[4] = hasItem1;
    tmp6 = hasItem1;
  } else {
    return null;
  }
}) : ((arg0) => {
  let channelId;
  let divider;
  let items3;
  let noBackground;
  let obj3;
  let onConfirmPress;
  let style;
  ({ divider, channelId } = arg0);
  ({ noBackground, onConfirmPress, style } = arg0);
  const tmp = closure_8();
  const useShouldAgeVerifyToSpeakForCurrentUser = useStageSpeakingForCurrentUser.useShouldAgeVerifyToSpeakForCurrentUser;
  useStageSpeakingForCurrentUser;
  if (useShouldAgeVerifyToSpeakForCurrentUser(channelId)) {
    const _Array = Array;
    let arr = divider;
    if (!Array.isArray(divider)) {
      let items1;
      if (null != divider) {
        const items = [divider];
        items1 = items;
      } else {
        items1 = [];
      }
      arr = items1;
    }
    const hasItem = arr.includes(obj6.TOP);
    let tmp9 = hasItem;
    if (tmp9) {
      const obj = { style: tmp.divider };
      tmp9 = hasOwnProperty(View, obj);
    }
    const items2 = [tmp9, , ];
    const obj2 = { style: items3, children: hasOwnProperty(closure_10, obj3) };
    items3 = [arr.length > 0 ? tmp.containerWithDivider : tmp.container, style];
    obj3 = { noBackground, onConfirmPress };
    items2[1] = hasOwnProperty(View, obj2);
    let hasItem1 = arr.includes(obj6.BOTTOM);
    if (hasItem1) {
      const obj4 = { style: tmp.divider };
      hasItem1 = hasOwnProperty(View, obj4);
    }
    const obj5 = { children: items2 };
    items2[2] = hasItem1;
    return metroRequire(metroImportDefault, obj5);
  } else {
    return null;
  }
});
let result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelAgeVerificationNotice.tsx");

export default tmp5;
export const DividerPosition = obj6;
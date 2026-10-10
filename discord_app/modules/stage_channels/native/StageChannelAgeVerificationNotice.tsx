// discord_app/modules/stage_channels/native/StageChannelAgeVerificationNotice.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AgeVerificationUtils from "../../age_assurance/AgeVerificationUtils.tsx";
import useStageSpeakingForCurrentUser from "../useStageSpeakingForCurrentUser.tsx";
import WarningIcon2 from "../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: { marginTop: nativeDefault.space.PX_16 },
  containerWithDivider: null,
  divider: null,
  noticeContainer: null,
  icon: null,
  linkText: null,
  contentText: null,
};
let obj3 = { marginTop: nativeDefault.space.PX_16 };
obj2.containerWithDivider = { paddingVertical: nativeDefault.space.PX_16 };
let obj4 = { paddingVertical: nativeDefault.space.PX_16 };
obj2.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.noticeContainer = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
};
obj2.icon = { flexShrink: 0 };
obj2.linkText = { textDecorationLine: "underline" };
obj2.contentText = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StageChannelAgeVerificationNoticeContent(onConfirmPress) {
      const cResult = onConfirmPress(576).c(4);
      onConfirmPress = onConfirmPress.onConfirmPress;
      const tmp4 = closure_8();
      closure_1 = tmp4;
      let obj = onConfirmPress(576);
      const isVerifiedTeen = onConfirmPress(5909).useIsVerifiedTeen();
      if (cResult[0] === isVerifiedTeen) {
        if (cResult[1] === onConfirmPress) {
          if (cResult[2] === tmp4) {
            return cResult[3];
          }
        }
      }
      const intl = tmp(1126).intl;
      const format = intl.format;
      let t = tmp(1126).t;
      if (isVerifiedTeen) {
        t = {
          hook(children) {
            return hasOwnProperty(Text_Text.Text, {
              variant: "text-sm/medium",
              color: "text-default",
              style: closure_1.linkText,
              onPress() {
                const tmp = closure_1(4800);
                tmp(closure_1(2128).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
                if (onConfirmPress != null) {
                  onConfirmPress();
                }
              },
              children,
            });
          },
        };
        let formatResult = format(t.iWGjcg, t);
      } else {
        const obj3 = {
          hook(children) {
            return hasOwnProperty(Text_Text.Text, {
              variant: "text-sm/medium",
              color: "text-default",
              style: closure_1.linkText,
              onPress() {
                const obj = closure_1(7497);
                const result = obj.showAgeVerificationGetStartedModal({
                  entryPoint: onConfirmPress(5918).AgeVerificationModalEntryPoint.START_STAGE_PROMPT,
                });
                if (closure_1_0 != null) {
                  closure_1_0();
                }
              },
              children,
            });
          },
        };
        formatResult = format(t.edpbxy, obj3);
      }
      cResult[0] = isVerifiedTeen;
      cResult[1] = onConfirmPress;
      cResult[2] = tmp4;
      cResult[3] = formatResult;
      const obj2 = onConfirmPress(5909);
    }
  : function StageChannelAgeVerificationNoticeContent(onConfirmPress) {
      onConfirmPress = onConfirmPress.onConfirmPress;
      closure_1 = closure_8();
      const isVerifiedTeen = onConfirmPress(5909).useIsVerifiedTeen();
      const intl = onConfirmPress(1126).intl;
      const format = intl.format;
      const t = onConfirmPress(1126).t;
      if (isVerifiedTeen) {
        const obj2 = {
          hook(children) {
            return hasOwnProperty(Text_Text.Text, {
              variant: "text-sm/medium",
              color: "text-default",
              style: closure_1.linkText,
              onPress() {
                const tmp = closure_1(4800);
                tmp(closure_1(2128).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
                if (onConfirmPress != null) {
                  onConfirmPress();
                }
              },
              children,
            });
          },
        };
        let formatResult = format(t.iWGjcg, obj2);
      } else {
        const obj3 = {
          hook(children) {
            return hasOwnProperty(Text_Text.Text, {
              variant: "text-sm/medium",
              color: "text-default",
              style: closure_1.linkText,
              onPress() {
                const obj = closure_1(7497);
                const result = obj.showAgeVerificationGetStartedModal({
                  entryPoint: onConfirmPress(5918).AgeVerificationModalEntryPoint.START_STAGE_PROMPT,
                });
                if (closure_1_0 != null) {
                  closure_1_0();
                }
              },
              children,
            });
          },
        };
        formatResult = format(t.edpbxy, obj3);
      }
      return formatResult;
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
      const cResult = c.c(17);
      onConfirmPress = onConfirmPress.onConfirmPress;
      const tmp4 = closure_8();
      let icon = AgeVerificationUtils.useIsVerifiedTeen();
      if (onConfirmPress.noBackground) {
        if (cResult[0] === icon) {
          if (cResult[1] === tmp4.icon) {
            if (cResult[3] !== onConfirmPress) {
              const obj3 = { onConfirmPress };
              const tmp21 = hasOwnProperty(closure_9, obj3);
              cResult[3] = onConfirmPress;
              cResult[4] = tmp21;
              let tmp18 = tmp21;
            } else {
              tmp18 = cResult[4];
            }
            if (cResult[5] === tmp4.contentText) {
              if (cResult[6] === tmp18) {
                let tmp22 = cResult[7];
              }
              if (cResult[8] === tmp4.noticeContainer) {
                if (cResult[9] === tmp13) {
                  if (cResult[10] === tmp22) {
                    let tmp25 = cResult[11];
                  }
                  return tmp25;
                }
              }
              const obj4 = { style: tmp4.noticeContainer, children: null };
              const items = [tmp13, tmp22];
              obj4.children = items;
              const tmp28 = timestampProducer(View, obj4);
              cResult[8] = tmp4.noticeContainer;
              cResult[9] = tmp13;
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
        }
        if (icon) {
          let WarningIcon = CircleInformationIcon.CircleInformationIcon;
        } else {
          WarningIcon = WarningIcon2.WarningIcon;
        }
        const obj6 = { size: "refresh_sm", color: nativeDefault.colors.TEXT_DEFAULT, style: tmp4.icon };
        const tmp14Result = hasOwnProperty(WarningIcon, obj6);
        cResult[0] = icon;
        icon = tmp4.icon;
        cResult[1] = icon;
        cResult[2] = tmp14Result;
      } else {
        const HelpMessageTypes = native.HelpMessageTypes;
        const tmp5 = icon ? HelpMessageTypes.INFO : HelpMessageTypes.WARNING;
        if (cResult[12] !== onConfirmPress) {
          const obj7 = { onConfirmPress };
          const tmp9 = hasOwnProperty(closure_9, obj7);
          cResult[12] = onConfirmPress;
          cResult[13] = tmp9;
          let tmp6 = tmp9;
        } else {
          tmp6 = cResult[13];
        }
        if (cResult[14] === tmp5) {
          if (cResult[15] === tmp6) {
            let tmp10 = cResult[16];
          }
          return tmp10;
        }
        const obj8 = { messageType: tmp5, children: tmp6 };
        const tmp12 = hasOwnProperty(native.HelpMessage, obj8);
        cResult[14] = tmp5;
        cResult[15] = tmp6;
        cResult[16] = tmp12;
        tmp10 = tmp12;
      }
    }
  : function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
      onConfirmPress = onConfirmPress.onConfirmPress;
      let tmp = closure_8();
      let Text = require;
      let tmp8Result = dependencyMap;
      const isVerifiedTeen = AgeVerificationUtils.useIsVerifiedTeen();
      if (onConfirmPress.noBackground) {
        const obj2 = { style: tmp.noticeContainer, children: null };
        if (isVerifiedTeen) {
          let WarningIcon = CircleInformationIcon.CircleInformationIcon;
        } else {
          WarningIcon = WarningIcon2.WarningIcon;
        }
        const obj3 = { size: "refresh_sm", color: nativeDefault.colors.TEXT_DEFAULT, style: tmp.icon };
        const items = [hasOwnProperty(WarningIcon, obj3)];
        Text = Text_Text.Text;
        const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.contentText, children: null };
        tmp = closure_9;
        const obj5 = { onConfirmPress };
        obj4.children = hasOwnProperty(closure_9, obj5);
        tmp8Result = hasOwnProperty(Text, obj4);
        items[1] = tmp8Result;
        obj2.children = items;
        timestampProducer(View, obj2);
      } else {
        const HelpMessageTypes = native.HelpMessageTypes;
        const obj6 = { messageType: isVerifiedTeen ? HelpMessageTypes.INFO : HelpMessageTypes.WARNING, children: null };
        const obj7 = { onConfirmPress };
        obj6.children = hasOwnProperty(closure_9, obj7);
        return hasOwnProperty(native.HelpMessage, obj6);
      }
    };
const obj9 = { TOP: 0, [0]: "TOP", BOTTOM: 1, [1]: "BOTTOM" };
ReactCompilerGating = fn(558);
let obj6 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.sm,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelAgeVerificationNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function StageChannelAgeVerificationNotice(arg0) {
      const cResult = c.c(21);
      ({ noBackground, onConfirmPress, style, divider, channelId } = arg0);
      const tmp2 = closure_8();
      if (obj2.useShouldAgeVerifyToSpeakForCurrentUser(channelId)) {
        if (cResult[0] !== divider) {
          const _Array = Array;
          if (Array.isArray(divider)) {
            cResult[0] = divider;
            cResult[1] = divider;
            let arr = divider;
          } else if (null != divider) {
            const items = [divider];
            let items1 = items;
          } else {
            items1 = [];
          }
        } else {
          arr = cResult[1];
        }
        if (cResult[2] === arr) {
          if (cResult[3] === tmp2.divider) {
            let tmp6 = cResult[4];
          }
          const tmp11 = arr.length > 0 ? tmp2.containerWithDivider : tmp2.container;
          if (cResult[5] === style) {
            if (cResult[6] === tmp11) {
              let tmp12 = cResult[7];
            }
            if (cResult[8] === noBackground) {
              if (cResult[9] === onConfirmPress) {
                let tmp13 = cResult[10];
              }
              if (cResult[11] === tmp12) {
                if (cResult[12] === tmp13) {
                  let tmp17 = cResult[13];
                }
                if (cResult[14] === arr) {
                  if (cResult[15] === tmp2.divider) {
                    let tmp21 = cResult[16];
                  }
                  if (cResult[17] === tmp6) {
                    if (cResult[18] === tmp17) {
                      if (cResult[19] === tmp21) {
                        let tmp26 = cResult[20];
                      }
                      return tmp26;
                    }
                  }
                  const obj3 = { children: null };
                  const items2 = [tmp6, tmp17, tmp21];
                  obj3.children = items2;
                  const tmp29 = timestampProducer(React5, obj3);
                  cResult[17] = tmp6;
                  cResult[18] = tmp17;
                  cResult[19] = tmp21;
                  cResult[20] = tmp29;
                  tmp26 = tmp29;
                }
                let hasItem = arr.includes(obj9.BOTTOM);
                if (hasItem) {
                  const obj4 = { style: tmp2.divider };
                  hasItem = hasOwnProperty(View, obj4);
                }
                cResult[14] = arr;
                cResult[15] = tmp2.divider;
                cResult[16] = hasItem;
                tmp21 = hasItem;
              }
              const obj5 = { style: tmp12, children: tmp13 };
              const tmp20 = hasOwnProperty(View, obj5);
              cResult[11] = tmp12;
              cResult[12] = tmp13;
              cResult[13] = tmp20;
              tmp17 = tmp20;
            }
            const obj6 = { noBackground, onConfirmPress };
            const tmp16 = hasOwnProperty(closure_10, obj6);
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
        let hasItem1 = arr.includes(obj9.TOP);
        if (hasItem1) {
          const obj7 = { style: tmp2.divider };
          hasItem1 = hasOwnProperty(View, obj7);
        }
        cResult[2] = arr;
        cResult[3] = tmp2.divider;
        cResult[4] = hasItem1;
        tmp6 = hasItem1;
      } else {
        return null;
      }
      obj2 = useStageSpeakingForCurrentUser;
    }
  : function StageChannelAgeVerificationNotice(arg0) {
      ({ divider, channelId } = arg0);
      ({ noBackground, onConfirmPress, style } = arg0);
      const tmp = closure_8();
      if (obj.useShouldAgeVerifyToSpeakForCurrentUser(channelId)) {
        const _Array = Array;
        if (Array.isArray(divider)) {
          const hasItem = divider.includes(obj9.TOP);
          let tmp9 = hasItem;
          if (hasItem) {
            const obj2 = { style: tmp.divider };
            tmp9 = hasOwnProperty(View, obj2);
          }
          const items = [tmp9, ,];
          const obj3 = { style: null, children: null };
          const items1 = [divider.length > 0 ? tmp.containerWithDivider : tmp.container, style];
          obj3.style = items1;
          const obj4 = { noBackground, onConfirmPress };
          obj3.children = hasOwnProperty(closure_10, obj4);
          items[1] = hasOwnProperty(View, obj3);
          let hasItem1 = divider.includes(obj9.BOTTOM);
          if (hasItem1) {
            const obj5 = { style: tmp.divider };
            hasItem1 = hasOwnProperty(View, obj5);
          }
          const obj6 = { children: null };
          items[2] = hasItem1;
          obj6.children = items;
          return timestampProducer(React5, obj6);
        } else if (null != divider) {
          const items2 = [divider];
          let items3 = items2;
        } else {
          items3 = [];
        }
      } else {
        return null;
      }
      obj = useStageSpeakingForCurrentUser;
    };
export const DividerPosition = obj9;

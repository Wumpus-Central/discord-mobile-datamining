// === Module 7763: StageChannelAgeVerificationNotice ===

// Module 7763 (StageChannelAgeVerificationNotice)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5187 */;
import useStageSpeakingForCurrentUser from "useStageSpeakingForCurrentUser" /* 6205 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1087).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(5191);
let obj2 = { container: { marginTop: nativeDefault.space.PX_16 }, containerWithDivider: null, divider: null, noticeContainer: null, icon: null, linkText: null, contentText: null };
let obj3 = { marginTop: nativeDefault.space.PX_16 };
obj2.containerWithDivider = { paddingVertical: nativeDefault.space.PX_16 };
let obj4 = { paddingVertical: nativeDefault.space.PX_16 };
obj2.divider = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let obj5 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.noticeContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
obj2.icon = { flexShrink: 0 };
obj2.linkText = { textDecorationLine: "underline" };
obj2.contentText = { flex: 1 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  const cResult = onConfirmPress(576).c(17);
  onConfirmPress = onConfirmPress.onConfirmPress;
  const tmp4 = closure_8();
  importDefault = tmp4;
  let obj = onConfirmPress(576);
  let icon = onConfirmPress(6165).useIsVerifiedTeen();
  if (cResult[0] === icon) {
    if (cResult[1] === onConfirmPress) {
      if (cResult[2] === tmp4) {
        if (onConfirmPress.noBackground) {
          if (cResult[4] === icon) {
            if (cResult[5] === tmp4.icon) {
              if (cResult[7] === tmp5) {
                if (cResult[8] === tmp4.contentText) {
                  let tmp15 = cResult[9];
                }
                if (cResult[10] === tmp4.noticeContainer) {
                  if (cResult[11] === tmp10) {
                    if (cResult[12] === tmp15) {
                      let tmp18 = cResult[13];
                    }
                    return tmp18;
                  }
                }
                const obj3 = { style: tmp4.noticeContainer, children: null };
                const items = [tmp10, tmp15];
                obj3.children = items;
                const tmp21 = closure_6(View, obj3);
                cResult[10] = tmp4.noticeContainer;
                cResult[11] = tmp10;
                cResult[12] = tmp15;
                cResult[13] = tmp21;
                tmp18 = tmp21;
              }
              const obj4 = { variant: "text-sm/medium", color: "text-subtle", style: tmp4.contentText, children: tmp5 };
              const tmp17 = closure_5(tmp(5187).Text, obj4);
              cResult[7] = tmp5;
              cResult[8] = tmp4.contentText;
              cResult[9] = tmp17;
              tmp15 = tmp17;
            }
          }
          if (icon) {
            let WarningIcon = tmp(5145).CircleInformationIcon;
          } else {
            WarningIcon = tmp(7838).WarningIcon;
          }
          const obj5 = { size: "refresh_sm", color: nativeDefault.colors.TEXT_DEFAULT, style: tmp4.icon };
          const tmp11Result = closure_5(WarningIcon, obj5);
          cResult[4] = icon;
          icon = tmp4.icon;
          cResult[5] = icon;
          cResult[6] = tmp11Result;
        } else {
          let str = "warning";
          if (icon) {
            str = "info";
          }
          if (cResult[14] === tmp5) {
            if (cResult[15] === str) {
              let tmp7 = cResult[16];
            }
            return tmp7;
          }
          const obj6 = { type: str, message: tmp5, role: "none" };
          const tmp9 = closure_5(tmp(7834).InlineNotice, obj6);
          cResult[14] = tmp5;
          cResult[15] = str;
          cResult[16] = tmp9;
          tmp7 = tmp9;
        }
      }
    }
  }
  const intl = tmp(1128).intl;
  const format = intl.format;
  let t = tmp(1128).t;
  if (icon) {
    t = {
      hook(children) {
          return hasOwnProperty(Text_Text.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const tmp = closure_1(4895);
              tmp(closure_1(2131).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
              if (onConfirmPress != null) {
                onConfirmPress();
              }
            },
            children
          });
        }
    };
    let formatResult = format(t.iWGjcg, t);
  } else {
    const obj7 = {
      hook(children) {
          return hasOwnProperty(Text_Text.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            style: closure_1.linkText,
            onPress() {
              const obj = closure_1(7764);
              const result = obj.showAgeVerificationGetStartedModal({ entryPoint: onConfirmPress(6174).AgeVerificationModalEntryPoint.START_STAGE_PROMPT });
              if (closure_1_0 != null) {
                closure_1_0();
              }
            },
            children
          });
        }
    };
    formatResult = format(t.edpbxy, obj7);
  }
  cResult[0] = icon;
  cResult[1] = onConfirmPress;
  cResult[2] = tmp4;
  cResult[3] = formatResult;
  const obj2 = onConfirmPress(6165);
}) : (function StageChannelAgeVerificationNoticeWrapper(onConfirmPress) {
  onConfirmPress = onConfirmPress.onConfirmPress;
  let contentText = closure_8();
  let Text = onConfirmPress;
  let tmp = dependencyMap;
  const isVerifiedTeen = onConfirmPress(6165).useIsVerifiedTeen();
  const intl = onConfirmPress(1128).intl;
  const format = intl.format;
  const t = onConfirmPress(1128).t;
  if (isVerifiedTeen) {
    const obj2 = {
      hook(children) {
          return hasOwnProperty(Text_Text.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            style: contentText.linkText,
            onPress() {
              const tmp = contentText(4895);
              tmp(contentText(2131).getArticleURL(constants.TIGGER_PAWTECT_LEARN_MORE));
              if (onConfirmPress != null) {
                onConfirmPress();
              }
            },
            children
          });
        }
    };
    let formatResult = format(t.iWGjcg, obj2);
  } else {
    const obj3 = {
      hook(children) {
          return hasOwnProperty(Text_Text.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            style: contentText.linkText,
            onPress() {
              const obj = contentText(7764);
              const result = obj.showAgeVerificationGetStartedModal({ entryPoint: onConfirmPress(6174).AgeVerificationModalEntryPoint.START_STAGE_PROMPT });
              if (closure_1_0 != null) {
                closure_1_0();
              }
            },
            children
          });
        }
    };
    formatResult = format(t.edpbxy, obj3);
  }
  if (onConfirmPress.noBackground) {
    const obj4 = { style: contentText.noticeContainer, children: null };
    if (isVerifiedTeen) {
      let WarningIcon = Text(5145).CircleInformationIcon;
    } else {
      WarningIcon = Text(7838).WarningIcon;
    }
    const obj5 = { size: "refresh_sm", color: contentText(587).colors.TEXT_DEFAULT, style: contentText.icon };
    const items = [closure_5(WarningIcon, obj5), ];
    Text = Text(5187).Text;
    const obj6 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: null };
    contentText = contentText.contentText;
    obj6.style = contentText;
    obj6.children = formatResult;
    tmp = closure_5(Text, obj6);
    items[1] = tmp;
    obj4.children = items;
    closure_6(View, obj4);
  } else {
    let str = "warning";
    if (isVerifiedTeen) {
      str = "info";
    }
    const obj7 = { type: str, message: formatResult, role: "none" };
    return closure_5(Text(7834).InlineNotice, obj7);
  }
  let obj = onConfirmPress(6165);
});
const obj8 = { TOP: 0, [0]: "TOP", BOTTOM: 1, [1]: "BOTTOM" };
ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.sm };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/native/StageChannelAgeVerificationNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function StageChannelAgeVerificationNotice(arg0) {
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
            let hasItem = arr.includes(obj8.BOTTOM);
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
        const tmp16 = hasOwnProperty(closure_9, obj6);
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
    let hasItem1 = arr.includes(obj8.TOP);
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
}) : (function StageChannelAgeVerificationNotice(arg0) {
  ({ divider, channelId } = arg0);
  ({ noBackground, onConfirmPress, style } = arg0);
  const tmp = closure_8();
  if (obj.useShouldAgeVerifyToSpeakForCurrentUser(channelId)) {
    const _Array = Array;
    if (Array.isArray(divider)) {
      const hasItem = divider.includes(obj8.TOP);
      let tmp9 = hasItem;
      if (hasItem) {
        const obj2 = { style: tmp.divider };
        tmp9 = hasOwnProperty(View, obj2);
      }
      const items = [tmp9, , ];
      const obj3 = { style: null, children: null };
      const items1 = [divider.length > 0 ? tmp.containerWithDivider : tmp.container, style];
      obj3.style = items1;
      const obj4 = { noBackground, onConfirmPress };
      obj3.children = hasOwnProperty(closure_9, obj4);
      items[1] = hasOwnProperty(View, obj3);
      let hasItem1 = divider.includes(obj8.BOTTOM);
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
});
export const DividerPosition = obj8;
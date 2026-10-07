// === Module 12105: ChatInputGuard ===

// Module 12105 (ChatInputGuard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Radius from "Radius" /* 681 */;
import Text_Text from "Text/Text" /* 4892 */;
import ButtonGroup from "ButtonGroup" /* 5599 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import ThemedGradientDefault from "ThemedGradient" /* 5918 */;
import TableRow from "TableRow" /* 6000 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7519 */;
import IconButton from "IconButton" /* 7586 */;
import native from "native" /* 8602 */;
import CountDownDefault from "CountDown" /* 10680 */;
import ArrowSmallRightIcon from "ArrowSmallRightIcon" /* 10685 */;
import getChatInputPositionStyleDefault from "getChatInputPositionStyle" /* 11904 */;
import JumpToPresentButtonDefault from "JumpToPresentButton" /* 11910 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(9100).updateChatInputContainerHeight;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { container: { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 }, content: null, underlay: null, wrapper: null, floating: null, text: null, subtext: null, spacing: null };
  let lg;
  if (arg0) {
    lg = nativeDefault.radii.lg;
  }
  const obj3 = { borderRadius: lg, overflow: null };
  let str;
  if (arg0) {
    str = "hidden";
  }
  obj3.overflow = str;
  obj.content = obj3;
  const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: nativeDefault.space.PX_8 + Radius.Radius.lg };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj4.top = undefined;
  obj.underlay = obj4;
  const obj2 = { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 };
  obj.wrapper = { borderColor: nativeDefault.colors.BORDER_MUTED, paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, borderWidth: 1 };
  const obj5 = { borderColor: nativeDefault.colors.BORDER_MUTED, paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, borderWidth: 1 };
  obj.floating = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1 };
  obj.text = { textAlign: "center" };
  const obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1 };
  obj.subtext = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
  const obj7 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
  obj.spacing = { marginTop: nativeDefault.space.PX_8 };
  return obj;
});
fn(558);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((screenIndex) => {
  const cResult = screenIndex(576).c(28);
  screenIndex = screenIndex.screenIndex;
  ({ channelId, onJumpToPresent, children } = screenIndex);
  const tmp5 = useIsUsingClientThemeDefault();
  const obj = screenIndex(576);
  const chatInputFloatingOverlayStyle = screenIndex(11905).useChatInputFloatingOverlayStyle();
  const tmp7 = closure_9(tmp5);
  if (cResult[0] !== screenIndex) {
    const fn = function n(nativeEvent) {
      closure_6(screenIndex, nativeEvent.nativeEvent.layout.height);
    };
    cResult[0] = screenIndex;
    cResult[1] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp10 = getChatInputPositionStyleDefault({ isCreatingThread: false });
    cResult[2] = tmp10;
    let tmp9 = tmp10;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== chatInputFloatingOverlayStyle) {
    const items = [tmp9, chatInputFloatingOverlayStyle];
    cResult[3] = chatInputFloatingOverlayStyle;
    cResult[4] = items;
    let tmp11 = items;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = closure_7(tmp(11905).ChatInputScrimGradient, {});
    cResult[5] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === tmp5) {
    if (cResult[7] === tmp7.underlay) {
      let tmp15 = cResult[8];
    }
    if (cResult[9] !== tmp5) {
      let tmp20 = null;
      if (tmp5) {
        tmp20 = closure_7(ThemedGradientDefault, { absolute: true, wide: true, tall: true, mix: true });
      }
      cResult[9] = tmp5;
      cResult[10] = tmp20;
      let tmp19 = tmp20;
    } else {
      tmp19 = cResult[10];
    }
    if (cResult[11] === children) {
      if (cResult[12] === tmp7.content) {
        if (cResult[13] === tmp19) {
          let tmp22 = cResult[14];
        }
        if (cResult[15] === channelId) {
          if (cResult[16] === onJumpToPresent) {
            if (cResult[17] === screenIndex) {
              let tmp26 = cResult[18];
            }
            if (cResult[19] === tmp7.container) {
              if (cResult[20] === tmp15) {
                if (cResult[21] === tmp22) {
                  if (cResult[22] === tmp26) {
                    let tmp30 = cResult[23];
                  }
                  if (cResult[24] === tmp8) {
                    if (cResult[25] === tmp11) {
                      if (cResult[26] === tmp30) {
                        let tmp34 = cResult[27];
                      }
                      return tmp34;
                    }
                  }
                  const obj3 = { style: tmp11, onLayout: tmp8, collapsable: false, children: null };
                  const items1 = [tmp12, tmp30];
                  obj3.children = items1;
                  const tmp37 = closure_8(closure_5, obj3);
                  cResult[24] = tmp8;
                  cResult[25] = tmp11;
                  cResult[26] = tmp30;
                  cResult[27] = tmp37;
                  tmp34 = tmp37;
                }
              }
            }
            const obj4 = { style: tmp7.container, children: null };
            const items2 = [tmp15, tmp22, tmp26];
            obj4.children = items2;
            const tmp33 = closure_8(closure_5, obj4);
            cResult[19] = tmp7.container;
            cResult[20] = tmp15;
            cResult[21] = tmp22;
            cResult[22] = tmp26;
            cResult[23] = tmp33;
            tmp30 = tmp33;
          }
        }
        let tmp28 = null;
        if (tmpResult.isIOS()) {
          tmp28 = null;
          if (null != channelId) {
            const obj5 = { channelId, screenIndex, onJumpToPresent };
            tmp28 = closure_7(JumpToPresentButtonDefault, obj5);
          }
        }
        cResult[15] = channelId;
        cResult[16] = onJumpToPresent;
        cResult[17] = screenIndex;
        cResult[18] = tmp28;
        tmp26 = tmp28;
        tmpResult = tmp(1369);
      }
    }
    const obj6 = { style: tmp7.content, children: null };
    const items3 = [tmp19, children];
    obj6.children = items3;
    const tmp25 = closure_8(closure_5, obj6);
    cResult[11] = children;
    cResult[12] = tmp7.content;
    cResult[13] = tmp19;
    cResult[14] = tmp25;
    tmp22 = tmp25;
  }
  let tmp16 = null;
  if (!tmp5) {
    const obj7 = { style: tmp7.underlay };
    tmp16 = closure_7(closure_5, obj7);
  }
  cResult[6] = tmp5;
  cResult[7] = tmp7.underlay;
  cResult[8] = tmp16;
  tmp15 = tmp16;
  const obj2 = screenIndex(11905);
}) : ((screenIndex) => {
  screenIndex = screenIndex.screenIndex;
  const channelId = screenIndex.channelId;
  ({ onJumpToPresent, children } = screenIndex);
  const tmp3 = useIsUsingClientThemeDefault();
  const chatInputFloatingOverlayStyle = screenIndex(11905).useChatInputFloatingOverlayStyle();
  const tmp6 = closure_9(tmp3);
  const items = [screenIndex];
  const obj2 = { style: null, onLayout: null, collapsable: false, children: null };
  const callback = noop.useCallback((nativeEvent) => {
    closure_6(screenIndex, nativeEvent.nativeEvent.layout.height);
  }, items);
  const items1 = [getChatInputPositionStyleDefault({ isCreatingThread: false }), chatInputFloatingOverlayStyle];
  obj2.style = items1;
  obj2.onLayout = callback;
  const items2 = [closure_7(screenIndex(11905).ChatInputScrimGradient, {}), ];
  const obj3 = { style: tmp6.container, children: null };
  let tmp10Result = null;
  if (!tmp3) {
    const obj4 = { style: tmp6.underlay };
    tmp10Result = closure_7(closure_5, obj4);
  }
  const items3 = [tmp10Result, , ];
  const obj5 = { style: tmp6.content, children: null };
  let tmp10Result3 = null;
  if (tmp3) {
    tmp10Result3 = closure_7(ThemedGradientDefault, { absolute: true, wide: true, tall: true, mix: true });
  }
  const items4 = [tmp10Result3, children];
  obj5.children = items4;
  items3[1] = closure_8(closure_5, obj5);
  const obj = screenIndex(11905);
  let tmp10Result4 = null;
  if (tmp4Result.isIOS()) {
    tmp10Result4 = null;
    if (null != channelId) {
      const obj6 = { channelId, screenIndex, onJumpToPresent };
      tmp10Result4 = closure_7(JumpToPresentButtonDefault, obj6);
    }
  }
  items3[2] = tmp10Result4;
  obj3.children = items3;
  items2[1] = closure_8(closure_5, obj3);
  obj2.children = items2;
  return closure_8(closure_5, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  const cResult = c.c(46);
  const tmp5 = closure_9(useIsUsingClientThemeDefault());
  if ("simple-action" === type.type) {
    ({ icon, message, countdown: text, subtext, actionIcon, actionLabel, actionOnPress } = type);
    if (cResult[0] === actionIcon) {
      if (cResult[1] === actionLabel) {
        if (cResult[2] === actionOnPress) {
          if (cResult[3] === text) {
            if (cResult[4] === tmp5.spacing) {
              if (cResult[5] === tmp5.text) {
                if (cResult[7] !== message) {
                  const obj2 = { variant: "text-sm/semibold", children: message };
                  const tmp38 = React5(Text_Text.Text, obj2);
                  cResult[7] = message;
                  cResult[8] = tmp38;
                  let tmp36 = tmp38;
                } else {
                  tmp36 = cResult[8];
                }
                if (cResult[9] === actionOnPress) {
                  if (cResult[10] === icon) {
                    if (cResult[11] === subtext) {
                      if (cResult[12] === tmp29) {
                        if (cResult[13] === tmp36) {
                          let tmp39 = cResult[14];
                        }
                        if (cResult[15] === tmp5.floating) {
                          if (cResult[16] === tmp39) {
                            let tmp42 = cResult[17];
                          }
                          return tmp42;
                        }
                        const obj3 = { style: tmp5.floating, children: tmp39 };
                        const tmp45 = React5(hasOwnProperty, obj3);
                        cResult[15] = tmp5.floating;
                        cResult[16] = tmp39;
                        cResult[17] = tmp45;
                        tmp42 = tmp45;
                      }
                    }
                  }
                }
                const obj4 = { arrow: false, accessibilityRole: "button", onPress: actionOnPress, icon, start: true, end: true, trailing: cResult[6], label: tmp36, subLabel: subtext };
                const tmp41 = React5(TableRow.TableRow, obj4);
                cResult[9] = actionOnPress;
                cResult[10] = icon;
                cResult[11] = subtext;
                cResult[12] = cResult[6];
                cResult[13] = tmp36;
                cResult[14] = tmp41;
                tmp39 = tmp41;
              }
            }
          }
        }
      }
    }
    if (null == actionLabel) {
      let tmp33Result2 = null;
      if (null != text) {
        const obj5 = { style: null, deadline: null };
        const items = [, ];
        ({ text: arr4[0], spacing: arr4[1] } = tmp5);
        obj5.style = items;
        obj5.deadline = text;
        tmp33Result2 = React5(CountDownDefault, obj5);
      }
      cResult[0] = actionIcon;
      cResult[1] = actionLabel;
      cResult[2] = actionOnPress;
      cResult[3] = text;
      ({ spacing: tmp3[4], text } = tmp5);
      cResult[5] = text;
      cResult[6] = tmp33Result2;
    }
    const obj6 = { accessibilityLabel: actionLabel, icon: null, size: "sm", onPress: null };
    let tmp33Result = actionIcon;
    if (actionIcon == null) {
      const obj7 = { color: nativeDefault.colors.WHITE };
      tmp33Result = React5(ArrowSmallRightIcon.ArrowSmallRightIcon, obj7);
    }
    obj6.icon = tmp33Result;
    obj6.onPress = actionOnPress;
    tmp33Result2 = React5(IconButton.IconButton, obj6);
  } else {
    ({ message: message2, subtext: subtext2, buttonPrimaryText, buttonPrimaryOnPress, buttonPrimaryDisabled, buttonPrimaryLoading, buttonPrimaryVariant, buttonSecondaryText, buttonSecondaryOnPress, buttonSecondaryDisabled, buttonSecondaryLoading, countdown } = type);
    if (cResult[18] === buttonPrimaryDisabled) {
      if (cResult[19] === buttonPrimaryLoading) {
        if (cResult[20] === buttonPrimaryOnPress) {
          if (cResult[21] === buttonPrimaryText) {
            if (cResult[22] === buttonPrimaryVariant) {
              let tmp6 = cResult[23];
            }
            if (cResult[24] === message2) {
              if (cResult[25] === tmp5.text) {
                let tmp9 = cResult[26];
              }
              if (cResult[27] === tmp5.subtext) {
                if (cResult[28] === subtext2) {
                  let tmp12 = cResult[29];
                }
                if (cResult[30] === tmp6) {
                  if (cResult[31] === buttonSecondaryDisabled) {
                    if (cResult[32] === buttonSecondaryLoading) {
                      if (cResult[33] === buttonSecondaryOnPress) {
                        if (cResult[34] === buttonSecondaryText) {
                          let tmp16 = cResult[35];
                        }
                        if (cResult[36] === countdown) {
                          if (cResult[37] === tmp5.spacing) {
                            if (cResult[38] === tmp5.text) {
                              let tmp22 = cResult[39];
                            }
                            if (cResult[40] === tmp5.wrapper) {
                              if (cResult[41] === tmp9) {
                                if (cResult[42] === tmp12) {
                                  if (cResult[43] === tmp16) {
                                    if (cResult[44] === tmp22) {
                                      let tmp25 = cResult[45];
                                    }
                                    return tmp25;
                                  }
                                }
                              }
                            }
                            const obj8 = { style: tmp5.wrapper, children: null };
                            const items1 = [tmp9, tmp12, tmp16, tmp22];
                            obj8.children = items1;
                            const tmp28 = closure_1_8(hasOwnProperty, obj8);
                            cResult[40] = tmp5.wrapper;
                            cResult[41] = tmp9;
                            cResult[42] = tmp12;
                            cResult[43] = tmp16;
                            cResult[44] = tmp22;
                            cResult[45] = tmp28;
                            tmp25 = tmp28;
                          }
                        }
                        let tmp23 = null;
                        if (null != countdown) {
                          const obj9 = { style: null, deadline: null };
                          const items2 = [, ];
                          ({ text: arr2[0], spacing: arr2[1] } = tmp5);
                          obj9.style = items2;
                          obj9.deadline = countdown;
                          tmp23 = React5(CountDownDefault, obj9);
                        }
                        cResult[36] = countdown;
                        cResult[37] = tmp5.spacing;
                        cResult[38] = tmp5.text;
                        cResult[39] = tmp23;
                        tmp22 = tmp23;
                      }
                    }
                  }
                }
                let tmp19 = tmp6;
                if (null != buttonSecondaryText) {
                  tmp19 = tmp6;
                  if (null != buttonSecondaryOnPress) {
                    const obj10 = { children: null };
                    const items3 = [tmp6, ];
                    const obj11 = { disabled: buttonSecondaryDisabled, loading: buttonSecondaryLoading, text: buttonSecondaryText, onPress: buttonSecondaryOnPress, variant: "secondary", size: "sm" };
                    items3[1] = React5(components_Button_Button.Button, obj11);
                    obj10.children = items3;
                    tmp19 = closure_1_8(native.TwinButtons, obj10);
                  }
                }
                const obj12 = { children: tmp19 };
                const tmp17Result = React5(ButtonGroup.ButtonGroup, obj12);
                cResult[30] = tmp6;
                cResult[31] = buttonSecondaryDisabled;
                cResult[32] = buttonSecondaryLoading;
                cResult[33] = buttonSecondaryOnPress;
                cResult[34] = buttonSecondaryText;
                cResult[35] = tmp17Result;
                tmp16 = tmp17Result;
              }
              let tmp14 = null;
              if (null != subtext2) {
                tmp14 = null;
                if (typeof subtext2 === "string") {
                  tmp14 = null;
                  if (subtext2.length > 0) {
                    const obj13 = { style: tmp5.subtext, variant: "text-xs/medium", color: "text-muted", children: subtext2 };
                    tmp14 = React5(Text_Text.Text, obj13);
                  }
                }
              }
              cResult[27] = tmp5.subtext;
              cResult[28] = subtext2;
              cResult[29] = tmp14;
              tmp12 = tmp14;
            }
            const obj14 = { style: tmp5.text, variant: "text-sm/semibold", children: message2 };
            const tmp11 = React5(Text_Text.Text, obj14);
            cResult[24] = message2;
            cResult[25] = tmp5.text;
            cResult[26] = tmp11;
            tmp9 = tmp11;
          }
        }
      }
    }
    const obj15 = { disabled: buttonPrimaryDisabled, loading: buttonPrimaryLoading, text: buttonPrimaryText, onPress: buttonPrimaryOnPress, size: "sm", variant: buttonPrimaryVariant };
    const tmp8 = React5(components_Button_Button.Button, obj15);
    cResult[18] = buttonPrimaryDisabled;
    cResult[19] = buttonPrimaryLoading;
    cResult[20] = buttonPrimaryOnPress;
    cResult[21] = buttonPrimaryText;
    cResult[22] = buttonPrimaryVariant;
    cResult[23] = tmp8;
    tmp6 = tmp8;
  }
}) : ((type) => {
  const tmp3 = closure_9(useIsUsingClientThemeDefault());
  if ("simple-action" === type.type) {
    ({ countdown, actionIcon, actionLabel, actionOnPress } = type);
    const obj2 = { style: tmp3.floating, children: null };
    ({ icon, message, subtext } = type);
    const obj3 = { arrow: false, accessibilityRole: "button", onPress: actionOnPress, icon, start: true, end: true, trailing: null, label: null, subLabel: null };
    if (null != actionLabel) {
      if (null != actionOnPress) {
        const obj4 = { accessibilityLabel: actionLabel, icon: null, size: "sm", onPress: null };
        if (actionIcon == null) {
          const obj5 = { color: nativeDefault.colors.WHITE };
          actionIcon = React5(ArrowSmallRightIcon.ArrowSmallRightIcon, obj5);
        }
        obj4.icon = actionIcon;
        obj4.onPress = actionOnPress;
        let tmp7Result = React5(IconButton.IconButton, obj4);
      }
      obj3.trailing = tmp7Result;
      const obj6 = { variant: "text-sm/semibold", children: message };
      obj3.label = React5(Text_Text.Text, obj6);
      obj3.subLabel = subtext;
      obj2.children = React5(tmp10, obj3);
      return React5(hasOwnProperty, obj2);
    }
    tmp7Result = null;
    if (null != countdown) {
      const obj7 = { style: null, deadline: null };
      const items = [, ];
      ({ text: arr3[0], spacing: arr3[1] } = tmp3);
      obj7.style = items;
      obj7.deadline = countdown;
      tmp7Result = React5(CountDownDefault, obj7);
    }
  } else {
    ({ subtext: subtext2, buttonSecondaryText, buttonSecondaryOnPress, countdown: countdown2 } = type);
    ({ message: message2, buttonPrimaryText, buttonPrimaryOnPress, buttonPrimaryDisabled, buttonPrimaryLoading, buttonPrimaryVariant, buttonSecondaryDisabled, buttonSecondaryLoading } = type);
    const obj8 = { disabled: buttonPrimaryDisabled, loading: buttonPrimaryLoading, text: buttonPrimaryText, onPress: buttonPrimaryOnPress, size: "sm", variant: buttonPrimaryVariant };
    const tmp15 = React5(components_Button_Button.Button, obj8);
    const obj9 = { style: tmp3.wrapper, children: null };
    const obj10 = { style: tmp3.text, variant: "text-sm/semibold", children: message2 };
    const items1 = [React5(Text_Text.Text, obj10), , , ];
    let tmp13Result = null;
    if (null != subtext2) {
      tmp13Result = null;
      if (typeof subtext2 === "string") {
        tmp13Result = null;
        if (subtext2.length > 0) {
          const obj = { style: tmp3.subtext, variant: "text-xs/medium", color: "text-muted", children: subtext2 };
          tmp13Result = React5(Text_Text.Text, obj);
        }
      }
    }
    items1[1] = tmp13Result;
    let tmp16Result = tmp15;
    if (null != buttonSecondaryText) {
      tmp16Result = tmp15;
      if (null != buttonSecondaryOnPress) {
        const obj11 = { children: null };
        const items2 = [tmp15, ];
        const obj12 = { disabled: buttonSecondaryDisabled, loading: buttonSecondaryLoading, text: buttonSecondaryText, onPress: buttonSecondaryOnPress, variant: "secondary", size: "sm" };
        items2[1] = React5(components_Button_Button.Button, obj12);
        obj11.children = items2;
        tmp16Result = closure_1_8(native.TwinButtons, obj11);
      }
    }
    const obj13 = { children: tmp16Result };
    items1[2] = React5(ButtonGroup.ButtonGroup, obj13);
    let tmp13Result2 = null;
    if (null != countdown2) {
      const obj14 = { style: null, deadline: null };
      const items3 = [, ];
      ({ text: arr2[0], spacing: arr2[1] } = tmp3);
      obj14.style = items3;
      obj14.deadline = countdown2;
      tmp13Result2 = React5(CountDownDefault, obj14);
    }
    items1[3] = tmp13Result2;
    obj9.children = items1;
    return closure_1_8(hasOwnProperty, obj9);
  }
});
export const ChatInputGuardContainer = tmp4;
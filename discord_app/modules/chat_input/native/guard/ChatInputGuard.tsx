// discord_app/modules/chat_input/native/guard/ChatInputGuard.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Radius from "../../../../../discord_common/js/packages/tokens/radii/generated/generated-definitions.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ButtonGroup2 from "../../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import ThemedGradientDefault from "../../../client_themes/native/ThemedGradient.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import useIsUsingClientThemeDefault from "../../../client_themes/native/useIsUsingClientTheme.tsx";
import IconButton2 from "../../../../design/components/Button/native/IconButton.native.tsx";
import native from "../../../../design/components/experimental/native.tsx";
import useChatBottomManagerUIStore from "../useChatBottomManagerUIStore.tsx";
import CountDownDefault from "../../../../components_native/common/CountDown.tsx";
import ArrowSmallRightIcon2 from "../../../../design/components/Icon/native/redesign/generated/ArrowSmallRightIcon.tsx";
import getChatInputPositionStyleDefault from "../getChatInputPositionStyle.tsx";
import JumpToPresentButtonDefault from "../../../../components_native/chat/JumpToPresentButton.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let screenIndex;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
let closure_6 = useChatBottomManagerUIStore.updateChatInputContainerHeight;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let obj3;
  let obj4;
  let str;
  let lg;
  const obj = {
    container: { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 },
    content: obj3,
    underlay: obj4,
    wrapper: {
      borderColor: nativeDefault.colors.BORDER_MUTED,
      paddingHorizontal: nativeDefault.space.PX_12,
      paddingTop: nativeDefault.space.PX_16,
      backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
      borderRadius: nativeDefault.radii.lg,
      borderWidth: 1,
    },
    floating: {
      backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
      borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
      borderColor: nativeDefault.colors.BORDER_MUTED,
      borderWidth: 1,
    },
    text: { textAlign: "center" },
    subtext: { marginTop: nativeDefault.space.PX_4, textAlign: "center" },
    spacing: { marginTop: nativeDefault.space.PX_8 },
  };
  ({ paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 });
  if (arg0) {
    lg = nativeDefault.radii.lg;
  }
  obj3 = { borderRadius: lg, overflow: str };
  str = undefined;
  if (arg0) {
    str = "hidden";
  }
  obj4 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    height: nativeDefault.space.PX_8 + Radius.Radius.lg,
    top: undefined,
  };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  ({
    borderColor: nativeDefault.colors.BORDER_MUTED,
    paddingHorizontal: nativeDefault.space.PX_12,
    paddingTop: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.lg,
    borderWidth: 1,
  });
  ({
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    borderWidth: 1,
  });
  ({ marginTop: nativeDefault.space.PX_4, textAlign: "center" });
  ({ marginTop: nativeDefault.space.PX_8 });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (screenIndex) => {
      let channelId;
      let children;
      let items1;
      let items2;
      let items3;
      let onJumpToPresent;
      let tmp11;
      let tmp12;
      let tmp8;
      let tmp9;
      const obj = screenIndex(576);
      const cResult = obj.c(28);
      screenIndex = screenIndex.screenIndex;
      ({ channelId, onJumpToPresent, children } = screenIndex);
      const tmp5 = useIsUsingClientThemeDefault();
      const obj2 = screenIndex(11891);
      const chatInputFloatingOverlayStyle = obj2.useChatInputFloatingOverlayStyle();
      const tmp7 = closure_9(tmp5);
      if (cResult[0] !== screenIndex) {
        const fn = function n(nativeEvent) {
          closure_6(screenIndex, nativeEvent.nativeEvent.layout.height);
        };
        cResult[0] = screenIndex;
        cResult[1] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp10 = getChatInputPositionStyleDefault({ isCreatingThread: false });
        cResult[2] = tmp10;
        tmp9 = tmp10;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== chatInputFloatingOverlayStyle) {
        const items = [tmp9, chatInputFloatingOverlayStyle];
        cResult[3] = chatInputFloatingOverlayStyle;
        cResult[4] = items;
        tmp11 = items;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = closure_7(screenIndex(11891).ChatInputScrimGradient, {});
        cResult[5] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === tmp5) {
        let tmp15;
        let tmp19;
        if (cResult[7] === tmp7.underlay) {
          tmp15 = cResult[8];
        }
        if (cResult[9] !== tmp5) {
          let tmp20 = null;
          if (tmp5) {
            tmp20 = closure_7(ThemedGradientDefault, { absolute: true, wide: true, tall: true, mix: true });
          }
          cResult[9] = tmp5;
          cResult[10] = tmp20;
          tmp19 = tmp20;
        } else {
          tmp19 = cResult[10];
        }
        if (cResult[11] === children) {
          if (cResult[12] === tmp7.content) {
            let tmp22;
            if (cResult[13] === tmp19) {
              tmp22 = cResult[14];
            }
            if (cResult[15] === channelId) {
              if (cResult[16] === onJumpToPresent) {
                let tmp26;
                if (cResult[17] === screenIndex) {
                  tmp26 = cResult[18];
                }
                if (cResult[19] === tmp7.container) {
                  if (cResult[20] === tmp15) {
                    if (cResult[21] === tmp22) {
                      let tmp30;
                      if (cResult[22] === tmp26) {
                        tmp30 = cResult[23];
                      }
                      if (cResult[24] === tmp8) {
                        if (cResult[25] === tmp11) {
                          let tmp34;
                          if (cResult[26] === tmp30) {
                            tmp34 = cResult[27];
                          }
                          return tmp34;
                        }
                      }
                      const obj3 = { style: tmp11, onLayout: tmp8, collapsable: false, children: items1 };
                      items1 = [tmp12, tmp30];
                      const tmp37 = closure_8(closure_5, obj3);
                      cResult[24] = tmp8;
                      cResult[25] = tmp11;
                      cResult[26] = tmp30;
                      cResult[27] = tmp37;
                      tmp34 = tmp37;
                    }
                  }
                }
                const obj4 = { style: tmp7.container, children: items2 };
                items2 = [tmp15, tmp22, tmp26];
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
            const tmpResult = screenIndex(1369);
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
          }
        }
        const obj6 = { style: tmp7.content, children: items3 };
        items3 = [tmp19, children];
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
    }
  : (screenIndex) => {
      let callback;
      let children;
      let items1;
      let items2;
      let items3;
      let items4;
      let onJumpToPresent;
      screenIndex = screenIndex.screenIndex;
      const channelId = screenIndex.channelId;
      ({ onJumpToPresent, children } = screenIndex);
      const tmp3 = useIsUsingClientThemeDefault();
      const obj = screenIndex(11891);
      const chatInputFloatingOverlayStyle = obj.useChatInputFloatingOverlayStyle();
      const tmp6 = closure_9(tmp3);
      const items = [screenIndex];
      const obj2 = { style: items1, onLayout: callback, collapsable: false, children: items2 };
      callback = react.useCallback((nativeEvent) => {
        closure_6(screenIndex, nativeEvent.nativeEvent.layout.height);
      }, items);
      items1 = [getChatInputPositionStyleDefault({ isCreatingThread: false }), chatInputFloatingOverlayStyle];
      items2 = [closure_7(screenIndex(11891).ChatInputScrimGradient, {})];
      let tmp10Result = null;
      const obj3 = { style: tmp6.container, children: items3 };
      const tmp4 = screenIndex;
      if (!tmp3) {
        const obj4 = { style: tmp6.underlay };
        tmp10Result = closure_7(closure_5, obj4);
      }
      items3 = [tmp10Result, ,];
      let tmp10Result3 = null;
      const obj5 = { style: tmp6.content, children: items4 };
      if (tmp3) {
        tmp10Result3 = closure_7(ThemedGradientDefault, { absolute: true, wide: true, tall: true, mix: true });
      }
      items4 = [tmp10Result3, children];
      items3[1] = closure_8(closure_5, obj5);
      let tmp10Result4 = null;
      const tmp4Result = tmp4(1369);
      if (tmp4Result.isIOS()) {
        tmp10Result4 = null;
        if (null != channelId) {
          const obj6 = { channelId, screenIndex, onJumpToPresent };
          tmp10Result4 = closure_7(JumpToPresentButtonDefault, obj6);
        }
      }
      items3[2] = tmp10Result4;
      items2[1] = closure_8(closure_5, obj3);
      return closure_8(closure_5, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (type) => {
      let actionIcon;
      let actionLabel;
      let actionOnPress;
      let buttonPrimaryDisabled;
      let buttonPrimaryLoading;
      let buttonPrimaryOnPress;
      let buttonPrimaryText;
      let buttonPrimaryVariant;
      let buttonSecondaryDisabled;
      let buttonSecondaryLoading;
      let buttonSecondaryOnPress;
      let buttonSecondaryText;
      let countdown;
      let countdown2;
      let icon;
      let items;
      let items1;
      let items2;
      let items3;
      let message;
      let message2;
      let subtext;
      let subtext2;
      let tmp33Result;
      const obj = react2;
      const cResult = obj.c(46);
      const tmp5 = closure_9(useIsUsingClientThemeDefault());
      if ("simple-action" === type.type) {
        let tmp29;
        let tmp33Result2;
        ({ icon, message, countdown, subtext, actionIcon, actionLabel, actionOnPress } = type);
        if (cResult[0] === actionIcon) {
          if (cResult[1] === actionLabel) {
            if (cResult[2] === actionOnPress) {
              if (cResult[3] === countdown) {
                if (cResult[4] === tmp5.spacing) {
                  let tmp35;
                  if (cResult[5] === tmp5.text) {
                    tmp29 = cResult[6];
                  }
                  if (cResult[7] !== message) {
                    const obj2 = { variant: "text-sm/semibold", children: message };
                    const tmp37 = metroImportDefault(Text_Text.Text, obj2);
                    cResult[7] = message;
                    cResult[8] = tmp37;
                    tmp35 = tmp37;
                  } else {
                    tmp35 = cResult[8];
                  }
                  if (cResult[9] === actionOnPress) {
                    if (cResult[10] === icon) {
                      if (cResult[11] === subtext) {
                        if (cResult[12] === tmp29) {
                          let tmp38;
                          if (cResult[13] === tmp35) {
                            tmp38 = cResult[14];
                          }
                          if (cResult[15] === tmp5.floating) {
                            let tmp41;
                            if (cResult[16] === tmp38) {
                              tmp41 = cResult[17];
                            }
                            return tmp41;
                          }
                          const obj3 = { style: tmp5.floating, children: tmp38 };
                          const tmp44 = metroImportDefault(hasOwnProperty, obj3);
                          cResult[15] = tmp5.floating;
                          cResult[16] = tmp38;
                          cResult[17] = tmp44;
                          tmp41 = tmp44;
                        }
                      }
                    }
                  }
                  const obj4 = {
                    arrow: false,
                    accessibilityRole: "button",
                    onPress: actionOnPress,
                    icon,
                    start: true,
                    end: true,
                    trailing: tmp29,
                    label: tmp35,
                    subLabel: subtext,
                  };
                  const tmp40 = metroImportDefault(TableRow.TableRow, obj4);
                  cResult[9] = actionOnPress;
                  cResult[10] = icon;
                  cResult[11] = subtext;
                  cResult[12] = tmp29;
                  cResult[13] = tmp35;
                  cResult[14] = tmp40;
                  tmp38 = tmp40;
                }
              }
            }
          }
        }
        if (null != actionLabel) {
          if (null != actionOnPress) {
            const obj5 = { accessibilityLabel: actionLabel, icon: tmp33Result, size: "sm", onPress: actionOnPress };
            tmp33Result = actionIcon;
            const IconButton = IconButton2.IconButton;
            if (actionIcon == null) {
              const obj6 = { color: nativeDefault.colors.WHITE };
              const ArrowSmallRightIcon = ArrowSmallRightIcon2.ArrowSmallRightIcon;
              tmp33Result = metroImportDefault(ArrowSmallRightIcon, obj6);
            }
            tmp33Result2 = metroImportDefault(IconButton, obj5);
          }
          cResult[0] = actionIcon;
          cResult[1] = actionLabel;
          cResult[2] = actionOnPress;
          cResult[3] = countdown;
          cResult[4] = tmp5.spacing;
          cResult[5] = tmp5.text;
          cResult[6] = tmp33Result2;
          tmp29 = tmp33Result2;
        }
        tmp33Result2 = null;
        if (null != countdown) {
          const obj7 = { style: items, deadline: countdown };
          items = [,];
          ({ text: arr4[0], spacing: arr4[1] } = tmp5);
          tmp33Result2 = metroImportDefault(CountDownDefault, obj7);
        }
      } else {
        ({
          message: message2,
          subtext: subtext2,
          buttonPrimaryText,
          buttonPrimaryOnPress,
          buttonPrimaryDisabled,
          buttonPrimaryLoading,
          buttonPrimaryVariant,
          buttonSecondaryText,
          buttonSecondaryOnPress,
          buttonSecondaryDisabled,
          buttonSecondaryLoading,
          countdown: countdown2,
        } = type);
        if (cResult[18] === buttonPrimaryDisabled) {
          if (cResult[19] === buttonPrimaryLoading) {
            if (cResult[20] === buttonPrimaryOnPress) {
              if (cResult[21] === buttonPrimaryText) {
                let tmp6;
                if (cResult[22] === buttonPrimaryVariant) {
                  tmp6 = cResult[23];
                }
                if (cResult[24] === message2) {
                  let tmp9;
                  if (cResult[25] === tmp5.text) {
                    tmp9 = cResult[26];
                  }
                  if (cResult[27] === tmp5.subtext) {
                    let tmp12;
                    if (cResult[28] === subtext2) {
                      tmp12 = cResult[29];
                    }
                    if (cResult[30] === tmp6) {
                      if (cResult[31] === buttonSecondaryDisabled) {
                        if (cResult[32] === buttonSecondaryLoading) {
                          if (cResult[33] === buttonSecondaryOnPress) {
                            let tmp16;
                            if (cResult[34] === buttonSecondaryText) {
                              tmp16 = cResult[35];
                            }
                            if (cResult[36] === countdown2) {
                              if (cResult[37] === tmp5.spacing) {
                                let tmp22;
                                if (cResult[38] === tmp5.text) {
                                  tmp22 = cResult[39];
                                }
                                if (cResult[40] === tmp5.wrapper) {
                                  if (cResult[41] === tmp9) {
                                    if (cResult[42] === tmp12) {
                                      if (cResult[43] === tmp16) {
                                        let tmp25;
                                        if (cResult[44] === tmp22) {
                                          tmp25 = cResult[45];
                                        }
                                        return tmp25;
                                      }
                                    }
                                  }
                                }
                                const obj8 = { style: tmp5.wrapper, children: items1 };
                                items1 = [tmp9, tmp12, tmp16, tmp22];
                                const tmp28 = metroImportAll(hasOwnProperty, obj8);
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
                            if (null != countdown2) {
                              const obj9 = { style: items2, deadline: countdown2 };
                              items2 = [,];
                              ({ text: arr2[0], spacing: arr2[1] } = tmp5);
                              tmp23 = metroImportDefault(CountDownDefault, obj9);
                            }
                            cResult[36] = countdown2;
                            cResult[37] = tmp5.spacing;
                            cResult[38] = tmp5.text;
                            cResult[39] = tmp23;
                            tmp22 = tmp23;
                          }
                        }
                      }
                    }
                    let tmp19 = tmp6;
                    const ButtonGroup = ButtonGroup2.ButtonGroup;
                    if (null != buttonSecondaryText) {
                      tmp19 = tmp6;
                      if (null != buttonSecondaryOnPress) {
                        const obj10 = { children: items3 };
                        items3 = [tmp6];
                        const TwinButtons = native.TwinButtons;
                        const obj11 = {
                          disabled: buttonSecondaryDisabled,
                          loading: buttonSecondaryLoading,
                          text: buttonSecondaryText,
                          onPress: buttonSecondaryOnPress,
                          variant: "secondary",
                          size: "sm",
                        };
                        items3[1] = metroImportDefault(components_Button_Button.Button, obj11);
                        tmp19 = metroImportAll(TwinButtons, obj10);
                      }
                    }
                    const obj12 = { children: tmp19 };
                    const tmp17Result = metroImportDefault(ButtonGroup, obj12);
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
                        const obj13 = {
                          style: tmp5.subtext,
                          variant: "text-xs/medium",
                          color: "text-muted",
                          children: subtext2,
                        };
                        tmp14 = metroImportDefault(Text_Text.Text, obj13);
                      }
                    }
                  }
                  cResult[27] = tmp5.subtext;
                  cResult[28] = subtext2;
                  cResult[29] = tmp14;
                  tmp12 = tmp14;
                }
                const obj14 = { style: tmp5.text, variant: "text-sm/semibold", children: message2 };
                const tmp11 = metroImportDefault(Text_Text.Text, obj14);
                cResult[24] = message2;
                cResult[25] = tmp5.text;
                cResult[26] = tmp11;
                tmp9 = tmp11;
              }
            }
          }
        }
        const obj15 = {
          disabled: buttonPrimaryDisabled,
          loading: buttonPrimaryLoading,
          text: buttonPrimaryText,
          onPress: buttonPrimaryOnPress,
          size: "sm",
          variant: buttonPrimaryVariant,
        };
        const tmp8 = metroImportDefault(components_Button_Button.Button, obj15);
        cResult[18] = buttonPrimaryDisabled;
        cResult[19] = buttonPrimaryLoading;
        cResult[20] = buttonPrimaryOnPress;
        cResult[21] = buttonPrimaryText;
        cResult[22] = buttonPrimaryVariant;
        cResult[23] = tmp8;
        tmp6 = tmp8;
      }
    }
  : (type) => {
      let actionIcon;
      let actionLabel;
      let actionOnPress;
      let buttonPrimaryDisabled;
      let buttonPrimaryLoading;
      let buttonPrimaryOnPress;
      let buttonPrimaryText;
      let buttonPrimaryVariant;
      let buttonSecondaryDisabled;
      let buttonSecondaryLoading;
      let buttonSecondaryOnPress;
      let buttonSecondaryText;
      let countdown;
      let countdown2;
      let icon;
      let items;
      let items1;
      let items2;
      let items3;
      let message;
      let message2;
      let subtext;
      let subtext2;
      const tmp3 = closure_9(useIsUsingClientThemeDefault());
      if ("simple-action" === type.type) {
        let tmp7Result;
        ({ countdown, actionIcon, actionLabel, actionOnPress } = type);
        const obj2 = { style: tmp3.floating, children: null };
        ({ icon, message, subtext } = type);
        const obj3 = {
          arrow: false,
          accessibilityRole: "button",
          onPress: actionOnPress,
          icon,
          start: true,
          end: true,
          trailing: null,
          label: null,
          subLabel: null,
        };
        if (null != actionLabel) {
          if (null != actionOnPress) {
            const obj4 = { accessibilityLabel: actionLabel, icon: actionIcon, size: "sm", onPress: actionOnPress };
            const IconButton = IconButton2.IconButton;
            if (actionIcon == null) {
              const obj5 = { color: nativeDefault.colors.WHITE };
              const ArrowSmallRightIcon = ArrowSmallRightIcon2.ArrowSmallRightIcon;
              actionIcon = metroImportDefault(ArrowSmallRightIcon, obj5);
            }
            tmp7Result = metroImportDefault(IconButton, obj4);
          }
          obj3.trailing = tmp7Result;
          const obj6 = { variant: "text-sm/semibold", children: message };
          obj3.label = metroImportDefault(Text_Text.Text, obj6);
          obj3.subLabel = subtext;
          obj2.children = metroImportDefault(tmp10, obj3);
          return metroImportDefault(hasOwnProperty, obj2);
        }
        tmp7Result = null;
        if (null != countdown) {
          const obj7 = { style: items, deadline: countdown };
          items = [,];
          ({ text: arr3[0], spacing: arr3[1] } = tmp3);
          tmp7Result = metroImportDefault(CountDownDefault, obj7);
        }
      } else {
        ({ subtext: subtext2, buttonSecondaryText, buttonSecondaryOnPress, countdown: countdown2 } = type);
        ({
          message: message2,
          buttonPrimaryText,
          buttonPrimaryOnPress,
          buttonPrimaryDisabled,
          buttonPrimaryLoading,
          buttonPrimaryVariant,
          buttonSecondaryDisabled,
          buttonSecondaryLoading,
        } = type);
        const obj8 = {
          disabled: buttonPrimaryDisabled,
          loading: buttonPrimaryLoading,
          text: buttonPrimaryText,
          onPress: buttonPrimaryOnPress,
          size: "sm",
          variant: buttonPrimaryVariant,
        };
        const tmp15 = metroImportDefault(components_Button_Button.Button, obj8);
        const obj10 = { style: tmp3.text, variant: "text-sm/semibold", children: message2 };
        const obj9 = { style: tmp3.wrapper, children: items1 };
        items1 = [metroImportDefault(Text_Text.Text, obj10), , ,];
        let tmp13Result = null;
        if (null != subtext2) {
          tmp13Result = null;
          if (typeof subtext2 === "string") {
            tmp13Result = null;
            if (subtext2.length > 0) {
              const obj = { style: tmp3.subtext, variant: "text-xs/medium", color: "text-muted", children: subtext2 };
              tmp13Result = metroImportDefault(Text_Text.Text, obj);
            }
          }
        }
        items1[1] = tmp13Result;
        let tmp16Result = tmp15;
        const ButtonGroup = ButtonGroup2.ButtonGroup;
        if (null != buttonSecondaryText) {
          tmp16Result = tmp15;
          if (null != buttonSecondaryOnPress) {
            const obj11 = { children: items2 };
            items2 = [tmp15];
            const TwinButtons = native.TwinButtons;
            const obj12 = {
              disabled: buttonSecondaryDisabled,
              loading: buttonSecondaryLoading,
              text: buttonSecondaryText,
              onPress: buttonSecondaryOnPress,
              variant: "secondary",
              size: "sm",
            };
            items2[1] = metroImportDefault(components_Button_Button.Button, obj12);
            tmp16Result = metroImportAll(TwinButtons, obj11);
          }
        }
        const obj13 = { children: tmp16Result };
        items1[2] = metroImportDefault(ButtonGroup, obj13);
        let tmp13Result2 = null;
        if (null != countdown2) {
          const obj14 = { style: items3, deadline: countdown2 };
          items3 = [,];
          ({ text: arr2[0], spacing: arr2[1] } = tmp3);
          tmp13Result2 = metroImportDefault(CountDownDefault, obj14);
        }
        items1[3] = tmp13Result2;
        return metroImportAll(hasOwnProperty, obj9);
      }
    };
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuard.tsx");

export default tmp5;
export const ChatInputGuardContainer = tmp4;

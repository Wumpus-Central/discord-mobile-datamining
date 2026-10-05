// === Module 12063: ChatInputContextBar ===

// Module 12063 (ChatInputContextBar)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import intl9 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useToken from "useToken" /* 4580 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import AssetRegistryDefault from "AssetRegistry" /* 6427 */;
import DraftStore2 from "DraftStore" /* 7031 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7405 */;
import ScheduledMessageTypes from "ScheduledMessageTypes" /* 7477 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 11290 */;
import PendingReplyActionCreators from "PendingReplyActionCreators" /* 11292 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 11840 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const DraftStore = DraftStore2;
let channel, children, closure_0, dependencyMap, set;

let c10;
let closure_12;
let closure_14;
let closure_4;
let hasOwnProperty;
let map1;
let unpackModuleId;
let react = react_mod;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const DraftType = DraftStore2.DraftType;
({ AnalyticEvents: c10, Routes: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let obj = { duration: 250, easing: native.STANDARD_EASING };
let createStyles = createStyles_mod;
let closure_16 = createStyles.createStyles((arg0) => {
  let MOBILE_FLOATING_ACCESSORY_BACKGROUND = arg0;
  if (arg0 == null) {
    MOBILE_FLOATING_ACCESSORY_BACKGROUND = nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
  }
  return { contextBar: { backgroundColor: MOBILE_FLOATING_ACCESSORY_BACKGROUND } };
});
createStyles = createStyles_mod;
let closure_17 = createStyles.createStyles(() => {
  let size1;
  obj = { contextBarRow: { overflow: "hidden", flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_GAP }, floatingReplyTextWrapper: { flexShrink: 1, minWidth: 0 }, floatingContextBar: { borderBottomWidth: React3.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_MUTED, overflow: "hidden" }, replyMentionButtonActive: { color: nativeDefault.colors.CONTROL_BRAND_FOREGROUND }, replyMentionIcon: size, replyMentionIconActive: { tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND }, floatingRightActions: { flexGrow: 1, flexShrink: 0, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: 8 }, floatingMentionGroup: { flexDirection: "row", alignItems: "center", gap: 2 }, floatingDivider: { width: React3.hairlineWidth, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE }, floatingCloseIcon: size1 };
  ({ overflow: "hidden", flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_GAP });
  ({ borderBottomWidth: React3.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_MUTED, overflow: "hidden" });
  ({ color: nativeDefault.colors.CONTROL_BRAND_FOREGROUND });
  size = { width: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: nativeDefault.colors.TEXT_MUTED, marginRight: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT };
  ({ tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND });
  ({ width: React3.hairlineWidth, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
  size1 = { width: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((onCancelReplying) => {
  let contextBarRow;
  let first;
  let floatingReplyTextWrapper;
  let items;
  let tmp10;
  let tmp13;
  let tmp16;
  obj = react2;
  const cResult = obj.c(17);
  onCancelReplying = onCancelReplying.onCancelReplying;
  const tmp4 = closure_17();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const obj3 = useToken;
  const bound = Math.max(0, (token - obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  ({ contextBarRow, floatingReplyTextWrapper } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl9.intl;
    const stringResult = intl.string(intl9.t["5IEsGx"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.floatingReplyTextWrapper) {
    const obj4 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: floatingReplyTextWrapper, children: first };
    const tmp12 = closure_12(Text_Text.Text, obj4);
    cResult[1] = tmp4.floatingReplyTextWrapper;
    cResult[2] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  const floatingRightActions = tmp4.floatingRightActions;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl9.intl;
    const stringResult1 = intl2.string(intl9.t.jSnJGT);
    cResult[3] = stringResult1;
    tmp13 = stringResult1;
  } else {
    tmp13 = cResult[3];
  }
  let tmp15;
  if (bound > 0) {
    tmp15 = bound;
  }
  if (cResult[4] !== tmp4.floatingCloseIcon) {
    const obj5 = { source: AssetRegistryDefault, size: native.Icon.Sizes.CUSTOM, style: tmp4.floatingCloseIcon };
    const Icon = native.Icon;
    const tmp18 = closure_12(Icon, obj5);
    cResult[4] = tmp4.floatingCloseIcon;
    cResult[5] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === onCancelReplying) {
    if (cResult[7] === tmp15) {
      let tmp19;
      if (cResult[8] === tmp16) {
        tmp19 = cResult[9];
      }
      if (cResult[10] === tmp4.floatingRightActions) {
        let tmp21;
        if (cResult[11] === tmp19) {
          tmp21 = cResult[12];
        }
        if (cResult[13] === tmp4.contextBarRow) {
          if (cResult[14] === tmp21) {
            let tmp25;
            if (cResult[15] === tmp10) {
              tmp25 = cResult[16];
            }
            return tmp25;
          }
        }
        const obj6 = { style: contextBarRow, children: items };
        items = [tmp10, tmp21];
        const tmp28 = map1(hasOwnProperty, obj6);
        cResult[13] = tmp4.contextBarRow;
        cResult[14] = tmp21;
        cResult[15] = tmp10;
        cResult[16] = tmp28;
        tmp25 = tmp28;
      }
      const obj7 = { style: floatingRightActions, children: tmp19 };
      const tmp24 = closure_12(hasOwnProperty, obj7);
      cResult[10] = tmp4.floatingRightActions;
      cResult[11] = tmp19;
      cResult[12] = tmp24;
      tmp21 = tmp24;
    }
  }
  const tmp20 = closure_12(Pressables.PressableOpacity, { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: tmp13, hitSlop: tmp15, onPress: onCancelReplying, children: tmp16 });
  cResult[6] = onCancelReplying;
  cResult[7] = tmp15;
  cResult[8] = tmp16;
  cResult[9] = tmp20;
  tmp19 = tmp20;
}) : ((onCancelReplying) => {
  let Icon;
  let PressableOpacity;
  let intl;
  let intl2;
  let items;
  let obj6;
  let obj7;
  let tmp10;
  onCancelReplying = onCancelReplying.onCancelReplying;
  const tmp = closure_17();
  obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const obj2 = useToken;
  const bound = Math.max(0, (token - obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  const obj3 = { style: tmp.contextBarRow, children: items };
  const obj4 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: tmp.floatingReplyTextWrapper, children: intl.string(intl9.t["5IEsGx"]) };
  const Text = Text_Text.Text;
  intl = intl9.intl;
  items = [closure_12(Text, obj4), ];
  const obj5 = { style: tmp.floatingRightActions, children: closure_12(PressableOpacity, obj6) };
  obj6 = { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: intl2.string(intl9.t.jSnJGT), hitSlop: tmp10, onPress: onCancelReplying, children: closure_12(Icon, obj7) };
  PressableOpacity = Pressables.PressableOpacity;
  intl2 = intl9.intl;
  tmp10 = undefined;
  if (bound > 0) {
    tmp10 = bound;
  }
  obj7 = { source: AssetRegistryDefault, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
  Icon = native.Icon;
  items[1] = closure_12(hasOwnProperty, obj5);
  return map1(hasOwnProperty, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((pendingReply) => {
  let Icon;
  let accessibilityRole;
  let accessibilityState;
  let colorString;
  let intl;
  let intl2;
  let intl5;
  let intl6;
  let items1;
  let items2;
  let items4;
  let items5;
  let obj15;
  let obj18;
  let onCancelReplying;
  let onTapContextBarReply;
  let onToggleReplyMention;
  let pendingReplyAuthor;
  let roleStyle;
  let stateFromStores;
  let string2Result;
  let stringResult;
  let tmp12;
  let tmp35;
  let tmp42;
  let tmp8;
  let tmp9;
  const tmp = pendingReply;
  obj = pendingReply(colorString[11]);
  const cResult = obj.c(61);
  pendingReply = pendingReply.pendingReply;
  ({ pendingReplyAuthor, onTapContextBarReply, onCancelReplying, onToggleReplyMention } = pendingReply);
  const tmp4 = closure_17();
  let obj2 = pendingReply(colorString[12]);
  let tmp5 = stateFromStores;
  const token = obj2.useToken(stateFromStores(colorString[9]).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  let obj3 = pendingReply(colorString[12]);
  const bound = Math.max(0, (token - obj3.useToken(stateFromStores(colorString[9]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [roleStyle];
    const fn = function l() {
      return roleStyle.roleStyle;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = tmp(colorString[17]);
  stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (cResult[2] !== pendingReply.shouldMention) {
    let obj4 = { checked: null };
    ({ shouldMention: obj5.checked, shouldMention: tmp3[2] } = pendingReply);
    cResult[3] = obj4;
    tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  const tmpResult5 = tmp(colorString[18]);
  const checkboxA11yNative = tmpResult5.useCheckboxA11yNative(tmp12);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  colorString = pendingReplyAuthor.colorString;
  const colorStrings = pendingReplyAuthor.colorStrings;
  const nick = pendingReplyAuthor.nick;
  const guildId = pendingReplyAuthor.guildId;
  if (cResult[4] === colorString) {
    let tmp14;
    if (cResult[5] === stateFromStores) {
      tmp14 = cResult[6];
    }
    roleStyle = tmp14;
    if (cResult[7] === guildId) {
      let tmp17;
      let tmp19;
      if (cResult[8] === pendingReply.message.author.id) {
        tmp17 = cResult[9];
      }
      const tmp18 = tmp5(colorString[19])(tmp17);
      if (cResult[10] !== tmp18) {
        let obj6 = { displayNameStyles: tmp18 };
        cResult[10] = tmp18;
        cResult[11] = obj6;
        tmp19 = obj6;
      } else {
        tmp19 = cResult[11];
      }
      const tmpResult6 = tmp(colorString[20]);
      const displayNameStylesFont = tmpResult6.useDisplayNameStylesFont(tmp19);
      const tmpResult7 = tmp(colorString[21]);
      const processColorStringsArray = tmpResult7.useProcessColorStringsArray(colorStrings);
      const tmpResult8 = tmp(colorString[21]);
      const isRoleStyleAndRoleColorsEligibleForERC = tmpResult8.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, pendingReply.message.author.id, stateFromStores, processColorStringsArray);
      if (cResult[12] === tmp14) {
        if (cResult[13] === colorString) {
          if (cResult[14] === colorStrings) {
            if (cResult[15] === displayNameStylesFont) {
              if (cResult[16] === processColorStringsArray) {
                if (cResult[17] === guildId) {
                  if (cResult[18] === nick) {
                    if (cResult[19] === pendingReply.message.author.id) {
                      if (cResult[20] === stateFromStores) {
                        let tmp27;
                        let tmp31;
                        if (cResult[21] === isRoleStyleAndRoleColorsEligibleForERC) {
                          tmp27 = cResult[22];
                        }
                        if (cResult[23] === nick) {
                          if (cResult[24] === onTapContextBarReply) {
                            if (cResult[25] === tmp27) {
                              let tmp28;
                              if (cResult[26] === tmp4.floatingReplyTextWrapper) {
                                tmp28 = cResult[27];
                              }
                              if (cResult[28] === bound) {
                                if (cResult[29] === onCancelReplying) {
                                  let tmp32;
                                  if (cResult[30] === tmp4.floatingCloseIcon) {
                                    tmp32 = cResult[31];
                                  }
                                  if (cResult[32] === bound) {
                                    if (cResult[33] === accessibilityRole) {
                                      if (cResult[34] === accessibilityState) {
                                        if (cResult[35] === onToggleReplyMention) {
                                          if (cResult[36] === pendingReply.shouldMention) {
                                            if (cResult[37] === pendingReply.showMentionToggle) {
                                              if (cResult[38] === tmp4.floatingMentionGroup) {
                                                if (cResult[39] === tmp4.replyMentionButtonActive) {
                                                  if (cResult[40] === tmp4.replyMentionIcon) {
                                                    let tmp36;
                                                    if (cResult[41] === tmp4.replyMentionIconActive) {
                                                      tmp36 = cResult[42];
                                                    }
                                                    if (cResult[43] === tmp32) {
                                                      if (cResult[44] === pendingReply.showMentionToggle) {
                                                        let tmp46;
                                                        let tmp52;
                                                        if (cResult[45] === tmp4.floatingDivider) {
                                                          tmp46 = cResult[46];
                                                        }
                                                        if (cResult[47] !== bound) {
                                                          const obj7 = { gap: bound };
                                                          cResult[47] = bound;
                                                          cResult[48] = obj7;
                                                          tmp52 = obj7;
                                                        } else {
                                                          tmp52 = cResult[48];
                                                        }
                                                        if (cResult[49] === tmp4.floatingRightActions) {
                                                          let tmp53;
                                                          if (cResult[50] === tmp52) {
                                                            tmp53 = cResult[51];
                                                          }
                                                          if (cResult[52] === tmp32) {
                                                            if (cResult[53] === tmp46) {
                                                              if (cResult[54] === tmp36) {
                                                                let tmp54;
                                                                if (cResult[55] === tmp53) {
                                                                  tmp54 = cResult[56];
                                                                }
                                                                if (cResult[57] === tmp28) {
                                                                  if (cResult[58] === tmp4.contextBarRow) {
                                                                    let tmp58;
                                                                    if (cResult[59] === tmp54) {
                                                                      tmp58 = cResult[60];
                                                                    }
                                                                    return tmp58;
                                                                  }
                                                                }
                                                                const obj8 = { style: tmp4.contextBarRow, children: items1 };
                                                                items1 = [tmp28, tmp54];
                                                                const tmp61 = closure_13(guildId, obj8);
                                                                cResult[57] = tmp28;
                                                                cResult[58] = tmp4.contextBarRow;
                                                                cResult[59] = tmp54;
                                                                class G {
                                                                  constructor(arg0) {
                                                                    closure_0 = pendingReply;
                                                                    intl = pendingReply(colorString[13]).intl;
                                                                    obj = {
                                                                      userHook(arg0, arg1) {
                                                                                                                                          let items1;
                                                                                                                                          let tmp20;
                                                                                                                                          let tmp6;
                                                                                                                                          if ("dot" === stateFromStores) {
                                                                                                                                            let tmp3Result;
                                                                                                                                            if (null != colorString) {
                                                                                                                                              const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
                                                                                                                                              const items = [closure_12(native.RoleDot, obj2), ];
                                                                                                                                              const obj3 = { variant, style: tmp20, children: nick };
                                                                                                                                              tmp20 = undefined;
                                                                                                                                              const Text2 = Text_Text.Text;
                                                                                                                                              if (null != displayNameStylesFont) {
                                                                                                                                                tmp20 = { fontFamily: tmp19 };
                                                                                                                                                const obj4 = { fontFamily: tmp19 };
                                                                                                                                              }
                                                                                                                                              const obj5 = { children: items };
                                                                                                                                              items[1] = closure_12(Text2, obj3, arg1);
                                                                                                                                              tmp3Result = map1(authStore2, obj5);
                                                                                                                                            }
                                                                                                                                            return tmp3Result;
                                                                                                                                          }
                                                                                                                                          obj = { variant, style: items1, gradientColors: tmp6, children: nick };
                                                                                                                                          items1 = [roleStyle, ];
                                                                                                                                          let tmp5 = null != displayNameStylesFont;
                                                                                                                                          const Text = Text_Text.Text;
                                                                                                                                          if (tmp5) {
                                                                                                                                            tmp5 = { fontFamily: tmp4 };
                                                                                                                                            const obj6 = { fontFamily: tmp4 };
                                                                                                                                          }
                                                                                                                                          items1[1] = tmp5;
                                                                                                                                          tmp6 = undefined;
                                                                                                                                          if (isRoleStyleAndRoleColorsEligibleForERC) {
                                                                                                                                            tmp6 = processColorStringsArray;
                                                                                                                                          }
                                                                                                                                          tmp3Result = closure_12(Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
                                                                                                                                        }
                                                                    };
                                                                    return intl.format(pendingReply(colorString[13]).t["8E4GxS"], obj);
                                                                  }
                                                                }
                                                                cResult[60] = tmp61;
                                                                tmp58 = tmp61;
                                                              }
                                                            }
                                                          }
                                                          const obj9 = { style: tmp53, children: items2 };
                                                          items2 = [tmp36, tmp46, tmp32];
                                                          const tmp57 = closure_13(guildId, obj9);
                                                          cResult[52] = tmp32;
                                                          cResult[53] = tmp46;
                                                          class G {
                                                            constructor(arg0) {
                                                              closure_0 = pendingReply;
                                                              intl = pendingReply(colorString[13]).intl;
                                                              obj = {
                                                                userHook(arg0, arg1) {
                                                                                                                              let items1;
                                                                                                                              let tmp20;
                                                                                                                              let tmp6;
                                                                                                                              if ("dot" === stateFromStores) {
                                                                                                                                let tmp3Result;
                                                                                                                                if (null != colorString) {
                                                                                                                                  const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
                                                                                                                                  const items = [closure_12(native.RoleDot, obj2), ];
                                                                                                                                  const obj3 = { variant, style: tmp20, children: nick };
                                                                                                                                  tmp20 = undefined;
                                                                                                                                  const Text2 = Text_Text.Text;
                                                                                                                                  if (null != displayNameStylesFont) {
                                                                                                                                    tmp20 = { fontFamily: tmp19 };
                                                                                                                                    const obj4 = { fontFamily: tmp19 };
                                                                                                                                  }
                                                                                                                                  const obj5 = { children: items };
                                                                                                                                  items[1] = closure_12(Text2, obj3, arg1);
                                                                                                                                  tmp3Result = map1(authStore2, obj5);
                                                                                                                                }
                                                                                                                                return tmp3Result;
                                                                                                                              }
                                                                                                                              obj = { variant, style: items1, gradientColors: tmp6, children: nick };
                                                                                                                              items1 = [roleStyle, ];
                                                                                                                              let tmp5 = null != displayNameStylesFont;
                                                                                                                              const Text = Text_Text.Text;
                                                                                                                              if (tmp5) {
                                                                                                                                tmp5 = { fontFamily: tmp4 };
                                                                                                                                const obj6 = { fontFamily: tmp4 };
                                                                                                                              }
                                                                                                                              items1[1] = tmp5;
                                                                                                                              tmp6 = undefined;
                                                                                                                              if (isRoleStyleAndRoleColorsEligibleForERC) {
                                                                                                                                tmp6 = processColorStringsArray;
                                                                                                                              }
                                                                                                                              tmp3Result = closure_12(Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
                                                                                                                            }
                                                              };
                                                              return intl.format(pendingReply(colorString[13]).t["8E4GxS"], obj);
                                                            }
                                                          }
                                                          cResult[55] = tmp53;
                                                          cResult[56] = tmp57;
                                                          tmp54 = tmp57;
                                                        }
                                                        const items3 = [tmp4.floatingRightActions, tmp52];
                                                        cResult[49] = tmp4.floatingRightActions;
                                                        cResult[50] = tmp52;
                                                        cResult[51] = items3;
                                                        tmp53 = items3;
                                                      }
                                                    }
                                                    let showMentionToggle;
                                                    if (pendingReply != null) {
                                                      showMentionToggle = pendingReply.showMentionToggle;
                                                    }
                                                    let tmp49 = null;
                                                    if (showMentionToggle) {
                                                      tmp49 = null;
                                                      if (null != tmp32) {
                                                        const obj10 = { style: tmp4.floatingDivider };
                                                        tmp49 = closure_12(guildId, obj10);
                                                      }
                                                    }
                                                    cResult[43] = tmp32;
                                                    cResult[44] = pendingReply.showMentionToggle;
                                                    cResult[45] = tmp4.floatingDivider;
                                                    cResult[46] = tmp49;
                                                    tmp46 = tmp49;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  let showMentionToggle1;
                                  if (pendingReply != null) {
                                    showMentionToggle1 = pendingReply.showMentionToggle;
                                  }
                                  let tmp40Result = null;
                                  if (showMentionToggle1) {
                                    const obj11 = { accessibilityRole, accessibilityState, accessibilityLabel: intl2.string(tmp(colorString[13]).t.P8tvKG), accessibilityHint: stringResult, activeOpacity: 0.5, hitSlop: tmp42, onPress: null, style: tmp4.floatingMentionGroup, children: items5 };
                                    const PressableOpacity2 = tmp(tmp2[16]).PressableOpacity;
                                    intl2 = tmp(tmp2[13]).intl;
                                    const shouldMention = pendingReply.shouldMention;
                                    const intl3 = tmp(tmp2[13]).intl;
                                    const string = intl3.string;
                                    const t = tmp(tmp2[13]).t;
                                    if (shouldMention) {
                                      stringResult = string(t.PBgTSF);
                                    } else {
                                      stringResult = string(t["+LXBxU"]);
                                    }
                                    tmp42 = undefined;
                                    if (bound > 0) {
                                      tmp42 = bound;
                                    }
                                    class G {
                                      constructor(arg0) {
                                        closure_0 = pendingReply;
                                        intl = pendingReply(colorString[13]).intl;
                                        obj = {
                                          userHook(arg0, arg1) {
                                                                                  let items1;
                                                                                  let tmp20;
                                                                                  let tmp6;
                                                                                  if ("dot" === stateFromStores) {
                                                                                    let tmp3Result;
                                                                                    if (null != colorString) {
                                                                                      const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
                                                                                      const items = [closure_12(native.RoleDot, obj2), ];
                                                                                      const obj3 = { variant, style: tmp20, children: nick };
                                                                                      tmp20 = undefined;
                                                                                      const Text2 = Text_Text.Text;
                                                                                      if (null != displayNameStylesFont) {
                                                                                        tmp20 = { fontFamily: tmp19 };
                                                                                        const obj4 = { fontFamily: tmp19 };
                                                                                      }
                                                                                      const obj5 = { children: items };
                                                                                      items[1] = closure_12(Text2, obj3, arg1);
                                                                                      tmp3Result = map1(authStore2, obj5);
                                                                                    }
                                                                                    return tmp3Result;
                                                                                  }
                                                                                  obj = { variant, style: items1, gradientColors: tmp6, children: nick };
                                                                                  items1 = [roleStyle, ];
                                                                                  let tmp5 = null != displayNameStylesFont;
                                                                                  const Text = Text_Text.Text;
                                                                                  if (tmp5) {
                                                                                    tmp5 = { fontFamily: tmp4 };
                                                                                    const obj6 = { fontFamily: tmp4 };
                                                                                  }
                                                                                  items1[1] = tmp5;
                                                                                  tmp6 = undefined;
                                                                                  if (isRoleStyleAndRoleColorsEligibleForERC) {
                                                                                    tmp6 = processColorStringsArray;
                                                                                  }
                                                                                  tmp3Result = closure_12(Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
                                                                                }
                                        };
                                        return intl.format(pendingReply(colorString[13]).t["8E4GxS"], obj);
                                      }
                                    }
                                    const obj12 = { source: tmp5(colorString[22]), size: tmp(colorString[7]).Icon.Sizes.CUSTOM, style: items4 };
                                    const Icon2 = tmp(tmp2[7]).Icon;
                                    items4 = [tmp4.replyMentionIcon, pendingReply.shouldMention && tmp4.replyMentionIconActive];
                                    items5 = [closure_12(Icon2, obj12), ];
                                    let prop;
                                    let Text2 = tmp(tmp2[14]).Text;
                                    if (pendingReply.shouldMention) {
                                      prop = tmp4.replyMentionButtonActive;
                                    }
                                    const shouldMention2 = pendingReply.shouldMention;
                                    const obj13 = { variant: "text-sm/semibold", color: "text-muted", style: prop, children: string2Result };
                                    const intl4 = tmp(tmp2[13]).intl;
                                    const string2 = intl4.string;
                                    const t2 = tmp(tmp2[13]).t;
                                    if (shouldMention2) {
                                      string2Result = string2(t2.p9jC2r);
                                    } else {
                                      string2Result = string2(t2.U7f3bK);
                                    }
                                    items5[1] = closure_12(Text2, obj13);
                                    tmp40Result = closure_13(PressableOpacity2, obj11);
                                  }
                                  cResult[32] = bound;
                                  cResult[33] = accessibilityRole;
                                  cResult[34] = accessibilityState;
                                  cResult[35] = onToggleReplyMention;
                                  cResult[36] = pendingReply.shouldMention;
                                  class G {
                                    constructor(arg0) {
                                      closure_0 = pendingReply;
                                      intl = pendingReply(colorString[13]).intl;
                                      obj = {
                                        userHook(arg0, arg1) {
                                                                              let items1;
                                                                              let tmp20;
                                                                              let tmp6;
                                                                              if ("dot" === stateFromStores) {
                                                                                let tmp3Result;
                                                                                if (null != colorString) {
                                                                                  const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
                                                                                  const items = [closure_12(native.RoleDot, obj2), ];
                                                                                  const obj3 = { variant, style: tmp20, children: nick };
                                                                                  tmp20 = undefined;
                                                                                  const Text2 = Text_Text.Text;
                                                                                  if (null != displayNameStylesFont) {
                                                                                    tmp20 = { fontFamily: tmp19 };
                                                                                    const obj4 = { fontFamily: tmp19 };
                                                                                  }
                                                                                  const obj5 = { children: items };
                                                                                  items[1] = closure_12(Text2, obj3, arg1);
                                                                                  tmp3Result = map1(authStore2, obj5);
                                                                                }
                                                                                return tmp3Result;
                                                                              }
                                                                              obj = { variant, style: items1, gradientColors: tmp6, children: nick };
                                                                              items1 = [roleStyle, ];
                                                                              let tmp5 = null != displayNameStylesFont;
                                                                              const Text = Text_Text.Text;
                                                                              if (tmp5) {
                                                                                tmp5 = { fontFamily: tmp4 };
                                                                                const obj6 = { fontFamily: tmp4 };
                                                                              }
                                                                              items1[1] = tmp5;
                                                                              tmp6 = undefined;
                                                                              if (isRoleStyleAndRoleColorsEligibleForERC) {
                                                                                tmp6 = processColorStringsArray;
                                                                              }
                                                                              tmp3Result = closure_12(Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
                                                                            }
                                      };
                                      return intl.format(pendingReply(colorString[13]).t["8E4GxS"], obj);
                                    }
                                  }
                                  cResult[37] = pendingReply.showMentionToggle;
                                  cResult[38] = tmp4.floatingMentionGroup;
                                  cResult[39] = tmp4.replyMentionButtonActive;
                                  cResult[40] = tmp4.replyMentionIcon;
                                  cResult[41] = tmp4.replyMentionIconActive;
                                  cResult[42] = tmp40Result;
                                  tmp36 = tmp40Result;
                                }
                              }
                              let tmp34Result = null;
                              if (null != onCancelReplying) {
                                const obj14 = { accessibilityRole: "button", accessibilityLabel: intl.string(tmp(colorString[13]).t.jSnJGT), activeOpacity: 0.5, hitSlop: tmp35, onPress: onCancelReplying, children: closure_12(Icon, obj15) };
                                const PressableOpacity = tmp(tmp2[16]).PressableOpacity;
                                intl = tmp(tmp2[13]).intl;
                                tmp35 = undefined;
                                if (bound > 0) {
                                  tmp35 = bound;
                                }
                                obj15 = { source: tmp5(colorString[15]), size: tmp(colorString[7]).Icon.Sizes.CUSTOM, style: tmp4.floatingCloseIcon };
                                Icon = tmp(tmp2[7]).Icon;
                                tmp34Result = closure_12(PressableOpacity, obj14);
                              }
                              cResult[28] = bound;
                              cResult[29] = onCancelReplying;
                              cResult[30] = tmp4.floatingCloseIcon;
                              cResult[31] = tmp34Result;
                              tmp32 = tmp34Result;
                            }
                          }
                        }
                        if (null == onTapContextBarReply) {
                          const obj16 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: tmp27("text-sm/semibold") };
                          let Text = tmp(tmp2[14]).Text;
                          tmp31 = closure_12(Text, obj16);
                        } else {
                          const obj17 = { style: tmp4.floatingReplyTextWrapper, accessibilityRole: "link", accessibilityLabel: intl5.formatToPlainString(tmp(colorString[13]).t.EpJL4E, obj18), accessibilityHint: intl6.string(tmp(colorString[13]).t["0CfCVW"]), activeOpacity: 0.5, onPress: onTapContextBarReply, children: null };
                          const PressableOpacity3 = tmp(tmp2[16]).PressableOpacity;
                          intl5 = tmp(tmp2[13]).intl;
                          obj18 = { username: nick };
                          intl6 = tmp(tmp2[13]).intl;
                          ({ lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: tmp27("text-sm/semibold") });
                          const Text3 = tmp(tmp2[14]).Text;
                          class G {
                            constructor(arg0) {
                              closure_0 = pendingReply;
                              intl = pendingReply(colorString[13]).intl;
                              obj = {
                                userHook(arg0, arg1) {
                                                              let items1;
                                                              let tmp20;
                                                              let tmp6;
                                                              if ("dot" === stateFromStores) {
                                                                let tmp3Result;
                                                                if (null != colorString) {
                                                                  const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
                                                                  const items = [closure_12(native.RoleDot, obj2), ];
                                                                  const obj3 = { variant, style: tmp20, children: nick };
                                                                  tmp20 = undefined;
                                                                  const Text2 = Text_Text.Text;
                                                                  if (null != displayNameStylesFont) {
                                                                    tmp20 = { fontFamily: tmp19 };
                                                                    const obj4 = { fontFamily: tmp19 };
                                                                  }
                                                                  const obj5 = { children: items };
                                                                  items[1] = closure_12(Text2, obj3, arg1);
                                                                  tmp3Result = map1(authStore2, obj5);
                                                                }
                                                                return tmp3Result;
                                                              }
                                                              obj = { variant, style: items1, gradientColors: tmp6, children: nick };
                                                              items1 = [roleStyle, ];
                                                              let tmp5 = null != displayNameStylesFont;
                                                              const Text = Text_Text.Text;
                                                              if (tmp5) {
                                                                tmp5 = { fontFamily: tmp4 };
                                                                const obj6 = { fontFamily: tmp4 };
                                                              }
                                                              items1[1] = tmp5;
                                                              tmp6 = undefined;
                                                              if (isRoleStyleAndRoleColorsEligibleForERC) {
                                                                tmp6 = processColorStringsArray;
                                                              }
                                                              tmp3Result = closure_12(Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
                                                            }
                              };
                              return intl.format(pendingReply(colorString[13]).t["8E4GxS"], obj);
                            }
                          }
                          tmp31 = closure_12(PressableOpacity3, obj17);
                        }
                        cResult[23] = nick;
                        cResult[24] = onTapContextBarReply;
                        cResult[25] = tmp27;
                        cResult[26] = tmp4.floatingReplyTextWrapper;
                        cResult[27] = tmp31;
                        tmp28 = tmp31;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      class G {
        constructor(arg0) {
          closure_0 = pendingReply;
          intl = pendingReply(colorString[13]).intl;
          obj = {
            userHook(arg0, arg1) {
                      let items1;
                      let tmp20;
                      let tmp6;
                      if ("dot" === stateFromStores) {
                        let tmp3Result;
                        if (null != colorString) {
                          const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
                          const items = [closure_12(native.RoleDot, obj2), ];
                          const obj3 = { variant, style: tmp20, children: nick };
                          tmp20 = undefined;
                          const Text2 = Text_Text.Text;
                          if (null != displayNameStylesFont) {
                            tmp20 = { fontFamily: tmp19 };
                            const obj4 = { fontFamily: tmp19 };
                          }
                          const obj5 = { children: items };
                          items[1] = closure_12(Text2, obj3, arg1);
                          tmp3Result = map1(authStore2, obj5);
                        }
                        return tmp3Result;
                      }
                      obj = { variant, style: items1, gradientColors: tmp6, children: nick };
                      items1 = [roleStyle, ];
                      let tmp5 = null != displayNameStylesFont;
                      const Text = Text_Text.Text;
                      if (tmp5) {
                        tmp5 = { fontFamily: tmp4 };
                        const obj6 = { fontFamily: tmp4 };
                      }
                      items1[1] = tmp5;
                      tmp6 = undefined;
                      if (isRoleStyleAndRoleColorsEligibleForERC) {
                        tmp6 = processColorStringsArray;
                      }
                      tmp3Result = closure_12(Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
                    }
          };
          return intl.format(pendingReply(colorString[13]).t["8E4GxS"], obj);
        }
      }
      cResult[12] = tmp14;
      cResult[13] = colorString;
      cResult[14] = colorStrings;
      cResult[15] = displayNameStylesFont;
      cResult[16] = processColorStringsArray;
      cResult[17] = guildId;
      cResult[18] = nick;
      cResult[19] = pendingReply.message.author.id;
      cResult[20] = stateFromStores;
      cResult[21] = isRoleStyleAndRoleColorsEligibleForERC;
      cResult[22] = G;
      tmp27 = G;
    }
    const obj20 = { userId: pendingReply.message.author.id, guildId };
    cResult[7] = guildId;
    cResult[8] = pendingReply.message.author.id;
    cResult[9] = obj20;
    tmp17 = obj20;
  }
  let tmp15;
  if ("hidden" !== stateFromStores) {
    if (null != colorString) {
      const items6 = [{ color: colorString }];
      tmp15 = items6;
      const obj21 = { color: colorString };
    }
  }
  cResult[4] = colorString;
  cResult[5] = stateFromStores;
  cResult[6] = tmp15;
  tmp14 = tmp15;
}) : ((pendingReply) => {
  let Icon;
  let Text3;
  let accessibilityRole;
  let accessibilityState;
  let intl;
  let intl2;
  let intl3;
  let intl6;
  let intl7;
  let intl8;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj11;
  let obj13;
  let obj14;
  let obj15;
  let obj17;
  let onCancelReplying;
  let onTapContextBarReply;
  let pendingReplyAuthor;
  let string2Result;
  let stringResult;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp20;
  function userHook(arg0, arg1) {
    let items1;
    let tmp19;
    let tmp6;
    if ("dot" === stateFromStores) {
      let tmp3Result;
      if (null != colorString) {
        const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
        const items = [closure_12(native.RoleDot, obj2), ];
        const obj3 = { variant: "text-sm/semibold", style: tmp19, children: nick };
        tmp19 = undefined;
        const Text2 = Text_Text.Text;
        if (null != closure_7) {
          tmp19 = { fontFamily: tmp18 };
          const obj4 = { fontFamily: tmp18 };
        }
        const obj5 = { children: items };
        items[1] = closure_12(Text2, obj3, arg1);
        tmp3Result = map1(authStore2, obj5);
      }
      return tmp3Result;
    }
    obj = { variant: "text-sm/semibold", style: items1, gradientColors: tmp6, children: nick };
    items1 = [roleStyle, ];
    let tmp5 = null != closure_7;
    const Text = Text_Text.Text;
    if (tmp5) {
      tmp5 = { fontFamily: tmp4 };
      const obj6 = { fontFamily: tmp4 };
    }
    items1[1] = tmp5;
    tmp6 = undefined;
    if (closure_9) {
      tmp6 = processColorStringsArray;
    }
    tmp3Result = closure_12(Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
  }
  pendingReply = pendingReply.pendingReply;
  ({ pendingReplyAuthor, onTapContextBarReply, onCancelReplying } = pendingReply);
  let stateFromStores;
  let colorString;
  let roleStyle;
  const onToggleReplyMention = pendingReply.onToggleReplyMention;
  let tmp = closure_17();
  const tmp2 = pendingReply;
  obj = pendingReply(colorString[12]);
  const tmp4 = stateFromStores;
  const token = obj.useToken(stateFromStores(colorString[9]).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  let obj2 = pendingReply(colorString[12]);
  const bound = Math.max(0, (token - obj2.useToken(stateFromStores(colorString[9]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  let obj3 = pendingReply(colorString[17]);
  let items = [roleStyle];
  stateFromStores = obj3.useStateFromStores(items, () => roleStyle.roleStyle);
  let obj4 = pendingReply(colorString[18]);
  let obj5 = { checked: pendingReply.shouldMention };
  const checkboxA11yNative = obj4.useCheckboxA11yNative(obj5);
  colorString = pendingReplyAuthor.colorString;
  const colorStrings = pendingReplyAuthor.colorStrings;
  const nick = pendingReplyAuthor.nick;
  const guildId = pendingReplyAuthor.guildId;
  let items1 = [colorString, stateFromStores];
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  roleStyle = colorStrings.useMemo(() => {
    let tmp;
    if ("hidden" !== stateFromStores) {
      if (null != colorString) {
        const items = [{ color: tmp2 }];
        tmp = items;
        obj = { color: tmp2 };
      }
    }
    return tmp;
  }, items1);
  let obj6 = { userId: pendingReply.message.author.id, guildId };
  const tmp9 = stateFromStores(colorString[19])(obj6);
  const obj7 = pendingReply(colorString[20]);
  let closure_7 = obj7.useDisplayNameStylesFont({ displayNameStyles: tmp9 });
  const obj8 = pendingReply(colorString[21]);
  const processColorStringsArray = obj8.useProcessColorStringsArray(colorStrings);
  const obj9 = pendingReply(colorString[21]);
  let closure_9 = obj9.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, pendingReply.message.author.id, stateFromStores, processColorStringsArray);
  if (null == onTapContextBarReply) {
    const obj10 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: intl.format(tmp2(colorString[13]).t["8E4GxS"], obj11) };
    let Text = tmp2(tmp3[14]).Text;
    intl = tmp2(tmp3[13]).intl;
    obj11 = { userHook };
    tmp12 = closure_12(Text, obj10);
    tmp13 = closure_12;
  } else {
    tmp13 = closure_12;
    const obj12 = { style: tmp.floatingReplyTextWrapper, accessibilityRole: "link", accessibilityLabel: intl6.formatToPlainString(tmp2(colorString[13]).t.EpJL4E, obj13), accessibilityHint: intl7.string(tmp2(colorString[13]).t["0CfCVW"]), activeOpacity: 0.5, onPress: onTapContextBarReply, children: closure_12(Text3, obj14) };
    const PressableOpacity3 = tmp2(tmp3[16]).PressableOpacity;
    intl6 = tmp2(tmp3[13]).intl;
    obj13 = { username: nick };
    intl7 = tmp2(tmp3[13]).intl;
    obj14 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: intl8.format(tmp2(colorString[13]).t["8E4GxS"], obj15) };
    Text3 = tmp2(tmp3[14]).Text;
    intl8 = tmp2(tmp3[13]).intl;
    obj15 = { userHook };
    tmp12 = closure_12(PressableOpacity3, obj12);
  }
  let tmp13Result = null;
  if (null != onCancelReplying) {
    const obj16 = { accessibilityRole: "button", accessibilityLabel: intl2.string(tmp2(colorString[13]).t.jSnJGT), activeOpacity: 0.5, hitSlop: tmp15, onPress: onCancelReplying, children: tmp13(Icon, obj17) };
    const PressableOpacity = tmp2(tmp3[16]).PressableOpacity;
    intl2 = tmp2(tmp3[13]).intl;
    tmp15 = undefined;
    if (bound > 0) {
      tmp15 = bound;
    }
    obj17 = { source: tmp4(colorString[15]), size: tmp2(colorString[7]).Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
    Icon = tmp2(tmp3[7]).Icon;
    tmp13Result = tmp13(PressableOpacity, obj16);
  }
  let showMentionToggle;
  if (pendingReply != null) {
    showMentionToggle = pendingReply.showMentionToggle;
  }
  let tmp18Result = null;
  if (showMentionToggle) {
    const obj18 = { accessibilityRole, accessibilityState, accessibilityLabel: intl3.string(tmp2(colorString[13]).t.P8tvKG), accessibilityHint: stringResult, activeOpacity: 0.5, hitSlop: tmp20, onPress: onToggleReplyMention, style: tmp.floatingMentionGroup, children: items3 };
    const PressableOpacity2 = tmp2(tmp3[16]).PressableOpacity;
    intl3 = tmp2(tmp3[13]).intl;
    const shouldMention = pendingReply.shouldMention;
    const intl4 = tmp2(tmp3[13]).intl;
    const string = intl4.string;
    const t = tmp2(tmp3[13]).t;
    if (shouldMention) {
      stringResult = string(t.PBgTSF);
    } else {
      stringResult = string(t["+LXBxU"]);
    }
    tmp20 = undefined;
    if (bound > 0) {
      tmp20 = bound;
    }
    const obj19 = { source: tmp4(colorString[22]), size: tmp2(colorString[7]).Icon.Sizes.CUSTOM, style: items2 };
    const Icon2 = tmp2(tmp3[7]).Icon;
    items2 = [tmp.replyMentionIcon, pendingReply.shouldMention && tmp.replyMentionIconActive];
    items3 = [tmp13(Icon2, obj19), ];
    let prop;
    let Text2 = tmp2(tmp3[14]).Text;
    if (pendingReply.shouldMention) {
      prop = tmp.replyMentionButtonActive;
    }
    const shouldMention2 = pendingReply.shouldMention;
    const obj20 = { variant: "text-sm/semibold", color: "text-muted", style: prop, children: string2Result };
    const intl5 = tmp2(tmp3[13]).intl;
    const string2 = intl5.string;
    const t2 = tmp2(tmp3[13]).t;
    if (shouldMention2) {
      string2Result = string2(t2.p9jC2r);
    } else {
      string2Result = string2(t2.U7f3bK);
    }
    items3[1] = tmp13(Text2, obj20);
    tmp18Result = closure_13(PressableOpacity2, obj18);
  }
  let showMentionToggle1;
  if (pendingReply != null) {
    showMentionToggle1 = pendingReply.showMentionToggle;
  }
  let tmp13Result2 = null;
  if (showMentionToggle1) {
    tmp13Result2 = null;
    if (null != tmp13Result) {
      const obj21 = { style: tmp.floatingDivider };
      tmp13Result2 = tmp13(guildId, obj21);
    }
  }
  const obj22 = { style: tmp.contextBarRow, children: items4 };
  items4 = [tmp12, ];
  const obj23 = { style: items5, children: items6 };
  items5 = [tmp.floatingRightActions, { gap: bound }];
  items6 = [tmp18Result, tmp13Result2, tmp13Result];
  items4[1] = closure_13(guildId, obj23);
  return closure_13(guildId, obj22);
});
let closure_19 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((onCancelEditing) => {
  let first;
  let items;
  let tmp10;
  let tmp13;
  let tmp16;
  obj = react2;
  const cResult = obj.c(19);
  onCancelEditing = onCancelEditing.onCancelEditing;
  const tmp4 = closure_17();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const obj3 = useToken;
  const bound = Math.max(0, (token - obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  const floatingReplyTextWrapper = tmp4.floatingReplyTextWrapper;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl9.intl;
    const stringResult = intl.string(intl9.t.rtNXxN);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.floatingReplyTextWrapper) {
    const obj4 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: floatingReplyTextWrapper, children: first };
    const tmp12 = closure_12(Text_Text.Text, obj4);
    cResult[1] = tmp4.floatingReplyTextWrapper;
    cResult[2] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl9.intl;
    const stringResult1 = intl2.string(intl9.t.qv9j1K);
    cResult[3] = stringResult1;
    tmp13 = stringResult1;
  } else {
    tmp13 = cResult[3];
  }
  let tmp15;
  if (bound > 0) {
    tmp15 = bound;
  }
  if (cResult[4] !== tmp4.floatingCloseIcon) {
    const obj5 = { source: AssetRegistryDefault, size: native.Icon.Sizes.CUSTOM, style: tmp4.floatingCloseIcon };
    const Icon = native.Icon;
    const tmp18 = closure_12(Icon, obj5);
    cResult[4] = tmp4.floatingCloseIcon;
    cResult[5] = tmp18;
    tmp16 = tmp18;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === onCancelEditing) {
    if (cResult[7] === tmp15) {
      let tmp19;
      if (cResult[8] === tmp16) {
        tmp19 = cResult[9];
      }
      if (cResult[10] === tmp19) {
        let tmp21;
        if (cResult[11] === tmp4.floatingRightActions) {
          tmp21 = cResult[12];
        }
        if (cResult[13] === tmp10) {
          let tmp25;
          if (cResult[14] === tmp21) {
            tmp25 = cResult[15];
          }
          if (cResult[16] === tmp4.contextBarRow) {
            let tmp29;
            if (cResult[17] === tmp25) {
              tmp29 = cResult[18];
            }
            return tmp29;
          }
          const obj6 = { style: tmp4.contextBarRow, children: tmp25 };
          const tmp32 = closure_12(hasOwnProperty, obj6);
          cResult[16] = tmp4.contextBarRow;
          cResult[17] = tmp25;
          cResult[18] = tmp32;
          tmp29 = tmp32;
        }
        const obj7 = { children: items };
        items = [tmp10, tmp21];
        const tmp28 = map1(authStore2, obj7);
        cResult[13] = tmp10;
        cResult[14] = tmp21;
        cResult[15] = tmp28;
        tmp25 = tmp28;
      }
      const obj8 = { style: tmp4.floatingRightActions, children: tmp19 };
      const tmp24 = closure_12(hasOwnProperty, obj8);
      cResult[10] = tmp19;
      cResult[11] = tmp4.floatingRightActions;
      cResult[12] = tmp24;
      tmp21 = tmp24;
    }
  }
  const tmp20 = closure_12(Pressables.PressableOpacity, { accessibilityRole: "button", accessibilityLabel: tmp13, activeOpacity: 0.5, hitSlop: tmp15, onPress: onCancelEditing, children: tmp16 });
  cResult[6] = onCancelEditing;
  cResult[7] = tmp15;
  cResult[8] = tmp16;
  cResult[9] = tmp20;
  tmp19 = tmp20;
}) : ((onCancelEditing) => {
  let Icon;
  let intl;
  let intl2;
  let items;
  let obj5;
  let obj7;
  let tmp9;
  onCancelEditing = onCancelEditing.onCancelEditing;
  const tmp = closure_17();
  obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const obj2 = useToken;
  const bound = Math.max(0, (token - obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  const obj3 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: tmp.floatingReplyTextWrapper, children: intl.string(intl9.t.rtNXxN) };
  const Text = Text_Text.Text;
  intl = intl9.intl;
  const obj4 = { accessibilityRole: "button", accessibilityLabel: intl2.string(intl9.t.qv9j1K), activeOpacity: 0.5, hitSlop: tmp9, onPress: onCancelEditing, children: closure_12(Icon, obj5) };
  const tmp8 = closure_12(Text, obj3);
  const PressableOpacity = Pressables.PressableOpacity;
  intl2 = intl9.intl;
  tmp9 = undefined;
  if (bound > 0) {
    tmp9 = bound;
  }
  obj5 = { source: AssetRegistryDefault, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
  Icon = native.Icon;
  const obj6 = { style: tmp.contextBarRow, children: map1(authStore2, obj7) };
  obj7 = { children: items };
  items = [tmp8, ];
  const obj8 = { style: tmp.floatingRightActions, children: closure_12(PressableOpacity, obj4) };
  items[1] = closure_12(hasOwnProperty, obj8);
  return closure_12(hasOwnProperty, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let date;
  let first;
  let items;
  let onCancelScheduling;
  let onEditSchedule;
  let scheduledTimestamp;
  let tmp10;
  let tmp14;
  obj = react2;
  const cResult = obj.c(25);
  ({ scheduledTimestamp, onCancelScheduling, onEditSchedule } = arg0);
  const tmp4 = closure_17();
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const obj3 = useToken;
  const bound = Math.max(0, (token - obj3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  const floatingReplyTextWrapper = tmp4.floatingReplyTextWrapper;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl9.intl;
    const stringResult = intl.string(intl9.t.SBcdAN);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== scheduledTimestamp) {
    const intl2 = intl9.intl;
    const formatToPlainString = intl2.formatToPlainString;
    const _Date = Date;
    const self = this;
    const self2 = this;
    const obj4 = { timestamp: date.valueOf() };
    const ZN3tIx = intl9.t.ZN3tIx;
    date = new Date(scheduledTimestamp);
    const formatToPlainStringResult = formatToPlainString(ZN3tIx, obj4);
    cResult[1] = scheduledTimestamp;
    cResult[2] = formatToPlainStringResult;
    tmp10 = formatToPlainStringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp10) {
    const obj5 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: tmp10 };
    const tmp16 = closure_12(Text_Text.Text, obj5);
    cResult[3] = tmp10;
    cResult[4] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] === onEditSchedule) {
    if (cResult[6] === tmp4.floatingReplyTextWrapper) {
      let tmp17;
      let tmp19;
      let tmp22;
      if (cResult[7] === tmp14) {
        tmp17 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl9.intl;
        const stringResult1 = intl3.string(intl9.t.cpT0Cq);
        cResult[9] = stringResult1;
        tmp19 = stringResult1;
      } else {
        tmp19 = cResult[9];
      }
      let tmp21;
      if (bound > 0) {
        tmp21 = bound;
      }
      if (cResult[10] !== tmp4.floatingCloseIcon) {
        const obj6 = { source: AssetRegistryDefault, size: native.Icon.Sizes.CUSTOM, style: tmp4.floatingCloseIcon };
        const Icon = native.Icon;
        const tmp24 = closure_12(Icon, obj6);
        cResult[10] = tmp4.floatingCloseIcon;
        cResult[11] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[11];
      }
      if (cResult[12] === onCancelScheduling) {
        if (cResult[13] === tmp21) {
          let tmp25;
          if (cResult[14] === tmp22) {
            tmp25 = cResult[15];
          }
          if (cResult[16] === tmp25) {
            let tmp28;
            if (cResult[17] === tmp4.floatingRightActions) {
              tmp28 = cResult[18];
            }
            if (cResult[19] === tmp17) {
              let tmp32;
              if (cResult[20] === tmp28) {
                tmp32 = cResult[21];
              }
              if (cResult[22] === tmp4.contextBarRow) {
                let tmp36;
                if (cResult[23] === tmp32) {
                  tmp36 = cResult[24];
                }
                return tmp36;
              }
              const obj7 = { style: tmp4.contextBarRow, children: tmp32 };
              const tmp39 = closure_12(hasOwnProperty, obj7);
              cResult[22] = tmp4.contextBarRow;
              cResult[23] = tmp32;
              cResult[24] = tmp39;
              tmp36 = tmp39;
            }
            const obj8 = { children: items };
            items = [tmp17, tmp28];
            const tmp35 = map1(authStore2, obj8);
            cResult[19] = tmp17;
            cResult[20] = tmp28;
            cResult[21] = tmp35;
            tmp32 = tmp35;
          }
          const obj9 = { style: tmp4.floatingRightActions, children: tmp25 };
          const tmp31 = closure_12(hasOwnProperty, obj9);
          cResult[16] = tmp25;
          cResult[17] = tmp4.floatingRightActions;
          cResult[18] = tmp31;
          tmp28 = tmp31;
        }
      }
      const obj10 = { accessibilityRole: "button", accessibilityLabel: tmp19, activeOpacity: 0.5, hitSlop: tmp21, onPress: onCancelScheduling, children: tmp22 };
      const tmp27 = closure_12(Pressables.PressableOpacity, obj10);
      cResult[12] = onCancelScheduling;
      cResult[13] = tmp21;
      cResult[14] = tmp22;
      cResult[15] = tmp27;
      tmp25 = tmp27;
    }
  }
  const tmp18 = closure_12(Pressables.PressableOpacity, { style: floatingReplyTextWrapper, accessibilityRole: "button", accessibilityLabel: first, activeOpacity: 0.5, onPress: onEditSchedule, children: tmp14 });
  cResult[5] = onEditSchedule;
  cResult[6] = tmp4.floatingReplyTextWrapper;
  cResult[7] = tmp14;
  cResult[8] = tmp18;
  tmp17 = tmp18;
}) : ((scheduledTimestamp) => {
  let Icon;
  let Text;
  let ZN3tIx;
  let date;
  let formatToPlainString;
  let intl;
  let intl3;
  let items;
  let obj4;
  let obj5;
  let obj7;
  let obj9;
  let onCancelScheduling;
  let onEditSchedule;
  let tmp9;
  scheduledTimestamp = scheduledTimestamp.scheduledTimestamp;
  ({ onCancelScheduling, onEditSchedule } = scheduledTimestamp);
  const tmp = closure_17();
  obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const obj2 = useToken;
  const bound = Math.max(0, (token - obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  const obj3 = { style: tmp.floatingReplyTextWrapper, accessibilityRole: "button", accessibilityLabel: intl.string(intl9.t.SBcdAN), activeOpacity: 0.5, onPress: onEditSchedule, children: closure_12(Text, obj4) };
  const PressableOpacity = Pressables.PressableOpacity;
  intl = intl9.intl;
  obj4 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: formatToPlainString(ZN3tIx, obj5) };
  Text = Text_Text.Text;
  const intl2 = intl9.intl;
  formatToPlainString = intl2.formatToPlainString;
  obj5 = { timestamp: date.valueOf() };
  ZN3tIx = intl9.t.ZN3tIx;
  date = new Date(scheduledTimestamp);
  const obj6 = { accessibilityRole: "button", accessibilityLabel: intl3.string(intl9.t.cpT0Cq), activeOpacity: 0.5, hitSlop: tmp9, onPress: onCancelScheduling, children: closure_12(Icon, obj7) };
  const tmp8 = closure_12(PressableOpacity, obj3);
  const PressableOpacity2 = Pressables.PressableOpacity;
  intl3 = intl9.intl;
  tmp9 = undefined;
  if (bound > 0) {
    tmp9 = bound;
  }
  obj7 = { source: AssetRegistryDefault, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
  Icon = native.Icon;
  const obj8 = { style: tmp.contextBarRow, children: map1(authStore2, obj9) };
  obj9 = { children: items };
  items = [tmp8, ];
  const obj10 = { style: tmp.floatingRightActions, children: closure_12(PressableOpacity2, obj6) };
  items[1] = closure_12(hasOwnProperty, obj10);
  return closure_12(hasOwnProperty, obj8);
});
const __initData = { code: "function ChatInputContextBarTsx1(){const{stylesBackgroundColor,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,...{maxHeight:heightSv.get()}};}" };
let closure_23 = { code: "function ChatInputContextBarTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const __initData2 = { code: "function ChatInputContextBarTsx3(){const{stylesBackgroundColor,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,...{maxHeight:heightSv.get()}};}" };
let closure_25 = { code: "function ChatInputContextBarTsx4(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((children, arg1) => {
  let backgroundColor;
  let first;
  let ref;
  let tmp10;
  let tmp = dependencyMap;
  obj = backgroundColor(576);
  const cResult = obj.c(9);
  children = children.children;
  const obj2 = backgroundColor(4696);
  backgroundColor = closure_16(obj2.useGradientValue(backgroundColor(4696).GradientPercentage.END)).contextBar.backgroundColor;
  const tmp3 = closure_17();
  const obj3 = backgroundColor(4612);
  const sharedValue = obj3.useSharedValue(0);
  let fn = function o() {
    obj = { backgroundColor, maxHeight: sharedValue.get() };
    return obj;
  };
  fn.__closure = { stylesBackgroundColor: backgroundColor, heightSv: sharedValue };
  fn.__workletHash = 16731072716488;
  fn.__initData = __initData;
  const obj4 = backgroundColor(4612);
  const animatedStyle = obj4.useAnimatedStyle(fn);
  dependencyMap = first.useRef(null);
  const obj5 = first;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      const current = ref.current;
      if (current != null) {
        current();
      }
    };
    cResult[0] = fn2;
    first = fn2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== sharedValue) {
    class I {
      constructor() {
        obj = {
          componentDidAppear() {
                  set = sharedValue.set;
                  obj = backgroundColor(ref[25]);
                  const result = set(obj.withTiming(60, closure_2_15));
                },
          componentDidEnter() {
                  set = sharedValue.set;
                  obj = backgroundColor(ref[25]);
                  const result = set(obj.withTiming(60, closure_2_15));
                },
          componentWillLeave(current) {
                  closure_1_2.current = current;
                  set = sharedValue.set;
                  obj = backgroundColor(closure_2[25]);
                  const fn = function n() { /* body not rendered: F152583 */ };
                  fn.__closure = { runOnJS: backgroundColor(closure_2[24]).runOnJS, handleTransitionFinished };
                  fn.__workletHash = 10908592279914;
                  fn.__initData = __initData;
                  ({ runOnJS: backgroundColor(closure_2[24]).runOnJS, handleTransitionFinished });
                  const result = set(obj.withTiming(0, closure_2_15, "respect-motion-settings", fn));
                }
        };
        return obj;
      }
    }
    cResult[1] = sharedValue;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        obj = {
          componentDidAppear() {
                  set = sharedValue.set;
                  obj = backgroundColor(ref[25]);
                  const result = set(obj.withTiming(60, closure_2_15));
                },
          componentDidEnter() {
                  set = sharedValue.set;
                  obj = backgroundColor(ref[25]);
                  const result = set(obj.withTiming(60, closure_2_15));
                },
          componentWillLeave(current) {
                  closure_1_2.current = current;
                  set = sharedValue.set;
                  obj = backgroundColor(closure_2[25]);
                  const fn = function n() { /* body not rendered: F152583 */ };
                  fn.__closure = { runOnJS: backgroundColor(closure_2[24]).runOnJS, handleTransitionFinished };
                  fn.__workletHash = 10908592279914;
                  fn.__initData = __initData;
                  ({ runOnJS: backgroundColor(closure_2[24]).runOnJS, handleTransitionFinished });
                  const result = set(obj.withTiming(0, closure_2_15, "respect-motion-settings", fn));
                }
        };
        return obj;
      }
    }
  }
  const imperativeHandle = obj5.useImperativeHandle(arg1, I);
  if (cResult[3] === animatedStyle) {
    class I {
      constructor() {
        obj = {
          componentDidAppear() {
                  set = sharedValue.set;
                  obj = backgroundColor(ref[25]);
                  const result = set(obj.withTiming(60, closure_2_15));
                },
          componentDidEnter() {
                  set = sharedValue.set;
                  obj = backgroundColor(ref[25]);
                  const result = set(obj.withTiming(60, closure_2_15));
                },
          componentWillLeave(current) {
                  closure_1_2.current = current;
                  set = sharedValue.set;
                  obj = backgroundColor(closure_2[25]);
                  const fn = function n() { /* body not rendered: F152583 */ };
                  fn.__closure = { runOnJS: backgroundColor(closure_2[24]).runOnJS, handleTransitionFinished };
                  fn.__workletHash = 10908592279914;
                  fn.__initData = __initData;
                  ({ runOnJS: backgroundColor(closure_2[24]).runOnJS, handleTransitionFinished });
                  const result = set(obj.withTiming(0, closure_2_15, "respect-motion-settings", fn));
                }
        };
        return obj;
      }
    }
    if (cResult[6] === children) {
      class I {
        constructor() {
          obj = {
            componentDidAppear() {
                      set = sharedValue.set;
                      obj = backgroundColor(ref[25]);
                      const result = set(obj.withTiming(60, closure_2_15));
                    },
            componentDidEnter() {
                      set = sharedValue.set;
                      obj = backgroundColor(ref[25]);
                      const result = set(obj.withTiming(60, closure_2_15));
                    },
            componentWillLeave(current) {
                      closure_1_2.current = current;
                      set = sharedValue.set;
                      obj = backgroundColor(closure_2[25]);
                      const fn = function n() { /* body not rendered: F152583 */ };
                      fn.__closure = { runOnJS: backgroundColor(closure_2[24]).runOnJS, handleTransitionFinished };
                      fn.__workletHash = 10908592279914;
                      fn.__initData = __initData;
                      ({ runOnJS: backgroundColor(closure_2[24]).runOnJS, handleTransitionFinished });
                      const result = set(obj.withTiming(0, closure_2_15, "respect-motion-settings", fn));
                    }
          };
          return obj;
        }
      }
      return tmp10;
    }
    const obj6 = { style: tmp9, children };
    const tmp13 = closure_12(sharedValue(4612).View, obj6);
    cResult[6] = children;
    cResult[7] = tmp9;
    cResult[8] = tmp13;
    tmp10 = tmp13;
  }
  const items = [animatedStyle, tmp3.floatingContextBar];
  cResult[3] = animatedStyle;
  cResult[4] = tmp3.floatingContextBar;
  cResult[5] = items;
}) : ((children, arg1) => {
  let closure_3;
  let items1;
  let backgroundColor;
  let ref;
  react = undefined;
  children = children.children;
  obj = backgroundColor(ref[23]);
  backgroundColor = closure_16(obj.useGradientValue(backgroundColor(ref[23]).GradientPercentage.END)).contextBar.backgroundColor;
  let tmp = closure_17();
  const obj2 = backgroundColor(ref[24]);
  const sharedValue = obj2.useSharedValue(0);
  let fn = function o() {
    obj = { backgroundColor, maxHeight: sharedValue.get() };
    return obj;
  };
  fn.__closure = { stylesBackgroundColor: backgroundColor, heightSv: sharedValue };
  fn.__workletHash = 10645440321802;
  fn.__initData = __initData2;
  const obj3 = backgroundColor(ref[24]);
  const animatedStyle = obj3.useAnimatedStyle(fn);
  ref = react.useRef(null);
  const items = [ref];
  react = react.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
  }, items);
  const imperativeHandle = react.useImperativeHandle(arg1, () => {
    let handleTransitionFinished;
    obj = {
      componentDidAppear() {
        set = sharedValue.set;
        obj = backgroundColor(ref[25]);
        const result = set(obj.withTiming(60, closure_2_15));
      },
      componentDidEnter() {
        set = sharedValue.set;
        obj = backgroundColor(ref[25]);
        const result = set(obj.withTiming(60, closure_2_15));
      },
      componentWillLeave(current) {
        closure_1_2.current = current;
        set = sharedValue.set;
        obj = backgroundColor(ref[25]);
        const fn = function n(arg0) {
          const tmp = arg0;
          if (tmp) {
            obj = backgroundColor(ref[24]);
            obj.runOnJS(handleTransitionFinished)();
          }
        };
        fn.__closure = { runOnJS: backgroundColor(ref[24]).runOnJS, handleTransitionFinished };
        fn.__workletHash = 1243097213612;
        fn.__initData = __initData;
        ({ runOnJS: backgroundColor(ref[24]).runOnJS, handleTransitionFinished });
        const result = set(obj.withTiming(0, closure_2_15, "respect-motion-settings", fn));
      }
    };
    return obj;
  });
  const obj4 = { style: items1, children };
  items1 = [animatedStyle, tmp.floatingContextBar];
  return closure_12(sharedValue(ref[24]).View, obj4);
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let obj3;
  let onCancelReplying;
  let onTapContextBarReply;
  let onToggleReplyMention;
  let pendingEdit;
  let pendingReply;
  let tmp4;
  obj = channel(pendingReply[11]);
  const cResult = obj.c(38);
  channel = channel.channel;
  const chatInputRef = channel.chatInputRef;
  ({ pendingEdit, pendingReply } = channel);
  if (cResult[0] !== chatInputRef) {
    const fn = function n() {
      const current = chatInputRef.current;
      if (current != null) {
        current.handleCancelEditing();
      }
    };
    cResult[0] = chatInputRef;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === channel.guild_id) {
    if (cResult[3] === channel.id) {
      let tmp5;
      let tmp6;
      if (cResult[4] === pendingReply) {
        tmp5 = cResult[5];
      }
      if (cResult[6] !== pendingReply) {
        const fn3 = function s() {
          if (null != pendingReply) {
            channel = pendingReply.channel;
            obj = router_utils;
            obj.transitionTo(unpackModuleId.CHANNEL(channel.getGuildId(), pendingReply.channel.id, pendingReply.message.id));
          }
        };
        class T {
          constructor() {
            if (null != pendingReply) {
              obj = PendingReplyActionCreators;
              const result = obj.setPendingReplyShouldMention(pendingReply.channel.id, !pendingReply.shouldMention);
            }
          }
        }
        cResult[6] = pendingReply;
        cResult[7] = fn3;
        cResult[8] = T;
        tmp6 = fn3;
      } else {
        tmp6 = cResult[7];
        class T {
          constructor() {
            if (null != pendingReply) {
              obj = PendingReplyActionCreators;
              const result = obj.setPendingReplyShouldMention(pendingReply.channel.id, !pendingReply.shouldMention);
            }
          }
        }
      }
      if (cResult[9] === tmp4) {
        if (cResult[10] === tmp5) {
          if (cResult[11] === tmp6) {
            let tmp8;
            let tmp14;
            if (cResult[12] === T) {
              tmp8 = cResult[13];
            }
            class T {
              constructor() {
                if (null != pendingReply) {
                  obj = PendingReplyActionCreators;
                  const result = obj.setPendingReplyShouldMention(pendingReply.channel.id, !pendingReply.shouldMention);
                }
              }
            }
            ({ onCancelReplying, onTapContextBarReply, onToggleReplyMention } = tmp8);
            let message;
            const useNullableMessageAuthor = channel(pendingReply[30]).useNullableMessageAuthor;
            channel(pendingReply[30]);
            if (pendingReply != null) {
              message = pendingReply.message;
            }
            const nullableMessageAuthor = useNullableMessageAuthor(message);
            const tmp13 = globalThis;
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              class T {
                constructor() {
                  if (null != pendingReply) {
                    obj = PendingReplyActionCreators;
                    const result = obj.setPendingReplyShouldMention(pendingReply.channel.id, !pendingReply.shouldMention);
                  }
                }
              }
              tmp16[0] = DraftStore;
              cResult[14] = tmp16;
              tmp14 = tmp16;
            } else {
              tmp14 = cResult[14];
            }
            if (cResult[15] !== channel.id) {
              class A {
                constructor() {
                  return DraftStore.getScheduledMessage(channel.id);
                }
              }
              class T {
                constructor() {
                  if (null != pendingReply) {
                    obj = PendingReplyActionCreators;
                    const result = obj.setPendingReplyShouldMention(pendingReply.channel.id, !pendingReply.shouldMention);
                  }
                }
              }
              cResult[15] = channel.id;
              cResult[16] = A;
            } else {
              class A {
                constructor() {
                  return DraftStore.getScheduledMessage(channel.id);
                }
              }
            }
            const tmpResult2 = channel(pendingReply[17]);
            const stateFromStores = tmpResult2.useStateFromStores(tmp14, A);
            if (cResult[17] === onCancelReplying) {
              class A {
                constructor() {
                  return DraftStore.getScheduledMessage(channel.id);
                }
              }
            }
            let tmp20 = null != pendingReply && null != nullableMessageAuthor;
            if (tmp20) {
              class A {
                constructor() {
                  return DraftStore.getScheduledMessage(channel.id);
                }
              }
              class T {
                constructor() {
                  if (null != pendingReply) {
                    obj = PendingReplyActionCreators;
                    const result = obj.setPendingReplyShouldMention(pendingReply.channel.id, !pendingReply.shouldMention);
                  }
                }
              }
              const obj2 = { children: closure_12(closure_19, obj3) };
              obj3 = { pendingReply, pendingReplyAuthor: nullableMessageAuthor, onTapContextBarReply, onCancelReplying, onToggleReplyMention };
              tmp20 = closure_12(closure_26, obj2);
            }
            cResult[17] = onCancelReplying;
            cResult[18] = onTapContextBarReply;
            cResult[19] = onToggleReplyMention;
            cResult[20] = pendingReply;
            cResult[21] = nullableMessageAuthor;
            cResult[22] = tmp20;
          }
        }
      }
      const obj4 = { onCancelEditing: tmp4, onCancelReplying: tmp5, onTapContextBarReply: tmp6, onToggleReplyMention: T };
      cResult[9] = tmp4;
      cResult[10] = tmp5;
      cResult[11] = tmp6;
      cResult[12] = T;
      cResult[13] = obj4;
      tmp8 = obj4;
    }
  }
  const fn2 = function l() {
    let id1;
    let id2;
    let tmp8Result;
    if (null != pendingReply) {
      const obj3 = PendingReplyActionCreators;
      obj3.deletePendingReply(channel.id);
      let id;
      const track = AnalyticsUtilsDefault.track;
      const CHAT_CONTEXT_BAR_ACTION_CANCELED = constants.CHAT_CONTEXT_BAR_ACTION_CANCELED;
      AnalyticsUtilsDefault;
      if (pendingReply != null) {
        id = pendingReply.message.id;
      }
      obj = { message_id: id, channel_id: null, guild_id: null, context_action: "reply", reason: tmp8Result.getContextBarCancelReason("reply", "cancel"), is_own_message: id1 === id2 };
      ({ id: obj.channel_id, guild_id: obj.guild_id } = channel);
      tmp8Result = LongPressMessageActionSheetUtils;
      const currentUser = UserStore.getCurrentUser();
      id1 = undefined;
      if (currentUser != null) {
        id1 = currentUser.id;
      }
      id2 = undefined;
      if (pendingReply != null) {
        id2 = pendingReply.message.author.id;
      }
      track(CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
    }
  };
  cResult[2] = channel.guild_id;
  cResult[3] = channel.id;
  cResult[4] = pendingReply;
  cResult[5] = fn2;
  tmp5 = fn2;
}) : ((channel) => {
  let items2;
  let obj3;
  let obj5;
  let obj7;
  let obj9;
  let onCancelEditing;
  let onTapContextBarReply;
  let onToggleReplyMention;
  channel = channel.channel;
  const chatInputRef = channel.chatInputRef;
  const pendingReply = channel.pendingReply;
  let stateFromStores;
  const items = [channel, chatInputRef, pendingReply];
  const pendingEdit = channel.pendingEdit;
  const memo = stateFromStores.useMemo(() => {
    let ref;
    obj = {
      onCancelEditing() {
        const current = ref.current;
        if (current != null) {
          current.handleCancelEditing();
        }
      },
      onCancelReplying() {
        let id1;
        let id2;
        let tmp8Result;
        if (null != closure_1_2) {
          const obj3 = channel(pendingReply[26]);
          obj3.deletePendingReply(id.id);
          const tmp10 = id;
          id = undefined;
          const track = chatInputRef(pendingReply[27]).track;
          const CHAT_CONTEXT_BAR_ACTION_CANCELED = constants.CHAT_CONTEXT_BAR_ACTION_CANCELED;
          chatInputRef(pendingReply[27]);
          if (closure_1_2 != null) {
            id = closure_1_2.message.id;
          }
          obj = { message_id: id, channel_id: null, guild_id: null, context_action: "reply", reason: tmp8Result.getContextBarCancelReason("reply", "cancel"), is_own_message: id1 === id2 };
          ({ id: obj.channel_id, guild_id: obj.guild_id } = tmp10);
          tmp8Result = channel(pendingReply[28]);
          currentUser = currentUser.getCurrentUser();
          id1 = undefined;
          if (currentUser != null) {
            id1 = currentUser.id;
          }
          id2 = undefined;
          if (closure_1_2 != null) {
            id2 = closure_1_2.message.author.id;
          }
          track(CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
        }
      },
      onTapContextBarReply() {
        if (null != closure_1_2) {
          obj = channel(pendingReply[29]);
          channel = closure_1_2.channel;
          obj.transitionTo(closure_2_11.CHANNEL(channel.getGuildId(), closure_1_2.channel.id, closure_1_2.message.id));
        }
      },
      onToggleReplyMention() {
        if (null != closure_1_2) {
          obj = channel(pendingReply[26]);
          const result = obj.setPendingReplyShouldMention(closure_1_2.channel.id, !closure_1_2.shouldMention);
        }
      }
    };
    return obj;
  }, items);
  const onCancelReplying = memo.onCancelReplying;
  ({ onCancelEditing, onTapContextBarReply, onToggleReplyMention } = memo);
  let message;
  const useNullableMessageAuthor = channel(pendingReply[30]).useNullableMessageAuthor;
  channel(pendingReply[30]);
  if (pendingReply != null) {
    message = pendingReply.message;
  }
  const nullableMessageAuthor = useNullableMessageAuthor(message);
  const items1 = [DraftStore];
  const tmp2Result = channel(pendingReply[17]);
  stateFromStores = tmp2Result.useStateFromStores(items1, () => DraftStore.getScheduledMessage(channel.id));
  obj = { component, children: items2 };
  let tmp9 = null != pendingReply;
  const TransitionGroup = tmp2(tmp3[34]).TransitionGroup;
  if (tmp9) {
    tmp9 = null != nullableMessageAuthor;
  }
  if (tmp9) {
    const obj2 = { children: closure_12(closure_19, obj3) };
    obj3 = { pendingReply, pendingReplyAuthor: nullableMessageAuthor, onTapContextBarReply, onCancelReplying, onToggleReplyMention };
    tmp9 = closure_12(closure_26, obj2);
  }
  items2 = [tmp9, , , ];
  let tmp13 = null != pendingReply && null == nullableMessageAuthor;
  if (tmp13) {
    const obj4 = { children: closure_12(closure_18, obj5) };
    obj5 = { onCancelReplying };
    tmp13 = closure_12(closure_26, obj4);
  }
  items2[1] = tmp13;
  let tmp17 = null != pendingEdit;
  if (tmp17) {
    const obj6 = { children: closure_12(closure_20, obj7) };
    obj7 = { onCancelEditing };
    tmp17 = closure_12(closure_26, obj6);
  }
  items2[2] = tmp17;
  let tmp21 = null != stateFromStores;
  if (tmp21) {
    const obj8 = { children: closure_12(closure_21, obj9) };
    obj9 = {
      scheduledTimestamp: stateFromStores.scheduledTimestamp,
      onCancelScheduling() {
          obj = DraftActionCreatorsDefault;
          return obj.clearDraft(channel.id, DraftType.ScheduledMessage);
        },
      onEditSchedule() {
          obj = ScheduledMessagesUtils;
          return obj.openScheduleMessageActionSheet(channel.id, ScheduledMessageTypes.ScheduledMessageEntryPoint.COMPOSER_BAR, stateFromStores.scheduledTimestamp);
        }
    };
    tmp21 = closure_12(closure_26, obj8);
  }
  items2[3] = tmp21;
  return closure_13(TransitionGroup, obj);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputContextBar.tsx");

export default memoResult;
export const ChatInputReplyBar = tmp5;
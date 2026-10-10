// === Module 12133: ChatInputContextBar ===

// Module 12133 (ChatInputContextBar)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import useToken from "useToken" /* 4818 */;
import Text_Text from "Text/Text" /* 5088 */;
import Pressables from "Pressables" /* 6184 */;
import _modDef6620 from "module_6620" /* 6620 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7918 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 9292 */;
import ScheduledMessageTypes from "ScheduledMessageTypes" /* 9294 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 9688 */;
import PendingReplyActionCreators from "PendingReplyActionCreators" /* 9690 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import DraftStore from "DraftStore" /* 7243 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const DraftType = fn(7243).DraftType;
const Constants = fn(1085);
({ AnalyticEvents: c10, Routes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let obj = { duration: 250, easing: fn(1200).STANDARD_EASING };
let createStyles = fn(5092);
let closure_16 = createStyles.createStyles((arg0) => {
  let MOBILE_FLOATING_ACCESSORY_BACKGROUND = arg0;
  if (arg0 == null) {
    MOBILE_FLOATING_ACCESSORY_BACKGROUND = nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
  }
  return { contextBar: { backgroundColor: MOBILE_FLOATING_ACCESSORY_BACKGROUND } };
});
createStyles = fn(5092);
let closure_17 = createStyles.createStyles(() => {
  obj = { contextBarRow: { overflow: "hidden", flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_GAP }, floatingReplyTextWrapper: { flexShrink: 1, minWidth: 0 }, floatingContextBar: null, replyMentionButtonActive: null, replyMentionIcon: null, replyMentionIconActive: null, floatingRightActions: null, floatingMentionGroup: null, floatingDivider: null, floatingCloseIcon: null };
  const obj2 = { overflow: "hidden", flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_GAP };
  obj.floatingContextBar = { borderBottomWidth: React4.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_MUTED, overflow: "hidden" };
  const obj3 = { borderBottomWidth: React4.hairlineWidth, borderBottomColor: nativeDefault.colors.BORDER_MUTED, overflow: "hidden" };
  obj.replyMentionButtonActive = { color: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
  const size = { width: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: nativeDefault.colors.TEXT_MUTED, marginRight: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT };
  obj.replyMentionIcon = size;
  const obj4 = { color: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
  obj.replyMentionIconActive = { tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
  obj.floatingRightActions = { flexGrow: 1, flexShrink: 0, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: 8 };
  obj.floatingMentionGroup = { flexDirection: "row", alignItems: "center", gap: 2 };
  const obj5 = { tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
  obj.floatingDivider = { width: React4.hairlineWidth, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  const size1 = { width: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
  obj.floatingCloseIcon = size1;
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputReplyBarNoAuthor(onCancelReplying) {
  const cResult = c.c(17);
  onCancelReplying = onCancelReplying.onCancelReplying;
  const tmp4 = closure_17();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const bound = Math.max(0, (token - useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  ({ contextBarRow, floatingReplyTextWrapper } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["5IEsGx"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.floatingReplyTextWrapper) {
    const obj4 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: floatingReplyTextWrapper, children: first };
    const tmp12 = __initData(Text_Text.Text, obj4);
    cResult[1] = tmp4.floatingReplyTextWrapper;
    cResult[2] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.jSnJGT);
    cResult[3] = stringResult1;
    let tmp13 = stringResult1;
  } else {
    tmp13 = cResult[3];
  }
  let tmp15;
  if (bound > 0) {
    tmp15 = bound;
  }
  if (cResult[4] !== tmp4.floatingCloseIcon) {
    const obj5 = { source: _modDef6620, size: native.Icon.Sizes.CUSTOM, style: tmp4.floatingCloseIcon };
    const tmp18 = __initData(native.Icon, obj5);
    cResult[4] = tmp4.floatingCloseIcon;
    cResult[5] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === onCancelReplying) {
    if (cResult[7] === tmp15) {
      if (cResult[8] === tmp16) {
        let tmp19 = cResult[9];
      }
      if (cResult[10] === tmp4.floatingRightActions) {
        if (cResult[11] === tmp19) {
          let tmp21 = cResult[12];
        }
        if (cResult[13] === tmp4.contextBarRow) {
          if (cResult[14] === tmp21) {
            if (cResult[15] === tmp10) {
              let tmp25 = cResult[16];
            }
            return tmp25;
          }
        }
        const obj6 = { style: contextBarRow, children: null };
        const items = [tmp10, tmp21];
        obj6.children = items;
        const tmp28 = map1(component, obj6);
        cResult[13] = tmp4.contextBarRow;
        cResult[14] = tmp21;
        cResult[15] = tmp10;
        cResult[16] = tmp28;
        tmp25 = tmp28;
      }
      const obj7 = { style: tmp4.floatingRightActions, children: tmp19 };
      const tmp24 = __initData(component, obj7);
      cResult[10] = tmp4.floatingRightActions;
      cResult[11] = tmp19;
      cResult[12] = tmp24;
      tmp21 = tmp24;
    }
  }
  const tmp20 = __initData(Pressables.PressableOpacity, { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: tmp13, hitSlop: tmp15, onPress: onCancelReplying, children: tmp16 });
  cResult[6] = onCancelReplying;
  cResult[7] = tmp15;
  cResult[8] = tmp16;
  cResult[9] = tmp20;
  tmp19 = tmp20;
}) : (function ChatInputReplyBarNoAuthor(onCancelReplying) {
  const tmp = closure_17();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const bound = Math.max(0, (token - useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  const obj3 = { style: tmp.contextBarRow, children: null };
  const obj4 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: tmp.floatingReplyTextWrapper, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["5IEsGx"]);
  const items = [__initData(Text_Text.Text, obj4), ];
  const obj5 = { style: tmp.floatingRightActions, children: null };
  const obj6 = { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, onPress: null, children: null };
  const intl2 = util.intl;
  obj6.accessibilityLabel = intl2.string(util.t.jSnJGT);
  let tmp10;
  if (bound > 0) {
    tmp10 = bound;
  }
  obj6.hitSlop = tmp10;
  obj6.onPress = onCancelReplying.onCancelReplying;
  obj6.children = __initData(native.Icon, { source: _modDef6620, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon });
  obj5.children = __initData(Pressables.PressableOpacity, obj6);
  items[1] = __initData(component, obj5);
  obj3.children = items;
  return map1(component, obj3);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputReplyBar(pendingReply) {
  const cResult = pendingReply(colorString[11]).c(61);
  pendingReply = pendingReply.pendingReply;
  ({ pendingReplyAuthor, onTapContextBarReply, onCancelReplying, onToggleReplyMention } = pendingReply);
  const tmp4 = closure_17();
  obj = pendingReply(colorString[11]);
  const token = pendingReply(colorString[12]).useToken(stateFromStores(colorString[9]).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  let obj2 = pendingReply(colorString[12]);
  const bound = Math.max(0, (token - pendingReply(colorString[12]).useToken(stateFromStores(colorString[9]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
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
  let obj3 = pendingReply(colorString[12]);
  stateFromStores = pendingReply(colorString[17]).useStateFromStores(tmp8, tmp9);
  if (cResult[2] !== pendingReply.shouldMention) {
    let obj4 = { checked: null };
    ({ shouldMention: obj5.checked, shouldMention: tmp3[2] } = pendingReply);
    cResult[3] = obj4;
    let tmp12 = obj4;
  } else {
    tmp12 = cResult[3];
  }
  const tmpResult = pendingReply(colorString[17]);
  const checkboxA11yNative = pendingReply(colorString[18]).useCheckboxA11yNative(tmp12);
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  colorString = pendingReplyAuthor.colorString;
  const colorStrings = pendingReplyAuthor.colorStrings;
  const nick = pendingReplyAuthor.nick;
  const guildId = pendingReplyAuthor.guildId;
  if (cResult[4] === colorString) {
    if (cResult[5] === stateFromStores) {
      let tmp14 = cResult[6];
    }
    roleStyle = tmp14;
    if (cResult[7] === guildId) {
      if (cResult[8] === pendingReply.message.author.id) {
        let tmp17 = cResult[9];
      }
      const tmp18 = tmp5(tmp2[19])(tmp17);
      if (cResult[10] !== tmp18) {
        let obj6 = { displayNameStyles: tmp18 };
        cResult[10] = tmp18;
        cResult[11] = obj6;
        let tmp19 = obj6;
      } else {
        tmp19 = cResult[11];
      }
      const displayNameStylesFont = tmp(tmp2[20]).useDisplayNameStylesFont(tmp19);
      const tmpResult6 = tmp(tmp2[20]);
      const processColorStringsArray = tmp(tmp2[21]).useProcessColorStringsArray(colorStrings);
      const tmpResult8 = tmp(tmp2[21]);
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
                        if (cResult[21] === isRoleStyleAndRoleColorsEligibleForERC) {
                          let floatingReplyTextWrapper = cResult[22];
                        }
                        if (cResult[23] === nick) {
                          if (cResult[24] === onTapContextBarReply) {
                            if (cResult[25] === floatingReplyTextWrapper) {
                              if (cResult[26] === tmp4.floatingReplyTextWrapper) {
                                if (cResult[28] === bound) {
                                  if (cResult[29] === onCancelReplying) {
                                    if (cResult[30] === tmp4.floatingCloseIcon) {
                                      let tmp32 = cResult[31];
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
                                                      if (cResult[41] === tmp4.replyMentionIconActive) {
                                                        let tmp36 = cResult[42];
                                                      }
                                                      if (cResult[43] === tmp32) {
                                                        if (cResult[44] === pendingReply.showMentionToggle) {
                                                          if (cResult[45] === tmp4.floatingDivider) {
                                                            let tmp47 = cResult[46];
                                                          }
                                                          if (cResult[47] !== bound) {
                                                            const obj7 = { gap: bound };
                                                            cResult[47] = bound;
                                                            cResult[48] = obj7;
                                                            let tmp53 = obj7;
                                                          } else {
                                                            tmp53 = cResult[48];
                                                          }
                                                          if (cResult[49] === tmp4.floatingRightActions) {
                                                            if (cResult[50] === tmp53) {
                                                              let tmp54 = cResult[51];
                                                            }
                                                            if (cResult[52] === tmp32) {
                                                              if (cResult[53] === tmp47) {
                                                                if (cResult[54] === tmp36) {
                                                                  if (cResult[55] === tmp54) {
                                                                    let tmp55 = cResult[56];
                                                                  }
                                                                  if (cResult[57] === tmp27) {
                                                                    if (cResult[58] === tmp4.contextBarRow) {
                                                                      if (cResult[59] === tmp55) {
                                                                        let tmp59 = cResult[60];
                                                                      }
                                                                      return tmp59;
                                                                    }
                                                                  }
                                                                  const obj8 = { style: tmp4.contextBarRow, children: null };
                                                                  let items1 = [tmp27, tmp55];
                                                                  obj8.children = items1;
                                                                  const tmp62 = closure_13(guildId, obj8);
                                                                  cResult[57] = tmp27;
                                                                  cResult[58] = tmp4.contextBarRow;
                                                                  cResult[59] = tmp55;
                                                                  cResult[60] = tmp62;
                                                                  tmp59 = tmp62;
                                                                }
                                                              }
                                                            }
                                                            const obj9 = { style: tmp54, children: null };
                                                            const items2 = [tmp36, tmp47, tmp32];
                                                            obj9.children = items2;
                                                            const tmp58 = closure_13(guildId, obj9);
                                                            cResult[52] = tmp32;
                                                            cResult[53] = tmp47;
                                                            cResult[54] = tmp36;
                                                            cResult[55] = tmp54;
                                                            cResult[56] = tmp58;
                                                            tmp55 = tmp58;
                                                          }
                                                          const items3 = [tmp4.floatingRightActions, tmp53];
                                                          cResult[49] = tmp4.floatingRightActions;
                                                          cResult[50] = tmp53;
                                                          cResult[51] = items3;
                                                          tmp54 = items3;
                                                        }
                                                      }
                                                      let showMentionToggle;
                                                      if (pendingReply != null) {
                                                        showMentionToggle = pendingReply.showMentionToggle;
                                                      }
                                                      let tmp50 = null;
                                                      if (showMentionToggle) {
                                                        tmp50 = null;
                                                        if (null != tmp32) {
                                                          const obj10 = { style: tmp4.floatingDivider };
                                                          tmp50 = closure_12(guildId, obj10);
                                                        }
                                                      }
                                                      cResult[43] = tmp32;
                                                      cResult[44] = pendingReply.showMentionToggle;
                                                      cResult[45] = tmp4.floatingDivider;
                                                      cResult[46] = tmp50;
                                                      tmp47 = tmp50;
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
                                    if (!showMentionToggle1) {
                                      cResult[32] = bound;
                                      cResult[33] = accessibilityRole;
                                      cResult[34] = accessibilityState;
                                      cResult[35] = onToggleReplyMention;
                                      cResult[36] = pendingReply.shouldMention;
                                      cResult[37] = pendingReply.showMentionToggle;
                                      cResult[38] = tmp4.floatingMentionGroup;
                                      cResult[39] = tmp4.replyMentionButtonActive;
                                      cResult[40] = tmp4.replyMentionIcon;
                                      cResult[41] = tmp4.replyMentionIconActive;
                                      cResult[42] = null;
                                      tmp36 = null;
                                    } else {
                                      const obj11 = { accessibilityRole, accessibilityState, accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.5, hitSlop: null, onPress: null, style: null, children: null };
                                      const intl2 = tmp(tmp2[13]).intl;
                                      obj11.accessibilityLabel = intl2.string(tmp(tmp2[13]).t.P8tvKG);
                                      const intl3 = tmp(tmp2[13]).intl;
                                      const string = intl3.string;
                                      const t = tmp(tmp2[13]).t;
                                      if (pendingReply.shouldMention) {
                                        let stringResult = string(t.PBgTSF);
                                      } else {
                                        stringResult = string(t["+LXBxU"]);
                                      }
                                      obj11.accessibilityHint = stringResult;
                                      let tmp42;
                                      if (bound > 0) {
                                        tmp42 = bound;
                                      }
                                      obj11.hitSlop = tmp42;
                                      obj11.onPress = onToggleReplyMention;
                                      obj11.style = tmp4.floatingMentionGroup;
                                      const obj12 = { source: tmp5(tmp2[22]), size: tmp(tmp2[7]).Icon.Sizes.CUSTOM, style: null };
                                      const items4 = [tmp4.replyMentionIcon, pendingReply.shouldMention && tmp4.replyMentionIconActive];
                                      obj12.style = items4;
                                      const items5 = [closure_12(tmp(tmp2[7]).Icon, obj12), ];
                                      let prop;
                                      if (pendingReply.shouldMention) {
                                        prop = tmp4.replyMentionButtonActive;
                                      }
                                      let obj13 = { variant: "text-sm/semibold", color: "text-muted", style: prop, children: null };
                                      const intl4 = tmp(tmp2[13]).intl;
                                      const string2 = intl4.string;
                                      let p9jC2r = tmp(tmp2[13]).t;
                                      if (pendingReply.shouldMention) {
                                        p9jC2r = p9jC2r.p9jC2r;
                                        let string2Result = string2(p9jC2r);
                                      } else {
                                        string2Result = string2(p9jC2r.U7f3bK);
                                      }
                                      obj13.children = string2Result;
                                      obj13 = closure_12(tmp(tmp2[14]).Text, obj13);
                                      items5[1] = obj13;
                                      obj11.children = items5;
                                      closure_13(tmp(tmp2[16]).PressableOpacity, obj11);
                                    }
                                  }
                                }
                                let tmp34Result = null;
                                if (null != onCancelReplying) {
                                  const obj14 = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.5, hitSlop: null, onPress: null, children: null };
                                  let intl = tmp(tmp2[13]).intl;
                                  obj14.accessibilityLabel = intl.string(tmp(tmp2[13]).t.jSnJGT);
                                  let tmp35;
                                  if (bound > 0) {
                                    tmp35 = bound;
                                  }
                                  obj14.hitSlop = tmp35;
                                  obj14.onPress = onCancelReplying;
                                  const obj15 = { source: tmp5(tmp2[15]), size: tmp(tmp2[7]).Icon.Sizes.CUSTOM, style: tmp4.floatingCloseIcon };
                                  obj14.children = closure_12(tmp(tmp2[7]).Icon, obj15);
                                  tmp34Result = closure_12(tmp(tmp2[16]).PressableOpacity, obj14);
                                }
                                cResult[28] = bound;
                                cResult[29] = onCancelReplying;
                                cResult[30] = tmp4.floatingCloseIcon;
                                cResult[31] = tmp34Result;
                                tmp32 = tmp34Result;
                              }
                            }
                          }
                        }
                        if (null == onTapContextBarReply) {
                          const obj16 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: floatingReplyTextWrapper("text-sm/semibold") };
                          let tmp30 = closure_12(tmp(tmp2[14]).Text, obj16);
                        } else {
                          const obj17 = { style: tmp4.floatingReplyTextWrapper, accessibilityRole: "link", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.5, onPress: null, children: null };
                          const intl5 = tmp(tmp2[13]).intl;
                          const obj18 = { username: nick };
                          obj17.accessibilityLabel = intl5.formatToPlainString(tmp(tmp2[13]).t.EpJL4E, obj18);
                          const intl6 = tmp(tmp2[13]).intl;
                          obj17.accessibilityHint = intl6.string(tmp(tmp2[13]).t["0CfCVW"]);
                          obj17.onPress = onTapContextBarReply;
                          const obj19 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: floatingReplyTextWrapper("text-sm/semibold") };
                          obj17.children = closure_12(tmp(tmp2[14]).Text, obj19);
                          tmp30 = closure_12(tmp(tmp2[16]).PressableOpacity, obj17);
                        }
                        cResult[23] = nick;
                        cResult[24] = onTapContextBarReply;
                        cResult[25] = floatingReplyTextWrapper;
                        floatingReplyTextWrapper = tmp4.floatingReplyTextWrapper;
                        cResult[26] = floatingReplyTextWrapper;
                        cResult[27] = tmp30;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      function replyText(variant) {
        const intl = pendingReply(colorString[13]).intl;
        return intl.format(pendingReply(colorString[13]).t["8E4GxS"], {
          userHook(arg0, arg1) {
            if ("dot" === stateFromStores) {
              if (null != colorString) {
                const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
                const items = [__initData(native.RoleDot, obj2), ];
                const obj3 = { variant, style: null, children: null };
                let tmp20;
                if (null != displayNameStylesFont) {
                  const obj4 = { fontFamily: tmp19 };
                  tmp20 = obj4;
                }
                const obj5 = { children: null };
                obj3.style = tmp20;
                obj3.children = nick;
                items[1] = __initData(Text_Text.Text, obj3, arg1);
                obj5.children = items;
                let tmp3Result = map1(closure_3_14, obj5);
              }
              return tmp3Result;
            }
            obj = { variant, style: null, gradientColors: null, children: null };
            const items1 = [closure_6, ];
            let tmp5 = null != displayNameStylesFont;
            if (tmp5) {
              const obj6 = { fontFamily: tmp4 };
              tmp5 = obj6;
            }
            items1[1] = tmp5;
            obj.style = items1;
            let tmp6;
            if (isRoleStyleAndRoleColorsEligibleForERC) {
              tmp6 = processColorStringsArray;
            }
            obj.gradientColors = tmp6;
            obj.children = nick;
            tmp3Result = __initData(Text_Text.Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
          }
        });
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
      cResult[22] = replyText;
      floatingReplyTextWrapper = replyText;
      const tmpResult7 = tmp(tmp2[21]);
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
      const obj21 = { color: colorString };
      const items6 = [obj21];
      tmp15 = items6;
    }
  }
  cResult[4] = colorString;
  cResult[5] = stateFromStores;
  cResult[6] = tmp15;
  tmp14 = tmp15;
  const tmpResult5 = pendingReply(colorString[18]);
}) : (function ChatInputReplyBar(pendingReply) {
  pendingReply = pendingReply.pendingReply;
  ({ pendingReplyAuthor, onTapContextBarReply, onCancelReplying } = pendingReply);
  let stateFromStores;
  let colorString;
  let roleStyle;
  let tmp = closure_17();
  const token = pendingReply(colorString[12]).useToken(stateFromStores(colorString[9]).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  obj = pendingReply(colorString[12]);
  const bound = Math.max(0, (token - pendingReply(colorString[12]).useToken(stateFromStores(colorString[9]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  let obj2 = pendingReply(colorString[12]);
  let items = [roleStyle];
  stateFromStores = pendingReply(colorString[17]).useStateFromStores(items, () => roleStyle.roleStyle);
  let obj3 = pendingReply(colorString[17]);
  const checkboxA11yNative = pendingReply(colorString[18]).useCheckboxA11yNative({ checked: pendingReply.shouldMention });
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
        obj = { color: tmp2 };
        const items = [obj];
        tmp = items;
      }
    }
    return tmp;
  }, items1);
  let obj4 = pendingReply(colorString[18]);
  let obj5 = { checked: pendingReply.shouldMention };
  let obj6 = { userId: pendingReply.message.author.id, guildId };
  const tmp9 = stateFromStores(colorString[19])({ userId: pendingReply.message.author.id, guildId });
  closure_7 = pendingReply(colorString[20]).useDisplayNameStylesFont({ displayNameStyles: tmp9 });
  const obj7 = pendingReply(colorString[20]);
  const processColorStringsArray = pendingReply(colorString[21]).useProcessColorStringsArray(colorStrings);
  const obj8 = pendingReply(colorString[21]);
  closure_9 = pendingReply(colorString[21]).useIsRoleStyleAndRoleColorsEligibleForERC(guildId, pendingReply.message.author.id, stateFromStores, processColorStringsArray);
  if (null == onTapContextBarReply) {
    const obj10 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: null };
    const intl = tmp2(tmp3[13]).intl;
    const obj11 = {
      userHook(arg0, arg1) {
          if ("dot" === stateFromStores) {
            if (null != colorString) {
              const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
              const items = [__initData(native.RoleDot, obj2), ];
              const obj3 = { variant: "text-sm/semibold", style: null, children: null };
              let tmp19;
              if (null != closure_7) {
                const obj4 = { fontFamily: tmp18 };
                tmp19 = obj4;
              }
              const obj5 = { children: null };
              obj3.style = tmp19;
              obj3.children = nick;
              items[1] = __initData(Text_Text.Text, obj3, arg1);
              obj5.children = items;
              let tmp3Result = map1(closure_2_14, obj5);
            }
            return tmp3Result;
          }
          obj = { variant: "text-sm/semibold", style: null, gradientColors: null, children: null };
          const items1 = [closure_6, ];
          let tmp5 = null != closure_7;
          if (tmp5) {
            const obj6 = { fontFamily: tmp4 };
            tmp5 = obj6;
          }
          items1[1] = tmp5;
          obj.style = items1;
          let tmp6;
          if (closure_9) {
            tmp6 = processColorStringsArray;
          }
          obj.gradientColors = tmp6;
          obj.children = nick;
          tmp3Result = __initData(Text_Text.Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
        }
    };
    obj10.children = intl.format(tmp2(tmp3[13]).t["8E4GxS"], obj11);
    let tmp12 = closure_12(tmp2(tmp3[14]).Text, obj10);
    let tmp13 = closure_12;
  } else {
    tmp13 = closure_12;
    const obj12 = { style: tmp.floatingReplyTextWrapper, accessibilityRole: "link", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.5, onPress: null, children: null };
    const intl6 = tmp2(tmp3[13]).intl;
    const obj13 = { username: nick };
    obj12.accessibilityLabel = intl6.formatToPlainString(tmp2(tmp3[13]).t.EpJL4E, obj13);
    const intl7 = tmp2(tmp3[13]).intl;
    obj12.accessibilityHint = intl7.string(tmp2(tmp3[13]).t["0CfCVW"]);
    obj12.onPress = onTapContextBarReply;
    const obj14 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: null };
    const intl8 = tmp2(tmp3[13]).intl;
    const obj15 = {
      userHook(arg0, arg1) {
          if ("dot" === stateFromStores) {
            if (null != colorString) {
              const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
              const items = [__initData(native.RoleDot, obj2), ];
              const obj3 = { variant: "text-sm/semibold", style: null, children: null };
              let tmp19;
              if (null != closure_7) {
                const obj4 = { fontFamily: tmp18 };
                tmp19 = obj4;
              }
              const obj5 = { children: null };
              obj3.style = tmp19;
              obj3.children = nick;
              items[1] = __initData(Text_Text.Text, obj3, arg1);
              obj5.children = items;
              let tmp3Result = map1(closure_2_14, obj5);
            }
            return tmp3Result;
          }
          obj = { variant: "text-sm/semibold", style: null, gradientColors: null, children: null };
          const items1 = [closure_6, ];
          let tmp5 = null != closure_7;
          if (tmp5) {
            const obj6 = { fontFamily: tmp4 };
            tmp5 = obj6;
          }
          items1[1] = tmp5;
          obj.style = items1;
          let tmp6;
          if (closure_9) {
            tmp6 = processColorStringsArray;
          }
          obj.gradientColors = tmp6;
          obj.children = nick;
          tmp3Result = __initData(Text_Text.Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
        }
    };
    obj14.children = intl8.format(tmp2(tmp3[13]).t["8E4GxS"], obj15);
    obj12.children = closure_12(tmp2(tmp3[14]).Text, obj14);
    tmp12 = closure_12(tmp2(tmp3[16]).PressableOpacity, obj12);
  }
  let tmp13Result = null;
  if (null != onCancelReplying) {
    const obj16 = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.5, hitSlop: null, onPress: null, children: null };
    const intl2 = tmp2(tmp3[13]).intl;
    obj16.accessibilityLabel = intl2.string(tmp2(tmp3[13]).t.jSnJGT);
    let tmp15;
    if (bound > 0) {
      tmp15 = bound;
    }
    obj16.hitSlop = tmp15;
    obj16.onPress = onCancelReplying;
    const obj17 = { source: tmp4(tmp3[15]), size: tmp2(tmp3[7]).Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
    obj16.children = tmp13(tmp2(tmp3[7]).Icon, obj17);
    tmp13Result = tmp13(tmp2(tmp3[16]).PressableOpacity, obj16);
  }
  let showMentionToggle;
  if (pendingReply != null) {
    showMentionToggle = pendingReply.showMentionToggle;
  }
  if (!showMentionToggle) {
    let showMentionToggle1;
    if (pendingReply != null) {
      showMentionToggle1 = pendingReply.showMentionToggle;
    }
    let tmp13Result2 = null;
    if (showMentionToggle1) {
      tmp13Result2 = null;
      if (null != tmp13Result) {
        const obj18 = { style: tmp.floatingDivider };
        tmp13Result2 = tmp13(guildId, obj18);
      }
    }
    const obj19 = { style: tmp.contextBarRow, children: null };
    const items2 = [tmp12, ];
    const obj20 = { style: null, children: null };
    const items3 = [tmp.floatingRightActions, ];
    const obj21 = { gap: bound };
    items3[1] = obj21;
    obj20.style = items3;
    const items4 = [null, tmp13Result2, tmp13Result];
    obj20.children = items4;
    items2[1] = closure_13(guildId, obj20);
    obj19.children = items2;
    return closure_13(guildId, obj19);
  } else {
    const obj22 = { accessibilityRole, accessibilityState, accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.5, hitSlop: null, onPress: null, style: null, children: null };
    const intl3 = tmp2(tmp3[13]).intl;
    obj22.accessibilityLabel = intl3.string(tmp2(tmp3[13]).t.P8tvKG);
    const intl4 = tmp2(tmp3[13]).intl;
    const string = intl4.string;
    const t = tmp2(tmp3[13]).t;
    if (pendingReply.shouldMention) {
      let stringResult = string(t.PBgTSF);
    } else {
      stringResult = string(t["+LXBxU"]);
    }
    obj22.accessibilityHint = stringResult;
    let tmp19;
    if (bound > 0) {
      tmp19 = bound;
    }
    obj22.hitSlop = tmp19;
    obj22.onPress = pendingReply.onToggleReplyMention;
    obj22.style = tmp.floatingMentionGroup;
    const obj23 = { source: tmp4(tmp3[22]), size: tmp2(tmp3[7]).Icon.Sizes.CUSTOM, style: null };
    const items5 = [tmp.replyMentionIcon, pendingReply.shouldMention && tmp.replyMentionIconActive];
    obj23.style = items5;
    const items6 = [tmp13(tmp2(tmp3[7]).Icon, obj23), ];
    let prop;
    if (pendingReply.shouldMention) {
      prop = tmp.replyMentionButtonActive;
    }
    let obj24 = { variant: "text-sm/semibold", color: "text-muted", style: prop, children: null };
    const intl5 = tmp2(tmp3[13]).intl;
    const string2 = intl5.string;
    let p9jC2r = tmp2(tmp3[13]).t;
    if (pendingReply.shouldMention) {
      p9jC2r = p9jC2r.p9jC2r;
      let string2Result = string2(p9jC2r);
    } else {
      string2Result = string2(p9jC2r.U7f3bK);
    }
    obj24.children = string2Result;
    obj24 = tmp13(tmp2(tmp3[14]).Text, obj24);
    items6[1] = obj24;
    obj22.children = items6;
    closure_13(tmp2(tmp3[16]).PressableOpacity, obj22);
  }
  const obj9 = pendingReply(colorString[21]);
});
let closure_19 = tmp5;
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputEditBar(onCancelEditing) {
  const cResult = c.c(19);
  onCancelEditing = onCancelEditing.onCancelEditing;
  const tmp4 = closure_17();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const bound = Math.max(0, (token - useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.rtNXxN);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.floatingReplyTextWrapper) {
    const obj4 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: tmp4.floatingReplyTextWrapper, children: first };
    const tmp12 = __initData(Text_Text.Text, obj4);
    cResult[1] = tmp4.floatingReplyTextWrapper;
    cResult[2] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.qv9j1K);
    cResult[3] = stringResult1;
    let tmp13 = stringResult1;
  } else {
    tmp13 = cResult[3];
  }
  let tmp15;
  if (bound > 0) {
    tmp15 = bound;
  }
  if (cResult[4] !== tmp4.floatingCloseIcon) {
    const obj5 = { source: _modDef6620, size: native.Icon.Sizes.CUSTOM, style: tmp4.floatingCloseIcon };
    const tmp18 = __initData(native.Icon, obj5);
    cResult[4] = tmp4.floatingCloseIcon;
    cResult[5] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === onCancelEditing) {
    if (cResult[7] === tmp15) {
      if (cResult[8] === tmp16) {
        let tmp19 = cResult[9];
      }
      if (cResult[10] === tmp19) {
        if (cResult[11] === tmp4.floatingRightActions) {
          let tmp21 = cResult[12];
        }
        if (cResult[13] === tmp10) {
          if (cResult[14] === tmp21) {
            let tmp25 = cResult[15];
          }
          if (cResult[16] === tmp4.contextBarRow) {
            if (cResult[17] === tmp25) {
              let tmp29 = cResult[18];
            }
            return tmp29;
          }
          const obj6 = { style: tmp4.contextBarRow, children: tmp25 };
          const tmp32 = __initData(component, obj6);
          cResult[16] = tmp4.contextBarRow;
          cResult[17] = tmp25;
          cResult[18] = tmp32;
          tmp29 = tmp32;
        }
        const obj7 = { children: null };
        const items = [tmp10, tmp21];
        obj7.children = items;
        const tmp28 = map1(closure_1_14, obj7);
        cResult[13] = tmp10;
        cResult[14] = tmp21;
        cResult[15] = tmp28;
        tmp25 = tmp28;
      }
      const obj8 = { style: tmp4.floatingRightActions, children: tmp19 };
      const tmp24 = __initData(component, obj8);
      cResult[10] = tmp19;
      cResult[11] = tmp4.floatingRightActions;
      cResult[12] = tmp24;
      tmp21 = tmp24;
    }
  }
  const tmp20 = __initData(Pressables.PressableOpacity, { accessibilityRole: "button", accessibilityLabel: tmp13, activeOpacity: 0.5, hitSlop: tmp15, onPress: onCancelEditing, children: tmp16 });
  cResult[6] = onCancelEditing;
  cResult[7] = tmp15;
  cResult[8] = tmp16;
  cResult[9] = tmp20;
  tmp19 = tmp20;
}) : (function ChatInputEditBar(onCancelEditing) {
  const tmp = closure_17();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const bound = Math.max(0, (token - useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  const obj3 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: tmp.floatingReplyTextWrapper, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.rtNXxN);
  const obj4 = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.5, hitSlop: null, onPress: null, children: null };
  const intl2 = util.intl;
  obj4.accessibilityLabel = intl2.string(util.t.qv9j1K);
  let tmp9;
  if (bound > 0) {
    tmp9 = bound;
  }
  obj4.hitSlop = tmp9;
  obj4.onPress = onCancelEditing.onCancelEditing;
  const tmp8 = __initData(Text_Text.Text, obj3);
  obj4.children = __initData(native.Icon, { source: _modDef6620, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon });
  const obj6 = { style: tmp.contextBarRow, children: null };
  const obj7 = { children: null };
  const items = [tmp8, ];
  const obj5 = { source: _modDef6620, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
  items[1] = __initData(component, { style: tmp.floatingRightActions, children: __initData(Pressables.PressableOpacity, obj4) });
  obj7.children = items;
  obj6.children = map1(closure_1_14, obj7);
  return __initData(component, obj6);
});
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputScheduledMessageBar(arg0) {
  const cResult = c.c(25);
  ({ scheduledTimestamp, onCancelScheduling, onEditSchedule } = arg0);
  const tmp4 = closure_17();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const bound = Math.max(0, (token - useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.SBcdAN);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== scheduledTimestamp) {
    const intl2 = util.intl;
    const obj4 = { timestamp: null };
    const _Date = Date;
    const date = new Date(scheduledTimestamp);
    obj4.timestamp = date.valueOf();
    const formatToPlainStringResult = intl2.formatToPlainString(util.t.ZN3tIx, obj4);
    cResult[1] = scheduledTimestamp;
    cResult[2] = formatToPlainStringResult;
    let tmp10 = formatToPlainStringResult;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp10) {
    const obj5 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: tmp10 };
    const tmp18 = __initData(Text_Text.Text, obj5);
    cResult[3] = tmp10;
    cResult[4] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[4];
  }
  if (cResult[5] === onEditSchedule) {
    if (cResult[6] === tmp4.floatingReplyTextWrapper) {
      if (cResult[7] === tmp16) {
        let tmp19 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult1 = intl3.string(util.t.cpT0Cq);
        cResult[9] = stringResult1;
        let tmp21 = stringResult1;
      } else {
        tmp21 = cResult[9];
      }
      let tmp23;
      if (bound > 0) {
        tmp23 = bound;
      }
      if (cResult[10] !== tmp4.floatingCloseIcon) {
        const obj6 = { source: _modDef6620, size: native.Icon.Sizes.CUSTOM, style: tmp4.floatingCloseIcon };
        const tmp26 = __initData(native.Icon, obj6);
        cResult[10] = tmp4.floatingCloseIcon;
        cResult[11] = tmp26;
        let tmp24 = tmp26;
      } else {
        tmp24 = cResult[11];
      }
      if (cResult[12] === onCancelScheduling) {
        if (cResult[13] === tmp23) {
          if (cResult[14] === tmp24) {
            let tmp27 = cResult[15];
          }
          if (cResult[16] === tmp27) {
            if (cResult[17] === tmp4.floatingRightActions) {
              let tmp30 = cResult[18];
            }
            if (cResult[19] === tmp19) {
              if (cResult[20] === tmp30) {
                let tmp34 = cResult[21];
              }
              if (cResult[22] === tmp4.contextBarRow) {
                if (cResult[23] === tmp34) {
                  let tmp38 = cResult[24];
                }
                return tmp38;
              }
              const obj7 = { style: tmp4.contextBarRow, children: tmp34 };
              const tmp41 = __initData(component, obj7);
              cResult[22] = tmp4.contextBarRow;
              cResult[23] = tmp34;
              cResult[24] = tmp41;
              tmp38 = tmp41;
            }
            const obj8 = { children: null };
            const items = [tmp19, tmp30];
            obj8.children = items;
            const tmp37 = map1(closure_1_14, obj8);
            cResult[19] = tmp19;
            cResult[20] = tmp30;
            cResult[21] = tmp37;
            tmp34 = tmp37;
          }
          const obj9 = { style: tmp4.floatingRightActions, children: tmp27 };
          const tmp33 = __initData(component, obj9);
          cResult[16] = tmp27;
          cResult[17] = tmp4.floatingRightActions;
          cResult[18] = tmp33;
          tmp30 = tmp33;
        }
      }
      const obj10 = { accessibilityRole: "button", accessibilityLabel: tmp21, activeOpacity: 0.5, hitSlop: tmp23, onPress: onCancelScheduling, children: tmp24 };
      const tmp29 = __initData(Pressables.PressableOpacity, obj10);
      cResult[12] = onCancelScheduling;
      cResult[13] = tmp23;
      cResult[14] = tmp24;
      cResult[15] = tmp29;
      tmp27 = tmp29;
    }
  }
  const tmp20 = __initData(Pressables.PressableOpacity, { style: tmp4.floatingReplyTextWrapper, accessibilityRole: "button", accessibilityLabel: first, activeOpacity: 0.5, onPress: onEditSchedule, children: tmp16 });
  cResult[5] = onEditSchedule;
  cResult[6] = tmp4.floatingReplyTextWrapper;
  cResult[7] = tmp16;
  cResult[8] = tmp20;
  tmp19 = tmp20;
}) : (function ChatInputScheduledMessageBar(scheduledTimestamp) {
  ({ onCancelScheduling, onEditSchedule } = scheduledTimestamp);
  const tmp = closure_17();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const bound = Math.max(0, (token - useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  const obj3 = { style: tmp.floatingReplyTextWrapper, accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.5, onPress: null, children: null };
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.SBcdAN);
  obj3.onPress = onEditSchedule;
  const obj4 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: null };
  const intl2 = util.intl;
  const obj5 = { timestamp: null };
  obj5.timestamp = new Date(scheduledTimestamp.scheduledTimestamp).valueOf();
  obj4.children = intl2.formatToPlainString(util.t.ZN3tIx, obj5);
  obj3.children = __initData(Text_Text.Text, obj4);
  const date = new Date(scheduledTimestamp.scheduledTimestamp);
  const obj6 = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.5, hitSlop: null, onPress: null, children: null };
  const intl3 = util.intl;
  obj6.accessibilityLabel = intl3.string(util.t.cpT0Cq);
  let tmp9;
  if (bound > 0) {
    tmp9 = bound;
  }
  obj6.hitSlop = tmp9;
  obj6.onPress = onCancelScheduling;
  const tmp8 = __initData(Pressables.PressableOpacity, obj3);
  obj6.children = __initData(native.Icon, { source: _modDef6620, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon });
  const obj8 = { style: tmp.contextBarRow, children: null };
  const obj9 = { children: null };
  const items = [tmp8, ];
  const obj7 = { source: _modDef6620, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
  items[1] = __initData(component, { style: tmp.floatingRightActions, children: __initData(Pressables.PressableOpacity, obj6) });
  obj9.children = items;
  obj8.children = map1(closure_1_14, obj9);
  return __initData(component, obj8);
});
const __initData = { code: "function ChatInputContextBarTsx1(){const{stylesBackgroundColor,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,...{maxHeight:heightSv.get()}};}" };
let closure_23 = { code: "function ChatInputContextBarTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
const __initData2 = { code: "function ChatInputContextBarTsx3(){const{stylesBackgroundColor,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,...{maxHeight:heightSv.get()}};}" };
let closure_25 = { code: "function ChatInputContextBarTsx4(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContextBarItem(arg0) {
  const cResult = backgroundColor(576).c(9);
  ({ children, ref } = arg0);
  obj = backgroundColor(576);
  backgroundColor = closure_16(backgroundColor(4936).useGradientValue(backgroundColor(4936).GradientPercentage.END)).contextBar.backgroundColor;
  const tmp3 = closure_17();
  const obj2 = backgroundColor(4936);
  const sharedValue = backgroundColor(4850).useSharedValue(0);
  const obj3 = backgroundColor(4850);
  let fn = function l() {
    return { backgroundColor, maxHeight: sharedValue.get() };
  };
  fn.__closure = { stylesBackgroundColor: backgroundColor, heightSv: sharedValue };
  fn.__workletHash = 16731072716488;
  fn.__initData = __initData;
  const animatedStyle = backgroundColor(4850).useAnimatedStyle(fn);
  dependencyMap = first.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function o() {
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
                  const result = sharedValue.set(backgroundColor(5093).withTiming(60, obj));
                },
          componentDidEnter() {
                  const result = sharedValue.set(backgroundColor(5093).withTiming(60, obj));
                },
          componentWillLeave(current) {
                  dependencyMap.current = current;
                  const fn = function n() { ... };
                  obj = backgroundColor(5093);
                  fn.__closure = { runOnJS: backgroundColor(4850).runOnJS, handleTransitionFinished };
                  fn.__workletHash = 10908592279914;
                  fn.__initData = __initData;
                  const result = sharedValue.set(obj.withTiming(0, closure_2_15, "respect-motion-settings", fn));
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
                  const result = sharedValue.set(backgroundColor(5093).withTiming(60, obj));
                },
          componentDidEnter() {
                  const result = sharedValue.set(backgroundColor(5093).withTiming(60, obj));
                },
          componentWillLeave(current) {
                  dependencyMap.current = current;
                  const fn = function n() { ... };
                  obj = backgroundColor(5093);
                  fn.__closure = { runOnJS: backgroundColor(4850).runOnJS, handleTransitionFinished };
                  fn.__workletHash = 10908592279914;
                  fn.__initData = __initData;
                  const result = sharedValue.set(obj.withTiming(0, closure_2_15, "respect-motion-settings", fn));
                }
        };
        return obj;
      }
    }
  }
  const imperativeHandle = first.useImperativeHandle(ref, I);
  if (cResult[3] === animatedStyle) {
    class I {
      constructor() {
        obj = {
          componentDidAppear() {
                  const result = sharedValue.set(backgroundColor(5093).withTiming(60, obj));
                },
          componentDidEnter() {
                  const result = sharedValue.set(backgroundColor(5093).withTiming(60, obj));
                },
          componentWillLeave(current) {
                  dependencyMap.current = current;
                  const fn = function n() { ... };
                  obj = backgroundColor(5093);
                  fn.__closure = { runOnJS: backgroundColor(4850).runOnJS, handleTransitionFinished };
                  fn.__workletHash = 10908592279914;
                  fn.__initData = __initData;
                  const result = sharedValue.set(obj.withTiming(0, closure_2_15, "respect-motion-settings", fn));
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
                      const result = sharedValue.set(backgroundColor(5093).withTiming(60, obj));
                    },
            componentDidEnter() {
                      const result = sharedValue.set(backgroundColor(5093).withTiming(60, obj));
                    },
            componentWillLeave(current) {
                      dependencyMap.current = current;
                      const fn = function n() { ... };
                      obj = backgroundColor(5093);
                      fn.__closure = { runOnJS: backgroundColor(4850).runOnJS, handleTransitionFinished };
                      fn.__workletHash = 10908592279914;
                      fn.__initData = __initData;
                      const result = sharedValue.set(obj.withTiming(0, closure_2_15, "respect-motion-settings", fn));
                    }
          };
          return obj;
        }
      }
      return tmp10;
    }
    const obj6 = { style: tmp9, children };
    const tmp13 = closure_12(sharedValue(4850).View, obj6);
    cResult[6] = children;
    cResult[7] = tmp9;
    cResult[8] = tmp13;
    tmp10 = tmp13;
  }
  const items = [animatedStyle, tmp3.floatingContextBar];
  cResult[3] = animatedStyle;
  cResult[4] = tmp3.floatingContextBar;
  cResult[5] = items;
  const obj4 = backgroundColor(4850);
}) : (function ContextBarItem(arg0) {
  let backgroundColor;
  let ref1;
  noop = undefined;
  ({ children, ref } = arg0);
  backgroundColor = closure_16(backgroundColor(ref1[23]).useGradientValue(backgroundColor(ref1[23]).GradientPercentage.END)).contextBar.backgroundColor;
  obj = backgroundColor(ref1[23]);
  const tmp = closure_17();
  const sharedValue = backgroundColor(ref1[24]).useSharedValue(0);
  const obj2 = backgroundColor(ref1[24]);
  let fn = function o() {
    return { backgroundColor, maxHeight: sharedValue.get() };
  };
  fn.__closure = { stylesBackgroundColor: backgroundColor, heightSv: sharedValue };
  fn.__workletHash = 10645440321802;
  fn.__initData = __initData2;
  const animatedStyle = backgroundColor(ref1[24]).useAnimatedStyle(fn);
  ref1 = noop.useRef(null);
  const items = [ref1];
  noop = noop.useCallback(() => {
    const current = ref1.current;
    if (current != null) {
      current();
    }
  }, items);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    componentDidAppear() {
      const result = sharedValue.set(backgroundColor(ref1[25]).withTiming(60, obj));
    },
    componentDidEnter() {
      const result = sharedValue.set(backgroundColor(ref1[25]).withTiming(60, obj));
    },
    componentWillLeave(current) {
      closure_1_2.current = current;
      const fn = function n(arg0) {
        if (arg0) {
          backgroundColor(ref1[24]).runOnJS(handleTransitionFinished)();
          obj = backgroundColor(ref1[24]);
        }
      };
      obj = backgroundColor(ref1[25]);
      fn.__closure = { runOnJS: backgroundColor(ref1[24]).runOnJS, handleTransitionFinished };
      fn.__workletHash = 1243097213612;
      fn.__initData = __initData;
      const result = sharedValue.set(obj.withTiming(0, closure_2_15, "respect-motion-settings", fn));
    }
  }));
  const obj4 = { style: null, children };
  const items1 = [animatedStyle, tmp.floatingContextBar];
  obj4.style = items1;
  return closure_12(sharedValue(ref1[24]).View, obj4);
});
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputContextBar.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputContextBar(channel) {
  const cResult = channel(pendingReply[11]).c(38);
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
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === channel.guild_id) {
    if (cResult[3] === channel.id) {
      if (cResult[4] === pendingReply) {
        let tmp5 = cResult[5];
      }
      if (cResult[6] !== pendingReply) {
        const fn3 = function s() {
          if (null != pendingReply) {
            channel = pendingReply.channel;
            router_utils.transitionTo(closure_2_11.CHANNEL(channel.getGuildId(), pendingReply.channel.id, pendingReply.message.id));
          }
        };
        const fn4 = function p() {
          if (null != pendingReply) {
            const result = PendingReplyActionCreators.setPendingReplyShouldMention(pendingReply.channel.id, !pendingReply.shouldMention);
          }
        };
        cResult[6] = pendingReply;
        cResult[7] = fn3;
        cResult[8] = fn4;
        let tmp7 = fn4;
        let tmp6 = fn3;
      } else {
        tmp6 = cResult[7];
        tmp7 = cResult[8];
      }
      if (cResult[9] === tmp4) {
        if (cResult[10] === tmp5) {
          if (cResult[11] === tmp6) {
            if (cResult[12] === tmp7) {
              let tmp8 = cResult[13];
            }
            ({ onCancelEditing, onCancelReplying, onTapContextBarReply, onToggleReplyMention } = tmp8);
            let message;
            if (pendingReply != null) {
              message = pendingReply.message;
            }
            const nullableMessageAuthor = tmp(pendingReply[30]).useNullableMessageAuthor(message);
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [DraftStore];
              cResult[14] = items;
              let tmp13 = items;
            } else {
              tmp13 = cResult[14];
            }
            if (cResult[15] !== channel.id) {
              class A {
                constructor() {
                  return closure_7.getScheduledMessage(channel.id);
                }
              }
              cResult[15] = channel.id;
              cResult[16] = A;
            } else {
              class A {
                constructor() {
                  return closure_7.getScheduledMessage(channel.id);
                }
              }
            }
            const tmpResult = tmp(pendingReply[30]);
            const stateFromStores = tmp(pendingReply[17]).useStateFromStores(tmp13, A);
            if (cResult[17] === onCancelReplying) {
              class A {
                constructor() {
                  return closure_7.getScheduledMessage(channel.id);
                }
              }
            }
            let tmp18 = null != pendingReply && null != nullableMessageAuthor;
            if (tmp18) {
              class A {
                constructor() {
                  return closure_7.getScheduledMessage(channel.id);
                }
              }
              const obj2 = { children: null };
              let obj3 = { pendingReply, pendingReplyAuthor: nullableMessageAuthor, onTapContextBarReply, onCancelReplying, onToggleReplyMention };
              obj2.children = closure_12(closure_19, obj3);
              tmp18 = closure_12(closure_26, obj2);
            }
            cResult[17] = onCancelReplying;
            cResult[18] = onTapContextBarReply;
            cResult[19] = onToggleReplyMention;
            cResult[20] = pendingReply;
            cResult[21] = nullableMessageAuthor;
            cResult[22] = tmp18;
            const tmpResult2 = tmp(pendingReply[17]);
          }
        }
      }
      let obj4 = { onCancelEditing: tmp4, onCancelReplying: tmp5, onTapContextBarReply: tmp6, onToggleReplyMention: tmp7 };
      cResult[9] = tmp4;
      cResult[10] = tmp5;
      cResult[11] = tmp6;
      cResult[12] = tmp7;
      cResult[13] = obj4;
      tmp8 = obj4;
    }
  }
  const fn2 = function l() {
    if (null != pendingReply) {
      PendingReplyActionCreators.deletePendingReply(channel.id);
      let id;
      if (pendingReply != null) {
        id = pendingReply.message.id;
      }
      obj = { message_id: id, channel_id: null, guild_id: null, context_action: "reply", reason: null, is_own_message: null };
      ({ id: obj.channel_id, guild_id: obj.guild_id } = channel);
      const obj4 = AnalyticsUtilsDefault;
      obj.reason = LongPressMessageActionSheetUtils.getContextBarCancelReason("reply", "cancel");
      const currentUser = UserStore.getCurrentUser();
      let id1;
      if (currentUser != null) {
        id1 = currentUser.id;
      }
      let id2;
      if (pendingReply != null) {
        id2 = pendingReply.message.author.id;
      }
      obj.is_own_message = id1 === id2;
      obj4.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
      const tmp8Result = LongPressMessageActionSheetUtils;
    }
  };
  cResult[2] = channel.guild_id;
  cResult[3] = channel.id;
  cResult[4] = pendingReply;
  cResult[5] = fn2;
  tmp5 = fn2;
  obj = channel(pendingReply[11]);
}) : (function ChatInputContextBar(channel) {
  channel = channel.channel;
  const chatInputRef = channel.chatInputRef;
  const pendingReply = channel.pendingReply;
  let stateFromStores;
  const items = [channel, chatInputRef, pendingReply];
  const memo = stateFromStores.useMemo(() => ({
    onCancelEditing() {
      const current = ref.current;
      if (current != null) {
        current.handleCancelEditing();
      }
    },
    onCancelReplying() {
      if (null != closure_1_2) {
        channel(pendingReply[26]).deletePendingReply(id.id);
        const obj3 = channel(pendingReply[26]);
        const tmp10 = id;
        id = undefined;
        if (closure_1_2 != null) {
          id = closure_1_2.message.id;
        }
        obj = { message_id: id, channel_id: null, guild_id: null, context_action: "reply", reason: null, is_own_message: null };
        ({ id: obj.channel_id, guild_id: obj.guild_id } = tmp10);
        const obj4 = chatInputRef(pendingReply[27]);
        obj.reason = channel(pendingReply[28]).getContextBarCancelReason("reply", "cancel");
        currentUser = currentUser.getCurrentUser();
        let id1;
        if (currentUser != null) {
          id1 = currentUser.id;
        }
        let id2;
        if (closure_1_2 != null) {
          id2 = closure_1_2.message.author.id;
        }
        obj.is_own_message = id1 === id2;
        obj4.track(constants.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
        const tmp8Result = channel(pendingReply[28]);
      }
    },
    onTapContextBarReply() {
      if (null != closure_1_2) {
        channel = closure_1_2.channel;
        channel(pendingReply[29]).transitionTo(closure_2_11.CHANNEL(channel.getGuildId(), closure_1_2.channel.id, closure_1_2.message.id));
        obj = channel(pendingReply[29]);
      }
    },
    onToggleReplyMention() {
      if (null != closure_1_2) {
        const result = channel(pendingReply[26]).setPendingReplyShouldMention(closure_1_2.channel.id, !closure_1_2.shouldMention);
        obj = channel(pendingReply[26]);
      }
    }
  }), items);
  const onCancelReplying = memo.onCancelReplying;
  ({ onCancelEditing, onTapContextBarReply, onToggleReplyMention } = memo);
  let message;
  if (pendingReply != null) {
    message = pendingReply.message;
  }
  const nullableMessageAuthor = channel(pendingReply[30]).useNullableMessageAuthor(message);
  obj = channel(pendingReply[30]);
  const items1 = [DraftStore];
  stateFromStores = channel(pendingReply[17]).useStateFromStores(items1, () => DraftStore.getScheduledMessage(channel.id));
  const obj2 = { component, children: null };
  let tmp8 = null != pendingReply;
  if (tmp8) {
    tmp8 = null != nullableMessageAuthor;
  }
  if (tmp8) {
    let obj3 = { children: null };
    let obj4 = { pendingReply, pendingReplyAuthor: nullableMessageAuthor, onTapContextBarReply, onCancelReplying, onToggleReplyMention };
    obj3.children = closure_12(closure_19, obj4);
    tmp8 = closure_12(closure_26, obj3);
  }
  const items2 = [tmp8, , , ];
  let tmp12 = null != pendingReply && null == nullableMessageAuthor;
  if (tmp12) {
    const obj5 = { children: null };
    const obj6 = { onCancelReplying };
    obj5.children = closure_12(closure_18, obj6);
    tmp12 = closure_12(closure_26, obj5);
  }
  items2[1] = tmp12;
  let tmp16 = null != channel.pendingEdit;
  if (tmp16) {
    const obj7 = { children: null };
    const obj8 = { onCancelEditing };
    obj7.children = closure_12(closure_20, obj8);
    tmp16 = closure_12(closure_26, obj7);
  }
  items2[2] = tmp16;
  let tmp20 = null != stateFromStores;
  if (tmp20) {
    const obj9 = { children: null };
    const obj10 = {
      scheduledTimestamp: stateFromStores.scheduledTimestamp,
      onCancelScheduling() {
          return DraftActionCreatorsDefault.clearDraft(channel.id, DraftType.ScheduledMessage);
        },
      onEditSchedule() {
          return ScheduledMessagesUtils.openScheduleMessageActionSheet(channel.id, ScheduledMessageTypes.ScheduledMessageEntryPoint.COMPOSER_BAR, stateFromStores.scheduledTimestamp);
        }
    };
    obj9.children = closure_12(closure_21, obj10);
    tmp20 = closure_12(closure_26, obj9);
  }
  items2[3] = tmp20;
  obj2.children = items2;
  return closure_13(channel(pendingReply[34]).TransitionGroup, obj2);
}));
export const ChatInputReplyBar = tmp5;
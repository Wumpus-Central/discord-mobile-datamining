// discord_app/modules/chat_input/native/ChatInputContextBar.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import useIsMobileVisualRefreshExperimentEnabled from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../_runtime/08617_registerAsset.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../a11y/AccessibilityStore.tsx";
import closure_7 from "../../../stores/DraftStore.tsx";
import { DraftType } from "../../../stores/DraftStore.tsx";
import closure_9 from "../../../stores/UserStore.tsx";
import ME from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function ChatInputReplyBarNoAuthor(onCancelReplying) {
  onCancelReplying = onCancelReplying.onCancelReplying;
  obj = useIsMobileVisualRefreshExperimentEnabled;
  const tmp3 = callback3();
  obj1 = map;
  const token = obj1.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  let obj2 = map;
  const bound = Math.max(0, (token - obj2.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  if (obj.useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating) {
    obj = { style: null, children: null };
    obj[0] = tmp3.contextBarRow;
    obj = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: null, children: null };
    obj[3] = tmp3.floatingReplyTextWrapper;
    const intl3 = tmp(1236).intl;
    obj[4] = intl3.string(tmp(1236).t["5IEsGx"]);
    const items = [callback(tmp(4739).Text, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp3.floatingRightActions;
    obj2 = { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, onPress: null, children: null };
    const intl4 = tmp(1236).intl;
    obj2[2] = intl4.string(tmp(1236).t.jSnJGT);
    let tmp13;
    if (bound > 0) {
      tmp13 = bound;
    }
    obj2[3] = tmp13;
    obj2[4] = onCancelReplying;
    const obj3 = { source: null, size: null, style: null };
    obj3[0] = tmp4(8617);
    obj3[1] = tmp(1297).Icon.Sizes.CUSTOM;
    obj3[2] = tmp3.floatingCloseIcon;
    obj2[5] = callback(tmp(1297).Icon, obj3);
    obj1[1] = callback(tmp(5438).PressableOpacity, obj2);
    items[1] = callback(closure_5, obj1);
    obj[1] = items;
    let tmp7Result = tmp7(tmp11, obj);
  } else {
    const obj4 = { activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl = tmp(1236).intl;
    obj4[2] = intl.string(tmp(1236).t.jSnJGT);
    obj4[3] = onCancelReplying;
    obj4[4] = tmp3.contextBarRow;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp3.contextCancelIconWrapper;
    const obj6 = { source: null, size: null };
    obj6[0] = tmp4(8617);
    obj6[1] = tmp(1297).Icon.Sizes.SMALL_20;
    obj5[1] = callback(tmp(1297).Icon, obj6);
    const items1 = [callback(closure_5, obj5), ];
    const obj7 = { lineClamp: 1, variant: "text-sm/medium", color: "text-default", style: null, children: null };
    obj7[3] = tmp3.contextButtonText;
    const intl2 = tmp(1236).intl;
    obj7[4] = intl2.string(tmp(1236).t["5IEsGx"]);
    items1[1] = callback(tmp(4739).Text, obj7);
    obj4[5] = items1;
    tmp7Result = tmp7(tmp(5438).PressableOpacity, obj4);
  }
  return tmp7Result;
}
class ChatInputReplyBar {
  constructor(arg0) {
    pendingReply = global.pendingReply;
    ({ pendingReplyAuthor, onTapContextBarReply, onCancelReplying } = global);
    closure_1 = undefined;
    colorString = undefined;
    colorStrings = undefined;
    nick = undefined;
    guildId = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    tmp = pendingReply;
    tmp2 = colorString;
    ({ onToggleReplyMention, chatInputFloatingOverride } = global);
    obj = require("useIsMobileVisualRefreshExperimentEnabled");
    tmp3 = obj.useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating || chatInputFloatingOverride;
    tmp4 = closure_17();
    tmpResult = require("map");
    tmp5 = closure_1;
    token = tmpResult.useToken(require("Themes").modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
    tmpResult1 = require("map");
    bound = require("../../../index.native.tsx");
    tmpResult2 = require("initialize");
    items = [];
    items[0] = closure_6;
    stateFromStores = tmpResult2.useStateFromStores(items, () => roleStyle.roleStyle);
    closure_1 = stateFromStores;
    tmpResult3 = require("useCheckboxA11yNative");
    obj = { checked: pendingReply.shouldMention };
    checkboxA11yNative = tmpResult3.useCheckboxA11yNative(obj);
    colorString = pendingReplyAuthor.colorString;
    colorStrings = pendingReplyAuthor.colorStrings;
    nick = pendingReplyAuthor.nick;
    guildId = pendingReplyAuthor.guildId;
    items1 = [, ];
    items1[0] = colorString;
    items1[1] = stateFromStores;
    ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
    closure_6 = colorStrings.useMemo(() => {
      let tmp;
      if ("hidden" !== stateFromStores) {
        if (null != colorString) {
          obj = { color: null };
          obj[0] = tmp2;
          const items = [obj];
          tmp = items;
        }
      }
      return tmp;
    }, items1);
    obj1 = { userId: pendingReply.message.author.id, guildId };
    tmp10 = require("useDisplayNameStyles")(obj1);
    tmpResult4 = require("DISPLAY_NAME_STYLES_FONT_FAMILY_MAP");
    closure_7 = tmpResult4.useDisplayNameStylesFont({ displayNameStyles: tmp10 });
    tmpResult5 = require("processColorStrings");
    processColorStringsArray = tmpResult5.useProcessColorStringsArray(colorStrings);
    closure_8 = processColorStringsArray;
    tmpResult6 = require("processColorStrings");
    closure_9 = tmpResult6.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, pendingReply.message.author.id, stateFromStores, processColorStringsArray);
    if (null == onTapContextBarReply) {
      tmp13 = jsx;
      str3 = "text-sm/medium";
      if (tmp3) {
        str3 = "text-sm/normal";
      }
      obj2 = { lineClamp: 1, variant: null, color: null, children: null };
      obj2[1] = str3;
      str4 = "text-default";
      if (tmp3) {
        str4 = "text-strong";
      }
      obj2[2] = str4;
      intl4 = require("getSystemLocale").intl;
      obj3 = { userHook: null };
      obj3[0] = function userHook(arg0, arg1) {
        if ("dot" === stateFromStores) {
          if (null != colorString) {
            obj = { color: null, colors: null, guildId: null, size: "small" };
            obj[0] = tmp;
            obj[1] = colorStrings;
            obj[2] = guildId;
            const items = [closure_1_12(pendingReply(colorString[7]).RoleDot, obj), ];
            obj = { variant: null, style: null, children: null };
            obj[0] = "text-sm/semibold";
            let tmp19;
            if (null != closure_7) {
              obj1 = { fontFamily: null };
              obj1[0] = tmp18;
              tmp19 = obj1;
            }
            const obj2 = { children: null };
            obj[1] = tmp19;
            obj[2] = nick;
            items[1] = closure_1_12(pendingReply(colorString[12]).Text, obj, arg1);
            obj2[0] = items;
            let tmp3Result = closure_1_13(closure_1_14, obj2);
            const tmp15 = closure_1_12;
            const tmp8 = closure_1_13;
            const tmp9 = closure_1_14;
          }
          return tmp3Result;
        }
        obj = { variant: "text-sm/semibold", style: null, gradientColors: null, children: null };
        const items1 = [closure_6, ];
        let tmp5 = null != closure_7;
        if (tmp5) {
          const obj3 = { fontFamily: null };
          obj3[0] = tmp4;
          tmp5 = obj3;
        }
        items1[1] = tmp5;
        obj[1] = items1;
        let tmp6;
        if (closure_9) {
          tmp6 = processColorStringsArray;
        }
        obj[2] = tmp6;
        obj[3] = nick;
        tmp3Result = closure_1_12(pendingReply(colorString[12]).Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
      };
      obj2[3] = intl4.format(require("getSystemLocale").t["8E4GxS"], obj3);
      tmp13Result = tmp13(require("Text").Text, obj2);
      tmp14 = tmp13;
    } else {
      tmp14 = jsx;
      obj4 = { style: null, accessibilityRole: "link", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.5, onPress: null, children: null };
      obj4[0] = tmp3 ? tmp4.floatingReplyTextWrapper : tmp4.contextButtonText;
      intl = require("getSystemLocale").intl;
      obj5 = { username: null };
      obj5[0] = nick;
      obj4[2] = intl.formatToPlainString(require("getSystemLocale").t.EpJL4E, obj5);
      intl2 = require("getSystemLocale").intl;
      obj4[3] = intl2.string(require("getSystemLocale").t["0CfCVW"]);
      obj4[5] = onTapContextBarReply;
      str = "text-sm/medium";
      if (tmp3) {
        str = "text-sm/normal";
      }
      obj6 = { lineClamp: 1, variant: null, color: null, children: null };
      obj6[1] = str;
      str2 = "text-default";
      if (tmp3) {
        str2 = "text-strong";
      }
      obj6[2] = str2;
      intl3 = require("getSystemLocale").intl;
      obj7 = { userHook: null };
      obj7[0] = function userHook(arg0, arg1) {
        if ("dot" === stateFromStores) {
          if (null != colorString) {
            obj = { color: null, colors: null, guildId: null, size: "small" };
            obj[0] = tmp;
            obj[1] = colorStrings;
            obj[2] = guildId;
            const items = [closure_1_12(pendingReply(colorString[7]).RoleDot, obj), ];
            obj = { variant: null, style: null, children: null };
            obj[0] = "text-sm/semibold";
            let tmp19;
            if (null != closure_7) {
              obj1 = { fontFamily: null };
              obj1[0] = tmp18;
              tmp19 = obj1;
            }
            const obj2 = { children: null };
            obj[1] = tmp19;
            obj[2] = nick;
            items[1] = closure_1_12(pendingReply(colorString[12]).Text, obj, arg1);
            obj2[0] = items;
            let tmp3Result = closure_1_13(closure_1_14, obj2);
            const tmp15 = closure_1_12;
            const tmp8 = closure_1_13;
            const tmp9 = closure_1_14;
          }
          return tmp3Result;
        }
        obj = { variant: "text-sm/semibold", style: null, gradientColors: null, children: null };
        const items1 = [closure_6, ];
        let tmp5 = null != closure_7;
        if (tmp5) {
          const obj3 = { fontFamily: null };
          obj3[0] = tmp4;
          tmp5 = obj3;
        }
        items1[1] = tmp5;
        obj[1] = items1;
        let tmp6;
        if (closure_9) {
          tmp6 = processColorStringsArray;
        }
        obj[2] = tmp6;
        obj[3] = nick;
        tmp3Result = closure_1_12(pendingReply(colorString[12]).Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
      };
      obj6[3] = intl3.format(require("getSystemLocale").t["8E4GxS"], obj7);
      obj4[6] = tmp14(require("Text").Text, obj6);
      tmp13Result = tmp14(require("PressableBase").PressableOpacity, obj4);
    }
    tmp14Result = null;
    if (null != onCancelReplying) {
      obj8 = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.5, hitSlop: null, style: null, onPress: null, children: null };
      intl5 = require("getSystemLocale").intl;
      obj8[1] = intl5.string(require("getSystemLocale").t.jSnJGT);
      tmp16 = undefined;
      if (tmp3) {
        if (bound > 0) {
          tmp16 = bound;
        }
      }
      obj8[3] = tmp16;
      prop = undefined;
      if (!tmp3) {
        prop = tmp4.contextCancelIconWrapper;
      }
      obj8[4] = prop;
      obj8[5] = onCancelReplying;
      obj9 = { source: null, size: null, style: null };
      obj9[0] = require("registerAsset");
      Sizes = require("Button").Icon.Sizes;
      obj9[1] = tmp3 ? Sizes.CUSTOM : Sizes.SMALL_20;
      floatingCloseIcon = undefined;
      if (tmp3) {
        floatingCloseIcon = tmp4.floatingCloseIcon;
      }
      obj9[2] = floatingCloseIcon;
      obj8[6] = tmp14(require("Button").Icon, obj9);
      tmp14Result = tmp14(require("PressableBase").PressableOpacity, obj8);
    }
    showMentionToggle = undefined;
    if (pendingReply != null) {
      showMentionToggle = pendingReply.showMentionToggle;
    }
    if (!showMentionToggle) {
      showMentionToggle1 = undefined;
      if (pendingReply != null) {
        showMentionToggle1 = pendingReply.showMentionToggle;
      }
      tmp14Result1 = null;
      if (showMentionToggle1) {
        tmp14Result1 = null;
        if (null != tmp14Result) {
          tmp27 = guildId;
          obj10 = { style: null };
          obj10[0] = tmp4.floatingDivider;
          tmp14Result1 = tmp14(guildId, obj10);
        }
      }
      tmp28 = jsxs;
      tmp29 = guildId;
      obj11 = { style: null, children: null };
      obj11[0] = tmp4.contextBarRow;
      tmp30 = !tmp3;
      if (!tmp3) {
        tmp30 = tmp14Result;
      }
      items2 = [, , ];
      items2[0] = tmp30;
      items2[1] = tmp13Result;
      tmp28Result = null;
      if (tmp3) {
        obj12 = { style: null, children: null };
        obj12[0] = tmp4.floatingRightActions;
        items3 = [, , ];
        items3[0] = null;
        items3[1] = tmp14Result1;
        items3[2] = tmp14Result;
        obj12[1] = items3;
        tmp28Result = tmp28(tmp29, obj12);
      }
      items2[2] = tmp28Result;
      obj11[1] = items2;
      return tmp28(tmp29, obj11);
    } else {
      tmp20 = jsxs;
      obj13 = { accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.5, onPress: null, style: null, children: null };
      obj13[0] = accessibilityRole;
      obj13[1] = accessibilityState;
      intl6 = require("getSystemLocale").intl;
      obj13[2] = intl6.string(require("getSystemLocale").t.P8tvKG);
      intl7 = require("getSystemLocale").intl;
      string = intl7.string;
      t = require("getSystemLocale").t;
      if (pendingReply.shouldMention) {
        stringResult = string(t.PBgTSF);
      } else {
        stringResult = string(t["+LXBxU"]);
      }
      obj13[3] = stringResult;
      obj13[5] = onToggleReplyMention;
      obj13[6] = tmp3 ? tmp4.floatingMentionGroup : tmp4.replyMentionButton;
      obj14 = { source: null, size: null, style: null };
      obj14[0] = require("registerAsset");
      obj14[1] = require("Button").Icon.Sizes.CUSTOM;
      items4 = [, ];
      items4[0] = tmp4.replyMentionIcon;
      items4[1] = pendingReply.shouldMention && tmp4.replyMentionIconActive;
      obj14[2] = items4;
      items5 = [, ];
      items5[0] = tmp14(require("Button").Icon, obj14);
      str5 = "text-sm/bold";
      if (tmp3) {
        str5 = "text-sm/semibold";
      }
      obj15 = { variant: null, color: "text-muted", style: null, children: null };
      obj15[0] = str5;
      prop1 = undefined;
      if (pendingReply.shouldMention) {
        prop1 = tmp4.replyMentionButtonActive;
      }
      obj15[2] = prop1;
      intl8 = require("getSystemLocale").intl;
      string2 = intl8.string;
      p9jC2r = require("getSystemLocale").t;
      if (pendingReply.shouldMention) {
        p9jC2r = p9jC2r.p9jC2r;
        string2Result = string2(p9jC2r);
      } else {
        string2Result = string2(p9jC2r.U7f3bK);
      }
      obj15[3] = string2Result;
      obj15 = tmp14(require("Text").Text, obj15);
      items5[1] = obj15;
      obj13[7] = items5;
      tmp20Result = tmp20(require("PressableBase").PressableOpacity, obj13);
    }
    return;
  }
}
function ChatInputEditBar(onCancelEditing) {
  obj = useIsMobileVisualRefreshExperimentEnabled;
  const chatInputFloating = obj.useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating;
  const tmp3 = callback3();
  obj1 = map;
  const token = obj1.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  let obj2 = map;
  const bound = Math.max(0, (token - obj2.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  let str = "text-sm/medium";
  if (chatInputFloating) {
    str = "text-sm/normal";
  }
  obj = { lineClamp: 1, variant: str, color: null, style: null, children: null };
  let str2 = "text-default";
  if (chatInputFloating) {
    str2 = "text-strong";
  }
  obj[2] = str2;
  obj[3] = chatInputFloating ? tmp3.floatingReplyTextWrapper : tmp3.contextButtonText;
  const intl = tmp(1236).intl;
  obj[4] = intl.string(getSystemLocale.t.rtNXxN);
  let tmp7Result = tmp7(Text.Text, obj);
  obj = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.5, hitSlop: null, style: null, onPress: null, children: null };
  const intl2 = tmp(1236).intl;
  obj[1] = intl2.string(getSystemLocale.t.qv9j1K);
  let tmp9;
  if (chatInputFloating) {
    if (bound > 0) {
      tmp9 = bound;
    }
  }
  obj[3] = tmp9;
  let prop;
  if (!chatInputFloating) {
    prop = tmp3.contextCancelIconWrapper;
  }
  obj[4] = prop;
  obj[5] = onCancelEditing.onCancelEditing;
  obj1 = { source: registerAssetDefault, size: null, style: null };
  const Sizes = tmp(1297).Icon.Sizes;
  obj1[1] = chatInputFloating ? Sizes.CUSTOM : Sizes.SMALL_20;
  let floatingCloseIcon;
  if (chatInputFloating) {
    floatingCloseIcon = tmp3.floatingCloseIcon;
  }
  obj1[2] = floatingCloseIcon;
  obj[6] = closure_12(Button.Icon, obj1);
  tmp7Result = tmp7(tmp(5438).PressableOpacity, obj);
  obj2 = { style: tmp3.contextBarRow, children: null };
  const obj3 = { children: null };
  const items = [, ];
  if (chatInputFloating) {
    items[0] = tmp7Result;
    const obj4 = { style: null, children: null };
    obj4[0] = tmp3.floatingRightActions;
    obj4[1] = tmp7Result;
    items[1] = tmp7(tmp13, obj4);
    obj3[0] = items;
    let tmp16 = obj3;
  } else {
    items[0] = tmp7Result;
    items[1] = tmp7Result;
    obj3[0] = items;
    tmp16 = obj3;
  }
  obj2[1] = closure_13(closure_14, tmp16);
  return closure_12(closure_5, obj2);
}
function ChatInputScheduledMessageBar(scheduledTimestamp) {
  obj = useIsMobileVisualRefreshExperimentEnabled;
  const chatInputFloating = obj.useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating;
  const tmp3 = callback3();
  obj1 = map;
  const token = obj1.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  let obj2 = map;
  const bound = Math.max(0, (token - obj2.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  let str = "text-sm/medium";
  if (chatInputFloating) {
    str = "text-sm/normal";
  }
  obj = { lineClamp: 1, variant: str, color: null, style: null, children: null };
  let str2 = "text-default";
  if (chatInputFloating) {
    str2 = "text-strong";
  }
  obj[2] = str2;
  obj[3] = chatInputFloating ? tmp3.floatingReplyTextWrapper : tmp3.contextButtonText;
  const intl = tmp(1236).intl;
  obj = { timestamp: new Date(scheduledTimestamp.scheduledTimestamp).valueOf() };
  obj[4] = intl.formatToPlainString(getSystemLocale.t.ZN3tIx, obj);
  let tmp7Result = tmp7(Text.Text, obj);
  obj1 = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.5, hitSlop: null, style: null, onPress: null, children: null };
  const intl2 = tmp(1236).intl;
  obj1[1] = intl2.string(getSystemLocale.t.cpT0Cq);
  let tmp9;
  if (chatInputFloating) {
    if (bound > 0) {
      tmp9 = bound;
    }
  }
  obj1[3] = tmp9;
  let prop;
  if (!chatInputFloating) {
    prop = tmp3.contextCancelIconWrapper;
  }
  obj1[4] = prop;
  obj1[5] = scheduledTimestamp.onCancelScheduling;
  obj2 = { source: registerAssetDefault, size: null, style: null };
  const Sizes = tmp(1297).Icon.Sizes;
  obj2[1] = chatInputFloating ? Sizes.CUSTOM : Sizes.SMALL_20;
  let floatingCloseIcon;
  if (chatInputFloating) {
    floatingCloseIcon = tmp3.floatingCloseIcon;
  }
  obj2[2] = floatingCloseIcon;
  obj1[6] = closure_12(Button.Icon, obj2);
  tmp7Result = tmp7(tmp(5438).PressableOpacity, obj1);
  const obj3 = { style: tmp3.contextBarRow, children: null };
  const obj4 = { children: null };
  const items = [, ];
  if (chatInputFloating) {
    items[0] = tmp7Result;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp3.floatingRightActions;
    obj5[1] = tmp7Result;
    items[1] = tmp7(tmp13, obj5);
    obj4[0] = items;
    let tmp16 = obj4;
  } else {
    items[0] = tmp7Result;
    items[1] = tmp7Result;
    obj4[0] = items;
    tmp16 = obj4;
  }
  obj3[1] = closure_13(closure_14, tmp16);
  return closure_12(closure_5, obj3);
}
let c3 = importAllResult;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ AnalyticEvents: c10, Routes: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let obj = { duration: 250, easing: require("Button").STANDARD_EASING };
let closure_16 = createCacheKey.createStyles((arg0) => {
  let backgroundColor = arg0;
  if (arg0 == null) {
    backgroundColor = ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
  }
  return { contextBar: { backgroundColor } };
});
let closure_17 = createCacheKey.createStyles(() => {
  obj = { contextBarRow: null, floatingReplyTextWrapper: null, contextCancelIconWrapper: null, contextButtonText: null, floatingContextBar: null, replyMentionButton: null, replyMentionButtonActive: null, replyMentionIcon: null, replyMentionIconActive: null, floatingRightActions: null, floatingMentionGroup: null, floatingDivider: null, floatingCloseIcon: null };
  obj = { overflow: "hidden", flexDirection: "row", alignItems: "center", paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL, paddingVertical: ThemesDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL, gap: ThemesDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_GAP };
  obj[0] = obj;
  obj[1] = { flexShrink: 1, minWidth: 0 };
  obj[2] = { paddingHorizontal: 12, paddingVertical: 10 };
  obj[3] = { flexGrow: 1, flexShrink: 1, justifyContent: "center", alignSelf: "stretch", paddingRight: 12, paddingVertical: 10 };
  obj = { borderBottomWidth: closure_4.hairlineWidth, borderBottomColor: ThemesDefault.colors.BORDER_MUTED, overflow: "hidden" };
  obj[4] = obj;
  obj[5] = { flexDirection: "row", alignItems: "center", paddingHorizontal: 12, paddingVertical: 10 };
  obj[6] = { color: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
  obj1 = { color: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
  obj[7] = { width: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: ThemesDefault.colors.TEXT_MUTED, marginRight: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT };
  const obj2 = { width: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: ThemesDefault.colors.TEXT_MUTED, marginRight: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT };
  obj[8] = { tintColor: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
  obj[9] = { flexGrow: 1, flexShrink: 0, flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: 8 };
  obj[10] = { flexDirection: "row", alignItems: "center", gap: 2 };
  const obj3 = { tintColor: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
  obj[11] = { width: closure_4.hairlineWidth, alignSelf: "stretch", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
  const obj4 = { width: closure_4.hairlineWidth, alignSelf: "stretch", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
  obj[12] = { width: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, height: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE, tintColor: ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT };
  return obj;
});
let closure_22 = { code: "function ChatInputContextBarTsx1(){const{stylesBackgroundColor,chatInputFloating,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,...(chatInputFloating?{maxHeight:heightSv.get()}:{height:heightSv.get()})};}" };
let closure_23 = { code: "function ChatInputContextBarTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
let closure_24 = importAllResult.forwardRef((children, ref) => {
  let floatingContextBar;
  let backgroundColor;
  let num;
  let sharedValue;
  ref = undefined;
  closure_5 = undefined;
  const gradientValue = floatingContextBar(num[22]).useGradientValue(floatingContextBar(num[22]).GradientPercentage.END);
  obj = floatingContextBar(num[22]);
  floatingContextBar = floatingContextBar(num[10]).useMobileVisualRefreshConfig({ location: "ChatInputContextBar" }).chatInputFloating;
  backgroundColor = callback2(gradientValue).contextBar.backgroundColor;
  num = 40;
  const obj2 = floatingContextBar(num[10]);
  if (floatingContextBar) {
    num = 60;
  }
  let tmpResult = tmp(tmp2[23]);
  sharedValue = tmpResult.useSharedValue(0);
  tmpResult = tmp(tmp2[23]);
  let fn = function o() {
    obj = { backgroundColor };
    if (floatingContextBar) {
      obj = { maxHeight: null };
      obj[0] = sharedValue.get();
    } else {
      obj = { height: null };
      obj[0] = sharedValue.get();
    }
    const merged = Object.assign(obj);
    return obj;
  };
  fn.__closure = { stylesBackgroundColor: backgroundColor, chatInputFloating: floatingContextBar, heightSv: sharedValue };
  fn.__workletHash = 3976432455712;
  fn.__initData = closure_22;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  ref = sharedValue.useRef(null);
  const items = [ref];
  closure_5 = sharedValue.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
  }, items);
  const imperativeHandle = sharedValue.useImperativeHandle(ref, () => ({
    componentDidAppear() {
      const result = store.set(closure_1_0(closure_1_2[24]).withTiming(closure_2, closure_1_15));
    },
    componentDidEnter() {
      const result = store.set(closure_1_0(closure_1_2[24]).withTiming(closure_2, closure_1_15));
    },
    componentWillLeave(current) {
      closure_4.current = current;
      obj = closure_1_0(closure_1_2[24]);
      const fn = function n(arg0) {
        if (arg0) {
          closure_1_0(closure_1_2[23]).runOnJS(closure_5)();
          obj = closure_1_0(closure_1_2[23]);
        }
      };
      obj = { runOnJS: closure_1_0(closure_1_2[23]).runOnJS, handleTransitionFinished: closure_5 };
      fn.__closure = obj;
      fn.__workletHash = 10908592279914;
      fn.__initData = closure_1_23;
      const result = store.set(obj.withTiming(0, closure_1_15, "respect-motion-settings", fn));
    }
  }));
  const style = [animatedStyle, ];
  if (floatingContextBar) {
    floatingContextBar = tmp4.floatingContextBar;
  }
  style[1] = floatingContextBar;
  return closure_12(backgroundColor(num[23]).View, { style, children: children.children });
});
const memoResult = importAllResult.memo(function ChatInputContextBar(channel) {
  channel = channel.channel;
  const chatInputRef = channel.chatInputRef;
  const pendingReply = channel.pendingReply;
  const items = [channel, chatInputRef, pendingReply];
  const memo = importAllResult.useMemo(() => ({
    onCancelEditing() {
      const current = ref.current;
      if (current != null) {
        current.handleCancelEditing();
      }
    },
    onCancelReplying() {
      if (null != closure_2) {
        closure_1_0(closure_1_2[25]).deletePendingReply(id.id);
        const obj3 = closure_1_0(closure_1_2[25]);
        const tmp10 = id;
        const tmp8 = closure_1_0;
        const tmp9 = closure_1_2;
        id = undefined;
        if (tmp != null) {
          id = tmp.message.id;
        }
        obj = { message_id: null, channel_id: null, guild_id: null, context_action: "reply", reason: null, is_own_message: null };
        obj[0] = id;
        ({ id: obj[1], guild_id: obj[2] } = tmp10);
        const obj4 = closure_1_1(closure_1_2[26]);
        obj[4] = tmp8(tmp9[27]).getContextBarCancelReason("reply", "cancel");
        const currentUser = closure_1_9.getCurrentUser();
        let id1;
        if (currentUser != null) {
          id1 = currentUser.id;
        }
        let id2;
        if (tmp != null) {
          id2 = tmp.message.author.id;
        }
        obj[5] = id1 === id2;
        obj4.track(closure_1_10.CHAT_CONTEXT_BAR_ACTION_CANCELED, obj);
        const tmp8Result = tmp8(tmp9[27]);
      }
    },
    onTapContextBarReply() {
      if (null != closure_2) {
        channel = tmp.channel;
        closure_1_0(closure_1_2[28]).transitionTo(closure_1_11.CHANNEL(channel.getGuildId(), tmp.channel.id, tmp.message.id));
        obj = closure_1_0(closure_1_2[28]);
      }
    },
    onToggleReplyMention() {
      if (null != closure_2) {
        const result = closure_1_0(closure_1_2[25]).setPendingReplyShouldMention(tmp.channel.id, !tmp.shouldMention);
        obj = closure_1_0(closure_1_2[25]);
      }
    }
  }), items);
  const onCancelReplying = memo.onCancelReplying;
  ({ onCancelEditing, onTapContextBarReply, onToggleReplyMention } = memo);
  obj = channel(pendingReply[29]);
  let message;
  if (pendingReply != null) {
    message = pendingReply.message;
  }
  const nullableMessageAuthor = obj.useNullableMessageAuthor(message);
  const items1 = [closure_7];
  const stateFromStores = channel(pendingReply[16]).useStateFromStores(items1, () => closure_1_7.getScheduledMessage(channel.id));
  obj = { component: closure_5, children: null };
  let tmp8 = null != pendingReply;
  if (tmp8) {
    tmp8 = null != nullableMessageAuthor;
  }
  if (tmp8) {
    obj = { children: null };
    obj1 = { pendingReply: null, pendingReplyAuthor: null, onTapContextBarReply: null, onCancelReplying: null, onToggleReplyMention: null };
    obj1[0] = pendingReply;
    obj1[1] = nullableMessageAuthor;
    obj1[2] = onTapContextBarReply;
    obj1[3] = onCancelReplying;
    obj1[4] = onToggleReplyMention;
    obj[0] = callback(ChatInputReplyBar, obj1);
    tmp8 = callback(closure_24, obj);
  }
  const items2 = [tmp8, , , ];
  let tmp12 = null != pendingReply && null == nullableMessageAuthor;
  if (tmp12) {
    const obj2 = { children: null };
    let obj3 = { onCancelReplying: null };
    obj3[0] = onCancelReplying;
    obj2[0] = callback(ChatInputReplyBarNoAuthor, obj3);
    tmp12 = callback(closure_24, obj2);
  }
  items2[1] = tmp12;
  let tmp16 = null != channel.pendingEdit;
  if (tmp16) {
    let obj4 = { children: null };
    const obj5 = { onCancelEditing: null };
    obj5[0] = onCancelEditing;
    obj4[0] = callback(ChatInputEditBar, obj5);
    tmp16 = callback(closure_24, obj4);
  }
  items2[2] = tmp16;
  let tmp20 = null != stateFromStores;
  if (tmp20) {
    const obj6 = { children: null };
    const obj7 = { scheduledTimestamp: null, onCancelScheduling: null };
    obj7[0] = stateFromStores.scheduledTimestamp;
    obj7[1] = function onCancelScheduling() {
      return chatInputRef(pendingReply[31]).clearDraft(channel.id, closure_1_8.ScheduledMessage);
    };
    obj6[0] = callback(ChatInputScheduledMessageBar, obj7);
    tmp20 = callback(closure_24, obj6);
  }
  items2[3] = tmp20;
  obj[1] = items2;
  return closure_13(channel(pendingReply[30]).TransitionGroup, obj);
});
let result = require("set").fileFinishedImporting("modules/chat_input/native/ChatInputContextBar.tsx");

export default memoResult;
export { ChatInputReplyBar };
// discord_app/modules/chat_input/native/ChatInputContextBar.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import registerAssetDefault from "../../../../_runtime/07713_registerAsset.js";
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
  const tmp = callback4();
  obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  obj1 = map;
  const bound = Math.max(
    0,
    (token - obj1.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2,
  );
  obj = { style: tmp.contextBarRow, children: null };
  obj = {
    lineClamp: 1,
    variant: "text-sm/normal",
    color: "text-strong",
    style: tmp.floatingReplyTextWrapper,
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t["5IEsGx"]);
  const items = [callback(Text.Text, obj)];
  obj1 = { style: tmp.floatingRightActions, children: null };
  const obj2 = {
    activeOpacity: 0.5,
    accessibilityRole: "button",
    accessibilityLabel: null,
    hitSlop: null,
    onPress: null,
    children: null,
  };
  const intl2 = getSystemLocale.intl;
  obj2[2] = intl2.string(getSystemLocale.t.jSnJGT);
  let tmp10;
  if (bound > 0) {
    tmp10 = bound;
  }
  obj2[3] = tmp10;
  obj2[4] = onCancelReplying.onCancelReplying;
  obj2[5] = callback(Button.Icon, {
    source: registerAssetDefault,
    size: Button.Icon.Sizes.CUSTOM,
    style: tmp.floatingCloseIcon,
  });
  obj1[1] = callback(PressableBase.PressableOpacity, obj2);
  items[1] = callback(closure_5, obj1);
  obj[1] = items;
  return closure_13(closure_5, obj);
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
    tmp = closure_17();
    tmp2 = pendingReply;
    tmp3 = colorString;
    obj = require("map");
    tmp4 = closure_1;
    token = obj.useToken(require("Themes").modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
    obj2 = require("map");
    bound = require("../../../index.native.tsx");
    obj3 = require("initialize");
    items = [];
    items[0] = closure_6;
    stateFromStores = obj3.useStateFromStores(items, () => roleStyle.roleStyle);
    closure_1 = stateFromStores;
    obj4 = require("useCheckboxA11yNative");
    obj = { checked: pendingReply.shouldMention };
    checkboxA11yNative = obj4.useCheckboxA11yNative(obj);
    colorString = pendingReplyAuthor.colorString;
    colorStrings = pendingReplyAuthor.colorStrings;
    nick = pendingReplyAuthor.nick;
    guildId = pendingReplyAuthor.guildId;
    items1 = [,];
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
    tmp9 = require("useDisplayNameStyles")(obj1);
    obj7 = require("DISPLAY_NAME_STYLES_FONT_FAMILY_MAP");
    closure_7 = obj7.useDisplayNameStylesFont({ displayNameStyles: tmp9 });
    obj8 = require("processColorStrings");
    processColorStringsArray = obj8.useProcessColorStringsArray(colorStrings);
    closure_8 = processColorStringsArray;
    obj9 = require("processColorStrings");
    closure_9 = obj9.useIsRoleStyleAndRoleColorsEligibleForERC(
      guildId,
      pendingReply.message.author.id,
      stateFromStores,
      processColorStringsArray,
    );
    if (null == onTapContextBarReply) {
      tmp11 = jsx;
      obj2 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: null };
      intl = require("getSystemLocale").intl;
      obj3 = { userHook: null };
      obj3[0] = function userHook(arg0, arg1) {
        if ("dot" === stateFromStores) {
          if (null != colorString) {
            obj = { color: null, colors: null, guildId: null, size: "small" };
            obj[0] = tmp;
            obj[1] = colorStrings;
            obj[2] = guildId;
            const items = [closure_1_12(pendingReply(colorString[7]).RoleDot, obj)];
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
            items[1] = closure_1_12(pendingReply(colorString[11]).Text, obj, arg1);
            obj2[0] = items;
            let tmp3Result = closure_1_13(closure_1_14, obj2);
            const tmp15 = closure_1_12;
            const tmp8 = closure_1_13;
            const tmp9 = closure_1_14;
          }
          return tmp3Result;
        }
        obj = { variant: "text-sm/semibold", style: null, gradientColors: null, children: null };
        const items1 = [closure_6];
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
        tmp3Result = closure_1_12(
          pendingReply(colorString[11]).Text,
          obj,
          "" + arg1 + "-" + pendingReply.message.author.id,
        );
      };
      obj2[3] = intl.format(require("getSystemLocale").t["8E4GxS"], obj3);
      tmp12 = jsx(require("Text").Text, obj2);
      tmp13 = jsx;
    } else {
      tmp13 = jsx;
      obj4 = {
        style: null,
        accessibilityRole: "link",
        accessibilityLabel: null,
        accessibilityHint: null,
        activeOpacity: 0.5,
        onPress: null,
        children: null,
      };
      obj4[0] = tmp.floatingReplyTextWrapper;
      intl6 = require("getSystemLocale").intl;
      obj5 = { username: null };
      obj5[0] = nick;
      obj4[2] = intl6.formatToPlainString(require("getSystemLocale").t.EpJL4E, obj5);
      intl7 = require("getSystemLocale").intl;
      obj4[3] = intl7.string(require("getSystemLocale").t["0CfCVW"]);
      obj4[5] = onTapContextBarReply;
      obj6 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: null };
      intl8 = require("getSystemLocale").intl;
      obj7 = { userHook: null };
      obj7[0] = function userHook(arg0, arg1) {
        if ("dot" === stateFromStores) {
          if (null != colorString) {
            obj = { color: null, colors: null, guildId: null, size: "small" };
            obj[0] = tmp;
            obj[1] = colorStrings;
            obj[2] = guildId;
            const items = [closure_1_12(pendingReply(colorString[7]).RoleDot, obj)];
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
            items[1] = closure_1_12(pendingReply(colorString[11]).Text, obj, arg1);
            obj2[0] = items;
            let tmp3Result = closure_1_13(closure_1_14, obj2);
            const tmp15 = closure_1_12;
            const tmp8 = closure_1_13;
            const tmp9 = closure_1_14;
          }
          return tmp3Result;
        }
        obj = { variant: "text-sm/semibold", style: null, gradientColors: null, children: null };
        const items1 = [closure_6];
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
        tmp3Result = closure_1_12(
          pendingReply(colorString[11]).Text,
          obj,
          "" + arg1 + "-" + pendingReply.message.author.id,
        );
      };
      obj6[3] = intl8.format(require("getSystemLocale").t["8E4GxS"], obj7);
      obj4[6] = jsx(require("Text").Text, obj6);
      tmp12 = jsx(require("PressableBase").PressableOpacity, obj4);
    }
    tmp13Result = null;
    if (null != onCancelReplying) {
      obj8 = {
        accessibilityRole: "button",
        accessibilityLabel: null,
        activeOpacity: 0.5,
        hitSlop: null,
        onPress: null,
        children: null,
      };
      intl2 = require("getSystemLocale").intl;
      obj8[1] = intl2.string(require("getSystemLocale").t.jSnJGT);
      tmp15 = undefined;
      if (bound > 0) {
        tmp15 = bound;
      }
      obj8[3] = tmp15;
      obj8[4] = onCancelReplying;
      obj9 = { source: null, size: null, style: null };
      obj9[0] = require("registerAsset");
      obj9[1] = require("Button").Icon.Sizes.CUSTOM;
      obj9[2] = tmp.floatingCloseIcon;
      obj8[5] = tmp13(require("Button").Icon, obj9);
      tmp13Result = tmp13(require("PressableBase").PressableOpacity, obj8);
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
      tmp13Result1 = null;
      if (showMentionToggle1) {
        tmp13Result1 = null;
        if (null != tmp13Result) {
          tmp24 = guildId;
          obj10 = { style: null };
          obj10[0] = tmp.floatingDivider;
          tmp13Result1 = tmp13(guildId, obj10);
        }
      }
      tmp25 = jsxs;
      tmp26 = guildId;
      obj11 = { style: null, children: null };
      obj11[0] = tmp.contextBarRow;
      items2 = [,];
      items2[0] = tmp12;
      obj12 = { style: null, children: null };
      obj12[0] = tmp.floatingRightActions;
      items3 = [, ,];
      items3[0] = null;
      items3[1] = tmp13Result1;
      items3[2] = tmp13Result;
      obj12[1] = items3;
      items2[1] = jsxs(guildId, obj12);
      obj11[1] = items2;
      return jsxs(guildId, obj11);
    } else {
      tmp17 = jsxs;
      obj13 = {
        accessibilityRole: null,
        accessibilityState: null,
        accessibilityLabel: null,
        accessibilityHint: null,
        activeOpacity: 0.5,
        onPress: null,
        style: null,
        children: null,
      };
      obj13[0] = accessibilityRole;
      obj13[1] = accessibilityState;
      intl3 = require("getSystemLocale").intl;
      obj13[2] = intl3.string(require("getSystemLocale").t.P8tvKG);
      intl4 = require("getSystemLocale").intl;
      string = intl4.string;
      t = require("getSystemLocale").t;
      if (pendingReply.shouldMention) {
        stringResult = string(t.PBgTSF);
      } else {
        stringResult = string(t["+LXBxU"]);
      }
      obj13[3] = stringResult;
      obj13[5] = global.onToggleReplyMention;
      obj13[6] = tmp.floatingMentionGroup;
      obj14 = { source: null, size: null, style: null };
      obj14[0] = require("registerAsset");
      obj14[1] = require("Button").Icon.Sizes.CUSTOM;
      items4 = [,];
      items4[0] = tmp.replyMentionIcon;
      items4[1] = pendingReply.shouldMention && tmp.replyMentionIconActive;
      obj14[2] = items4;
      items5 = [,];
      items5[0] = tmp13(require("Button").Icon, obj14);
      prop = undefined;
      if (pendingReply.shouldMention) {
        prop = tmp.replyMentionButtonActive;
      }
      obj15 = { variant: "text-sm/semibold", color: "text-muted", style: null, children: null };
      obj15[2] = prop;
      intl5 = require("getSystemLocale").intl;
      string2 = intl5.string;
      p9jC2r = require("getSystemLocale").t;
      if (pendingReply.shouldMention) {
        p9jC2r = p9jC2r.p9jC2r;
        string2Result = string2(p9jC2r);
      } else {
        string2Result = string2(p9jC2r.U7f3bK);
      }
      obj15[3] = string2Result;
      obj15 = tmp13(require("Text").Text, obj15);
      items5[1] = obj15;
      obj13[7] = items5;
      tmp17Result = tmp17(require("PressableBase").PressableOpacity, obj13);
    }
    return;
  }
}
function ChatInputEditBar(onCancelEditing) {
  const tmp = callback4();
  obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  obj1 = map;
  const bound = Math.max(
    0,
    (token - obj1.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2,
  );
  obj = {
    lineClamp: 1,
    variant: "text-sm/normal",
    color: "text-strong",
    style: tmp.floatingReplyTextWrapper,
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.rtNXxN);
  obj = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    activeOpacity: 0.5,
    hitSlop: null,
    onPress: null,
    children: null,
  };
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.qv9j1K);
  let tmp9;
  if (bound > 0) {
    tmp9 = bound;
  }
  obj[3] = tmp9;
  obj[4] = onCancelEditing.onCancelEditing;
  obj1 = { source: registerAssetDefault, size: tmp2(1297).Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
  obj[5] = callback(Button.Icon, obj1);
  const obj2 = { style: tmp.contextBarRow, children: null };
  const obj3 = { children: null };
  const items = [callback(Text.Text, obj)];
  const tmp4 = importDefault;
  const tmp8 = callback(Text.Text, obj);
  items[1] = callback(closure_5, {
    style: tmp.floatingRightActions,
    children: callback(PressableBase.PressableOpacity, obj),
  });
  obj3[0] = items;
  obj2[1] = callback2(closure_14, obj3);
  return callback(closure_5, obj2);
}
function ChatInputScheduledMessageBar(scheduledTimestamp) {
  ({ onCancelScheduling, onEditSchedule } = scheduledTimestamp);
  const tmp = callback4();
  obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  obj1 = map;
  const bound = Math.max(
    0,
    (token - obj1.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2,
  );
  obj = {
    style: tmp.floatingReplyTextWrapper,
    accessibilityRole: "button",
    accessibilityLabel: null,
    activeOpacity: 0.5,
    onPress: null,
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.SBcdAN);
  obj[4] = onEditSchedule;
  obj = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: null };
  const intl2 = getSystemLocale.intl;
  obj1 = { timestamp: new Date(scheduledTimestamp.scheduledTimestamp).valueOf() };
  obj[3] = intl2.formatToPlainString(getSystemLocale.t.ZN3tIx, obj1);
  obj[5] = callback(Text.Text, obj);
  const date = new Date(scheduledTimestamp.scheduledTimestamp);
  const tmp4 = importDefault;
  const obj2 = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    activeOpacity: 0.5,
    hitSlop: null,
    onPress: null,
    children: null,
  };
  const intl3 = getSystemLocale.intl;
  obj2[1] = intl3.string(getSystemLocale.t.cpT0Cq);
  let tmp9;
  if (bound > 0) {
    tmp9 = bound;
  }
  obj2[3] = tmp9;
  obj2[4] = onCancelScheduling;
  const tmp8 = callback(PressableBase.PressableOpacity, obj);
  obj2[5] = callback(Button.Icon, {
    source: registerAssetDefault,
    size: Button.Icon.Sizes.CUSTOM,
    style: tmp.floatingCloseIcon,
  });
  const obj4 = { style: tmp.contextBarRow, children: null };
  const obj5 = { children: null };
  const items = [tmp8];
  const obj3 = { source: registerAssetDefault, size: Button.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
  items[1] = callback(closure_5, {
    style: tmp.floatingRightActions,
    children: callback(PressableBase.PressableOpacity, obj2),
  });
  obj5[0] = items;
  obj4[1] = callback2(closure_14, obj5);
  return callback(closure_5, obj4);
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
  obj = {
    contextBarRow: null,
    floatingReplyTextWrapper: null,
    floatingContextBar: null,
    replyMentionButtonActive: null,
    replyMentionIcon: null,
    replyMentionIconActive: null,
    floatingRightActions: null,
    floatingMentionGroup: null,
    floatingDivider: null,
    floatingCloseIcon: null,
  };
  obj = {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_HORIZONTAL,
    paddingVertical: ThemesDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_PADDING_VERTICAL,
    gap: ThemesDefault.modules.mobile.CHAT_INPUT_CONTEXT_BAR_GAP,
  };
  obj[0] = obj;
  obj[1] = { flexShrink: 1, minWidth: 0 };
  obj = {
    borderBottomWidth: closure_4.hairlineWidth,
    borderBottomColor: ThemesDefault.colors.BORDER_MUTED,
    overflow: "hidden",
  };
  obj[2] = obj;
  obj[3] = { color: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
  obj1 = { color: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
  obj[4] = {
    width: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE,
    height: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE,
    tintColor: ThemesDefault.colors.TEXT_MUTED,
    marginRight: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT,
  };
  const obj2 = {
    width: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE,
    height: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE,
    tintColor: ThemesDefault.colors.TEXT_MUTED,
    marginRight: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_MARGIN_RIGHT,
  };
  obj[5] = { tintColor: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
  obj[6] = {
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
  };
  obj[7] = { flexDirection: "row", alignItems: "center", gap: 2 };
  const obj3 = { tintColor: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
  obj[8] = {
    width: closure_4.hairlineWidth,
    alignSelf: "stretch",
    backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
  };
  const obj4 = {
    width: closure_4.hairlineWidth,
    alignSelf: "stretch",
    backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
  };
  obj[9] = {
    width: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE,
    height: ThemesDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE,
    tintColor: ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT,
  };
  return obj;
});
let closure_22 = {
  code: "function ChatInputContextBarTsx1(){const{stylesBackgroundColor,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,...{maxHeight:heightSv.get()}};}",
};
let closure_23 = {
  code: "function ChatInputContextBarTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}",
};
let closure_24 = importAllResult.forwardRef((children, ref) => {
  let backgroundColor;
  let sharedValue;
  ref = undefined;
  importAllResult = undefined;
  backgroundColor = callback3(
    backgroundColor(ref[21]).useGradientValue(backgroundColor(ref[21]).GradientPercentage.END),
  ).contextBar.backgroundColor;
  obj = backgroundColor(ref[21]);
  const tmp = callback4();
  sharedValue = backgroundColor(ref[22]).useSharedValue(0);
  const obj2 = backgroundColor(ref[22]);
  let fn = function o() {
    return { backgroundColor, maxHeight: sharedValue.get() };
  };
  fn.__closure = { stylesBackgroundColor: backgroundColor, heightSv: sharedValue };
  fn.__workletHash = 16731072716488;
  fn.__initData = closure_22;
  const animatedStyle = backgroundColor(ref[22]).useAnimatedStyle(fn);
  ref = importAllResult.useRef(null);
  const items = [ref];
  importAllResult = importAllResult.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
  }, items);
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    componentDidAppear() {
      const result = store.set(closure_1_0(closure_1_2[23]).withTiming(60, closure_1_15));
    },
    componentDidEnter() {
      const result = store.set(closure_1_0(closure_1_2[23]).withTiming(60, closure_1_15));
    },
    componentWillLeave(current) {
      closure_2.current = current;
      obj = closure_1_0(closure_1_2[23]);
      const fn = function n(arg0) {
        if (arg0) {
          closure_1_0(closure_1_2[22]).runOnJS(closure_3)();
          obj = closure_1_0(closure_1_2[22]);
        }
      };
      obj = { runOnJS: closure_1_0(closure_1_2[22]).runOnJS, handleTransitionFinished: closure_3 };
      fn.__closure = obj;
      fn.__workletHash = 10908592279914;
      fn.__initData = closure_1_23;
      const result = store.set(obj.withTiming(0, closure_1_15, "respect-motion-settings", fn));
    },
  }));
  const style = [animatedStyle, tmp.floatingContextBar];
  return callback(sharedValue(ref[22]).View, { style, children: children.children });
});
const memoResult = importAllResult.memo(function ChatInputContextBar(channel) {
  channel = channel.channel;
  const chatInputRef = channel.chatInputRef;
  const pendingReply = channel.pendingReply;
  let stateFromStores;
  const items = [channel, chatInputRef, pendingReply];
  const memo = stateFromStores.useMemo(
    () => ({
      onCancelEditing() {
        const current = ref.current;
        if (current != null) {
          current.handleCancelEditing();
        }
      },
      onCancelReplying() {
        if (null != closure_2) {
          closure_1_0(closure_1_2[24]).deletePendingReply(id.id);
          const obj3 = closure_1_0(closure_1_2[24]);
          const tmp10 = id;
          const tmp8 = closure_1_0;
          const tmp9 = closure_1_2;
          id = undefined;
          if (tmp != null) {
            id = tmp.message.id;
          }
          obj = {
            message_id: null,
            channel_id: null,
            guild_id: null,
            context_action: "reply",
            reason: null,
            is_own_message: null,
          };
          obj[0] = id;
          ({ id: obj[1], guild_id: obj[2] } = tmp10);
          const obj4 = closure_1_1(closure_1_2[25]);
          obj[4] = tmp8(tmp9[26]).getContextBarCancelReason("reply", "cancel");
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
          const tmp8Result = tmp8(tmp9[26]);
        }
      },
      onTapContextBarReply() {
        if (null != closure_2) {
          channel = tmp.channel;
          closure_1_0(closure_1_2[27]).transitionTo(
            closure_1_11.CHANNEL(channel.getGuildId(), tmp.channel.id, tmp.message.id),
          );
          obj = closure_1_0(closure_1_2[27]);
        }
      },
      onToggleReplyMention() {
        if (null != closure_2) {
          const result = closure_1_0(closure_1_2[24]).setPendingReplyShouldMention(tmp.channel.id, !tmp.shouldMention);
          obj = closure_1_0(closure_1_2[24]);
        }
      },
    }),
    items,
  );
  const onCancelReplying = memo.onCancelReplying;
  ({ onCancelEditing, onTapContextBarReply, onToggleReplyMention } = memo);
  obj = channel(pendingReply[28]);
  let message;
  if (pendingReply != null) {
    message = pendingReply.message;
  }
  const nullableMessageAuthor = obj.useNullableMessageAuthor(message);
  const items1 = [closure_7];
  stateFromStores = channel(pendingReply[15]).useStateFromStores(items1, () =>
    closure_1_7.getScheduledMessage(channel.id),
  );
  obj = { component: closure_5, children: null };
  let tmp8 = null != pendingReply;
  if (tmp8) {
    tmp8 = null != nullableMessageAuthor;
  }
  if (tmp8) {
    obj = { children: null };
    obj1 = {
      pendingReply: null,
      pendingReplyAuthor: null,
      onTapContextBarReply: null,
      onCancelReplying: null,
      onToggleReplyMention: null,
    };
    obj1[0] = pendingReply;
    obj1[1] = nullableMessageAuthor;
    obj1[2] = onTapContextBarReply;
    obj1[3] = onCancelReplying;
    obj1[4] = onToggleReplyMention;
    obj[0] = callback(ChatInputReplyBar, obj1);
    tmp8 = callback(closure_24, obj);
  }
  const items2 = [tmp8, , ,];
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
    const obj7 = { scheduledTimestamp: null, onCancelScheduling: null, onEditSchedule: null };
    obj7[0] = stateFromStores.scheduledTimestamp;
    obj7[1] = function onCancelScheduling() {
      return chatInputRef(pendingReply[30]).clearDraft(channel.id, closure_1_8.ScheduledMessage);
    };
    obj7[2] = function onEditSchedule() {
      return channel(pendingReply[31]).openScheduleMessageActionSheet(
        channel.id,
        channel(pendingReply[32]).ScheduledMessageEntryPoint.COMPOSER_BAR,
        stateFromStores.scheduledTimestamp,
      );
    };
    obj6[0] = callback(ChatInputScheduledMessageBar, obj7);
    tmp20 = callback(closure_24, obj6);
  }
  items2[3] = tmp20;
  obj[1] = items2;
  return closure_13(channel(pendingReply[29]).TransitionGroup, obj);
});
let result = require("set").fileFinishedImporting("modules/chat_input/native/ChatInputContextBar.tsx");

export default memoResult;
export { ChatInputReplyBar };

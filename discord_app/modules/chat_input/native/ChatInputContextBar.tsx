// === Module 12679: ChatInputContextBar ===

// Module 12679 (ChatInputContextBar)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import useToken from "useToken" /* 4458 */;
import Text_Text from "Text/Text" /* 4753 */;
import Pressables from "Pressables" /* 5341 */;
import _modDef7185 from "module_7185" /* 7185 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 8022 */;
import ScheduledMessageTypes from "ScheduledMessageTypes" /* 8093 */;
import ScheduledMessagesUtils from "ScheduledMessagesUtils" /* 12468 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;
import DraftStore from "DraftStore" /* 5106 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function ChatInputReplyBarNoAuthor(onCancelReplying) {
  const tmp = closure_17();
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const bound = Math.max(0, (token - useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
  const obj3 = { style: tmp.contextBarRow, children: null };
  const obj4 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", style: tmp.floatingReplyTextWrapper, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["5IEsGx"]);
  const items = [closure_1_12(Text_Text.Text, obj4), ];
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
  obj6.children = closure_1_12(native.Icon, { source: _modDef7185, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon });
  obj5.children = closure_1_12(Pressables.PressableOpacity, obj6);
  items[1] = closure_1_12(component, obj5);
  obj3.children = items;
  return map1(component, obj3);
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
    obj = pendingReply(colorString[10]);
    tmp4 = closure_1;
    token = obj.useToken(closure_1(colorString[9]).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
    obj2 = pendingReply(colorString[10]);
    bound = Math.max(0, (token - obj2.useToken(closure_1(colorString[9]).modules.mobile.CHAT_INPUT_REPLY_MENTION_ICON_SIZE)) / 2);
    obj3 = pendingReply(colorString[15]);
    items = [];
    items[0] = closure_6;
    stateFromStores = obj3.useStateFromStores(items, () => roleStyle.roleStyle);
    closure_1 = stateFromStores;
    obj4 = pendingReply(colorString[16]);
    obj1 = { checked: pendingReply.shouldMention };
    checkboxA11yNative = obj4.useCheckboxA11yNative(obj1);
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
          obj = { color: tmp2 };
          const items = [obj];
          tmp = items;
        }
      }
      return tmp;
    }, items1);
    obj24 = { userId: pendingReply.message.author.id, guildId };
    tmp9 = closure_1(colorString[17])(obj24);
    obj7 = pendingReply(colorString[18]);
    closure_7 = obj7.useDisplayNameStylesFont({ displayNameStyles: tmp9 });
    obj8 = pendingReply(colorString[19]);
    processColorStringsArray = obj8.useProcessColorStringsArray(colorStrings);
    closure_8 = processColorStringsArray;
    obj9 = pendingReply(colorString[19]);
    closure_9 = obj9.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, pendingReply.message.author.id, stateFromStores, processColorStringsArray);
    if (null == onTapContextBarReply) {
      tmp11 = jsx;
      obj25 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: null };
      intl = tmp2(tmp3[12]).intl;
      obj26 = { userHook: null };
      obj26.userHook = function userHook(arg0, arg1) {
        if ("dot" === stateFromStores) {
          if (null != colorString) {
            const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
            const items = [closure_2_12(native.RoleDot, obj2), ];
            const obj3 = { variant: "text-sm/semibold", style: null, children: null };
            let tmp19;
            if (null != closure_7) {
              const obj4 = { fontFamily: tmp18 };
              tmp19 = obj4;
            }
            const obj5 = { children: null };
            obj3.style = tmp19;
            obj3.children = nick;
            items[1] = closure_2_12(Text_Text.Text, obj3, arg1);
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
        tmp3Result = closure_2_12(Text_Text.Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
      };
      obj25.children = intl.format(tmp2(tmp3[12]).t["8E4GxS"], obj26);
      tmp12 = jsx(tmp2(tmp3[11]).Text, obj25);
      tmp13 = jsx;
    } else {
      tmp13 = jsx;
      obj27 = { style: null, accessibilityRole: "link", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.5, onPress: null, children: null };
      obj27.style = tmp.floatingReplyTextWrapper;
      intl6 = tmp2(tmp3[12]).intl;
      obj28 = { username: null };
      obj28.username = nick;
      obj27.accessibilityLabel = intl6.formatToPlainString(tmp2(tmp3[12]).t.EpJL4E, obj28);
      intl7 = tmp2(tmp3[12]).intl;
      obj27.accessibilityHint = intl7.string(tmp2(tmp3[12]).t["0CfCVW"]);
      obj27.onPress = onTapContextBarReply;
      obj29 = { lineClamp: 1, variant: "text-sm/normal", color: "text-strong", children: null };
      intl8 = tmp2(tmp3[12]).intl;
      obj30 = { userHook: null };
      obj30.userHook = function userHook(arg0, arg1) {
        if ("dot" === stateFromStores) {
          if (null != colorString) {
            const obj2 = { color: tmp, colors: colorStrings, guildId, size: "small" };
            const items = [closure_2_12(native.RoleDot, obj2), ];
            const obj3 = { variant: "text-sm/semibold", style: null, children: null };
            let tmp19;
            if (null != closure_7) {
              const obj4 = { fontFamily: tmp18 };
              tmp19 = obj4;
            }
            const obj5 = { children: null };
            obj3.style = tmp19;
            obj3.children = nick;
            items[1] = closure_2_12(Text_Text.Text, obj3, arg1);
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
        tmp3Result = closure_2_12(Text_Text.Text, obj, "" + arg1 + "-" + pendingReply.message.author.id);
      };
      obj29.children = intl8.format(tmp2(tmp3[12]).t["8E4GxS"], obj30);
      obj27.children = jsx(tmp2(tmp3[11]).Text, obj29);
      tmp12 = jsx(tmp2(tmp3[13]).PressableOpacity, obj27);
    }
    tmp13Result = null;
    if (null != onCancelReplying) {
      obj31 = { accessibilityRole: "button", accessibilityLabel: null, activeOpacity: 0.5, hitSlop: null, onPress: null, children: null };
      intl2 = tmp2(tmp3[12]).intl;
      obj31.accessibilityLabel = intl2.string(tmp2(tmp3[12]).t.jSnJGT);
      tmp15 = undefined;
      if (bound > 0) {
        tmp15 = bound;
      }
      obj31.hitSlop = tmp15;
      obj31.onPress = onCancelReplying;
      obj32 = { source: null, size: null, style: null };
      obj32.source = tmp4(tmp3[14]);
      obj32.size = tmp2(tmp3[7]).Icon.Sizes.CUSTOM;
      obj32.style = tmp.floatingCloseIcon;
      obj31.children = tmp13(tmp2(tmp3[7]).Icon, obj32);
      tmp13Result = tmp13(tmp2(tmp3[13]).PressableOpacity, obj31);
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
          obj33 = { style: null };
          obj33.style = tmp.floatingDivider;
          tmp13Result1 = tmp13(guildId, obj33);
        }
      }
      tmp25 = jsxs;
      tmp26 = guildId;
      obj34 = { style: null, children: null };
      obj34.style = tmp.contextBarRow;
      items2 = [, ];
      items2[0] = tmp12;
      obj35 = { style: null, children: null };
      obj35.style = tmp.floatingRightActions;
      items3 = [, , ];
      items3[0] = null;
      items3[1] = tmp13Result1;
      items3[2] = tmp13Result;
      obj35.children = items3;
      items2[1] = jsxs(guildId, obj35);
      obj34.children = items2;
      return jsxs(guildId, obj34);
    } else {
      tmp17 = jsxs;
      obj36 = { accessibilityRole: null, accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.5, onPress: null, style: null, children: null };
      obj36.accessibilityRole = accessibilityRole;
      obj36.accessibilityState = accessibilityState;
      intl3 = tmp2(tmp3[12]).intl;
      obj36.accessibilityLabel = intl3.string(tmp2(tmp3[12]).t.P8tvKG);
      intl4 = tmp2(tmp3[12]).intl;
      string = intl4.string;
      t = tmp2(tmp3[12]).t;
      if (pendingReply.shouldMention) {
        stringResult = string(t.PBgTSF);
      } else {
        stringResult = string(t["+LXBxU"]);
      }
      obj36.accessibilityHint = stringResult;
      obj36.onPress = global.onToggleReplyMention;
      obj36.style = tmp.floatingMentionGroup;
      obj37 = { source: null, size: null, style: null };
      obj37.source = tmp4(tmp3[20]);
      obj37.size = tmp2(tmp3[7]).Icon.Sizes.CUSTOM;
      items4 = [, ];
      items4[0] = tmp.replyMentionIcon;
      items4[1] = pendingReply.shouldMention && tmp.replyMentionIconActive;
      obj37.style = items4;
      items5 = [, ];
      items5[0] = tmp13(tmp2(tmp3[7]).Icon, obj37);
      prop = undefined;
      if (pendingReply.shouldMention) {
        prop = tmp.replyMentionButtonActive;
      }
      obj38 = { variant: "text-sm/semibold", color: "text-muted", style: null, children: null };
      obj38.style = prop;
      intl5 = tmp2(tmp3[12]).intl;
      string2 = intl5.string;
      p9jC2r = tmp2(tmp3[12]).t;
      if (pendingReply.shouldMention) {
        p9jC2r = p9jC2r.p9jC2r;
        string2Result = string2(p9jC2r);
      } else {
        string2Result = string2(p9jC2r.U7f3bK);
      }
      obj38.children = string2Result;
      obj38 = tmp13(tmp2(tmp3[11]).Text, obj38);
      items5[1] = obj38;
      obj36.children = items5;
      tmp17Result = tmp17(tmp2(tmp3[13]).PressableOpacity, obj36);
    }
    return;
  }
}
function ChatInputEditBar(onCancelEditing) {
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
  const tmp8 = closure_1_12(Text_Text.Text, obj3);
  obj4.children = closure_1_12(native.Icon, { source: _modDef7185, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon });
  const obj6 = { style: tmp.contextBarRow, children: null };
  const obj7 = { children: null };
  const items = [tmp8, ];
  const obj5 = { source: _modDef7185, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
  items[1] = closure_1_12(component, { style: tmp.floatingRightActions, children: closure_1_12(Pressables.PressableOpacity, obj4) });
  obj7.children = items;
  obj6.children = map1(closure_1_14, obj7);
  return closure_1_12(component, obj6);
}
function ChatInputScheduledMessageBar(scheduledTimestamp) {
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
  obj3.children = closure_1_12(Text_Text.Text, obj4);
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
  const tmp8 = closure_1_12(Pressables.PressableOpacity, obj3);
  obj6.children = closure_1_12(native.Icon, { source: _modDef7185, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon });
  const obj8 = { style: tmp.contextBarRow, children: null };
  const obj9 = { children: null };
  const items = [tmp8, ];
  const obj7 = { source: _modDef7185, size: native.Icon.Sizes.CUSTOM, style: tmp.floatingCloseIcon };
  items[1] = closure_1_12(component, { style: tmp.floatingRightActions, children: closure_1_12(Pressables.PressableOpacity, obj6) });
  obj9.children = items;
  obj8.children = map1(closure_1_14, obj9);
  return closure_1_12(component, obj8);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const DraftType = fn(5106).DraftType;
const Constants = fn(1074);
({ AnalyticEvents: c10, Routes: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let obj = { duration: 250, easing: fn(1177).STANDARD_EASING };
let createStyles = fn(4757);
let closure_16 = createStyles.createStyles((arg0) => {
  let MOBILE_FLOATING_ACCESSORY_BACKGROUND = arg0;
  if (arg0 == null) {
    MOBILE_FLOATING_ACCESSORY_BACKGROUND = nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND;
  }
  return { contextBar: { backgroundColor: MOBILE_FLOATING_ACCESSORY_BACKGROUND } };
});
createStyles = fn(4757);
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
const __initData = { code: "function ChatInputContextBarTsx1(){const{stylesBackgroundColor,heightSv}=this.__closure;return{backgroundColor:stylesBackgroundColor,...{maxHeight:heightSv.get()}};}" };
let closure_23 = { code: "function ChatInputContextBarTsx2(finished){const{runOnJS,handleTransitionFinished}=this.__closure;if(finished){runOnJS(handleTransitionFinished)();}}" };
let closure_24 = noop.forwardRef((children, arg1) => {
  let backgroundColor;
  let ref;
  noop = undefined;
  backgroundColor = closure_16(backgroundColor(ref[21]).useGradientValue(backgroundColor(ref[21]).GradientPercentage.END)).contextBar.backgroundColor;
  obj = backgroundColor(ref[21]);
  const tmp = closure_17();
  const sharedValue = backgroundColor(ref[22]).useSharedValue(0);
  const obj2 = backgroundColor(ref[22]);
  let fn = function o() {
    return { backgroundColor, maxHeight: sharedValue.get() };
  };
  fn.__closure = { stylesBackgroundColor: backgroundColor, heightSv: sharedValue };
  fn.__workletHash = 16731072716488;
  fn.__initData = __initData;
  const animatedStyle = backgroundColor(ref[22]).useAnimatedStyle(fn);
  ref = noop.useRef(null);
  const items = [ref];
  noop = noop.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current();
    }
  }, items);
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({
    componentDidAppear() {
      const result = sharedValue.set(backgroundColor(ref[23]).withTiming(60, obj));
    },
    componentDidEnter() {
      const result = sharedValue.set(backgroundColor(ref[23]).withTiming(60, obj));
    },
    componentWillLeave(current) {
      closure_1_2.current = current;
      const fn = function n(arg0) {
        if (arg0) {
          backgroundColor(ref[22]).runOnJS(handleTransitionFinished)();
          obj = backgroundColor(ref[22]);
        }
      };
      obj = backgroundColor(ref[23]);
      fn.__closure = { runOnJS: backgroundColor(ref[22]).runOnJS, handleTransitionFinished };
      fn.__workletHash = 10908592279914;
      fn.__initData = __initData;
      const result = sharedValue.set(obj.withTiming(0, closure_2_15, "respect-motion-settings", fn));
    }
  }));
  const obj4 = { style: null, children: children.children };
  const items1 = [animatedStyle, tmp.floatingContextBar];
  obj4.style = items1;
  return closure_12(sharedValue(ref[22]).View, obj4);
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputContextBar.tsx");

export default noop.memo(function ChatInputContextBar(channel) {
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
        channel(pendingReply[24]).deletePendingReply(id.id);
        const obj3 = channel(pendingReply[24]);
        const tmp10 = id;
        id = undefined;
        if (closure_1_2 != null) {
          id = closure_1_2.message.id;
        }
        obj = { message_id: id, channel_id: null, guild_id: null, context_action: "reply", reason: null, is_own_message: null };
        ({ id: obj.channel_id, guild_id: obj.guild_id } = tmp10);
        const obj4 = chatInputRef(pendingReply[25]);
        obj.reason = channel(pendingReply[26]).getContextBarCancelReason("reply", "cancel");
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
        const tmp8Result = channel(pendingReply[26]);
      }
    },
    onTapContextBarReply() {
      if (null != closure_1_2) {
        channel = closure_1_2.channel;
        channel(pendingReply[27]).transitionTo(closure_2_11.CHANNEL(channel.getGuildId(), closure_1_2.channel.id, closure_1_2.message.id));
        obj = channel(pendingReply[27]);
      }
    },
    onToggleReplyMention() {
      if (null != closure_1_2) {
        const result = channel(pendingReply[24]).setPendingReplyShouldMention(closure_1_2.channel.id, !closure_1_2.shouldMention);
        obj = channel(pendingReply[24]);
      }
    }
  }), items);
  const onCancelReplying = memo.onCancelReplying;
  ({ onCancelEditing, onTapContextBarReply, onToggleReplyMention } = memo);
  let message;
  if (pendingReply != null) {
    message = pendingReply.message;
  }
  const nullableMessageAuthor = channel(pendingReply[28]).useNullableMessageAuthor(message);
  obj = channel(pendingReply[28]);
  const items1 = [DraftStore];
  stateFromStores = channel(pendingReply[15]).useStateFromStores(items1, () => DraftStore.getScheduledMessage(channel.id));
  const obj2 = { component, children: null };
  let tmp8 = null != pendingReply;
  if (tmp8) {
    tmp8 = null != nullableMessageAuthor;
  }
  if (tmp8) {
    let obj3 = { children: null };
    let obj4 = { pendingReply, pendingReplyAuthor: nullableMessageAuthor, onTapContextBarReply, onCancelReplying, onToggleReplyMention };
    obj3.children = closure_12(ChatInputReplyBar, obj4);
    tmp8 = closure_12(closure_24, obj3);
  }
  const items2 = [tmp8, , , ];
  let tmp12 = null != pendingReply && null == nullableMessageAuthor;
  if (tmp12) {
    const obj5 = { children: null };
    const obj6 = { onCancelReplying };
    obj5.children = closure_12(ChatInputReplyBarNoAuthor, obj6);
    tmp12 = closure_12(closure_24, obj5);
  }
  items2[1] = tmp12;
  let tmp16 = null != channel.pendingEdit;
  if (tmp16) {
    const obj7 = { children: null };
    const obj8 = { onCancelEditing };
    obj7.children = closure_12(ChatInputEditBar, obj8);
    tmp16 = closure_12(closure_24, obj7);
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
    obj9.children = closure_12(ChatInputScheduledMessageBar, obj10);
    tmp20 = closure_12(closure_24, obj9);
  }
  items2[3] = tmp20;
  obj2.children = items2;
  return closure_13(channel(pendingReply[29]).TransitionGroup, obj2);
});
export { ChatInputReplyBar };
// === Module 12706: ChatInputGuard ===

// Module 12706 (ChatInputGuard)
import nativeDefault from "native" /* 576 */;
import Radius from "Radius" /* 670 */;
import Text_Text from "Text/Text" /* 4753 */;
import components_Button_Button from "components/Button/Button" /* 5187 */;
import ThemedGradientDefault from "ThemedGradient" /* 5343 */;
import ButtonGroup from "ButtonGroup" /* 5652 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 8120 */;
import IconButton from "IconButton" /* 8183 */;
import native from "native" /* 9189 */;
import CountDownDefault from "CountDown" /* 11200 */;
import ArrowSmallRightIcon from "ArrowSmallRightIcon" /* 11205 */;
import getChatInputPositionStyleDefault from "getChatInputPositionStyle" /* 12517 */;
import JumpToPresentButtonDefault from "JumpToPresentButton" /* 12524 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(9660).updateChatInputContainerHeight;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4757);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuard.tsx");

export default function ChatInputGuard(type) {
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
        tmp16Result = React6(native.TwinButtons, obj11);
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
    return React6(hasOwnProperty, obj9);
  }
};
export const ChatInputGuardContainer = function ChatInputGuardContainer(screenIndex) {
  screenIndex = screenIndex.screenIndex;
  const channelId = screenIndex.channelId;
  ({ onJumpToPresent, children } = screenIndex);
  const tmp3 = useIsUsingClientThemeDefault();
  const chatInputFloatingOverlayStyle = screenIndex(12518).useChatInputFloatingOverlayStyle();
  const tmp6 = closure_9(tmp3);
  const items = [screenIndex];
  const obj2 = { style: null, onLayout: null, collapsable: false, children: null };
  const callback = noop.useCallback((nativeEvent) => {
    closure_6(screenIndex, nativeEvent.nativeEvent.layout.height);
  }, items);
  const items1 = [getChatInputPositionStyleDefault({ isCreatingThread: false }), chatInputFloatingOverlayStyle];
  obj2.style = items1;
  obj2.onLayout = callback;
  const items2 = [closure_7(screenIndex(12518).ChatInputScrimGradient, {}), ];
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
  const obj = screenIndex(12518);
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
};
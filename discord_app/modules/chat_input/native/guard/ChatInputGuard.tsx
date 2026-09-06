// === Module 12448: ChatInputGuard ===

// Module 12448 (ChatInputGuard)
import nativeDefault from "native" /* 576 */;
import Radius from "Radius" /* 670 */;
import Text_Text from "Text/Text" /* 4556 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import ButtonGroup from "ButtonGroup" /* 5433 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7873 */;
import getChatInputPositionStyleDefault from "getChatInputPositionStyle" /* 12260 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(9485).updateChatInputContainerHeight;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles((arg0) => {
  let obj = { container: null, content: null, underlay: null, wrapper: null, floating: null, text: null, subtext: null, spacing: null };
  obj = { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 };
  obj.container = obj;
  let lg;
  if (arg0) {
    lg = tmp(576).radii.lg;
  }
  obj = { borderRadius: lg, overflow: null };
  let str;
  if (arg0) {
    str = "hidden";
  }
  obj.overflow = str;
  obj.content = obj;
  const obj1 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: nativeDefault.space.PX_8 + Radius.Radius.lg };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj1.top = undefined;
  obj.underlay = obj1;
  obj.wrapper = { borderColor: nativeDefault.colors.BORDER_MUTED, paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, borderWidth: 1 };
  const obj2 = { borderColor: nativeDefault.colors.BORDER_MUTED, paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, borderWidth: 1 };
  obj.floating = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1 };
  obj.text = { textAlign: "center" };
  const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1 };
  obj.subtext = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
  const obj4 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
  obj.spacing = { marginTop: nativeDefault.space.PX_8 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuard.tsx");

export default function ChatInputGuard(type) {
  const tmp3 = closure_9(useIsUsingClientThemeDefault());
  if ("simple-action" === type.type) {
    ({ countdown, actionIcon, actionLabel, actionOnPress } = type);
    let obj = { style: tmp3.floating, children: null };
    ({ icon, message, subtext } = type);
    obj = { arrow: false, accessibilityRole: "button", onPress: actionOnPress, icon, start: true, end: true, trailing: null, label: null, subLabel: null };
    if (null != actionLabel) {
      if (null != actionOnPress) {
        const obj1 = { accessibilityLabel: actionLabel, icon: null, size: "sm", onPress: null };
        if (actionIcon == null) {
          const obj2 = { color: tmp(576).colors.WHITE };
          actionIcon = tmp7(tmp9(10935).ArrowSmallRightIcon, obj2);
        }
        obj1.icon = actionIcon;
        obj1.onPress = actionOnPress;
        let tmp7Result = tmp7(tmp9(8097).IconButton, obj1);
      }
      obj.trailing = tmp7Result;
      const obj3 = { variant: "text-sm/semibold", children: message };
      obj.label = tmp7(tmp9(4556).Text, obj3);
      obj.subLabel = subtext;
      obj.children = tmp7(tmp10, obj);
      return tmp7(tmp8, obj);
    }
    tmp7Result = null;
    if (null != countdown) {
      const obj4 = { style: null, deadline: null };
      const items = [, ];
      ({ text: arr3[0], spacing: arr3[1] } = tmp3);
      obj4.style = items;
      obj4.deadline = countdown;
      tmp7Result = tmp7(tmp(10930), obj4);
    }
    tmp8 = hasOwnProperty;
  } else {
    ({ subtext: subtext2, buttonSecondaryText, buttonSecondaryOnPress, countdown: countdown2 } = type);
    ({ message: message2, buttonPrimaryText, buttonPrimaryOnPress, buttonPrimaryDisabled, buttonPrimaryLoading, buttonPrimaryVariant, buttonSecondaryDisabled, buttonSecondaryLoading } = type);
    const obj5 = { disabled: buttonPrimaryDisabled, loading: buttonPrimaryLoading, text: buttonPrimaryText, onPress: buttonPrimaryOnPress, size: "sm", variant: buttonPrimaryVariant };
    const tmp15 = React5(components_Button_Button.Button, obj5);
    const obj6 = { style: tmp3.wrapper, children: null };
    const obj7 = { style: tmp3.text, variant: "text-sm/semibold", children: message2 };
    const items1 = [React5(Text_Text.Text, obj7), , , ];
    let tmp13Result = null;
    if (null != subtext2) {
      tmp13Result = null;
      if (typeof subtext2 === "string") {
        tmp13Result = null;
        if (subtext2.length > 0) {
          obj = { style: tmp3.subtext, variant: "text-xs/medium", color: "text-muted", children: subtext2 };
          tmp13Result = tmp13(tmp14(4556).Text, obj);
        }
      }
    }
    items1[1] = tmp13Result;
    let tmp16Result = tmp15;
    if (null != buttonSecondaryText) {
      tmp16Result = tmp15;
      if (null != buttonSecondaryOnPress) {
        const obj8 = { children: null };
        const items2 = [tmp15, ];
        const obj9 = { disabled: buttonSecondaryDisabled, loading: buttonSecondaryLoading, text: buttonSecondaryText, onPress: buttonSecondaryOnPress, variant: "secondary", size: "sm" };
        items2[1] = tmp13(tmp14(4975).Button, obj9);
        obj8.children = items2;
        tmp16Result = tmp16(tmp14(8902).TwinButtons, obj8);
      }
    }
    const obj10 = { children: tmp16Result };
    items1[2] = React5(ButtonGroup.ButtonGroup, obj10);
    tmp13Result = null;
    if (null != countdown2) {
      const obj11 = { style: null, deadline: null };
      const items3 = [, ];
      ({ text: arr2[0], spacing: arr2[1] } = tmp3);
      obj11.style = items3;
      obj11.deadline = countdown2;
      tmp13Result = tmp13(tmp(10930), obj11);
    }
    items1[3] = tmp13Result;
    obj6.children = items1;
    return React6(hasOwnProperty, obj6);
  }
};
export const ChatInputGuardContainer = function ChatInputGuardContainer(screenIndex) {
  screenIndex = screenIndex.screenIndex;
  const channelId = screenIndex.channelId;
  ({ onJumpToPresent, children } = screenIndex);
  const tmp3 = useIsUsingClientThemeDefault();
  let obj = screenIndex(12261);
  const chatInputFloatingOverlayStyle = obj.useChatInputFloatingOverlayStyle();
  const tmp6 = closure_9(tmp3);
  const items = [screenIndex];
  obj = { style: null, onLayout: null, collapsable: false, children: null };
  const callback = noop.useCallback((nativeEvent) => {
    closure_6(screenIndex, nativeEvent.nativeEvent.layout.height);
  }, items);
  const items1 = [getChatInputPositionStyleDefault({ isCreatingThread: false }), chatInputFloatingOverlayStyle];
  obj.style = items1;
  obj.onLayout = callback;
  const items2 = [closure_7(screenIndex(12261).ChatInputScrimGradient, {}), ];
  obj = { style: tmp6.container, children: null };
  let tmp10Result = null;
  if (!tmp3) {
    const obj1 = { style: tmp6.underlay };
    tmp10Result = tmp10(tmp9, obj1);
  }
  const items3 = [tmp10Result, , ];
  const obj2 = { style: tmp6.content, children: null };
  tmp10Result = null;
  if (tmp3) {
    tmp10Result = tmp10(tmp(5125), { absolute: true, wide: true, tall: true, mix: true });
  }
  const items4 = [tmp10Result, children];
  obj2.children = items4;
  items3[1] = closure_8(closure_5, obj2);
  let tmp10Result1 = null;
  if (tmp4Result.isIOS()) {
    tmp10Result1 = null;
    if (null != channelId) {
      const obj3 = { channelId, screenIndex, onJumpToPresent };
      tmp10Result1 = tmp10(tmp(12267), obj3);
    }
  }
  items3[2] = tmp10Result1;
  obj.children = items3;
  items2[1] = closure_8(closure_5, obj);
  obj.children = items2;
  return closure_8(closure_5, obj);
};
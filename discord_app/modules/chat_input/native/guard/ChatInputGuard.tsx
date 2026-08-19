// === Module 11616: ChatInputGuard ===

// Module 11616 (ChatInputGuard)
import ThemesDefault from "Themes" /* 712 */;
import Radius from "Radius" /* 806 */;
import Text from "Text" /* 4734 */;
import Button from "Button" /* 4745 */;
import ButtonGroup from "ButtonGroup" /* 6687 */;
import IconButton from "IconButton" /* 8035 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 8502 */;
import TwinButtons from "TwinButtons" /* 8811 */;
import getMixedGradientColorDefault from "getMixedGradientColor" /* 9091 */;
import componentDidMountDefault from "componentDidMount" /* 9946 */;
import ArrowSmallRightIcon from "ArrowSmallRightIcon" /* 9951 */;
import getChatInputPositionStyleDefault from "getChatInputPositionStyle" /* 11425 */;
import JumpToPresentButtonDefault from "JumpToPresentButton" /* 11434 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { updateChatInputContainerHeight as closure_6 } from "updateChatInputContainerHeight" /* 8682 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles((arg0) => {
  let obj = { paddingHorizontal: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_8 };
  obj[0] = obj;
  let lg;
  if (arg0) {
    lg = ThemesDefault.radii.lg;
  }
  obj = { borderRadius: lg, overflow: null };
  let str;
  if (arg0) {
    str = "hidden";
  }
  obj[1] = str;
  obj[1] = obj;
  obj1 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, height: ThemesDefault.space.PX_8 + Radius.Radius.lg };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj1.top = undefined;
  obj[2] = obj1;
  obj[3] = { borderColor: ThemesDefault.colors.BORDER_MUTED, paddingHorizontal: ThemesDefault.space.PX_12, paddingTop: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, borderWidth: 1 };
  obj[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: ThemesDefault.colors.BORDER_MUTED, borderWidth: 1 };
  obj[5] = { textAlign: "center" };
  obj[6] = { marginTop: ThemesDefault.space.PX_4, textAlign: "center" };
  obj[7] = { marginTop: ThemesDefault.space.PX_8 };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuard.tsx");

export default function ChatInputGuard(type) {
  const tmp3 = callback2(useIsUsingClientThemeDefault());
  if ("simple-action" === type.type) {
    ({ countdown, actionIcon, actionLabel, actionOnPress } = type);
    let obj = { style: null, children: null };
    obj[0] = tmp3.floating;
    ({ icon, message, subtext } = type);
    obj = { arrow: false, accessibilityRole: "button", onPress: null, icon: null, start: true, end: true, trailing: null, label: null, subLabel: null };
    obj[2] = actionOnPress;
    obj[3] = icon;
    if (null != actionLabel) {
      if (null != actionOnPress) {
        obj1 = { accessibilityLabel: null, icon: null, size: "sm", onPress: null };
        obj1[0] = actionLabel;
        if (actionIcon == null) {
          const obj2 = { color: null };
          obj2[0] = ThemesDefault.colors.WHITE;
          actionIcon = callback(ArrowSmallRightIcon.ArrowSmallRightIcon, obj2);
        }
        obj1[1] = actionIcon;
        obj1[3] = actionOnPress;
        let tmp7Result = callback(IconButton.IconButton, obj1);
      }
      obj[6] = tmp7Result;
      const obj3 = { variant: "text-sm/semibold", children: null };
      obj3[1] = message;
      obj[7] = callback(Text.Text, obj3);
      obj[8] = subtext;
      obj[1] = callback(tmp10, obj);
      return callback(closure_5, obj);
    }
    tmp7Result = null;
    if (null != countdown) {
      const obj4 = { style: null, deadline: null };
      const items = [, ];
      ({ text: arr3[0], spacing: arr3[1] } = tmp3);
      obj4[0] = items;
      obj4[1] = countdown;
      tmp7Result = callback(componentDidMountDefault, obj4);
    }
  } else {
    ({ subtext: subtext2, buttonSecondaryText, buttonSecondaryOnPress, countdown: countdown2 } = type);
    ({ message: message2, buttonPrimaryText, buttonPrimaryOnPress, buttonPrimaryDisabled, buttonPrimaryLoading, buttonPrimaryVariant, buttonSecondaryDisabled, buttonSecondaryLoading } = type);
    const obj5 = { disabled: null, loading: null, text: null, onPress: null, size: "sm", variant: null };
    obj5[0] = buttonPrimaryDisabled;
    obj5[1] = buttonPrimaryLoading;
    obj5[2] = buttonPrimaryText;
    obj5[3] = buttonPrimaryOnPress;
    obj5[5] = buttonPrimaryVariant;
    const tmp15 = callback(Button.Button, obj5);
    const obj6 = { style: null, children: null };
    obj6[0] = tmp3.wrapper;
    const obj7 = { style: null, variant: "text-sm/semibold", children: null };
    obj7[0] = tmp3.text;
    obj7[2] = message2;
    const items1 = [callback(Text.Text, obj7), , , ];
    let tmp13Result = null;
    if (null != subtext2) {
      tmp13Result = null;
      if (typeof subtext2 === "string") {
        tmp13Result = null;
        if (subtext2.length > 0) {
          obj = { style: null, variant: "text-xs/medium", color: "text-muted", children: null };
          obj[0] = tmp3.subtext;
          obj[3] = subtext2;
          tmp13Result = callback(Text.Text, obj);
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
        const obj9 = { disabled: null, loading: null, text: null, onPress: null, variant: "secondary", size: "sm" };
        obj9[0] = buttonSecondaryDisabled;
        obj9[1] = buttonSecondaryLoading;
        obj9[2] = buttonSecondaryText;
        obj9[3] = buttonSecondaryOnPress;
        items2[1] = callback(Button.Button, obj9);
        obj8[0] = items2;
        tmp16Result = callback(TwinButtons.TwinButtons, obj8);
      }
    }
    const obj10 = { children: null };
    obj10[0] = tmp16Result;
    items1[2] = callback(ButtonGroup.ButtonGroup, obj10);
    tmp13Result = null;
    if (null != countdown2) {
      const obj11 = { style: null, deadline: null };
      const items3 = [, ];
      ({ text: arr2[0], spacing: arr2[1] } = tmp3);
      obj11[0] = items3;
      obj11[1] = countdown2;
      tmp13Result = callback(componentDidMountDefault, obj11);
    }
    items1[3] = tmp13Result;
    obj6[1] = items1;
    return callback(closure_5, obj6);
  }
};
export const ChatInputGuardContainer = function ChatInputGuardContainer(screenIndex) {
  screenIndex = screenIndex.screenIndex;
  const channelId = screenIndex.channelId;
  ({ onJumpToPresent, children } = screenIndex);
  const tmp3 = useIsUsingClientThemeDefault();
  let obj = screenIndex(1367);
  const chatInputFloating = obj.useMobileVisualRefreshConfig({ location: "ChatInputGuardContainer" }).chatInputFloating;
  obj1 = screenIndex(11426);
  const chatInputFloatingOverlayStyle = obj1.useChatInputFloatingOverlayStyle();
  const tmp6 = callback2(tmp3);
  const items = [screenIndex];
  const callback = React.useCallback((nativeEvent) => {
    closure_1_6(screenIndex, nativeEvent.nativeEvent.layout.height);
  }, items);
  const items1 = [getChatInputPositionStyleDefault({ isCreatingThread: false }), ];
  let tmp10 = chatInputFloating;
  if (chatInputFloating) {
    tmp10 = chatInputFloatingOverlayStyle;
  }
  obj = { style: items1, onLayout: callback, collapsable: false, children: null };
  items1[1] = tmp10;
  let tmp11 = null;
  if (chatInputFloating) {
    tmp11 = callback(tmp4(11426).ChatInputScrimGradient, {});
  }
  const items2 = [tmp11, ];
  obj = { style: tmp6.container, children: null };
  let tmp13 = null;
  if (!tmp3) {
    obj1 = { style: null };
    obj1[0] = tmp6.underlay;
    tmp13 = callback(closure_5, obj1);
  }
  const items3 = [tmp13, , ];
  const obj2 = { style: tmp6.content, children: null };
  let tmp15 = null;
  if (tmp3) {
    tmp15 = callback(getMixedGradientColorDefault, { absolute: true, wide: true, tall: true, mix: true });
  }
  const items4 = [tmp15, children];
  obj2[1] = items4;
  items3[1] = callback(closure_5, obj2);
  let tmp17 = null;
  if (tmp4Result.isIOS()) {
    tmp17 = null;
    if (null != channelId) {
      const obj3 = { channelId: null, screenIndex: null, onJumpToPresent: null };
      obj3[0] = channelId;
      obj3[1] = screenIndex;
      obj3[2] = onJumpToPresent;
      tmp17 = callback(JumpToPresentButtonDefault, obj3);
    }
  }
  items3[2] = tmp17;
  obj[1] = items3;
  items2[1] = callback(closure_5, obj);
  obj[3] = items2;
  return callback(closure_5, obj);
};
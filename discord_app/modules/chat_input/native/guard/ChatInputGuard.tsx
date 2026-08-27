// discord_app/modules/chat_input/native/guard/ChatInputGuard.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Radius from "../../../../../discord_common/js/packages/tokens/radii/generated/generated-definitions.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import Button from "../../../../design/components/Button/native/Button.native.tsx";
import ButtonGroup from "../../../../design/components/ButtonGroup/native/ButtonGroup.native.tsx";
import useIsUsingClientThemeDefault from "../../../client_themes/native/useIsUsingClientTheme.tsx";
import getChatInputPositionStyleDefault from "../getChatInputPositionStyle.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { updateChatInputContainerHeight as closure_6 } from "../useChatBottomManagerUIStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, content: null, underlay: null, wrapper: null, floating: null, text: null, subtext: null, spacing: null };
  obj = { paddingHorizontal: ThemesDefault.space.PX_12, paddingBottom: ThemesDefault.space.PX_8 };
  obj[0] = obj;
  let lg;
  if (arg0) {
    lg = tmp(712).radii.lg;
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
  const obj2 = { borderColor: ThemesDefault.colors.BORDER_MUTED, paddingHorizontal: ThemesDefault.space.PX_12, paddingTop: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, borderWidth: 1 };
  obj[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: ThemesDefault.colors.BORDER_MUTED, borderWidth: 1 };
  obj[5] = { textAlign: "center" };
  const obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: ThemesDefault.colors.BORDER_MUTED, borderWidth: 1 };
  obj[6] = { marginTop: ThemesDefault.space.PX_4, textAlign: "center" };
  const obj4 = { marginTop: ThemesDefault.space.PX_4, textAlign: "center" };
  obj[7] = { marginTop: ThemesDefault.space.PX_8 };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuard.tsx");

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
          obj2[0] = tmp(712).colors.WHITE;
          actionIcon = tmp7(tmp9(10592).ArrowSmallRightIcon, obj2);
        }
        obj1[1] = actionIcon;
        obj1[3] = actionOnPress;
        let tmp7Result = tmp7(tmp9(7938).IconButton, obj1);
      }
      obj[6] = tmp7Result;
      const obj3 = { variant: "text-sm/semibold", children: null };
      obj3[1] = message;
      obj[7] = tmp7(tmp9(4441).Text, obj3);
      obj[8] = subtext;
      obj[1] = tmp7(tmp10, obj);
      return tmp7(tmp8, obj);
    }
    tmp7Result = null;
    if (null != countdown) {
      const obj4 = { style: null, deadline: null };
      const items = [, ];
      ({ text: arr3[0], spacing: arr3[1] } = tmp3);
      obj4[0] = items;
      obj4[1] = countdown;
      tmp7Result = tmp7(tmp(10587), obj4);
    }
    tmp8 = closure_5;
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
          tmp13Result = tmp13(tmp14(4441).Text, obj);
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
        items2[1] = tmp13(tmp14(4880).Button, obj9);
        obj8[0] = items2;
        tmp16Result = tmp16(tmp14(8906).TwinButtons, obj8);
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
      tmp13Result = tmp13(tmp(10587), obj11);
    }
    items1[3] = tmp13Result;
    obj6[1] = items1;
    return closure_8(closure_5, obj6);
  }
};
export const ChatInputGuardContainer = function ChatInputGuardContainer(screenIndex) {
  screenIndex = screenIndex.screenIndex;
  const channelId = screenIndex.channelId;
  ({ onJumpToPresent, children } = screenIndex);
  const tmp3 = useIsUsingClientThemeDefault();
  let obj = screenIndex(1367);
  const chatInputFloating = obj.useMobileVisualRefreshConfig({ location: "ChatInputGuardContainer" }).chatInputFloating;
  obj1 = screenIndex(11745);
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
    tmp11 = callback(tmp4(11745).ChatInputScrimGradient, {});
  }
  const items2 = [tmp11, ];
  obj = { style: tmp6.container, children: null };
  let tmp13 = null;
  if (!tmp3) {
    obj1 = { style: null };
    obj1[0] = tmp6.underlay;
    tmp13 = callback(tmp9, obj1);
  }
  const items3 = [tmp13, , ];
  const obj2 = { style: tmp6.content, children: null };
  let tmp15 = null;
  if (tmp3) {
    tmp15 = callback(tmp(5022), { absolute: true, wide: true, tall: true, mix: true });
  }
  const items4 = [tmp15, children];
  obj2[1] = items4;
  items3[1] = closure_8(closure_5, obj2);
  let tmp17 = null;
  if (tmp4Result.isIOS()) {
    tmp17 = null;
    if (null != channelId) {
      const obj3 = { channelId: null, screenIndex: null, onJumpToPresent: null };
      obj3[0] = channelId;
      obj3[1] = screenIndex;
      obj3[2] = onJumpToPresent;
      tmp17 = callback(tmp(11751), obj3);
    }
  }
  items3[2] = tmp17;
  obj[1] = items3;
  items2[1] = closure_8(closure_5, obj);
  obj[3] = items2;
  return closure_8(closure_5, obj);
};
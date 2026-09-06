// discord_app/design/components/Sheet/native/ActionSheetCloseButton.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Pressables from "../../../void/Pressables/native/Pressables.tsx";
import XSmallIcon from "../../Icon/native/redesign/generated/XSmallIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const androidRippleConfig = Object.freeze({ radius: 12 });
const hitSlop = Object.freeze({ top: 8, right: 8, bottom: 8, left: 8 });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetCloseButton.native.tsx");

export const ActionSheetCloseButton = function ActionSheetCloseButton(arg0) {
  ({ onPress, variant } = arg0);
  const obj = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    hitSlop: null,
    androidRippleConfig: null,
    onPress: null,
    children: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.hitSlop = hitSlop;
  obj.androidRippleConfig = androidRippleConfig;
  obj.onPress = onPress;
  if ("overlay" === variant) {
    let ICON_STRONG = nativeDefault.colors.WHITE;
  } else {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  obj.children = jsx(XSmallIcon.XSmallIcon, { color: ICON_STRONG });
  return jsx(Pressables.PressableOpacity, {
    accessibilityRole: "button",
    accessibilityLabel: null,
    hitSlop: null,
    androidRippleConfig: null,
    onPress: null,
    children: null,
  });
};

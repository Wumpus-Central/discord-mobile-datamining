// discord_app/modules/video_calls/native/components/CallBarAction.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import CircleWithCutoutUtils from "../../../voice_panel/native/shared/CircleWithCutoutUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class ActionButton {
  constructor(arg0) {
    flag = global.appearsDisabled;
    if (flag === undefined) {
      flag = false;
    }
    ({ backgroundColor, imageStyle, onPress, showBadge, accessibilityLabel, accessibilityState, source } = global);
    if (showBadge === undefined) {
      showBadge = false;
    }
    flag2 = global.isSmallSize;
    if (flag2 === undefined) {
      flag2 = false;
    }
    ({ lottieComponent, IconComponent } = global);
    ({ children, lottieComponentColor } = global);
    tmp = closure_13();
    tmp3 = closure_2;
    tmp2 = closure_1;
    num = 12;
    if (flag2) {
      tmp5 = closure_12;
      num = 12;
      if (tmp4 < closure_12) {
        num = 6;
      }
    }
    tmp6 = flag2 ? closure_11 : closure_10;
    result = 2 * tmp6.buttonRadius;
    result1 = 2 * tmp6.badgeRadius;
    tmp10 = jsx;
    tmp11 = onPress;
    sum = tmp6.badgeRadius + tmp6.cutoutInset;
    obj = {
      accessibilityLabel,
      accessibilityRole: "button",
      accessibilityState,
      onPress() {
        resetFocusTimer();
        require();
      },
      disabled: false,
      style: { width: result, height: result, borderRadius: tmp6.buttonRadius, marginHorizontal: num },
      children: null,
    };
    tmp13 = View;
    items = [, ,];
    items[0] = tmp.buttonContainer;
    items[1] = { width: result, height: result, borderRadius: tmp6.buttonRadius };
    num2 = 1;
    tmp12 = jsxs;
    if (flag) {
      num2 = 0.25;
    }
    obj = { style: items, children: null };
    items[2] = { opacity: num2 };
    obj1 = {
      circleRadius: tmp6.buttonRadius,
      cutoutRadius: sum,
      enableCutout: showBadge,
      cutoutPositionInDegrees: 45,
      circleFillColor: null,
    };
    tmp2Result = tmp2(tmp3[9]);
    if (null == backgroundColor) {
      backgroundColor = closure_9;
    }
    obj1.circleFillColor = backgroundColor;
    items1 = [, , ,];
    items1[0] = tmp10(tmp2Result, obj1);
    obj2 = { style: null, children: null };
    items2 = [,];
    items2[0] = tmp.iconContainer;
    items2[1] = { width: result, height: result };
    obj2.style = items2;
    if (null != lottieComponent) {
      tmp17 = closure_3;
      obj3 = { color: null };
      obj3.color = lottieComponentColor;
      cloneElementResult = closure_3.cloneElement(lottieComponent, obj3);
    } else if (null != IconComponent) {
      obj4 = { style: null };
      obj4.style = imageStyle;
      cloneElementResult = tmp10(IconComponent, obj4);
    } else {
      tmp15 = Image;
      obj5 = { source: null, style: null };
      obj5.source = source;
      obj5.style = imageStyle;
      cloneElementResult = tmp10(Image, obj5);
    }
    obj2.children = cloneElementResult;
    items1[1] = tmp10(tmp13, obj2);
    tmp10Result = null;
    if (showBadge) {
      obj6 = { style: null };
      items3 = [,];
      items3[0] = tmp.badge;
      size = { width: null, height: null, borderRadius: null, top: null, left: null };
      size.width = result1;
      size.height = result1;
      size.borderRadius = tmp6.badgeRadius;
      tmp11Result = tmp11(tmp3[9]);
      num3 = 45;
      size.top = tmp11Result.getBadgeTop(tmp6.badgeRadius, tmp6.buttonRadius, 45);
      tmp11Result1 = tmp11(tmp3[9]);
      size.left = tmp11Result1.getBadgeLeft(tmp6.badgeRadius, tmp6.buttonRadius, 45);
      items3[1] = size;
      obj6.style = items3;
      tmp10Result = tmp10(tmp13, obj6);
    }
    items1[2] = tmp10Result;
    items1[3] = children;
    obj.children = items1;
    obj.children = tmp12(tmp13, obj);
    return tmp10(onPress(tmp3[8]).PressableOpacity, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const resetFocusTimer = fn(9467).resetFocusTimer;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let ColorUtils = fn(4409);
let closure_9 = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
let closure_10 = Object.freeze({ buttonRadius: 28, badgeRadius: 6, cutoutInset: 3 });
const frozen = Object.freeze({ buttonRadius: 24, badgeRadius: 4, cutoutInset: 2 });
let closure_12 = 24 + 2 * frozen.buttonRadius * 5 + 96;
fn(4560);
ColorUtils = {
  buttonContainer: { position: "absolute" },
  iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center" },
  badge: { backgroundColor: "white", position: "absolute" },
  notificationArea: null,
  notificationText: null,
  notificationAreaMentioned: null,
  notificationAreaUnread: null,
};
const rect = {
  position: "absolute",
  top: -4,
  right: -4,
  height: 24,
  minWidth: 24,
  paddingHorizontal: 4,
  borderRadius: 12,
  borderWidth: 4,
  borderColor: nativeDefault.unsafe_rawColors.PRIMARY_760,
  alignItems: "center",
  justifyContent: "center",
};
ColorUtils.notificationArea = rect;
ColorUtils.notificationText = { lineHeight: 16 };
ColorUtils = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
ColorUtils.notificationAreaMentioned = ColorUtils;
const createStyles = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
ColorUtils.notificationAreaUnread = createStyles;
createStyles.createStyles(ColorUtils);
let size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/CallBarAction.tsx");

export const SMALL_ACTION_BUTTON_DIMENSIONS = frozen;
export { ActionButton };
export const ToggledActionButton = function ToggledActionButton(showBadge) {
  ({ isActive, disableTint } = showBadge);
  if (disableTint === undefined) {
    disableTint = false;
  }
  let flag = showBadge.showBadge;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = showBadge.isSmallSize;
  if (flag2 === undefined) {
    flag2 = false;
  }
  ({ backgroundColor, tintColor } = showBadge);
  const merged = Object.assign(
    showBadge,
    Object.assign({ isActive: 0, disableTint: 0, showBadge: 0, isSmallSize: 0, backgroundColor: 0, tintColor: 0 }),
  );
  let WHITE = null;
  if (isActive) {
    WHITE = nativeDefault.unsafe_rawColors.WHITE;
  }
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  if (!disableTint) {
    const tmp5 = isActive ? unsafe_rawColors.PRIMARY_900 : unsafe_rawColors.WHITE;
  }
  if (backgroundColor == null) {
    backgroundColor = WHITE;
  }
  const obj = { backgroundColor, imageStyle: null, accessibilityState: null, isSmallSize: null };
  let tmp8 = tintColor;
  if (tintColor == null) {
    tmp8 = tmp5;
  }
  obj.imageStyle = { tintColor: tmp8 };
  obj.accessibilityState = { selected: isActive };
  obj.isSmallSize = flag2;
  const merged1 = Object.assign(merged);
  obj.showBadge = flag;
  if (tintColor == null) {
    tintColor = tmp5;
  }
  obj.lottieComponentColor = tintColor;
  return React5(ActionButton, obj);
};
export const PrimaryActionButton = function PrimaryActionButton(isSmallSize) {
  let flag = isSmallSize.isSmallSize;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(isSmallSize, Object.assign({ isSmallSize: 0 }));
  let obj = { backgroundColor: nativeDefault.unsafe_rawColors.RED_400, imageStyle: null, isSmallSize: null };
  obj = { tintColor: nativeDefault.unsafe_rawColors.WHITE };
  obj.imageStyle = obj;
  obj.isSmallSize = flag;
  const merged1 = Object.assign(merged);
  return React5(ActionButton, obj);
};
export const NotifiedActionButton = function NotifiedActionButton(isMentioned) {
  isMentioned = isMentioned.isMentioned;
  const merged = Object.assign(isMentioned, Object.assign({ notifications: 0, isMentioned: 0 }));
  const tmp2 = closure_13();
  let obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.notificationArea];
  if (true !== isMentioned) {
    if (undefined !== isMentioned) {
      let notificationAreaMentioned = tmp2.notificationAreaUnread;
    }
    obj = { children: null };
    obj = { style: null, children: null };
    items[1] = notificationAreaMentioned;
    obj.style = items;
    const obj1 = {
      style: tmp2.notificationText,
      variant: "text-xs/semibold",
      color: "text-overlay-light",
      children: isMentioned.notifications,
    };
    obj.children = React5(Text_Text.Text, obj1);
    obj.children = React5(hasOwnProperty, obj);
    obj.children = React5(ActionButton, obj);
    return React5(hasOwnProperty, obj);
  }
  notificationAreaMentioned = tmp2.notificationAreaMentioned;
};

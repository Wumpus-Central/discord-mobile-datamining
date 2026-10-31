// discord_app/modules/video_calls/native/components/CallBarAction.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
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
    tmp = closure_12();
    tmp2 = closure_1;
    tmp3 = closure_2;
    num = 12;
    if (flag2) {
      tmp5 = closure_11;
      num = 12;
      if (tmp4 < closure_11) {
        num = 6;
      }
    }
    tmp6 = flag2 ? closure_10 : closure_9;
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
    obj1 = { style: items, children: null };
    items[2] = { opacity: num2 };
    obj12 = {
      circleRadius: tmp6.buttonRadius,
      cutoutRadius: sum,
      enableCutout: showBadge,
      cutoutPositionInDegrees: 45,
      circleFillColor: null,
    };
    tmp2Result = tmp2(tmp3[9]);
    if (null == backgroundColor) {
      backgroundColor = closure_8;
    }
    obj12.circleFillColor = backgroundColor;
    items1 = [, , ,];
    items1[0] = tmp10(tmp2Result, obj12);
    obj13 = { style: null, children: null };
    items2 = [,];
    items2[0] = tmp.iconContainer;
    items2[1] = { width: result, height: result };
    obj13.style = items2;
    if (null != lottieComponent) {
      tmp16 = closure_3;
      obj14 = { color: null };
      obj14.color = lottieComponentColor;
      cloneElementResult = closure_3.cloneElement(lottieComponent, obj14);
    } else if (null != IconComponent) {
      obj15 = { style: null };
      obj15.style = imageStyle;
      cloneElementResult = tmp10(IconComponent, obj15);
    } else {
      obj16 = { source: null, style: null };
      obj16.source = source;
      obj16.style = imageStyle;
      cloneElementResult = tmp10(tmp2(tmp3[10]), obj16);
    }
    obj13.children = cloneElementResult;
    items1[1] = tmp10(tmp13, obj13);
    tmp10Result = null;
    if (showBadge) {
      obj17 = { style: null };
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
      obj17.style = items3;
      tmp10Result = tmp10(tmp13, obj17);
    }
    items1[2] = tmp10Result;
    items1[3] = children;
    obj1.children = items1;
    obj.children = tmp12(tmp13, obj1);
    return tmp10(onPress(tmp3[8]).PressableOpacity, obj);
  }
}
const View = fn(17).View;
const resetFocusTimer = fn(11000).resetFocusTimer;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ColorUtils = fn(5011);
let closure_8 = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.24);
let closure_9 = Object.freeze({ buttonRadius: 28, badgeRadius: 6, cutoutInset: 3 });
const frozen = Object.freeze({ buttonRadius: 24, badgeRadius: 4, cutoutInset: 2 });
let closure_11 = 24 + 2 * frozen.buttonRadius * 5 + 96;
const createStyles = fn(5014);
let obj3 = {
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
obj3.notificationArea = rect;
obj3.notificationText = { lineHeight: 16 };
obj3.notificationAreaMentioned = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
let obj4 = { backgroundColor: nativeDefault.colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
obj3.notificationAreaUnread = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_600 };
let closure_12 = createStyles.createStyles(obj3);
let size = fn(2);
let result = size.fileFinishedImporting("modules/video_calls/native/components/CallBarAction.tsx");

export const SMALL_ACTION_BUTTON_DIMENSIONS = frozen;
export { ActionButton };
export function ToggledActionButton(showBadge) {
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
  return timestampProducer(ActionButton, obj);
}
export function PrimaryActionButton(isSmallSize) {
  let flag = isSmallSize.isSmallSize;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(isSmallSize, Object.assign({ isSmallSize: 0 }));
  const obj = {
    backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
    imageStyle: { tintColor: nativeDefault.unsafe_rawColors.WHITE },
    isSmallSize: flag,
  };
  const merged1 = Object.assign(merged);
  return timestampProducer(ActionButton, obj);
}
export function NotifiedActionButton(isMentioned) {
  isMentioned = isMentioned.isMentioned;
  const merged = Object.assign(isMentioned, Object.assign({ notifications: 0, isMentioned: 0 }));
  const tmp2 = closure_12();
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.notificationArea];
  if (true !== isMentioned) {
    if (undefined !== isMentioned) {
      let notificationAreaMentioned = tmp2.notificationAreaUnread;
    }
    const obj2 = { children: null };
    const obj3 = { style: null, children: null };
    items[1] = notificationAreaMentioned;
    obj3.style = items;
    const obj4 = {
      style: tmp2.notificationText,
      variant: "text-xs/semibold",
      color: "text-overlay-light",
      children: isMentioned.notifications,
    };
    obj3.children = timestampProducer(Text_Text.Text, obj4);
    obj.children = timestampProducer(View, obj3);
    obj2.children = timestampProducer(ActionButton, obj);
    return timestampProducer(View, obj2);
  }
  notificationAreaMentioned = tmp2.notificationAreaMentioned;
}

// discord_app/modules/video_calls/native/components/CallBarAction.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { resetFocusTimer } from "VoiceChatDrawerState";
import jsxProd from "jsxProd";
import hexToRgba from "hexToRgba";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
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
    tmp = buttonRadius();
    tmp3 = closure_2;
    tmp2 = closure_1;
    num = 12;
    if (flag2) {
      tmp5 = c12;
      num = 12;
      if (tmp4 < c12) {
        num = 6;
      }
    }
    tmp6 = flag2 ? closure_11 : WHITE;
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
            outer1_6();
            callback();
          },
      disabled: false,
      style: obj,
      children: null
    };
    obj = { width: result, height: result, borderRadius: tmp6.buttonRadius, marginHorizontal: num };
    tmp13 = View;
    items = [, , ];
    items[0] = tmp.buttonContainer;
    items[1] = { width: result, height: result, borderRadius: tmp6.buttonRadius };
    num2 = 1;
    tmp12 = jsxs;
    if (flag) {
      num2 = 0.25;
    }
    obj1 = { style: items, children: null };
    items[2] = { opacity: num2 };
    obj2 = { circleRadius: tmp6.buttonRadius, cutoutRadius: sum, enableCutout: showBadge, cutoutPositionInDegrees: 45, circleFillColor: null };
    tmp2Result = require("CircleWithCutout");
    if (null == backgroundColor) {
      backgroundColor = WHITE;
    }
    obj2[4] = backgroundColor;
    items1 = [, , , ];
    items1[0] = tmp10(tmp2Result, obj2);
    obj3 = { style: items2, children: null };
    items2 = [, ];
    items2[0] = tmp.iconContainer;
    items2[1] = { width: result, height: result };
    if (null != lottieComponent) {
      tmp17 = noop;
      obj4 = { color: null };
      obj4[0] = lottieComponentColor;
      cloneElementResult = noop.cloneElement(lottieComponent, obj4);
    } else if (null != IconComponent) {
      obj5 = { style: null };
      obj5[0] = imageStyle;
      cloneElementResult = tmp10(IconComponent, obj5);
    } else {
      tmp15 = Image;
      obj6 = { source: null, style: null };
      obj6[0] = source;
      obj6[1] = imageStyle;
      cloneElementResult = tmp10(Image, obj6);
    }
    obj3[1] = cloneElementResult;
    items1[1] = tmp10(tmp13, obj3);
    tmp10Result = null;
    if (showBadge) {
      obj7 = { style: null };
      items3 = [, ];
      items3[0] = tmp.badge;
      obj8 = { width: null, height: null, borderRadius: null, top: null, left: null };
      obj8[0] = result1;
      obj8[1] = result1;
      obj8[2] = tmp6.badgeRadius;
      tmp11Result = require("CircleWithCutout");
      num3 = 45;
      obj8[3] = tmp11Result.getBadgeTop(tmp6.badgeRadius, tmp6.buttonRadius, 45);
      tmp11Result1 = require("CircleWithCutout");
      obj8[4] = tmp11Result1.getBadgeLeft(tmp6.badgeRadius, tmp6.buttonRadius, 45);
      items3[1] = obj8;
      obj7[0] = items3;
      tmp10Result = tmp10(tmp13, obj7);
    }
    items1[2] = tmp10Result;
    items1[3] = children;
    obj1[1] = items1;
    obj[6] = tmp12(tmp13, obj1);
    return tmp10(require("PressableBase").PressableOpacity, obj);
  }
}
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = hexToRgba.hexWithOpacity(require("Themes").unsafe_rawColors.WHITE, 0.24);
let closure_10 = Object.freeze({ buttonRadius: 28, badgeRadius: 6, cutoutInset: 3 });
const frozen = Object.freeze({ buttonRadius: 24, badgeRadius: 4, cutoutInset: 2 });
let closure_12 = 24 + 2 * frozen.buttonRadius * 5 + 96;
hexToRgba = { buttonContainer: { position: "absolute" }, iconContainer: { position: "absolute", justifyContent: "center", alignItems: "center" }, badge: { backgroundColor: "white", position: "absolute" }, notificationArea: null, notificationText: null, notificationAreaMentioned: null, notificationAreaUnread: null };
hexToRgba = { position: "absolute", top: -4, right: -4, height: 24, minWidth: 24, paddingHorizontal: 4, borderRadius: 12, borderWidth: 4, borderColor: require("Themes").unsafe_rawColors.PRIMARY_760, alignItems: "center", justifyContent: "center" };
hexToRgba[3] = hexToRgba;
hexToRgba[4] = { lineHeight: 16 };
createCacheKey = { backgroundColor: require("Themes").colors.CONTROL_CRITICAL_PRIMARY_BACKGROUND_DEFAULT };
hexToRgba[5] = createCacheKey;
hexToRgba[6] = { backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_600 };
hexToRgba = createCacheKey.createStyles(hexToRgba);
let obj2 = { backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_600 };
let result = require("VoiceChatDrawerState").fileFinishedImporting("modules/video_calls/native/components/CallBarAction.tsx");

export const SMALL_ACTION_BUTTON_DIMENSIONS = frozen;
export { ActionButton };
export const ToggledActionButton = function ToggledActionButton(showBadge) {
  let backgroundColor;
  let disableTint;
  let isActive;
  let tintColor;
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
  const merged = Object.assign(showBadge, Object.create(null));
  let WHITE = null;
  if (isActive) {
    WHITE = Themes.unsafe_rawColors.WHITE;
  }
  const unsafe_rawColors = Themes.unsafe_rawColors;
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
  obj[1] = { tintColor: tmp8 };
  obj[2] = { selected: isActive };
  obj[3] = flag2;
  const merged1 = Object.assign(merged);
  obj.showBadge = flag;
  if (tintColor == null) {
    tintColor = tmp5;
  }
  obj.lottieComponentColor = tintColor;
  return closure_7(ActionButton, obj);
};
export const PrimaryActionButton = function PrimaryActionButton(isSmallSize) {
  let flag = isSmallSize.isSmallSize;
  if (flag === undefined) {
    flag = false;
  }
  const merged = Object.assign(isSmallSize, Object.create(null));
  let obj = { backgroundColor: Themes.unsafe_rawColors.RED_400, imageStyle: null, isSmallSize: null };
  obj = { tintColor: Themes.unsafe_rawColors.WHITE };
  obj[1] = obj;
  obj[2] = flag;
  const merged1 = Object.assign(merged);
  return callback(ActionButton, obj);
};
export const NotifiedActionButton = function NotifiedActionButton(isMentioned) {
  isMentioned = isMentioned.isMentioned;
  const merged = Object.assign(isMentioned, Object.create(null));
  const tmp2 = hexToRgba();
  let obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.notificationArea, ];
  if (true !== isMentioned) {
    if (undefined !== isMentioned) {
      let notificationAreaMentioned = tmp2.notificationAreaUnread;
    }
    obj = { children: null };
    obj = { style: null, children: null };
    items[1] = notificationAreaMentioned;
    obj[0] = items;
    const obj1 = { style: null, variant: "text-xs/semibold", color: "text-overlay-light", children: null };
    obj1[0] = tmp2.notificationText;
    obj1[3] = isMentioned.notifications;
    obj[1] = tmp3(Text.Text, obj1);
    obj.children = tmp3(tmp4, obj);
    obj[0] = tmp3(ActionButton, obj);
    return tmp3(tmp4, obj);
  }
  notificationAreaMentioned = tmp2.notificationAreaMentioned;
};
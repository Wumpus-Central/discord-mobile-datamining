// === Module 8374: RowButtonWrapper ===

// Module 8374 (RowButtonWrapper)
import ThemesDefault from "Themes" /* 709 */;
import TableRowInner from "TableRowInner" /* 5607 */;
import TableRowIcon from "TableRowIcon" /* 5613 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
class RowButton {
  constructor(arg0) {
    flag = global.arrow;
    if (flag === undefined) {
      flag = true;
    }
    flag2 = global.disabled;
    if (flag2 === undefined) {
      flag2 = false;
    }
    str = global.variant;
    if (str === undefined) {
      str = "secondary";
    }
    ({ icon, experimental_withBlurBackground } = global);
    merged = Object.assign(global, Object.create(null));
    tmp2 = icon;
    if (null != icon) {
      tmp3 = closure_3;
      tmp2 = icon;
      if (!closure_3.isValidElement(icon)) {
        str2 = "translucent";
        if (!experimental_withBlurBackground) {
          str3 = "secondary";
          str4 = "primary";
          if ("primary" === str) {
            str3 = "default";
          }
          str2 = str3;
        }
        tmp4 = jsx;
        tmp5 = closure_0;
        tmp6 = closure_2;
        obj = { source: null, variant: null };
        obj[0] = icon;
        obj[1] = str2;
        tmp2 = jsx(require("TableRowIcon").TableRowIcon, obj);
      }
    }
    obj = { experimental_withBlurBackground, onPress: global.onPress, disabled: flag2 };
    merged1 = Object.assign(merged);
    obj1 = { icon: tmp2, arrow: flag, disabled: flag2, borderRadius: require("Themes").radii.xl };
    merged2 = Object.assign(merged);
    obj.children = jsx(require("TableRowInner").TableRowInner, obj1);
    return jsx(RowButtonWrapper, obj);
  }
}
function RowButtonWrapper(experimental_withBlurBackground) {
  ({ onPress, disabled, children } = experimental_withBlurBackground);
  const merged = Object.assign(experimental_withBlurBackground, Object.create(null));
  let sharedValue;
  dependencyMap = undefined;
  let React;
  const tmp2 = callback();
  let obj = merged(4217);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  dependencyMap = React.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const items1 = [sharedValue];
  React = React.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  if (experimental_withBlurBackground.experimental_withBlurBackground) {
    obj = { shadow: "none", border: "none", start: true, end: true, onPress: null, onPressIn: null, onPressOut: null, style: null, disabled: null };
    obj[4] = onPress;
    obj[5] = function onPressIn(arg0) {
      const onPressIn = merged.onPressIn;
      if (onPressIn != null) {
        onPressIn(arg0);
      }
      callback();
    };
    obj[6] = function onPressOut(arg0) {
      const onPressOut = merged.onPressOut;
      if (onPressOut != null) {
        onPressOut(arg0);
      }
      callback2();
    };
    const items2 = [, ];
    ({ card: arr3[0], cardWithBlur: arr3[1] } = tmp2);
    obj[7] = items2;
    obj[8] = disabled;
    const merged1 = Object.assign(merged);
    obj.variant = "transparent";
    obj = { pressed: null, children: null };
    obj[0] = sharedValue;
    obj[1] = children;
    obj.children = tmp6(merged(8375).BackgroundBlurView, obj);
    obj1 = obj;
  } else {
    obj1 = { shadow: "low", start: true, end: true, onPress: null, style: null, disabled: null };
    obj1[3] = onPress;
    obj1[4] = tmp2.card;
    obj1[5] = disabled;
    const merged2 = Object.assign(merged);
    obj1.variant = "control-secondary";
    obj1.border = "control-secondary";
    obj1.children = children;
  }
  return jsx(merged(5609).InternalCard, obj1);
}
let closure_5 = createCacheKey.createStyles(() => {
  let obj = { card: null, cardWithBlur: null };
  obj = { padding: "y", borderTopStartRadius: "column", borderTopEndRadius: "hidden", borderBottomStartRadius: "BULK_ACK", borderBottomEndRadius: null };
  obj[1] = ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS;
  obj[2] = ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS;
  obj[3] = ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS;
  obj[4] = ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS;
  obj[0] = obj;
  obj[1] = { overflow: "hidden" };
  return obj;
});
RowButton.Icon = require("TableRowIcon").TableRowIcon;
let result = require("set").fileFinishedImporting("design/components/TableRow/native/RowButton.native.tsx");

export const RowButtonIconProps = require("TableRowIcon").TableRowIconProps;
export { RowButton };
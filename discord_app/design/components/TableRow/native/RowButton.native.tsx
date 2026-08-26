// === Module 8188: RowButtonWrapper ===

// Module 8188 (RowButtonWrapper)
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import TableRowInner from "TableRowInner" /* 5546 */;
import TableRowIcon from "TableRowIcon" /* 5552 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

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
    tmp3 = closure_2;
    tmp2 = closure_1;
    tmp4 = require("useIsMobileVisualRefreshExperimentEnabled")("RowButton");
    tmp5 = icon;
    if (null != icon) {
      tmp6 = closure_3;
      tmp5 = icon;
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
        tmp7 = jsx;
        tmp8 = closure_0;
        obj = { source: null, variant: null };
        obj[0] = icon;
        obj[1] = str2;
        tmp5 = jsx(require("TableRowIcon").TableRowIcon, obj);
      }
    }
    tmp9 = jsx;
    obj = { isRefreshEnabled: tmp4, experimental_withBlurBackground, onPress: global.onPress, disabled: flag2 };
    tmp10 = RowButtonWrapper;
    merged1 = Object.assign(merged);
    obj1 = { icon: tmp5, arrow: flag, disabled: flag2, borderRadius: null };
    xl = undefined;
    if (tmp4) {
      xl = require("Themes").radii.xl;
    }
    obj1[3] = xl;
    merged2 = Object.assign(merged);
    obj.children = tmp9(require("TableRowInner").TableRowInner, obj1);
    return tmp9(tmp10, obj);
  }
}
function RowButtonWrapper(isRefreshEnabled) {
  let flag = isRefreshEnabled.isRefreshEnabled;
  if (flag === undefined) {
    flag = false;
  }
  ({ onPress, disabled, children } = isRefreshEnabled);
  const merged = Object.assign(isRefreshEnabled, Object.create(null));
  let sharedValue;
  dependencyMap = undefined;
  let React;
  const tmp2 = callback(flag);
  let obj = merged(4184);
  sharedValue = obj.useSharedValue(0);
  const items = [sharedValue];
  dependencyMap = React.useCallback(() => {
    const result = sharedValue.set(1);
  }, items);
  const items1 = [sharedValue];
  React = React.useCallback(() => {
    const result = sharedValue.set(0);
  }, items1);
  if (isRefreshEnabled.experimental_withBlurBackground) {
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
    obj.children = jsx(tmp3(8189).BackgroundBlurView, { pressed: null, children: null });
    return jsx(tmp3(5548).InternalCard, { pressed: null, children: null });
  } else {
    let str = "subtle";
    if (flag) {
      str = "control-secondary";
    }
    let str2 = "control-secondary";
    if (!flag) {
      let variant;
      if (merged != null) {
        variant = merged.variant;
      }
      str2 = variant;
    }
    obj1 = { shadow: "low", start: true, end: true, onPress: null, style: null, disabled: null };
    obj1[3] = onPress;
    obj1[4] = tmp2.card;
    obj1[5] = disabled;
    const merged2 = Object.assign(merged);
    obj1.variant = str2;
    obj1.border = str;
    obj1.children = children;
    return jsx(tmp3(5548).InternalCard, { shadow: "low", start: true, end: true, onPress: null, style: null, disabled: null });
  }
}
let closure_5 = createCacheKey.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = { card: null, cardWithBlur: null };
  obj = { padding: num, borderTopStartRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderTopEndRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderBottomStartRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderBottomEndRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS };
  obj[0] = obj;
  obj[1] = { overflow: "hidden" };
  return obj;
});
RowButton.Icon = require("TableRowIcon").TableRowIcon;
let result = require("set").fileFinishedImporting("design/components/TableRow/native/RowButton.native.tsx");

export const RowButtonIconProps = require("TableRowIcon").TableRowIconProps;
export { RowButton };
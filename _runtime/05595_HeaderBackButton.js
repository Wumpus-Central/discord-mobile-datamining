import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let I18nManager;
let Platform;
let StyleSheet;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ Animated: c5, I18nManager, Image: closure_6, StyleSheet, View: error, Platform } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let obj = { borderless: true, foreground: Platform.Version >= 23, radius: 20 };
obj = { container: obj, disabled: { opacity: 0.5 }, label: { fontSize: 17, letterSpacing: 0.35 }, labelWrapper: { flexDirection: "row", alignItems: "flex-start" }, icon: null, iconWithLabel: null, iconMaskContainer: null, iconMaskFillerRect: null, iconMask: null };
obj = { alignItems: "center", flexDirection: "row", minWidth: StyleSheet.hairlineWidth, marginVertical: 3, marginHorizontal: 11 };
let num = 1;
let num2 = 1;
if (I18nManager.getConstants().isRTL) {
  num2 = -1;
}
let items = [{ scaleX: num2 }];
obj[4] = { height: 24, width: 24, margin: 3, resizeMode: "contain", transform: items };
obj[5] = {};
obj[6] = { flex: 1, flexDirection: "row", justifyContent: "center" };
obj[7] = { flex: 1, backgroundColor: "#000" };
if (I18nManager.getConstants().isRTL) {
  num = -1;
}
let items1 = [{ scaleX: num }];
obj[8] = { height: 21, width: 13, marginLeft: -14.5, marginVertical: 12, alignSelf: "center", resizeMode: "contain", transform: items1 };
const styles = StyleSheet.create(obj);

export default function HeaderBackButton(accessibilityLabel) {
  let allowFontScaling;
  let backImage;
  let c2;
  let disabled;
  let importDefault;
  let label;
  let labelStyle;
  let labelVisible;
  let pressColor;
  let pressOpacity;
  let require;
  let screenLayout;
  let style;
  let testID;
  let tintColor;
  let titleLayout;
  let tmp6;
  let truncatedLabel;
  ({ disabled, backImage, label, labelVisible } = accessibilityLabel);
  ({ allowFontScaling, labelStyle } = accessibilityLabel);
  if (labelVisible === undefined) {
    labelVisible = false;
  }
  ({ onLabelLayout: require, onPress: importDefault, screenLayout, tintColor, titleLayout, truncatedLabel, pressColor, pressOpacity } = accessibilityLabel);
  if (truncatedLabel === undefined) {
    truncatedLabel = "Back";
  }
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  if (accessibilityLabel === undefined) {
    let str2 = "Go back";
    if (label) {
      str2 = "Go back";
      if ("Back" !== label) {
        const _HermesInternal = HermesInternal;
        str2 = "" + label + ", back";
      }
    }
    accessibilityLabel = str2;
  }
  let dependencyMap;
  ({ testID, style } = accessibilityLabel);
  let obj = require(1481) /* Link */;
  [tmp6, c2] = callback(React.useState(undefined), 2);
  if (undefined === tintColor) {
    tintColor = obj.useTheme().colors.text;
  }
  obj = { disabled, accessible: true, accessibilityRole: "button", accessibilityLabel, testID, onPress: null, pressColor: null, pressOpacity: null, android_ripple: null, style: null, hitSlop: null, children: null };
  let fn;
  const tmp2 = require;
  const tmp4 = React;
  const tmp5 = callback(React.useState(undefined), 2);
  if (!disabled) {
    fn = () => {
      let animationFrame = closure_1;
      if (closure_1) {
        const _requestAnimationFrame = requestAnimationFrame;
        animationFrame = requestAnimationFrame(tmp);
      }
      return animationFrame;
    };
  }
  obj[5] = fn;
  obj[6] = pressColor;
  obj[7] = pressOpacity;
  obj[8] = obj;
  const items = [container.container, , ];
  if (disabled) {
    disabled = tmp9.disabled;
  }
  items[1] = disabled;
  items[2] = style;
  obj[9] = items;
  obj[10] = { top: 16, right: 16, bottom: 16, left: 16 };
  if (backImage) {
    obj = { tintColor: null };
    obj[0] = tintColor;
    let backImageResult = backImage(obj);
  } else {
    const items1 = [tmp9.icon, , ];
    const _Boolean = Boolean;
    items1[1] = Boolean(labelVisible) && tmp9.iconWithLabel;
    const _Boolean2 = Boolean;
    let BooleanResult = Boolean(tintColor);
    if (BooleanResult) {
      const obj1 = { tintColor: null };
      obj1[0] = tintColor;
      BooleanResult = obj1;
    }
    const obj2 = { style: null, source: null, fadeDuration: 0 };
    items1[2] = BooleanResult;
    obj2[0] = items1;
    obj2[1] = tmp2(5584);
    backImageResult = tmp7(closure_6, obj2);
    const tmp11 = closure_6;
    const tmp13 = Boolean(labelVisible) && tmp9.iconWithLabel;
  }
  const items2 = [backImageResult, ];
  let tmp16 = truncatedLabel;
  if (label) {
    if (tmp6) {
      if (titleLayout) {
        if (screenLayout) {
          tmp16 = truncatedLabel;
        }
      }
    }
    tmp16 = label;
  }
  let tmp7Result = null;
  if (labelVisible) {
    tmp7Result = null;
    if (undefined !== tmp16) {
      let tmp18 = null;
      if (screenLayout) {
        const items3 = [tmp9.labelWrapper, ];
        const obj3 = { minWidth: null };
        obj3[0] = screenLayout.width / 2 - 27;
        items3[1] = obj3;
        tmp18 = items3;
      }
      const obj4 = { style: null, children: null };
      obj4[0] = tmp18;
      let handleLabelLayout;
      if (tmp16 === label) {
        handleLabelLayout = function handleLabelLayout(nativeEvent) {
          if (closure_0 != null) {
            tmp(nativeEvent);
          }
          _undefined(nativeEvent.nativeEvent.layout.x + nativeEvent.nativeEvent.layout.width);
        };
      }
      const obj5 = { accessible: false, onLayout: null, style: null, numberOfLines: 1, allowFontScaling: null, children: null };
      obj5[1] = handleLabelLayout;
      const items4 = [tmp9.label, , ];
      let tmp20 = null;
      if (tintColor) {
        const obj6 = { color: null };
        obj6[0] = tintColor;
        tmp20 = obj6;
      }
      items4[1] = tmp20;
      items4[2] = labelStyle;
      obj5[2] = items4;
      obj5[4] = allowFontScaling;
      obj5[5] = tmp16;
      obj4[1] = tmp7(RN.Text, obj5);
      tmp7Result = tmp7(closure_7, obj4);
      const tmp21 = closure_7;
    }
  }
  items2[1] = tmp7Result;
  obj[11] = closure_9(tmp4.Fragment, { children: items2 });
  return closure_8(importDefault(5598), obj);
};
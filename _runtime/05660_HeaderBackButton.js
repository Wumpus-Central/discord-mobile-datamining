// === Module 5660: HeaderBackButton ===

// Module 5660 (HeaderBackButton)
import Link from "Link" /* 1484 */;
import _modDef5632 from "module_5632" /* 5632 */;
import HeaderButton from "HeaderButton" /* 5666 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Animated: hasOwnProperty, Image, Platform, StyleSheet, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 24;
let obj = { container: { paddingHorizontal: 0, minWidth: StyleSheet.hairlineWidth, marginVertical: 3, marginHorizontal: 11 }, label: { fontSize: 17, letterSpacing: 0.35 }, labelWrapper: null, icon: null, iconWithLabel: null, iconMaskContainer: null, iconMaskFillerRect: null, iconMask: null, flip: null };
obj = { flexDirection: "row", alignItems: "flex-start", marginEnd: fn(5661).ICON_MARGIN };
obj.labelWrapper = obj;
obj.icon = { width: 24, marginEnd: 3 };
obj.iconWithLabel = {};
obj.iconMaskContainer = { flex: 1, flexDirection: "row", justifyContent: "center" };
obj.iconMaskFillerRect = { flex: 1, backgroundColor: "#000" };
obj.iconMask = { height: 21, width: 13, marginStart: -14.5, marginVertical: 12, alignSelf: "center" };
obj.flip = { transform: "scaleX(-1)" };
const container = StyleSheet.create(obj);

export const HeaderBackButton = function HeaderBackButton(accessibilityLabel) {
  ({ backImage, label, displayMode } = accessibilityLabel);
  ({ disabled, allowFontScaling, labelStyle } = accessibilityLabel);
  if (displayMode === undefined) {
    displayMode = "minimal";
  }
  ({ onPress: require, screenLayout, tintColor, titleLayout, truncatedLabel, onLabelLayout, pressColor, pressOpacity } = accessibilityLabel);
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
  c1 = undefined;
  c2 = undefined;
  ({ testID, style, href } = accessibilityLabel);
  let obj = Link;
  const theme = obj.useTheme();
  ({ colors, fonts } = theme);
  let obj1 = Link;
  const direction = obj1.useLocale().direction;
  [tmp6, c1] = _slicedToArray(noop.useState(null), 2);
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  [tmp8, c2] = _slicedToArray(noop.useState(null), 2);
  obj = {
    disabled,
    href,
    accessibilityLabel,
    testID,
    onPress() {
      if (require) {
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(() => closure_1_0());
      }
    },
    pressColor,
    pressOpacity,
    style: null,
    children: null
  };
  const items = [container.container, style];
  obj.style = items;
  if (backImage) {
    let text = tintColor;
    if (tintColor == null) {
      text = colors.text;
    }
    obj = { tintColor: text };
    let backImageResult = backImage(obj);
  } else {
    obj1 = { source: _modDef5632, tintColor, style: null };
    const items1 = [tmp10.icon, "minimal" !== displayMode && tmp10.iconWithLabel];
    obj1.style = items1;
    backImageResult = tmp9(tmp2(5661).HeaderIcon, obj1);
  }
  const items2 = [backImageResult, ];
  let tmp11Result = null;
  if ("minimal" !== displayMode) {
    let diff = null;
    if (titleLayout) {
      diff = null;
      if (screenLayout) {
        const result = (screenLayout.width - titleLayout.width) / 2;
        diff = result - (c9 + tmp2(5661).ICON_MARGIN);
      }
    }
    let tmp19 = truncatedLabel;
    if ("default" === displayMode) {
      tmp19 = label;
    }
    let tmp20 = tmp19;
    if (diff) {
      tmp20 = tmp19;
      if (tmp6) {
        tmp20 = tmp19;
        if (tmp8) {
          if (diff <= tmp6) {
            let tmp21 = null;
            if (diff > tmp8) {
              tmp21 = truncatedLabel;
            }
            tmp19 = tmp21;
          }
          tmp20 = tmp19;
        }
      }
    }
    const items3 = [fonts.regular, tmp10.label, labelStyle];
    const items4 = [items3, { position: "absolute", top: 0, left: 0, opacity: 0 }];
    const obj2 = { style: tmp10.labelWrapper, children: null };
    let tmp9Result = null;
    if (label) {
      tmp9Result = null;
      if (tmp18) {
        const obj3 = {
          style: items4,
          numberOfLines: 1,
          onLayout(nativeEvent) {
                  return _undefined(nativeEvent.nativeEvent.layout.width);
                },
          children: label
        };
        tmp9Result = tmp9(RN.Text, obj3);
      }
    }
    const items5 = [tmp9Result, , ];
    tmp9Result = null;
    if (truncatedLabel) {
      const obj4 = {
        style: items4,
        numberOfLines: 1,
        onLayout(nativeEvent) {
              return _undefined2(nativeEvent.nativeEvent.layout.width);
            },
        children: truncatedLabel
      };
      tmp9Result = tmp9(RN.Text, obj4);
    }
    items5[1] = tmp9Result;
    let tmp9Result1 = null;
    if (tmp20) {
      const obj5 = { accessible: false, onLayout: onLabelLayout, style: null, numberOfLines: 1, allowFontScaling: null, children: null };
      let tmp29 = null;
      if (tintColor) {
        const obj6 = { color: tintColor };
        tmp29 = obj6;
      }
      const items6 = [tmp29, items3];
      obj5.style = items6;
      obj5.allowFontScaling = allowFontScaling;
      obj5.children = tmp20;
      tmp9Result1 = tmp9(RN.Text, obj5);
    }
    items5[2] = tmp9Result1;
    obj2.children = items5;
    tmp11Result = tmp11(timestampProducer, obj2);
  }
  items2[1] = tmp11Result;
  obj.children = React6(noop.Fragment, { children: items2 });
  return React5(HeaderButton.HeaderButton, obj);
};
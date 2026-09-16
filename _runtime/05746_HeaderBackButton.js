// === Module 5746: HeaderBackButton ===

// Module 5746 (HeaderBackButton)
import Link from "Link" /* 1485 */;
import _modDef5718 from "module_5718" /* 5718 */;
import HeaderIcon from "HeaderIcon" /* 5747 */;
import HeaderButton from "HeaderButton" /* 5752 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Animated: hasOwnProperty, Image, Platform, StyleSheet, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 24;
let obj = { container: { paddingHorizontal: 0, minWidth: StyleSheet.hairlineWidth, marginVertical: 3, marginHorizontal: 11 }, label: { fontSize: 17, letterSpacing: 0.35 }, labelWrapper: { flexDirection: "row", alignItems: "flex-start", marginEnd: fn(5747).ICON_MARGIN }, icon: { width: 24, marginEnd: 3 }, iconWithLabel: {}, iconMaskContainer: { flex: 1, flexDirection: "row", justifyContent: "center" }, iconMaskFillerRect: { flex: 1, backgroundColor: "#000" }, iconMask: { height: 21, width: 13, marginStart: -14.5, marginVertical: 12, alignSelf: "center" }, flip: { transform: "scaleX(-1)" } };
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
  const theme = Link.useTheme();
  ({ colors, fonts } = theme);
  const direction = Link.useLocale().direction;
  [tmp6, c1] = noop.useState(null);
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  [tmp8, c2] = noop.useState(null);
  const obj3 = {
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
  obj3.style = items;
  if (backImage) {
    let text = tintColor;
    if (tintColor == null) {
      text = colors.text;
    }
    const obj4 = { tintColor: text };
    let backImageResult = backImage(obj4);
  } else {
    const obj5 = { source: _modDef5718, tintColor, style: null };
    const items1 = [container.icon, "minimal" !== displayMode && container.iconWithLabel];
    obj5.style = items1;
    backImageResult = React5(HeaderIcon.HeaderIcon, obj5);
  }
  const items2 = [backImageResult, ];
  let tmp11Result = null;
  if ("minimal" !== displayMode) {
    let diff = null;
    if (titleLayout) {
      diff = null;
      if (screenLayout) {
        const result = (screenLayout.width - titleLayout.width) / 2;
        diff = result - (c9 + HeaderIcon.ICON_MARGIN);
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
    const items3 = [fonts.regular, container.label, labelStyle];
    const items4 = [items3, { position: "absolute", top: 0, left: 0, opacity: 0 }];
    const obj6 = { style: container.labelWrapper, children: null };
    let tmp9Result = null;
    if (label) {
      tmp9Result = null;
      if (tmp18) {
        const obj7 = {
          style: items4,
          numberOfLines: 1,
          onLayout(nativeEvent) {
                  return _undefined(nativeEvent.nativeEvent.layout.width);
                },
          children: label
        };
        tmp9Result = React5(RN.Text, obj7);
      }
    }
    const items5 = [tmp9Result, , ];
    let tmp9Result3 = null;
    if (truncatedLabel) {
      const obj8 = {
        style: items4,
        numberOfLines: 1,
        onLayout(nativeEvent) {
              return _undefined2(nativeEvent.nativeEvent.layout.width);
            },
        children: truncatedLabel
      };
      tmp9Result3 = React5(RN.Text, obj8);
    }
    items5[1] = tmp9Result3;
    let tmp9Result4 = null;
    if (tmp20) {
      const obj9 = { accessible: false, onLayout: onLabelLayout, style: null, numberOfLines: 1, allowFontScaling: null, children: null };
      let tmp29 = null;
      if (tintColor) {
        const obj10 = { color: tintColor };
        tmp29 = obj10;
      }
      const items6 = [tmp29, items3];
      obj9.style = items6;
      obj9.allowFontScaling = allowFontScaling;
      obj9.children = tmp20;
      tmp9Result4 = React5(RN.Text, obj9);
    }
    items5[2] = tmp9Result4;
    obj6.children = items5;
    tmp11Result = React6(timestampProducer, obj6);
  }
  items2[1] = tmp11Result;
  obj3.children = React6(noop.Fragment, { children: items2 });
  return React5(HeaderButton.HeaderButton, obj3);
};
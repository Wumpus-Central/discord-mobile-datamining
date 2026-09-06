// === Module 5660: HeaderBackButton ===

// Module 5660 (HeaderBackButton)
import createStandardNavigationFactories from "createStandardNavigationFactories" /* 1484 */;
import registerAssetDefault from "registerAsset" /* 5632 */;
import HeaderButton from "HeaderButton" /* 5666 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
({ Animated: c5, Image, Platform, StyleSheet, View: closure_6 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let c9 = 24;
obj = { container: obj, label: { fontSize: 17, letterSpacing: 0.35 }, labelWrapper: null, icon: null, iconWithLabel: null, iconMaskContainer: null, iconMaskFillerRect: null, iconMask: null, flip: null };
obj = { paddingHorizontal: 0, minWidth: StyleSheet.hairlineWidth, marginVertical: 3, marginHorizontal: 11 };
obj = { flexDirection: "row", alignItems: "flex-start", marginEnd: require("HeaderIcon").ICON_MARGIN };
obj[2] = obj;
obj[3] = { width: 24, marginEnd: 3 };
obj[4] = {};
obj[5] = { flex: 1, flexDirection: "row", justifyContent: "center" };
obj[6] = { flex: 1, backgroundColor: "#000" };
obj[7] = { height: 21, width: 13, marginStart: -14.5, marginVertical: 12, alignSelf: "center" };
obj[8] = { transform: "scaleX(-1)" };
const styles = StyleSheet.create(obj);

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
  importDefault = undefined;
  dependencyMap = undefined;
  ({ testID, style, href } = accessibilityLabel);
  let obj = createStandardNavigationFactories;
  const theme = obj.useTheme();
  ({ colors, fonts } = theme);
  obj1 = createStandardNavigationFactories;
  const direction = obj1.useLocale().direction;
  [tmp6, c1] = callback(React.useState(null), 2);
  const tmp5 = callback(React.useState(null), 2);
  [tmp8, c2] = callback(React.useState(null), 2);
  obj = {
    disabled,
    href,
    accessibilityLabel,
    testID,
    onPress() {
      if (closure_0) {
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(() => callback());
      }
    },
    pressColor,
    pressOpacity,
    style: items,
    children: null
  };
  items = [container.container, style];
  if (backImage) {
    let text = tintColor;
    if (tintColor == null) {
      text = colors.text;
    }
    obj = { tintColor: null };
    obj[0] = text;
    let backImageResult = backImage(obj);
  } else {
    obj1 = { source: null, tintColor: null, style: null };
    obj1[0] = registerAssetDefault;
    obj1[1] = tintColor;
    const items1 = [tmp10.icon, "minimal" !== displayMode && tmp10.iconWithLabel];
    obj1[2] = items1;
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
    const obj2 = { style: null, children: null };
    obj2[0] = tmp10.labelWrapper;
    let tmp9Result = null;
    if (label) {
      tmp9Result = null;
      if (tmp18) {
        const obj3 = { style: null, numberOfLines: 1, onLayout: null, children: null };
        obj3[0] = items4;
        obj3[2] = function onLayout(nativeEvent) {
          return _undefined(nativeEvent.nativeEvent.layout.width);
        };
        obj3[3] = label;
        tmp9Result = tmp9(RN.Text, obj3);
      }
    }
    const items5 = [tmp9Result, , ];
    tmp9Result = null;
    if (truncatedLabel) {
      const obj4 = { style: null, numberOfLines: 1, onLayout: null, children: null };
      obj4[0] = items4;
      obj4[2] = function onLayout(nativeEvent) {
        return _undefined2(nativeEvent.nativeEvent.layout.width);
      };
      obj4[3] = truncatedLabel;
      tmp9Result = tmp9(RN.Text, obj4);
    }
    items5[1] = tmp9Result;
    let tmp9Result1 = null;
    if (tmp20) {
      const obj5 = { accessible: false, onLayout: null, style: null, numberOfLines: 1, allowFontScaling: null, children: null };
      obj5[1] = onLabelLayout;
      let tmp29 = null;
      if (tintColor) {
        const obj6 = { color: null };
        obj6[0] = tintColor;
        tmp29 = obj6;
      }
      const items6 = [tmp29, items3];
      obj5[2] = items6;
      obj5[4] = allowFontScaling;
      obj5[5] = tmp20;
      tmp9Result1 = tmp9(RN.Text, obj5);
    }
    items5[2] = tmp9Result1;
    obj2[1] = items5;
    tmp11Result = tmp11(closure_6, obj2);
    const tmp22 = closure_6;
  }
  items2[1] = tmp11Result;
  obj[8] = closure_8(React.Fragment, { children: items2 });
  return closure_7(HeaderButton.HeaderButton, obj);
};
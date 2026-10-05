// _runtime/06048_HeaderBackButton.js
import Link from "01491_Link.js";
import AssetRegistryDefault from "06020_AssetRegistry.js";
import HeaderIcon2 from "06049_HeaderIcon.js";
import HeaderButton2 from "06054_HeaderButton.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import react from "00019_react.js";
import react_native from "00017_react-native.js";
import Fragment_mod from "react/00021_Fragment.js";

let Image;
let Platform;
let StyleSheet;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
({ Animated: hasOwnProperty, Image, Platform, StyleSheet, View: metroRequire } = react_native);
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 24;
let obj = {
  container: { paddingHorizontal: 0, minWidth: StyleSheet.hairlineWidth, marginVertical: 3, marginHorizontal: 11 },
  label: { fontSize: 17, letterSpacing: 0.35 },
  labelWrapper: obj2,
  icon: { width: 24, marginEnd: 3 },
  iconWithLabel: {},
  iconMaskContainer: { flex: 1, flexDirection: "row", justifyContent: "center" },
  iconMaskFillerRect: { flex: 1, backgroundColor: "#000" },
  iconMask: { height: 21, width: 13, marginStart: -14.5, marginVertical: 12, alignSelf: "center" },
  flip: { transform: "scaleX(-1)" },
};
obj2 = { flexDirection: "row", alignItems: "flex-start", marginEnd: HeaderIcon2.ICON_MARGIN };
const container = StyleSheet.create(obj);

export const HeaderBackButton = function HeaderBackButton(accessibilityLabel) {
  let Fragment;
  let allowFontScaling;
  let backImage;
  let backImageResult;
  let c1;
  let c2;
  let closure_129_0;
  let colors;
  let disabled;
  let displayMode;
  let fonts;
  let href;
  let items;
  let items1;
  let items2;
  let items5;
  let items6;
  let label;
  let labelStyle;
  let onLabelLayout;
  let pressColor;
  let pressOpacity;
  let screenLayout;
  let style;
  let testID;
  let tintColor;
  let titleLayout;
  let tmp6;
  let tmp8;
  let truncatedLabel;
  ({ backImage, label, displayMode } = accessibilityLabel);
  ({ disabled, allowFontScaling, labelStyle } = accessibilityLabel);
  if (displayMode === undefined) {
    displayMode = "minimal";
  }
  ({
    onPress: closure_129_0,
    screenLayout,
    tintColor,
    titleLayout,
    truncatedLabel,
    onLabelLayout,
    pressColor,
    pressOpacity,
  } = accessibilityLabel);
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
  const obj = Link;
  const theme = obj.useTheme();
  ({ colors, fonts } = theme);
  const obj2 = Link;
  const direction = obj2.useLocale().direction;
  [tmp6, c1] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  [tmp8, c2] = react.useState(null);
  const obj3 = {
    disabled,
    href,
    accessibilityLabel,
    testID,
    onPress() {
      if (closure_1_0) {
        const _requestAnimationFrame = requestAnimationFrame;
        const animationFrame = requestAnimationFrame(() => closure_1_0());
      }
    },
    pressColor,
    pressOpacity,
    style: items,
    children: metroImportAll(Fragment, { children: items2 }),
  };
  items = [container.container, style];
  _slicedToArray(react.useState(null), 2);
  const HeaderButton = HeaderButton2.HeaderButton;
  Fragment = react.Fragment;
  if (backImage) {
    let text = tintColor;
    if (tintColor == null) {
      text = colors.text;
    }
    const obj4 = { tintColor: text };
    backImageResult = backImage(obj4);
  } else {
    const obj5 = { source: AssetRegistryDefault, tintColor, style: items1 };
    const HeaderIcon = HeaderIcon2.HeaderIcon;
    items1 = [container.icon, "minimal" !== displayMode && container.iconWithLabel];
    backImageResult = metroImportDefault(HeaderIcon, obj5);
  }
  items2 = [backImageResult];
  let tmp11Result = null;
  if ("minimal" !== displayMode) {
    let diff = null;
    if (titleLayout) {
      diff = null;
      if (screenLayout) {
        const result = (screenLayout.width - titleLayout.width) / 2;
        diff = result - (c9 + HeaderIcon2.ICON_MARGIN);
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
    let tmp9Result = null;
    const obj6 = { style: container.labelWrapper, children: items5 };
    if (label) {
      tmp9Result = null;
      if ("default" === displayMode) {
        const obj7 = {
          style: items4,
          numberOfLines: 1,
          onLayout(nativeEvent) {
            return _undefined(nativeEvent.nativeEvent.layout.width);
          },
          children: label,
        };
        tmp9Result = metroImportDefault(hasOwnProperty.Text, obj7);
      }
    }
    items5 = [tmp9Result, ,];
    let tmp9Result3 = null;
    if (truncatedLabel) {
      const obj8 = {
        style: items4,
        numberOfLines: 1,
        onLayout(nativeEvent) {
          return _undefined2(nativeEvent.nativeEvent.layout.width);
        },
        children: truncatedLabel,
      };
      tmp9Result3 = metroImportDefault(hasOwnProperty.Text, obj8);
    }
    items5[1] = tmp9Result3;
    let tmp9Result4 = null;
    if (tmp20) {
      let tmp29 = null;
      const Text = hasOwnProperty.Text;
      const obj9 = {
        accessible: false,
        onLayout: onLabelLayout,
        style: items6,
        numberOfLines: 1,
        allowFontScaling,
        children: tmp20,
      };
      if (tintColor) {
        tmp29 = { color: tintColor };
        const obj10 = { color: tintColor };
      }
      items6 = [tmp29, items3];
      tmp9Result4 = metroImportDefault(Text, obj9);
    }
    items5[2] = tmp9Result4;
    tmp11Result = metroImportAll(metroRequire, obj6);
  }
  items2[1] = tmp11Result;
  return metroImportDefault(HeaderButton, obj3);
};

// _runtime/metro/06049__.js
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _slicedToArray from "00032__slicedToArray.js";
import react from "../00019_react.js";
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";

const require = globalThis.__r;
let navigation, size;

let Platform;
let StyleSheet;
let c10;
let closure_12;
let metroImportDefault;
let unpackModuleId;
let closure_3 = [
  "height",
  "maxHeight",
  "minHeight",
  "backfaceVisibility",
  "backgroundColor",
  "borderBlockColor",
  "borderBlockEndColor",
  "borderBlockStartColor",
  "borderBottomColor",
  "borderBottomEndRadius",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomStartRadius",
  "borderBottomWidth",
  "borderColor",
  "borderCurve",
  "borderEndColor",
  "borderEndEndRadius",
  "borderEndStartRadius",
  "borderEndWidth",
  "borderLeftColor",
  "borderLeftWidth",
  "borderRadius",
  "borderRightColor",
  "borderRightWidth",
  "borderStartColor",
  "borderStartEndRadius",
  "borderStartStartRadius",
  "borderStartWidth",
  "borderStyle",
  "borderTopColor",
  "borderTopEndRadius",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopStartRadius",
  "borderTopWidth",
  "borderWidth",
  "boxShadow",
  "elevation",
  "filter",
  "mixBlendMode",
  "opacity",
  "shadowColor",
  "shadowOffset",
  "shadowOpacity",
  "shadowRadius",
  "transform",
  "transformOrigin",
];
({ Animated: metroImportDefault, Platform, StyleSheet } = react_native);
const View = react_native.View;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const styles = StyleSheet.create({
  content: { flex: 1, flexDirection: "row", alignItems: "stretch" },
  large: { marginHorizontal: 5 },
  title: { justifyContent: "center" },
  start: { flexDirection: "row", alignItems: "center", justifyContent: "flex-start" },
  end: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end" },
  expand: { flexGrow: 1, flexBasis: 0 },
});

export const Header = function Header(layout) {
  let HeaderIcon;
  let View2;
  let back;
  let backfaceVisibility;
  let backgroundColor;
  let borderBlockColor;
  let borderBlockEndColor;
  let borderBlockStartColor;
  let borderBottomColor;
  let borderBottomEndRadius;
  let borderBottomLeftRadius;
  let borderBottomRightRadius;
  let borderBottomStartRadius;
  let borderBottomWidth;
  let borderColor;
  let borderCurve;
  let borderEndColor;
  let borderEndEndRadius;
  let borderEndStartRadius;
  let borderEndWidth;
  let borderLeftColor;
  let borderLeftWidth;
  let borderRadius;
  let borderRightColor;
  let borderRightWidth;
  let borderStartColor;
  let borderStartEndRadius;
  let borderStartStartRadius;
  let borderStartWidth;
  let borderStyle;
  let borderTopColor;
  let borderTopEndRadius;
  let borderTopLeftRadius;
  let borderTopRightRadius;
  let borderTopStartRadius;
  let borderTopWidth;
  let borderWidth;
  let boxShadow;
  let closure_1;
  let elevation;
  let filter;
  let first;
  let goBack;
  let headerBackButtonDisplayMode;
  let headerBackTitleStyle;
  let headerBackground;
  let headerBackgroundContainerStyle;
  let headerBackgroundResult;
  let headerLeftContainerStyle;
  let headerPressColor;
  let headerPressOpacity;
  let headerRight;
  let headerRightContainerStyle;
  let headerSearchBarOptions;
  let headerShadowVisible;
  let headerStatusBarHeight;
  let headerStyle;
  let headerTintColor;
  let headerTitle;
  let headerTitleAlign;
  let headerTitleAllowFontScaling;
  let headerTitleContainerStyle;
  let headerTitleStyle;
  let headerTransparent;
  let href;
  let items;
  let items1;
  let items10;
  let items2;
  let items3;
  let items5;
  let items8;
  let items9;
  let maxHeight;
  let minHeight;
  let mixBlendMode;
  let obj19;
  let obj23;
  let opacity;
  let shadowColor;
  let shadowOffset;
  let shadowOpacity;
  let shadowRadius;
  let title1;
  let tmp7;
  let transform;
  let transformOrigin;
  let obj = require("01621__.js");
  const rect = obj.useSafeAreaInsets();
  const obj2 = require("FrameSizeProvider");
  const frameSize = obj2.useFrameSize((arg0) => arg0, true);
  const obj3 = require("Link");
  const colors = obj3.useTheme().colors;
  const obj4 = require("Link");
  navigation = obj4.useNavigation();
  const context = react.useContext(require("react").HeaderShownContext);
  [tmp7, require] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [first, importDefault] = react.useState(undefined);
  layout = layout.layout;
  const tmp2 = headerSearchBarOptions;
  if (undefined === layout) {
    layout = frameSize;
  }
  const modal = layout.modal;
  const tmp10 = undefined !== modal && modal;
  ({ back, headerTitle, headerTitleAlign } = layout);
  let str = "left";
  const title = layout.title;
  if (undefined !== headerTitleAlign) {
    str = headerTitleAlign;
  }
  let headerLeft = layout.headerLeft;
  if (undefined === headerLeft) {
    let fn;
    if (back) {
      fn = (arg0) => {
        const obj = {};
        const HeaderBackButton = require("HeaderBackButton").HeaderBackButton;
        const merged = Object.assign(arg0);
        return closure_1_10(HeaderBackButton, obj);
      };
    }
    headerLeft = fn;
  }
  headerSearchBarOptions = layout.headerSearchBarOptions;
  ({ headerTransparent, headerTintColor, headerBackground, headerRight, headerBackButtonDisplayMode } = layout);
  let str2 = "minimal";
  ({
    headerTitleAllowFontScaling,
    headerTitleStyle,
    headerLeftContainerStyle,
    headerRightContainerStyle,
    headerTitleContainerStyle,
  } = layout);
  if (undefined !== headerBackButtonDisplayMode) {
    str2 = headerBackButtonDisplayMode;
  }
  ({
    headerStyle,
    headerPressColor,
    headerPressOpacity,
    headerStatusBarHeight,
    headerBackTitleStyle,
    headerBackgroundContainerStyle,
    headerShadowVisible,
  } = layout);
  if (undefined === headerStatusBarHeight) {
    let num = 0;
    if (!context) {
      num = rect.top;
    }
    headerStatusBarHeight = num;
  }
  const tmpResult = require("react-native");
  const defaultHeaderHeight = tmpResult.getDefaultHeaderHeight(layout, tmp10, headerStatusBarHeight);
  const flatten = StyleSheet.flatten;
  if (!headerStyle) {
    headerStyle = {};
  }
  const flattenResult = flatten(headerStyle);
  let height = flattenResult.height;
  if (undefined === height) {
    height = defaultHeaderHeight;
  }
  ({ opacity, transform } = flattenResult);
  ({
    maxHeight,
    minHeight,
    backfaceVisibility,
    backgroundColor,
    borderBlockColor,
    borderBlockEndColor,
    borderBlockStartColor,
    borderBottomColor,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
    borderBottomWidth,
    borderColor,
    borderCurve,
    borderEndColor,
    borderEndEndRadius,
    borderEndStartRadius,
    borderEndWidth,
    borderLeftColor,
    borderLeftWidth,
    borderRadius,
    borderRightColor,
    borderRightWidth,
    borderStartColor,
    borderStartEndRadius,
    borderStartStartRadius,
    borderStartWidth,
    borderStyle,
    borderTopColor,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStartRadius,
    borderTopWidth,
    borderWidth,
    boxShadow,
    elevation,
    filter,
    mixBlendMode,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    transformOrigin,
  } = flattenResult);
  _objectWithoutProperties(flattenResult, closure_3);
  const obj5 = {
    backfaceVisibility,
    backgroundColor,
    borderBlockColor,
    borderBlockEndColor,
    borderBlockStartColor,
    borderBottomColor,
    borderBottomEndRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderBottomStartRadius,
    borderBottomWidth,
    borderColor,
    borderCurve,
    borderEndColor,
    borderEndEndRadius,
    borderEndStartRadius,
    borderEndWidth,
    borderLeftColor,
    borderLeftWidth,
    borderRadius,
    borderRightColor,
    borderRightWidth,
    borderStartColor,
    borderStartEndRadius,
    borderStartStartRadius,
    borderStartWidth,
    borderStyle,
    borderTopColor,
    borderTopEndRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderTopStartRadius,
    borderTopWidth,
    borderWidth,
    boxShadow,
    elevation,
    filter,
    mixBlendMode,
    opacity,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    transform,
    transformOrigin,
  };
  const entries = Object.entries(obj5);
  for (const item10141 of entries) {
    let tmp17 = _slicedToArray(item10141, 2);
    let first1 = tmp17[0];
    if (undefined === tmp17[1]) {
      let _Reflect = Reflect;
      let deletePropertyResult = Reflect.deleteProperty(obj5, first1);
    }
    continue;
  }
  const obj6 = {};
  const tmp21 = headerTransparent && { backgroundColor: "transparent" };
  let merged = Object.assign(tmp21);
  const tmp23 = (headerTransparent || false === headerShadowVisible) && { borderBottomWidth: 0, elevation: 0 };
  const merged1 = Object.assign(tmp23);
  const merged2 = Object.assign(obj5);
  let text = headerTintColor;
  if (headerTintColor == null) {
    text = colors.text;
  }
  let headerLeftResult = null;
  if (headerLeft) {
    const _Boolean = Boolean;
    const obj7 = {
      tintColor: text,
      pressColor: headerPressColor,
      pressOpacity: headerPressOpacity,
      displayMode: str2,
      titleLayout: first,
      screenLayout: layout,
      canGoBack: Boolean(back),
      onPress: goBack,
      label: title1,
      labelStyle: headerBackTitleStyle,
      href,
    };
    goBack = undefined;
    if (back) {
      goBack = navigation.goBack;
    }
    title1 = undefined;
    if (back != null) {
      title1 = back.title;
    }
    href = undefined;
    if (back != null) {
      href = back.href;
    }
    headerLeftResult = headerLeft(obj7);
  }
  let headerRightResult = null;
  if (headerRight) {
    const _Boolean2 = Boolean;
    const obj8 = {
      tintColor: text,
      pressColor: headerPressColor,
      pressOpacity: headerPressOpacity,
      canGoBack: Boolean(back),
    };
    headerRightResult = headerRight(obj8);
  }
  if (typeof headerTitle !== "function") {
    headerTitle = (arg0) => {
      const obj = {};
      const HeaderTitle = require("HeaderTitle").HeaderTitle;
      const merged = Object.assign(arg0);
      return closure_1_10(HeaderTitle, obj);
    };
  }
  const obj9 = { pointerEvents: "box-none", style: items, children: items2 };
  items = [{ height, minHeight, maxHeight, opacity, transform }];
  const obj10 = { pointerEvents: "box-none", style: items1, children: headerBackgroundResult };
  items1 = [StyleSheet.absoluteFill, headerBackgroundContainerStyle];
  ({ View, View: View2 } = RN);
  if (headerBackground) {
    const obj11 = { style: obj6 };
    headerBackgroundResult = headerBackground(obj11);
  } else {
    let str5;
    const HeaderBackground = require("HeaderBackground").HeaderBackground;
    const tmp35 = headerSearchBarOptions;
    if (!headerTransparent) {
      str5 = "auto";
    } else {
      str5 = "none";
      if ("transparent" !== obj6.backgroundColor) {
        require("Color")(obj6.backgroundColor);
        str5 = "none";
      }
    }
    const obj13 = { pointerEvents: str5, style: obj6 };
    headerBackgroundResult = closure_10(HeaderBackground, obj13);
  }
  items2 = [closure_10(View2, obj10), ,];
  const obj14 = { pointerEvents: "none", style: { height: headerStatusBarHeight } };
  items2[1] = closure_10(View, obj14);
  const obj15 = { pointerEvents: "box-none", style: items3, children: items5 };
  items3 = [closure_13.content, null];
  const items4 = [closure_13.start, , ,];
  let expand = !tmp7;
  const View3 = RN.View;
  if (!tmp7) {
    expand = "center" === str;
  }
  if (expand) {
    expand = closure_13.expand;
  }
  items4[1] = expand;
  items4[2] = { marginStart: rect.left };
  items4[3] = headerLeftContainerStyle;
  items5 = [closure_10(View3, { pointerEvents: "box-none", style: items4, children: headerLeftResult }), ,];
  let tmp31Result = null;
  if (!tmp7) {
    let diff;
    const items6 = [closure_13.title, , ,];
    const View4 = RN.View;
    if ("center" === str) {
      let num8;
      let num6 = 16;
      const width2 = layout.width;
      if (headerLeftResult) {
        let num7 = 32;
        if ("minimal" !== str2) {
          num7 = 80;
        }
        num6 = num7;
      }
      if (headerRightResult) {
        num8 = 16;
      } else {
        num8 = 0;
      }
      const _Math = Math;
      diff = width2 - 2 * (num6 + num8 + Math.max(rect.left, rect.right));
    } else {
      let num3 = 16;
      let num4 = 16;
      const width = layout.width;
      if (headerLeftResult) {
        num4 = 52;
      }
      if (headerRightResult) {
        num3 = 52;
      }
      diff = width - (num4 + num3 + rect.left - rect.right);
    }
    const obj16 = { maxWidth: diff };
    items6[1] = obj16;
    if ("left" === str) {
      let obj17;
      if (headerLeftResult) {
        obj17 = { marginStart: 4 };
      }
      items6[2] = obj17;
      items6[3] = headerTitleContainerStyle;
      const obj18 = { pointerEvents: "box-none", style: items6, children: headerTitle(obj19) };
      obj19 = {
        children: title,
        allowFontScaling: headerTitleAllowFontScaling,
        tintColor: headerTintColor,
        onLayout(nativeEvent) {
          let closure_129_0;
          let closure_129_1;
          ({ height: closure_129_0, width: closure_129_1 } = nativeEvent.nativeEvent.layout);
          closure_1((arg0) => {
            size = arg0;
            if (size) {
              return size;
            }
            const size1 = { height, width };
            size = size1;
          });
        },
        style: headerTitleStyle,
      };
      const items7 = [closure_10(View4, obj18)];
      const obj20 = { pointerEvents: "box-none", style: items8, children: items9 };
      items8 = [, , ,];
      ({ end: arr9[0], expand: arr9[1] } = closure_13);
      const obj21 = { marginEnd: rect.right };
      items8[2] = obj21;
      items8[3] = headerRightContainerStyle;
      items9 = [headerRightResult];
      let tmp33Result = null;
      const View5 = RN.View;
      if (headerSearchBarOptions) {
        const obj22 = {
          tintColor: text,
          pressColor: headerPressColor,
          pressOpacity: headerPressOpacity,
          onPress() {
            require(true);
            if (headerSearchBarOptions != null) {
              const onOpen = headerSearchBarOptions.onOpen;
              if (onOpen != null) {
                onOpen();
              }
            }
          },
          children: closure_10(HeaderIcon, obj23),
        };
        const HeaderButton = require("HeaderButton").HeaderButton;
        obj23 = { source: require("AssetRegistry"), tintColor: text };
        HeaderIcon = require("HeaderIcon").HeaderIcon;
        tmp33Result = closure_10(HeaderButton, obj22);
      }
      const obj24 = { children: items7 };
      items9[1] = tmp33Result;
      items7[1] = closure_11(View5, obj20);
      tmp31Result = closure_11(closure_12, obj24);
    }
    obj17 = { marginHorizontal: 16 };
  }
  items5[1] = tmp31Result;
  let tmp33Result2 = null;
  if (tmp7) {
    const obj25 = {
      visible: tmp7,
      onClose() {
        require(false);
        if (headerSearchBarOptions != null) {
          const onClose = headerSearchBarOptions.onClose;
          if (onClose != null) {
            onClose();
          }
        }
      },
      tintColor: headerTintColor,
      style: items10,
    };
    const HeaderSearchBar = require("HeaderSearchBar").HeaderSearchBar;
    const merged3 = Object.assign(headerSearchBarOptions);
    items10 = [];
    const tmp53 = !headerLeftResult && { marginStart: 8 };
    items10[0] = tmp53;
    tmp33Result2 = closure_10(HeaderSearchBar, obj25);
  }
  items5[2] = tmp33Result2;
  items2[2] = closure_11(View, obj15);
  return closure_11(View, obj9);
};

// _runtime/metro/05654__.js
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _slicedToArray from "00032__.js";
import noop from "00019__.js";

const require = fn;
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
get_ActivityIndicator = fn(17);
({ Animated: closure_7, Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const styles = StyleSheet.create({
  content: { flex: 1, flexDirection: "row", alignItems: "stretch" },
  large: { marginHorizontal: 5 },
  title: { justifyContent: "center" },
  start: { flexDirection: "row", alignItems: "center", justifyContent: "flex-start" },
  end: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end" },
  expand: { flexGrow: 1, flexBasis: 0 },
});

export const Header = function Header(layout) {
  let obj = require("01614__.js");
  const rect = obj.useSafeAreaInsets();
  let obj1 = require("FrameSizeProvider");
  const frameSize = obj1.useFrameSize((arg0) => arg0, true);
  let obj2 = require("Link");
  let obj3 = require("Link");
  const navigation = obj3.useNavigation();
  const context = noop.useContext(require("HeaderShownContext").HeaderShownContext);
  [tmp7, require] = _slicedToArray(noop.useState(false), 2);
  const tmp8 = _slicedToArray(noop.useState(undefined), 2);
  importDefault = tmp8[1];
  layout = layout.layout;
  if (undefined === layout) {
    layout = frameSize;
  }
  const modal = layout.modal;
  ({ back, headerTitle, headerTitleAlign } = layout);
  let str = "left";
  if (undefined !== headerTitleAlign) {
    str = headerTitleAlign;
  }
  let headerLeft = layout.headerLeft;
  if (undefined === headerLeft) {
    let fn;
    if (back) {
      fn = (arg0) => {
        const merged = Object.assign(arg0);
        return closure_1_10(require("HeaderBackButton").HeaderBackButton, {});
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
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const tmp9 = undefined !== modal && modal;
  const defaultHeaderHeight = require("05652__.js").getDefaultHeaderHeight(layout, tmp9, headerStatusBarHeight);
  if (!headerStyle) {
    headerStyle = {};
  }
  const flattenResult = StyleSheet.flatten(headerStyle);
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
  obj = {
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
  const entries = Object.entries(obj);
  for (const item10141 of entries) {
    let tmp16 = _slicedToArray(item10141, 2);
    let first = tmp16[0];
    if (undefined === tmp16[1]) {
      let _Reflect = Reflect;
      let deletePropertyResult = Reflect.deleteProperty(obj, first);
    }
    continue;
  }
  obj = headerTransparent;
  if (headerTransparent) {
    obj = { backgroundColor: "transparent" };
  }
  obj1 = {};
  let merged = Object.assign(obj);
  obj2 = headerTransparent;
  if (!headerTransparent) {
    obj2 = false === headerShadowVisible;
  }
  if (obj2) {
    obj2 = { borderBottomWidth: 0, elevation: 0 };
  }
  const merged1 = Object.assign(obj2);
  const merged2 = Object.assign(obj);
  let text = headerTintColor;
  if (headerTintColor == null) {
    text = obj2.useTheme().colors.text;
  }
  let headerLeftResult = null;
  if (headerLeft) {
    obj3 = {
      tintColor: text,
      pressColor: headerPressColor,
      pressOpacity: headerPressOpacity,
      displayMode: str2,
      titleLayout: tmp8[0],
      screenLayout: layout,
      canGoBack: null,
      onPress: null,
      label: null,
      labelStyle: null,
      href: null,
    };
    const _Boolean = Boolean;
    obj3.canGoBack = Boolean(back);
    let goBack;
    if (back) {
      goBack = navigation.goBack;
    }
    obj3.onPress = goBack;
    let title;
    if (back != null) {
      title = back.title;
    }
    obj3.label = title;
    obj3.labelStyle = headerBackTitleStyle;
    let href;
    if (back != null) {
      href = back.href;
    }
    obj3.href = href;
    headerLeftResult = headerLeft(obj3);
  }
  let headerRightResult = null;
  if (headerRight) {
    const obj4 = { tintColor: text, pressColor: headerPressColor, pressOpacity: headerPressOpacity, canGoBack: null };
    const _Boolean2 = Boolean;
    obj4.canGoBack = Boolean(back);
    headerRightResult = headerRight(obj4);
  }
  if (typeof headerTitle !== "function") {
    headerTitle = (arg0) => {
      const merged = Object.assign(arg0);
      return closure_1_10(require("HeaderTitle").HeaderTitle, {});
    };
  }
  const obj5 = { pointerEvents: "box-none", style: null, children: null };
  const items = [{ height, minHeight, maxHeight, opacity, transform }];
  obj5.style = items;
  const obj6 = { pointerEvents: "box-none", style: null, children: null };
  const items1 = [StyleSheet.absoluteFill, headerBackgroundContainerStyle];
  obj6.style = items1;
  ({ View, View: View2 } = RN);
  if (headerBackground) {
    const obj7 = { style: obj1 };
    let headerBackgroundResult = headerBackground(obj7);
  } else {
    if (!headerTransparent) {
      let str5 = "auto";
    } else {
      str5 = "none";
      if ("transparent" !== obj1.backgroundColor) {
        let obj13 = require("Color")(obj1.backgroundColor);
        str5 = "none";
      }
    }
    const obj8 = { pointerEvents: str5, style: obj1 };
    headerBackgroundResult = closure_10(require("HeaderBackground").HeaderBackground, obj8);
    tmp32 = headerSearchBarOptions;
  }
  obj6.children = headerBackgroundResult;
  const items2 = [
    closure_10(View2, obj6),
    closure_10(View, { pointerEvents: "none", style: { height: headerStatusBarHeight } }),
  ];
  const obj10 = { pointerEvents: "box-none", style: null, children: null };
  const items3 = [closure_13.content, null];
  obj10.style = items3;
  const items4 = [closure_13.start, , ,];
  let expand = !tmp7;
  if (!tmp7) {
    expand = "center" === str;
  }
  if (expand) {
    expand = closure_13.expand;
  }
  items4[1] = expand;
  items4[2] = { marginStart: rect.left };
  items4[3] = headerLeftContainerStyle;
  const items5 = [closure_10(RN.View, { pointerEvents: "box-none", style: items4, children: headerLeftResult }), ,];
  let tmp28Result = null;
  if (!tmp7) {
    const items6 = [closure_13.title, , ,];
    if ("center" === str) {
      let num6 = 16;
      if (headerLeftResult) {
        let num7 = 32;
        if ("minimal" !== str2) {
          num7 = 80;
        }
        num6 = num7;
      }
      if (headerRightResult) {
        let num8 = 16;
      } else {
        num8 = 0;
      }
      const _Math = Math;
      let diff = layout.width - 2 * (num6 + num8 + Math.max(rect.left, rect.right));
    } else {
      let num3 = 16;
      let num4 = 16;
      if (headerLeftResult) {
        num4 = 52;
      }
      if (headerRightResult) {
        num3 = 52;
      }
      diff = layout.width - (num4 + num3 + rect.left - rect.right);
    }
    const obj11 = { maxWidth: diff };
    items6[1] = obj11;
    if ("left" === str) {
      if (headerLeftResult) {
        let obj12 = { marginStart: 4 };
      }
      obj13 = { pointerEvents: "box-none", style: null, children: null };
      items6[2] = obj12;
      items6[3] = headerTitleContainerStyle;
      obj13.style = items6;
      const obj14 = {
        children: layout.title,
        allowFontScaling: headerTitleAllowFontScaling,
        tintColor: headerTintColor,
        onLayout(nativeEvent) {
          ({ height: closure_0, width: closure_1 } = nativeEvent.nativeEvent.layout);
          width((arg0) => {
            let size = arg0;
            if (arg0) {
              return size;
            }
            size = { height, width };
          });
        },
        style: headerTitleStyle,
      };
      obj13.children = headerTitle(obj14);
      const items7 = [closure_10(RN.View, obj13)];
      const obj15 = { pointerEvents: "box-none", style: null, children: null };
      const items8 = [, , ,];
      ({ end: arr9[0], expand: arr9[1] } = closure_13);
      const obj16 = { marginEnd: rect.right };
      items8[2] = obj16;
      items8[3] = headerRightContainerStyle;
      obj15.style = items8;
      const items9 = [headerRightResult];
      let tmp30Result = null;
      if (headerSearchBarOptions) {
        const obj17 = {
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
          children: null,
        };
        const obj18 = { source: require("05634__.js"), tintColor: text };
        obj17.children = closure_10(require("HeaderIcon").HeaderIcon, obj18);
        tmp30Result = closure_10(require("HeaderButton").HeaderButton, obj17);
      }
      const obj19 = { children: null };
      items9[1] = tmp30Result;
      obj15.children = items9;
      items7[1] = closure_11(RN.View, obj15);
      obj19.children = items7;
      tmp28Result = closure_11(closure_12, obj19);
    }
    obj12 = { marginHorizontal: 16 };
  }
  items5[1] = tmp28Result;
  tmp30Result = null;
  if (tmp7) {
    const obj20 = {};
    const merged3 = Object.assign(headerSearchBarOptions);
    obj20.visible = tmp7;
    obj20.onClose = function onClose() {
      require(false);
      if (headerSearchBarOptions != null) {
        const onClose = headerSearchBarOptions.onClose;
        if (onClose != null) {
          onClose();
        }
      }
    };
    obj20.tintColor = headerTintColor;
    let obj21 = !headerLeftResult;
    if (!headerLeftResult) {
      obj21 = { marginStart: 8 };
    }
    const items10 = [obj21];
    obj20.style = items10;
    tmp30Result = closure_10(require("HeaderSearchBar").HeaderSearchBar, obj20);
  }
  items5[2] = tmp30Result;
  obj10.children = items5;
  items2[2] = closure_11(View, obj10);
  obj5.children = items2;
  return closure_11(View, obj5);
};

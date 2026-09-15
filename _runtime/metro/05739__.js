// === Module 5739: ? ===

// Module 5739
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["height", "maxHeight", "minHeight", "backfaceVisibility", "backgroundColor", "borderBlockColor", "borderBlockEndColor", "borderBlockStartColor", "borderBottomColor", "borderBottomEndRadius", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomStartRadius", "borderBottomWidth", "borderColor", "borderCurve", "borderEndColor", "borderEndEndRadius", "borderEndStartRadius", "borderEndWidth", "borderLeftColor", "borderLeftWidth", "borderRadius", "borderRightColor", "borderRightWidth", "borderStartColor", "borderStartEndRadius", "borderStartStartRadius", "borderStartWidth", "borderStyle", "borderTopColor", "borderTopEndRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderTopStartRadius", "borderTopWidth", "borderWidth", "boxShadow", "elevation", "filter", "mixBlendMode", "opacity", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "transform", "transformOrigin"];
get_ActivityIndicator = fn(17);
({ Animated: closure_7, Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const styles = StyleSheet.create({ content: { flex: 1, flexDirection: "row", alignItems: "stretch" }, large: { marginHorizontal: 5 }, title: { justifyContent: "center" }, start: { flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }, end: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }, expand: { flexGrow: 1, flexBasis: 0 } });

export const Header = function Header(layout) {
  const rect = require("module_1615").useSafeAreaInsets();
  const obj = require("module_1615");
  const tmp2 = headerSearchBarOptions;
  const frameSize = require("FrameSizeProvider").useFrameSize((arg0) => arg0, true);
  const obj2 = require("FrameSizeProvider");
  const obj3 = require("Link");
  const navigation = require("Link").useNavigation();
  const context = noop.useContext(require("HeaderShownContext").HeaderShownContext);
  const obj4 = require("Link");
  [tmp7, require] = noop.useState(false);
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
  ({ headerTitleAllowFontScaling, headerTitleStyle, headerLeftContainerStyle, headerRightContainerStyle, headerTitleContainerStyle } = layout);
  if (undefined !== headerBackButtonDisplayMode) {
    str2 = headerBackButtonDisplayMode;
  }
  ({ headerStyle, headerPressColor, headerPressOpacity, headerStatusBarHeight, headerBackTitleStyle, headerBackgroundContainerStyle, headerShadowVisible } = layout);
  if (undefined === headerStatusBarHeight) {
    let num = 0;
    if (!context) {
      num = rect.top;
    }
    headerStatusBarHeight = num;
  }
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const tmp9 = undefined !== modal && modal;
  const defaultHeaderHeight = require("module_5737").getDefaultHeaderHeight(layout, tmp9, headerStatusBarHeight);
  if (!headerStyle) {
    headerStyle = {};
  }
  const flattenResult = StyleSheet.flatten(headerStyle);
  let height = flattenResult.height;
  if (undefined === height) {
    height = defaultHeaderHeight;
  }
  ({ opacity, transform } = flattenResult);
  ({ maxHeight, minHeight, backfaceVisibility, backgroundColor, borderBlockColor, borderBlockEndColor, borderBlockStartColor, borderBottomColor, borderBottomEndRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderBottomWidth, borderColor, borderCurve, borderEndColor, borderEndEndRadius, borderEndStartRadius, borderEndWidth, borderLeftColor, borderLeftWidth, borderRadius, borderRightColor, borderRightWidth, borderStartColor, borderStartEndRadius, borderStartStartRadius, borderStartWidth, borderStyle, borderTopColor, borderTopEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, borderTopWidth, borderWidth, boxShadow, elevation, filter, mixBlendMode, shadowColor, shadowOffset, shadowOpacity, shadowRadius, transformOrigin } = flattenResult);
  _objectWithoutProperties(flattenResult, closure_3);
  const obj5 = { backfaceVisibility, backgroundColor, borderBlockColor, borderBlockEndColor, borderBlockStartColor, borderBottomColor, borderBottomEndRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderBottomWidth, borderColor, borderCurve, borderEndColor, borderEndEndRadius, borderEndStartRadius, borderEndWidth, borderLeftColor, borderLeftWidth, borderRadius, borderRightColor, borderRightWidth, borderStartColor, borderStartEndRadius, borderStartStartRadius, borderStartWidth, borderStyle, borderTopColor, borderTopEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, borderTopWidth, borderWidth, boxShadow, elevation, filter, mixBlendMode, opacity, shadowColor, shadowOffset, shadowOpacity, shadowRadius, transform, transformOrigin };
  const entries = Object.entries(obj5);
  for (const item10141 of entries) {
    let tmp16 = _slicedToArray(item10141, 2);
    let first = tmp16[0];
    if (undefined === tmp16[1]) {
      let _Reflect = Reflect;
      let deletePropertyResult = Reflect.deleteProperty(obj5, first);
    }
    continue;
  }
  let obj6 = headerTransparent;
  if (headerTransparent) {
    obj6 = { backgroundColor: "transparent" };
  }
  const obj7 = {};
  let merged = Object.assign(obj6);
  let obj8 = headerTransparent;
  if (!headerTransparent) {
    obj8 = false === headerShadowVisible;
  }
  if (obj8) {
    obj8 = { borderBottomWidth: 0, elevation: 0 };
  }
  const merged1 = Object.assign(obj8);
  const merged2 = Object.assign(obj5);
  let text = headerTintColor;
  if (headerTintColor == null) {
    text = obj3.useTheme().colors.text;
  }
  let headerLeftResult = null;
  if (headerLeft) {
    const obj9 = { tintColor: text, pressColor: headerPressColor, pressOpacity: headerPressOpacity, displayMode: str2, titleLayout: tmp8[0], screenLayout: layout, canGoBack: null, onPress: null, label: null, labelStyle: null, href: null };
    const _Boolean = Boolean;
    obj9.canGoBack = Boolean(back);
    let goBack;
    if (back) {
      goBack = navigation.goBack;
    }
    obj9.onPress = goBack;
    let title;
    if (back != null) {
      title = back.title;
    }
    obj9.label = title;
    obj9.labelStyle = headerBackTitleStyle;
    let href;
    if (back != null) {
      href = back.href;
    }
    obj9.href = href;
    headerLeftResult = headerLeft(obj9);
  }
  let headerRightResult = null;
  if (headerRight) {
    const obj10 = { tintColor: text, pressColor: headerPressColor, pressOpacity: headerPressOpacity, canGoBack: null };
    const _Boolean2 = Boolean;
    obj10.canGoBack = Boolean(back);
    headerRightResult = headerRight(obj10);
  }
  if (typeof headerTitle !== "function") {
    headerTitle = (arg0) => {
      const merged = Object.assign(arg0);
      return closure_1_10(require("HeaderTitle").HeaderTitle, {});
    };
  }
  const obj11 = { pointerEvents: "box-none", style: null, children: null };
  const items = [{ height, minHeight, maxHeight, opacity, transform }];
  obj11.style = items;
  const obj12 = { pointerEvents: "box-none", style: null, children: null };
  const items1 = [StyleSheet.absoluteFill, headerBackgroundContainerStyle];
  obj12.style = items1;
  ({ View, View: View2 } = RN);
  if (headerBackground) {
    const obj13 = { style: obj7 };
    let headerBackgroundResult = headerBackground(obj13);
  } else {
    if (!headerTransparent) {
      let str5 = "auto";
    } else {
      str5 = "none";
      if ("transparent" !== obj7.backgroundColor) {
        require("Color")(obj7.backgroundColor);
        str5 = "none";
      }
    }
    const obj15 = { pointerEvents: str5, style: obj7 };
    headerBackgroundResult = closure_10(require("HeaderBackground").HeaderBackground, obj15);
    tmp32 = headerSearchBarOptions;
  }
  obj12.children = headerBackgroundResult;
  const items2 = [closure_10(View2, obj12), closure_10(View, { pointerEvents: "none", style: { height: headerStatusBarHeight } }), ];
  const obj17 = { pointerEvents: "box-none", style: null, children: null };
  const items3 = [closure_13.content, null];
  obj17.style = items3;
  const items4 = [closure_13.start, , , ];
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
  const items5 = [closure_10(RN.View, { pointerEvents: "box-none", style: items4, children: headerLeftResult }), , ];
  let tmp28Result = null;
  if (!tmp7) {
    const items6 = [closure_13.title, , , ];
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
    const obj18 = { maxWidth: diff };
    items6[1] = obj18;
    if ("left" === str) {
      if (headerLeftResult) {
        let obj19 = { marginStart: 4 };
      }
      const obj20 = { pointerEvents: "box-none", style: null, children: null };
      items6[2] = obj19;
      items6[3] = headerTitleContainerStyle;
      obj20.style = items6;
      const obj21 = {
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
                const size1 = { height, width };
                size = size1;
              });
            },
        style: headerTitleStyle
      };
      obj20.children = headerTitle(obj21);
      const items7 = [closure_10(RN.View, obj20), ];
      const obj22 = { pointerEvents: "box-none", style: null, children: null };
      const items8 = [, , , ];
      ({ end: arr9[0], expand: arr9[1] } = closure_13);
      const obj23 = { marginEnd: rect.right };
      items8[2] = obj23;
      items8[3] = headerRightContainerStyle;
      obj22.style = items8;
      const items9 = [headerRightResult, ];
      let tmp30Result = null;
      if (headerSearchBarOptions) {
        const obj24 = {
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
          children: null
        };
        const obj25 = { source: require("module_5719"), tintColor: text };
        obj24.children = closure_10(require("HeaderIcon").HeaderIcon, obj25);
        tmp30Result = closure_10(require("HeaderButton").HeaderButton, obj24);
      }
      const obj26 = { children: null };
      items9[1] = tmp30Result;
      obj22.children = items9;
      items7[1] = closure_11(RN.View, obj22);
      obj26.children = items7;
      tmp28Result = closure_11(closure_12, obj26);
    }
    obj19 = { marginHorizontal: 16 };
  }
  items5[1] = tmp28Result;
  let tmp30Result2 = null;
  if (tmp7) {
    const obj27 = {};
    const merged3 = Object.assign(headerSearchBarOptions);
    obj27.visible = tmp7;
    obj27.onClose = function onClose() {
      require(false);
      if (headerSearchBarOptions != null) {
        const onClose = headerSearchBarOptions.onClose;
        if (onClose != null) {
          onClose();
        }
      }
    };
    obj27.tintColor = headerTintColor;
    let obj28 = !headerLeftResult;
    if (!headerLeftResult) {
      obj28 = { marginStart: 8 };
    }
    const items10 = [obj28];
    obj27.style = items10;
    tmp30Result2 = closure_10(require("HeaderSearchBar").HeaderSearchBar, obj27);
  }
  items5[2] = tmp30Result2;
  obj17.children = items5;
  items2[2] = closure_11(View, obj17);
  obj11.children = items2;
  return closure_11(View, obj11);
};
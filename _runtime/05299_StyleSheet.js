// _runtime/05299_StyleSheet.js
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "HeaderSearchBar";
import jsxProd from "jsxProd";

let Platform;
let StyleSheet;
let c10;
let closure_12;
let error;
let unpackModuleId;
const require = arg1;
let closure_3 = ["height", "maxHeight", "minHeight", "backfaceVisibility", "backgroundColor", "borderBlockColor", "borderBlockEndColor", "borderBlockStartColor", "borderBottomColor", "borderBottomEndRadius", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomStartRadius", "borderBottomWidth", "borderColor", "borderCurve", "borderEndColor", "borderEndEndRadius", "borderEndStartRadius", "borderEndWidth", "borderLeftColor", "borderLeftWidth", "borderRadius", "borderRightColor", "borderRightWidth", "borderStartColor", "borderStartEndRadius", "borderStartStartRadius", "borderStartWidth", "borderStyle", "borderTopColor", "borderTopEndRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderTopStartRadius", "borderTopWidth", "borderWidth", "boxShadow", "elevation", "filter", "mixBlendMode", "opacity", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "transform", "transformOrigin"];
({ Animated: error, Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
const styles = StyleSheet.create({ content: { flex: 1, flexDirection: "row", alignItems: "stretch" }, large: { marginHorizontal: 5 }, title: { justifyContent: "center" }, start: { flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }, end: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }, expand: { flexGrow: 1, flexBasis: 0 } });

export const Header = function Header(layout) {
  let View;
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
  let elevation;
  let filter;
  let headerBackButtonDisplayMode;
  let headerBackTitleStyle;
  let headerBackground;
  let headerBackgroundContainerStyle;
  let headerLeftContainerStyle;
  let headerPressColor;
  let headerPressOpacity;
  let headerRight;
  let headerRightContainerStyle;
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
  let maxHeight;
  let minHeight;
  let mixBlendMode;
  let opacity;
  let require;
  let shadowColor;
  let shadowOffset;
  let shadowOpacity;
  let shadowRadius;
  let tmp7;
  let transform;
  let transformOrigin;
  let obj = require(headerSearchBarOptions[5]);
  const rect = obj.useSafeAreaInsets();
  let obj1 = require(headerSearchBarOptions[6]);
  const frameSize = obj1.useFrameSize((arg0) => arg0, true);
  let obj2 = require(headerSearchBarOptions[7]);
  let obj3 = require(headerSearchBarOptions[7]);
  const navigation = obj3.useNavigation();
  const context = React.useContext(require(headerSearchBarOptions[8]).HeaderShownContext);
  [tmp7, require] = callback2(React.useState(false), 2);
  const tmp8 = callback2(React.useState(undefined), 2);
  const importDefault = tmp8[1];
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
        return callback3(callback(headerSearchBarOptions[9]).HeaderBackButton, {});
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
  const tmp = require;
  const tmp2 = headerSearchBarOptions;
  const tmp6 = callback2(React.useState(false), 2);
  const tmp9 = undefined !== modal && modal;
  const defaultHeaderHeight = require(headerSearchBarOptions[10]).getDefaultHeaderHeight(layout, tmp9, headerStatusBarHeight);
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
  callback(flattenResult, closure_3);
  obj = { backfaceVisibility, backgroundColor, borderBlockColor, borderBlockEndColor, borderBlockStartColor, borderBottomColor, borderBottomEndRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderBottomWidth, borderColor, borderCurve, borderEndColor, borderEndEndRadius, borderEndStartRadius, borderEndWidth, borderLeftColor, borderLeftWidth, borderRadius, borderRightColor, borderRightWidth, borderStartColor, borderStartEndRadius, borderStartStartRadius, borderStartWidth, borderStyle, borderTopColor, borderTopEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, borderTopWidth, borderWidth, boxShadow, elevation, filter, mixBlendMode, opacity, shadowColor, shadowOffset, shadowOpacity, shadowRadius, transform, transformOrigin };
  const entries = Object.entries(obj);
  for (const item10141 of entries) {
    let tmp15 = callback2;
    let tmp16 = callback2(item10141, 2);
    let first = tmp16[0];
    if (undefined === tmp16[1]) {
      let _Reflect = Reflect;
      let tmp18 = first;
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
    obj3 = { tintColor: null, pressColor: null, pressOpacity: null, displayMode: null, titleLayout: null, screenLayout: null, canGoBack: null, onPress: null, label: null, labelStyle: null, href: null };
    obj3[0] = text;
    obj3[1] = headerPressColor;
    obj3[2] = headerPressOpacity;
    obj3[3] = str2;
    obj3[4] = tmp8[0];
    obj3[5] = layout;
    const _Boolean = Boolean;
    obj3[6] = Boolean(back);
    let goBack;
    if (back) {
      goBack = navigation.goBack;
    }
    obj3[7] = goBack;
    let title;
    if (back != null) {
      title = back.title;
    }
    obj3[8] = title;
    obj3[9] = headerBackTitleStyle;
    let href;
    if (back != null) {
      href = back.href;
    }
    obj3[10] = href;
    headerLeftResult = headerLeft(obj3);
  }
  let headerRightResult = null;
  if (headerRight) {
    const obj4 = { tintColor: null, pressColor: null, pressOpacity: null, canGoBack: null };
    obj4[0] = text;
    obj4[1] = headerPressColor;
    obj4[2] = headerPressOpacity;
    const _Boolean2 = Boolean;
    obj4[3] = Boolean(back);
    headerRightResult = headerRight(obj4);
  }
  if (typeof headerTitle !== "function") {
    headerTitle = (arg0) => {
      const merged = Object.assign(arg0);
      return callback3(callback(headerSearchBarOptions[11]).HeaderTitle, {});
    };
  }
  const obj5 = { pointerEvents: "box-none", style: items, children: null };
  items = [{ height, minHeight, maxHeight, opacity, transform }];
  const obj6 = { pointerEvents: "box-none", style: items1, children: null };
  items1 = [StyleSheet.absoluteFill, headerBackgroundContainerStyle];
  ({ View, View: View2 } = closure_7);
  if (headerBackground) {
    const obj7 = { style: null };
    obj7[0] = obj1;
    let headerBackgroundResult = headerBackground(obj7);
  } else {
    if (!headerTransparent) {
      let str5 = "auto";
    } else {
      str5 = "none";
      if ("transparent" !== obj1.backgroundColor) {
        let obj13 = importDefault(tmp32[13])(obj1.backgroundColor);
        str5 = "none";
      }
    }
    const obj8 = { pointerEvents: null, style: null };
    obj8[0] = str5;
    obj8[1] = obj1;
    headerBackgroundResult = tmp30(require(headerSearchBarOptions[12]).HeaderBackground, obj8);
    tmp32 = headerSearchBarOptions;
  }
  obj6[2] = headerBackgroundResult;
  const items2 = [closure_10(View2, obj6), closure_10(View, { pointerEvents: "none", style: { height: headerStatusBarHeight } }), ];
  const obj9 = { pointerEvents: "box-none", style: items3, children: null };
  items3 = [closure_13.content, null];
  const items4 = [closure_13.start, , , ];
  let expand = !tmp7;
  if (!tmp7) {
    expand = "center" === str;
  }
  if (expand) {
    expand = tmp36.expand;
  }
  items4[1] = expand;
  items4[2] = { marginStart: rect.left };
  items4[3] = headerLeftContainerStyle;
  const items5 = [closure_10(closure_7.View, { pointerEvents: "box-none", style: items4, children: headerLeftResult }), , ];
  let tmp28Result = null;
  if (!tmp7) {
    const items6 = [tmp36.title, , , ];
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
    const obj10 = { maxWidth: null };
    obj10[0] = diff;
    items6[1] = obj10;
    if ("left" === str) {
      if (headerLeftResult) {
        let obj11 = { marginStart: 4 };
      }
      const obj12 = { pointerEvents: "box-none", style: null, children: null };
      items6[2] = obj11;
      items6[3] = headerTitleContainerStyle;
      obj12[1] = items6;
      obj13 = { children: null, allowFontScaling: null, tintColor: null, onLayout: null, style: null };
      obj13[0] = layout.title;
      obj13[1] = headerTitleAllowFontScaling;
      obj13[2] = headerTintColor;
      obj13[3] = function onLayout(nativeEvent) {
        let closure_0;
        let closure_1;
        ({ height: closure_0, width: closure_1 } = nativeEvent.nativeEvent.layout);
        callback2((arg0) => {
          let size = arg0;
          if (arg0) {
            return size;
          }
          size = { height: closure_0, width: closure_1 };
        });
      };
      obj13[4] = headerTitleStyle;
      obj12[2] = headerTitle(obj13);
      const items7 = [tmp30(tmp29.View, obj12), ];
      const obj14 = { pointerEvents: "box-none", style: null, children: null };
      const items8 = [, , , ];
      ({ end: arr9[0], expand: arr9[1] } = tmp36);
      const obj15 = { marginEnd: null };
      obj15[0] = rect.right;
      items8[2] = obj15;
      items8[3] = headerRightContainerStyle;
      obj14[1] = items8;
      const items9 = [headerRightResult, ];
      let tmp30Result = null;
      if (headerSearchBarOptions) {
        const obj16 = { tintColor: null, pressColor: null, pressOpacity: null, onPress: null, children: null };
        obj16[0] = text;
        obj16[1] = headerPressColor;
        obj16[2] = headerPressOpacity;
        obj16[3] = function onPress() {
          callback(true);
          if (headerSearchBarOptions != null) {
            const onOpen = headerSearchBarOptions.onOpen;
            if (onOpen != null) {
              onOpen();
            }
          }
        };
        const obj17 = { source: null, tintColor: null };
        obj17[0] = importDefault(headerSearchBarOptions[16]);
        obj17[1] = text;
        obj16[4] = tmp30(require(headerSearchBarOptions[15]).HeaderIcon, obj17);
        tmp30Result = tmp30(require(headerSearchBarOptions[14]).HeaderButton, obj16);
      }
      const obj18 = { children: null };
      items9[1] = tmp30Result;
      obj14[2] = items9;
      items7[1] = tmp28(tmp29.View, obj14);
      obj18[0] = items7;
      tmp28Result = tmp28(tmp38, obj18);
    }
    obj11 = { marginHorizontal: 16 };
    tmp38 = closure_12;
  }
  items5[1] = tmp28Result;
  tmp30Result = null;
  if (tmp7) {
    const obj19 = {};
    const merged3 = Object.assign(headerSearchBarOptions);
    obj19.visible = tmp7;
    obj19.onClose = function onClose() {
      callback(false);
      if (headerSearchBarOptions != null) {
        const onClose = headerSearchBarOptions.onClose;
        if (onClose != null) {
          onClose();
        }
      }
    };
    obj19.tintColor = headerTintColor;
    let obj20 = !headerLeftResult;
    if (!headerLeftResult) {
      obj20 = { marginStart: 8 };
    }
    const items10 = [obj20];
    obj19.style = items10;
    tmp30Result = tmp30(require(headerSearchBarOptions[17]).HeaderSearchBar, obj19);
  }
  items5[2] = tmp30Result;
  obj9[2] = items5;
  items2[2] = closure_11(View, obj9);
  obj5[2] = items2;
  return closure_11(View, obj5);
};
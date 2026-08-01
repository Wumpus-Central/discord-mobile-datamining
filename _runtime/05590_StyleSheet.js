// === Module 5590: StyleSheet ===

// Module 5590 (StyleSheet)
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Platform;
let StyleSheet;
let c10;
let c9;
let closure_6;
const require = arg1;
let closure_3 = ["height", "minHeight", "maxHeight", "backgroundColor", "borderBottomColor", "borderBottomEndRadius", "borderBottomLeftRadius", "borderBottomRightRadius", "borderBottomStartRadius", "borderBottomWidth", "borderColor", "borderEndColor", "borderEndWidth", "borderLeftColor", "borderLeftWidth", "borderRadius", "borderRightColor", "borderRightWidth", "borderStartColor", "borderStartWidth", "borderStyle", "borderTopColor", "borderTopEndRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderTopStartRadius", "borderTopWidth", "borderWidth", "boxShadow", "elevation", "shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "opacity", "transform"];
({ Animated: closure_6, Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ jsx: c9, jsxs: c10 } = jsxProd);
const styles = StyleSheet.create({ content: { flex: 1, flexDirection: "row", alignItems: "stretch" }, title: { marginHorizontal: 16, justifyContent: "center" }, left: { justifyContent: "center", alignItems: "flex-start" }, right: { justifyContent: "center", alignItems: "flex-end" }, expand: { flexGrow: 1, flexBasis: 0 } });

export default function Header(children) {
  let backgroundColor;
  let borderBottomColor;
  let borderBottomEndRadius;
  let borderBottomLeftRadius;
  let borderBottomRightRadius;
  let borderBottomStartRadius;
  let borderBottomWidth;
  let borderColor;
  let borderEndColor;
  let borderEndWidth;
  let borderLeftColor;
  let borderLeftWidth;
  let borderRadius;
  let borderRightColor;
  let borderRightWidth;
  let borderStartColor;
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
  let headerBackground;
  let headerBackgroundContainerStyle;
  let headerLeft;
  let headerLeftContainerStyle;
  let headerLeftLabelVisible;
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
  let opacity;
  let shadowColor;
  let shadowOffset;
  let shadowOpacity;
  let shadowRadius;
  let transform;
  let obj = require(1584);
  const rect = obj.useSafeAreaInsets();
  let obj1 = require(1584);
  const safeAreaFrame = obj1.useSafeAreaFrame();
  let layout = children.layout;
  const context = React.useContext(importDefault(5591));
  if (undefined === layout) {
    layout = safeAreaFrame;
  }
  const modal = children.modal;
  ({ headerTitle, headerTitleAlign } = children);
  let str = "left";
  if (undefined !== headerTitleAlign) {
    str = headerTitleAlign;
  }
  ({ headerLeft, headerLeftLabelVisible, headerTintColor, headerBackground, headerRight, headerStyle, headerPressColor, headerPressOpacity, headerStatusBarHeight, headerTransparent, headerTitleAllowFontScaling, headerTitleStyle, headerLeftContainerStyle, headerRightContainerStyle, headerTitleContainerStyle, headerBackgroundContainerStyle, headerShadowVisible } = children);
  if (undefined === headerStatusBarHeight) {
    let num = 0;
    if (!context) {
      num = rect.top;
    }
    headerStatusBarHeight = num;
  }
  if (!headerStyle) {
    headerStyle = {};
  }
  const flattenResult = StyleSheet.flatten(headerStyle);
  let height = flattenResult.height;
  if (undefined === height) {
    height = tmp8;
  }
  ({ opacity, transform } = flattenResult);
  ({ minHeight, maxHeight, backgroundColor, borderBottomColor, borderBottomEndRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderBottomWidth, borderColor, borderEndColor, borderEndWidth, borderLeftColor, borderLeftWidth, borderRadius, borderRightColor, borderRightWidth, borderStartColor, borderStartWidth, borderStyle, borderTopColor, borderTopEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, borderTopWidth, borderWidth, boxShadow, elevation, shadowColor, shadowOffset, shadowOpacity, shadowRadius } = flattenResult);
  callback(flattenResult, closure_3);
  obj = { backgroundColor, borderBottomColor, borderBottomEndRadius, borderBottomLeftRadius, borderBottomRightRadius, borderBottomStartRadius, borderBottomWidth, borderColor, borderEndColor, borderEndWidth, borderLeftColor, borderLeftWidth, borderRadius, borderRightColor, borderRightWidth, borderStartColor, borderStartWidth, borderStyle, borderTopColor, borderTopEndRadius, borderTopLeftRadius, borderTopRightRadius, borderTopStartRadius, borderTopWidth, borderWidth, boxShadow, elevation, shadowColor, shadowOffset, shadowOpacity, shadowRadius, opacity, transform };
  for (const key10093 in obj) {
    let tmp25 = key10093;
    if (undefined !== obj[key10093]) {
      continue;
    } else {
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
  const items = [obj, false === headerShadowVisible && { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 }];
  let headerLeftResult = null;
  if (headerLeft) {
    obj = { tintColor: null, pressColor: null, pressOpacity: null, labelVisible: null };
    obj[0] = headerTintColor;
    obj[1] = headerPressColor;
    obj[2] = headerPressOpacity;
    obj[3] = headerLeftLabelVisible;
    headerLeftResult = headerLeft(obj);
  }
  let headerRightResult = null;
  if (headerRight) {
    obj1 = { tintColor: null, pressColor: null, pressOpacity: null };
    obj1[0] = headerTintColor;
    obj1[1] = headerPressColor;
    obj1[2] = headerPressOpacity;
    headerRightResult = headerRight(obj1);
  }
  if (typeof headerTitle !== "fileFinishedImporting") {
    headerTitle = (arg0) => {
      const merged = Object.assign(arg0);
      return callback2(callback(table[7]), {});
    };
  }
  const obj2 = { pointerEvents: "box-none", style: items1, children: null };
  items1 = [StyleSheet.absoluteFill, { zIndex: 0 }, headerBackgroundContainerStyle];
  if (headerBackground) {
    const obj3 = { style: null };
    obj3[0] = items;
    let headerBackgroundResult = headerBackground(obj3);
  } else {
    headerBackgroundResult = null;
    if (!headerTransparent) {
      const obj4 = { style: null };
      obj4[0] = items;
      headerBackgroundResult = tmp15(importDefault(5594), obj4);
    }
  }
  obj2[2] = headerBackgroundResult;
  const items2 = [closure_9(RN.View, obj2), ];
  const obj5 = { pointerEvents: "box-none", style: items3, children: null };
  items3 = [{ height, minHeight, maxHeight, opacity, transform }];
  const items4 = [closure_9(View, { pointerEvents: "none", style: { height: headerStatusBarHeight } }), ];
  const obj6 = { pointerEvents: "box-none", style: closure_11.content, children: null };
  const items5 = [closure_11.left, , , ];
  let expand = tmp22;
  if ("center" === str) {
    expand = tmp21.expand;
  }
  items5[1] = expand;
  items5[2] = { marginStart: rect.left };
  items5[3] = headerLeftContainerStyle;
  const items6 = [closure_9(RN.View, { pointerEvents: "box-none", style: items5, children: headerLeftResult }), , ];
  const items7 = [closure_11.title, , ];
  const width = layout.width;
  let num2 = 16;
  if ("center" === str) {
    if (headerLeftResult) {
      let num5 = 32;
      if (false !== headerLeftLabelVisible) {
        num5 = 80;
      }
      num2 = num5;
    }
    const _Math = Math;
    let diff = width - 2 * (num2 + Math.max(rect.left, rect.right));
  } else {
    let num3 = num2;
    if (headerLeftResult) {
      num3 = 72;
    }
    let num4 = num2;
    if (headerRightResult) {
      num4 = 72;
    }
    diff = width - (num3 + num4 + rect.left - rect.right);
  }
  const obj7 = { children: null };
  const tmp20 = View;
  const tmp5 = importDefault;
  const tmp7 = undefined !== modal && modal;
  tmp8 = importDefault(5588)(layout, undefined !== modal && modal, headerStatusBarHeight);
  items7[1] = { maxWidth: diff };
  items7[2] = headerTitleContainerStyle;
  items6[1] = closure_9(RN.View, { pointerEvents: "box-none", style: items7, children: headerTitle({ children: children.title, allowFontScaling: headerTitleAllowFontScaling, tintColor: headerTintColor, style: headerTitleStyle }) });
  const items8 = [, , , ];
  ({ right: arr9[0], expand: arr9[1] } = closure_11);
  items8[2] = { marginEnd: rect.right };
  items8[3] = headerRightContainerStyle;
  items6[2] = closure_9(RN.View, { pointerEvents: "box-none", style: items8, children: headerRightResult });
  obj6[2] = items6;
  items4[1] = closure_10(tmp20, obj6);
  obj5[2] = items4;
  items2[1] = closure_10(RN.View, obj5);
  obj7[0] = items2;
  return closure_10(React.Fragment, obj7);
};
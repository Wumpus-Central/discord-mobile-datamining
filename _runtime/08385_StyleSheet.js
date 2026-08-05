// _runtime/08385_StyleSheet.js
import _slicedToArray from "_slicedToArray";
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { Link } from "01481_Link.js";
import { enableScreens } from "04631_enableScreens.js";
import { useNavigationHeaderAccessibilityRefreshKey } from "08387_useNavigationHeaderAccessibilityRefreshKey.js";

let Platform;
let StyleSheet;
let c4;
let c9;
let error;
let metroImportAll;
const require = arg1;
({ I18nManager: c4, Platform, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
const styles = StyleSheet.create({ row: { flexDirection: "row", alignItems: "center" } });

export default function HeaderConfig(arg0) {
  let UNSTABLE_headerInsets;
  let canGoBack;
  let fontSize;
  let fontWeight;
  let headerBackButtonMenuEnabled;
  let headerBackImageSource;
  let headerBackTitle;
  let headerBackTitleStyle;
  let headerBackTitleVisible;
  let headerBackVisible;
  let headerBackground;
  let headerBlurEffect;
  let headerLargeStyle;
  let headerLargeTitle;
  let headerLargeTitleShadowVisible;
  let headerLargeTitleStyle;
  let headerLeft;
  let headerRight;
  let headerSearchBarOptions;
  let headerShadowVisible;
  let headerShown;
  let headerStyle;
  let headerTintColor;
  let headerTitle;
  let headerTitleAlign;
  let headerTitleStyle;
  let headerTopInsetEnabled;
  let headerTransparent;
  let route;
  let title;
  let tmp10;
  let tmp11;
  let tmp9;
  ({ headerBackImageSource, headerBackTitle, headerBackTitleVisible } = arg0);
  ({ headerBackButtonMenuEnabled, headerBackTitleStyle } = arg0);
  if (headerBackTitleVisible === undefined) {
    headerBackTitleVisible = true;
  }
  ({ headerBackVisible, headerShadowVisible, headerLargeTitle, headerBackground, headerLeft, headerRight, headerTintColor, headerTitle, headerTitleAlign, headerTransparent, headerSearchBarOptions, UNSTABLE_headerInsets, canGoBack } = arg0);
  ({ headerLargeStyle, headerLargeTitleShadowVisible, headerLargeTitleStyle, headerShown, headerStyle, headerBlurEffect, headerTitleStyle, headerTopInsetEnabled, route, title } = arg0);
  let obj = Link /* Link */;
  const colors = obj.useTheme().colors;
  let text = headerTintColor;
  if (headerTintColor == null) {
    text = colors.text;
  }
  let obj1 = StyleSheet;
  const tmp3 = StyleSheet.flatten(headerBackTitleStyle) || {};
  const tmp4 = obj1.flatten(headerLargeTitleStyle) || {};
  const tmp5 = obj1.flatten(headerTitleStyle) || {};
  const tmp6 = obj1.flatten(headerStyle) || {};
  let tmpResult = tmp(8386);
  const items = [tmp3.fontFamily, tmp4.fontFamily, tmp5.fontFamily];
  const tmp7 = obj1.flatten(headerLargeStyle) || {};
  [tmp9, tmp10, tmp11] = callback(tmpResult.processFonts(items), 3);
  tmpResult = tmp(5674);
  headerTitle = tmpResult.getHeaderTitle({ title, headerTitle }, route.name);
  let text2 = tmp5.color;
  if (text2 == null) {
    text2 = headerTintColor;
  }
  if (text2 == null) {
    text2 = colors.text;
  }
  ({ fontSize, fontWeight } = tmp5);
  obj = { color: text2 };
  if (null != tmp5.fontFamily) {
    obj.fontFamily = tmp5.fontFamily;
  }
  if (null != fontSize) {
    obj.fontSize = fontSize;
  }
  if (null != fontWeight) {
    obj.fontWeight = fontWeight;
  }
  let headerLeftResult;
  if (headerLeft != null) {
    obj = { tintColor: null, canGoBack: null, label: null };
    obj[0] = text;
    obj[1] = canGoBack;
    obj[2] = headerBackTitle;
    headerLeftResult = headerLeft(obj);
  }
  let headerRightResult;
  if (headerRight != null) {
    obj1 = { tintColor: null, canGoBack: null };
    obj1[0] = text;
    obj1[1] = canGoBack;
    headerRightResult = headerRight(obj1);
  }
  let headerTitleResult = null;
  if (typeof headerTitle === "function") {
    const obj2 = { tintColor: null, children: null };
    obj2[0] = text;
    obj2[1] = headerTitle;
    headerTitleResult = headerTitle(obj2);
  }
  useNavigationHeaderAccessibilityRefreshKey();
  const isSearchBarAvailableForCurrentPlatform = tmp(4631).isSearchBarAvailableForCurrentPlatform;
  let isSearchBarAvailableForCurrentPlatform2 = typeof isSearchBarAvailableForCurrentPlatform === "boolean";
  if (typeof isSearchBarAvailableForCurrentPlatform === "boolean") {
    isSearchBarAvailableForCurrentPlatform2 = tmp(4631).isSearchBarAvailableForCurrentPlatform;
  }
  let tmp17 = isSearchBarAvailableForCurrentPlatform2;
  if (isSearchBarAvailableForCurrentPlatform2) {
    tmp17 = null != headerSearchBarOptions;
  }
  if (null != headerSearchBarOptions) {
    if (!isSearchBarAvailableForCurrentPlatform2) {
      const _Error = Error;
      const error = new Error("The current version of 'react-native-screens' doesn't support SearchBar in the header. Please update to the latest version to use this option.");
      throw error;
    }
  }
  let tmp24 = null != headerBackground;
  if (!tmp24) {
    tmp24 = headerTransparent;
  }
  if (!tmp24) {
    let flag = tmp17;
    if (!tmp17) {
      flag = headerLargeTitle;
    }
    if (flag) {
      flag = false;
    }
    tmp24 = flag;
  }
  const obj3 = { backButtonInCustomView: headerBackVisible ? null != headerLeftResult : null != headerTitleResult, backgroundColor: null, backTitle: null, backTitleVisible: null, backTitleFontFamily: null, backTitleFontSize: null, blurEffect: null, color: null, direction: null, disableBackButtonMenu: null, hidden: null, hideBackButton: null, hideShadow: null, largeTitle: null, largeTitleBackgroundColor: null, largeTitleColor: null, largeTitleFontFamily: null, largeTitleFontSize: null, largeTitleFontWeight: null, largeTitleHideShadow: null, title: null, titleColor: null, titleFontFamily: null, titleFontSize: null, titleFontWeight: null, topInsetEnabled: null, disableTopInsetApplication: null, disableLeftInsetApplication: null, disableRightInsetApplication: null, disableBottomInsetApplication: null, translucent: null, children: null };
  let backgroundColor = tmp6.backgroundColor;
  if (backgroundColor == null) {
    let str3 = "transparent";
    if (null == headerBackground) {
      str3 = "transparent";
      if (!headerTransparent) {
        str3 = colors.card;
      }
    }
    backgroundColor = str3;
  }
  obj3[1] = backgroundColor;
  if (enableScreens /* enableScreens */.isNewBackTitleImplementation) {
    let str4 = headerBackTitle;
  } else {
    str4 = " ";
  }
  obj3[2] = str4;
  obj3[3] = headerBackTitleVisible;
  obj3[4] = tmp9;
  obj3[5] = tmp3.fontSize;
  obj3[6] = headerBlurEffect;
  obj3[7] = text;
  let str5 = "ltr";
  if (constants.getConstants().isRTL) {
    str5 = "rtl";
  }
  obj3[8] = str5;
  obj3[9] = false === headerBackButtonMenuEnabled;
  obj3[10] = false === headerShown;
  obj3[11] = false === headerBackVisible;
  let tmp26 = false === headerShadowVisible || null != headerBackground;
  if (!tmp26) {
    if (headerTransparent) {
      headerTransparent = true !== headerShadowVisible;
    }
    tmp26 = headerTransparent;
  }
  obj3[12] = tmp26;
  obj3[13] = headerLargeTitle;
  obj3[14] = tmp7.backgroundColor;
  obj3[15] = tmp4.color;
  obj3[16] = tmp10;
  ({ fontSize: obj8[17], fontWeight: obj8[18] } = tmp4);
  obj3[19] = false === headerLargeTitleShadowVisible;
  obj3[20] = headerTitle;
  obj3[21] = text2;
  obj3[22] = tmp11;
  obj3[23] = fontSize;
  obj3[24] = fontWeight;
  obj3[25] = headerTopInsetEnabled;
  let top;
  if (UNSTABLE_headerInsets != null) {
    top = UNSTABLE_headerInsets.top;
  }
  let tmp28;
  if (undefined !== top) {
    tmp28 = !UNSTABLE_headerInsets.top;
  }
  obj3[26] = tmp28;
  let left;
  if (UNSTABLE_headerInsets != null) {
    left = UNSTABLE_headerInsets.left;
  }
  let tmp30;
  if (undefined !== left) {
    tmp30 = !UNSTABLE_headerInsets.left;
  }
  obj3[27] = tmp30;
  let right;
  if (UNSTABLE_headerInsets != null) {
    right = UNSTABLE_headerInsets.right;
  }
  let tmp32;
  if (undefined !== right) {
    tmp32 = !UNSTABLE_headerInsets.right;
  }
  obj3[28] = tmp32;
  let bottom;
  if (UNSTABLE_headerInsets != null) {
    bottom = UNSTABLE_headerInsets.bottom;
  }
  let tmp34;
  if (undefined !== bottom) {
    tmp34 = !UNSTABLE_headerInsets.bottom;
  }
  obj3[29] = tmp34;
  obj3[30] = true === tmp24;
  if (null != headerLeftResult) {
    const obj4 = { style: null, children: null };
    obj4[0] = row.row;
    const items1 = [headerLeftResult, ];
    let tmp40 = null;
    if ("center" !== headerTitleAlign) {
      let tmp37Result = headerTitleResult;
      if (typeof headerTitle !== "function") {
        const obj5 = { tintColor: null, style: null, children: null };
        obj5[0] = text;
        obj5[1] = obj;
        obj5[2] = headerTitle;
        tmp37Result = tmp37(tmp(5674).HeaderTitle, obj5);
      }
      tmp40 = tmp37Result;
    }
    const obj6 = { children: null };
    items1[1] = tmp40;
    obj4[1] = items1;
    obj6[0] = tmp25(View, obj4);
    tmp37Result = tmp37(tmp(4631).ScreenStackHeaderLeftView, obj6);
    const tmp38 = View;
  } else {
    tmp37Result = null;
  }
  const items2 = [tmp37Result, ];
  let tmp43Result = null;
  if ("center" === headerTitleAlign) {
    if (typeof headerTitle !== "function") {
      const obj7 = { tintColor: null, style: null, children: null };
      obj7[0] = text;
      obj7[1] = obj;
      obj7[2] = headerTitle;
      headerTitleResult = tmp43(tmp(5674).HeaderTitle, obj7);
    }
    const obj8 = { children: null };
    obj8[0] = headerTitleResult;
    tmp43Result = tmp43(tmp(4631).ScreenStackHeaderCenterView, obj8);
  }
  items2[1] = tmp43Result;
  const items3 = [closure_9(closure_8, { children: items2 }), , , ];
  let tmp44 = null;
  if (undefined !== headerBackImageSource) {
    const obj9 = { source: null };
    obj9[0] = headerBackImageSource;
    tmp44 = callback2(tmp(4631).ScreenStackHeaderBackButtonImage, obj9);
  }
  items3[1] = tmp44;
  let tmp46 = null;
  if (null != headerRightResult) {
    const obj10 = { children: null };
    obj10[0] = headerRightResult;
    tmp46 = callback2(tmp(4631).ScreenStackHeaderRightView, obj10);
  }
  items3[2] = tmp46;
  let tmp48 = null;
  if (tmp17) {
    const obj11 = { children: null };
    const obj12 = {};
    const merged = Object.assign(headerSearchBarOptions);
    obj11[0] = callback2(tmp(4631).SearchBar, obj12);
    tmp48 = callback2(tmp(4631).ScreenStackHeaderSearchBarView, obj11);
  }
  items3[3] = tmp48;
  obj3[31] = items3;
  return closure_9(enableScreens /* enableScreens */.ScreenStackHeaderConfig, obj3);
};
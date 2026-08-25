// _runtime/08721_processBarButtonItems.js
import closure_6 from "metro/00032__slicedToArray.js";
import closure_7 from "metro/00109__objectWithoutProperties.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";

const require = arg1;
let closure_3 = ["badge", "label", "labelStyle", "icon"];
let closure_4 = ["label", "icon", "inline", "layout", "items", "multiselectable"];
let closure_5 = ["label", "icon", "description"];
({ Platform, StyleSheet: closure_8, View: c9 } = get_ActivityIndicator);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
function processBarButtonItems(arg0, arg1, arg2) {

}
function transformIcon(arg0) {

}
function getMenuItem(type) {
  if ("submenu" === type.type) {
    ({ icon, items, multiselectable } = type);
    let obj = {};
    ({ label, inline, layout } = type);
    const merged = Object.assign(callback2(type, closure_4));
    if (typeof transformIcon !== "function") {
      HermesBuiltin.throwTypeError();
    }
    type = undefined;
    if (icon != null) {
      type = icon.type;
    }
    if ("image" !== type) {
      obj.icon = icon;
      obj.title = label;
      obj.displayAsPalette = "palette" === layout;
      obj.displayInline = inline;
      let tmp14;
      if (typeof multiselectable === "boolean") {
        tmp14 = !multiselectable;
      }
      obj.singleSelection = tmp14;
      obj.items = items.map(getMenuItem);
      return obj;
    } else if (false === icon.tinted) {
      obj = { type: "imageSource", imageSource: null };
      icon = icon.source;
      obj[1] = icon;
      obj1 = obj;
    } else {
      obj1 = { type: "templateSource", templateSource: null };
      obj1[1] = icon.source;
    }
  } else {
    let source = type.icon;
    const obj2 = {};
    ({ label: label2, description } = type);
    const merged1 = Object.assign(callback2(type, closure_5));
    if (typeof transformIcon !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let type1;
    if (source != null) {
      type1 = source.type;
    }
    if ("image" !== type1) {
      obj2.icon = source;
      obj2.title = label2;
      obj2.subtitle = description;
      return obj2;
    } else if (false === source.tinted) {
      const obj3 = { type: "imageSource", imageSource: null };
      source = source.source;
      obj3[1] = source;
      obj = obj3;
    } else {
      obj = { type: "templateSource", templateSource: null };
      obj[1] = source.source;
    }
  }
}

export const useHeaderConfigProps = function useHeaderConfigProps(headerLargeTitle) {
  ({ headerBackIcon, headerBackImageSource, headerBackTitle, headerBackVisible, headerShadowVisible, headerLargeTitleEnabled } = headerLargeTitle);
  ({ headerBackButtonDisplayMode, headerBackButtonMenuEnabled, headerBackTitleStyle, headerLargeStyle } = headerLargeTitle);
  if (headerLargeTitleEnabled === undefined) {
    headerLargeTitleEnabled = headerLargeTitle.headerLargeTitle;
  }
  ({ headerBackground, headerLeft, headerRight, headerTintColor, headerTitle, headerTitleAlign, headerTransparent, headerSearchBarOptions, headerTopInsetEnabled, headerBack, unstable_headerInsets, unstable_headerLeftItems, unstable_headerRightItems } = headerLargeTitle);
  ({ headerLargeTitleShadowVisible, headerLargeTitleStyle, headerShown, headerStyle, headerBlurEffect, headerTitleStyle, route, title } = headerLargeTitle);
  let obj = colors(1501);
  obj1 = colors(1501);
  const theme = obj1.useTheme();
  ({ colors, fonts } = theme);
  let text = headerTintColor;
  if (headerTintColor == null) {
    text = colors.text;
  }
  let obj2 = closure_8;
  let items = [fonts.regular, headerBackTitleStyle];
  const tmp4 = closure_8.flatten(items) || {};
  const items1 = [fonts.medium, headerLargeTitleStyle];
  const tmp5 = obj2.flatten(items1) || {};
  const items2 = [fonts.medium, headerTitleStyle];
  const tmp6 = obj2.flatten(items2) || {};
  const tmp7 = obj2.flatten(headerStyle) || {};
  let backgroundColor = tmp7.backgroundColor;
  if (backgroundColor == null) {
    let str2 = "transparent";
    if (null == headerBackground) {
      str2 = "transparent";
      if (!headerTransparent) {
        str2 = colors.card;
      }
    }
    backgroundColor = str2;
  }
  let tmpResult = tmp(8722);
  const items3 = [tmp4.fontFamily, tmp5.fontFamily, tmp6.fontFamily];
  const tmp8 = obj2.flatten(headerLargeStyle) || {};
  let fontSize;
  [tmp10, tmp11, tmp12] = callback(tmpResult.processFonts(items3), 3);
  if ("fontSize" in tmp4) {
    fontSize = tmp4.fontSize;
  }
  tmpResult = tmp(5383);
  headerTitle = tmpResult.getHeaderTitle({ title, headerTitle }, route.name);
  if ("color" in tmp6) {
    headerTintColor = tmp6.color;
  } else if (headerTintColor == null) {
    headerTintColor = colors.text;
  }
  let fontSize1;
  if ("fontSize" in tmp6) {
    fontSize1 = tmp6.fontSize;
  }
  const fontWeight = tmp6.fontWeight;
  let color;
  if ("color" in tmp5) {
    color = tmp5.color;
  }
  let fontSize2;
  if ("fontSize" in tmp5) {
    fontSize2 = tmp5.fontSize;
  }
  obj = { color: headerTintColor };
  if (null != tmp6.fontFamily) {
    obj.fontFamily = tmp6.fontFamily;
  }
  if (null != fontSize1) {
    obj.fontSize = fontSize1;
  }
  if (null != fontWeight) {
    obj.fontWeight = fontWeight;
  }
  let headerLeftResult;
  if (headerLeft != null) {
    obj = { tintColor: null, canGoBack: null, label: null, href: "a" };
    obj[0] = text;
    obj[1] = tmp18;
    let tmp20 = headerBackTitle;
    if (headerBackTitle == null) {
      title = undefined;
      if (headerBack != null) {
        title = headerBack.title;
      }
      tmp20 = title;
    }
    obj[2] = tmp20;
    headerLeftResult = headerLeft(obj);
  }
  let headerRightResult;
  if (headerRight != null) {
    obj1 = { tintColor: null, canGoBack: null };
    obj1[0] = text;
    obj1[1] = tmp18;
    headerRightResult = headerRight(obj1);
  }
  let headerTitleResult = null;
  if (typeof headerTitle === "function") {
    obj2 = { tintColor: null, children: null };
    obj2[0] = text;
    obj2[1] = headerTitle;
    headerTitleResult = headerTitle(obj2);
  }
  const isSearchBarAvailableForCurrentPlatform = tmp(4752).isSearchBarAvailableForCurrentPlatform;
  let isSearchBarAvailableForCurrentPlatform2 = typeof isSearchBarAvailableForCurrentPlatform === "boolean";
  if (typeof isSearchBarAvailableForCurrentPlatform === "boolean") {
    isSearchBarAvailableForCurrentPlatform2 = tmp(4752).isSearchBarAvailableForCurrentPlatform;
  }
  if (isSearchBarAvailableForCurrentPlatform2) {
    isSearchBarAvailableForCurrentPlatform2 = null != headerSearchBarOptions;
  }
  let tmp24 = headerBackVisible;
  if (!headerBackVisible) {
    tmp24 = null != headerTitleResult && null == headerLeftResult;
    const tmp25 = null != headerTitleResult && null == headerLeftResult;
  }
  let tmp26 = null != headerBackground || headerTransparent;
  if (!tmp26) {
    let flag = isSearchBarAvailableForCurrentPlatform2;
    if (!isSearchBarAvailableForCurrentPlatform2) {
      flag = headerLargeTitleEnabled;
    }
    if (flag) {
      flag = false;
    }
    tmp26 = flag;
  }
  let result;
  if (unstable_headerLeftItems != null) {
    let obj3 = { tintColor: null, canGoBack: null };
    obj3[0] = text;
    obj3[1] = tmp18;
    result = unstable_headerLeftItems(obj3);
  }
  let result1;
  if (unstable_headerRightItems != null) {
    let obj4 = { tintColor: null, canGoBack: null };
    obj4[0] = text;
    obj4[1] = tmp18;
    result1 = unstable_headerRightItems(obj4);
  }
  let reversed = result1;
  if (result1) {
    const items4 = [];
    HermesBuiltin.arraySpread(result1, 0);
    reversed = items4.reverse();
  }
  if (null != headerLeftResult) {
    let obj5 = null;
    if (!tmp32) {
      obj5 = { flex: 1 };
    }
    let obj6 = { style: null, children: null };
    obj6[0] = obj5;
    const items5 = [headerLeftResult, ];
    if ("center" === headerTitleAlign) {
      items5[1] = null;
      obj6[1] = items5;
      let tmp33Result = tmp33(tmp(4752).ScreenStackHeaderLeftView, obj6);
    } else {
      if (typeof headerTitle === "function") {
        const obj7 = { style: null, children: null };
        obj7[0] = { flex: 1 };
        obj7[1] = headerTitleResult;
        let obj8 = obj7;
      } else {
        obj8 = { style: null, children: null };
        obj8[0] = { flex: 1 };
        const obj9 = { tintColor: null, style: null, children: null };
        obj9[0] = text;
        obj9[1] = obj;
        obj9[2] = headerTitle;
        obj8[1] = tmp63(tmp(5383).HeaderTitle, obj9);
      }
      callback3(closure_9, obj8);
      const tmp64 = closure_9;
    }
  } else {
    tmp33Result = null;
  }
  const items6 = [tmp33Result, ];
  let tmp39Result = null;
  if ("center" === headerTitleAlign) {
    if (typeof headerTitle !== "function") {
      const obj10 = { tintColor: null, style: null, children: null };
      obj10[0] = text;
      obj10[1] = obj;
      obj10[2] = headerTitle;
      headerTitleResult = tmp39(tmp(5383).HeaderTitle, obj10);
    }
    const obj11 = { children: null };
    obj11[0] = headerTitleResult;
    tmp39Result = tmp39(tmp(4752).ScreenStackHeaderCenterView, obj11);
  }
  items6[1] = tmp39Result;
  const items7 = [closure_12(closure_11, { children: items6 }), , , ];
  if (undefined !== headerBackIcon) {
    let source;
    if (headerBackIcon != null) {
      source = headerBackIcon.source;
    }
    if (source == null) {
      source = headerBackImageSource;
    }
    const obj12 = { source: null };
    obj12[0] = source;
    let tmp41Result = callback3(tmp(4752).ScreenStackHeaderBackButtonImage, obj12);
    const tmp41 = callback3;
  } else {
    tmp41Result = null;
  }
  items7[1] = tmp41Result;
  let tmp43 = null;
  if (null != headerRightResult) {
    const obj13 = { children: null };
    obj13[0] = headerRightResult;
    tmp43 = callback3(tmp(4752).ScreenStackHeaderRightView, obj13);
  }
  items7[2] = tmp43;
  let tmp45 = null;
  if (isSearchBarAvailableForCurrentPlatform2) {
    const obj14 = { children: null };
    const obj15 = {};
    let merged = Object.assign(headerSearchBarOptions);
    obj14[0] = callback3(tmp(4752).SearchBar, obj15);
    tmp45 = callback3(tmp(4752).ScreenStackHeaderSearchBarView, obj14);
  }
  items7[3] = tmp45;
  const obj16 = { backButtonInCustomView: tmp24, backgroundColor, backTitle: headerBackTitle, backTitleVisible: "minimal" !== headerBackButtonDisplayMode, backButtonDisplayMode: "find", backTitleFontFamily: true, backTitleFontSize: true, blurEffect: true, color: true, direction: true, disableBackButtonMenu: true, hidden: true, hideBackButton: true, hideShadow: true, largeTitle: true, largeTitleBackgroundColor: true, largeTitleColor: true, largeTitleFontFamily: true, largeTitleFontSize: true, largeTitleFontWeight: true, largeTitleHideShadow: "src", title: "!src/__tests__", titleColor: "react-native.config.js", titleFontFamily: "lib", titleFontSize: "android/build.gradle", titleFontWeight: "android/gradle.properties", topInsetEnabled: "android/fix-prefab.gradle", disableTopInsetApplication: "android/CMakeLists.txt", disableLeftInsetApplication: "android/src/", disableRightInsetApplication: "ios/", disableBottomInsetApplication: "cpp/", translucent: "app.plugin.js", children: "*.podspec", headerLeftBarButtonItems: "nitro_pod_utils.rb", headerRightBarButtonItems: "README.md", experimental_userInterfaceStyle: "react-native" };
  obj16[5] = tmp10;
  obj16[6] = fontSize;
  obj16[7] = headerBlurEffect;
  obj16[8] = text;
  obj16[9] = obj.useLocale().direction;
  obj16[10] = false === headerBackButtonMenuEnabled;
  obj16[11] = false === headerShown;
  obj16[12] = false === headerBackVisible;
  let tmp51 = false === headerShadowVisible;
  tmp33Result = tmp33(tmp34, { children: items7 });
  if (!tmp51) {
    tmp51 = null != headerBackground;
  }
  if (!tmp51) {
    if (headerTransparent) {
      headerTransparent = true !== headerShadowVisible;
    }
    tmp51 = headerTransparent;
  }
  obj16[13] = tmp51;
  obj16[14] = headerLargeTitleEnabled;
  obj16[15] = tmp8.backgroundColor;
  obj16[16] = color;
  obj16[17] = tmp11;
  obj16[18] = fontSize2;
  obj16[19] = tmp5.fontWeight;
  obj16[20] = false === headerLargeTitleShadowVisible;
  obj16[21] = headerTitle;
  obj16[22] = headerTintColor;
  obj16[23] = tmp12;
  obj16[24] = fontSize1;
  obj16[25] = String(fontWeight);
  obj16[26] = headerTopInsetEnabled;
  let top;
  if (unstable_headerInsets != null) {
    top = unstable_headerInsets.top;
  }
  if (undefined !== top) {
    let tmp53 = !unstable_headerInsets.top;
  } else {
    tmp53 = !headerTopInsetEnabled;
  }
  obj16[27] = tmp53;
  let left;
  if (unstable_headerInsets != null) {
    left = unstable_headerInsets.left;
  }
  let tmp55;
  if (undefined !== left) {
    tmp55 = !unstable_headerInsets.left;
  }
  obj16[28] = tmp55;
  let right;
  if (unstable_headerInsets != null) {
    right = unstable_headerInsets.right;
  }
  let tmp57;
  if (undefined !== right) {
    tmp57 = !unstable_headerInsets.right;
  }
  obj16[29] = tmp57;
  let bottom;
  if (unstable_headerInsets != null) {
    bottom = unstable_headerInsets.bottom;
  }
  let tmp59;
  if (undefined !== bottom) {
    tmp59 = !unstable_headerInsets.bottom;
  }
  obj16[30] = tmp59;
  obj16[31] = true === tmp26;
  obj16[32] = tmp33Result;
  if (typeof processBarButtonItems !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let found;
  if (result != null) {
    const mapped = result.map((type, index) => {
      if ("custom" === type.type) {
        return null;
      } else if ("spacing" === type.type) {
        if (null == type.spacing) {
          const _Error4 = Error;
          const _JSON4 = JSON;
          const _HermesInternal4 = HermesInternal;
          error = new Error("Spacing item must have a 'spacing' property defined: " + JSON.stringify(type));
          throw error;
        } else {
          return type;
        }
      } else {
        if ("button" !== type.type) {
          if ("menu" !== type.type) {
            const _Error = Error;
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            const error1 = new Error("Invalid item type: " + JSON.stringify(type) + ". Valid types are 'button', 'menu', 'custom' and 'spacing'.");
            throw error1;
          }
        }
        if ("menu" === type.type) {
          if (null == type.menu) {
            const _Error3 = Error;
            const _JSON3 = JSON;
            const _HermesInternal3 = HermesInternal;
            const error2 = new Error("Menu item must have a 'menu' property defined: " + JSON.stringify(type));
            throw error2;
          }
        }
        ({ badge, labelStyle, icon } = type);
        let obj = {};
        const merged = Object.assign(closure_1_7(type, closure_1_3));
        obj.index = index;
        obj.title = type.label;
        obj = {};
        const merged1 = Object.assign(fonts.regular);
        const merged2 = Object.assign(labelStyle);
        obj.titleStyle = obj;
        if (typeof closure_1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        type = undefined;
        if (icon != null) {
          type = icon.type;
        }
        if ("image" !== type) {
          obj.icon = icon;
          if ("menu" === obj.type) {
            if ("menu" === type.type) {
              const menu = type.menu;
              const multiselectable = menu.multiselectable;
              obj = {};
              const merged3 = Object.assign(obj);
              obj1 = {};
              const merged4 = Object.assign(obj.menu);
              let tmp34;
              if (typeof multiselectable === "boolean") {
                tmp34 = !multiselectable;
              }
              obj1.singleSelection = tmp34;
              obj1.displayAsPalette = "palette" === menu.layout;
              const items = type.menu.items;
              obj1.items = items.map(closure_1_15);
              obj.menu = obj1;
              let tmp23 = obj;
            }
            let tmp36 = tmp23;
            if (badge) {
              const style = badge.style;
              let backgroundColor;
              if (style != null) {
                backgroundColor = style.backgroundColor;
              }
              if (backgroundColor == null) {
                backgroundColor = colors.notification;
              }
              let obj6 = fonts(closure_1_2[4])(backgroundColor);
              let str9 = "white";
              if (obj6.isLight()) {
                str9 = "black";
              }
              const obj2 = {};
              const merged5 = Object.assign(tmp23);
              const obj3 = {};
              const merged6 = Object.assign(badge);
              const _String = String;
              obj3.value = String(badge.value);
              const obj4 = { backgroundColor: null, color: null };
              obj4[0] = backgroundColor;
              obj4[1] = str9;
              const merged7 = Object.assign(tmp12.regular);
              const merged8 = Object.assign(badge.style);
              obj3.style = obj4;
              obj2.badge = obj3;
              tmp36 = obj2;
            }
            return tmp36;
          }
          if ("button" === obj.type) {
            tmp23 = obj;
          }
          const _Error2 = Error;
          const _JSON2 = JSON;
          const _HermesInternal2 = HermesInternal;
          const error3 = new Error("Invalid item type: " + JSON.stringify(type) + ". Valid types are 'button' and 'menu'.");
          throw error3;
        } else if (false === icon.tinted) {
          const obj5 = { type: "imageSource", imageSource: null };
          icon = icon.source;
          obj5[1] = icon;
          obj6 = obj5;
        } else {
          obj6 = { type: "templateSource", templateSource: null };
          obj6[1] = icon.source;
        }
        tmp12 = fonts;
      }
    });
    found = mapped.filter((arg0) => null != arg0);
  }
  obj16[33] = found;
  if (typeof processBarButtonItems !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let found1;
  if (reversed != null) {
    const mapped1 = reversed.map((type, index) => {
      if ("custom" === type.type) {
        return null;
      } else if ("spacing" === type.type) {
        if (null == type.spacing) {
          const _Error4 = Error;
          const _JSON4 = JSON;
          const _HermesInternal4 = HermesInternal;
          error = new Error("Spacing item must have a 'spacing' property defined: " + JSON.stringify(type));
          throw error;
        } else {
          return type;
        }
      } else {
        if ("button" !== type.type) {
          if ("menu" !== type.type) {
            const _Error = Error;
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            const error1 = new Error("Invalid item type: " + JSON.stringify(type) + ". Valid types are 'button', 'menu', 'custom' and 'spacing'.");
            throw error1;
          }
        }
        if ("menu" === type.type) {
          if (null == type.menu) {
            const _Error3 = Error;
            const _JSON3 = JSON;
            const _HermesInternal3 = HermesInternal;
            const error2 = new Error("Menu item must have a 'menu' property defined: " + JSON.stringify(type));
            throw error2;
          }
        }
        ({ badge, labelStyle, icon } = type);
        let obj = {};
        const merged = Object.assign(closure_1_7(type, closure_1_3));
        obj.index = index;
        obj.title = type.label;
        obj = {};
        const merged1 = Object.assign(fonts.regular);
        const merged2 = Object.assign(labelStyle);
        obj.titleStyle = obj;
        if (typeof closure_1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        type = undefined;
        if (icon != null) {
          type = icon.type;
        }
        if ("image" !== type) {
          obj.icon = icon;
          if ("menu" === obj.type) {
            if ("menu" === type.type) {
              const menu = type.menu;
              const multiselectable = menu.multiselectable;
              obj = {};
              const merged3 = Object.assign(obj);
              obj1 = {};
              const merged4 = Object.assign(obj.menu);
              let tmp34;
              if (typeof multiselectable === "boolean") {
                tmp34 = !multiselectable;
              }
              obj1.singleSelection = tmp34;
              obj1.displayAsPalette = "palette" === menu.layout;
              const items = type.menu.items;
              obj1.items = items.map(closure_1_15);
              obj.menu = obj1;
              let tmp23 = obj;
            }
            let tmp36 = tmp23;
            if (badge) {
              const style = badge.style;
              let backgroundColor;
              if (style != null) {
                backgroundColor = style.backgroundColor;
              }
              if (backgroundColor == null) {
                backgroundColor = colors.notification;
              }
              let obj6 = fonts(closure_1_2[4])(backgroundColor);
              let str9 = "white";
              if (obj6.isLight()) {
                str9 = "black";
              }
              const obj2 = {};
              const merged5 = Object.assign(tmp23);
              const obj3 = {};
              const merged6 = Object.assign(badge);
              const _String = String;
              obj3.value = String(badge.value);
              const obj4 = { backgroundColor: null, color: null };
              obj4[0] = backgroundColor;
              obj4[1] = str9;
              const merged7 = Object.assign(tmp12.regular);
              const merged8 = Object.assign(badge.style);
              obj3.style = obj4;
              obj2.badge = obj3;
              tmp36 = obj2;
            }
            return tmp36;
          }
          if ("button" === obj.type) {
            tmp23 = obj;
          }
          const _Error2 = Error;
          const _JSON2 = JSON;
          const _HermesInternal2 = HermesInternal;
          const error3 = new Error("Invalid item type: " + JSON.stringify(type) + ". Valid types are 'button' and 'menu'.");
          throw error3;
        } else if (false === icon.tinted) {
          const obj5 = { type: "imageSource", imageSource: null };
          icon = icon.source;
          obj5[1] = icon;
          obj6 = obj5;
        } else {
          obj6 = { type: "templateSource", templateSource: null };
          obj6[1] = icon.source;
        }
        tmp12 = fonts;
      }
    });
    found1 = mapped1.filter((arg0) => null != arg0);
  }
  obj16[34] = found1;
  let str3 = "light";
  if (theme.dark) {
    str3 = "dark";
  }
  obj16[35] = str3;
  return obj16;
};
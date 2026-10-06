// === Module 7572: ? ===

// Module 7572
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;

let Platform;
let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
let closure_3 = ["badge", "label", "labelStyle", "icon"];
let closure_4 = ["label", "icon", "inline", "layout", "items", "multiselectable"];
let closure_5 = ["label", "icon", "description"];
({ Platform, StyleSheet: metroImportAll, View: c9 } = react_native);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
function processBarButtonItems(arg0, arg1, arg2) {

}
function transformIcon(arg0) {

}
function getMenuItem(type) {
  let description;
  let icon;
  let inline;
  let items;
  let label;
  let label2;
  let layout;
  let multiselectable;
  if ("submenu" === type.type) {
    ({ icon, items, multiselectable } = type);
    const obj2 = {};
    ({ label, inline, layout } = type);
    const merged = Object.assign(_objectWithoutProperties(type, closure_4));
    if (typeof transformIcon === "function") {
      type = undefined;
      if (icon != null) {
        type = icon.type;
      }
      let tmp11 = icon;
      if ("image" === type) {
        let obj4;
        if (false === icon.tinted) {
          obj4 = { type: "imageSource", imageSource: icon.source };
          const obj3 = { type: "imageSource", imageSource: icon.source };
        } else {
          obj4 = { type: "templateSource", templateSource: icon.source };
        }
        tmp11 = obj4;
      }
      obj2.icon = tmp11;
      obj2.title = label;
      obj2.displayAsPalette = "palette" === layout;
      obj2.displayInline = inline;
      let tmp12;
      if (typeof multiselectable === "boolean") {
        tmp12 = !multiselectable;
      }
      obj2.singleSelection = tmp12;
      obj2.items = items.map(getMenuItem);
      return obj2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const icon2 = type.icon;
    const obj5 = {};
    ({ label: label2, description } = type);
    const merged1 = Object.assign(_objectWithoutProperties(type, closure_5));
    if (typeof transformIcon === "function") {
      let type1;
      if (icon2 != null) {
        type1 = icon2.type;
      }
      let tmp3 = icon2;
      if ("image" === type1) {
        let obj;
        if (false === icon2.tinted) {
          obj = { type: "imageSource", imageSource: icon2.source };
          const obj6 = { type: "imageSource", imageSource: icon2.source };
        } else {
          obj = { type: "templateSource", templateSource: icon2.source };
        }
        tmp3 = obj;
      }
      obj5.icon = tmp3;
      obj5.title = label2;
      obj5.subtitle = description;
      return obj5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}

export const useHeaderConfigProps = function useHeaderConfigProps(headerLargeTitle) {
  let SearchBar;
  let colors;
  let fonts;
  let headerBack;
  let headerBackButtonDisplayMode;
  let headerBackButtonMenuEnabled;
  let headerBackIcon;
  let headerBackImageSource;
  let headerBackTitle;
  let headerBackTitleStyle;
  let headerBackVisible;
  let headerBackground;
  let headerBlurEffect;
  let headerLargeStyle;
  let headerLargeTitleEnabled;
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
  let items5;
  let obj14;
  let obj20;
  let result;
  let route;
  let title;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp21;
  let tmp34Result;
  let tmp34Result2;
  let tmp41Result;
  let tmp51;
  let tmp53;
  let tmp55;
  let tmp57;
  let tmp59;
  let unstable_headerInsets;
  let unstable_headerLeftItems;
  let unstable_headerRightItems;
  const f95383 = function(type, index) {
    let badge;
    let icon;
    let items;
    let label;
    let labelStyle;
    let obj10;
    let obj2;
    let obj6;
    let obj9;
    let tmp29;
    if ("custom" === type.type) {
      return null;
    } else if ("spacing" === type.type) {
      if (null == type.spacing) {
        const _Error4 = Error;
        const _JSON4 = JSON;
        const _HermesInternal4 = HermesInternal;
        const self7 = this;
        const self8 = this;
        const error = new Error("Spacing item must have a 'spacing' property defined: " + JSON.stringify(type));
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
          const self = this;
          const self2 = this;
          const error1 = new Error("Invalid item type: " + JSON.stringify(type) + ". Valid types are 'button', 'menu', 'custom' and 'spacing'.");
          throw error1;
        }
      }
      if ("menu" === type.type) {
        if (null == type.menu) {
          const _Error3 = Error;
          const _JSON3 = JSON;
          const _HermesInternal3 = HermesInternal;
          const self5 = this;
          const self6 = this;
          const error2 = new Error("Menu item must have a 'menu' property defined: " + JSON.stringify(type));
          throw error2;
        }
      }
      ({ badge, labelStyle, icon } = type);
      const obj = { index, title: label, titleStyle: obj2 };
      label = type.label;
      const merged = Object.assign(_objectWithoutProperties(type, closure_2_3));
      obj2 = {};
      const merged1 = Object.assign(fonts.regular);
      const merged2 = Object.assign(labelStyle);
      if (typeof transformIcon === "function") {
        let tmp20;
        type = undefined;
        if (icon != null) {
          type = icon.type;
        }
        let tmp19 = icon;
        if ("image" === type) {
          let obj4;
          if (false === icon.tinted) {
            obj4 = { type: "imageSource", imageSource: icon.source };
            const obj3 = { type: "imageSource", imageSource: icon.source };
          } else {
            obj4 = { type: "templateSource", templateSource: icon.source };
          }
          tmp19 = obj4;
        }
        obj.icon = tmp19;
        if ("menu" === obj.type) {
          if ("menu" === type.type) {
            const menu = type.menu;
            const multiselectable = menu.multiselectable;
            const layout = menu.layout;
            const obj5 = { menu: obj6 };
            const merged3 = Object.assign(obj);
            obj6 = { singleSelection: tmp29, displayAsPalette: "palette" === layout, items: items.map(getMenuItem) };
            const merged4 = Object.assign(obj.menu);
            tmp29 = undefined;
            if (typeof multiselectable === "boolean") {
              tmp29 = !multiselectable;
            }
            items = type.menu.items;
            tmp20 = obj5;
          }
          let tmp31 = tmp20;
          if (badge) {
            const style = badge.style;
            let backgroundColor;
            if (style != null) {
              backgroundColor = style.backgroundColor;
            }
            if (backgroundColor == null) {
              backgroundColor = colors.notification;
            }
            let str9 = "white";
            const obj7 = fonts(dependencyMap[4])(backgroundColor);
            if (obj7.isLight()) {
              str9 = "black";
            }
            const obj8 = { badge: obj9 };
            const merged5 = Object.assign(tmp20);
            obj9 = { value: String(badge.value), style: obj10 };
            const merged6 = Object.assign(badge);
            const _String = String;
            obj10 = { backgroundColor, color: str9 };
            const merged7 = Object.assign(fonts.regular);
            const merged8 = Object.assign(badge.style);
            tmp31 = obj8;
          }
          return tmp31;
        }
        if ("button" === obj.type) {
          tmp20 = obj;
        }
        const _Error2 = Error;
        const _JSON2 = JSON;
        const _HermesInternal2 = HermesInternal;
        const self3 = this;
        const self4 = this;
        const error3 = new Error("Invalid item type: " + JSON.stringify(type) + ". Valid types are 'button' and 'menu'.");
        throw error3;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  };
  const f95384 = (item) => null != item;
  ({ headerBackIcon, headerBackImageSource, headerBackTitle, headerBackVisible, headerShadowVisible, headerLargeTitleEnabled } = headerLargeTitle);
  ({ headerBackButtonDisplayMode, headerBackButtonMenuEnabled, headerBackTitleStyle, headerLargeStyle } = headerLargeTitle);
  if (headerLargeTitleEnabled === undefined) {
    headerLargeTitleEnabled = headerLargeTitle.headerLargeTitle;
  }
  ({ headerBackground, headerLeft, headerRight, headerTintColor, headerTitle, headerTitleAlign, headerTransparent, headerSearchBarOptions, headerTopInsetEnabled, headerBack, unstable_headerInsets, unstable_headerLeftItems, unstable_headerRightItems } = headerLargeTitle);
  ({ headerLargeTitleShadowVisible, headerLargeTitleStyle, headerShown, headerStyle, headerBlurEffect, headerTitleStyle, route, title } = headerLargeTitle);
  let obj = colors(1491);
  const direction = obj.useLocale().direction;
  let obj2 = colors(1491);
  const theme = obj2.useTheme();
  ({ colors, fonts } = theme);
  let text = headerTintColor;
  const dark = theme.dark;
  if (headerTintColor == null) {
    text = colors.text;
  }
  let items = [fonts.regular, headerBackTitleStyle];
  const tmp5 = closure_8.flatten(items) || {};
  const items1 = [fonts.medium, headerLargeTitleStyle];
  const tmp6 = closure_8.flatten(items1) || {};
  const items2 = [fonts.medium, headerTitleStyle];
  const tmp7 = closure_8.flatten(items2) || {};
  let backgroundColor = (closure_8.flatten(headerStyle) || {}).backgroundColor;
  const tmp8 = closure_8.flatten(headerStyle) || {};
  const tmp9 = closure_8.flatten(headerLargeStyle) || {};
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
  const items3 = [tmp5.fontFamily, tmp6.fontFamily, tmp7.fontFamily];
  const tmp2Result = colors(7573);
  let fontSize;
  [tmp11, tmp12, tmp13] = tmp2Result.processFonts(items3);
  _slicedToArray(tmp2Result.processFonts(items3), 3);
  if ("fontSize" in tmp5) {
    fontSize = tmp5.fontSize;
  }
  const tmp2Result2 = colors(6026);
  const headerTitle1 = tmp2Result2.getHeaderTitle({ title, headerTitle }, route.name);
  if ("color" in tmp7) {
    headerTintColor = tmp7.color;
  } else if (headerTintColor == null) {
    headerTintColor = colors.text;
  }
  let fontSize1;
  if ("fontSize" in tmp7) {
    fontSize1 = tmp7.fontSize;
  }
  const fontWeight = tmp7.fontWeight;
  let color;
  const backgroundColor2 = tmp9.backgroundColor;
  if ("color" in tmp6) {
    color = tmp6.color;
  }
  let fontSize2;
  if ("fontSize" in tmp6) {
    fontSize2 = tmp6.fontSize;
  }
  let obj4 = { color: headerTintColor };
  const fontWeight2 = tmp6.fontWeight;
  if (null != tmp7.fontFamily) {
    obj4.fontFamily = tmp7.fontFamily;
  }
  if (null != fontSize1) {
    obj4.fontSize = fontSize1;
  }
  if (null != fontWeight) {
    obj4.fontWeight = fontWeight;
  }
  let tmp19 = null != headerBack;
  let headerLeftResult;
  if (headerLeft != null) {
    let obj5 = { tintColor: text, canGoBack: tmp19, label: tmp21, href: "Array" };
    tmp21 = headerBackTitle;
    if (headerBackTitle == null) {
      let title1;
      if (headerBack != null) {
        title1 = headerBack.title;
      }
      tmp21 = title1;
    }
    headerLeftResult = headerLeft(obj5);
  }
  let headerRightResult;
  if (headerRight != null) {
    let obj6 = { tintColor: text, canGoBack: tmp19 };
    headerRightResult = headerRight(obj6);
  }
  let headerTitleResult = null;
  if (typeof headerTitle === "function") {
    let obj7 = { tintColor: text, children: headerTitle1 };
    headerTitleResult = headerTitle(obj7);
  }
  const isSearchBarAvailableForCurrentPlatform = colors(5722).isSearchBarAvailableForCurrentPlatform;
  let isSearchBarAvailableForCurrentPlatform2 = typeof isSearchBarAvailableForCurrentPlatform === "boolean";
  if (typeof isSearchBarAvailableForCurrentPlatform === "boolean") {
    isSearchBarAvailableForCurrentPlatform2 = colors(5722).isSearchBarAvailableForCurrentPlatform;
  }
  if (isSearchBarAvailableForCurrentPlatform2) {
    isSearchBarAvailableForCurrentPlatform2 = null != headerSearchBarOptions;
  }
  let tmp25 = headerBackVisible;
  if (!tmp25) {
    tmp25 = null != headerTitleResult && null == headerLeftResult;
  }
  let tmp27 = null != headerBackground || headerTransparent;
  if (!tmp27) {
    tmp27 = (isSearchBarAvailableForCurrentPlatform2 || headerLargeTitleEnabled) && false;
  }
  if (unstable_headerLeftItems != null) {
    let obj8 = { tintColor: text, canGoBack: tmp19 };
    result = unstable_headerLeftItems(obj8);
  }
  let result1;
  if (unstable_headerRightItems != null) {
    let obj9 = { tintColor: text, canGoBack: tmp19 };
    result1 = unstable_headerRightItems(obj9);
  }
  let reversed = result1;
  if (reversed) {
    const items4 = [];
    let tmp31 = result1;
    HermesBuiltin.arraySpread(items4, result1, 0);
    reversed = items4.reverse();
  }
  if (null != headerLeftResult) {
    let obj10 = null;
    const ScreenStackHeaderLeftView = colors(5722).ScreenStackHeaderLeftView;
    if ("center" !== headerTitleAlign) {
      obj10 = { flex: 1 };
    }
    const obj11 = { style: obj10, children: items5 };
    items5 = [headerLeftResult, ];
    let tmp63Result = null;
    if ("center" !== headerTitleAlign) {
      let obj13;
      if (typeof headerTitle === "function") {
        obj13 = { style: { flex: 1 }, children: headerTitleResult };
        const obj12 = { style: { flex: 1 }, children: headerTitleResult };
      } else {
        obj13 = { style: { flex: 1 }, children: closure_10(colors(6026).HeaderTitle, obj14) };
        obj14 = { tintColor: text, style: obj4, children: headerTitle1 };
      }
      tmp63Result = closure_10(closure_9, obj13);
    }
    items5[1] = tmp63Result;
    tmp34Result = closure_12(ScreenStackHeaderLeftView, obj11);
  } else {
    tmp34Result = null;
  }
  const items6 = [tmp34Result, ];
  let tmp39Result = null;
  if ("center" === headerTitleAlign) {
    const ScreenStackHeaderCenterView = colors(5722).ScreenStackHeaderCenterView;
    if (typeof headerTitle !== "function") {
      const obj15 = { tintColor: text, style: obj4, children: headerTitle1 };
      headerTitleResult = closure_10(colors(6026).HeaderTitle, obj15);
    }
    const obj16 = { children: headerTitleResult };
    tmp39Result = closure_10(ScreenStackHeaderCenterView, obj16);
  }
  items6[1] = tmp39Result;
  const items7 = [closure_12(closure_11, { children: items6 }), , , ];
  if (undefined !== headerBackIcon) {
    let source;
    const ScreenStackHeaderBackButtonImage = colors(5722).ScreenStackHeaderBackButtonImage;
    if (headerBackIcon != null) {
      source = headerBackIcon.source;
    }
    if (source == null) {
      source = headerBackImageSource;
    }
    const obj17 = { source };
    tmp41Result = closure_10(ScreenStackHeaderBackButtonImage, obj17);
  } else {
    tmp41Result = null;
  }
  items7[1] = tmp41Result;
  let tmp43 = null;
  if (null != headerRightResult) {
    const obj18 = { children: headerRightResult };
    tmp43 = closure_10(colors(5722).ScreenStackHeaderRightView, obj18);
  }
  items7[2] = tmp43;
  let tmp45 = null;
  if (isSearchBarAvailableForCurrentPlatform2) {
    const obj19 = { children: closure_10(SearchBar, obj20) };
    const ScreenStackHeaderSearchBarView = colors(5722).ScreenStackHeaderSearchBarView;
    obj20 = {};
    SearchBar = colors(5722).SearchBar;
    let merged = Object.assign(headerSearchBarOptions);
    tmp45 = closure_10(ScreenStackHeaderSearchBarView, obj19);
  }
  items7[3] = tmp45;
  const obj21 = { backButtonInCustomView: tmp25, backgroundColor, backTitle: headerBackTitle, backTitleVisible: "minimal" !== headerBackButtonDisplayMode, backButtonDisplayMode: "formatToPlainString", backTitleFontFamily: tmp11, backTitleFontSize: fontSize, blurEffect: headerBlurEffect, color: text, direction, disableBackButtonMenu: false === headerBackButtonMenuEnabled, hidden: false === headerShown, hideBackButton: false === headerBackVisible, hideShadow: tmp51, largeTitle: headerLargeTitleEnabled, largeTitleBackgroundColor: backgroundColor2, largeTitleColor: color, largeTitleFontFamily: tmp12, largeTitleFontSize: fontSize2, largeTitleFontWeight: fontWeight2, largeTitleHideShadow: false === headerLargeTitleShadowVisible, title: headerTitle1, titleColor: headerTintColor, titleFontFamily: tmp13, titleFontSize: fontSize1, titleFontWeight: String(fontWeight), topInsetEnabled: headerTopInsetEnabled, disableTopInsetApplication: tmp53, disableLeftInsetApplication: tmp55, disableRightInsetApplication: tmp57, disableBottomInsetApplication: tmp59, translucent: true === tmp27, children: tmp34Result2, headerLeftBarButtonItems: "jsona", headerRightBarButtonItems: "Reference Number", experimental_userInterfaceStyle: true };
  tmp51 = false === headerShadowVisible;
  tmp34Result2 = closure_12(closure_11, { children: items7 });
  if (!tmp51) {
    tmp51 = null != headerBackground;
  }
  if (!tmp51) {
    if (headerTransparent) {
      headerTransparent = true !== headerShadowVisible;
    }
    tmp51 = headerTransparent;
  }
  let top;
  if (unstable_headerInsets != null) {
    top = unstable_headerInsets.top;
  }
  if (undefined !== top) {
    tmp53 = !unstable_headerInsets.top;
  } else {
    tmp53 = !headerTopInsetEnabled;
  }
  let left;
  if (unstable_headerInsets != null) {
    left = unstable_headerInsets.left;
  }
  tmp55 = undefined;
  if (undefined !== left) {
    tmp55 = !unstable_headerInsets.left;
  }
  let right;
  if (unstable_headerInsets != null) {
    right = unstable_headerInsets.right;
  }
  tmp57 = undefined;
  if (undefined !== right) {
    tmp57 = !unstable_headerInsets.right;
  }
  let bottom;
  if (unstable_headerInsets != null) {
    bottom = unstable_headerInsets.bottom;
  }
  tmp59 = undefined;
  if (undefined !== bottom) {
    tmp59 = !unstable_headerInsets.bottom;
  }
  if (typeof processBarButtonItems === "function") {
    let found;
    if (result != null) {
      const mapped = result.map(f95383);
      found = mapped.filter(f95384);
    }
    obj21.headerLeftBarButtonItems = found;
    if (typeof tmp60 === "function") {
      let found1;
      if (reversed != null) {
        const mapped1 = reversed.map(f95383);
        found1 = mapped1.filter(f95384);
      }
      obj21.headerRightBarButtonItems = found1;
      let str3 = "light";
      if (dark) {
        str3 = "dark";
      }
      obj21.experimental_userInterfaceStyle = str3;
      return obj21;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
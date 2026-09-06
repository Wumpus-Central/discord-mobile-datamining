// _runtime/07917_processBarButtonItems.js
import ColorDefault from "05640_Color.js";
import _slicedToArray from "metro/00032__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";

const require = fn;
let closure_3 = ["badge", "label", "labelStyle", "icon"];
let closure_4 = ["label", "icon", "inline", "layout", "items", "multiselectable"];
let closure_5 = ["label", "icon", "description"];
get_ActivityIndicator = fn(17);
({ Platform, StyleSheet: closure_8, View: closure_9 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
function processBarButtonItems(arg0, arg1, arg2) {}
function transformIcon(arg0) {}
function getMenuItem(type) {
  if ("submenu" === type.type) {
    ({ icon, items, multiselectable } = type);
    let obj = {};
    ({ label, inline, layout } = type);
    const merged = Object.assign(_objectWithoutProperties(type, closure_4));
    if (typeof transformIcon === "function") {
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
        obj.imageSource = icon;
      } else {
        const obj1 = { type: "templateSource", templateSource: icon.source };
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    let source = type.icon;
    const obj2 = {};
    ({ label: label2, description } = type);
    const merged1 = Object.assign(_objectWithoutProperties(type, closure_5));
    if (typeof transformIcon === "function") {
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
        obj3.imageSource = source;
        obj = obj3;
      } else {
        obj = { type: "templateSource", templateSource: source.source };
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}

export const useHeaderConfigProps = function useHeaderConfigProps(headerLargeTitle) {
  ({
    headerBackIcon,
    headerBackImageSource,
    headerBackTitle,
    headerBackVisible,
    headerShadowVisible,
    headerLargeTitleEnabled,
  } = headerLargeTitle);
  ({ headerBackButtonDisplayMode, headerBackButtonMenuEnabled, headerBackTitleStyle, headerLargeStyle } =
    headerLargeTitle);
  if (headerLargeTitleEnabled === undefined) {
    headerLargeTitleEnabled = headerLargeTitle.headerLargeTitle;
  }
  ({
    headerBackground,
    headerLeft,
    headerRight,
    headerTintColor,
    headerTitle,
    headerTitleAlign,
    headerTransparent,
    headerSearchBarOptions,
    headerTopInsetEnabled,
    headerBack,
    unstable_headerInsets,
    unstable_headerLeftItems,
    unstable_headerRightItems,
  } = headerLargeTitle);
  ({
    headerLargeTitleShadowVisible,
    headerLargeTitleStyle,
    headerShown,
    headerStyle,
    headerBlurEffect,
    headerTitleStyle,
    route,
    title,
  } = headerLargeTitle);
  let obj = colors(1484);
  let obj1 = colors(1484);
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
  let tmpResult = tmp(7918);
  const items3 = [tmp4.fontFamily, tmp5.fontFamily, tmp6.fontFamily];
  const tmp8 = obj2.flatten(headerLargeStyle) || {};
  let fontSize;
  [tmp10, tmp11, tmp12] = _slicedToArray(tmpResult.processFonts(items3), 3);
  if ("fontSize" in tmp4) {
    fontSize = tmp4.fontSize;
  }
  tmpResult = tmp(5631);
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
    obj = { tintColor: text, canGoBack: tmp18, label: null, href: "Array" };
    let tmp20 = headerBackTitle;
    if (headerBackTitle == null) {
      title = undefined;
      if (headerBack != null) {
        title = headerBack.title;
      }
      tmp20 = title;
    }
    obj.label = tmp20;
    headerLeftResult = headerLeft(obj);
  }
  let headerRightResult;
  if (headerRight != null) {
    obj1 = { tintColor: text, canGoBack: tmp18 };
    headerRightResult = headerRight(obj1);
  }
  let headerTitleResult = null;
  if (typeof headerTitle === "function") {
    obj2 = { tintColor: text, children: headerTitle };
    headerTitleResult = headerTitle(obj2);
  }
  const isSearchBarAvailableForCurrentPlatform = tmp(4912).isSearchBarAvailableForCurrentPlatform;
  let isSearchBarAvailableForCurrentPlatform2 = typeof isSearchBarAvailableForCurrentPlatform === "boolean";
  if (typeof isSearchBarAvailableForCurrentPlatform === "boolean") {
    isSearchBarAvailableForCurrentPlatform2 = tmp(4912).isSearchBarAvailableForCurrentPlatform;
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
  if (unstable_headerLeftItems != null) {
    let obj3 = { tintColor: text, canGoBack: tmp18 };
    const result = unstable_headerLeftItems(obj3);
  }
  let result1;
  if (unstable_headerRightItems != null) {
    let obj4 = { tintColor: text, canGoBack: tmp18 };
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
    if (!tmp31) {
      obj5 = { flex: 1 };
    }
    let obj6 = { style: obj5, children: null };
    const items5 = [headerLeftResult];
    if ("center" === headerTitleAlign) {
      items5[1] = null;
      obj6.children = items5;
      let tmp32Result = tmp32(tmp(4912).ScreenStackHeaderLeftView, obj6);
    } else {
      if (typeof headerTitle === "function") {
        const obj7 = { style: { flex: 1 }, children: headerTitleResult };
        let obj8 = obj7;
      } else {
        obj8 = { style: { flex: 1 }, children: null };
        const obj9 = { tintColor: text, style: obj, children: headerTitle };
        obj8.children = tmp62(tmp(5631).HeaderTitle, obj9);
      }
      closure_10(closure_9, obj8);
    }
  } else {
    tmp32Result = null;
  }
  const items6 = [tmp32Result];
  let tmp38Result = null;
  if ("center" === headerTitleAlign) {
    if (typeof headerTitle !== "function") {
      const obj10 = { tintColor: text, style: obj, children: headerTitle };
      headerTitleResult = tmp38(tmp(5631).HeaderTitle, obj10);
    }
    const obj11 = { children: headerTitleResult };
    tmp38Result = tmp38(tmp(4912).ScreenStackHeaderCenterView, obj11);
  }
  items6[1] = tmp38Result;
  const items7 = [closure_12(closure_11, { children: items6 }), , ,];
  if (undefined !== headerBackIcon) {
    let source;
    if (headerBackIcon != null) {
      source = headerBackIcon.source;
    }
    if (source == null) {
      source = headerBackImageSource;
    }
    const obj12 = { source };
    let tmp40Result = closure_10(tmp(4912).ScreenStackHeaderBackButtonImage, obj12);
  } else {
    tmp40Result = null;
  }
  items7[1] = tmp40Result;
  let tmp42 = null;
  if (null != headerRightResult) {
    const obj13 = { children: headerRightResult };
    tmp42 = closure_10(tmp(4912).ScreenStackHeaderRightView, obj13);
  }
  items7[2] = tmp42;
  let tmp44 = null;
  if (isSearchBarAvailableForCurrentPlatform2) {
    const obj14 = { children: null };
    const obj15 = {};
    let merged = Object.assign(headerSearchBarOptions);
    obj14.children = closure_10(tmp(4912).SearchBar, obj15);
    tmp44 = closure_10(tmp(4912).ScreenStackHeaderSearchBarView, obj14);
  }
  items7[3] = tmp44;
  const obj16 = {
    backButtonInCustomView: tmp24,
    backgroundColor,
    backTitle: headerBackTitle,
    backTitleVisible: "minimal" !== headerBackButtonDisplayMode,
    backButtonDisplayMode: "fill",
    backTitleFontFamily: tmp10,
    backTitleFontSize: fontSize,
    blurEffect: headerBlurEffect,
    color: text,
    direction: obj.useLocale().direction,
    disableBackButtonMenu: false === headerBackButtonMenuEnabled,
    hidden: false === headerShown,
    hideBackButton: false === headerBackVisible,
    hideShadow: true,
    largeTitle: true,
    largeTitleBackgroundColor: true,
    largeTitleColor: true,
    largeTitleFontFamily: true,
    largeTitleFontSize: true,
    largeTitleFontWeight: true,
    largeTitleHideShadow: "setShouldAnimateExiting",
    title: null,
    titleColor: false,
    titleFontFamily: false,
    titleFontSize: false,
    titleFontWeight: false,
    topInsetEnabled: false,
    disableTopInsetApplication: false,
    disableLeftInsetApplication: false,
    disableRightInsetApplication: false,
    disableBottomInsetApplication: false,
    translucent: 1,
    children: "reason",
    headerLeftBarButtonItems: "enum",
    headerRightBarButtonItems: null,
    experimental_userInterfaceStyle: "\u{1F9C6}",
  };
  let tmp50 = false === headerShadowVisible;
  tmp32Result = tmp32(tmp33, { children: items7 });
  if (!tmp50) {
    tmp50 = null != headerBackground;
  }
  if (!tmp50) {
    if (headerTransparent) {
      headerTransparent = true !== headerShadowVisible;
    }
    tmp50 = headerTransparent;
  }
  obj16.hideShadow = tmp50;
  obj16.largeTitle = headerLargeTitleEnabled;
  obj16.largeTitleBackgroundColor = tmp8.backgroundColor;
  obj16.largeTitleColor = color;
  obj16.largeTitleFontFamily = tmp11;
  obj16.largeTitleFontSize = fontSize2;
  obj16.largeTitleFontWeight = tmp5.fontWeight;
  obj16.largeTitleHideShadow = false === headerLargeTitleShadowVisible;
  obj16.title = headerTitle;
  obj16.titleColor = headerTintColor;
  obj16.titleFontFamily = tmp12;
  obj16.titleFontSize = fontSize1;
  obj16.titleFontWeight = String(fontWeight);
  obj16.topInsetEnabled = headerTopInsetEnabled;
  let top;
  if (unstable_headerInsets != null) {
    top = unstable_headerInsets.top;
  }
  if (undefined !== top) {
    let tmp52 = !unstable_headerInsets.top;
  } else {
    tmp52 = !headerTopInsetEnabled;
  }
  obj16.disableTopInsetApplication = tmp52;
  let left;
  if (unstable_headerInsets != null) {
    left = unstable_headerInsets.left;
  }
  let tmp54;
  if (undefined !== left) {
    tmp54 = !unstable_headerInsets.left;
  }
  obj16.disableLeftInsetApplication = tmp54;
  let right;
  if (unstable_headerInsets != null) {
    right = unstable_headerInsets.right;
  }
  let tmp56;
  if (undefined !== right) {
    tmp56 = !unstable_headerInsets.right;
  }
  obj16.disableRightInsetApplication = tmp56;
  let bottom;
  if (unstable_headerInsets != null) {
    bottom = unstable_headerInsets.bottom;
  }
  let tmp58;
  if (undefined !== bottom) {
    tmp58 = !unstable_headerInsets.bottom;
  }
  obj16.disableBottomInsetApplication = tmp58;
  obj16.translucent = true === tmp26;
  obj16.children = tmp32Result;
  if (typeof processBarButtonItems === "function") {
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
              const error1 = new Error(
                "Invalid item type: " +
                  JSON.stringify(type) +
                  ". Valid types are 'button', 'menu', 'custom' and 'spacing'.",
              );
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
          const merged = Object.assign(_objectWithoutProperties(type, closure_3));
          obj.index = index;
          obj.title = type.label;
          obj = {};
          const merged1 = Object.assign(fonts.regular);
          const merged2 = Object.assign(labelStyle);
          obj.titleStyle = obj;
          if (typeof transformIcon === "function") {
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
                  const obj1 = {};
                  const merged4 = Object.assign(obj.menu);
                  let tmp34;
                  if (typeof multiselectable === "boolean") {
                    tmp34 = !multiselectable;
                  }
                  obj1.singleSelection = tmp34;
                  obj1.displayAsPalette = "palette" === menu.layout;
                  const items = type.menu.items;
                  obj1.items = items.map(getMenuItem);
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
                  let obj6 = ColorDefault(backgroundColor);
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
                  const obj4 = { backgroundColor, color: str9 };
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
              const error3 = new Error(
                "Invalid item type: " + JSON.stringify(type) + ". Valid types are 'button' and 'menu'.",
              );
              throw error3;
            } else if (false === icon.tinted) {
              const obj5 = { type: "imageSource", imageSource: null };
              icon = icon.source;
              obj5.imageSource = icon;
              obj6 = obj5;
            } else {
              obj6 = { type: "templateSource", templateSource: icon.source };
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          tmp12 = fonts;
        }
      });
      found = mapped.filter((item) => null != item);
    }
    obj16.headerLeftBarButtonItems = found;
    if (typeof tmp59 === "function") {
      closure_129_0 = colors;
      closure_129_1 = fonts;
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
                const error1 = new Error(
                  "Invalid item type: " +
                    JSON.stringify(type) +
                    ". Valid types are 'button', 'menu', 'custom' and 'spacing'.",
                );
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
            const merged = Object.assign(_objectWithoutProperties(type, closure_3));
            obj.index = index;
            obj.title = type.label;
            obj = {};
            const merged1 = Object.assign(fonts.regular);
            const merged2 = Object.assign(labelStyle);
            obj.titleStyle = obj;
            if (typeof transformIcon === "function") {
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
                    const obj1 = {};
                    const merged4 = Object.assign(obj.menu);
                    let tmp34;
                    if (typeof multiselectable === "boolean") {
                      tmp34 = !multiselectable;
                    }
                    obj1.singleSelection = tmp34;
                    obj1.displayAsPalette = "palette" === menu.layout;
                    const items = type.menu.items;
                    obj1.items = items.map(getMenuItem);
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
                    let obj6 = ColorDefault(backgroundColor);
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
                    const obj4 = { backgroundColor, color: str9 };
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
                const error3 = new Error(
                  "Invalid item type: " + JSON.stringify(type) + ". Valid types are 'button' and 'menu'.",
                );
                throw error3;
              } else if (false === icon.tinted) {
                const obj5 = { type: "imageSource", imageSource: null };
                icon = icon.source;
                obj5.imageSource = icon;
                obj6 = obj5;
              } else {
                obj6 = { type: "templateSource", templateSource: icon.source };
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
            tmp12 = fonts;
          }
        });
        found1 = mapped1.filter((item) => null != item);
      }
      obj16.headerRightBarButtonItems = found1;
      let str3 = "light";
      if (theme.dark) {
        str3 = "dark";
      }
      obj16.experimental_userInterfaceStyle = str3;
      return obj16;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const tmp9 = _slicedToArray(tmpResult.processFonts(items3), 3);
};

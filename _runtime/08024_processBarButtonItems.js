// _runtime/08024_processBarButtonItems.js
import ColorDefault from "05725_Color.js";
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
    const obj2 = {};
    ({ label, inline, layout } = type);
    const merged = Object.assign(_objectWithoutProperties(type, closure_4));
    if (typeof transformIcon === "function") {
      type = undefined;
      if (icon != null) {
        type = icon.type;
      }
      if ("image" !== type) {
        obj2.icon = icon;
        obj2.title = label;
        obj2.displayAsPalette = "palette" === layout;
        obj2.displayInline = inline;
        let tmp14;
        if (typeof multiselectable === "boolean") {
          tmp14 = !multiselectable;
        }
        obj2.singleSelection = tmp14;
        obj2.items = items.map(getMenuItem);
        return obj2;
      } else if (false === icon.tinted) {
        const obj3 = { type: "imageSource", imageSource: null };
        icon = icon.source;
        obj3.imageSource = icon;
      } else {
        const obj4 = { type: "templateSource", templateSource: icon.source };
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    let source = type.icon;
    const obj5 = {};
    ({ label: label2, description } = type);
    const merged1 = Object.assign(_objectWithoutProperties(type, closure_5));
    if (typeof transformIcon === "function") {
      let type1;
      if (source != null) {
        type1 = source.type;
      }
      if ("image" !== type1) {
        obj5.icon = source;
        obj5.title = label2;
        obj5.subtitle = description;
        return obj5;
      } else if (false === source.tinted) {
        const obj6 = { type: "imageSource", imageSource: null };
        source = source.source;
        obj6.imageSource = source;
      } else {
        const obj = { type: "templateSource", templateSource: source.source };
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
  let obj = colors(1485);
  const theme = colors(1485).useTheme();
  ({ colors, fonts } = theme);
  let text = headerTintColor;
  if (headerTintColor == null) {
    text = colors.text;
  }
  let items = [fonts.regular, headerBackTitleStyle];
  const tmp4 = closure_8.flatten(items) || {};
  const items1 = [fonts.medium, headerLargeTitleStyle];
  const tmp5 = closure_8.flatten(items1) || {};
  const items2 = [fonts.medium, headerTitleStyle];
  const tmp6 = closure_8.flatten(items2) || {};
  let obj2 = colors(1485);
  const tmp7 = closure_8.flatten(headerStyle) || {};
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
  const tmp8 = closure_8.flatten(headerLargeStyle) || {};
  const items3 = [tmp4.fontFamily, tmp5.fontFamily, tmp6.fontFamily];
  const tmpResult = colors(8025);
  let fontSize;
  [tmp10, tmp11, tmp12] = colors(8025).processFonts(items3);
  if ("fontSize" in tmp4) {
    fontSize = tmp4.fontSize;
  }
  const tmp9 = _slicedToArray(colors(8025).processFonts(items3), 3);
  const headerTitle1 = colors(5716).getHeaderTitle({ title, headerTitle }, route.name);
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
  let obj4 = { color: headerTintColor };
  if (null != tmp6.fontFamily) {
    obj4.fontFamily = tmp6.fontFamily;
  }
  if (null != fontSize1) {
    obj4.fontSize = fontSize1;
  }
  if (null != fontWeight) {
    obj4.fontWeight = fontWeight;
  }
  let headerLeftResult;
  if (headerLeft != null) {
    let obj5 = { tintColor: text, canGoBack: tmp18, label: null, href: "a" };
    let tmp20 = headerBackTitle;
    if (headerBackTitle == null) {
      let title1;
      if (headerBack != null) {
        title1 = headerBack.title;
      }
      tmp20 = title1;
    }
    obj5.label = tmp20;
    headerLeftResult = headerLeft(obj5);
  }
  let headerRightResult;
  if (headerRight != null) {
    let obj6 = { tintColor: text, canGoBack: tmp18 };
    headerRightResult = headerRight(obj6);
  }
  let headerTitleResult = null;
  if (typeof headerTitle === "function") {
    let obj7 = { tintColor: text, children: headerTitle1 };
    headerTitleResult = headerTitle(obj7);
  }
  const isSearchBarAvailableForCurrentPlatform = colors(4991).isSearchBarAvailableForCurrentPlatform;
  let isSearchBarAvailableForCurrentPlatform2 = typeof isSearchBarAvailableForCurrentPlatform === "boolean";
  if (typeof isSearchBarAvailableForCurrentPlatform === "boolean") {
    isSearchBarAvailableForCurrentPlatform2 = colors(4991).isSearchBarAvailableForCurrentPlatform;
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
    let obj8 = { tintColor: text, canGoBack: tmp18 };
    const result = unstable_headerLeftItems(obj8);
  }
  let result1;
  if (unstable_headerRightItems != null) {
    let obj9 = { tintColor: text, canGoBack: tmp18 };
    result1 = unstable_headerRightItems(obj9);
  }
  let reversed = result1;
  if (result1) {
    const items4 = [];
    HermesBuiltin.arraySpread(result1, 0);
    reversed = items4.reverse();
  }
  if (null != headerLeftResult) {
    let obj10 = null;
    if (!tmp31) {
      obj10 = { flex: 1 };
    }
    const obj11 = { style: obj10, children: null };
    const items5 = [headerLeftResult];
    if ("center" === headerTitleAlign) {
      items5[1] = null;
      obj11.children = items5;
      let tmp32Result = closure_12(colors(4991).ScreenStackHeaderLeftView, obj11);
    } else {
      if (typeof headerTitle === "function") {
        const obj12 = { style: { flex: 1 }, children: headerTitleResult };
        let obj13 = obj12;
      } else {
        obj13 = { style: { flex: 1 }, children: null };
        const obj14 = { tintColor: text, style: obj4, children: headerTitle1 };
        obj13.children = closure_10(colors(5716).HeaderTitle, obj14);
      }
      closure_10(closure_9, obj13);
    }
  } else {
    tmp32Result = null;
  }
  const items6 = [tmp32Result];
  let tmp38Result = null;
  if ("center" === headerTitleAlign) {
    if (typeof headerTitle !== "function") {
      const obj15 = { tintColor: text, style: obj4, children: headerTitle1 };
      headerTitleResult = closure_10(colors(5716).HeaderTitle, obj15);
    }
    const obj16 = { children: headerTitleResult };
    tmp38Result = closure_10(colors(4991).ScreenStackHeaderCenterView, obj16);
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
    const obj17 = { source };
    let tmp40Result = closure_10(colors(4991).ScreenStackHeaderBackButtonImage, obj17);
  } else {
    tmp40Result = null;
  }
  items7[1] = tmp40Result;
  let tmp42 = null;
  if (null != headerRightResult) {
    const obj18 = { children: headerRightResult };
    tmp42 = closure_10(colors(4991).ScreenStackHeaderRightView, obj18);
  }
  items7[2] = tmp42;
  let tmp44 = null;
  if (isSearchBarAvailableForCurrentPlatform2) {
    const obj19 = { children: null };
    const obj20 = {};
    let merged = Object.assign(headerSearchBarOptions);
    obj19.children = closure_10(colors(4991).SearchBar, obj20);
    tmp44 = closure_10(colors(4991).ScreenStackHeaderSearchBarView, obj19);
  }
  items7[3] = tmp44;
  const obj21 = {
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
    largeTitleHideShadow: "MakerNote",
    title: null,
    titleColor: true,
    titleFontFamily: true,
    titleFontSize: true,
    titleFontWeight: true,
    topInsetEnabled: true,
    disableTopInsetApplication: true,
    disableLeftInsetApplication: true,
    disableRightInsetApplication: true,
    disableBottomInsetApplication: true,
    translucent: true,
    children: true,
    headerLeftBarButtonItems: true,
    headerRightBarButtonItems: true,
    experimental_userInterfaceStyle: true,
  };
  let tmp50 = false === headerShadowVisible;
  const tmpResult2 = colors(5716);
  if (!tmp50) {
    tmp50 = null != headerBackground;
  }
  if (!tmp50) {
    if (headerTransparent) {
      headerTransparent = true !== headerShadowVisible;
    }
    tmp50 = headerTransparent;
  }
  obj21.hideShadow = tmp50;
  obj21.largeTitle = headerLargeTitleEnabled;
  obj21.largeTitleBackgroundColor = tmp8.backgroundColor;
  obj21.largeTitleColor = color;
  obj21.largeTitleFontFamily = tmp11;
  obj21.largeTitleFontSize = fontSize2;
  obj21.largeTitleFontWeight = tmp5.fontWeight;
  obj21.largeTitleHideShadow = false === headerLargeTitleShadowVisible;
  obj21.title = headerTitle1;
  obj21.titleColor = headerTintColor;
  obj21.titleFontFamily = tmp12;
  obj21.titleFontSize = fontSize1;
  obj21.titleFontWeight = String(fontWeight);
  obj21.topInsetEnabled = headerTopInsetEnabled;
  let top;
  if (unstable_headerInsets != null) {
    top = unstable_headerInsets.top;
  }
  if (undefined !== top) {
    let tmp52 = !unstable_headerInsets.top;
  } else {
    tmp52 = !headerTopInsetEnabled;
  }
  obj21.disableTopInsetApplication = tmp52;
  let left;
  if (unstable_headerInsets != null) {
    left = unstable_headerInsets.left;
  }
  let tmp54;
  if (undefined !== left) {
    tmp54 = !unstable_headerInsets.left;
  }
  obj21.disableLeftInsetApplication = tmp54;
  let right;
  if (unstable_headerInsets != null) {
    right = unstable_headerInsets.right;
  }
  let tmp56;
  if (undefined !== right) {
    tmp56 = !unstable_headerInsets.right;
  }
  obj21.disableRightInsetApplication = tmp56;
  let bottom;
  if (unstable_headerInsets != null) {
    bottom = unstable_headerInsets.bottom;
  }
  let tmp58;
  if (undefined !== bottom) {
    tmp58 = !unstable_headerInsets.bottom;
  }
  obj21.disableBottomInsetApplication = tmp58;
  obj21.translucent = true === tmp26;
  obj21.children = closure_12(closure_11, { children: items7 });
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
          const obj = {};
          const merged = Object.assign(_objectWithoutProperties(type, closure_3));
          obj.index = index;
          obj.title = type.label;
          const obj2 = {};
          const merged1 = Object.assign(fonts.regular);
          const merged2 = Object.assign(labelStyle);
          obj.titleStyle = obj2;
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
                  const obj3 = {};
                  const merged3 = Object.assign(obj);
                  const obj4 = {};
                  const merged4 = Object.assign(obj.menu);
                  let tmp34;
                  if (typeof multiselectable === "boolean") {
                    tmp34 = !multiselectable;
                  }
                  obj4.singleSelection = tmp34;
                  obj4.displayAsPalette = "palette" === menu.layout;
                  const items = type.menu.items;
                  obj4.items = items.map(getMenuItem);
                  obj3.menu = obj4;
                  let tmp23 = obj3;
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
                  let str9 = "white";
                  if (obj7.isLight()) {
                    str9 = "black";
                  }
                  const obj5 = {};
                  const merged5 = Object.assign(tmp23);
                  const obj6 = {};
                  const merged6 = Object.assign(badge);
                  const _String = String;
                  obj6.value = String(badge.value);
                  const obj8 = { backgroundColor, color: str9 };
                  const merged7 = Object.assign(fonts.regular);
                  const merged8 = Object.assign(badge.style);
                  obj6.style = obj8;
                  obj5.badge = obj6;
                  tmp36 = obj5;
                  obj7 = ColorDefault(backgroundColor);
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
              const obj9 = { type: "imageSource", imageSource: null };
              icon = icon.source;
              obj9.imageSource = icon;
            } else {
              const obj10 = { type: "templateSource", templateSource: icon.source };
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      });
      found = mapped.filter((item) => null != item);
    }
    obj21.headerLeftBarButtonItems = found;
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
            const obj = {};
            const merged = Object.assign(_objectWithoutProperties(type, closure_3));
            obj.index = index;
            obj.title = type.label;
            const obj2 = {};
            const merged1 = Object.assign(fonts.regular);
            const merged2 = Object.assign(labelStyle);
            obj.titleStyle = obj2;
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
                    const obj3 = {};
                    const merged3 = Object.assign(obj);
                    const obj4 = {};
                    const merged4 = Object.assign(obj.menu);
                    let tmp34;
                    if (typeof multiselectable === "boolean") {
                      tmp34 = !multiselectable;
                    }
                    obj4.singleSelection = tmp34;
                    obj4.displayAsPalette = "palette" === menu.layout;
                    const items = type.menu.items;
                    obj4.items = items.map(getMenuItem);
                    obj3.menu = obj4;
                    let tmp23 = obj3;
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
                    let str9 = "white";
                    if (obj7.isLight()) {
                      str9 = "black";
                    }
                    const obj5 = {};
                    const merged5 = Object.assign(tmp23);
                    const obj6 = {};
                    const merged6 = Object.assign(badge);
                    const _String = String;
                    obj6.value = String(badge.value);
                    const obj8 = { backgroundColor, color: str9 };
                    const merged7 = Object.assign(fonts.regular);
                    const merged8 = Object.assign(badge.style);
                    obj6.style = obj8;
                    obj5.badge = obj6;
                    tmp36 = obj5;
                    obj7 = ColorDefault(backgroundColor);
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
                const obj9 = { type: "imageSource", imageSource: null };
                icon = icon.source;
                obj9.imageSource = icon;
              } else {
                const obj10 = { type: "templateSource", templateSource: icon.source };
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        });
        found1 = mapped1.filter((item) => null != item);
      }
      obj21.headerRightBarButtonItems = found1;
      let str3 = "light";
      if (theme.dark) {
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
  const tmp32Result2 = closure_12(closure_11, { children: items7 });
};

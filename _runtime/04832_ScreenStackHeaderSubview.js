// === Module 4832: ScreenStackHeaderSubview ===

// Module 4832 (ScreenStackHeaderSubview)
import noopDefault from "noop" /* 19 */;
import get_controlledBottomTabsDefault from "get controlledBottomTabs" /* 4830 */;
import context from "context" /* 4833 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 4836 */;
import closure_6 from "_objectWithoutProperties" /* 109 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let closure_3 = ["style"];
let closure_4 = ["style"];
let closure_5 = ["style"];
({ Image: error, Platform, StyleSheet } = get_ActivityIndicator);
const forwardRefResult = noopDefault.forwardRef((disableLeftInsetApplication, ref) => {
  let obj = context;
  let flag = disableLeftInsetApplication.disableLeftInsetApplication;
  if (flag == null) {
    flag = false;
  }
  let flag2 = disableLeftInsetApplication.disableRightInsetApplication;
  if (flag2 == null) {
    flag2 = false;
  }
  let flag3 = disableLeftInsetApplication.disableBottomInsetApplication;
  if (flag3 == null) {
    flag3 = false;
  }
  const edgeInsetApplication = obj.useEdgeInsetApplication(flag, flag2, flag3);
  ({ headerLeftBarButtonItems, headerRightBarButtonItems } = disableLeftInsetApplication);
  let result;
  ({ consumeLeftInset, consumeRightInset, consumeBottomInset } = edgeInsetApplication);
  if (headerLeftBarButtonItems) {
    if (tmp(4829).isHeaderBarButtonsAvailableForCurrentPlatform) {
      let tmpResult = tmp(4834);
      result = tmpResult.prepareHeaderBarButtonItems(headerLeftBarButtonItems, "left");
    }
  }
  require = result;
  let result1;
  if (headerRightBarButtonItems) {
    if (tmp(4829).isHeaderBarButtonsAvailableForCurrentPlatform) {
      tmpResult = tmp(4834);
      result1 = tmpResult.prepareHeaderBarButtonItems(headerRightBarButtonItems, "right");
    }
  }
  let isHeaderBarButtonsAvailableForCurrentPlatform = tmp(4829).isHeaderBarButtonsAvailableForCurrentPlatform;
  if (isHeaderBarButtonsAvailableForCurrentPlatform) {
    let length;
    if (result != null) {
      length = result.length;
    }
    if (!length) {
      let length1;
      if (result1 != null) {
        length1 = result1.length;
      }
      length = length1;
    }
    isHeaderBarButtonsAvailableForCurrentPlatform = length;
  }
  let fn;
  if (isHeaderBarButtonsAvailableForCurrentPlatform) {
    fn = (arg0) => {
      closure_0 = arg0;
      let items = closure_0;
      if (closure_0 == null) {
        items = [];
      }
      const items1 = [...items];
      let items2 = result1;
      if (result1 == null) {
        items2 = [];
      }
      HermesBuiltin.arraySpread(items2, tmp);
      const found = items1.find((buttonId) => {
        let tmp = buttonId;
        if (buttonId) {
          tmp = "buttonId" in buttonId;
        }
        if (tmp) {
          tmp = buttonId.buttonId === nativeEvent.nativeEvent.buttonId;
        }
        return tmp;
      });
      let onPress = found;
      if (found) {
        onPress = "button" === found.type;
      }
      if (onPress) {
        onPress = found.onPress;
      }
      if (onPress) {
        found.onPress();
      }
    };
  }
  let fn2;
  if (isHeaderBarButtonsAvailableForCurrentPlatform) {
    fn2 = (nativeEvent) => {
      function findInMenu(menu, menuId) {
        const iter = menu.items[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if ("items" in nextResult) {
            let tmp7 = findInMenu;
            let tmp8 = nextResult;
            let tmp9 = findInMenu(tmp2, menuId);
            let tmp10 = tmp9;
            if (tmp9) {
              let tmp11 = iter;
              iter.return();
              return tmp9;
            }
          } else {
            let tmp3 = nextResult;
            if ("menuId" in tmp2) {
              let tmp4 = nextResult;
              if (tmp2.menuId === menuId) {
                let tmp5 = nextResult;
                let tmp6 = iter;
                iter.return();
                return tmp2;
              }
            }
          }
          continue;
        }
      }
      let items = findInMenu;
      if (findInMenu == null) {
        items = [];
      }
      const items1 = [...items];
      let items2 = result1;
      if (result1 == null) {
        items2 = [];
      }
      HermesBuiltin.arraySpread(items2, tmp);
      let iter = items1[Symbol.iterator]();
      let nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = nextResult;
        if (nextResult) {
          let tmp5 = nextResult;
          if ("menu" === tmp4.type) {
            let tmp6 = nextResult;
            if (tmp4.menu) {
              let tmp7 = nextResult;
              let findInMenuResult = findInMenu(tmp4.menu, nativeEvent.nativeEvent.menuId);
              let obj = findInMenuResult;
              if (findInMenuResult) {
                let tmp9 = findInMenuResult;
                let onPressResult = obj.onPress();
                let tmp11 = iter;
                iter.return();
              }
            }
          }
        }
        continue;
      }
    };
  }
  obj = {};
  const merged = Object.assign(disableLeftInsetApplication);
  obj.userInterfaceStyle = disableLeftInsetApplication.experimental_userInterfaceStyle;
  obj.consumeLeftInset = consumeLeftInset;
  obj.consumeRightInset = consumeRightInset;
  obj.consumeBottomInset = consumeBottomInset;
  obj.headerLeftBarButtonItems = result;
  obj.headerRightBarButtonItems = result1;
  obj.onPressHeaderBarButtonItem = fn;
  obj.onPressHeaderBarButtonMenuItem = fn2;
  obj.ref = ref;
  obj.style = closure_9.headerConfig;
  obj.pointerEvents = "box-none";
  obj.synchronousShadowStateUpdatesEnabled = result1(4830).experiment.synchronousHeaderConfigUpdatesEnabled;
  return jsx(result1(4835), {});
});
forwardRefResult.displayName = "ScreenStackHeaderConfig";
const styles = StyleSheet.create({ headerSubview: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, headerSubviewCenter: { flexDirection: "row", alignItems: "center", justifyContent: "center", flexShrink: 1 }, headerConfig: { position: "absolute", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "call" } });

export const ScreenStackHeaderSubview = __INTERNAL_VIEW_CONFIGDefault;
export const ScreenStackHeaderConfig = forwardRefResult;
export const ScreenStackHeaderBackButtonImage = (arg0) => {
  let obj = { type: "back", style: closure_9.headerSubview, synchronousShadowStateUpdatesEnabled: get_controlledBottomTabsDefault.experiment.synchronousHeaderSubviewUpdatesEnabled, children: null };
  obj = { resizeMode: "center", fadeDuration: 0 };
  const merged = Object.assign(arg0);
  obj[3] = <closure_7 resizeMode="center" fadeDuration={0} />;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, { resizeMode: "center", fadeDuration: 0 });
};
export const ScreenStackHeaderRightView = (style) => {
  const obj = {};
  const tmp = callback(style, closure_3);
  const merged = Object.assign(tmp);
  obj.type = "right";
  obj.synchronousShadowStateUpdatesEnabled = get_controlledBottomTabsDefault.experiment.synchronousHeaderSubviewUpdatesEnabled;
  const items = [closure_9.headerSubview, style.style];
  obj.style = items;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};
export const ScreenStackHeaderLeftView = (style) => {
  const obj = {};
  const tmp = callback(style, closure_4);
  const merged = Object.assign(tmp);
  obj.type = "left";
  obj.synchronousShadowStateUpdatesEnabled = get_controlledBottomTabsDefault.experiment.synchronousHeaderSubviewUpdatesEnabled;
  const items = [closure_9.headerSubview, style.style];
  obj.style = items;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};
export const ScreenStackHeaderCenterView = (style) => {
  const obj = {};
  const tmp = callback(style, closure_5);
  const merged = Object.assign(tmp);
  obj.type = "center";
  obj.synchronousShadowStateUpdatesEnabled = get_controlledBottomTabsDefault.experiment.synchronousHeaderSubviewUpdatesEnabled;
  const items = [closure_9.headerSubviewCenter, style.style];
  obj.style = items;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};
export const ScreenStackHeaderSearchBarView = (arg0) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.type = "searchBar";
  obj.synchronousShadowStateUpdatesEnabled = get_controlledBottomTabsDefault.experiment.synchronousHeaderSubviewUpdatesEnabled;
  obj.style = closure_9.headerSubview;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};
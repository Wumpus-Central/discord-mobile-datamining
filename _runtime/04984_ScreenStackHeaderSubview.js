// === Module 4984: ScreenStackHeaderSubview ===

// Module 4984 (ScreenStackHeaderSubview)
import get_synchronousScreenUpdatesEnabledDefault from "get synchronousScreenUpdatesEnabled" /* 4965 */;
import _mod4985 from "module_4985" /* 4985 */;
import _modDef4987 from "module_4987" /* 4987 */;
import _modDef4988 from "module_4988" /* 4988 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["style"];
let closure_4 = ["style"];
let closure_5 = ["style"];
get_ActivityIndicator = fn(17);
({ Image: closure_7, Platform, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const forwardRefResult = noop.forwardRef((hidden, ref) => {
  let obj = _mod4985;
  let flag = hidden.disableTopInsetApplication;
  if (flag == null) {
    flag = false;
  }
  let flag2 = hidden.disableLeftInsetApplication;
  if (flag2 == null) {
    flag2 = false;
  }
  let flag3 = hidden.disableRightInsetApplication;
  if (flag3 == null) {
    flag3 = false;
  }
  let flag4 = hidden.disableBottomInsetApplication;
  if (flag4 == null) {
    flag4 = false;
  }
  const edgeInsetApplication = obj.useEdgeInsetApplication(!hidden.hidden, flag, flag2, flag3, flag4);
  ({ headerLeftBarButtonItems, headerRightBarButtonItems } = hidden);
  let result;
  ({ appliesTopInset, useLegacyBehavior, consumeLeftInset, consumeRightInset, consumeBottomInset } = edgeInsetApplication);
  if (headerLeftBarButtonItems) {
    if (tmp(4982).isHeaderBarButtonsAvailableForCurrentPlatform) {
      let tmpResult = tmp(4986);
      result = tmpResult.prepareHeaderBarButtonItems(headerLeftBarButtonItems, "left");
    }
  }
  require = result;
  let result1;
  if (headerRightBarButtonItems) {
    if (tmp(4982).isHeaderBarButtonsAvailableForCurrentPlatform) {
      tmpResult = tmp(4986);
      result1 = tmpResult.prepareHeaderBarButtonItems(headerRightBarButtonItems, "right");
    }
  }
  let isHeaderBarButtonsAvailableForCurrentPlatform = tmp(4982).isHeaderBarButtonsAvailableForCurrentPlatform;
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
      const nativeEvent = arg0;
      let items = result;
      if (result == null) {
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
            let tmp9 = findInMenu(tmp2, menuId);
            if (tmp9) {
              iter.return();
              return tmp9;
            }
          } else if ("menuId" in tmp2) {
            if (tmp2.menuId === menuId) {
              iter.return();
              return tmp2;
            }
          }
          continue;
        }
      }
      let items = result;
      if (result == null) {
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
          if ("menu" === tmp4.type) {
            if (tmp4.menu) {
              let findInMenuResult = findInMenu(tmp4.menu, nativeEvent.nativeEvent.menuId);
              let obj = findInMenuResult;
              if (findInMenuResult) {
                let onPressResult = obj.onPress();
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
  const merged = Object.assign(hidden);
  obj.userInterfaceStyle = hidden.experimental_userInterfaceStyle;
  obj.headerLeftBarButtonItems = result;
  obj.headerRightBarButtonItems = result1;
  obj.onPressHeaderBarButtonItem = fn;
  obj.onPressHeaderBarButtonMenuItem = fn2;
  obj.ref = ref;
  obj.style = closure_9.headerConfig;
  obj.pointerEvents = "box-none";
  obj.synchronousShadowStateUpdatesEnabled = get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderConfigUpdatesEnabled;
  obj.consumeTopInset = appliesTopInset;
  obj.consumeLeftInset = consumeLeftInset;
  obj.consumeRightInset = consumeRightInset;
  obj.consumeBottomInset = consumeBottomInset;
  obj.legacyTopInsetBehavior = useLegacyBehavior;
  return jsx(_modDef4987, {});
});
forwardRefResult.displayName = "ScreenStackHeaderConfig";
const styles = StyleSheet.create({ headerSubview: { flexDirection: "row", alignItems: "center", justifyContent: "center" }, headerSubviewCenter: { flexDirection: "row", alignItems: "center", justifyContent: "center", flexShrink: 1 }, headerConfig: { position: "absolute", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "call" } });

export const ScreenStackHeaderSubview = _modDef4988;
export const ScreenStackHeaderConfig = forwardRefResult;
export const ScreenStackHeaderBackButtonImage = (arg0) => {
  const element = { type: "back", style: closure_9.headerSubview, synchronousShadowStateUpdatesEnabled: get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderSubviewUpdatesEnabled, children: null };
  const merged = Object.assign(arg0);
  element.children = <React5 resizeMode="center" fadeDuration={0} />;
  return jsx(_modDef4988, { type: "back", style: closure_9.headerSubview, synchronousShadowStateUpdatesEnabled: get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderSubviewUpdatesEnabled, children: null });
};
export const ScreenStackHeaderRightView = (style) => {
  const obj = {};
  const tmp = _objectWithoutProperties(style, closure_3);
  const merged = Object.assign(tmp);
  obj.type = "right";
  obj.synchronousShadowStateUpdatesEnabled = get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderSubviewUpdatesEnabled;
  const items = [closure_9.headerSubview, style.style];
  obj.style = items;
  return jsx(_modDef4988, {});
};
export const ScreenStackHeaderLeftView = (style) => {
  const obj = {};
  const tmp = _objectWithoutProperties(style, closure_4);
  const merged = Object.assign(tmp);
  obj.type = "left";
  obj.synchronousShadowStateUpdatesEnabled = get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderSubviewUpdatesEnabled;
  const items = [closure_9.headerSubview, style.style];
  obj.style = items;
  return jsx(_modDef4988, {});
};
export const ScreenStackHeaderCenterView = (style) => {
  const obj = {};
  const tmp = _objectWithoutProperties(style, closure_5);
  const merged = Object.assign(tmp);
  obj.type = "center";
  obj.synchronousShadowStateUpdatesEnabled = get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderSubviewUpdatesEnabled;
  const items = [closure_9.headerSubviewCenter, style.style];
  obj.style = items;
  return jsx(_modDef4988, {});
};
export const ScreenStackHeaderSearchBarView = (arg0) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj.type = "searchBar";
  obj.synchronousShadowStateUpdatesEnabled = get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderSubviewUpdatesEnabled;
  obj.style = closure_9.headerSubview;
  return jsx(_modDef4988, {});
};
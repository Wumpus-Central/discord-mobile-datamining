// _runtime/05748_ScreenStackHeaderSubview.js
import Fragment from "react/00021_Fragment.js";
import get_synchronousScreenUpdatesEnabledDefault from "05729_get_synchronousScreenUpdatesEnabled.js";
import react_native from "05746_react-native.js";
import _mod5749 from "metro/05749__.js";
import react_native2 from "05750_react-native.js";
import _modDef5751 from "metro/05751__.js";
import react_nativeDefault from "05752_react-native.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import react from "00019_react.js";
import react_native3 from "00017_react-native.js";

let Platform;
let StyleSheet;
let metroImportDefault;
let closure_3 = ["style"];
let closure_4 = ["style"];
let closure_5 = ["style"];
({ Image: metroImportDefault, Platform, StyleSheet } = react_native3);
const jsx = Fragment.jsx;
const forwardRefResult = react.forwardRef((hidden, ref) => {
  let appliesTopInset;
  let consumeBottomInset;
  let consumeLeftInset;
  let consumeRightInset;
  let headerLeftBarButtonItems;
  let headerRightBarButtonItems;
  let useLegacyBehavior;
  let tmp3 = _mod5749;
  let tmp4 = !hidden.hidden;
  let flag = hidden.disableTopInsetApplication;
  const useEdgeInsetApplication = tmp3.useEdgeInsetApplication;
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
  const edgeInsetApplication = useEdgeInsetApplication(tmp4, flag, flag2, flag3, flag4);
  ({ headerLeftBarButtonItems, headerRightBarButtonItems } = hidden);
  let result;
  ({ appliesTopInset, useLegacyBehavior, consumeLeftInset, consumeRightInset, consumeBottomInset } =
    edgeInsetApplication);
  if (headerLeftBarButtonItems) {
    if (react_native.isHeaderBarButtonsAvailableForCurrentPlatform) {
      const str = "left";
      const tmpResult = react_native2;
      result = tmpResult.prepareHeaderBarButtonItems(headerLeftBarButtonItems, "left");
    }
  }
  let result1;
  if (headerRightBarButtonItems) {
    if (react_native.isHeaderBarButtonsAvailableForCurrentPlatform) {
      const tmpResult2 = react_native2;
      result1 = tmpResult2.prepareHeaderBarButtonItems(headerRightBarButtonItems, "right");
    }
  }
  let isHeaderBarButtonsAvailableForCurrentPlatform = react_native.isHeaderBarButtonsAvailableForCurrentPlatform;
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
      let closure_0 = arg0;
      let items = result;
      if (result == null) {
        items = [];
      }
      const items1 = [...items];
      let items2 = result1;
      if (result1 == null) {
        items2 = [];
      }
      HermesBuiltin.arraySpread(items1, items2, tmp2);
      const found = items1.find(
        (buttonId) => buttonId && "buttonId" in buttonId && buttonId.buttonId === nativeEvent.nativeEvent.buttonId,
      );
      let onPress = found;
      if (onPress) {
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
      let tmp2;
      function findInMenu(menu, menuId) {
        const iter = menu.items[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if ("items" in nextResult) {
            let tmp9 = findInMenu(tmp2, menuId);
            let tmp10 = tmp9;
            if (tmp10) {
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
      HermesBuiltin.arraySpread(items1, items2, tmp2);
      let iter = items1[Symbol.iterator]();
      let nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        if (tmp5) {
          let tmp6 = nextResult;
          if ("menu" === tmp5.type) {
            if (tmp5.menu) {
              let tmp8 = nextResult;
              let findInMenuResult = findInMenu(tmp5.menu, nativeEvent.nativeEvent.menuId);
              let obj = findInMenuResult;
              if (obj) {
                let tmp10 = findInMenuResult;
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
  let tmp10 = _modDef5751;
  const merged = Object.assign(hidden);
  return (
    <tmp10
      userInterfaceStyle={hidden.experimental_userInterfaceStyle}
      headerLeftBarButtonItems={result}
      headerRightBarButtonItems={result1}
      onPressHeaderBarButtonItem={fn}
      onPressHeaderBarButtonMenuItem={fn2}
      ref={ref}
      style={closure_9.headerConfig}
      pointerEvents="box-none"
      synchronousShadowStateUpdatesEnabled={
        get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderConfigUpdatesEnabled
      }
      consumeTopInset={appliesTopInset}
      consumeLeftInset={consumeLeftInset}
      consumeRightInset={consumeRightInset}
      consumeBottomInset={consumeBottomInset}
      legacyTopInsetBehavior={useLegacyBehavior}
    />
  );
});
forwardRefResult.displayName = "ScreenStackHeaderConfig";
const styles = StyleSheet.create({
  headerSubview: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  headerSubviewCenter: { flexDirection: "row", alignItems: "center", justifyContent: "center", flexShrink: 1 },
  headerConfig: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "applicationId",
  },
});

export const ScreenStackHeaderSubview = react_nativeDefault;
export const ScreenStackHeaderConfig = forwardRefResult;
export const ScreenStackHeaderBackButtonImage = (arg0) => {
  react_nativeDefault;
  const merged = Object.assign(arg0);
  return (
    <tmp
      type="back"
      style={closure_9.headerSubview}
      synchronousShadowStateUpdatesEnabled={
        get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderSubviewUpdatesEnabled
      }
    >
      {null}
    </tmp>
  );
};
export const ScreenStackHeaderRightView = (style) => {
  style = style.style;
  const tmp = _objectWithoutProperties(style, closure_3);
  react_nativeDefault;
  const merged = Object.assign(tmp);
  const items = [closure_9.headerSubview, style];
  return (
    <tmp2
      type="right"
      synchronousShadowStateUpdatesEnabled={
        get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderSubviewUpdatesEnabled
      }
      style={items}
    />
  );
};
export const ScreenStackHeaderLeftView = (style) => {
  style = style.style;
  const tmp = _objectWithoutProperties(style, closure_4);
  react_nativeDefault;
  const merged = Object.assign(tmp);
  const items = [closure_9.headerSubview, style];
  return (
    <tmp2
      type="left"
      synchronousShadowStateUpdatesEnabled={
        get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderSubviewUpdatesEnabled
      }
      style={items}
    />
  );
};
export const ScreenStackHeaderCenterView = (style) => {
  style = style.style;
  const tmp = _objectWithoutProperties(style, closure_5);
  react_nativeDefault;
  const merged = Object.assign(tmp);
  const items = [closure_9.headerSubviewCenter, style];
  return (
    <tmp2
      type="center"
      synchronousShadowStateUpdatesEnabled={
        get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderSubviewUpdatesEnabled
      }
      style={items}
    />
  );
};
export const ScreenStackHeaderSearchBarView = (arg0) => {
  react_nativeDefault;
  const merged = Object.assign(arg0);
  return (
    <tmp
      type="searchBar"
      synchronousShadowStateUpdatesEnabled={
        get_synchronousScreenUpdatesEnabledDefault.experiment.synchronousHeaderSubviewUpdatesEnabled
      }
      style={closure_9.headerSubview}
    />
  );
};

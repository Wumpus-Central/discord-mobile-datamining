// discord_app/modules/devtools/native/components/DevToolsNavigator.tsx
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _modDef5260 from "module_5260" /* 5260 */;
import DevToolsContentSortButtonsDefault from "DevToolsContentSortButtons" /* 13947 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 9931 */;
import importAllResult from "noop" /* 19 */;
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createNativeStackNavigator.createNativeStackNavigator();
let closure_7 = importAllResult.memo((screenKey) => {
  let str = screenKey.screenKey;
  let _require;
  let obj = _NavigationStack;
  _require = obj.useAccessibilityNativeStackOptions();
  if (str == null) {
    str = "home";
  }
  obj = {
    initialRouteName: str,
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[5]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: callback(closure_1_2[5]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(callback);
      return obj;
    },
    children: null
  };
  obj = {
    name: "home",
    component: DevToolsContentSortButtonsDefault,
    options() {
      return {
        headerTitle() {
          let obj = { style: { flexDirection: "row" }, children: null };
          const items = [callback3(callback(9830).HammerIcon, { size: "sm" }), ];
          obj = { style: null, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: "DevTools" };
          obj = { marginLeft: callback2(712).space.PX_8 };
          obj[0] = obj;
          items[1] = callback3(callback(4734).Text, obj);
          obj[1] = items;
          return callback4(closure_3, obj);
        },
        title: "DevTools"
      };
    }
  };
  let items = [callback(Navigator.Screen, obj), ];
  let merged = Object.assign(tmp(13949).DevToolsScreens);
  let merged1 = Object.assign(tmp(13949).PerformanceTestingScreens);
  const entries = Object.entries({});
  items[1] = entries.map((arg0) => {
    [tmp, ] = arg0;
    return callback2(Screen.Screen, {
      name: tmp,
      children: tmp2,
      options() {
        return { title: closure_0 };
      }
    }, tmp);
  });
  obj[2] = items;
  return closure_5(Navigator.Navigator, obj);
});
const result = require("set").fileFinishedImporting("modules/devtools/native/components/DevToolsNavigator.tsx");

export const navigateToDevTools = function navigateToDevTools(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef5260.pushLazy(() => Promise.resolve(closure_7), { screenKey: obj.screenKey }, "DevToolsNavigator");
};
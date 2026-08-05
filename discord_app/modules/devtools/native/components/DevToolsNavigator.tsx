// discord_app/modules/devtools/native/components/DevToolsNavigator.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";
import importAllResult from "noop";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
let closure_7 = require("noop").memo((screenKey) => {
  let str = screenKey.screenKey;
  let _require;
  let obj = _require(5665);
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
        headerLeft: null,
        headerTitleAlign: "center"
      };
      obj[1] = callback(outer1_2[5]).getRenderModalCloseImage(navigation.navigation);
      let merged = Object.assign(callback);
      return obj;
    },
    children: null
  };
  obj = {
    name: "home",
    component: importDefault(13749),
    options() {
      return {
        headerTitle() {
          let obj = { style: { flexDirection: "row" }, children: null };
          const items = [callback3(callback(10454).HammerIcon, { size: "sm" }), ];
          obj = { style: null, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: "DevTools" };
          obj = { marginLeft: null };
          obj[0] = callback2(712).space.PX_8;
          obj[0] = obj;
          items[1] = callback3(callback(4281).Text, obj);
          obj[1] = items;
          return callback4(closure_3, obj);
        },
        title: "DevTools"
      };
    }
  };
  let items = [callback(createNativeStackNavigator.Screen, obj), ];
  let merged = Object.assign(tmp(13751).DevToolsScreens);
  let merged1 = Object.assign(tmp(13751).PerformanceTestingScreens);
  const entries = Object.entries({});
  items[1] = entries.map((arg0) => {
    let tmp;
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
  return closure_5(createNativeStackNavigator.Navigator, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/devtools/native/components/DevToolsNavigator.tsx");

export const navigateToDevTools = function navigateToDevTools(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  importDefault(4253).hideActionSheet();
  const obj2 = importDefault(4253);
  importDefault(4490).pushLazy(() => Promise.resolve(closure_7), { screenKey: obj.screenKey }, "DevToolsNavigator");
};
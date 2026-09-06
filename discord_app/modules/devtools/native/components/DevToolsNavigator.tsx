// === Module 14581: DevToolsNavigator ===

// Module 14581 (DevToolsNavigator)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import HeaderShared from "HeaderShared" /* 7863 */;
import SettingHookHarnessDefault from "SettingHookHarness" /* 14582 */;
import DevToolsContentDefault from "DevToolsContent" /* 15743 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const NativeStackNavigator = fn(7913);
const Navigator = NativeStackNavigator.createNativeStackNavigator();
let closure_8 = noop.memo((screenKey) => {
  let str = screenKey.screenKey;
  _require = undefined;
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  let items = [closure_4(SettingHookHarnessDefault, {}), ];
  if (str == null) {
    str = "home";
  }
  obj = { children: null };
  obj = {
    initialRouteName: str,
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.assign({ children: 0 }));
          const merged1 = Object.assign(merged);
          return closure_1_4(closure_1_0(closure_1_2[6]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(closure_0);
      return obj;
    },
    children: null
  };
  const items1 = [
    closure_4(Navigator.Screen, {
      name: "home",
      component: DevToolsContentDefault,
      options() {
        return {
          headerTitle() {
            let obj = { style: { flexDirection: "row" }, children: null };
            const items = [closure_1_4(closure_1_0(9433).HammerIcon, { size: "sm" }), ];
            obj = { style: null, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: "DevTools" };
            obj = { marginLeft: closure_1_1(576).space.PX_8 };
            obj.style = obj;
            items[1] = closure_1_4(closure_1_0(4556).Text, obj);
            obj.children = items;
            return closure_1_5(closure_1_3, obj);
          },
          title: "DevTools"
        };
      }
    }),
  ,

  ];
  let merged = Object.assign(tmp(15578).DevToolsScreens);
  let merged1 = Object.assign(tmp(15578).PerformanceTestingScreens);
  const entries = Object.entries({});
  items1[1] = entries.map((item) => {
    [tmp, ] = item;
    return closure_1_4(Navigator.Screen, {
      name: tmp,
      children: tmp2,
      options() {
        return { title };
      }
    }, tmp);
  });
  const obj1 = {
    name: "home",
    component: DevToolsContentDefault,
    options() {
      return {
        headerTitle() {
          let obj = { style: { flexDirection: "row" }, children: null };
          const items = [closure_1_4(closure_1_0(9433).HammerIcon, { size: "sm" }), ];
          obj = { style: null, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: "DevTools" };
          obj = { marginLeft: closure_1_1(576).space.PX_8 };
          obj.style = obj;
          items[1] = closure_1_4(closure_1_0(4556).Text, obj);
          obj.children = items;
          return closure_1_5(closure_1_3, obj);
        },
        title: "DevTools"
      };
    }
  };
  const obj2 = {};
  const tmp4 = closure_6;
  const designSystemScreens = require("SettingRendererUtils").getDesignSystemScreens();
  items1[2] = designSystemScreens.map((item) => {
    [, tmp] = item;
    return closure_4(Screen.Screen, {
      name: tmp.route,
      getComponent: tmp.getComponent,
      options(navigation) {
        let obj = closure_0(dependencyMap[5]);
        let str = obj.getCachedSettingTitle(closure_1_0);
        if (str == null) {
          str = "Design System";
        }
        obj = { title: str, headerLeft: closure_0(dependencyMap[6]).getRenderModalBackImage(navigation.navigation) };
        return obj;
      }
    }, tmp.route);
  });
  obj.children = items1;
  items[1] = closure_5(Navigator.Navigator, obj);
  obj.children = items;
  return closure_5(tmp4, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsNavigator.tsx");

export const navigateToDevTools = function navigateToDevTools(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(() => Promise.resolve(closure_1_8), { screenKey: obj.screenKey }, "DevToolsNavigator");
};
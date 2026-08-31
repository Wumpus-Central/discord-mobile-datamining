// discord_app/modules/devtools/native/components/DevToolsNavigator.tsx
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef4691 from "../../../../actions/ModalActionCreators.tsx";
import mapDefault from "../../../settings/native/renderer/SettingHookHarness.tsx";
import DevToolsContentSortButtonsDefault from "DevToolsContent.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../_runtime/07790_createNativeStackNavigator.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";

const require = arg1;
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
let closure_7 = createNativeStackNavigator.createNativeStackNavigator();
let closure_8 = importAllResult.memo((screenKey) => {
  let str = screenKey.screenKey;
  let _require;
  let obj = NavigationStack;
  _require = obj.useAccessibilityNativeStackOptions();
  let items = [callback(mapDefault, {}), ];
  if (str == null) {
    str = "home";
  }
  obj = { children: null };
  obj = {
    initialRouteName: str,
    screenOptions(navigation) {
      const obj = {
        headerTitle(children) {
          const merged = Object.assign(children, Object.create(null));
          const merged1 = Object.assign(merged);
          return callback2(callback(table[6]).GenericHeaderTitle, { title: children.children });
        },
        headerLeft: callback(closure_1_2[6]).getRenderModalCloseImage(navigation.navigation),
        headerTitleAlign: "center"
      };
      let merged = Object.assign(callback);
      return obj;
    },
    children: null
  };
  const items1 = [
    callback(Navigator.Screen, {
      name: "home",
      component: DevToolsContentSortButtonsDefault,
      options() {
        return {
          headerTitle() {
            let obj = { style: { flexDirection: "row" }, children: null };
            const items = [callback3(callback(9334).HammerIcon, { size: "sm" }), ];
            obj = { style: null, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: "DevTools" };
            obj = { marginLeft: callback2(712).space.PX_8 };
            obj[0] = obj;
            items[1] = callback3(callback(4444).Text, obj);
            obj[1] = items;
            return callback4(closure_3, obj);
          },
          title: "DevTools"
        };
      }
    }),
  ,

  ];
  let merged = Object.assign(tmp(15144).DevToolsScreens);
  let merged1 = Object.assign(tmp(15144).PerformanceTestingScreens);
  const entries = Object.entries({});
  items1[1] = entries.map((arg0) => {
    [tmp, ] = arg0;
    return callback2(closure_7.Screen, {
      name: tmp,
      children: tmp2,
      options() {
        return { title: closure_0 };
      }
    }, tmp);
  });
  obj1 = {
    name: "home",
    component: DevToolsContentSortButtonsDefault,
    options() {
      return {
        headerTitle() {
          let obj = { style: { flexDirection: "row" }, children: null };
          const items = [callback3(callback(9334).HammerIcon, { size: "sm" }), ];
          obj = { style: null, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: "DevTools" };
          obj = { marginLeft: callback2(712).space.PX_8 };
          obj[0] = obj;
          items[1] = callback3(callback(4444).Text, obj);
          obj[1] = items;
          return callback4(closure_3, obj);
        },
        title: "DevTools"
      };
    }
  };
  const obj2 = {};
  const tmp4 = closure_6;
  const tmp5 = callback;
  const tmp6 = importDefault;
  const tmp7 = Navigator;
  const designSystemScreens = require("../../../settings/native/renderer/SettingRendererUtils.tsx").getDesignSystemScreens();
  items1[2] = designSystemScreens.map((arg0) => {
    [, tmp] = arg0;
    return callback2(closure_7.Screen, {
      name: tmp.route,
      getComponent: tmp.getComponent,
      options(navigation) {
        let obj = closure_1_0(closure_1_2[5]);
        let str = obj.getCachedSettingTitle(closure_0);
        if (str == null) {
          str = "Design System";
        }
        obj = { title: str, headerLeft: closure_1_0(closure_1_2[6]).getRenderModalBackImage(navigation.navigation) };
        return obj;
      }
    }, tmp.route);
  });
  obj[2] = items1;
  items[1] = closure_5(Navigator.Navigator, obj);
  obj[0] = items;
  return closure_5(tmp4, obj);
});
const result = require("set").fileFinishedImporting("modules/devtools/native/components/DevToolsNavigator.tsx");

export const navigateToDevTools = function navigateToDevTools(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
  const obj2 = ACTION_SHEET_HEIGHT_HALFDefault;
  _modDef4691.pushLazy(() => Promise.resolve(closure_8), { screenKey: obj.screenKey }, "DevToolsNavigator");
};
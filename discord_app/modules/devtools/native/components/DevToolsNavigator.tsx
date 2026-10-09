// discord_app/modules/devtools/native/components/DevToolsNavigator.tsx
import Types from "../../../main_tabs_v2/Types.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import SettingHookHarnessDefault from "../../../settings/native/renderer/SettingHookHarness.tsx";
import DevToolsContentDefault from "DevToolsContent.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["children"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const NativeStackNavigator = fn(9317);
let closure_10 = NativeStackNavigator.createNativeStackNavigator();
const ReactCompilerGating = fn(558);
let closure_11 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function DevToolsNavigator(screenKey) {
        const cResult = accessibilityNativeStackOptions(576).c(9);
        let str = screenKey.screenKey;
        let obj = accessibilityNativeStackOptions(576);
        accessibilityNativeStackOptions = accessibilityNativeStackOptions(6686).useAccessibilityNativeStackOptions();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp8 = closure_7(SettingHookHarnessDefault, {});
          cResult[0] = tmp8;
          let first = tmp8;
        } else {
          first = cResult[0];
        }
        if (str == null) {
          str = "home";
        }
        if (cResult[1] !== accessibilityNativeStackOptions) {
          const fn = function f(navigation) {
            const obj = {
              headerTitle(children) {
                const merged = Object.assign(closure_1_5(children, closure_1_3));
                return closure_1_7(accessibilityNativeStackOptions(closure_1_2[10]).GenericHeaderTitle, {
                  title: children.children,
                });
              },
              headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
              headerTitleAlign: "center",
            };
            let merged = Object.assign(accessibilityNativeStackOptions);
            return obj;
          };
          cResult[1] = accessibilityNativeStackOptions;
          cResult[2] = fn;
          let tmp9 = fn;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            name: "home",
            component: DevToolsContentDefault,
            options() {
              return {
                headerTitle() {
                  const obj = { style: { flexDirection: "row" }, children: null };
                  const items = [closure_1_7(accessibilityNativeStackOptions(11396).HammerIcon, { size: "sm" })];
                  const obj2 = {
                    style: { marginLeft: closure_1_1(587).space.PX_8 },
                    variant: "heading-md/semibold",
                    color: "mobile-text-heading-primary",
                    children: "DevTools",
                  };
                  items[1] = closure_1_7(accessibilityNativeStackOptions(5087).Text, obj2);
                  obj.children = items;
                  return closure_1_8(closure_1_6, obj);
                },
                title: "DevTools",
              };
            },
          };
          const tmp16 = closure_7(closure_10.Screen, obj3);
          const _Object = Object;
          const obj4 = {};
          let merged = Object.assign(tmp(15799).DevToolsScreens);
          const merged1 = Object.assign(tmp(15799).PerformanceTestingScreens);
          const entries = Object.entries(obj4);
          const mapped = entries.map((item) => {
            [tmp2, tmp3] = item;
            const headerTitle = tmp3.headerTitle;
            return closure_1_7(
              closure_1_10.Screen,
              {
                name: tmp2,
                children: tmp3.render,
                options() {
                  return { title: headerTitle };
                },
              },
              tmp2,
            );
          });
          const designSystemScreens = tmp(14887).getDesignSystemScreens();
          const mapped1 = designSystemScreens.map((item) => {
            [accessibilityNativeStackOptions, tmp2] = closure_4(item, 2);
            return closure_7(
              closure_10.Screen,
              {
                name: tmp2.route,
                getComponent: tmp2.getComponent,
                options(navigation) {
                  let str = accessibilityNativeStackOptions(dependencyMap[9]).getCachedSettingTitle(closure_1_0);
                  if (str == null) {
                    str = "Design System";
                  }
                  const obj2 = { title: str, headerLeft: null };
                  const obj = accessibilityNativeStackOptions(dependencyMap[9]);
                  obj2.headerLeft = accessibilityNativeStackOptions(dependencyMap[10]).getRenderModalBackImage(
                    navigation.navigation,
                  );
                  return obj2;
                },
              },
              tmp2.route,
            );
          });
          cResult[3] = tmp16;
          cResult[4] = mapped;
          cResult[5] = mapped1;
          let tmp12 = mapped1;
          let tmp11 = mapped;
          let tmp10 = tmp16;
          const tmpResult = tmp(14887);
        } else {
          tmp10 = cResult[3];
          tmp11 = cResult[4];
          tmp12 = cResult[5];
        }
        if (cResult[6] === str) {
          if (cResult[7] === tmp9) {
            let tmp23 = cResult[8];
          }
          return tmp23;
        }
        const obj5 = { children: null };
        let items = [first];
        const obj6 = { initialRouteName: str, screenOptions: tmp9, children: null };
        const items1 = [tmp10, tmp11, tmp12];
        obj6.children = items1;
        items[1] = closure_8(closure_10.Navigator, obj6);
        obj5.children = items;
        const tmp24 = closure_8(closure_9, obj5);
        cResult[6] = str;
        cResult[7] = tmp9;
        cResult[8] = tmp24;
        tmp23 = tmp24;
        let obj2 = accessibilityNativeStackOptions(6686);
      }
    : function DevToolsNavigator(screenKey) {
        let str = screenKey.screenKey;
        _require = undefined;
        _require = require("Navigator").useAccessibilityNativeStackOptions();
        let items = [closure_7(SettingHookHarnessDefault, {})];
        if (str == null) {
          str = "home";
        }
        let obj2 = { children: null };
        const obj3 = {
          initialRouteName: str,
          screenOptions(navigation) {
            const obj = {
              headerTitle(children) {
                const merged = Object.assign(children, Object.assign({ children: 0 }));
                const merged1 = Object.assign(merged);
                return closure_1_7(closure_1_0(closure_1_2[10]).GenericHeaderTitle, { title: children.children });
              },
              headerLeft: HeaderShared.getRenderModalCloseImage(navigation.navigation),
              headerTitleAlign: "center",
            };
            let merged = Object.assign(closure_0);
            return obj;
          },
          children: null,
        };
        let obj = require("Navigator");
        const items1 = [
          closure_7(closure_10.Screen, {
            name: "home",
            component: DevToolsContentDefault,
            options() {
              return {
                headerTitle() {
                  const obj = { style: { flexDirection: "row" }, children: null };
                  const items = [closure_1_7(closure_1_0(11396).HammerIcon, { size: "sm" })];
                  const obj2 = {
                    style: { marginLeft: closure_1_1(587).space.PX_8 },
                    variant: "heading-md/semibold",
                    color: "mobile-text-heading-primary",
                    children: "DevTools",
                  };
                  items[1] = closure_1_7(closure_1_0(5087).Text, obj2);
                  obj.children = items;
                  return closure_1_8(closure_1_6, obj);
                },
                title: "DevTools",
              };
            },
          }),
          ,
        ];
        let merged = Object.assign(tmp(15799).DevToolsScreens);
        let merged1 = Object.assign(tmp(15799).PerformanceTestingScreens);
        const entries = Object.entries({});
        items1[1] = entries.map((item) => {
          [tmp] = item;
          return closure_1_7(
            closure_1_10.Screen,
            {
              name: tmp,
              children: tmp2,
              options() {
                return { title };
              },
            },
            tmp,
          );
        });
        const obj4 = {
          name: "home",
          component: DevToolsContentDefault,
          options() {
            return {
              headerTitle() {
                const obj = { style: { flexDirection: "row" }, children: null };
                const items = [closure_1_7(closure_1_0(11396).HammerIcon, { size: "sm" })];
                const obj2 = {
                  style: { marginLeft: closure_1_1(587).space.PX_8 },
                  variant: "heading-md/semibold",
                  color: "mobile-text-heading-primary",
                  children: "DevTools",
                };
                items[1] = closure_1_7(closure_1_0(5087).Text, obj2);
                obj.children = items;
                return closure_1_8(closure_1_6, obj);
              },
              title: "DevTools",
            };
          },
        };
        const obj5 = {};
        const designSystemScreens = require("SettingRendererUtils").getDesignSystemScreens();
        items1[2] = designSystemScreens.map((item) => {
          [, tmp] = item;
          return closure_7(
            closure_10.Screen,
            {
              name: tmp.route,
              getComponent: tmp.getComponent,
              options(navigation) {
                let str = closure_0(dependencyMap[9]).getCachedSettingTitle(closure_1_0);
                if (str == null) {
                  str = "Design System";
                }
                const obj2 = { title: str, headerLeft: null };
                const obj = closure_0(dependencyMap[9]);
                obj2.headerLeft = closure_0(dependencyMap[10]).getRenderModalBackImage(navigation.navigation);
                return obj2;
              },
            },
            tmp.route,
          );
        });
        obj3.children = items1;
        items[1] = closure_8(closure_10.Navigator, obj3);
        obj2.children = items;
        return closure_8(closure_9, obj2);
      },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsNavigator.tsx");

export const navigateToDevTools = function navigateToDevTools(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ActionSheetActionCreatorsDefault.hideActionSheet();
  const obj3 = ModalActionCreatorsDefault;
  const obj4 = { screenKey: obj.screenKey };
  obj3.pushLazy(() => Promise.resolve(closure_1_11), obj4, "DevToolsNavigator", {
    trigger: Types.ModalOpenTrigger.USER_INTERACTION,
  });
};

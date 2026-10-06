// discord_app/modules/devtools/native/components/DevToolsNavigator.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Types from "../../../main_tabs_v2/Types.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import HeaderShared from "../../../main_tabs_v2/native/shared_components/HeaderShared.tsx";
import SettingHookHarnessDefault from "../../../settings/native/renderer/SettingHookHarness.tsx";
import DevToolsContentDefault from "DevToolsContent.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import NativeStackView from "../../../../../_runtime/07568_NativeStackView.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c9;
let metroImportAll;
let metroImportDefault;
let closure_3 = ["children"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = NativeStackView.createNativeStackNavigator();
const memo = react.memo;
let closure_11 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (screenKey) => {
        let accessibilityNativeStackOptions;
        let first;
        let items;
        let items1;
        let tmp10;
        let tmp11;
        let tmp12;
        let tmp9;
        let tmp = accessibilityNativeStackOptions;
        let obj = accessibilityNativeStackOptions(576);
        const cResult = obj.c(9);
        let str = screenKey.screenKey;
        let obj2 = accessibilityNativeStackOptions(6503);
        accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp8 = closure_7(SettingHookHarnessDefault, {});
          cResult[0] = tmp8;
          first = tmp8;
        } else {
          first = cResult[0];
        }
        if (str == null) {
          str = "home";
        }
        if (cResult[1] !== accessibilityNativeStackOptions) {
          const fn = function f(navigation) {
            let obj2;
            let obj = {
              headerTitle(children) {
                children = children.children;
                const obj = { title: children };
                const tmp = closure_1_5(children, closure_1_3);
                const GenericHeaderTitle = accessibilityNativeStackOptions(closure_1_2[10]).GenericHeaderTitle;
                const merged = Object.assign(tmp);
                return closure_1_7(GenericHeaderTitle, obj);
              },
              headerLeft: obj2.getRenderModalCloseImage(navigation),
              headerTitleAlign: "center",
            };
            navigation = navigation.navigation;
            obj2 = HeaderShared;
            let merged = Object.assign(accessibilityNativeStackOptions);
            return obj;
          };
          cResult[1] = accessibilityNativeStackOptions;
          cResult[2] = fn;
          tmp9 = fn;
        } else {
          tmp9 = cResult[2];
        }
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = {
            name: "home",
            component: DevToolsContentDefault,
            options() {
              let obj = {
                headerTitle() {
                  let items;
                  let obj3;
                  const obj = { style: { flexDirection: "row" }, children: items };
                  items = [closure_1_7(accessibilityNativeStackOptions(closure_1_2[12]).HammerIcon, { size: "sm" })];
                  const obj2 = {
                    style: obj3,
                    variant: "heading-md/semibold",
                    color: "mobile-text-heading-primary",
                    children: "DevTools",
                  };
                  obj3 = { marginLeft: closure_1_1(closure_1_2[14]).space.PX_8 };
                  const Text = accessibilityNativeStackOptions(closure_1_2[13]).Text;
                  items[1] = closure_1_7(Text, obj2);
                  return closure_1_8(closure_1_6, obj);
                },
                title: "DevTools",
              };
              return obj;
            },
          };
          const Screen = closure_10.Screen;
          const tmp16 = closure_7(Screen, obj3);
          const _Object = Object;
          const obj4 = {};
          let merged = Object.assign(tmp(15424).DevToolsScreens);
          const merged1 = Object.assign(tmp(15424).PerformanceTestingScreens);
          const entries1 = entries(obj4);
          const mapped = entries1.map((item) => {
            let tmp2;
            let tmp3;
            [tmp2, tmp3] = item;
            const headerTitle = tmp3.headerTitle;
            const obj = {
              name: tmp2,
              children: tmp3.render,
              options() {
                return { title: headerTitle };
              },
            };
            _slicedToArray(item, 2);
            return closure_1_7(closure_1_10.Screen, obj, tmp2);
          });
          let tmpResult = tmp(14519);
          const designSystemScreens = tmpResult.getDesignSystemScreens();
          const mapped1 = designSystemScreens.map((item) => {
            let tmp2;
            [accessibilityNativeStackOptions, tmp2] = closure_4(item, 2);
            let obj = {
              name: tmp2.route,
              getComponent: tmp2.getComponent,
              options(navigation) {
                let tmpResult;
                navigation = navigation.navigation;
                const obj = accessibilityNativeStackOptions(dependencyMap[9]);
                let str = obj.getCachedSettingTitle(accessibilityNativeStackOptions);
                if (str == null) {
                  str = "Design System";
                }
                const obj2 = { title: str, headerLeft: tmpResult.getRenderModalBackImage(navigation) };
                tmpResult = accessibilityNativeStackOptions(dependencyMap[10]);
                return obj2;
              },
            };
            closure_4(item, 2);
            return closure_7(closure_10.Screen, obj, tmp2.route);
          });
          cResult[3] = tmp16;
          cResult[4] = mapped;
          cResult[5] = mapped1;
          tmp12 = mapped1;
          tmp11 = mapped;
          tmp10 = tmp16;
        } else {
          tmp10 = cResult[3];
          tmp11 = cResult[4];
          tmp12 = cResult[5];
        }
        if (cResult[6] === str) {
          let tmp23;
          if (cResult[7] === tmp9) {
            tmp23 = cResult[8];
          }
          return tmp23;
        }
        const obj5 = { children: items };
        items = [first];
        const obj6 = { initialRouteName: str, screenOptions: tmp9, children: items1 };
        items1 = [tmp10, tmp11, tmp12];
        items[1] = closure_8(closure_10.Navigator, obj6);
        const tmp24 = closure_8(closure_9, obj5);
        cResult[6] = str;
        cResult[7] = tmp9;
        cResult[8] = tmp24;
        tmp23 = tmp24;
      }
    : (screenKey) => {
        let closure_0;
        let items1;
        let str = screenKey.screenKey;
        _require = undefined;
        const tmp = _require;
        let obj = require("Navigator");
        _require = obj.useAccessibilityNativeStackOptions();
        let items = [closure_7(SettingHookHarnessDefault, {})];
        const Navigator = closure_10.Navigator;
        if (str == null) {
          str = "home";
        }
        let obj2 = { children: items };
        let obj3 = {
          initialRouteName: str,
          screenOptions(navigation) {
            let obj2;
            let obj = {
              headerTitle(children) {
                children = children.children;
                const merged = Object.assign(children, Object.assign({ children: 0 }));
                const obj = { title: children };
                const GenericHeaderTitle = closure_1_0(closure_1_2[10]).GenericHeaderTitle;
                const merged1 = Object.assign(merged);
                return closure_1_7(GenericHeaderTitle, obj);
              },
              headerLeft: obj2.getRenderModalCloseImage(navigation),
              headerTitleAlign: "center",
            };
            navigation = navigation.navigation;
            obj2 = HeaderShared;
            let merged = Object.assign(closure_0);
            return obj;
          },
          children: items1,
        };
        items1 = [, ,];
        const obj4 = {
          name: "home",
          component: DevToolsContentDefault,
          options() {
            let obj = {
              headerTitle() {
                let items;
                let obj3;
                const obj = { style: { flexDirection: "row" }, children: items };
                items = [closure_1_7(closure_1_0(closure_1_2[12]).HammerIcon, { size: "sm" })];
                const obj2 = {
                  style: obj3,
                  variant: "heading-md/semibold",
                  color: "mobile-text-heading-primary",
                  children: "DevTools",
                };
                obj3 = { marginLeft: closure_1_1(closure_1_2[14]).space.PX_8 };
                const Text = closure_1_0(closure_1_2[13]).Text;
                items[1] = closure_1_7(Text, obj2);
                return closure_1_8(closure_1_6, obj);
              },
              title: "DevTools",
            };
            return obj;
          },
        };
        items1[0] = closure_7(closure_10.Screen, obj4);
        const obj5 = {};
        let merged = Object.assign(tmp(15424).DevToolsScreens);
        let merged1 = Object.assign(tmp(15424).PerformanceTestingScreens);
        const entries1 = entries(obj5);
        items1[1] = entries1.map((item) => {
          let tmp;
          [tmp] = item;
          const obj = {
            name: tmp,
            children: tmp2,
            options() {
              return { title };
            },
          };
          return closure_1_7(closure_1_10.Screen, obj, tmp);
        });
        let tmpResult = tmp(14519);
        const designSystemScreens = tmpResult.getDesignSystemScreens();
        items1[2] = designSystemScreens.map((item) => {
          let tmp;
          [, tmp] = item;
          let obj = {
            name: tmp.route,
            getComponent: tmp.getComponent,
            options(navigation) {
              let tmpResult;
              navigation = navigation.navigation;
              const obj = closure_0(dependencyMap[9]);
              let str = obj.getCachedSettingTitle(closure_1_0);
              if (str == null) {
                str = "Design System";
              }
              const obj2 = { title: str, headerLeft: tmpResult.getRenderModalBackImage(navigation) };
              tmpResult = closure_0(dependencyMap[10]);
              return obj2;
            },
          };
          return closure_7(closure_10.Screen, obj, tmp.route);
        });
        items[1] = closure_8(Navigator, obj3);
        return closure_8(closure_9, obj2);
      },
);
const result = size.fileFinishedImporting("modules/devtools/native/components/DevToolsNavigator.tsx");

export const navigateToDevTools = function navigateToDevTools(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const screenKey = obj.screenKey;
  const obj2 = ActionSheetActionCreatorsDefault;
  obj2.hideActionSheet();
  const obj3 = ModalActionCreatorsDefault;
  const obj4 = { screenKey };
  const obj5 = { trigger: Types.ModalOpenTrigger.USER_INTERACTION };
  obj3.pushLazy(() => Promise.resolve(closure_1_11), obj4, "DevToolsNavigator", obj5);
};

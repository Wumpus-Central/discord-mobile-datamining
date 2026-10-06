// discord_app/modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import NativeStackView from "../../../../../_runtime/07568_NativeStackView.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let obj2;
let closure_3 = ["children"];
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = NativeStackView.createNativeStackNavigator();
let obj = { header: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let items;
      let obj = require("react");
      const cResult = obj.c(7);
      const tmp2 = closure_8();
      _require = tmp2;
      let obj2 = require("Navigator");
      const accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
      if (cResult[0] === accessibilityNativeStackOptions) {
        let tmp4;
        let tmp6;
        let tmp10;
        let tmp14;
        if (cResult[1] === tmp2.header) {
          tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            name: "default",
            options(navigation) {
              let intl;
              let obj2;
              const obj = {
                title: intl.string(closure_0(dependencyMap[10]).t.jVshKt),
                headerLeft: obj2.getRenderModalCloseImage(navigation),
              };
              navigation = navigation.navigation;
              intl = closure_0(dependencyMap[10]).intl;
              obj2 = closure_0(dependencyMap[9]);
              const merged = Object.assign(accessibilityNativeStackOptions(dependencyMap[11])());
              return obj;
            },
            getComponent() {
              return closure_0(dependencyMap[12]).default;
            },
          };
          const tmp9 = closure_5(closure_7.Screen, obj3);
          cResult[3] = tmp9;
          tmp6 = tmp9;
        } else {
          tmp6 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = {
            name: "guild",
            options(navigation) {
              let obj2;
              const obj = { headerLeft: obj2.getRenderModalBackImage(navigation) };
              navigation = navigation.navigation;
              obj2 = closure_0(dependencyMap[9]);
              return obj;
            },
            getComponent() {
              return closure_0(dependencyMap[13]).default;
            },
          };
          const tmp13 = closure_5(closure_7.Screen, obj4);
          cResult[4] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] !== tmp4) {
          const obj5 = { screenOptions: tmp4, initialRouteName: "default", children: items };
          items = [tmp6, tmp10];
          const tmp17 = closure_6(closure_7.Navigator, obj5);
          cResult[5] = tmp4;
          cResult[6] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[6];
        }
        return tmp14;
      }
      const fn = function o() {
        let obj = {
          headerStyle: closure_0.header,
          headerTitle(children) {
            children = children.children;
            const obj = { title: children };
            const tmp = closure_1_4(children, closure_1_3);
            const GenericHeaderTitle = closure_1_0(closure_1_2[9]).GenericHeaderTitle;
            const merged = Object.assign(tmp);
            return closure_1_5(GenericHeaderTitle, obj);
          },
          headerTitleAlign: "center",
        };
        let merged = Object.assign(accessibilityNativeStackOptions);
        return obj;
      };
      cResult[0] = accessibilityNativeStackOptions;
      cResult[1] = tmp2.header;
      cResult[2] = fn;
      tmp4 = fn;
    }
  : () => {
      let closure_0;
      let items;
      _require = closure_8();
      let obj = require("Navigator");
      let closure_1 = obj.useAccessibilityNativeStackOptions();
      let obj2 = {
        screenOptions() {
          let obj = {
            headerStyle: closure_0.header,
            headerTitle(children) {
              children = children.children;
              const merged = Object.assign(children, Object.assign({ children: 0 }));
              const obj = { title: children };
              const GenericHeaderTitle = closure_1_0(closure_1_2[9]).GenericHeaderTitle;
              const merged1 = Object.assign(merged);
              return closure_1_5(GenericHeaderTitle, obj);
            },
            headerTitleAlign: "center",
          };
          let merged = Object.assign(closure_1);
          return obj;
        },
        initialRouteName: "default",
        children: items,
      };
      const Navigator = closure_7.Navigator;
      items = [,];
      const obj3 = {
        name: "default",
        options(navigation) {
          let intl;
          let obj2;
          const obj = {
            title: intl.string(closure_0(dependencyMap[10]).t.jVshKt),
            headerLeft: obj2.getRenderModalCloseImage(navigation),
          };
          navigation = navigation.navigation;
          intl = closure_0(dependencyMap[10]).intl;
          obj2 = closure_0(dependencyMap[9]);
          const merged = Object.assign(closure_1(dependencyMap[11])());
          return obj;
        },
        getComponent() {
          return closure_0(dependencyMap[12]).default;
        },
      };
      items[0] = closure_5(closure_7.Screen, obj3);
      const obj4 = {
        name: "guild",
        options(navigation) {
          let obj2;
          const obj = { headerLeft: obj2.getRenderModalBackImage(navigation) };
          navigation = navigation.navigation;
          obj2 = closure_0(dependencyMap[9]);
          return obj;
        },
        getComponent() {
          return closure_0(dependencyMap[13]).default;
        },
      };
      items[1] = closure_5(closure_7.Screen, obj4);
      return closure_6(Navigator, obj2);
    };
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx");

export default tmp4;

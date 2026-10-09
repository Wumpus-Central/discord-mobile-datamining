// discord_app/modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
let closure_3 = ["children"];
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const NativeStackNavigator = fn(9317);
let closure_7 = NativeStackNavigator.createNativeStackNavigator();
const createStyles = fn(5091);
let obj3 = { header: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_8 = createStyles.createStyles(obj3);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ICYMICustomScoresModal() {
      const cResult = require("c").c(7);
      const tmp2 = closure_8();
      _require = tmp2;
      let obj = require("c");
      const accessibilityNativeStackOptions = require("Navigator").useAccessibilityNativeStackOptions();
      if (cResult[0] === accessibilityNativeStackOptions) {
        if (cResult[1] === tmp2.header) {
          let tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            name: "default",
            options(navigation) {
              const obj = { title: null, headerLeft: null };
              const intl = closure_0(1126).intl;
              obj.title = intl.string(closure_0(1126).t.jVshKt);
              obj.headerLeft = closure_0(9270).getRenderModalCloseImage(navigation.navigation);
              const merged = Object.assign(accessibilityNativeStackOptions(9607)());
              return obj;
            },
            getComponent() {
              return closure_0(16826).default;
            },
          };
          const tmp9 = closure_5(closure_7.Screen, obj3);
          cResult[3] = tmp9;
          let tmp6 = tmp9;
        } else {
          tmp6 = cResult[3];
        }
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = {
            name: "guild",
            options(navigation) {
              const obj = { headerLeft: closure_0(9270).getRenderModalBackImage(navigation.navigation) };
              return obj;
            },
            getComponent() {
              return closure_0(16827).default;
            },
          };
          const tmp13 = closure_5(closure_7.Screen, obj4);
          cResult[4] = tmp13;
          let tmp10 = tmp13;
        } else {
          tmp10 = cResult[4];
        }
        if (cResult[5] !== tmp4) {
          const obj5 = { screenOptions: tmp4, initialRouteName: "default", children: null };
          const items = [tmp6, tmp10];
          obj5.children = items;
          const tmp17 = closure_6(closure_7.Navigator, obj5);
          cResult[5] = tmp4;
          cResult[6] = tmp17;
          let tmp14 = tmp17;
        } else {
          tmp14 = cResult[6];
        }
        return tmp14;
      }
      const fn = function o() {
        let merged = Object.assign(accessibilityNativeStackOptions);
        return {
          headerStyle: closure_0.header,
          headerTitle(children) {
            const merged = Object.assign(closure_1_4(children, closure_1_3));
            return closure_1_5(closure_1_0(dependencyMap[9]).GenericHeaderTitle, { title: children.children });
          },
          headerTitleAlign: "center",
        };
      };
      cResult[0] = accessibilityNativeStackOptions;
      cResult[1] = tmp2.header;
      cResult[2] = fn;
      tmp4 = fn;
      const obj2 = require("Navigator");
    }
  : function ICYMICustomScoresModal() {
      _require = closure_8();
      closure_1 = require("Navigator").useAccessibilityNativeStackOptions();
      const obj2 = {
        screenOptions() {
          let merged = Object.assign(closure_1);
          return {
            headerStyle: closure_0.header,
            headerTitle(children) {
              const merged = Object.assign(children, Object.assign({ children: 0 }));
              const merged1 = Object.assign(merged);
              return closure_1_5(closure_1_0(dependencyMap[9]).GenericHeaderTitle, { title: children.children });
            },
            headerTitleAlign: "center",
          };
        },
        initialRouteName: "default",
        children: null,
      };
      const items = [
        closure_5(closure_7.Screen, {
          name: "default",
          options(navigation) {
            const obj = { title: null, headerLeft: null };
            const intl = closure_0(1126).intl;
            obj.title = intl.string(closure_0(1126).t.jVshKt);
            obj.headerLeft = closure_0(9270).getRenderModalCloseImage(navigation.navigation);
            const merged = Object.assign(closure_1(9607)());
            return obj;
          },
          getComponent() {
            return closure_0(16826).default;
          },
        }),
        closure_5(closure_7.Screen, {
          name: "guild",
          options(navigation) {
            const obj = { headerLeft: closure_0(9270).getRenderModalBackImage(navigation.navigation) };
            return obj;
          },
          getComponent() {
            return closure_0(16827).default;
          },
        }),
      ];
      obj2.children = items;
      return closure_6(closure_7.Navigator, obj2);
    };

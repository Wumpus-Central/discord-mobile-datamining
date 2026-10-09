// discord_app/modules/icymi/native/navigator/ICYMINavigator.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import NativeStackNavigator from "../../../../../_runtime/09317_NativeStackNavigator.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

({ jsx: c2, jsxs: c3 } = jsxProd);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const result = size.fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ICYMINavigator() {
      const cResult = accessibilityNativeStackOptions(576).c(6);
      const obj = accessibilityNativeStackOptions(576);
      accessibilityNativeStackOptions = accessibilityNativeStackOptions(6686).useAccessibilityNativeStackOptions();
      if (cResult[0] !== accessibilityNativeStackOptions) {
        const fn = function n() {
          const merged = Object.assign(accessibilityNativeStackOptions);
          return { headerShown: false, fullScreenGestureEnabled: true };
        };
        cResult[0] = accessibilityNativeStackOptions;
        cResult[1] = fn;
        let tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          name: "icymi-screen",
          getComponent() {
            return accessibilityNativeStackOptions(16818).ICYMITab;
          },
        };
        const tmp7 = closure_2(closure_4.Screen, obj3);
        cResult[2] = tmp7;
        let tmp4 = tmp7;
      } else {
        tmp4 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {
          name: "notifications-screen",
          getComponent() {
            return accessibilityNativeStackOptions(16768).ThemedNotificationsModal;
          },
        };
        const tmp11 = closure_2(closure_4.Screen, obj4);
        cResult[3] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp3) {
        const obj5 = { screenOptions: tmp3, initialRouteName: "icymi-screen", children: null };
        const items = [tmp4, tmp8];
        obj5.children = items;
        const tmp15 = closure_3(closure_4.Navigator, obj5);
        cResult[4] = tmp3;
        cResult[5] = tmp15;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[5];
      }
      return tmp12;
    }
  : function ICYMINavigator() {
      _require = require("Navigator").useAccessibilityNativeStackOptions();
      const obj2 = {
        screenOptions() {
          const merged = Object.assign(closure_0);
          return { headerShown: false, fullScreenGestureEnabled: true };
        },
        initialRouteName: "icymi-screen",
        children: null,
      };
      const items = [
        closure_2(closure_4.Screen, {
          name: "icymi-screen",
          getComponent() {
            return closure_0(16818).ICYMITab;
          },
        }),
        closure_2(closure_4.Screen, {
          name: "notifications-screen",
          getComponent() {
            return closure_0(16768).ThemedNotificationsModal;
          },
        }),
      ];
      obj2.children = items;
      return closure_3(closure_4.Navigator, obj2);
    };

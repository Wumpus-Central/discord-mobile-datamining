// discord_app/modules/icymi/native/navigator/ICYMINavigator.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import NativeStackView from "../../../../../_runtime/07556_NativeStackView.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let closure_4 = NativeStackView.createNativeStackNavigator();
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let accessibilityNativeStackOptions;
      let items;
      let tmp12;
      let tmp3;
      let tmp4;
      let tmp8;
      let obj = accessibilityNativeStackOptions(576);
      const cResult = obj.c(6);
      const obj2 = accessibilityNativeStackOptions(6496);
      accessibilityNativeStackOptions = obj2.useAccessibilityNativeStackOptions();
      if (cResult[0] !== accessibilityNativeStackOptions) {
        const fn = function n() {
          const obj = { headerShown: false, fullScreenGestureEnabled: true };
          const merged = Object.assign(accessibilityNativeStackOptions);
          return obj;
        };
        cResult[0] = accessibilityNativeStackOptions;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          name: "icymi-screen",
          getComponent() {
            return accessibilityNativeStackOptions(dependencyMap[5]).ICYMITab;
          },
        };
        const tmp7 = closure_2(closure_4.Screen, obj3);
        cResult[2] = tmp7;
        tmp4 = tmp7;
      } else {
        tmp4 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {
          name: "notifications-screen",
          getComponent() {
            return accessibilityNativeStackOptions(dependencyMap[6]).ThemedNotificationsModal;
          },
        };
        const tmp11 = closure_2(closure_4.Screen, obj4);
        cResult[3] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp3) {
        const obj5 = { screenOptions: tmp3, initialRouteName: "icymi-screen", children: items };
        items = [tmp4, tmp8];
        const tmp15 = closure_3(closure_4.Navigator, obj5);
        cResult[4] = tmp3;
        cResult[5] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[5];
      }
      return tmp12;
    }
  : () => {
      let closure_0;
      let items;
      let obj = require("Navigator");
      _require = obj.useAccessibilityNativeStackOptions();
      const Navigator = closure_4.Navigator;
      const obj2 = {
        screenOptions() {
          const obj = { headerShown: false, fullScreenGestureEnabled: true };
          const merged = Object.assign(closure_0);
          return obj;
        },
        initialRouteName: "icymi-screen",
        children: items,
      };
      items = [,];
      const obj3 = {
        name: "icymi-screen",
        getComponent() {
          return closure_0(dependencyMap[5]).ICYMITab;
        },
      };
      items[0] = closure_2(closure_4.Screen, obj3);
      const obj4 = {
        name: "notifications-screen",
        getComponent() {
          return closure_0(dependencyMap[6]).ThemedNotificationsModal;
        },
      };
      items[1] = closure_2(closure_4.Screen, obj4);
      return closure_3(Navigator, obj2);
    };
const result = size.fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default tmp3;

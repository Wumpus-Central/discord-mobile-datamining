// === Module 16483: ICYMINavigator ===

// Module 16483 (ICYMINavigator)
import jsxProd from "jsxProd" /* 21 */;
import NativeStackNavigator from "NativeStackNavigator" /* 7927 */;
import size from "module_2" /* 2 */;

({ jsx: c2, jsxs: c3 } = jsxProd);
let closure_4 = NativeStackNavigator.createNativeStackNavigator();
const result = size.fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  let obj = require("Navigator");
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    screenOptions() {
      const merged = Object.assign(closure_0);
      return { headerShown: false, fullScreenGestureEnabled: true };
    },
    initialRouteName: "icymi-screen",
    children: null
  };
  obj = {
    name: "icymi-screen",
    getComponent() {
      return closure_0(16484).ICYMITab;
    }
  };
  const items = [
    closure_2(closure_4.Screen, obj),
    closure_2(closure_4.Screen, {
      name: "notifications-screen",
      getComponent() {
        return closure_0(16435).ThemedNotificationsModal;
      }
    })
  ];
  obj.children = items;
  return closure_3(closure_4.Navigator, obj);
};
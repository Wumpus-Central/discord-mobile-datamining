// discord_app/modules/icymi/native/navigator/ICYMINavigator.tsx
import set from "../../../../../_runtime/00002_set.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../_runtime/09970_createNativeStackNavigator.js";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";

({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const result = set.fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  let obj = NavigationStack;
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
      return callback(15775).ICYMITab;
    }
  };
  const items = [
    callback(closure_4.Screen, obj),
    callback(closure_4.Screen, {
      name: "notifications-screen",
      getComponent() {
        return callback(15726).ThemedNotificationsModal;
      }
    })
  ];
  obj[2] = items;
  return callback2(closure_4.Navigator, obj);
};
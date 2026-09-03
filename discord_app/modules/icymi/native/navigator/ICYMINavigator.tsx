// === Module 16287: ICYMINavigator ===

// Module 16287 (ICYMINavigator)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import createNativeStackNavigator from "createNativeStackNavigator" /* 7834 */;

({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const result = set.fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  let obj = _require(6017);
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
      return callback(16288).ICYMITab;
    }
  };
  const items = [
    callback(closure_4.Screen, obj),
    callback(closure_4.Screen, {
      name: "notifications-screen",
      getComponent() {
        return callback(16239).ThemedNotificationsModal;
      }
    })
  ];
  obj[2] = items;
  return callback2(closure_4.Navigator, obj);
};
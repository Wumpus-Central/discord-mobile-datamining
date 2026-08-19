// discord_app/modules/icymi/native/navigator/ICYMINavigator.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../_runtime/09931_createNativeStackNavigator.js";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";

({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = createNativeStackNavigator.createNativeStackNavigator();
const result = obj132.fileFinishedImporting("modules/icymi/native/navigator/ICYMINavigator.tsx");

export default function ICYMINavigator() {
  let obj = NavigationStack;
  _require = obj.useAccessibilityNativeStackOptions();
  obj = {
    name: "icymi-screen",
    getComponent() {
      return callback(15706).ICYMITab;
    }
  };
  const items = [
    callback(closure_4.Screen, obj),
    callback(closure_4.Screen, {
      name: "notifications-screen",
      getComponent() {
        return callback(15657).ThemedNotificationsModal;
      }
    })
  ];
  obj[2] = items;
  return callback2(closure_4.Navigator, obj);
};
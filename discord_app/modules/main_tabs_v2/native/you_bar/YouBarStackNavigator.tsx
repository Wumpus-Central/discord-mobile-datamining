import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import handleConnectionOpen from "handleConnectionOpen";
import closure_7 from "handleConnectionOpen";
import { YouBarNavigatorScreens } from "MODE_CHANGE_PHYSICS";
import jsxProd from "jsxProd";
import createNativeStackNavigator from "createNativeStackNavigator";

let c10;
let c4;
let c5;
let c9;
let unpackModuleId;
const require = arg1;
function getGuildsComponent() {
  return require(15044).default;
}
function getNotificationsComponent() {
  return require(15390) /* goBack */.ThemedNotifications;
}
function getICYMIComponent() {
  return require(15438) /* ICYMINavigator */.default;
}
let c3 = importAllResult;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
createNativeStackNavigator = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function YouBarStackNavigator() {
  let obj = importAllResult;
  const ref = importAllResult.useRef(undefined);
  let obj1 = current(accessibilityNativeStackOptions[10]);
  let items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => guildId.getGuildId());
  if (tmp5) {
    obj = { guildId: null, channelId: null };
    obj[0] = stateFromStores;
    channelId = channelId.getChannelId(stateFromStores);
    obj[1] = channelId;
    ref.current = obj;
  }
  current = ref.current;
  iCYMIEnabled(accessibilityNativeStackOptions[11])();
  let tmp2Result = tmp2(tmp3[12]);
  iCYMIEnabled = tmp2Result.useICYMIEnabled("TabsNavigator");
  tmp2Result = tmp2(tmp3[13]);
  accessibilityNativeStackOptions = tmp2Result.useAccessibilityNativeStackOptions();
  const items1 = [accessibilityNativeStackOptions];
  obj = { style: absoluteFillObject.absoluteFillObject, children: null };
  const memo = obj.useMemo(() => {
    const obj = {};
    const merged = Object.assign(accessibilityNativeStackOptions);
    obj.headerShown = false;
    obj.gestureEnabled = true;
    obj.fullScreenGestureEnabled = true;
    return obj;
  }, items1);
  obj1 = { children: null };
  const obj2 = { id: "tabs", screenOptions: memo, children: null };
  const items2 = [current, iCYMIEnabled, accessibilityNativeStackOptions];
  obj2[2] = obj.useMemo(() => {
    let obj = {
      name: outer1_8.GUILDS,
      initialParams: current,
      getComponent: outer1_13,
      options() {
        const merged = Object.assign(closure_2);
        return {};
      }
    };
    const items = [outer1_9(outer1_12.Screen, obj), , ];
    let tmp3Result = null;
    if (iCYMIEnabled) {
      obj = { name: null, getComponent: null, options: null };
      obj[0] = tmp5.ICYMI;
      obj[1] = outer1_15;
      obj[2] = function options() {
        const merged = Object.assign(closure_2);
        return {};
      };
      tmp3Result = tmp3(tmp4.Screen, obj);
    }
    obj = { children: null };
    items[1] = tmp3Result;
    items[2] = outer1_9(outer1_12.Screen, {
      name: outer1_8.NOTIFICATIONS,
      getComponent: outer1_14,
      options() {
        const merged = Object.assign(closure_2);
        return {};
      }
    });
    obj[0] = items;
    return outer1_11(outer1_10, obj);
  }, items2);
  obj1[0] = callback(createNativeStackNavigator.Navigator, obj2);
  obj[1] = callback(current(accessibilityNativeStackOptions[14]).LayerScope, obj1);
  return callback(closure_5, obj);
});
const result = require("handleConnectionOpen").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarStackNavigator.tsx");

export default memoResult;
// discord_app/modules/main_tabs_v2/native/you_bar/YouBarStackNavigator.tsx
import goBack from "../tabs/notifications/Notifications.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/SelectedChannelStore.tsx";
import closure_7 from "../../../../stores/SelectedGuildStore.tsx";
import { YouBarNavigatorScreens } from "../MainTabsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createNativeStackNavigator from "../../../../../_runtime/08717_createNativeStackNavigator.js";
import { ICYMINavigator } from "../../../icymi/native/navigator/ICYMINavigator.tsx";

require = arg1;
function getGuildsComponent() {
  return require("../tabs/guilds/Guilds.tsx").default;
}
function getNotificationsComponent() {
  return goBack.ThemedNotifications;
}
function getICYMIComponent() {
  return ICYMINavigator /* ICYMINavigator */.default;
}
let c3 = importAllResult;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createNativeStackNavigator.createNativeStackNavigator();
const memoResult = importAllResult.memo(function YouBarStackNavigator() {
  let obj = importAllResult;
  const ref = importAllResult.useRef(undefined);
  obj1 = current(accessibilityNativeStackOptions[10]);
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
  obj1 = {
    children: callback(Navigator.Navigator, {
      id: "tabs",
      screenOptions: memo,
      children: obj.useMemo(() => {
        let obj = {
          name: closure_1_8.GUILDS,
          initialParams: current,
          getComponent: closure_1_13,
          options() {
            const merged = Object.assign(closure_2);
            return {};
          }
        };
        const items = [closure_1_9(closure_1_12.Screen, obj), , ];
        let tmp3Result = null;
        if (iCYMIEnabled) {
          obj = { name: null, getComponent: null, options: null };
          obj[0] = tmp5.ICYMI;
          obj[1] = closure_1_15;
          obj[2] = function options() {
            const merged = Object.assign(closure_2);
            return {};
          };
          tmp3Result = tmp3(tmp4.Screen, obj);
        }
        obj = { children: null };
        items[1] = tmp3Result;
        items[2] = closure_1_9(closure_1_12.Screen, {
          name: closure_1_8.NOTIFICATIONS,
          getComponent: closure_1_14,
          options() {
            const merged = Object.assign(closure_2);
            return {};
          }
        });
        obj[0] = items;
        return closure_1_11(closure_1_10, obj);
      }, items2)
    })
  };
  items2 = [current, iCYMIEnabled, accessibilityNativeStackOptions];
  obj[1] = callback(current(accessibilityNativeStackOptions[14]).LayerScope, obj1);
  return callback(closure_5, obj);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarStackNavigator.tsx");

export default memoResult;
// discord_app/modules/main_tabs_v2/native/you_bar/YouBarStackNavigator.tsx
import notifications_Notifications from "../tabs/notifications/Notifications.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../../../stores/SelectedGuildStore.tsx";

require = fn;
function getGuildsComponent() {
  return require("guilds/Guilds").default;
}
function getNotificationsComponent() {
  return notifications_Notifications.ThemedNotifications;
}
function getICYMIComponent() {
  return require("ICYMINavigator").default;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const YouBarNavigatorScreens = fn(11084).YouBarNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const NativeStackNavigator = fn(7913);
const Navigator = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarStackNavigator.tsx");

export default noop.memo(function YouBarStackNavigator() {
  let obj = noop;
  const ref = noop.useRef(undefined);
  let obj1 = current(accessibilityNativeStackOptions[10]);
  let items = [SelectedGuildStore];
  const stateFromStores = obj1.useStateFromStores(items, () => guildId.getGuildId());
  if (tmp5) {
    obj = { guildId: stateFromStores, channelId: null };
    const channelId = SelectedChannelStore.getChannelId(stateFromStores);
    obj.channelId = channelId;
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
  obj2.children = obj.useMemo(() => {
    let obj = {
      name: YouBarNavigatorScreens.GUILDS,
      initialParams: current,
      getComponent: getGuildsComponent,
      options() {
        const merged = Object.assign(accessibilityNativeStackOptions);
        return {};
      },
    };
    const items = [React7(Screen.Screen, obj), ,];
    let tmp3Result = null;
    if (iCYMIEnabled) {
      obj = {
        name: YouBarNavigatorScreens.ICYMI,
        getComponent: getICYMIComponent,
        options() {
          const merged = Object.assign(accessibilityNativeStackOptions);
          return {};
        },
      };
      tmp3Result = React7(Screen.Screen, obj);
    }
    obj = { children: null };
    items[1] = tmp3Result;
    items[2] = React7(Screen.Screen, {
      name: YouBarNavigatorScreens.NOTIFICATIONS,
      getComponent: getNotificationsComponent,
      options() {
        const merged = Object.assign(accessibilityNativeStackOptions);
        return {};
      },
    });
    obj.children = items;
    return closure_2_11(closure_2_10, obj);
  }, items2);
  obj1.children = closure_9(Navigator.Navigator, obj2);
  obj.children = closure_9(current(accessibilityNativeStackOptions[14]).LayerScope, obj1);
  return closure_9(closure_5, obj);
});

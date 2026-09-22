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
const YouBarNavigatorScreens = fn(11358).YouBarNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const NativeStackNavigator = fn(8161);
const Navigator = NativeStackNavigator.createNativeStackNavigator();
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarStackNavigator.tsx");

export default noop.memo(function YouBarStackNavigator() {
  const ref = noop.useRef(undefined);
  let items = [SelectedGuildStore];
  const stateFromStores = current(accessibilityNativeStackOptions[10]).useStateFromStores(items, () =>
    guildId.getGuildId(),
  );
  if (tmp5) {
    let obj3 = { guildId: stateFromStores, channelId: null };
    const channelId = SelectedChannelStore.getChannelId(stateFromStores);
    obj3.channelId = channelId;
    ref.current = obj3;
  }
  current = ref.current;
  iCYMIEnabled(accessibilityNativeStackOptions[11])();
  let obj2 = current(accessibilityNativeStackOptions[10]);
  tmp5 = null == ref.current && null != stateFromStores;
  iCYMIEnabled = current(accessibilityNativeStackOptions[12]).useICYMIEnabled("TabsNavigator");
  const tmp2Result = current(accessibilityNativeStackOptions[12]);
  accessibilityNativeStackOptions = current(accessibilityNativeStackOptions[13]).useAccessibilityNativeStackOptions();
  const items1 = [accessibilityNativeStackOptions];
  const obj4 = { style: absoluteFillObject.absoluteFillObject, children: null };
  const memo = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(accessibilityNativeStackOptions);
    obj.headerShown = false;
    obj.gestureEnabled = true;
    obj.fullScreenGestureEnabled = true;
    return obj;
  }, items1);
  const obj5 = { children: null };
  const obj6 = { id: "tabs", screenOptions: memo, children: null };
  const items2 = [current, iCYMIEnabled, accessibilityNativeStackOptions];
  obj6.children = noop.useMemo(() => {
    const items = [
      React7(Screen.Screen, {
        name: YouBarNavigatorScreens.GUILDS,
        initialParams: current,
        getComponent: getGuildsComponent,
        options() {
          const merged = Object.assign(accessibilityNativeStackOptions);
          return {};
        },
      }),
      ,
    ];
    let tmp3Result = null;
    if (iCYMIEnabled) {
      const obj2 = {
        name: YouBarNavigatorScreens.ICYMI,
        getComponent: getICYMIComponent,
        options() {
          const merged = Object.assign(accessibilityNativeStackOptions);
          return {};
        },
      };
      tmp3Result = React7(Screen.Screen, obj2);
    }
    const obj3 = { children: null };
    items[1] = tmp3Result;
    items[2] = React7(Screen.Screen, {
      name: YouBarNavigatorScreens.NOTIFICATIONS,
      getComponent: getNotificationsComponent,
      options() {
        const merged = Object.assign(accessibilityNativeStackOptions);
        return {};
      },
    });
    obj3.children = items;
    return closure_2_11(closure_2_10, obj3);
  }, items2);
  obj5.children = closure_9(Navigator.Navigator, obj6);
  obj4.children = closure_9(current(accessibilityNativeStackOptions[14]).LayerScope, obj5);
  return closure_9(closure_5, obj4);
});

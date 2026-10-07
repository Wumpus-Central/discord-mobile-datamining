// === Module 15979: YouBarStackNavigator ===

// Module 15979 (YouBarStackNavigator)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import Navigator from "Navigator" /* 6503 */;
import LayerScope from "LayerScope" /* 6658 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8040 */;
import notifications_Notifications from "notifications/Notifications" /* 16383 */;
import useNotificationPermissionPromptDefault from "useNotificationPermissionPrompt" /* 16505 */;
import noop from "module_19" /* 19 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;

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
const YouBarNavigatorScreens = fn(10833).YouBarNavigatorScreens;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const NativeStackNavigator = fn(7568);
let closure_12 = NativeStackNavigator.createNativeStackNavigator();
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarStackNavigator.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(19);
  const ref = noop.useRef(undefined);
  const items = [SelectedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId());
  if (tmp6) {
    const obj3 = { guildId: stateFromStores, channelId: null };
    const channelId = SelectedChannelStore.getChannelId(stateFromStores);
    obj3.channelId = channelId;
    ref.current = obj3;
  }
  const current = ref.current;
  useNotificationPermissionPromptDefault();
  tmp6 = null == ref.current && null != stateFromStores;
  const iCYMIEnabled = ICYMIExperiment.useICYMIEnabled("TabsNavigator");
  const tmpResult = ICYMIExperiment;
  const accessibilityNativeStackOptions = Navigator.useAccessibilityNativeStackOptions();
  if (cResult[0] !== accessibilityNativeStackOptions) {
    const obj4 = {};
    let merged = Object.assign(accessibilityNativeStackOptions);
    obj4.headerShown = false;
    obj4.gestureEnabled = true;
    obj4.fullScreenGestureEnabled = true;
    cResult[0] = accessibilityNativeStackOptions;
    cResult[1] = obj4;
    let tmp12 = obj4;
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] !== accessibilityNativeStackOptions) {
    const fn = function b() {
      const merged = Object.assign(accessibilityNativeStackOptions);
      return {};
    };
    cResult[2] = accessibilityNativeStackOptions;
    cResult[3] = fn;
    let tmp16 = fn;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] === current) {
    if (cResult[5] === tmp16) {
      let tmp17 = cResult[6];
    }
    if (cResult[7] === accessibilityNativeStackOptions) {
      if (cResult[8] === iCYMIEnabled) {
        let tmp19 = cResult[9];
      }
      if (cResult[10] !== accessibilityNativeStackOptions) {
        const obj5 = {
          name: YouBarNavigatorScreens.NOTIFICATIONS,
          getComponent: getNotificationsComponent,
          options() {
                  const merged = Object.assign(accessibilityNativeStackOptions);
                  return {};
                }
        };
        const tmp30 = options(closure_12.Screen, obj5);
        cResult[10] = accessibilityNativeStackOptions;
        cResult[11] = tmp30;
        let tmp25 = tmp30;
      } else {
        tmp25 = cResult[11];
      }
      if (cResult[12] === tmp17) {
        if (cResult[13] === tmp19) {
          if (cResult[14] === tmp25) {
            let tmp31 = cResult[15];
          }
          if (cResult[16] === tmp12) {
            if (cResult[17] === tmp31) {
              let tmp35 = cResult[18];
            }
            return tmp35;
          }
          const obj6 = { style: React4.absoluteFillObject, children: null };
          const obj7 = { children: null };
          const obj8 = { id: "tabs", screenOptions: tmp12, children: tmp31 };
          obj7.children = options(closure_12.Navigator, obj8);
          obj6.children = options(LayerScope.LayerScope, obj7);
          const tmp40 = options(hasOwnProperty, obj6);
          cResult[16] = tmp12;
          cResult[17] = tmp31;
          cResult[18] = tmp40;
          tmp35 = tmp40;
        }
      }
      const obj9 = { children: null };
      const items1 = [tmp17, tmp19, tmp25];
      obj9.children = items1;
      const tmp34 = closure_1_11(v65535, obj9);
      cResult[12] = tmp17;
      cResult[13] = tmp19;
      cResult[14] = tmp25;
      cResult[15] = tmp34;
      tmp31 = tmp34;
    }
    let tmp20 = null;
    if (iCYMIEnabled) {
      const obj10 = {
        name: YouBarNavigatorScreens.ICYMI,
        getComponent: getICYMIComponent,
        options() {
              const merged = Object.assign(accessibilityNativeStackOptions);
              return {};
            }
      };
      tmp20 = options(closure_12.Screen, obj10);
    }
    cResult[7] = accessibilityNativeStackOptions;
    cResult[8] = iCYMIEnabled;
    cResult[9] = tmp20;
    tmp19 = tmp20;
  }
  const tmp18 = options(closure_12.Screen, { name: YouBarNavigatorScreens.GUILDS, initialParams: current, getComponent: getGuildsComponent, options: tmp16 });
  cResult[4] = current;
  cResult[5] = tmp16;
  cResult[6] = tmp18;
  tmp17 = tmp18;
  const obj11 = { name: YouBarNavigatorScreens.GUILDS, initialParams: current, getComponent: getGuildsComponent, options: tmp16 };
  const tmpResult2 = Navigator;
}) : (() => {
  const ref = noop.useRef(undefined);
  let items = [SelectedGuildStore];
  const stateFromStores = current(accessibilityNativeStackOptions[10]).useStateFromStores(items, () => guildId.getGuildId());
  if (tmp5) {
    let obj3 = { guildId: stateFromStores, channelId: null };
    const channelId = SelectedChannelStore.getChannelId(stateFromStores);
    obj3.channelId = channelId;
    ref.current = obj3;
  }
  current = ref.current;
  iCYMIEnabled(accessibilityNativeStackOptions[13])();
  let obj2 = current(accessibilityNativeStackOptions[10]);
  tmp5 = null == ref.current && null != stateFromStores;
  iCYMIEnabled = current(accessibilityNativeStackOptions[14]).useICYMIEnabled("TabsNavigator");
  const tmp2Result = current(accessibilityNativeStackOptions[14]);
  accessibilityNativeStackOptions = current(accessibilityNativeStackOptions[15]).useAccessibilityNativeStackOptions();
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
      options(Screen.Screen, {
        name: YouBarNavigatorScreens.GUILDS,
        initialParams: current,
        getComponent: getGuildsComponent,
        options() {
          const merged = Object.assign(accessibilityNativeStackOptions);
          return {};
        }
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
          }
      };
      tmp3Result = options(Screen.Screen, obj2);
    }
    const obj3 = { children: null };
    items[1] = tmp3Result;
    items[2] = options(Screen.Screen, {
      name: YouBarNavigatorScreens.NOTIFICATIONS,
      getComponent: getNotificationsComponent,
      options() {
        const merged = Object.assign(accessibilityNativeStackOptions);
        return {};
      }
    });
    obj3.children = items;
    return closure_2_11(v65535, obj3);
  }, items2);
  obj5.children = closure_9(Screen.Navigator, obj6);
  obj4.children = closure_9(current(accessibilityNativeStackOptions[16]).LayerScope, obj5);
  return closure_9(closure_5, obj4);
}));
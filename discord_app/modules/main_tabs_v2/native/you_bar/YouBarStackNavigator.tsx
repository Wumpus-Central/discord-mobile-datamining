// === Module 15940: YouBarStackNavigator ===

// Module 15940 (YouBarStackNavigator)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Navigator2 from "Navigator" /* 6496 */;
import LayerScope2 from "LayerScope" /* 6651 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8030 */;
import MainTabsConstants from "MainTabsConstants" /* 10820 */;
import notifications_Notifications from "notifications/Notifications" /* 16343 */;
import useNotificationPermissionPromptDefault from "useNotificationPermissionPrompt" /* 16465 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import Fragment from "Fragment" /* 21 */;
import NativeStackView from "NativeStackView" /* 7556 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let unpackModuleId;
const f122069 = () => guildId.getGuildId();
function getGuildsComponent() {
  return require("guilds/Guilds").default;
}
function getNotificationsComponent() {
  return notifications_Notifications.ThemedNotifications;
}
function getICYMIComponent() {
  return require("ICYMINavigator").default;
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const YouBarNavigatorScreens = MainTabsConstants.YouBarNavigatorScreens;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = NativeStackView.createNativeStackNavigator();
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let LayerScope;
  let channelId;
  let items1;
  let obj7;
  let obj8;
  let tmp12;
  let tmp16;
  let obj = react2;
  const cResult = obj.c(19);
  const ref = react.useRef(undefined);
  const items = [SelectedGuildStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, f122069);
  const tmp6 = null == ref.current && null != stateFromStores;
  if (tmp6) {
    const obj3 = { guildId: stateFromStores, channelId };
    channelId = SelectedChannelStore.getChannelId(stateFromStores);
    ref.current = obj3;
  }
  const current = ref.current;
  useNotificationPermissionPromptDefault();
  const tmpResult = ICYMIExperiment;
  const iCYMIEnabled = tmpResult.useICYMIEnabled("TabsNavigator");
  const tmpResult2 = Navigator2;
  const accessibilityNativeStackOptions = tmpResult2.useAccessibilityNativeStackOptions();
  if (cResult[0] !== accessibilityNativeStackOptions) {
    const obj4 = { headerShown: false, gestureEnabled: true, fullScreenGestureEnabled: true };
    let merged = Object.assign(accessibilityNativeStackOptions);
    cResult[0] = accessibilityNativeStackOptions;
    cResult[1] = obj4;
    tmp12 = obj4;
  } else {
    tmp12 = cResult[1];
  }
  if (cResult[2] !== accessibilityNativeStackOptions) {
    const fn = function b() {
      const obj = {};
      const merged = Object.assign(accessibilityNativeStackOptions);
      return obj;
    };
    cResult[2] = accessibilityNativeStackOptions;
    cResult[3] = fn;
    tmp16 = fn;
  } else {
    tmp16 = cResult[3];
  }
  if (cResult[4] === current) {
    let tmp17;
    if (cResult[5] === tmp16) {
      tmp17 = cResult[6];
    }
    if (cResult[7] === accessibilityNativeStackOptions) {
      let tmp19;
      let tmp25;
      if (cResult[8] === iCYMIEnabled) {
        tmp19 = cResult[9];
      }
      if (cResult[10] !== accessibilityNativeStackOptions) {
        const obj5 = {
          name: YouBarNavigatorScreens.NOTIFICATIONS,
          getComponent: getNotificationsComponent,
          options() {
                  const obj = {};
                  const merged = Object.assign(accessibilityNativeStackOptions);
                  return obj;
                }
        };
        const tmp30 = React4(closure_12.Screen, obj5);
        cResult[10] = accessibilityNativeStackOptions;
        cResult[11] = tmp30;
        tmp25 = tmp30;
      } else {
        tmp25 = cResult[11];
      }
      if (cResult[12] === tmp17) {
        if (cResult[13] === tmp19) {
          let tmp31;
          if (cResult[14] === tmp25) {
            tmp31 = cResult[15];
          }
          if (cResult[16] === tmp12) {
            let tmp35;
            if (cResult[17] === tmp31) {
              tmp35 = cResult[18];
            }
            return tmp35;
          }
          const obj6 = { style: React3.absoluteFillObject, children: React4(LayerScope, obj7) };
          obj7 = { children: React4(closure_12.Navigator, obj8) };
          obj8 = { id: "tabs", screenOptions: tmp12, children: tmp31 };
          LayerScope = LayerScope2.LayerScope;
          const tmp40 = React4(hasOwnProperty, obj6);
          cResult[16] = tmp12;
          cResult[17] = tmp31;
          cResult[18] = tmp40;
          tmp35 = tmp40;
        }
      }
      const obj9 = { children: items1 };
      items1 = [tmp17, tmp19, tmp25];
      const tmp34 = unpackModuleId(authStore, obj9);
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
              const obj = {};
              const merged = Object.assign(accessibilityNativeStackOptions);
              return obj;
            }
      };
      tmp20 = React4(closure_12.Screen, obj10);
    }
    cResult[7] = accessibilityNativeStackOptions;
    cResult[8] = iCYMIEnabled;
    cResult[9] = tmp20;
    tmp19 = tmp20;
  }
  const obj11 = { name: YouBarNavigatorScreens.GUILDS, initialParams: current, getComponent: getGuildsComponent, options: tmp16 };
  const tmp18 = React4(closure_12.Screen, obj11);
  cResult[4] = current;
  cResult[5] = tmp16;
  cResult[6] = tmp18;
  tmp17 = tmp18;
}) : (() => {
  let LayerScope;
  let Navigator;
  let accessibilityNativeStackOptions;
  let channelId;
  let current;
  let guildId;
  let iCYMIEnabled;
  let items2;
  let obj5;
  let obj6;
  const ref = react.useRef(undefined);
  let obj2 = current(accessibilityNativeStackOptions[10]);
  let items = [SelectedGuildStore];
  const stateFromStores = obj2.useStateFromStores(items, f122069);
  const tmp5 = null == ref.current && null != stateFromStores;
  if (tmp5) {
    let obj3 = { guildId: stateFromStores, channelId };
    channelId = SelectedChannelStore.getChannelId(stateFromStores);
    ref.current = obj3;
  }
  current = ref.current;
  iCYMIEnabled(accessibilityNativeStackOptions[13])();
  const tmp2Result = current(accessibilityNativeStackOptions[14]);
  iCYMIEnabled = tmp2Result.useICYMIEnabled("TabsNavigator");
  const tmp2Result2 = current(accessibilityNativeStackOptions[15]);
  accessibilityNativeStackOptions = tmp2Result2.useAccessibilityNativeStackOptions();
  const items1 = [accessibilityNativeStackOptions];
  let obj4 = { style: absoluteFillObject.absoluteFillObject, children: closure_9(LayerScope, obj5) };
  const memo = react.useMemo(() => {
    const obj = { headerShown: false, gestureEnabled: true, fullScreenGestureEnabled: true };
    const merged = Object.assign(accessibilityNativeStackOptions);
    return obj;
  }, items1);
  obj5 = { children: closure_9(Navigator, obj6) };
  obj6 = {
    id: "tabs",
    screenOptions: memo,
    children: react.useMemo(() => {
      let obj = {
        name: YouBarNavigatorScreens.GUILDS,
        initialParams: current,
        getComponent: getGuildsComponent,
        options() {
          const obj = {};
          const merged = Object.assign(accessibilityNativeStackOptions);
          return obj;
        }
      };
      const items = [React4(Screen.Screen, obj), , ];
      let tmp3Result = null;
      if (iCYMIEnabled) {
        const obj2 = {
          name: YouBarNavigatorScreens.ICYMI,
          getComponent: getICYMIComponent,
          options() {
              const obj = {};
              const merged = Object.assign(accessibilityNativeStackOptions);
              return obj;
            }
        };
        tmp3Result = React4(Screen.Screen, obj2);
      }
      const obj3 = { children: items };
      items[1] = tmp3Result;
      const obj4 = {
        name: YouBarNavigatorScreens.NOTIFICATIONS,
        getComponent: getNotificationsComponent,
        options() {
          const obj = {};
          const merged = Object.assign(accessibilityNativeStackOptions);
          return obj;
        }
      };
      items[2] = React4(Screen.Screen, obj4);
      return unpackModuleId(authStore, obj3);
    }, items2)
  };
  items2 = [current, iCYMIEnabled, accessibilityNativeStackOptions];
  LayerScope = tmp2(tmp3[16]).LayerScope;
  Navigator = Screen.Navigator;
  return closure_9(closure_5, obj4);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarStackNavigator.tsx");

export default memoResult;
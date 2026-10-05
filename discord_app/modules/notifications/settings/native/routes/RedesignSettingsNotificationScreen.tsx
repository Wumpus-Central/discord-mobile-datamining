// === Module 15827: RedesignSettingsNotificationScreen ===

// Module 15827 (RedesignSettingsNotificationScreen)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import _modDef2819 from "module_2819" /* 2819 */;
import useMountEffectDefault from "useMountEffect" /* 5590 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import SettingLayoutDefault from "SettingLayout" /* 14499 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15305 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15306 */;
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader" /* 15308 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 15828 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2;

let closure_4 = AndroidNotificationSettingsStore.initializeAndroidNotificationSettingsStore;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const jsx = Fragment.jsx;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let items;
  let items1;
  let tmp14;
  let tmp5Result;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "SettingsNotificationsScreen" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const obj3 = ContextualOptInNudgeHoldoutExperimentDefault;
  const inHoldout = obj3.useConfig(first).inHoldout;
  if (cResult[1] !== !inHoldout) {
    const obj4 = { sections: items, ListHeaderComponent: tmp5Result };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [, ];
    const tmpResult2 = MobileNotifSettingsRouteBuilders;
    items[0] = tmpResult2.buildOverviewCategoriesSection();
    const obj5 = { label: intl.string(_modDef2819.nvBHcD), settings: items1 };
    intl = intl2.intl;
    items1 = [, , , , , , ];
    ({ REDESIGN_IN_APP_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6] } = MobileUserSettings);
    items[1] = obj5;
    tmp5Result = undefined;
    if (!inHoldout) {
      tmp5Result = NotificationPermissionSettingsHeaderDefault;
    }
    const list = createList(obj4);
    cResult[1] = !inHoldout;
    cResult[2] = list;
    tmp7 = list;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[12]);
        result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
        tmp2 = closure_1_4();
        return;
      }
    }
    cResult[3] = S;
  } else {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[12]);
        result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
        tmp2 = closure_1_4();
        return;
      }
    }
  }
  useMountEffectDefault(S);
  if (cResult[4] !== tmp7) {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[12]);
        result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
        tmp2 = closure_1_4();
        return;
      }
    }
    const tmp15 = jsx(SettingLayoutDefault, { node: tmp7 });
    cResult[4] = tmp7;
    cResult[5] = tmp15;
    tmp14 = tmp15;
  } else {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[12]);
        result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
        tmp2 = closure_1_4();
        return;
      }
    }
  }
  return tmp14;
}) : (() => {
  let obj = ContextualOptInNudgeHoldoutExperimentDefault;
  const tmp = !obj.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  let closure_0 = tmp;
  let items = [tmp];
  const node = react.useMemo(() => {
    let intl;
    let items;
    let items1;
    let tmp3Result;
    const obj = { sections: items, ListHeaderComponent: tmp3Result };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    items = [, ];
    const obj2 = MobileNotifSettingsRouteBuilders;
    items[0] = obj2.buildOverviewCategoriesSection();
    const obj3 = { label: intl.string(_modDef2819.nvBHcD), settings: items1 };
    intl = intl2.intl;
    items1 = [, , , , , , ];
    ({ REDESIGN_IN_APP_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6] } = MobileUserSettings);
    items[1] = obj3;
    tmp3Result = undefined;
    if (closure_0) {
      tmp3Result = NotificationPermissionSettingsHeaderDefault;
    }
    return createList(obj);
  }, items);
  useMountEffectDefault(() => {
    const obj = closure_0(dependencyMap[12]);
    const result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
    closure_1_4();
  });
  return jsx(SettingLayoutDefault, { node });
}));
let result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default memoResult;
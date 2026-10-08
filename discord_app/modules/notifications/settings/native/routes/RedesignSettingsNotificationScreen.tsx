// === Module 16125: RedesignSettingsNotificationScreen ===

// Module 16125 (RedesignSettingsNotificationScreen)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef2891 from "module_2891" /* 2891 */;
import useMountEffectDefault from "useMountEffect" /* 5392 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import SettingLayoutDefault from "SettingLayout" /* 14775 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15583 */;
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader" /* 15585 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16126 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(15582).initializeAndroidNotificationSettingsStore;
const MobileUserSettings = fn(7966).MobileUserSettings;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignSettingsNotificationsScreen() {
  const cResult = c.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "SettingsNotificationsScreen" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const inHoldout = ContextualOptInNudgeHoldoutExperimentDefault.useConfig(first).inHoldout;
  if (cResult[1] !== !inHoldout) {
    const obj4 = { sections: null, ListHeaderComponent: null };
    const tmpResult = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildOverviewCategoriesSection(), ];
    const obj5 = { label: null, settings: null };
    const intl = util.intl;
    obj5.label = intl.string(_modDef2891.nvBHcD);
    const items1 = [, , , , , , ];
    ({ REDESIGN_IN_APP_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6] } = MobileUserSettings);
    obj5.settings = items1;
    items[1] = obj5;
    obj4.sections = items;
    let tmp5Result;
    if (!inHoldout) {
      tmp5Result = NotificationPermissionSettingsHeaderDefault;
    }
    obj4.ListHeaderComponent = tmp5Result;
    const list = tmpResult.createList(obj4);
    cResult[1] = tmp6;
    cResult[2] = list;
    let tmp7 = list;
    const tmpResult2 = MobileNotifSettingsRouteBuilders;
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
    const obj6 = { node: tmp7 };
    const tmp14 = jsx(SettingLayoutDefault, { node: tmp7 });
    cResult[4] = tmp7;
    cResult[5] = tmp14;
    const tmp13 = tmp14;
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
  return tmp13;
}) : (function RedesignSettingsNotificationsScreen() {
  const tmp = !ContextualOptInNudgeHoldoutExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  closure_0 = tmp;
  let items = [tmp];
  const node = noop.useMemo(() => {
    const obj2 = { sections: null, ListHeaderComponent: null };
    const obj = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildOverviewCategoriesSection(), ];
    const obj4 = { label: null, settings: null };
    const intl = util.intl;
    obj4.label = intl.string(_modDef2891.nvBHcD);
    const items1 = [, , , , , , ];
    ({ REDESIGN_IN_APP_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6] } = MobileUserSettings);
    obj4.settings = items1;
    items[1] = obj4;
    obj2.sections = items;
    let tmp2Result;
    if (closure_0) {
      tmp2Result = NotificationPermissionSettingsHeaderDefault;
    }
    obj2.ListHeaderComponent = tmp2Result;
    return obj.createList(obj2);
  }, items);
  useMountEffectDefault(() => {
    const result = closure_0(dependencyMap[12]).refreshSystemNotifPermissionsAsync("notification_settings_screen");
    closure_1_4();
  });
  return jsx(SettingLayoutDefault, { node });
}));
// === Module 16022: RedesignSettingsNotificationScreen ===

// Module 16022 (RedesignSettingsNotificationScreen)
import util from "util" /* 1115 */;
import _modDef2723 from "module_2723" /* 2723 */;
import useMountEffectDefault from "useMountEffect" /* 5076 */;
import SettingBuilders from "SettingBuilders" /* 11606 */;
import SettingLayoutDefault from "SettingLayout" /* 14786 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15578 */;
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader" /* 15580 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16023 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(15577).initializeAndroidNotificationSettingsStore;
const MobileUserSettings = fn(8082).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default noop.memo(() => {
  const tmp = !ContextualOptInNudgeHoldoutExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  closure_0 = tmp;
  let items = [tmp];
  const node = noop.useMemo(() => {
    const obj2 = { sections: null, ListHeaderComponent: null };
    const obj = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildOverviewCategoriesSection(), ];
    const obj4 = { label: null, settings: null };
    const intl = util.intl;
    obj4.label = intl.string(_modDef2723.nvBHcD);
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
    const result = closure_0(dependencyMap[11]).refreshSystemNotifPermissionsAsync("notification_settings_screen");
    closure_1_4();
  });
  return jsx(SettingLayoutDefault, { node });
});
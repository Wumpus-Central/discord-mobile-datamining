// === Module 15983: RedesignSettingsNotificationScreen ===

// Module 15983 (RedesignSettingsNotificationScreen)
import util from "util" /* 1114 */;
import _modDef2722 from "module_2722" /* 2722 */;
import useMountEffectDefault from "useMountEffect" /* 5043 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import SettingLayoutDefault from "SettingLayout" /* 14741 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15545 */;
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader" /* 15547 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 15984 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(15544).initializeAndroidNotificationSettingsStore;
const MobileUserSettings = fn(8049).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default noop.memo(() => {
  const tmp = !ContextualOptInNudgeHoldoutExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  closure_0 = tmp;
  let items = [tmp];
  const node = noop.useMemo(() => {
    let obj = { sections: null, ListHeaderComponent: null };
    const items = [MobileNotifSettingsRouteBuilders.buildOverviewCategoriesSection(), ];
    obj = { label: null, settings: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef2722.nvBHcD);
    const items1 = [, , , , , , ];
    ({ REDESIGN_IN_APP_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6] } = MobileUserSettings);
    obj.settings = items1;
    items[1] = obj;
    obj.sections = items;
    let tmp2Result;
    if (closure_0) {
      tmp2Result = NotificationPermissionSettingsHeaderDefault;
    }
    obj.ListHeaderComponent = tmp2Result;
    return obj.createList(obj);
  }, items);
  useMountEffectDefault(() => {
    const result = closure_0(dependencyMap[11]).refreshSystemNotifPermissionsAsync("notification_settings_screen");
    closure_1_4();
  });
  return jsx(SettingLayoutDefault, { node });
});
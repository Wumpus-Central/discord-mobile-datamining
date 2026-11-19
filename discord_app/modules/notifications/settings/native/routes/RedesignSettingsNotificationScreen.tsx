// === Module 17466: RedesignSettingsNotificationScreen ===

// Module 17466 (RedesignSettingsNotificationScreen)
import util from "util" /* 1113 */;
import _modDef3051 from "module_3051" /* 3051 */;
import useMountEffectDefault from "useMountEffect" /* 5353 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 17467 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 17468 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(16943).initializeAndroidNotificationSettingsStore;
const MobileUserSettings = fn(8593).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default noop.memo(function RedesignSettingsNotificationsScreen() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    items = [MobileNotifSettingsRouteBuilders.buildOverviewCategoriesSection(), , ];
    const obj4 = { label: null, settings: null };
    const intl = util.intl;
    obj4.label = intl.string(_modDef3051.nvBHcD);
    const items1 = [, , , , , , ];
    ({ REDESIGN_IN_APP_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6] } = constants);
    obj4.settings = items1;
    items[1] = obj4;
    const obj5 = { settings: null };
    const items2 = [constants.REDESIGN_EMAIL_NOTIFICATIONS];
    obj5.settings = items2;
    items[2] = obj5;
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  useMountEffectDefault(() => {
    closure_1_4();
  });
  return jsx(SystemNotifPermissionLayoutDefault, { node, unavailableNode: node });
});
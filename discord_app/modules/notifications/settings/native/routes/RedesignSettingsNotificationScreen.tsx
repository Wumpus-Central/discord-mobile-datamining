// === Module 18617: RedesignSettingsNotificationScreen ===

// Module 18617 (RedesignSettingsNotificationScreen)
import util from "util" /* 1113 */;
import _modDef3029 from "module_3029" /* 3029 */;
import useMountEffectDefault from "useMountEffect" /* 5899 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 18618 */;
import SystemNotifPermissionLayoutDefault from "SystemNotifPermissionLayout" /* 18619 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(18105).initializeAndroidNotificationSettingsStore;
const MobileUserSettings = fn(9202).MobileUserSettings;
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
    obj4.label = intl.string(_modDef3029.nvBHcD);
    const items1 = [, , , , , , , ];
    ({ REDESIGN_SYSTEM_NOTIFICATIONS: arr2[0], REDESIGN_IN_APP_NOTIFICATIONS: arr2[1], REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[2], REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[3], REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[4], REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[5], REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[6], REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[7] } = constants);
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
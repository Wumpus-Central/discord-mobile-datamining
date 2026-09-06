// === Module 15917: RedesignSettingsNotificationScreen ===

// Module 15917 (RedesignSettingsNotificationScreen)
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import SettingLayoutDefault from "SettingLayout" /* 14689 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15481 */;
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader" /* 15483 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 15918 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(15480).initializeAndroidNotificationSettingsStore;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx");

export default noop.memo(() => {
  const tmp = !ContextualOptInNudgeHoldoutExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  closure_0 = tmp;
  let items = [tmp];
  const node = noop.useMemo(() => {
    const obj = { sections: null, ListHeaderComponent: null };
    const items = [MobileNotifSettingsRouteBuilders.buildOverviewCategoriesSection()];
    obj.sections = items;
    let tmp2;
    if (closure_0) {
      tmp2 = NotificationPermissionSettingsHeaderDefault;
    }
    obj.ListHeaderComponent = tmp2;
    return obj.createList(obj);
  }, items);
  useMountEffectDefault(() => {
    closure_1_4();
  });
  return jsx(SettingLayoutDefault, { node });
});
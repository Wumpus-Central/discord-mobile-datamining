// === Module 15950: RedesignSettingsNotificationScreen ===

// Module 15950 (RedesignSettingsNotificationScreen)
import useMountEffectDefault from "useMountEffect" /* 5006 */;
import SettingBuilders from "SettingBuilders" /* 11500 */;
import SettingLayoutDefault from "SettingLayout" /* 14718 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15514 */;
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader" /* 15516 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 15951 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(15513).initializeAndroidNotificationSettingsStore;
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
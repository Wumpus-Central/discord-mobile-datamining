// discord_app/modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx
import useMountEffectDefault from "../../../../../hooks/useMountEffect.tsx";
import SettingBuilders from "../../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../../settings/native/renderer/SettingLayout.tsx";
import ContextualOptInNudgeHoldoutExperimentDefault from "../../../../nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx";
import NotificationPermissionSettingsHeaderDefault from "../../../../user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx";
import MobileNotifSettingsRouteBuilders from "../MobileNotifSettingsRouteBuilders.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = fn(15480).initializeAndroidNotificationSettingsStore;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx",
);

export default noop.memo(() => {
  const tmp = !ContextualOptInNudgeHoldoutExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" })
    .inHoldout;
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

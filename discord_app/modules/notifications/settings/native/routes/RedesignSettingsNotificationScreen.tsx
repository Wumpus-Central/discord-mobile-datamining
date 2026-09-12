// discord_app/modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx
import util from "../../../../../intl/index.native.tsx";
import _modDef2722 from "../../../NotificationSettings.messages.js";
import useMountEffectDefault from "../../../../../hooks/useMountEffect.tsx";
import SettingBuilders from "../../../../settings/native/renderer/SettingBuilders.tsx";
import SettingLayoutDefault from "../../../../settings/native/renderer/SettingLayout.tsx";
import ContextualOptInNudgeHoldoutExperimentDefault from "../../../../nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx";
import NotificationPermissionSettingsHeaderDefault from "../../../../user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx";
import MobileNotifSettingsRouteBuilders from "../MobileNotifSettingsRouteBuilders.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = fn(15566).initializeAndroidNotificationSettingsStore;
const MobileUserSettings = fn(8079).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx",
);

export default noop.memo(() => {
  const tmp = !ContextualOptInNudgeHoldoutExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" })
    .inHoldout;
  closure_0 = tmp;
  let items = [tmp];
  const node = noop.useMemo(() => {
    let obj = { sections: null, ListHeaderComponent: null };
    const items = [MobileNotifSettingsRouteBuilders.buildOverviewCategoriesSection()];
    obj = { label: null, settings: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef2722.nvBHcD);
    const items1 = [, , , , , ,];
    ({
      REDESIGN_IN_APP_NOTIFICATIONS: arr2[0],
      REDESIGN_IN_APP_MESSAGE_SOUNDS: arr2[1],
      REDESIGN_ANDROID_MESSAGE_NOTIFICATIONS: arr2[2],
      REDESIGN_IOS_NATIVE_PHONE_INTEGRATION: arr2[3],
      REDESIGN_ANDROID_NOTIFICATION_LIGHTS: arr2[4],
      REDESIGN_ANDROID_NOTIFICATION_VIBRATIONS: arr2[5],
      REDESIGN_ANDROID_NOTIFICATION_SOUNDS: arr2[6],
    } = MobileUserSettings);
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

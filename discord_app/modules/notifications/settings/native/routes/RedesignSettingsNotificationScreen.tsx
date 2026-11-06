// discord_app/modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx
import util from "../../../../../intl/index.native.tsx";
import _modDef2992 from "../../../NotificationSettings.messages.js";
import useMountEffectDefault from "../../../../../hooks/useMountEffect.tsx";
import SettingBuilders from "../../../../settings/native/renderer/SettingBuilders.tsx";
import ContextualOptInNudgeHoldoutExperimentDefault from "../../../../nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx";
import NotificationPermissionSettingsHeaderDefault from "../../../../user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx";
import MobileNotifSettingsRouteBuilders from "../MobileNotifSettingsRouteBuilders.tsx";
import EffectiveNotifSettingsLayoutDefault from "../EffectiveNotifSettingsLayout.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function getNotificationSettings() {
  items = [MobileNotifSettingsRouteBuilders.buildOverviewCategoriesSection(), , ,];
  const obj2 = { label: null, settings: null };
  const intl = util.intl;
  obj2.label = intl.string(_modDef2992.nvBHcD);
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
  obj2.settings = items1;
  items[1] = obj2;
  const obj3 = { settings: null };
  const items2 = [MobileUserSettings.REDESIGN_EMAIL_NOTIFICATIONS];
  obj3.settings = items2;
  items[2] = obj3;
  const obj4 = { label: null, settings: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(_modDef2992["1S8d9h"]);
  const items3 = [, , , ,];
  ({
    REACTION_NOTIFICATIONS: arr4[0],
    HIGHLIGHT_NOTIFICATIONS: arr4[1],
    FRIEND_ANNIVERSARY_NOTIFICATIONS: arr4[2],
    UPCOMING_SERVER_EVENT_NOTIFICATIONS: arr4[3],
    SUMMARY_REMINDER_NOTIFICATIONS: arr4[4],
  } = MobileUserSettings);
  obj4.settings = items3;
  items[3] = obj4;
  return items;
}
let closure_4 = fn(17737).initializeAndroidNotificationSettingsStore;
const MobileUserSettings = fn(8524).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/notifications/settings/native/routes/RedesignSettingsNotificationScreen.tsx",
);

export default noop.memo(function RedesignSettingsNotificationsScreen() {
  const tmp = !ContextualOptInNudgeHoldoutExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" })
    .inHoldout;
  closure_0 = tmp;
  items = [tmp];
  const node = noop.useMemo(() => {
    const obj2 = { sections: getNotificationSettings(), ListHeaderComponent: null };
    let tmp2;
    if (closure_0) {
      tmp2 = NotificationPermissionSettingsHeaderDefault;
    }
    obj2.ListHeaderComponent = tmp2;
    return SettingBuilders.createList(obj2);
  }, items);
  useMountEffectDefault(() => {
    const result = closure_0(dependencyMap[11]).refreshSystemNotifPermissionsAsync("notification_settings_screen");
    closure_1_4();
  });
  const items1 = [tmp];
  const unavailableNode = noop.useMemo(() => {
    const obj2 = { sections: null, ListHeaderComponent: null };
    const obj = SettingBuilders;
    obj2.sections = getNotificationSettings().slice(1);
    let tmp2;
    if (closure_0) {
      tmp2 = NotificationPermissionSettingsHeaderDefault;
    }
    obj2.ListHeaderComponent = tmp2;
    return obj.createList(obj2);
  }, items1);
  return jsx(EffectiveNotifSettingsLayoutDefault, { node, unavailableNode });
});

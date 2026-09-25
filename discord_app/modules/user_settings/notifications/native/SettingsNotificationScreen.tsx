// === Module 15005: SettingsNotificationScreen ===

// Module 15005 (SettingsNotificationScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4825 */;
import Card from "Card" /* 5914 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6023 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6396 */;
import SettingBuilders from "SettingBuilders" /* 10993 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 11886 */;
import SettingLayoutDefault from "SettingLayout" /* 14223 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15007 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 15008 */;
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader" /* 15009 */;
import noop from "module_19" /* 19 */;

require = fn;
function SystemNotificationsSubLabel() {
  const tmp = closure_10();
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("SystemNotificationsSubLabel");
  let showReactivationPrompt = NotificationPermissionUtil.useShowReactivationPrompt();
  const obj3 = ContextualOptInNudgeHoldoutExperimentDefault;
  let result = SettingsNotificationUtils.hasAndroidNotificationChannels();
  if (result) {
    let str = "text-sm/medium";
    if (manaTypeConsolidationExperiment) {
      str = "experimental/body-xs/normal";
    }
    const obj5 = { variant: str, color: "text-muted", children: null };
    const intl = util.intl;
    obj5.children = intl.string(util.t["/TZX1J"]);
    result = React5(Text_Text.Text, obj5);
  }
  const children = [result, ];
  if (showReactivationPrompt) {
    showReactivationPrompt = obj3.useConfig({ location: "SystemNotificationsSubLabel" }).inHoldout;
  }
  if (showReactivationPrompt) {
    const obj6 = { style: tmp.card, children: null };
    const obj7 = { border: "none", shadow: "none", children: null };
    const obj8 = { style: tmp.cardContent, children: null };
    const obj9 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
    const items1 = [React5(CircleErrorIcon.CircleErrorIcon, obj9), ];
    const obj10 = { style: tmp.text, children: null };
    const obj11 = { color: "text-default", variant: "text-sm/medium", children: null };
    const intl2 = util.intl;
    obj11.children = intl2.string(util.t.TAuasM);
    obj10.children = React5(Text_Text.Text, obj11);
    items1[1] = React5(View, obj10);
    obj8.children = items1;
    obj7.children = React6(View, obj8);
    obj6.children = React5(Card.Card, obj7);
    showReactivationPrompt = React5(View, obj6);
  }
  children[1] = showReactivationPrompt;
  return React6(React7, { children });
}
const View = fn(17).View;
let closure_5 = fn(15006).initializeAndroidNotificationSettingsStore;
const MobileUserSettings = fn(7412).MobileUserSettings;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4829);
let obj = { card: { marginBottom: 8, borderColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderWidth: 1, borderRadius: nativeDefault.radii.lg }, cardContent: { flexDirection: "row", alignItems: "center", gap: 8 }, text: { flex: 1 } };
let closure_10 = createStyles.createStyles(obj);
let obj3 = { marginBottom: 8, borderColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationScreen.tsx");

export default noop.memo(() => {
  const tmp = !ContextualOptInNudgeHoldoutExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  closure_0 = tmp;
  let items = [tmp];
  const node = noop.useMemo(() => {
    const obj2 = { sections: null, ListHeaderComponent: null };
    const obj3 = { label: null, settings: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t.clE4PU);
    const items = [, ];
    ({ IN_APP_NOTIFICATIONS: arr[0], IN_APP_MESSAGE_SOUNDS: arr[1] } = MobileUserSettings);
    obj3.settings = items;
    const items1 = [obj3, , , , , , , , , , , , , , , , , , ];
    const obj4 = { label: null, settings: null, subLabel: null };
    const intl2 = util.intl;
    obj4.label = intl2.string(util.t["jcHF+3"]);
    const items2 = [MobileUserSettings.SYSTEM_NOTIFICATIONS];
    obj4.settings = items2;
    obj4.subLabel = React5(SystemNotificationsSubLabel, {});
    items1[1] = obj4;
    const obj5 = { settings: null };
    const items3 = [MobileUserSettings.ANDROID_MESSAGE_NOTIFICATIONS];
    obj5.settings = items3;
    items1[2] = obj5;
    const obj6 = { settings: null };
    const items4 = [MobileUserSettings.IOS_NATIVE_PHONE_INTEGRATION];
    obj6.settings = items4;
    items1[3] = obj6;
    const obj7 = { label: null, settings: null };
    const intl3 = util.intl;
    obj7.label = intl3.string(util.t.a2O7oY);
    const items5 = [, , ];
    ({ ANDROID_NOTIFICATION_LIGHTS: arr6[0], ANDROID_NOTIFICATION_VIBRATIONS: arr6[1], ANDROID_NOTIFICATION_SOUNDS: arr6[2] } = MobileUserSettings);
    obj7.settings = items5;
    items1[4] = obj7;
    const obj8 = { settings: null, subLabel: null };
    const items6 = [MobileUserSettings.REACTION_NOTIFICATIONS];
    obj8.settings = items6;
    const intl4 = util.intl;
    obj8.subLabel = intl4.string(util.t.oWF6eQ);
    items1[5] = obj8;
    const obj9 = { label: null, settings: null };
    const intl5 = util.intl;
    obj9.label = intl5.string(util.t.EZorjX);
    const items7 = [MobileUserSettings.COMMUNITY_ACTIVITY_ALERTS];
    obj9.settings = items7;
    items1[6] = obj9;
    const obj10 = { settings: null };
    const items8 = [MobileUserSettings.HIGHLIGHT_NOTIFICATIONS];
    obj10.settings = items8;
    items1[7] = obj10;
    const obj11 = { settings: null };
    const items9 = [MobileUserSettings.FRIEND_STREAM_NOTIFICATIONS];
    obj11.settings = items9;
    items1[8] = obj11;
    const obj12 = { settings: null };
    const items10 = [MobileUserSettings.FRIEND_ANNIVERSARY_NOTIFICATIONS];
    obj12.settings = items10;
    items1[9] = obj12;
    const obj13 = { settings: null };
    const items11 = [MobileUserSettings.VOICE_ACTIVITY_NOTIFICATIONS];
    obj13.settings = items11;
    items1[10] = obj13;
    const obj14 = { settings: null };
    const items12 = [MobileUserSettings.FRIEND_ONLINE_NOTIFICATIONS];
    obj14.settings = items12;
    items1[11] = obj14;
    const obj15 = { settings: null };
    const items13 = [MobileUserSettings.CUSTOM_STATUS_NOTIFICATIONS];
    obj15.settings = items13;
    items1[12] = obj15;
    const obj16 = { settings: null };
    const items14 = [MobileUserSettings.FRIEND_GAMING_ACTIVITY_NOTIFICATIONS];
    obj16.settings = items14;
    items1[13] = obj16;
    const obj17 = { settings: null };
    const items15 = [MobileUserSettings.PROFILE_UPDATES_NOTIFICATIONS];
    obj17.settings = items15;
    items1[14] = obj17;
    const obj18 = { settings: null };
    const items16 = [MobileUserSettings.SERVER_TRENDING_NOTIFICATIONS];
    obj18.settings = items16;
    items1[15] = obj18;
    const obj19 = { settings: null };
    const items17 = [MobileUserSettings.UPCOMING_SERVER_EVENT_NOTIFICATIONS];
    obj19.settings = items17;
    items1[16] = obj19;
    const obj20 = { settings: null };
    const items18 = [MobileUserSettings.SUMMARY_REMINDER_NOTIFICATIONS];
    obj20.settings = items18;
    items1[17] = obj20;
    const obj21 = { label: null, settings: null };
    const intl6 = util.intl;
    obj21.label = intl6.string(util.t["0YtG+k"]);
    const items19 = [, ];
    ({ SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS: arr20[0], SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS: arr20[1] } = MobileUserSettings);
    obj21.settings = items19;
    items1[18] = obj21;
    obj2.sections = items1;
    let tmp2;
    if (closure_0) {
      tmp2 = NotificationPermissionSettingsHeaderDefault;
    }
    obj2.ListHeaderComponent = tmp2;
    return SettingBuilders.createList(obj2);
  }, items);
  const effect = noop.useEffect(() => {
    closure_1_5();
  }, []);
  const effect1 = noop.useEffect(() => {
    const result = closure_0(dependencyMap[17]).prefetchFamilyCenterAgeGroup();
  }, []);
  return closure_7(SettingLayoutDefault, { node });
});
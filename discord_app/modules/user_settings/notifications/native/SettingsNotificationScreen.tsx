// === Module 15479: SettingsNotificationScreen ===

// Module 15479 (SettingsNotificationScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import Card from "Card" /* 5607 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6610 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 8095 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 12411 */;
import SettingLayoutDefault from "SettingLayout" /* 14689 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15481 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 15482 */;
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader" /* 15483 */;
import FamilyCenterAgeGroupPrefetch from "FamilyCenterAgeGroupPrefetch" /* 15484 */;
import noop from "module_19" /* 19 */;

require = fn;
function SystemNotificationsSubLabel() {
  const tmp = closure_10();
  let obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("SystemNotificationsSubLabel");
  let obj1 = NotificationPermissionUtil;
  let showReactivationPrompt = obj1.useShowReactivationPrompt();
  let obj2 = ContextualOptInNudgeHoldoutExperimentDefault;
  let obj3 = SettingsNotificationUtils;
  let result = obj3.hasAndroidNotificationChannels();
  if (result) {
    let str = "text-sm/medium";
    if (manaTypeConsolidationExperiment) {
      str = "experimental/body-xs/normal";
    }
    obj = { variant: str, color: "text-muted", children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t["/TZX1J"]);
    result = React5(Text_Text.Text, obj);
  }
  const children = [result, ];
  if (showReactivationPrompt) {
    showReactivationPrompt = obj2.useConfig({ location: "SystemNotificationsSubLabel" }).inHoldout;
  }
  if (showReactivationPrompt) {
    obj = { style: tmp.card, children: null };
    obj1 = { border: "none", shadow: "none", children: null };
    obj2 = { style: tmp.cardContent, children: null };
    obj3 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
    const items1 = [React5(CircleErrorIcon.CircleErrorIcon, obj3), ];
    const obj4 = { style: tmp.text, children: null };
    const obj5 = { color: "text-default", variant: "text-sm/medium", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t.TAuasM);
    obj4.children = React5(Text_Text.Text, obj5);
    items1[1] = React5(View, obj4);
    obj2.children = items1;
    obj1.children = React6(View, obj2);
    obj.children = React5(Card.Card, obj1);
    showReactivationPrompt = React5(View, obj);
  }
  children[1] = showReactivationPrompt;
  return React6(React7, { children });
}
const View = fn(17).View;
let closure_5 = fn(15480).initializeAndroidNotificationSettingsStore;
const MobileUserSettings = fn(7975).MobileUserSettings;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4560);
let obj = { card: null, cardContent: null, text: null };
obj = { marginBottom: 8, borderColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
obj.card = obj;
obj.cardContent = { flexDirection: "row", alignItems: "center", gap: 8 };
obj.text = { flex: 1 };
let closure_10 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationScreen.tsx");

export default noop.memo(() => {
  isFamilyCenterV3Enabled = isFamilyCenterV3Enabled(7594).useIsFamilyCenterV3Enabled({ location: "SettingsNotificationsScreen" });
  let obj = isFamilyCenterV3Enabled(7594);
  let tmp2 = !ContextualOptInNudgeHoldoutExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  importDefault = tmp2;
  let items = [tmp2];
  const node = noop.useMemo(() => {
    let obj = { sections: null, ListHeaderComponent: null };
    obj = { label: null, settings: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.clE4PU);
    const items = [, ];
    ({ IN_APP_NOTIFICATIONS: arr[0], IN_APP_MESSAGE_SOUNDS: arr[1] } = MobileUserSettings);
    obj.settings = items;
    const items1 = [obj, , , , , , , , , , , , , , , , , , ];
    const obj1 = { label: null, settings: null, subLabel: null };
    const intl2 = util.intl;
    obj1.label = intl2.string(util.t["jcHF+3"]);
    const items2 = [MobileUserSettings.SYSTEM_NOTIFICATIONS];
    obj1.settings = items2;
    obj1.subLabel = React5(SystemNotificationsSubLabel, {});
    items1[1] = obj1;
    const obj2 = { settings: null };
    const items3 = [MobileUserSettings.ANDROID_MESSAGE_NOTIFICATIONS];
    obj2.settings = items3;
    items1[2] = obj2;
    const obj3 = { settings: null };
    const items4 = [MobileUserSettings.IOS_NATIVE_PHONE_INTEGRATION];
    obj3.settings = items4;
    items1[3] = obj3;
    const obj4 = { label: null, settings: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t.a2O7oY);
    const items5 = [, , ];
    ({ ANDROID_NOTIFICATION_LIGHTS: arr6[0], ANDROID_NOTIFICATION_VIBRATIONS: arr6[1], ANDROID_NOTIFICATION_SOUNDS: arr6[2] } = MobileUserSettings);
    obj4.settings = items5;
    items1[4] = obj4;
    const obj5 = { settings: null, subLabel: null };
    const items6 = [MobileUserSettings.REACTION_NOTIFICATIONS];
    obj5.settings = items6;
    const intl4 = util.intl;
    obj5.subLabel = intl4.string(util.t.oWF6eQ);
    items1[5] = obj5;
    const obj6 = { label: null, settings: null };
    const intl5 = util.intl;
    obj6.label = intl5.string(util.t.EZorjX);
    const items7 = [MobileUserSettings.COMMUNITY_ACTIVITY_ALERTS];
    obj6.settings = items7;
    items1[6] = obj6;
    const obj7 = { settings: null };
    const items8 = [MobileUserSettings.HIGHLIGHT_NOTIFICATIONS];
    obj7.settings = items8;
    items1[7] = obj7;
    const obj8 = { settings: null };
    const items9 = [MobileUserSettings.FRIEND_STREAM_NOTIFICATIONS];
    obj8.settings = items9;
    items1[8] = obj8;
    const obj9 = { settings: null };
    const items10 = [MobileUserSettings.FRIEND_ANNIVERSARY_NOTIFICATIONS];
    obj9.settings = items10;
    items1[9] = obj9;
    const obj10 = { settings: null };
    const items11 = [MobileUserSettings.VOICE_ACTIVITY_NOTIFICATIONS];
    obj10.settings = items11;
    items1[10] = obj10;
    const obj11 = { settings: null };
    const items12 = [MobileUserSettings.FRIEND_ONLINE_NOTIFICATIONS];
    obj11.settings = items12;
    items1[11] = obj11;
    const obj12 = { settings: null };
    const items13 = [MobileUserSettings.CUSTOM_STATUS_NOTIFICATIONS];
    obj12.settings = items13;
    items1[12] = obj12;
    const obj13 = { settings: null };
    const items14 = [MobileUserSettings.FRIEND_GAMING_ACTIVITY_NOTIFICATIONS];
    obj13.settings = items14;
    items1[13] = obj13;
    const obj14 = { settings: null };
    const items15 = [MobileUserSettings.PROFILE_UPDATES_NOTIFICATIONS];
    obj14.settings = items15;
    items1[14] = obj14;
    const obj15 = { settings: null };
    const items16 = [MobileUserSettings.SERVER_TRENDING_NOTIFICATIONS];
    obj15.settings = items16;
    items1[15] = obj15;
    const obj16 = { settings: null };
    const items17 = [MobileUserSettings.UPCOMING_SERVER_EVENT_NOTIFICATIONS];
    obj16.settings = items17;
    items1[16] = obj16;
    const obj17 = { settings: null };
    const items18 = [MobileUserSettings.SUMMARY_REMINDER_NOTIFICATIONS];
    obj17.settings = items18;
    items1[17] = obj17;
    const obj18 = { label: null, settings: null };
    const intl6 = util.intl;
    obj18.label = intl6.string(util.t["0YtG+k"]);
    const items19 = [, ];
    ({ SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS: arr20[0], SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS: arr20[1] } = MobileUserSettings);
    obj18.settings = items19;
    items1[18] = obj18;
    obj.sections = items1;
    let tmp2;
    if (closure_1) {
      tmp2 = NotificationPermissionSettingsHeaderDefault;
    }
    obj.ListHeaderComponent = tmp2;
    return obj.createList(obj);
  }, items);
  const effect = noop.useEffect(() => {
    closure_1_5();
  }, []);
  let items1 = [isFamilyCenterV3Enabled];
  const effect1 = noop.useEffect(() => {
    const result = FamilyCenterAgeGroupPrefetch.prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled);
  }, items1);
  return closure_7(SettingLayoutDefault, { node });
});
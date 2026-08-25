// discord_app/modules/user_settings/notifications/native/SettingsNotificationScreen.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import apexExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import _requestPushNotificationPermission from "../../../nuf/native/NotificationPermissionUtil.tsx";
import _modDef14094 from "../../../settings/native/renderer/SettingLayout.tsx";
import apexExperimentDefault from "../../../nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx";
import hasAndroidNotificationChannels from "SettingsNotificationUtils.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { initializeAndroidNotificationSettingsStore as closure_5 } from "stores/AndroidNotificationSettingsStore.tsx";
import { MobileUserSettings } from "../../core/native/SettingsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function SystemNotificationsSubLabel() {
  const tmp = callback2();
  let obj = apexExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("SystemNotificationsSubLabel");
  obj1 = _requestPushNotificationPermission;
  let showReactivationPrompt = obj1.useShowReactivationPrompt();
  let obj2 = apexExperimentDefault;
  let obj3 = hasAndroidNotificationChannels;
  let result = obj3.hasAndroidNotificationChannels();
  if (result) {
    let str = "text-sm/medium";
    if (manaTypeConsolidationExperiment) {
      str = "experimental/body-xs/normal";
    }
    obj = { variant: null, color: "text-muted", children: null };
    obj[0] = str;
    const intl = tmp2(1236).intl;
    obj[2] = intl.string(tmp2(1236).t["/TZX1J"]);
    result = callback(tmp2(4376).Text, obj);
    const tmp10 = callback;
  }
  const children = [result, ];
  if (showReactivationPrompt) {
    showReactivationPrompt = obj2.useConfig({ location: "SystemNotificationsSubLabel" }).inHoldout;
  }
  if (showReactivationPrompt) {
    obj = { style: null, children: null };
    obj[0] = tmp.card;
    obj1 = { border: "none", shadow: "none", children: null };
    obj2 = { style: null, children: null };
    obj2[0] = tmp.cardContent;
    obj3 = { color: null };
    obj3[0] = ThemesDefault.unsafe_rawColors.YELLOW_300;
    const items1 = [callback(tmp2(7938).CircleErrorIcon, obj3), ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.text;
    const obj5 = { color: "text-default", variant: "text-sm/medium", children: null };
    const intl2 = tmp2(1236).intl;
    obj5[2] = intl2.string(tmp2(1236).t.TAuasM);
    obj4[1] = callback(tmp2(4376).Text, obj5);
    items1[1] = callback(View, obj4);
    obj2[1] = items1;
    obj1[2] = tmp8(View, obj2);
    obj[1] = callback(tmp2(5482).Card, obj1);
    showReactivationPrompt = callback(View, obj);
  }
  children[1] = showReactivationPrompt;
  return closure_8(closure_9, { children });
}
let c3 = importAllResult;
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let obj = { card: null, cardContent: null, text: null };
obj = { marginBottom: 8, borderColor: ThemesDefault.unsafe_rawColors.YELLOW_300, borderWidth: 1, borderRadius: ThemesDefault.radii.lg };
obj[0] = obj;
obj[1] = { flexDirection: "row", alignItems: "center", gap: 8 };
obj[2] = { flex: 1 };
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  isFamilyCenterV3Enabled = isFamilyCenterV3Enabled(7200).useIsFamilyCenterV3Enabled({ location: "SettingsNotificationsScreen" });
  let obj = isFamilyCenterV3Enabled(7200);
  let tmp2 = !apexExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  importDefault = tmp2;
  let items = [tmp2];
  const node = importAllResult.useMemo(() => {
    let obj = isFamilyCenterV3Enabled(closure_1_2[16]);
    obj = { sections: null, ListHeaderComponent: null };
    obj = { label: null, settings: null };
    const intl = isFamilyCenterV3Enabled(closure_1_2[12]).intl;
    obj[0] = intl.string(isFamilyCenterV3Enabled(closure_1_2[12]).t.clE4PU);
    const items = [, ];
    ({ IN_APP_NOTIFICATIONS: arr[0], IN_APP_MESSAGE_SOUNDS: arr[1] } = closure_1_6);
    obj[1] = items;
    const items1 = [obj, , , , , , , , , , , , , , , , , , ];
    obj1 = { label: null, settings: null, subLabel: null };
    const intl2 = isFamilyCenterV3Enabled(closure_1_2[12]).intl;
    obj1[0] = intl2.string(isFamilyCenterV3Enabled(closure_1_2[12]).t["jcHF+3"]);
    const items2 = [closure_1_6.SYSTEM_NOTIFICATIONS];
    obj1[1] = items2;
    obj1[2] = closure_1_7(closure_1_11, {});
    items1[1] = obj1;
    const items3 = [closure_1_6.ANDROID_MESSAGE_NOTIFICATIONS];
    items1[2] = { settings: items3 };
    const items4 = [closure_1_6.IOS_NATIVE_PHONE_INTEGRATION];
    items1[3] = { settings: items4 };
    const obj2 = { label: null, settings: null };
    const intl3 = isFamilyCenterV3Enabled(closure_1_2[12]).intl;
    obj2[0] = intl3.string(isFamilyCenterV3Enabled(closure_1_2[12]).t.a2O7oY);
    const items5 = [, , ];
    ({ ANDROID_NOTIFICATION_LIGHTS: arr6[0], ANDROID_NOTIFICATION_VIBRATIONS: arr6[1], ANDROID_NOTIFICATION_SOUNDS: arr6[2] } = closure_1_6);
    obj2[1] = items5;
    items1[4] = obj2;
    const obj3 = { settings: items6, subLabel: null };
    items6 = [closure_1_6.REACTION_NOTIFICATIONS];
    const intl4 = isFamilyCenterV3Enabled(closure_1_2[12]).intl;
    obj3[1] = intl4.string(isFamilyCenterV3Enabled(closure_1_2[12]).t.oWF6eQ);
    items1[5] = obj3;
    const obj4 = { label: null, settings: null };
    const intl5 = isFamilyCenterV3Enabled(closure_1_2[12]).intl;
    obj4[0] = intl5.string(isFamilyCenterV3Enabled(closure_1_2[12]).t.EZorjX);
    const items7 = [closure_1_6.COMMUNITY_ACTIVITY_ALERTS];
    obj4[1] = items7;
    items1[6] = obj4;
    const items8 = [closure_1_6.HIGHLIGHT_NOTIFICATIONS];
    items1[7] = { settings: items8 };
    const items9 = [closure_1_6.FRIEND_STREAM_NOTIFICATIONS];
    items1[8] = { settings: items9 };
    const items10 = [closure_1_6.FRIEND_ANNIVERSARY_NOTIFICATIONS];
    items1[9] = { settings: items10 };
    const items11 = [closure_1_6.VOICE_ACTIVITY_NOTIFICATIONS];
    items1[10] = { settings: items11 };
    const items12 = [closure_1_6.FRIEND_ONLINE_NOTIFICATIONS];
    items1[11] = { settings: items12 };
    const items13 = [closure_1_6.CUSTOM_STATUS_NOTIFICATIONS];
    items1[12] = { settings: items13 };
    const items14 = [closure_1_6.FRIEND_GAMING_ACTIVITY_NOTIFICATIONS];
    items1[13] = { settings: items14 };
    const items15 = [closure_1_6.PROFILE_UPDATES_NOTIFICATIONS];
    items1[14] = { settings: items15 };
    const items16 = [closure_1_6.SERVER_TRENDING_NOTIFICATIONS];
    items1[15] = { settings: items16 };
    const items17 = [closure_1_6.UPCOMING_SERVER_EVENT_NOTIFICATIONS];
    items1[16] = { settings: items17 };
    const items18 = [closure_1_6.SUMMARY_REMINDER_NOTIFICATIONS];
    items1[17] = { settings: items18 };
    const obj5 = { label: null, settings: null };
    const intl6 = isFamilyCenterV3Enabled(closure_1_2[12]).intl;
    obj5[0] = intl6.string(isFamilyCenterV3Enabled(closure_1_2[12]).t["0YtG+k"]);
    const items19 = [, ];
    ({ SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS: arr20[0], SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS: arr20[1] } = closure_1_6);
    obj5[1] = items19;
    items1[18] = obj5;
    obj[0] = items1;
    let tmp2;
    if (callback) {
      tmp2 = callback(closure_1_2[17]);
    }
    obj[1] = tmp2;
    return obj.createList(obj);
  }, items);
  const effect = importAllResult.useEffect(() => {
    callback2();
  }, []);
  let items1 = [isFamilyCenterV3Enabled];
  const effect1 = importAllResult.useEffect(() => {
    const result = isFamilyCenterV3Enabled(closure_1_2[18]).prefetchFamilyCenterAgeGroupWhen(isFamilyCenterV3Enabled);
  }, items1);
  return callback(_modDef14094, { node });
});
let result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationScreen.tsx");

export default memoResult;
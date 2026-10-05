// === Module 15304: SettingsNotificationScreen ===

// Module 15304 (SettingsNotificationScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import CircleErrorIcon2 from "CircleErrorIcon" /* 4800 */;
import Text_Text from "Text/Text" /* 4886 */;
import Card_Card from "Card/Card" /* 5995 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6470 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 12054 */;
import SettingLayoutDefault from "SettingLayout" /* 14499 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15305 */;
import ContextualOptInNudgeHoldoutExperimentDefault from "ContextualOptInNudgeHoldoutExperiment" /* 15306 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 15307 */;
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader" /* 15308 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
function getNotificationSettings() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  const obj = { label: intl.string(intl7.t.clE4PU), settings: items };
  intl = intl7.intl;
  items = [, ];
  ({ IN_APP_NOTIFICATIONS: arr[0], IN_APP_MESSAGE_SOUNDS: arr[1] } = MobileUserSettings);
  const items1 = [obj, , , , , , , , , , , , , , , , , , ];
  const obj2 = { label: intl2.string(intl7.t["jcHF+3"]), settings: items2, subLabel: metroImportDefault(closure_11, {}) };
  intl2 = intl7.intl;
  items2 = [MobileUserSettings.SYSTEM_NOTIFICATIONS];
  items1[1] = obj2;
  const obj3 = { settings: items3 };
  items3 = [MobileUserSettings.ANDROID_MESSAGE_NOTIFICATIONS];
  items1[2] = obj3;
  const obj4 = { settings: items4 };
  items4 = [MobileUserSettings.IOS_NATIVE_PHONE_INTEGRATION];
  items1[3] = obj4;
  const obj5 = { label: intl3.string(intl7.t.a2O7oY), settings: items5 };
  intl3 = intl7.intl;
  items5 = [, , ];
  ({ ANDROID_NOTIFICATION_LIGHTS: arr6[0], ANDROID_NOTIFICATION_VIBRATIONS: arr6[1], ANDROID_NOTIFICATION_SOUNDS: arr6[2] } = MobileUserSettings);
  items1[4] = obj5;
  const obj6 = { settings: items6, subLabel: intl4.string(intl7.t.oWF6eQ) };
  items6 = [MobileUserSettings.REACTION_NOTIFICATIONS];
  intl4 = intl7.intl;
  items1[5] = obj6;
  const obj7 = { label: intl5.string(intl7.t.EZorjX), settings: items7 };
  intl5 = intl7.intl;
  items7 = [MobileUserSettings.COMMUNITY_ACTIVITY_ALERTS];
  items1[6] = obj7;
  const obj8 = { settings: items8 };
  items8 = [MobileUserSettings.HIGHLIGHT_NOTIFICATIONS];
  items1[7] = obj8;
  const obj9 = { settings: items9 };
  items9 = [MobileUserSettings.FRIEND_STREAM_NOTIFICATIONS];
  items1[8] = obj9;
  const obj10 = { settings: items10 };
  items10 = [MobileUserSettings.FRIEND_ANNIVERSARY_NOTIFICATIONS];
  items1[9] = obj10;
  const obj11 = { settings: items11 };
  items11 = [MobileUserSettings.VOICE_ACTIVITY_NOTIFICATIONS];
  items1[10] = obj11;
  const obj12 = { settings: items12 };
  items12 = [MobileUserSettings.FRIEND_ONLINE_NOTIFICATIONS];
  items1[11] = obj12;
  const obj13 = { settings: items13 };
  items13 = [MobileUserSettings.CUSTOM_STATUS_NOTIFICATIONS];
  items1[12] = obj13;
  const obj14 = { settings: items14 };
  items14 = [MobileUserSettings.FRIEND_GAMING_ACTIVITY_NOTIFICATIONS];
  items1[13] = obj14;
  const obj15 = { settings: items15 };
  items15 = [MobileUserSettings.PROFILE_UPDATES_NOTIFICATIONS];
  items1[14] = obj15;
  const obj16 = { settings: items16 };
  items16 = [MobileUserSettings.SERVER_TRENDING_NOTIFICATIONS];
  items1[15] = obj16;
  const obj17 = { settings: items17 };
  items17 = [MobileUserSettings.UPCOMING_SERVER_EVENT_NOTIFICATIONS];
  items1[16] = obj17;
  const obj18 = { settings: items18 };
  items18 = [MobileUserSettings.SUMMARY_REMINDER_NOTIFICATIONS];
  items1[17] = obj18;
  const obj19 = { label: intl6.string(intl7.t["0YtG+k"]), settings: items19 };
  intl6 = intl7.intl;
  items19 = [, ];
  ({ SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS: arr20[0], SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS: arr20[1] } = MobileUserSettings);
  items1[18] = obj19;
  return items1;
}
const View = react_native.View;
let closure_5 = AndroidNotificationSettingsStore.initializeAndroidNotificationSettingsStore;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { card: obj2, cardContent: { flexDirection: "row", alignItems: "center", gap: 8 }, text: { flex: 1 } };
obj2 = { marginBottom: 8, borderColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Card;
  let Text2;
  let first;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj10;
  let obj13;
  let obj9;
  let tmp12;
  let tmp13Result;
  const obj = react2;
  const cResult = obj.c(11);
  const tmp4 = closure_10();
  const obj2 = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("SystemNotificationsSubLabel");
  const obj3 = NotificationPermissionUtil;
  const showReactivationPrompt = obj3.useShowReactivationPrompt();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { location: "SystemNotificationsSubLabel" };
    cResult[0] = obj4;
    first = obj4;
  } else {
    first = cResult[0];
  }
  const obj5 = ContextualOptInNudgeHoldoutExperimentDefault;
  const tmp9 = !obj5.useConfig(first).inHoldout;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = SettingsNotificationUtils;
    const result = tmpResult.hasAndroidNotificationChannels();
    cResult[1] = result;
    tmp13Result = result;
  } else {
    tmp13Result = cResult[1];
  }
  if (cResult[2] !== manaTypeConsolidationExperiment) {
    if (tmp13Result) {
      let str = "text-sm/medium";
      const Text = Text_Text.Text;
      if (manaTypeConsolidationExperiment) {
        str = "experimental/body-xs/normal";
      }
      const obj6 = { variant: str, color: "text-muted", children: intl.string(intl7.t["/TZX1J"]) };
      intl = intl7.intl;
      tmp13Result = metroImportDefault(Text, obj6);
    }
    cResult[2] = manaTypeConsolidationExperiment;
    cResult[3] = tmp13Result;
    tmp12 = tmp13Result;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp9) {
    if (cResult[5] === showReactivationPrompt) {
      let tmp14;
      if (cResult[6] === tmp4) {
        tmp14 = cResult[7];
      }
      if (cResult[8] === tmp12) {
        let tmp19;
        if (cResult[9] === tmp14) {
          tmp19 = cResult[10];
        }
        return tmp19;
      }
      const obj7 = { children: items };
      items = [tmp12, tmp14];
      const tmp22 = metroImportAll(React4, obj7);
      cResult[8] = tmp12;
      cResult[9] = tmp14;
      cResult[10] = tmp22;
      tmp19 = tmp22;
    }
  }
  let tmp15 = showReactivationPrompt && !tmp9;
  if (tmp15) {
    const obj8 = { style: tmp4.card, children: metroImportDefault(Card, obj9) };
    obj9 = { border: "none", shadow: "none", children: metroImportAll(View, obj10) };
    obj10 = { style: tmp4.cardContent, children: items1 };
    Card = Card_Card.Card;
    const obj11 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
    const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
    items1 = [metroImportDefault(CircleErrorIcon, obj11), ];
    const obj12 = { style: tmp4.text, children: metroImportDefault(Text2, obj13) };
    obj13 = { color: "text-default", variant: "text-sm/medium", children: intl2.string(intl7.t.TAuasM) };
    Text2 = Text_Text.Text;
    intl2 = intl7.intl;
    items1[1] = metroImportDefault(View, obj12);
    tmp15 = metroImportDefault(View, obj8);
  }
  cResult[4] = tmp9;
  cResult[5] = showReactivationPrompt;
  cResult[6] = tmp4;
  cResult[7] = tmp15;
  tmp14 = tmp15;
}) : (() => {
  let Card;
  let Text2;
  let intl;
  let intl2;
  let items1;
  let obj11;
  let obj7;
  let obj8;
  const tmp = closure_10();
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("SystemNotificationsSubLabel");
  const obj2 = NotificationPermissionUtil;
  let showReactivationPrompt = obj2.useShowReactivationPrompt();
  const obj3 = ContextualOptInNudgeHoldoutExperimentDefault;
  const inHoldout = obj3.useConfig({ location: "SystemNotificationsSubLabel" }).inHoldout;
  const obj4 = SettingsNotificationUtils;
  let result = obj4.hasAndroidNotificationChannels();
  if (result) {
    let str = "text-sm/medium";
    const Text = Text_Text.Text;
    if (manaTypeConsolidationExperiment) {
      str = "experimental/body-xs/normal";
    }
    const obj5 = { variant: str, color: "text-muted", children: intl.string(intl7.t["/TZX1J"]) };
    intl = intl7.intl;
    result = metroImportDefault(Text, obj5);
  }
  const children = [result, ];
  if (showReactivationPrompt) {
    showReactivationPrompt = inHoldout;
  }
  if (showReactivationPrompt) {
    const obj6 = { style: tmp.card, children: metroImportDefault(Card, obj7) };
    obj7 = { border: "none", shadow: "none", children: metroImportAll(View, obj8) };
    obj8 = { style: tmp.cardContent, children: items1 };
    Card = Card_Card.Card;
    const obj9 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
    const CircleErrorIcon = CircleErrorIcon2.CircleErrorIcon;
    items1 = [metroImportDefault(CircleErrorIcon, obj9), ];
    const obj10 = { style: tmp.text, children: metroImportDefault(Text2, obj11) };
    obj11 = { color: "text-default", variant: "text-sm/medium", children: intl2.string(intl7.t.TAuasM) };
    Text2 = Text_Text.Text;
    intl2 = intl7.intl;
    items1[1] = metroImportDefault(View, obj10);
    showReactivationPrompt = metroImportDefault(View, obj6);
  }
  children[1] = showReactivationPrompt;
  return metroImportAll(React4, { children });
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp5Result;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "SettingsNotificationsScreen" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const obj3 = ContextualOptInNudgeHoldoutExperimentDefault;
  const inHoldout = obj3.useConfig(first).inHoldout;
  if (cResult[1] !== !inHoldout) {
    const obj4 = { sections: getNotificationSettings(), ListHeaderComponent: tmp5Result };
    const createList = SettingBuilders.createList;
    SettingBuilders;
    tmp5Result = undefined;
    if (!inHoldout) {
      tmp5Result = NotificationPermissionSettingsHeaderDefault;
    }
    const list = createList(obj4);
    cResult[1] = !inHoldout;
    cResult[2] = list;
    tmp7 = list;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        tmp = closure_1_5();
        return;
      }
    }
    const items = [];
    cResult[3] = N;
    cResult[4] = items;
    tmp13 = items;
  } else {
    class N {
      constructor() {
        tmp = closure_1_5();
        return;
      }
    }
    tmp13 = cResult[4];
  }
  const effect = react.useEffect(N, tmp13);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[19]);
        result = obj.prefetchFamilyCenterAgeGroup();
        return;
      }
    }
    const items1 = [];
    cResult[5] = S;
    cResult[6] = items1;
    tmp16 = items1;
  } else {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[19]);
        result = obj.prefetchFamilyCenterAgeGroup();
        return;
      }
    }
    tmp16 = cResult[6];
  }
  const effect1 = react.useEffect(S, tmp16);
  if (cResult[7] !== tmp7) {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[19]);
        result = obj.prefetchFamilyCenterAgeGroup();
        return;
      }
    }
    const obj6 = { node: tmp7 };
    const tmp19 = metroImportDefault(SettingLayoutDefault, obj6);
    cResult[7] = tmp7;
    cResult[8] = tmp19;
    tmp18 = tmp19;
  } else {
    class S {
      constructor() {
        obj = closure_1_0(closure_1_2[19]);
        result = obj.prefetchFamilyCenterAgeGroup();
        return;
      }
    }
  }
  return tmp18;
}) : (() => {
  let obj = ContextualOptInNudgeHoldoutExperimentDefault;
  const tmp = !obj.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  let closure_0 = tmp;
  const items = [tmp];
  const node = react.useMemo(() => {
    let tmp3;
    const tmp2 = SettingBuilders;
    const createList = tmp2.createList;
    const obj = { sections: getNotificationSettings(), ListHeaderComponent: tmp3 };
    tmp3 = undefined;
    if (closure_0) {
      tmp3 = NotificationPermissionSettingsHeaderDefault;
    }
    return createList(obj);
  }, items);
  const effect = react.useEffect(() => {
    closure_1_5();
  }, []);
  const effect1 = react.useEffect(() => {
    const obj = closure_0(dependencyMap[19]);
    const result = obj.prefetchFamilyCenterAgeGroup();
  }, []);
  return closure_7(SettingLayoutDefault, { node });
}));
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationScreen.tsx");

export default memoResult;
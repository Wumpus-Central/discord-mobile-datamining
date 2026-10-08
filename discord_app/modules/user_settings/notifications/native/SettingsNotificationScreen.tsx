// discord_app/modules/user_settings/notifications/native/SettingsNotificationScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import NotificationPermissionUtil from "../../../nuf/native/NotificationPermissionUtil.tsx";
import SettingLayoutDefault from "../../../settings/native/renderer/SettingLayout.tsx";
import ContextualOptInNudgeHoldoutExperimentDefault from "../../../nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx";
import SettingsNotificationUtils from "SettingsNotificationUtils.tsx";
import NotificationPermissionSettingsHeaderDefault from "NotificationPermissionSettingsHeader.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function getNotificationSettings() {
  const obj = { label: null, settings: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.clE4PU);
  const items = [,];
  ({ IN_APP_NOTIFICATIONS: arr[0], IN_APP_MESSAGE_SOUNDS: arr[1] } = MobileUserSettings);
  obj.settings = items;
  const items1 = [obj, , , , , , , , , , , , , , , , , ,];
  const obj2 = { label: null, settings: null, subLabel: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t["jcHF+3"]);
  const items2 = [MobileUserSettings.SYSTEM_NOTIFICATIONS];
  obj2.settings = items2;
  obj2.subLabel = React5(closure_11, {});
  items1[1] = obj2;
  const obj3 = { settings: null };
  const items3 = [MobileUserSettings.ANDROID_MESSAGE_NOTIFICATIONS];
  obj3.settings = items3;
  items1[2] = obj3;
  const obj4 = { settings: null };
  const items4 = [MobileUserSettings.IOS_NATIVE_PHONE_INTEGRATION];
  obj4.settings = items4;
  items1[3] = obj4;
  const obj5 = { label: null, settings: null };
  const intl3 = util.intl;
  obj5.label = intl3.string(util.t.a2O7oY);
  const items5 = [, ,];
  ({
    ANDROID_NOTIFICATION_LIGHTS: arr6[0],
    ANDROID_NOTIFICATION_VIBRATIONS: arr6[1],
    ANDROID_NOTIFICATION_SOUNDS: arr6[2],
  } = MobileUserSettings);
  obj5.settings = items5;
  items1[4] = obj5;
  const obj6 = { settings: null, subLabel: null };
  const items6 = [MobileUserSettings.REACTION_NOTIFICATIONS];
  obj6.settings = items6;
  const intl4 = util.intl;
  obj6.subLabel = intl4.string(util.t.oWF6eQ);
  items1[5] = obj6;
  const obj7 = { label: null, settings: null };
  const intl5 = util.intl;
  obj7.label = intl5.string(util.t.EZorjX);
  const items7 = [MobileUserSettings.COMMUNITY_ACTIVITY_ALERTS];
  obj7.settings = items7;
  items1[6] = obj7;
  const obj8 = { settings: null };
  const items8 = [MobileUserSettings.HIGHLIGHT_NOTIFICATIONS];
  obj8.settings = items8;
  items1[7] = obj8;
  const obj9 = { settings: null };
  const items9 = [MobileUserSettings.FRIEND_STREAM_NOTIFICATIONS];
  obj9.settings = items9;
  items1[8] = obj9;
  const obj10 = { settings: null };
  const items10 = [MobileUserSettings.FRIEND_ANNIVERSARY_NOTIFICATIONS];
  obj10.settings = items10;
  items1[9] = obj10;
  const obj11 = { settings: null };
  const items11 = [MobileUserSettings.VOICE_ACTIVITY_NOTIFICATIONS];
  obj11.settings = items11;
  items1[10] = obj11;
  const obj12 = { settings: null };
  const items12 = [MobileUserSettings.FRIEND_ONLINE_NOTIFICATIONS];
  obj12.settings = items12;
  items1[11] = obj12;
  const obj13 = { settings: null };
  const items13 = [MobileUserSettings.CUSTOM_STATUS_NOTIFICATIONS];
  obj13.settings = items13;
  items1[12] = obj13;
  const obj14 = { settings: null };
  const items14 = [MobileUserSettings.FRIEND_GAMING_ACTIVITY_NOTIFICATIONS];
  obj14.settings = items14;
  items1[13] = obj14;
  const obj15 = { settings: null };
  const items15 = [MobileUserSettings.PROFILE_UPDATES_NOTIFICATIONS];
  obj15.settings = items15;
  items1[14] = obj15;
  const obj16 = { settings: null };
  const items16 = [MobileUserSettings.SERVER_TRENDING_NOTIFICATIONS];
  obj16.settings = items16;
  items1[15] = obj16;
  const obj17 = { settings: null };
  const items17 = [MobileUserSettings.UPCOMING_SERVER_EVENT_NOTIFICATIONS];
  obj17.settings = items17;
  items1[16] = obj17;
  const obj18 = { settings: null };
  const items18 = [MobileUserSettings.SUMMARY_REMINDER_NOTIFICATIONS];
  obj18.settings = items18;
  items1[17] = obj18;
  const obj19 = { label: null, settings: null };
  const intl6 = util.intl;
  obj19.label = intl6.string(util.t["0YtG+k"]);
  const items19 = [,];
  ({ SCREEN_DOWNTIME_SCHEDULE_NOTIFICATIONS: arr20[0], SCREEN_DOWNTIME_REMINDER_NOTIFICATIONS: arr20[1] } =
    MobileUserSettings);
  obj19.settings = items19;
  items1[18] = obj19;
  return items1;
}
const View = fn(17).View;
let closure_5 = fn(15582).initializeAndroidNotificationSettingsStore;
const MobileUserSettings = fn(7966).MobileUserSettings;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj = {
  card: {
    marginBottom: 8,
    borderColor: nativeDefault.unsafe_rawColors.YELLOW_300,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.lg,
  },
  cardContent: { flexDirection: "row", alignItems: "center", gap: 8 },
  text: { flex: 1 },
};
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SystemNotificationsSubLabel() {
      const cResult = c.c(11);
      const tmp4 = closure_10();
      const manaTypeConsolidationExperiment =
        ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("SystemNotificationsSubLabel");
      const showReactivationPrompt = NotificationPermissionUtil.useShowReactivationPrompt();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { location: "SystemNotificationsSubLabel" };
        cResult[0] = obj4;
        let first = obj4;
      } else {
        first = cResult[0];
      }
      const tmp9 = !ContextualOptInNudgeHoldoutExperimentDefault.useConfig(first).inHoldout;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const result = SettingsNotificationUtils.hasAndroidNotificationChannels();
        cResult[1] = result;
        let tmp13Result = result;
        const tmpResult = SettingsNotificationUtils;
      } else {
        tmp13Result = cResult[1];
      }
      if (cResult[2] !== manaTypeConsolidationExperiment) {
        if (tmp13Result) {
          let str = "text-sm/medium";
          if (manaTypeConsolidationExperiment) {
            str = "experimental/body-xs/normal";
          }
          const obj6 = { variant: str, color: "text-muted", children: null };
          const intl = util.intl;
          obj6.children = intl.string(util.t["/TZX1J"]);
          tmp13Result = React5(Text_Text.Text, obj6);
        }
        cResult[2] = manaTypeConsolidationExperiment;
        cResult[3] = tmp13Result;
        let tmp12 = tmp13Result;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] === tmp9) {
        if (cResult[5] === showReactivationPrompt) {
          if (cResult[6] === tmp4) {
            let tmp14 = cResult[7];
          }
          if (cResult[8] === tmp12) {
            if (cResult[9] === tmp14) {
              let tmp19 = cResult[10];
            }
            return tmp19;
          }
          const obj7 = { children: null };
          const items = [tmp12, tmp14];
          obj7.children = items;
          const tmp22 = closure_1_8(options, obj7);
          cResult[8] = tmp12;
          cResult[9] = tmp14;
          cResult[10] = tmp22;
          tmp19 = tmp22;
        }
      }
      let tmp15 = showReactivationPrompt;
      if (showReactivationPrompt) {
        tmp15 = !tmp9;
      }
      if (tmp15) {
        const obj8 = { style: tmp4.card, children: null };
        const obj9 = { border: "none", shadow: "none", children: null };
        const obj10 = { style: tmp4.cardContent, children: null };
        const obj11 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
        const items1 = [React5(CircleErrorIcon.CircleErrorIcon, obj11)];
        const obj12 = { style: tmp4.text, children: null };
        const obj13 = { color: "text-default", variant: "text-sm/medium", children: null };
        const intl2 = util.intl;
        obj13.children = intl2.string(util.t.TAuasM);
        obj12.children = React5(Text_Text.Text, obj13);
        items1[1] = React5(View, obj12);
        obj10.children = items1;
        obj9.children = closure_1_8(View, obj10);
        obj8.children = React5(Card.Card, obj9);
        tmp15 = React5(View, obj8);
      }
      cResult[4] = tmp9;
      cResult[5] = showReactivationPrompt;
      cResult[6] = tmp4;
      cResult[7] = tmp15;
      tmp14 = tmp15;
    }
  : function SystemNotificationsSubLabel() {
      const tmp = closure_10();
      const manaTypeConsolidationExperiment =
        ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("SystemNotificationsSubLabel");
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
      const children = [result];
      if (showReactivationPrompt) {
        showReactivationPrompt = obj3.useConfig({ location: "SystemNotificationsSubLabel" }).inHoldout;
      }
      if (showReactivationPrompt) {
        const obj6 = { style: tmp.card, children: null };
        const obj7 = { border: "none", shadow: "none", children: null };
        const obj8 = { style: tmp.cardContent, children: null };
        const obj9 = { color: nativeDefault.unsafe_rawColors.YELLOW_300 };
        const items1 = [React5(CircleErrorIcon.CircleErrorIcon, obj9)];
        const obj10 = { style: tmp.text, children: null };
        const obj11 = { color: "text-default", variant: "text-sm/medium", children: null };
        const intl2 = util.intl;
        obj11.children = intl2.string(util.t.TAuasM);
        obj10.children = React5(Text_Text.Text, obj11);
        items1[1] = React5(View, obj10);
        obj8.children = items1;
        obj7.children = closure_1_8(View, obj8);
        obj6.children = React5(Card.Card, obj7);
        showReactivationPrompt = React5(View, obj6);
      }
      children[1] = showReactivationPrompt;
      return closure_1_8(options, { children });
    };
ReactCompilerGating = fn(558);
let obj3 = {
  marginBottom: 8,
  borderColor: nativeDefault.unsafe_rawColors.YELLOW_300,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/notifications/native/SettingsNotificationScreen.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function SettingsNotificationsScreen() {
        const cResult = c.c(9);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { location: "SettingsNotificationsScreen" };
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        const inHoldout = ContextualOptInNudgeHoldoutExperimentDefault.useConfig(first).inHoldout;
        if (cResult[1] !== !inHoldout) {
          const obj4 = { sections: getNotificationSettings(), ListHeaderComponent: null };
          let tmp5Result;
          if (!inHoldout) {
            tmp5Result = NotificationPermissionSettingsHeaderDefault;
          }
          obj4.ListHeaderComponent = tmp5Result;
          const list = SettingBuilders.createList(obj4);
          cResult[1] = tmp6;
          cResult[2] = list;
          let tmp7 = list;
          const tmpResult = SettingBuilders;
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
          let tmp12 = items;
        } else {
          class N {
            constructor() {
              tmp = closure_1_5();
              return;
            }
          }
          tmp12 = cResult[4];
        }
        const effect = noop.useEffect(N, tmp12);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              obj = closure_1_0(closure_1_2[19]);
              result = obj.prefetchFamilyCenterAgeGroup();
              return;
            }
          }
          const items1 = [];
          cResult[5] = T;
          cResult[6] = items1;
          let tmp15 = items1;
        } else {
          class T {
            constructor() {
              obj = closure_1_0(closure_1_2[19]);
              result = obj.prefetchFamilyCenterAgeGroup();
              return;
            }
          }
          tmp15 = cResult[6];
        }
        const effect1 = noop.useEffect(T, tmp15);
        if (cResult[7] !== tmp7) {
          class T {
            constructor() {
              obj = closure_1_0(closure_1_2[19]);
              result = obj.prefetchFamilyCenterAgeGroup();
              return;
            }
          }
          const obj5 = { node: tmp7 };
          const tmp18 = React5(SettingLayoutDefault, obj5);
          cResult[7] = tmp7;
          cResult[8] = tmp18;
          const tmp17 = tmp18;
        } else {
          class T {
            constructor() {
              obj = closure_1_0(closure_1_2[19]);
              result = obj.prefetchFamilyCenterAgeGroup();
              return;
            }
          }
        }
        return tmp17;
      }
    : function SettingsNotificationsScreen() {
        const tmp = !ContextualOptInNudgeHoldoutExperimentDefault.useConfig({ location: "SettingsNotificationsScreen" })
          .inHoldout;
        closure_0 = tmp;
        const items = [tmp];
        const node = noop.useMemo(() => {
          const obj2 = { sections: getNotificationSettings(), ListHeaderComponent: null };
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
          const result = closure_0(dependencyMap[19]).prefetchFamilyCenterAgeGroup();
        }, []);
        return closure_7(SettingLayoutDefault, { node });
      },
);

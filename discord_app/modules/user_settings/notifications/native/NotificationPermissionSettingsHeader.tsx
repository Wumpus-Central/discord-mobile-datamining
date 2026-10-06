// discord_app/modules/user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Constants from "../../../../Constants.tsx";
import NotificationPermissionConstants from "../../../nuf/native/components/notification/NotificationPermissionConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let unpackModuleId;
const View = react_native.View;
({ AnalyticEvents: hasOwnProperty, NOOP: metroRequire } = Constants);
({
  EventActionLocation: metroImportDefault,
  EventActionType: metroImportAll,
  NotificationNudgeAnalyticsAction: c9,
  NotificationNudgeSurface: c10,
} = NotificationPermissionConstants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, cardContent: { alignItems: "center" }, iconCircle: size, body: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
size = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: nativeDefault.space.PX_8,
};
obj3 = { marginBottom: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_13 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Button;
      let canSeePushNotificationNudge;
      let cardContent;
      let container;
      let intl;
      let intl2;
      let items1;
      let obj11;
      let obj9;
      let tmp6;
      let tmp7;
      let obj = canSeePushNotificationNudge(576);
      const cResult = obj.c(20);
      const tmp4 = closure_13();
      let obj2 = canSeePushNotificationNudge(12069);
      canSeePushNotificationNudge = obj2.useCanSeePushNotificationNudge();
      if (cResult[0] !== canSeePushNotificationNudge) {
        const fn = function o() {
          if (canSeePushNotificationNudge) {
            const obj2 = {
              action: constants4.IMPRESSION,
              prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
            };
            const obj = AnalyticsUtilsDefault;
            obj.track(hasOwnProperty.CONTEXTUAL_REMINDER_ACTION, obj2);
          }
        };
        const items = [canSeePushNotificationNudge];
        cResult[0] = canSeePushNotificationNudge;
        cResult[1] = fn;
        cResult[2] = items;
        tmp7 = items;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = react.useEffect(tmp6, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { action: constants4.ACCEPT, prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
            obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
            const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
            const pushNotificationPermission = obj3.requestPushNotificationPermission(
              constants3.ALLOW_TO_REQUEST,
              constants2.NOTIFICATION_SETTING,
              closure_1_6,
            );
          }
        }
        cResult[3] = E;
      } else {
        class E {
          constructor() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { action: constants4.ACCEPT, prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
            obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
            const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
            const pushNotificationPermission = obj3.requestPushNotificationPermission(
              constants3.ALLOW_TO_REQUEST,
              constants2.NOTIFICATION_SETTING,
              closure_1_6,
            );
          }
        }
      }
      if (canSeePushNotificationNudge) {
        let tmp10;
        let tmp16;
        let tmp18;
        let tmp24;
        class E {
          constructor() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { action: constants4.ACCEPT, prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
            obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
            const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
            const pushNotificationPermission = obj3.requestPushNotificationPermission(
              constants3.ALLOW_TO_REQUEST,
              constants2.NOTIFICATION_SETTING,
              closure_1_6,
            );
          }
        }
        ({ container, cardContent } = tmp4);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
          let obj3 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
          const BellSlashIcon = tmp(9826).BellSlashIcon;
          const tmp12 = closure_11(BellSlashIcon, obj3);
          cResult[4] = tmp12;
          tmp10 = tmp12;
        } else {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
        }
        if (cResult[5] !== tmp4.iconCircle) {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
          const obj4 = { style: tmp4.iconCircle, children: tmp10 };
          cResult[5] = tmp4.iconCircle;
          cResult[6] = closure_11(View, obj4);
          const tmp15 = closure_11(View, obj4);
        } else {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
          const obj5 = {
            variant: "heading-lg/bold",
            color: "text-default",
            children: intl.string(canSeePushNotificationNudge(1126).t.MUwOvc),
          };
          const Text = tmp(4892).Text;
          intl = tmp(1126).intl;
          const tmp17 = closure_11(Text, obj5);
          cResult[7] = tmp17;
          tmp16 = tmp17;
        } else {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
        }
        const _Symbol2 = Symbol;
        const body = tmp4.body;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
          const stringResult = obj6.string(canSeePushNotificationNudge(1126).t.G4uKoe);
          cResult[8] = stringResult;
          tmp18 = stringResult;
        } else {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
        }
        if (cResult[9] !== tmp4.body) {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
          const obj7 = { variant: "text-sm/medium", style: body, color: "text-muted", children: tmp18 };
          cResult[9] = tmp4.body;
          cResult[10] = closure_11(canSeePushNotificationNudge(4892).Text, obj7);
          const tmp21 = closure_11(canSeePushNotificationNudge(4892).Text, obj7);
        } else {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
          cResult[11] = tmp23;
        } else {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
          const obj8 = { style: tmp23, children: closure_11(Button, obj9) };
          obj9 = { variant: "primary", text: intl2.string(canSeePushNotificationNudge(1126).t["5xWOXv"]), onPress: E };
          Button = tmp(5601).Button;
          intl2 = tmp(1126).intl;
          const tmp26 = closure_11(View, obj8);
          cResult[12] = tmp26;
          tmp24 = tmp26;
        } else {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
        }
        if (cResult[13] === tmp4.cardContent) {
          class E {
            constructor() {
              const obj = AnalyticsUtilsDefault;
              const obj2 = {
                action: constants4.ACCEPT,
                prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
              };
              obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
              const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
              const pushNotificationPermission = obj3.requestPushNotificationPermission(
                constants3.ALLOW_TO_REQUEST,
                constants2.NOTIFICATION_SETTING,
                closure_1_6,
              );
            }
          }
        }
        const obj10 = { border: "none", shadow: "none", children: closure_12(View, obj11) };
        obj11 = { style: cardContent, children: items1 };
        items1 = [tmp13, tmp16, tmp20, tmp24];
        const Card = tmp(6002).Card;
        cResult[13] = tmp4.cardContent;
        cResult[14] = tmp20;
        cResult[15] = tmp13;
        cResult[16] = closure_11(Card, obj10);
        const tmp31 = closure_11(Card, obj10);
      } else {
        class E {
          constructor() {
            const obj = AnalyticsUtilsDefault;
            const obj2 = { action: constants4.ACCEPT, prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
            obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
            const obj3 = canSeePushNotificationNudge(dependencyMap[9]);
            const pushNotificationPermission = obj3.requestPushNotificationPermission(
              constants3.ALLOW_TO_REQUEST,
              constants2.NOTIFICATION_SETTING,
              closure_1_6,
            );
          }
        }
        return null;
      }
    }
  : () => {
      let BellSlashIcon;
      let Button;
      let Card;
      let canSeePushNotificationNudge;
      let intl;
      let intl2;
      let intl3;
      let items1;
      let obj10;
      let obj3;
      let obj4;
      let obj6;
      const tmp = closure_13();
      let obj = canSeePushNotificationNudge(12069);
      canSeePushNotificationNudge = obj.useCanSeePushNotificationNudge();
      const items = [canSeePushNotificationNudge];
      const effect = react.useEffect(() => {
        if (canSeePushNotificationNudge) {
          const obj2 = {
            action: constants4.IMPRESSION,
            prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
          };
          const obj = AnalyticsUtilsDefault;
          obj.track(hasOwnProperty.CONTEXTUAL_REMINDER_ACTION, obj2);
        }
      }, items);
      let tmp7 = null;
      if (canSeePushNotificationNudge) {
        let obj2 = { style: tmp.container, children: closure_11(Card, obj3) };
        obj3 = { border: "none", shadow: "none", children: closure_12(View, obj4) };
        obj4 = { style: tmp.cardContent, children: items1 };
        const obj5 = { style: tmp.iconCircle, children: closure_11(BellSlashIcon, obj6) };
        Card = tmp2(6002).Card;
        obj6 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
        BellSlashIcon = tmp2(9826).BellSlashIcon;
        items1 = [closure_11(View, obj5), , ,];
        const obj7 = {
          variant: "heading-lg/bold",
          color: "text-default",
          children: intl.string(canSeePushNotificationNudge(1126).t.MUwOvc),
        };
        const Text = tmp2(4892).Text;
        intl = tmp2(1126).intl;
        items1[1] = closure_11(Text, obj7);
        const obj8 = {
          variant: "text-sm/medium",
          style: tmp.body,
          color: "text-muted",
          children: intl2.string(canSeePushNotificationNudge(1126).t.G4uKoe),
        };
        const Text2 = tmp2(4892).Text;
        intl2 = tmp2(1126).intl;
        items1[2] = closure_11(Text2, obj8);
        const obj9 = { style: { alignSelf: "stretch" }, children: closure_11(Button, obj10) };
        obj10 = {
          variant: "primary",
          text: intl3.string(canSeePushNotificationNudge(1126).t["5xWOXv"]),
          onPress: tmp6,
        };
        Button = tmp2(5601).Button;
        intl3 = tmp2(1126).intl;
        items1[3] = closure_11(View, obj9);
        tmp7 = closure_11(View, obj2);
      }
      return tmp7;
    };
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx",
);

export default tmp6;

// discord_app/modules/user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, NOOP: metroRequire } = Constants);
const NotificationPermissionConstants = fn(12122);
({
  EventActionLocation: closure_7,
  EventActionType: closure_8,
  NotificationNudgeAnalyticsAction: closure_9,
  NotificationNudgeSurface: c10,
} = NotificationPermissionConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: { paddingTop: nativeDefault.space.PX_16 },
  cardContent: { alignItems: "center" },
  iconCircle: null,
  body: null,
};
let size = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  alignItems: "center",
  justifyContent: "center",
  marginBottom: nativeDefault.space.PX_8,
};
obj2.iconCircle = size;
let obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj2.body = { marginBottom: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_13 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { marginBottom: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationPermissionSettingsHeader() {
      const cResult = canSeePushNotificationNudge(576).c(20);
      const tmp4 = closure_13();
      let obj = canSeePushNotificationNudge(576);
      canSeePushNotificationNudge = canSeePushNotificationNudge(12123).useCanSeePushNotificationNudge();
      if (cResult[0] !== canSeePushNotificationNudge) {
        const fn = function o() {
          if (canSeePushNotificationNudge) {
            const obj2 = {
              action: constants4.IMPRESSION,
              prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
            };
            AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
          }
        };
        const items = [canSeePushNotificationNudge];
        cResult[0] = canSeePushNotificationNudge;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp7 = items;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            obj = closure_1_1(closure_1_2[10]);
            obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
            trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
            obj3 = closure_0(closure_1_2[9]);
            pushNotificationPermission = obj3.requestPushNotificationPermission(
              closure_1_8.ALLOW_TO_REQUEST,
              closure_1_7.NOTIFICATION_SETTING,
              closure_1_6,
            );
            return;
          }
        }
        cResult[3] = E;
      } else {
        class E {
          constructor() {
            obj = closure_1_1(closure_1_2[10]);
            obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
            trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
            obj3 = closure_0(closure_1_2[9]);
            pushNotificationPermission = obj3.requestPushNotificationPermission(
              closure_1_8.ALLOW_TO_REQUEST,
              closure_1_7.NOTIFICATION_SETTING,
              closure_1_6,
            );
            return;
          }
        }
      }
      if (canSeePushNotificationNudge) {
        class E {
          constructor() {
            obj = closure_1_1(closure_1_2[10]);
            obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
            trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
            obj3 = closure_0(closure_1_2[9]);
            pushNotificationPermission = obj3.requestPushNotificationPermission(
              closure_1_8.ALLOW_TO_REQUEST,
              closure_1_7.NOTIFICATION_SETTING,
              closure_1_6,
            );
            return;
          }
        }
        ({ container, cardContent } = tmp4);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
          const obj3 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
          const tmp12 = closure_11(tmp(10345).BellSlashIcon, obj3);
          cResult[4] = tmp12;
          const tmp10 = tmp12;
        } else {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
        }
        if (cResult[5] !== tmp4.iconCircle) {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
          const obj4 = { style: tmp4.iconCircle, children: tmp10 };
          const tmp15 = closure_11(View, obj4);
          cResult[5] = tmp4.iconCircle;
          cResult[6] = tmp15;
        } else {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
          const obj5 = { variant: "heading-lg/bold", color: "text-default", children: null };
          const intl = tmp(1126).intl;
          obj5.children = intl.string(tmp(1126).t.MUwOvc);
          const tmp17 = closure_11(tmp(5088).Text, obj5);
          cResult[7] = tmp17;
          const tmp16 = tmp17;
        } else {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
          const stringResult = obj6.string(tmp(1126).t.G4uKoe);
          cResult[8] = stringResult;
          const tmp18 = stringResult;
        } else {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
        }
        if (cResult[9] !== tmp4.body) {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
          const obj7 = { variant: "text-sm/medium", style: tmp4.body, color: "text-muted", children: tmp18 };
          const tmp21 = closure_11(tmp(5088).Text, obj7);
          cResult[9] = tmp4.body;
          cResult[10] = tmp21;
        } else {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
          cResult[11] = tmp23;
        } else {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
          const obj8 = { style: tmp23, children: null };
          const obj9 = { variant: "primary", text: null, onPress: null };
          const intl2 = tmp(1126).intl;
          obj9.text = intl2.string(tmp(1126).t["5xWOXv"]);
          obj9.onPress = E;
          obj8.children = closure_11(tmp(5379).Button, obj9);
          const tmp26 = closure_11(View, obj8);
          cResult[12] = tmp26;
          const tmp24 = tmp26;
        } else {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
        }
        if (cResult[13] === tmp4.cardContent) {
          class E {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
              trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
              obj3 = closure_0(closure_1_2[9]);
              pushNotificationPermission = obj3.requestPushNotificationPermission(
                closure_1_8.ALLOW_TO_REQUEST,
                closure_1_7.NOTIFICATION_SETTING,
                closure_1_6,
              );
              return;
            }
          }
        }
        const obj10 = { border: "none", shadow: "none", children: null };
        const obj11 = { style: cardContent, children: null };
        const items1 = [tmp13, tmp16, tmp20, tmp24];
        obj11.children = items1;
        obj10.children = closure_12(View, obj11);
        const tmp31 = closure_11(tmp(6181).Card, obj10);
        cResult[13] = tmp4.cardContent;
        cResult[14] = tmp20;
        cResult[15] = tmp13;
        cResult[16] = tmp31;
      } else {
        class E {
          constructor() {
            obj = closure_1_1(closure_1_2[10]);
            obj1 = { action: closure_1_9.ACCEPT, prompt_type: closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
            trackResult = obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj1);
            obj3 = closure_0(closure_1_2[9]);
            pushNotificationPermission = obj3.requestPushNotificationPermission(
              closure_1_8.ALLOW_TO_REQUEST,
              closure_1_7.NOTIFICATION_SETTING,
              closure_1_6,
            );
            return;
          }
        }
        return null;
      }
      let obj2 = canSeePushNotificationNudge(12123);
    }
  : function NotificationPermissionSettingsHeader() {
      const tmp = closure_13();
      canSeePushNotificationNudge = canSeePushNotificationNudge(12123).useCanSeePushNotificationNudge();
      const items = [canSeePushNotificationNudge];
      const effect = noop.useEffect(() => {
        if (canSeePushNotificationNudge) {
          const obj2 = {
            action: constants4.IMPRESSION,
            prompt_type: constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER,
          };
          AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
        }
      }, items);
      let tmp7 = null;
      if (canSeePushNotificationNudge) {
        let obj2 = { style: tmp.container, children: null };
        const obj3 = { border: "none", shadow: "none", children: null };
        const obj4 = { style: tmp.cardContent, children: null };
        const obj5 = { style: tmp.iconCircle, children: null };
        const obj6 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
        obj5.children = closure_11(tmp2(10345).BellSlashIcon, obj6);
        const items1 = [closure_11(View, obj5), , ,];
        const obj7 = { variant: "heading-lg/bold", color: "text-default", children: null };
        const intl = tmp2(1126).intl;
        obj7.children = intl.string(tmp2(1126).t.MUwOvc);
        items1[1] = closure_11(tmp2(5088).Text, obj7);
        const obj8 = { variant: "text-sm/medium", style: tmp.body, color: "text-muted", children: null };
        const intl2 = tmp2(1126).intl;
        obj8.children = intl2.string(tmp2(1126).t.G4uKoe);
        items1[2] = closure_11(tmp2(5088).Text, obj8);
        const obj9 = { style: { alignSelf: "stretch" }, children: null };
        const obj10 = { variant: "primary", text: null, onPress: null };
        const intl3 = tmp2(1126).intl;
        obj10.text = intl3.string(tmp2(1126).t["5xWOXv"]);
        obj10.onPress = tmp6;
        obj9.children = closure_11(tmp2(5379).Button, obj10);
        items1[3] = closure_11(View, obj9);
        obj4.children = items1;
        obj3.children = closure_12(View, obj4);
        obj2.children = closure_11(tmp2(6181).Card, obj3);
        tmp7 = closure_11(View, obj2);
      }
      return tmp7;
    };

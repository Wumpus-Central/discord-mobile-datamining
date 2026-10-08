// discord_app/modules/nuf/native/components/notification/RedesignNotificationModal.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import NotificationPermissionUtil from "../../NotificationPermissionUtil.tsx";
import PushNotificationActionCreators from "../../../../../actions/native/PushNotificationActionCreators.tsx";
import NewUserPermissionsOnboardingDefault from "../NewUserPermissionsOnboarding.android.tsx";
import _modDef16221 from "../../../../../../_runtime/metro/16221__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const PermissionStateType = fn(12140).PermissionStateType;
const NotificationPermissionConstants = fn(12141);
({ EventActionLocation: closure_7, EventActionType: closure_8 } = NotificationPermissionConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = {
  container: {
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    marginTop: -nativeDefault.space.PX_48,
  },
  notificationHeaderImage: { position: "absolute", alignSelf: "center", zIndex: 2, top: -140, height: 156, width: 150 },
};
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RedesignNotificationModal(onComplete) {
      const cResult = onComplete(576).c(15);
      onComplete = onComplete.onComplete;
      const tmp4 = closure_11();
      if (cResult[0] !== onComplete) {
        const fn = function n() {
          const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(
            constants2.ALLOW_TO_REQUEST,
            constants.ALERT,
            () => {
              if (onComplete != null) {
                tmp();
              }
            },
          );
        };
        cResult[0] = onComplete;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== onComplete) {
        class I {
          constructor() {
            obj = closure_1(closure_2[11]);
            obj1 = { action_type: EventActionType.SKIP_STEP, action_location: EventActionLocation.ALERT };
            trackResult = obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj1);
            obj3 = closure_0(closure_2[12]);
            result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
            obj4 = closure_0(closure_2[10]);
            result1 = obj4.enableProvisionalPushNotification();
            if (onComplete != null) {
              flag = true;
              tmp4Result = tmp4(true);
            }
            return;
          }
        }
        cResult[2] = onComplete;
        cResult[3] = I;
      } else {
        class I {
          constructor() {
            obj = closure_1(closure_2[11]);
            obj1 = { action_type: EventActionType.SKIP_STEP, action_location: EventActionLocation.ALERT };
            trackResult = obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj1);
            obj3 = closure_0(closure_2[12]);
            result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
            obj4 = closure_0(closure_2[10]);
            result1 = obj4.enableProvisionalPushNotification();
            if (onComplete != null) {
              flag = true;
              tmp4Result = tmp4(true);
            }
            return;
          }
        }
      }
      if (cResult[4] !== tmp4.notificationHeaderImage) {
        class I {
          constructor() {
            obj = closure_1(closure_2[11]);
            obj1 = { action_type: EventActionType.SKIP_STEP, action_location: EventActionLocation.ALERT };
            trackResult = obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj1);
            obj3 = closure_0(closure_2[12]);
            result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
            obj4 = closure_0(closure_2[10]);
            result1 = obj4.enableProvisionalPushNotification();
            if (onComplete != null) {
              flag = true;
              tmp4Result = tmp4(true);
            }
            return;
          }
        }
        let obj2 = { resizeMode: "contain", style: tmp4.notificationHeaderImage, source: _modDef16221 };
        const tmp10 = <closure_4 resizeMode="contain" style={tmp4.notificationHeaderImage} source={_modDef16221} />;
        cResult[4] = tmp4.notificationHeaderImage;
        cResult[5] = tmp10;
      } else {
        class I {
          constructor() {
            obj = closure_1(closure_2[11]);
            obj1 = { action_type: EventActionType.SKIP_STEP, action_location: EventActionLocation.ALERT };
            trackResult = obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj1);
            obj3 = closure_0(closure_2[12]);
            result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
            obj4 = closure_0(closure_2[10]);
            result1 = obj4.enableProvisionalPushNotification();
            if (onComplete != null) {
              flag = true;
              tmp4Result = tmp4(true);
            }
            return;
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            obj = closure_1(closure_2[11]);
            obj1 = { action_type: EventActionType.SKIP_STEP, action_location: EventActionLocation.ALERT };
            trackResult = obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj1);
            obj3 = closure_0(closure_2[12]);
            result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
            obj4 = closure_0(closure_2[10]);
            result1 = obj4.enableProvisionalPushNotification();
            if (onComplete != null) {
              flag = true;
              tmp4Result = tmp4(true);
            }
            return;
          }
        }
        const stringResult = obj3.string(tmp(1126).t["3nx0b5"]);
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(tmp(1126).t.Gf7U1T);
        cResult[6] = stringResult;
        cResult[7] = stringResult1;
        let tmp12 = stringResult1;
        const tmp11 = stringResult;
      } else {
        class I {
          constructor() {
            obj = closure_1(closure_2[11]);
            obj1 = { action_type: EventActionType.SKIP_STEP, action_location: EventActionLocation.ALERT };
            trackResult = obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj1);
            obj3 = closure_0(closure_2[12]);
            result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
            obj4 = closure_0(closure_2[10]);
            result1 = obj4.enableProvisionalPushNotification();
            if (onComplete != null) {
              flag = true;
              tmp4Result = tmp4(true);
            }
            return;
          }
        }
        tmp12 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        class I {
          constructor() {
            obj = closure_1(closure_2[11]);
            obj1 = { action_type: EventActionType.SKIP_STEP, action_location: EventActionLocation.ALERT };
            trackResult = obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj1);
            obj3 = closure_0(closure_2[12]);
            result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
            obj4 = closure_0(closure_2[10]);
            result1 = obj4.enableProvisionalPushNotification();
            if (onComplete != null) {
              flag = true;
              tmp4Result = tmp4(true);
            }
            return;
          }
        }
      }
      let obj = onComplete(576);
      cResult[8] = tmp5;
      cResult[9] = I;
      cResult[10] = tmp7;
      cResult[11] = jsx(NewUserPermissionsOnboardingDefault, {
        onAllow: tmp5,
        onDontAllow: I,
        header: tmp7,
        title: tmp11,
        subtitle: tmp12,
      });
      const tmp15 = jsx(NewUserPermissionsOnboardingDefault, {
        onAllow: tmp5,
        onDontAllow: I,
        header: tmp7,
        title: tmp11,
        subtitle: tmp12,
      });
    }
  : function RedesignNotificationModal(onComplete) {
      onComplete = onComplete.onComplete;
      const tmp = closure_11();
      const items = [onComplete];
      const items1 = [onComplete];
      const callback = noop.useCallback(() => {
        const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(
          constants2.ALLOW_TO_REQUEST,
          constants.ALERT,
          () => {
            if (onComplete != null) {
              tmp();
            }
          },
        );
      }, items);
      let obj = { style: tmp.container, children: null };
      const callback1 = noop.useCallback(() => {
        AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, {
          action_type: constants2.SKIP_STEP,
          action_location: constants.ALERT,
        });
        const obj2 = { action_type: constants2.SKIP_STEP, action_location: constants.ALERT };
        const result = PushNotificationActionCreators.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
        const result1 = NotificationPermissionUtil.enableProvisionalPushNotification();
        if (onComplete != null) {
          tmp4(true);
        }
      }, items1);
      let obj2 = { onAllow: callback, onDontAllow: callback1, header: null, title: null, subtitle: null };
      let obj3 = { resizeMode: "contain", style: tmp.notificationHeaderImage, source: _modDef16221 };
      obj2.header = <closure_4 resizeMode="contain" style={tmp.notificationHeaderImage} source={_modDef16221} />;
      const intl = onComplete(1126).intl;
      obj2.title = intl.string(onComplete(1126).t["3nx0b5"]);
      const intl2 = onComplete(1126).intl;
      obj2.subtitle = intl2.string(onComplete(1126).t.Gf7U1T);
      obj.children = jsx(NewUserPermissionsOnboardingDefault, {
        onAllow: callback,
        onDontAllow: callback1,
        header: null,
        title: null,
        subtitle: null,
      });
      return <closure_5 style={tmp.container}>{null}</closure_5>;
    };
let closure_12 = tmp4;
ReactCompilerGating = fn(558);
let obj3 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  marginTop: -nativeDefault.space.PX_48,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default tmp4;
export const RedesignNotificationScreen = ReactCompilerGating.isReactCompilerEnabled()
  ? function RedesignNotificationScreen(route) {
      const cResult = c.c(2);
      const onComplete = route.route.params.onComplete;
      if (cResult[0] !== onComplete) {
        const obj2 = { onComplete };
        const tmp5 = <closure_12 onComplete={onComplete} />;
        cResult[0] = onComplete;
        cResult[1] = tmp5;
        let tmp2 = tmp5;
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : function RedesignNotificationScreen(onComplete) {
      return <closure_12 onComplete={onComplete.route.params.onComplete} />;
    };

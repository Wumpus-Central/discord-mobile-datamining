// === Module 16336: RedesignNotificationModal ===

// Module 16336 (RedesignNotificationModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 12079 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12080 */;
import NewUserPermissionsOnboardingDefault from "NewUserPermissionsOnboarding" /* 12366 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const PermissionStateType = fn(12077).PermissionStateType;
const NotificationPermissionConstants = fn(12078);
({ EventActionLocation: metroRequire, EventActionType: closure_7 } = NotificationPermissionConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: nativeDefault.space.PX_48 } };
let closure_10 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignNotificationModal(onComplete) {
  const cResult = onComplete(576).c(13);
  onComplete = onComplete.onComplete;
  const tmp4 = closure_10();
  if (cResult[0] !== onComplete) {
    const fn = function l() {
      const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, constants.ALERT, () => {
        if (onComplete != null) {
          tmp();
        }
      });
    };
    cResult[0] = onComplete;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== onComplete) {
    class R {
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
    cResult[3] = R;
  } else {
    class R {
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
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
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
    const tmp8 = jsx(tmp(16337).BellSpotIllustration, { width: 245, accessible: false });
    cResult[4] = tmp8;
    const tmp7 = tmp8;
  } else {
    class R {
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
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
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
    const stringResult = obj2.string(tmp(1126).t["3nx0b5"]);
    const intl = tmp(1126).intl;
    const stringResult1 = intl.string(tmp(1126).t.Gf7U1T);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    let tmp10 = stringResult1;
    const tmp9 = stringResult;
  } else {
    class R {
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
    tmp10 = cResult[6];
  }
  if (cResult[7] === tmp5) {
    class R {
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
    if (cResult[10] === tmp4.container) {
      class R {
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
      return tmp15;
    }
    let obj3 = { style: tmp4.container, children: tmp13 };
    const tmp18 = <View style={tmp4.container}>{tmp13}</View>;
    cResult[10] = tmp4.container;
    cResult[11] = tmp13;
    cResult[12] = tmp18;
    tmp15 = tmp18;
  }
  const tmp14 = jsx(NewUserPermissionsOnboardingDefault, { onAllow: tmp5, onDontAllow: R, header: tmp7, headerInsideCard: true, title: tmp9, subtitle: tmp10 });
  cResult[7] = tmp5;
  cResult[8] = R;
  cResult[9] = tmp14;
  let obj = onComplete(576);
}) : (function RedesignNotificationModal(onComplete) {
  onComplete = onComplete.onComplete;
  const items = [onComplete];
  const items1 = [onComplete];
  const callback = noop.useCallback(() => {
    const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, constants.ALERT, () => {
      if (onComplete != null) {
        tmp();
      }
    });
  }, items);
  let obj = { style: closure_10().container, children: null };
  const callback1 = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, { action_type: constants2.SKIP_STEP, action_location: constants.ALERT });
    const obj2 = { action_type: constants2.SKIP_STEP, action_location: constants.ALERT };
    const result = PushNotificationActionCreators.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
    const result1 = NotificationPermissionUtil.enableProvisionalPushNotification();
    if (onComplete != null) {
      tmp4(true);
    }
  }, items1);
  let obj2 = { onAllow: callback, onDontAllow: callback1, header: null, headerInsideCard: true, title: null, subtitle: null };
  const tmp = closure_10();
  obj2.header = jsx(onComplete(16337).BellSpotIllustration, { width: 245, accessible: false });
  const intl = onComplete(1126).intl;
  obj2.title = intl.string(onComplete(1126).t["3nx0b5"]);
  const intl2 = onComplete(1126).intl;
  obj2.subtitle = intl2.string(onComplete(1126).t.Gf7U1T);
  obj.children = jsx(NewUserPermissionsOnboardingDefault, { onAllow: callback, onDontAllow: callback1, header: null, headerInsideCard: true, title: null, subtitle: null });
  return <View style={closure_10().container}>{null}</View>;
});
let closure_11 = tmp3;
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: nativeDefault.space.PX_48 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default tmp3;
export const RedesignNotificationScreen = ReactCompilerGating.isReactCompilerEnabled() ? (function RedesignNotificationScreen(route) {
  const cResult = c.c(2);
  const onComplete = route.route.params.onComplete;
  if (cResult[0] !== onComplete) {
    const obj2 = { onComplete };
    const tmp5 = <closure_11 onComplete={onComplete} />;
    cResult[0] = onComplete;
    cResult[1] = tmp5;
    let tmp2 = tmp5;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : (function RedesignNotificationScreen(onComplete) {
  return <closure_11 onComplete={onComplete.route.params.onComplete} />;
});
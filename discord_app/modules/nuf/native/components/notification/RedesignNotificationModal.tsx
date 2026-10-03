// === Module 15917: RedesignNotificationModal ===

// Module 15917 (RedesignNotificationModal)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 12054 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12055 */;
import NewUserPermissionsOnboardingDefault from "NewUserPermissionsOnboarding" /* 12337 */;
import _modDef15918 from "module_15918" /* 15918 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const PermissionStateType = fn(12052).PermissionStateType;
const NotificationPermissionConstants = fn(12053);
({ EventActionLocation: closure_7, EventActionType: closure_8 } = NotificationPermissionConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: -nativeDefault.space.PX_48 }, notificationHeaderImage: { position: "absolute", alignSelf: "center", zIndex: 2, top: -140, height: 156, width: 150 } };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onComplete) => {
  const cResult = onComplete(576).c(15);
  onComplete = onComplete.onComplete;
  const tmp4 = closure_11();
  if (cResult[0] !== onComplete) {
    const fn = function n() {
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
    const fn2 = function p() {
      AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, { action_type: constants2.SKIP_STEP, action_location: constants.ALERT });
      const obj2 = { action_type: constants2.SKIP_STEP, action_location: constants.ALERT };
      const result = PushNotificationActionCreators.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
      const result1 = NotificationPermissionUtil.enableProvisionalPushNotification();
      if (onComplete != null) {
        tmp4(true);
      }
    };
    cResult[2] = onComplete;
    cResult[3] = fn2;
    let tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp4.notificationHeaderImage) {
    let obj2 = { resizeMode: "contain", style: tmp4.notificationHeaderImage, source: _modDef15918 };
    const tmp11 = <closure_4 resizeMode="contain" style={tmp4.notificationHeaderImage} source={_modDef15918} />;
    cResult[4] = tmp4.notificationHeaderImage;
    cResult[5] = tmp11;
    let tmp7 = tmp11;
  } else {
    tmp7 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t["3nx0b5"]);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.Gf7U1T);
    cResult[6] = stringResult;
    cResult[7] = stringResult1;
    let tmp13 = stringResult1;
    let tmp12 = stringResult;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  if (cResult[8] === tmp5) {
    if (cResult[9] === tmp6) {
      if (cResult[10] === tmp7) {
        let tmp16 = cResult[11];
      }
      if (cResult[12] === tmp4.container) {
        if (cResult[13] === tmp16) {
          let tmp18 = cResult[14];
        }
        return tmp18;
      }
      let obj3 = { style: tmp4.container, children: tmp16 };
      const tmp21 = <closure_5 style={tmp4.container}>{tmp16}</closure_5>;
      cResult[12] = tmp4.container;
      cResult[13] = tmp16;
      cResult[14] = tmp21;
      tmp18 = tmp21;
    }
  }
  const tmp17 = jsx(NewUserPermissionsOnboardingDefault, { onAllow: tmp5, onDontAllow: tmp6, header: tmp7, title: tmp12, subtitle: tmp13 });
  cResult[8] = tmp5;
  cResult[9] = tmp6;
  cResult[10] = tmp7;
  cResult[11] = tmp17;
  tmp16 = tmp17;
  let obj = onComplete(576);
}) : ((onComplete) => {
  onComplete = onComplete.onComplete;
  const tmp = closure_11();
  const items = [onComplete];
  const items1 = [onComplete];
  const callback = noop.useCallback(() => {
    const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, constants.ALERT, () => {
      if (onComplete != null) {
        tmp();
      }
    });
  }, items);
  let obj = { style: tmp.container, children: null };
  const callback1 = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, { action_type: constants2.SKIP_STEP, action_location: constants.ALERT });
    const obj2 = { action_type: constants2.SKIP_STEP, action_location: constants.ALERT };
    const result = PushNotificationActionCreators.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
    const result1 = NotificationPermissionUtil.enableProvisionalPushNotification();
    if (onComplete != null) {
      tmp4(true);
    }
  }, items1);
  let obj2 = { onAllow: callback, onDontAllow: callback1, header: null, title: null, subtitle: null };
  let obj3 = { resizeMode: "contain", style: tmp.notificationHeaderImage, source: _modDef15918 };
  obj2.header = <closure_4 resizeMode="contain" style={tmp.notificationHeaderImage} source={_modDef15918} />;
  const intl = onComplete(1126).intl;
  obj2.title = intl.string(onComplete(1126).t["3nx0b5"]);
  const intl2 = onComplete(1126).intl;
  obj2.subtitle = intl2.string(onComplete(1126).t.Gf7U1T);
  obj.children = jsx(NewUserPermissionsOnboardingDefault, { onAllow: callback, onDontAllow: callback1, header: null, title: null, subtitle: null });
  return <closure_5 style={tmp.container}>{null}</closure_5>;
});
let closure_12 = tmp4;
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: -nativeDefault.space.PX_48 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default tmp4;
export const RedesignNotificationScreen = ReactCompilerGating.isReactCompilerEnabled() ? ((route) => {
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
}) : ((onComplete) => <closure_12 onComplete={onComplete.route.params.onComplete} />);
// === Module 17988: RedesignNotificationModal ===

// Module 17988 (RedesignNotificationModal)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 13925 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 13926 */;
import NewUserPermissionsOnboardingDefault from "NewUserPermissionsOnboarding" /* 14206 */;
import noop from "module_19" /* 19 */;

require = fn;
class RedesignNotificationModal {
  constructor(arg0) {
    onComplete = global.onComplete;
    items = [];
    items[0] = onComplete;
    tmp = closure_10();
    items1 = [];
    items1[0] = onComplete;
    callback = closure_3.useCallback(() => {
      const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, constants.ALERT, () => {
        if (onComplete != null) {
          tmp();
        }
      });
    }, items);
    obj = { style: tmp.container, children: null };
    callback1 = closure_3.useCallback(() => {
      AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, { action_type: constants2.SKIP_STEP, action_location: constants.ALERT });
      const obj2 = { action_type: constants2.SKIP_STEP, action_location: constants.ALERT };
      const result = PushNotificationActionCreators.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
      const result1 = NotificationPermissionUtil.enableProvisionalPushNotification();
      if (onComplete != null) {
        tmp4(true);
      }
    }, items1);
    obj1 = { onAllow: callback, onDontAllow: callback1, header: null, headerInsideCard: true, title: null, subtitle: null };
    tmp4 = closure_1(closure_2[11]);
    obj1.header = jsx(onComplete(closure_2[12]).BellSpotIllustration, { width: 245, accessible: false });
    intl = onComplete(closure_2[13]).intl;
    obj1.title = intl.string(onComplete(closure_2[13]).t["3nx0b5"]);
    intl2 = onComplete(closure_2[13]).intl;
    obj1.subtitle = intl2.string(onComplete(closure_2[13]).t.Gf7U1T);
    obj.children = jsx(tmp4, obj1);
    return jsx(View, obj);
  }
}
const View = fn(17).View;
const PermissionStateType = fn(13923).PermissionStateType;
const NotificationPermissionConstants = fn(13924);
({ EventActionLocation: metroRequire, EventActionType: closure_7 } = NotificationPermissionConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: nativeDefault.space.PX_48 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default RedesignNotificationModal;
export function RedesignNotificationScreen(onComplete) {
  return <RedesignNotificationModal onComplete={onComplete.route.params.onComplete} />;
}
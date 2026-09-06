// === Module 15999: RedesignNotificationModal ===

// Module 15999 (RedesignNotificationModal)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 12411 */;
import PushNotificationActionCreators from "PushNotificationActionCreators" /* 12412 */;
import NewUserPermissionsOnboardingDefault from "NewUserPermissionsOnboarding" /* 12688 */;
import _modDef16000 from "module_16000" /* 16000 */;
import noop from "module_19" /* 19 */;

require = fn;
class RedesignNotificationModal {
  constructor(arg0) {
    onComplete = global.onComplete;
    tmp = closure_11();
    items = [];
    items[0] = onComplete;
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
      const obj = { action_type: constants2.SKIP_STEP, action_location: constants.ALERT };
      obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
      const result = PushNotificationActionCreators.setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
      const result1 = NotificationPermissionUtil.enableProvisionalPushNotification();
      if (onComplete != null) {
        tmp4(true);
      }
    }, items1);
    obj = { onAllow: callback, onDontAllow: callback1, header: null, title: null, subtitle: null };
    obj1 = { resizeMode: "contain", style: tmp.notificationHeaderImage, source: null };
    tmp4 = closure_1(closure_2[11]);
    obj1.source = closure_1(closure_2[12]);
    obj.header = jsx(Image, obj1);
    intl = onComplete(closure_2[13]).intl;
    obj.title = intl.string(onComplete(closure_2[13]).t["3nx0b5"]);
    intl2 = onComplete(closure_2[13]).intl;
    obj.subtitle = intl2.string(onComplete(closure_2[13]).t.Gf7U1T);
    obj.children = jsx(tmp4, obj);
    return jsx(View, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const PermissionStateType = fn(12409).PermissionStateType;
const NotificationPermissionConstants = fn(12410);
({ EventActionLocation: closure_7, EventActionType: closure_8 } = NotificationPermissionConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, notificationHeaderImage: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: -nativeDefault.space.PX_48 };
createStyles.container = createStyles;
createStyles.notificationHeaderImage = { position: "absolute", alignSelf: "center", zIndex: 2, top: -140, height: 156, width: 150 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default RedesignNotificationModal;
export const RedesignNotificationScreen = function RedesignNotificationScreen(onComplete) {
  return <RedesignNotificationModal onComplete={onComplete.route.params.onComplete} />;
};
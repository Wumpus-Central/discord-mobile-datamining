// === Module 15999: RedesignNotificationModal ===

// Module 15999 (RedesignNotificationModal)
import ThemesDefault from "Themes" /* 576 */;
import NewUserPermissionsOnboardingDefault from "NewUserPermissionsOnboarding" /* 12688 */;
import registerAssetDefault from "registerAsset" /* 16000 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { PermissionStateType } from "set" /* 12409 */;
import EventActionType from "EventActionType" /* 12410 */;
import { AnalyticEvents } from "ME" /* 1074 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
class RedesignNotificationModal {
  constructor(arg0) {
    onComplete = global.onComplete;
    tmp = closure_11();
    items = [];
    items[0] = onComplete;
    items1 = [];
    items1[0] = onComplete;
    callback = closure_3.useCallback(() => {
      const pushNotificationPermission = onComplete(closure_1_2[8]).requestPushNotificationPermission(closure_1_8.ALLOW_TO_REQUEST, closure_1_7.ALERT, () => {
        if (closure_0 != null) {
          tmp();
        }
      });
    }, items);
    obj = { style: tmp.container, children: null };
    callback1 = closure_3.useCallback(() => {
      let obj = closure_1_1(closure_1_2[9]);
      obj = { action_type: closure_1_8.SKIP_STEP, action_location: closure_1_7.ALERT };
      obj.track(closure_1_9.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
      const result = onComplete(closure_1_2[10]).setPushPermissionState(closure_1_6.PROMPT_SKIPPED);
      const obj3 = onComplete(closure_1_2[10]);
      const result1 = onComplete(closure_1_2[8]).enableProvisionalPushNotification();
      if (onComplete != null) {
        tmp4(true);
      }
    }, items1);
    obj = { onAllow: callback, onDontAllow: callback1, header: null, title: null, subtitle: null };
    obj1 = { resizeMode: "contain", style: tmp.notificationHeaderImage, source: null };
    tmp4 = require("NewUserPermissionsOnboarding");
    obj1[2] = require("registerAsset");
    obj[2] = jsx(Image, obj1);
    intl = require("getSystemLocale").intl;
    obj[3] = intl.string(require("getSystemLocale").t["3nx0b5"]);
    intl2 = require("getSystemLocale").intl;
    obj[4] = intl2.string(require("getSystemLocale").t.Gf7U1T);
    obj[1] = jsx(tmp4, obj);
    return jsx(View, obj);
  }
}
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ EventActionLocation: error, EventActionType: closure_8 } = EventActionType);
createCacheKey = { container: null, notificationHeaderImage: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, marginTop: -ThemesDefault.space.PX_48 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", alignSelf: "center", zIndex: 2, top: -140, height: 156, width: 150 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default RedesignNotificationModal;
export const RedesignNotificationScreen = function RedesignNotificationScreen(onComplete) {
  return <RedesignNotificationModal onComplete={arg0.route.params.onComplete} />;
};
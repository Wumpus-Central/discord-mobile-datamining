import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { PermissionStateType } from "set";
import EventActionType from "EventActionType";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
class RedesignNotificationModal {
  constructor(arg0) {
    onComplete = global.onComplete;
    tmp = jsx();
    items = [];
    items[0] = onComplete;
    items1 = [];
    items1[0] = onComplete;
    callback = noop.useCallback(() => {
      const pushNotificationPermission = onComplete(outer1_2[8]).requestPushNotificationPermission(outer1_8.ALLOW_TO_REQUEST, outer1_7.ALERT, () => {
        if (closure_0 != null) {
          tmp();
        }
      });
    }, items);
    obj = { style: tmp.container, children: null };
    callback1 = noop.useCallback(() => {
      let obj = outer1_1(outer1_2[9]);
      obj = { action_type: outer1_8.SKIP_STEP, action_location: outer1_7.ALERT };
      obj.track(outer1_9.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
      const result = onComplete(outer1_2[10]).setPushPermissionState(outer1_6.PROMPT_SKIPPED);
      const obj3 = onComplete(outer1_2[10]);
      const result1 = onComplete(outer1_2[8]).enableProvisionalPushNotification();
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
({ EventActionLocation: error, EventActionType: metroImportAll } = EventActionType);
createCacheKey = { container: null, notificationHeaderImage: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, marginTop: -require("Themes").space.PX_48 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", alignSelf: "center", zIndex: 2, top: -140, height: 156, width: 150 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default RedesignNotificationModal;
export const RedesignNotificationScreen = function RedesignNotificationScreen(onComplete) {
  return <RedesignNotificationModal onComplete={arg0.route.params.onComplete} />;
};
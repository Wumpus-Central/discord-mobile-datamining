// discord_app/modules/nuf/native/components/notification/RedesignNotificationModal.tsx
import expandEventPropertiesDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import NewUserPermissionsOnboardingDefault from "../NewUserPermissionsOnboarding.android.tsx";
import registerAssetDefault from "../../../../../../_runtime/15266_registerAsset.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { PermissionStateType } from "../../../../../stores/native/PushNotificationPermissionStore.tsx";
import EventActionType from "NotificationPermissionConstants.tsx";
import { AnalyticEvents } from "../../../../../Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
class RedesignNotificationModal {
  constructor(arg0) {
    onComplete = global.onComplete;
    tmp = closure_11();
    items = [];
    items[0] = onComplete;
    items1 = [];
    items1[0] = onComplete;
    callback = closure_3.useCallback(() => {
      const pushNotificationPermission = onComplete(dependencyMap[8]).requestPushNotificationPermission(closure_1_8.ALLOW_TO_REQUEST, closure_1_7.ALERT, () => {
        if (closure_0 != null) {
          tmp();
        }
      });
    }, items);
    obj = { style: tmp.container, children: null };
    callback1 = closure_3.useCallback(() => {
      const obj = { action_type: closure_1_8.SKIP_STEP, action_location: closure_1_7.ALERT };
      obj.track(AnalyticEvents.NOTIFICATION_PERMISSION_PREPROMPT_ACKED, obj);
      const result = onComplete(dependencyMap[10]).setPushPermissionState(PermissionStateType.PROMPT_SKIPPED);
      const obj3 = onComplete(dependencyMap[10]);
      const result1 = onComplete(dependencyMap[8]).enableProvisionalPushNotification();
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
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, marginTop: -ThemesDefault.space.PX_48 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", alignSelf: "center", zIndex: 2, top: -140, height: 156, width: 150 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/nuf/native/components/notification/RedesignNotificationModal.tsx");

export default RedesignNotificationModal;
export const RedesignNotificationScreen = function RedesignNotificationScreen(onComplete) {
  return <RedesignNotificationModal onComplete={onComplete.route.params.onComplete} />;
};
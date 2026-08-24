// discord_app/modules/holidays/setIncomingRingtone.android.tsx
import set from "../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";

const NativeModules = get_ActivityIndicator.NativeModules;
const result = set.fileFinishedImporting("modules/holidays/setIncomingRingtone.android.tsx");

export const setIncomingRingtone = function setIncomingRingtone(call_ringing, arg1) {
  const DCDNotificationCategoryUtils = NativeModules.DCDNotificationCategoryUtils;
  if (DCDNotificationCategoryUtils != null) {
    const setIncomingRingtone = DCDNotificationCategoryUtils.setIncomingRingtone;
    if (setIncomingRingtone != null) {
      setIncomingRingtone(call_ringing);
    }
  }
};
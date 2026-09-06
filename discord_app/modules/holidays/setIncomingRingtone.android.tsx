// discord_app/modules/holidays/setIncomingRingtone.android.tsx
import _mod17 from "../../../_runtime/metro/00017__.js";
import size from "../../../_runtime/metro/00002__.js";

const NativeModules = _mod17.NativeModules;
const result = size.fileFinishedImporting("modules/holidays/setIncomingRingtone.android.tsx");

export const setIncomingRingtone = function setIncomingRingtone(call_ringing) {
  const DCDNotificationCategoryUtils = NativeModules.DCDNotificationCategoryUtils;
  if (DCDNotificationCategoryUtils != null) {
    const setIncomingRingtone = DCDNotificationCategoryUtils.setIncomingRingtone;
    if (setIncomingRingtone != null) {
      setIncomingRingtone(call_ringing);
    }
  }
};

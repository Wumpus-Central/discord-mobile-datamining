// === Module 18069: setIncomingRingtone ===

// Module 18069 (setIncomingRingtone)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

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
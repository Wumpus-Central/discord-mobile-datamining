// === Module 17459: ParentalConsentManager ===

// Module 17459 (ParentalConsentManager)
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 17460 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
let prototype = function ParentalConsentManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    CONNECTION_OPEN_SUPPLEMENTAL() {
      return AppStoreAgeSignalReport.beginAppStoreAgeSignalReport();
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ParentalConsentManager.tsx");

export default prototype;
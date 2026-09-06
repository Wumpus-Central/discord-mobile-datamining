// discord_app/modules/age_assurance/native/ParentalConsentManager.tsx
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
let prototype = function ParentalConsentManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    CONNECTION_OPEN_SUPPLEMENTAL() {
      return AppStoreAgeSignalReport.beginAppStoreAgeSignalReport();
    },
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/native/ParentalConsentManager.tsx");

export default prototype;

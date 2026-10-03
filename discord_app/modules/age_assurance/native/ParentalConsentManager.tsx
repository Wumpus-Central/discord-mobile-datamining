// === Module 17573: ParentalConsentManager ===

// Module 17573 (ParentalConsentManager)
import Constants from "Constants" /* 1085 */;
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 17574 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

const AppStates = Constants.AppStates;
class ParentalConsentManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      CONNECTION_OPEN_SUPPLEMENTAL() {
            return applyArgumentsResult(dependencyMap[2]).beginAppStoreAgeSignalReport();
          },
      APP_STATE_UPDATE(arg0) {
            return applyArgumentsResult.handleAppStateUpdate(arg0);
          }
    };
    return applyArgumentsResult;
  }
}
ParentalConsentManager.prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  if (state.state === AppStates.ACTIVE) {
    const result = AppStoreAgeSignalReport.resumeAppStoreAgeSignalReport();
  }
};
const parentalConsentManager = new ParentalConsentManager();
let result = size.fileFinishedImporting("modules/age_assurance/native/ParentalConsentManager.tsx");

export default parentalConsentManager;
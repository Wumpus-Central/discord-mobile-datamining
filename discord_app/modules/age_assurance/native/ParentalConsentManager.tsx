// === Module 20017: ParentalConsentManager ===

// Module 20017 (ParentalConsentManager)
import Constants from "Constants" /* 1072 */;
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 8229 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7353 */;
import size from "module_2" /* 2 */;

const AppStates = Constants.AppStates;
class ParentalConsentManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      CONNECTION_OPEN_SUPPLEMENTAL() {
            const result = applyArgumentsResult(20018).isAppStoreConsentReinstatementEnabledForSession();
            const obj = applyArgumentsResult(20018);
            const result1 = applyArgumentsResult(8229).beginAppStoreAgeSignalReport(result);
            const obj2 = applyArgumentsResult(8229);
            const result2 = applyArgumentsResult(20018).beginAppStoreConsentReinstatement();
          },
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult(8229).startPendingAppStoreAgeSignalReport();
          },
      APP_STATE_UPDATE(arg0) {
            return applyArgumentsResult.handleAppStateUpdate(arg0);
          },
      LOGOUT() {
            return applyArgumentsResult(20018).cancelAppStoreConsentReinstatement();
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
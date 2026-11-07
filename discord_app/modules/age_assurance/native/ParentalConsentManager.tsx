// === Module 19976: ParentalConsentManager ===

// Module 19976 (ParentalConsentManager)
import Constants from "Constants" /* 1072 */;
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 8225 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7350 */;
import size from "module_2" /* 2 */;

const AppStates = Constants.AppStates;
class ParentalConsentManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      CONNECTION_OPEN_SUPPLEMENTAL() {
            const result = applyArgumentsResult(19977).isAppStoreConsentReinstatementEnabledForSession();
            const obj = applyArgumentsResult(19977);
            const result1 = applyArgumentsResult(8225).beginAppStoreAgeSignalReport(result);
            const obj2 = applyArgumentsResult(8225);
            const result2 = applyArgumentsResult(19977).beginAppStoreConsentReinstatement();
          },
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult(8225).startPendingAppStoreAgeSignalReport();
          },
      APP_STATE_UPDATE(arg0) {
            return applyArgumentsResult.handleAppStateUpdate(arg0);
          },
      LOGOUT() {
            return applyArgumentsResult(19977).cancelAppStoreConsentReinstatement();
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
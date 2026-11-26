// === Module 19834: ParentalConsentManager ===

// Module 19834 (ParentalConsentManager)
import Constants from "Constants" /* 1071 */;
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 8062 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7475 */;
import size from "module_2" /* 2 */;

const AppStates = Constants.AppStates;
class ParentalConsentManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      CONNECTION_OPEN_SUPPLEMENTAL() {
            const result = applyArgumentsResult(19835).isAppStoreConsentReinstatementEnabledForSession();
            const obj = applyArgumentsResult(19835);
            const result1 = applyArgumentsResult(8062).beginAppStoreAgeSignalReport(result);
            const obj2 = applyArgumentsResult(8062);
            const result2 = applyArgumentsResult(19835).beginAppStoreConsentReinstatement();
          },
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult(8062).startPendingAppStoreAgeSignalReport();
          },
      APP_STATE_UPDATE(arg0) {
            return applyArgumentsResult.handleAppStateUpdate(arg0);
          },
      LOGOUT() {
            return applyArgumentsResult(19835).cancelAppStoreConsentReinstatement();
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
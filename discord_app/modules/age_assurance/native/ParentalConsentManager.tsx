// discord_app/modules/age_assurance/native/ParentalConsentManager.tsx
import Constants from "../../../Constants.tsx";
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
      },
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

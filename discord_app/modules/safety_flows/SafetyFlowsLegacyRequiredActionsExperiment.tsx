// === Module 17559: SafetyFlowsLegacyRequiredActionsExperiment ===

// Module 17559 (SafetyFlowsLegacyRequiredActionsExperiment)
import Constants from "Constants" /* 1085 */;
import SafetyFlowsExperiment from "SafetyFlowsExperiment" /* 17560 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

function config() {
  const obj = { requiredActions: new Set(HermesBuiltin.copyRestArgs()) };
  return obj;
}
function union() {
  let items = [...arguments];
  const obj = {
    requiredActions: new Set(items.flatMap((requiredActions) => {
      const items = [...requiredActions.requiredActions];
      return items;
    }))
  };
  return obj;
}
({ REQUIRE_VERIFIED_EMAIL, REQUIRE_VERIFIED_PHONE, REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE, REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE, REQUIRE_CAPTCHA, REQUIRE_REVERIFIED_EMAIL, REQUIRE_REVERIFIED_PHONE, REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE, REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE } = Constants.UserRequiredActions);
const configResult = config();
const configResult2 = config(REQUIRE_VERIFIED_EMAIL, REQUIRE_REVERIFIED_EMAIL);
const configResult1 = config(REQUIRE_VERIFIED_EMAIL);
const configResult4 = config(REQUIRE_VERIFIED_PHONE, REQUIRE_REVERIFIED_PHONE);
const configResult5 = config(REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE, REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE, REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE, REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE);
const configResult6 = config(REQUIRE_CAPTCHA);
const unionResult = union(configResult2, configResult4, configResult5);
const configResult3 = config(REQUIRE_VERIFIED_PHONE);
const unionResult1 = union(unionResult, configResult6);
const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-09-safety-flows-legacy-required-actions", kind: "user", defaultConfig: configResult, variations: { 0: configResult, 1: configResult1, 2: configResult2, 3: configResult3, 4: configResult4, 5: configResult5, 6: configResult6, 7: unionResult, 8: union(unionResult, configResult6) } });
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsLegacyRequiredActionsExperiment.tsx");

export default apexExperiment;
export const shouldUseSafetyFlowsForRequiredAction = function shouldUseSafetyFlowsForRequiredAction(arg0) {
  ({ location: _location, requiredAction } = arg0);
  let tmp = null == requiredAction;
  if (!tmp) {
    const obj2 = { location: _location };
    tmp = !SafetyFlowsExperiment.isEligibleForSafetyFlowsExperiment(obj2);
  }
  let hasItem = !tmp;
  if (!tmp) {
    const obj3 = { location: _location };
    const requiredActions = apexExperiment.getConfig(obj3).requiredActions;
    hasItem = requiredActions.has(requiredAction);
  }
  return hasItem;
};
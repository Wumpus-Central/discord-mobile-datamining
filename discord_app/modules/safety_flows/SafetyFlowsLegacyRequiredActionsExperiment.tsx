// === Module 17583: SafetyFlowsLegacyRequiredActionsExperiment ===

// Module 17583 (SafetyFlowsLegacyRequiredActionsExperiment)
import Constants from "Constants" /* 1085 */;
import SafetyFlowsExperiment from "SafetyFlowsExperiment" /* 17584 */;
import ApexExperiment from "ApexExperiment" /* 1440 */;
import size from "module_2" /* 2 */;

let REQUIRE_CAPTCHA;
let REQUIRE_REVERIFIED_EMAIL;
let REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE;
let REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE;
let REQUIRE_REVERIFIED_PHONE;
let REQUIRE_VERIFIED_EMAIL;
let REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE;
let REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE;
let REQUIRE_VERIFIED_PHONE;
function config() {
  const obj = { requiredActions: new Set(HermesBuiltin.copyRestArgs()) };
  new Set(HermesBuiltin.copyRestArgs());
  return obj;
}
function union() {
  const f131157 = (requiredActions) => {
    const items = [...requiredActions.requiredActions];
    return items;
  };
  let items = [...arguments];
  const obj = { requiredActions: new Set(items.flatMap(f131157)) };
  new Set(items.flatMap(f131157));
  return obj;
}
({ REQUIRE_VERIFIED_EMAIL, REQUIRE_VERIFIED_PHONE, REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE, REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE, REQUIRE_CAPTCHA, REQUIRE_REVERIFIED_EMAIL, REQUIRE_REVERIFIED_PHONE, REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE, REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE } = Constants.UserRequiredActions);
const configResult = config();
const configResult1 = config(REQUIRE_VERIFIED_EMAIL);
const configResult2 = config(REQUIRE_VERIFIED_EMAIL, REQUIRE_REVERIFIED_EMAIL);
const configResult3 = config(REQUIRE_VERIFIED_PHONE);
const configResult4 = config(REQUIRE_VERIFIED_PHONE, REQUIRE_REVERIFIED_PHONE);
const configResult5 = config(REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE, REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE, REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE, REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE);
const configResult6 = config(REQUIRE_CAPTCHA);
const unionResult = union(configResult2, configResult4, configResult5);
const unionResult1 = union(unionResult, configResult6);
let obj = { name: "2026-09-safety-flows-legacy-required-actions", kind: "user", defaultConfig: configResult, variations: { 0: configResult, 1: configResult1, 2: configResult2, 3: configResult3, 4: configResult4, 5: configResult5, 6: configResult6, 7: unionResult, 8: unionResult1 } };
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsLegacyRequiredActionsExperiment.tsx");

export default apexExperiment;
export const shouldUseSafetyFlowsForRequiredAction = function shouldUseSafetyFlowsForRequiredAction(arg0) {
  let _location;
  let requiredAction;
  ({ location: _location, requiredAction } = arg0);
  let tmp = null == requiredAction;
  if (!tmp) {
    const obj2 = { location: _location };
    const obj = SafetyFlowsExperiment;
    tmp = !obj.isEligibleForSafetyFlowsExperiment(obj2);
  }
  let hasItem = !tmp;
  if (hasItem) {
    const obj3 = { location: _location };
    const requiredActions = apexExperiment.getConfig(obj3).requiredActions;
    hasItem = requiredActions.has(requiredAction);
  }
  return hasItem;
};
// === Module 16296: AgeGateActionCreators ===

// Module 16296 (AgeGateActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AgeGateConstants from "AgeGateConstants" /* 1110 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import trackAgeGateSubmittedDefault from "trackAgeGateSubmitted" /* 16294 */;
import formatDateForAPIDefault from "formatDateForAPI" /* 16295 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ AnalyticEvents: closure_4, Endpoints: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateActionCreators.tsx");

export const submitDateOfBirth = function submitDateOfBirth(arg0, source) {
  _require = source;
  trackAgeGateSubmittedDefault(arg0, source);
  AnalyticsUtilsDefault.track(constants.AGE_GATE_ACTION, { source, action: AgeGateAnalyticAction.AGE_GATE_SUBMITTED });
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: constants2.ME, oldFormErrors: true, body: null, rejectWithError: false };
  const obj2 = { source, action: AgeGateAnalyticAction.AGE_GATE_SUBMITTED };
  request.body = { date_of_birth: formatDateForAPIDefault(arg0) };
  const obj3 = { date_of_birth: formatDateForAPIDefault(arg0) };
  return HTTP.patch(request).then((user) => {
    DispatcherDefault.dispatch({ type: "CURRENT_USER_UPDATE", user: user.body });
    AnalyticsUtilsDefault.track(constants.AGE_GATE_ACTION, { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS });
  });
};
export const preventUnderageRegistration = function preventUnderageRegistration(REGISTER) {
  DispatcherDefault.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" });
  AnalyticsUtilsDefault.track(constants.AGE_GATE_ACTION, { source: REGISTER, action: AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION });
};
export const logoutUnderageNewUser = function logoutUnderageNewUser(source) {
  DispatcherDefault.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" });
  AnalyticsUtilsDefault.track(constants.AGE_GATE_ACTION, { source, action: AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER });
};
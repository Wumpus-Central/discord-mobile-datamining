// === Module 15960: AgeGateActionCreators ===

// Module 15960 (AgeGateActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AgeGateConstants from "AgeGateConstants" /* 1098 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import trackAgeGateSubmittedDefault from "trackAgeGateSubmitted" /* 15959 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ AnalyticEvents: closure_4, Endpoints: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateActionCreators.tsx");

export const submitDateOfBirth = function submitDateOfBirth(format, source) {
  _require = source;
  trackAgeGateSubmittedDefault(format, source);
  let obj = { source, action: AgeGateAnalyticAction.AGE_GATE_SUBMITTED };
  obj.track(constants.AGE_GATE_ACTION, obj);
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: constants2.ME, oldFormErrors: true, body: null, rejectWithError: false };
  obj = { date_of_birth: format.format("YYYY-MM-DD") };
  request.body = obj;
  return HTTP.patch(request).then((user) => {
    let obj = DispatcherDefault;
    obj.dispatch({ type: "CURRENT_USER_UPDATE", user: user.body });
    obj = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
    AnalyticsUtilsDefault.track(constants.AGE_GATE_ACTION, obj);
  });
};
export const preventUnderageRegistration = function preventUnderageRegistration(REGISTER) {
  let obj = DispatcherDefault;
  obj.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" });
  obj = { source: REGISTER, action: AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION };
  AnalyticsUtilsDefault.track(constants.AGE_GATE_ACTION, obj);
};
export const logoutUnderageNewUser = function logoutUnderageNewUser(source) {
  let obj = DispatcherDefault;
  obj.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER };
  AnalyticsUtilsDefault.track(constants.AGE_GATE_ACTION, obj);
};
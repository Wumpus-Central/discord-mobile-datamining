// discord_app/modules/age_gate/AgeGateActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AgeGateConstants from "AgeGateConstants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import trackAgeGateSubmittedDefault from "../auth/experiment/trackAgeGateSubmitted.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, body;

let closure_4;
let hasOwnProperty;
const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ AnalyticEvents: closure_4, Endpoints: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateActionCreators.tsx");

export const submitDateOfBirth = function submitDateOfBirth(format, source) {
  let obj3;
  _require = source;
  trackAgeGateSubmittedDefault(format, source);
  let obj = AnalyticsUtilsDefault;
  let obj2 = { source, action: AgeGateAnalyticAction.AGE_GATE_SUBMITTED };
  obj.track(constants.AGE_GATE_ACTION, obj2);
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: constants2.ME, oldFormErrors: true, body: obj3, rejectWithError: false };
  obj3 = { date_of_birth: format.format("YYYY-MM-DD") };
  const patchResult = HTTP.patch(request);
  return patchResult.then((body) => {
    body = body.body;
    const obj = DispatcherDefault;
    obj.dispatch({ type: "CURRENT_USER_UPDATE", user: body });
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
    obj2.track(constants.AGE_GATE_ACTION, obj3);
  });
};
export const preventUnderageRegistration = function preventUnderageRegistration(REGISTER) {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" });
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { source: REGISTER, action: AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION };
  obj2.track(constants.AGE_GATE_ACTION, obj3);
};
export const logoutUnderageNewUser = function logoutUnderageNewUser(source) {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" });
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { source, action: AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER };
  obj2.track(constants.AGE_GATE_ACTION, obj3);
};

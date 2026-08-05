import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { trackAgeGateSubmitted } from "../auth/experiment/trackAgeGateSubmitted.tsx";
// discord_app/modules/age_gate/AgeGateActionCreators.tsx
import { AgeGateAnalyticAction } from "result";
import ME from "ME";

let c4;
let c5;
({ AnalyticEvents: c4, Endpoints: c5 } = ME);
const result = require("trackAgeGateSubmitted").fileFinishedImporting("modules/age_gate/AgeGateActionCreators.tsx");

export const submitDateOfBirth = function submitDateOfBirth(c0, outer1_2) {
  const _require = outer1_2;
  trackAgeGateSubmitted(c0, outer1_2);
  let obj = expandEventProperties;
  obj = { source: outer1_2, action: AgeGateAnalyticAction.AGE_GATE_SUBMITTED };
  obj.track(constants.AGE_GATE_ACTION, obj);
  const HTTP = _sendRequest.HTTP;
  obj = { url: constants2.ME, oldFormErrors: true, body: null, rejectWithError: false };
  obj[2] = { date_of_birth: c0.format("YYYY-MM-DD") };
  const obj1 = { date_of_birth: c0.format("YYYY-MM-DD") };
  return HTTP.patch(obj).then((user) => {
    let obj = outer1_1(outer1_2[5]);
    obj.dispatch({ type: "CURRENT_USER_UPDATE", user: user.body });
    obj = { source: closure_0, action: outer1_3.AGE_GATE_SUCCESS };
    outer1_1(outer1_2[3]).track(outer1_4.AGE_GATE_ACTION, obj);
  });
};
export const preventUnderageRegistration = function preventUnderageRegistration(REGISTER) {
  let obj = dispatcher;
  obj.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" });
  obj = { source: REGISTER, action: AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION };
  expandEventProperties.track(constants.AGE_GATE_ACTION, obj);
};
export const logoutUnderageNewUser = function logoutUnderageNewUser(source) {
  let obj = dispatcher;
  obj.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER };
  expandEventProperties.track(constants.AGE_GATE_ACTION, obj);
};
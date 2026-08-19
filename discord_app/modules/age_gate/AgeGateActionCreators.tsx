// discord_app/modules/age_gate/AgeGateActionCreators.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import result2 from "AgeGateConstants.tsx";
import trackAgeGateSubmittedDefault from "../auth/experiment/trackAgeGateSubmitted.tsx";
import ME from "../../Constants.tsx";

const AgeGateAnalyticAction = result2.AgeGateAnalyticAction;
({ AnalyticEvents: c4, Endpoints: c5 } = ME);
const result = obj132.fileFinishedImporting("modules/age_gate/AgeGateActionCreators.tsx");

export const submitDateOfBirth = function submitDateOfBirth(c0, closure_1_2) {
  const _require = dependencyMap;
  trackAgeGateSubmittedDefault(_require, dependencyMap);
  let obj = { source: dependencyMap, action: AgeGateAnalyticAction.AGE_GATE_SUBMITTED };
  obj.track(constants.AGE_GATE_ACTION, obj);
  const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
  obj = { url: constants2.ME, oldFormErrors: true, body: { date_of_birth: _require.format("YYYY-MM-DD") }, rejectWithError: false };
  obj1 = { date_of_birth: _require.format("YYYY-MM-DD") };
  return HTTP.patch(obj).then((result) => {
    let obj = dispatcherDefault;
    obj.dispatch({ type: "CURRENT_USER_UPDATE", user: result.body });
    obj = { source: closure_0, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
    expandEventPropertiesDefault.track(closure_1_4.AGE_GATE_ACTION, obj);
  });
};
export const preventUnderageRegistration = function preventUnderageRegistration(REGISTER) {
  let obj = dispatcherDefault;
  obj.dispatch({ type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION" });
  obj = { source: REGISTER, action: AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION };
  expandEventPropertiesDefault.track(constants.AGE_GATE_ACTION, obj);
};
export const logoutUnderageNewUser = function logoutUnderageNewUser(source) {
  let obj = dispatcherDefault;
  obj.dispatch({ type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER" });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER };
  expandEventPropertiesDefault.track(constants.AGE_GATE_ACTION, obj);
};
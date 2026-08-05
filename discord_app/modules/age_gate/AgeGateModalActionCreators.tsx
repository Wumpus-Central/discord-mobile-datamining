// discord_app/modules/age_gate/AgeGateModalActionCreators.tsx
import { AgeGateAnalyticAction } from "result";
import ME from "ME";

let c4;
let c5;
({ Routes: c4, AnalyticEvents: c5 } = ME);
const result = require("expandEventProperties").fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE) {
  let obj = require("../../utils/AnalyticsUtils.tsx");
  obj = { section: JOIN_LARGE_GUILD_UNDERAGE };
  obj.track(constants2.OPEN_MODAL, { type: "Enter Your Birthday", source: obj });
  obj = { type: "AGE_GATE_MODAL_OPEN", source: JOIN_LARGE_GUILD_UNDERAGE };
  require("../../Dispatcher.tsx").dispatch(obj);
};
export const closeAgeGateModal = function closeAgeGateModal(closure_0) {
  let obj = require("../../Dispatcher.tsx");
  obj.wait(() => callback(table[3]).dispatch({ type: "AGE_GATE_MODAL_CLOSE" }));
  if (undefined !== closure_0) {
    obj = { source: null, action: null };
    obj[0] = closure_0;
    obj[1] = AgeGateAnalyticAction.AGE_GATE_CLOSE;
    require("../../utils/AnalyticsUtils.tsx").track(constants2.AGE_GATE_ACTION, obj);
    const tmpResult = require("../../utils/AnalyticsUtils.tsx");
  }
};
export const openSuccessAgeGateModal = function openSuccessAgeGateModal(source) {
  let obj = require("../../Dispatcher.tsx");
  obj.wait(() => {
    callback(table[3]).dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
  });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
  require("../../utils/AnalyticsUtils.tsx").track(constants2.AGE_GATE_ACTION, obj);
};
export const openFailureAgeGateModal = function openFailureAgeGateModal(source) {
  let closure_0 = arg1;
  let obj = require("../../Dispatcher.tsx");
  obj.wait(() => {
    let obj = outer1_1(outer1_2[3]);
    obj = { type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: closure_0 };
    obj.dispatch(obj);
  });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE };
  require("../../utils/AnalyticsUtils.tsx").track(constants2.AGE_GATE_ACTION, obj);
};
export const closeFailedAgeGate = function closeFailedAgeGate() {
  require("../../actions/AuthenticationActionCreators.tsx").logoutInternal();
  const obj = require("../../actions/AuthenticationActionCreators.tsx");
  require("../routing/router_utils.tsx") /* transitionTo */.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
};
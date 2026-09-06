// === Module 7211: AgeGateModalActionCreators ===

// Module 7211 (AgeGateModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AgeGateConstants from "AgeGateConstants" /* 1098 */;
import router_utils from "router_utils" /* 1100 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6593 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ Routes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE) {
  let obj = { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } };
  obj.track(constants2.OPEN_MODAL, obj);
  obj = { type: "AGE_GATE_MODAL_OPEN", source: JOIN_LARGE_GUILD_UNDERAGE };
  DispatcherDefault.dispatch(obj);
};
export const closeAgeGateModal = function closeAgeGateModal(source) {
  let obj = DispatcherDefault;
  obj.wait(() => DispatcherDefault.dispatch({ type: "AGE_GATE_MODAL_CLOSE" }));
  if (undefined !== source) {
    obj = { source, action: AgeGateAnalyticAction.AGE_GATE_CLOSE };
    AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, obj);
    const tmpResult = AnalyticsUtilsDefault;
  }
};
export const openSuccessAgeGateModal = function openSuccessAgeGateModal(source) {
  let obj = DispatcherDefault;
  obj.wait(() => {
    DispatcherDefault.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
  });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
  AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, obj);
};
export const openFailureAgeGateModal = function openFailureAgeGateModal(source, underageMessage) {
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = { type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage };
    obj.dispatch(obj);
  });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE };
  AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, obj);
};
export const closeFailedAgeGate = function closeFailedAgeGate() {
  AuthenticationActionCreatorsDefault.logoutInternal();
  router_utils.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
};
// === Module 7451: AgeGateModalActionCreators ===

// Module 7451 (AgeGateModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AgeGateConstants from "AgeGateConstants" /* 1099 */;
import router_utils from "router_utils" /* 1101 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6829 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ Routes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE) {
  AnalyticsUtilsDefault.track(constants2.OPEN_MODAL, { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } });
  const obj2 = { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } };
  DispatcherDefault.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: JOIN_LARGE_GUILD_UNDERAGE });
};
export const closeAgeGateModal = function closeAgeGateModal(source) {
  DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "AGE_GATE_MODAL_CLOSE" }));
  if (undefined !== source) {
    const obj2 = { source, action: AgeGateAnalyticAction.AGE_GATE_CLOSE };
    AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, obj2);
    const tmpResult = AnalyticsUtilsDefault;
  }
};
export const openSuccessAgeGateModal = function openSuccessAgeGateModal(source) {
  DispatcherDefault.wait(() => {
    DispatcherDefault.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
  });
  AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS });
};
export const openFailureAgeGateModal = function openFailureAgeGateModal(source, underageMessage) {
  DispatcherDefault.wait(() => {
    DispatcherDefault.dispatch({ type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage });
  });
  AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE });
};
export const closeFailedAgeGate = function closeFailedAgeGate() {
  AuthenticationActionCreatorsDefault.logoutInternal();
  router_utils.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
};
// === Module 5929: AgeGateModalActionCreators ===

// Module 5929 (AgeGateModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AgeGateConstants from "AgeGateConstants" /* 1110 */;
import router_utils from "router_utils" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 5930 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ Routes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE, channelId) {
  AnalyticsUtilsDefault.track(constants2.OPEN_MODAL, { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } });
  const obj2 = { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } };
  DispatcherDefault.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: JOIN_LARGE_GUILD_UNDERAGE, channelId });
};
export const closeAgeGateModal = function closeAgeGateModal(source) {
  DispatcherDefault.dispatch({ type: "AGE_GATE_MODAL_CLOSE" });
  if (undefined !== source) {
    const obj2 = { source, action: AgeGateAnalyticAction.AGE_GATE_CLOSE };
    AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, obj2);
    const tmpResult = AnalyticsUtilsDefault;
  }
};
export const openSuccessAgeGateModal = function openSuccessAgeGateModal(source) {
  DispatcherDefault.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
  AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS });
};
export const openFailureAgeGateModal = function openFailureAgeGateModal(source, underageMessage) {
  DispatcherDefault.dispatch({ type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage });
  const obj2 = { type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage };
  AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE });
};
export const closeFailedAgeGate = function closeFailedAgeGate() {
  AuthenticationActionCreatorsDefault.logoutInternal();
  router_utils.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
};
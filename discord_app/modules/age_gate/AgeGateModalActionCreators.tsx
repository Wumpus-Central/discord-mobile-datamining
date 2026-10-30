// === Module 6733: AgeGateModalActionCreators ===

// Module 6733 (AgeGateModalActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AgeGateConstants from "AgeGateConstants" /* 1098 */;
import router_utils from "router_utils" /* 1100 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6734 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ Routes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE, channelId) {
  AnalyticsUtilsDefault.track(constants2.OPEN_MODAL, { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } });
  const obj2 = { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } };
  DispatcherDefault.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: JOIN_LARGE_GUILD_UNDERAGE, channelId });
}
export function closeAgeGateModal(source) {
  DispatcherDefault.dispatch({ type: "AGE_GATE_MODAL_CLOSE" });
  if (undefined !== source) {
    const obj2 = { source, action: AgeGateAnalyticAction.AGE_GATE_CLOSE };
    AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, obj2);
    const tmpResult = AnalyticsUtilsDefault;
  }
}
export function closeAgeGateModalAfterSubmit() {
  DispatcherDefault.dispatch({ type: "AGE_GATE_MODAL_CLOSE", submitted: true });
}
export function openSuccessAgeGateModal(source) {
  DispatcherDefault.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN", source });
  const obj2 = { type: "AGE_GATE_SUCCESS_MODAL_OPEN", source };
  AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS });
}
export function openFailureAgeGateModal(source, underageMessage) {
  DispatcherDefault.dispatch({ type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage });
  const obj2 = { type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage };
  AnalyticsUtilsDefault.track(constants2.AGE_GATE_ACTION, { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE });
}
export function closeFailedAgeGate() {
  AuthenticationActionCreatorsDefault.logoutInternal();
  router_utils.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
}
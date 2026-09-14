// discord_app/modules/age_gate/AgeGateModalActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AgeGateConstants from "AgeGateConstants.tsx";
import router_utils from "../routing/router_utils.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AuthenticationActionCreatorsDefault from "../../actions/AuthenticationActionCreators.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ Routes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE) {
  AnalyticsUtilsDefault.track(constants2.OPEN_MODAL, {
    type: "Enter Your Birthday",
    source: { section: JOIN_LARGE_GUILD_UNDERAGE },
  });
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

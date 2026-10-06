// discord_app/modules/age_gate/AgeGateModalActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AgeGateConstants from "AgeGateConstants.tsx";
import router_utils from "../routing/router_utils.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AuthenticationActionCreatorsDefault from "../../actions/AuthenticationActionCreators.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const AgeGateAnalyticAction = AgeGateConstants.AgeGateAnalyticAction;
({ Routes: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE, channelId) {
  const obj = AnalyticsUtilsDefault;
  const obj2 = { type: "Enter Your Birthday", source: { section: JOIN_LARGE_GUILD_UNDERAGE } };
  obj.track(hasOwnProperty.OPEN_MODAL, obj2);
  const obj3 = DispatcherDefault;
  const obj4 = { type: "AGE_GATE_MODAL_OPEN", source: JOIN_LARGE_GUILD_UNDERAGE, channelId };
  obj3.dispatch(obj4);
};
export const closeAgeGateModal = function closeAgeGateModal(source) {
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    return obj.dispatch({ type: "AGE_GATE_MODAL_CLOSE" });
  });
  if (undefined !== source) {
    const obj2 = { source, action: AgeGateAnalyticAction.AGE_GATE_CLOSE };
    const tmpResult = AnalyticsUtilsDefault;
    tmpResult.track(hasOwnProperty.AGE_GATE_ACTION, obj2);
  }
};
export const openSuccessAgeGateModal = function openSuccessAgeGateModal(source) {
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
  });
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
  obj2.track(hasOwnProperty.AGE_GATE_ACTION, obj3);
};
export const openFailureAgeGateModal = function openFailureAgeGateModal(source, underageMessage) {
  let obj = DispatcherDefault;
  obj.wait(() => {
    const obj = DispatcherDefault;
    const obj2 = { type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage };
    obj.dispatch(obj2);
  });
  let obj2 = AnalyticsUtilsDefault;
  const obj3 = { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE };
  obj2.track(constants2.AGE_GATE_ACTION, obj3);
};
export const closeFailedAgeGate = function closeFailedAgeGate() {
  const obj = AuthenticationActionCreatorsDefault;
  obj.logoutInternal();
  const obj2 = router_utils;
  obj2.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
};

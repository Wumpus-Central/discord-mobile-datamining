// === Module 6051: openAgeGateModal ===

// Module 6051 (openAgeGateModal)
import set from "set" /* 2 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import result2 from "result" /* 1221 */;
import transitionTo from "transitionTo" /* 1222 */;
import handleLogoutDefault from "handleLogout" /* 6052 */;
import ME from "ME" /* 676 */;

const AgeGateAnalyticAction = result2.AgeGateAnalyticAction;
({ Routes: c4, AnalyticEvents: c5 } = ME);
const result = set.fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE) {
  let obj = expandEventPropertiesDefault;
  obj = { section: JOIN_LARGE_GUILD_UNDERAGE };
  obj.track(constants2.OPEN_MODAL, { type: "Enter Your Birthday", source: obj });
  obj = { type: "AGE_GATE_MODAL_OPEN", source: JOIN_LARGE_GUILD_UNDERAGE };
  dispatcherDefault.dispatch(obj);
};
export const closeAgeGateModal = function closeAgeGateModal(closure_0) {
  let obj = dispatcherDefault;
  obj.wait(() => callback(table[3]).dispatch({ type: "AGE_GATE_MODAL_CLOSE" }));
  if (undefined !== closure_0) {
    obj = { source: null, action: null };
    obj[0] = closure_0;
    obj[1] = AgeGateAnalyticAction.AGE_GATE_CLOSE;
    expandEventPropertiesDefault.track(constants2.AGE_GATE_ACTION, obj);
    const tmpResult = expandEventPropertiesDefault;
  }
};
export const openSuccessAgeGateModal = function openSuccessAgeGateModal(source) {
  let obj = dispatcherDefault;
  obj.wait(() => {
    callback(table[3]).dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
  });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
  expandEventPropertiesDefault.track(constants2.AGE_GATE_ACTION, obj);
};
export const openFailureAgeGateModal = function openFailureAgeGateModal(source) {
  closure_0 = arg1;
  let obj = dispatcherDefault;
  obj.wait(() => {
    let obj = closure_1_1(closure_1_2[3]);
    obj = { type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: closure_0 };
    obj.dispatch(obj);
  });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE };
  expandEventPropertiesDefault.track(constants2.AGE_GATE_ACTION, obj);
};
export const closeFailedAgeGate = function closeFailedAgeGate() {
  handleLogoutDefault.logoutInternal();
  const obj = handleLogoutDefault;
  transitionTo.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
};
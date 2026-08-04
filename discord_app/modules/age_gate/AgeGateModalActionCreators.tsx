// discord_app/modules/age_gate/AgeGateModalActionCreators.tsx
import { AgeGateAnalyticAction } from "result";
import ME from "ME";

let c4;
let c5;
({ Routes: c4, AnalyticEvents: c5 } = ME);
const result = require("expandEventProperties").fileFinishedImporting("modules/age_gate/AgeGateModalActionCreators.tsx");

export const openAgeGateModal = function openAgeGateModal(JOIN_LARGE_GUILD_UNDERAGE) {
  let obj = importDefault(698);
  obj = { section: JOIN_LARGE_GUILD_UNDERAGE };
  obj.track(constants2.OPEN_MODAL, { type: "Enter Your Birthday", source: obj });
  obj = { type: "AGE_GATE_MODAL_OPEN", source: JOIN_LARGE_GUILD_UNDERAGE };
  importDefault(709).dispatch(obj);
};
export const closeAgeGateModal = function closeAgeGateModal(closure_0) {
  let obj = importDefault(709);
  obj.wait(() => callback(table[3]).dispatch({ type: "AGE_GATE_MODAL_CLOSE" }));
  if (undefined !== closure_0) {
    obj = { source: null, action: null };
    obj[0] = closure_0;
    obj[1] = AgeGateAnalyticAction.AGE_GATE_CLOSE;
    importDefault(698).track(constants2.AGE_GATE_ACTION, obj);
    const tmpResult = importDefault(698);
  }
};
export const openSuccessAgeGateModal = function openSuccessAgeGateModal(source) {
  let obj = importDefault(709);
  obj.wait(() => {
    callback(table[3]).dispatch({ type: "AGE_GATE_SUCCESS_MODAL_OPEN" });
  });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_SUCCESS };
  importDefault(698).track(constants2.AGE_GATE_ACTION, obj);
};
export const openFailureAgeGateModal = function openFailureAgeGateModal(source) {
  let closure_0 = arg1;
  let obj = importDefault(709);
  obj.wait(() => {
    let obj = outer1_1(outer1_2[3]);
    obj = { type: "AGE_GATE_FAILURE_MODAL_OPEN", underageMessage: closure_0 };
    obj.dispatch(obj);
  });
  obj = { source, action: AgeGateAnalyticAction.AGE_GATE_FAILURE };
  importDefault(698).track(constants2.AGE_GATE_ACTION, obj);
};
export const closeFailedAgeGate = function closeFailedAgeGate() {
  importDefault(5645).logoutInternal();
  const obj = importDefault(5645);
  require(1222) /* transitionTo */.transitionTo(constants.LOGIN, { source: "age_gate_modal" });
};
// === Module 13178: InteractionStatus ===

// Module 13178 (InteractionStatus)
import util from "util" /* 1114 */;
import InteractionUtils from "InteractionUtils" /* 8116 */;
import size from "module_2" /* 2 */;

const constants = { LOADING: 0, [0]: "LOADING", FAILED: 1, [1]: "FAILED", EPHEMERAL_SUCCESS: 999, [999]: "EPHEMERAL_SUCCESS" };
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx");

export const createInteractionStatus = function createInteractionStatus(message, interaction) {
  let obj = InteractionUtils;
  const interactionStatusViewState = obj.getInteractionStatusViewState(message, interaction);
  if (InteractionUtils.InteractionStatusViewState.SENDING === interactionStatusViewState) {
    obj = { text: null, state: null };
    const intl4 = util.intl;
    obj.text = intl4.string(util.t.RiLfBY);
    obj.state = constants.LOADING;
    return obj;
  } else if (InteractionUtils.InteractionStatusViewState.CREATED === interactionStatusViewState) {
    obj = { text: null, state: null };
    const intl3 = util.intl;
    const obj1 = { applicationName: message.author.username };
    obj.text = intl3.formatToPlainString(util.t["7ePV4t"], obj1);
    obj.state = constants.LOADING;
    return obj;
  } else if (InteractionUtils.InteractionStatusViewState.TIMED_OUT === interactionStatusViewState) {
    const obj2 = { text: null, state: null };
    const intl2 = util.intl;
    obj2.text = intl2.string(util.t.h8hzPd);
    obj2.state = constants.FAILED;
    return obj2;
  } else if (InteractionUtils.InteractionStatusViewState.FAILED === interactionStatusViewState) {
    let interactionError = message.interactionError;
    if (interactionError == null) {
      const intl = util.intl;
      interactionError = intl.string(util.t.VCsUJu);
    }
    const obj3 = { text: interactionError, state: constants.FAILED };
    return obj3;
  } else if (InteractionUtils.InteractionStatusViewState.EPHEMERAL_SUCCESS === interactionStatusViewState) {
    const obj4 = { text: "", state: constants.EPHEMERAL_SUCCESS };
    return obj4;
  }
};
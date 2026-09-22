// === Module 13490: InteractionStatus ===

// Module 13490 (InteractionStatus)
import util from "util" /* 1115 */;
import InteractionUtils from "InteractionUtils" /* 8389 */;
import size from "module_2" /* 2 */;

const constants = { LOADING: 0, [0]: "LOADING", FAILED: 1, [1]: "FAILED", EPHEMERAL_SUCCESS: 999, [999]: "EPHEMERAL_SUCCESS" };
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx");

export const createInteractionStatus = function createInteractionStatus(message, interaction) {
  const interactionStatusViewState = InteractionUtils.getInteractionStatusViewState(message, interaction);
  if (InteractionUtils.InteractionStatusViewState.SENDING === interactionStatusViewState) {
    const obj2 = { text: null, state: null };
    const intl4 = util.intl;
    obj2.text = intl4.string(util.t.RiLfBY);
    obj2.state = constants.LOADING;
    return obj2;
  } else if (InteractionUtils.InteractionStatusViewState.CREATED === interactionStatusViewState) {
    const obj3 = { text: null, state: null };
    const intl3 = util.intl;
    const obj4 = { applicationName: message.author.username };
    obj3.text = intl3.formatToPlainString(util.t["7ePV4t"], obj4);
    obj3.state = constants.LOADING;
    return obj3;
  } else if (InteractionUtils.InteractionStatusViewState.TIMED_OUT === interactionStatusViewState) {
    const obj5 = { text: null, state: null };
    const intl2 = util.intl;
    obj5.text = intl2.string(util.t.h8hzPd);
    obj5.state = constants.FAILED;
    return obj5;
  } else if (InteractionUtils.InteractionStatusViewState.FAILED === interactionStatusViewState) {
    let interactionError = message.interactionError;
    if (interactionError == null) {
      const intl = util.intl;
      interactionError = intl.string(util.t.VCsUJu);
    }
    const obj6 = { text: interactionError, state: constants.FAILED };
    return obj6;
  } else if (InteractionUtils.InteractionStatusViewState.EPHEMERAL_SUCCESS === interactionStatusViewState) {
    const obj7 = { text: "", state: constants.EPHEMERAL_SUCCESS };
    return obj7;
  }
};
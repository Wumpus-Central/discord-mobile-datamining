// === Module 8055: createInteractionStatus ===

// Module 8055 (createInteractionStatus)
import set from "set" /* 2 */;
import _executeMessageComponentInteraction from "_executeMessageComponentInteraction" /* 7957 */;

let closure_2 = { LOADING: 0, [0]: "LOADING", FAILED: 1, [1]: "FAILED", EPHEMERAL_SUCCESS: 999, [999]: "EPHEMERAL_SUCCESS" };
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx");

export const createInteractionStatus = function createInteractionStatus(message, interaction) {
  let obj = _executeMessageComponentInteraction;
  const interactionStatusViewState = obj.getInteractionStatusViewState(message, interaction);
  if (_executeMessageComponentInteraction.InteractionStatusViewState.SENDING === interactionStatusViewState) {
    obj = { text: null, state: null };
    const intl4 = tmp(1236).intl;
    obj[0] = intl4.string(tmp(1236).t.RiLfBY);
    obj[1] = constants.LOADING;
    return obj;
  } else if (tmp(7957).InteractionStatusViewState.CREATED === interactionStatusViewState) {
    obj = { text: null, state: null };
    const intl3 = tmp(1236).intl;
    obj1 = { applicationName: null };
    obj1[0] = message.author.username;
    obj[0] = intl3.formatToPlainString(tmp(1236).t["7ePV4t"], obj1);
    obj[1] = constants.LOADING;
    return obj;
  } else if (tmp(7957).InteractionStatusViewState.TIMED_OUT === interactionStatusViewState) {
    const obj2 = { text: null, state: null };
    const intl2 = tmp(1236).intl;
    obj2[0] = intl2.string(tmp(1236).t.h8hzPd);
    obj2[1] = constants.FAILED;
    return obj2;
  } else if (tmp(7957).InteractionStatusViewState.FAILED === interactionStatusViewState) {
    let interactionError = message.interactionError;
    if (interactionError == null) {
      const intl = tmp(1236).intl;
      interactionError = intl.string(tmp(1236).t.VCsUJu);
    }
    const obj3 = { text: null, state: null };
    obj3[0] = interactionError;
    obj3[1] = constants.FAILED;
    return obj3;
  } else if (tmp(7957).InteractionStatusViewState.EPHEMERAL_SUCCESS === interactionStatusViewState) {
    const obj4 = { text: "", state: null };
    obj4[1] = constants.EPHEMERAL_SUCCESS;
    return obj4;
  }
};
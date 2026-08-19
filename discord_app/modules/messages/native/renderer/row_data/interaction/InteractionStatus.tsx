// discord_app/modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx
import obj132 from "../../../../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../../../../intl/index.native.tsx";
import _executeMessageComponentInteraction from "../../../../../interactions/InteractionUtils.tsx";

let closure_2 = { LOADING: 0, [0]: "LOADING", FAILED: 1, [1]: "FAILED", EPHEMERAL_SUCCESS: 999, [999]: "EPHEMERAL_SUCCESS" };
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx");

export const createInteractionStatus = function createInteractionStatus(message, interaction) {
  let obj = _executeMessageComponentInteraction;
  const interactionStatusViewState = obj.getInteractionStatusViewState(message, interaction);
  if (_executeMessageComponentInteraction.InteractionStatusViewState.SENDING === interactionStatusViewState) {
    obj = { text: null, state: null };
    const intl4 = getSystemLocale.intl;
    obj[0] = intl4.string(getSystemLocale.t.RiLfBY);
    obj[1] = constants.LOADING;
    return obj;
  } else if (_executeMessageComponentInteraction.InteractionStatusViewState.CREATED === interactionStatusViewState) {
    obj = { text: null, state: null };
    const intl3 = getSystemLocale.intl;
    obj1 = { applicationName: null };
    obj1[0] = message.author.username;
    obj[0] = intl3.formatToPlainString(getSystemLocale.t["7ePV4t"], obj1);
    obj[1] = constants.LOADING;
    return obj;
  } else if (_executeMessageComponentInteraction.InteractionStatusViewState.TIMED_OUT === interactionStatusViewState) {
    const obj2 = { text: null, state: null };
    const intl2 = getSystemLocale.intl;
    obj2[0] = intl2.string(getSystemLocale.t.h8hzPd);
    obj2[1] = constants.FAILED;
    return obj2;
  } else if (_executeMessageComponentInteraction.InteractionStatusViewState.FAILED === interactionStatusViewState) {
    let interactionError = message.interactionError;
    if (interactionError == null) {
      const intl = getSystemLocale.intl;
      interactionError = intl.string(getSystemLocale.t.VCsUJu);
    }
    const obj3 = { text: null, state: null };
    obj3[0] = interactionError;
    obj3[1] = constants.FAILED;
    return obj3;
  } else if (_executeMessageComponentInteraction.InteractionStatusViewState.EPHEMERAL_SUCCESS === interactionStatusViewState) {
    const obj4 = { text: "", state: null };
    obj4[1] = constants.EPHEMERAL_SUCCESS;
    return obj4;
  }
};
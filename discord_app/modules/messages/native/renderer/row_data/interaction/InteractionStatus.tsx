// discord_app/modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx
import InteractionUtils from "../../../../../interactions/InteractionUtils.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const constants = {
  LOADING: 0,
  [0]: "LOADING",
  FAILED: 1,
  [1]: "FAILED",
  EPHEMERAL_SUCCESS: 999,
  [999]: "EPHEMERAL_SUCCESS",
};
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx",
);

export const createInteractionStatus = function createInteractionStatus(message, interaction) {
  let obj = InteractionUtils;
  const interactionStatusViewState = obj.getInteractionStatusViewState(message, interaction);
  if (InteractionUtils.InteractionStatusViewState.SENDING === interactionStatusViewState) {
    obj = { text: null, state: null };
    const intl4 = tmp(1114).intl;
    obj.text = intl4.string(tmp(1114).t.RiLfBY);
    obj.state = constants.LOADING;
    return obj;
  } else if (tmp(8116).InteractionStatusViewState.CREATED === interactionStatusViewState) {
    obj = { text: null, state: null };
    const intl3 = tmp(1114).intl;
    const obj1 = { applicationName: message.author.username };
    obj.text = intl3.formatToPlainString(tmp(1114).t["7ePV4t"], obj1);
    obj.state = constants.LOADING;
    return obj;
  } else if (tmp(8116).InteractionStatusViewState.TIMED_OUT === interactionStatusViewState) {
    const obj2 = { text: null, state: null };
    const intl2 = tmp(1114).intl;
    obj2.text = intl2.string(tmp(1114).t.h8hzPd);
    obj2.state = constants.FAILED;
    return obj2;
  } else if (tmp(8116).InteractionStatusViewState.FAILED === interactionStatusViewState) {
    let interactionError = message.interactionError;
    if (interactionError == null) {
      const intl = tmp(1114).intl;
      interactionError = intl.string(tmp(1114).t.VCsUJu);
    }
    const obj3 = { text: interactionError, state: constants.FAILED };
    return obj3;
  } else if (tmp(8116).InteractionStatusViewState.EPHEMERAL_SUCCESS === interactionStatusViewState) {
    const obj4 = { text: "", state: constants.EPHEMERAL_SUCCESS };
    return obj4;
  }
};

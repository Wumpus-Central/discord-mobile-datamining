// discord_app/modules/conjure/reminders/conjureIdeasOffer.tsx
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const turnSettled = ConjureChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/conjure/reminders/conjureIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  let tmp = "plan_implemented" === turn.kind;
  if (tmp) {
    tmp = turnSettled(turn);
  }
  return tmp;
};

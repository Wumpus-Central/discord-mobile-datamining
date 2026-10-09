// === Module 17155: conjureIdeasOffer ===

// Module 17155 (conjureIdeasOffer)
import ConjureChatStore from "ConjureChatStore" /* 12948 */;
import size from "module_2" /* 2 */;

const turnSettled = ConjureChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/conjure/reminders/conjureIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  let tmp = "plan_implemented" === turn.kind;
  if (tmp) {
    tmp = turnSettled(turn);
  }
  return tmp;
};
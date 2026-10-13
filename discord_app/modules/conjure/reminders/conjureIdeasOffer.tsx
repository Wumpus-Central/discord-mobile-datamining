// === Module 11800: conjureIdeasOffer ===

// Module 11800 (conjureIdeasOffer)
import conjureChatTurns from "conjureChatTurns" /* 11217 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/reminders/conjureIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  let turnSettledResult = "plan_implemented" === turn.kind;
  if (turnSettledResult) {
    turnSettledResult = conjureChatTurns.turnSettled(turn);
  }
  return turnSettledResult;
};
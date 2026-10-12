// discord_app/modules/conjure/reminders/conjureIdeasOffer.tsx
import conjureChatTurns from "../chat/conjureChatTurns.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/reminders/conjureIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  let turnSettledResult = "plan_implemented" === turn.kind;
  if (turnSettledResult) {
    turnSettledResult = conjureChatTurns.turnSettled(turn);
  }
  return turnSettledResult;
};

// discord_app/modules/conjure/reminders/conjureIdeasOffer.tsx
import ConjureChatStore from "../chat/ConjureChatStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const turnSettled = ConjureChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/conjure/reminders/conjureIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  const tmp = "plan_implemented" === turn.kind && turnSettled(turn);
  return tmp;
};

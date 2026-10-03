// === Module 16694: vibegrationsIdeasOffer ===

// Module 16694 (vibegrationsIdeasOffer)
import VibegrationsChatStore from "VibegrationsChatStore" /* 12905 */;
import size from "module_2" /* 2 */;

const turnSettled = VibegrationsChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  let tmp = "plan_implemented" === turn.kind;
  if (tmp) {
    tmp = turnSettled(turn);
  }
  return tmp;
};
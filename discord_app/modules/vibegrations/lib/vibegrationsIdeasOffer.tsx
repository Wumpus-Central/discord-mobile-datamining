// === Module 16595: vibegrationsIdeasOffer ===

// Module 16595 (vibegrationsIdeasOffer)
import VibegrationsChatStore from "VibegrationsChatStore" /* 12843 */;
import size from "module_2" /* 2 */;

const turnSettled = VibegrationsChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsIdeasOffer.tsx");

export const IDEAS_OFFER_REVEAL_DELAY_MS = 15000;
export const isIdeasOfferTurn = function isIdeasOfferTurn(message) {
  let tmp = "plan_implemented" === message.kind;
  if (tmp) {
    tmp = turnSettled(message);
  }
  return tmp;
};
export const showsIdeasOffer = function showsIdeasOffer(id, id2) {
  let tmp = null != id2 && id.id === id2.id;
  if (tmp) {
    let tmp2 = "plan_implemented" === id.kind;
    if (tmp2) {
      tmp2 = turnSettled(id);
    }
    tmp = tmp2;
  }
  return tmp;
};
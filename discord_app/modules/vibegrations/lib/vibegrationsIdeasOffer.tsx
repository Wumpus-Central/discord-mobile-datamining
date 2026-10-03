// discord_app/modules/vibegrations/lib/vibegrationsIdeasOffer.tsx
import VibegrationsChatStore from "../stores/VibegrationsChatStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const turnSettled = VibegrationsChatStore.turnSettled;
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsIdeasOffer.tsx");

export const isIdeasOfferTurn = function isIdeasOfferTurn(turn) {
  let tmp = "plan_implemented" === turn.kind;
  if (tmp) {
    tmp = turnSettled(turn);
  }
  return tmp;
};

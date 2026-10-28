// === Module 12475: ConjureMidTurnCaption ===

// Module 12475 (ConjureMidTurnCaption)
import util from "util" /* 1125 */;
import _modDef3863 from "module_3863" /* 3863 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export const midTurnCaption = function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = util.intl;
    return intl4.string(_modDef3863.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = util.intl;
    return intl3.string(_modDef3863["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = util.intl;
    return intl2.string(_modDef3863.Vj0woh);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3863.gY3L8p);
  }
};
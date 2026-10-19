// === Module 12280: ConjureMidTurnCaption ===

// Module 12280 (ConjureMidTurnCaption)
import util from "util" /* 1128 */;
import _modDef3820 from "module_3820" /* 3820 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export const midTurnCaption = function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = util.intl;
    return intl4.string(_modDef3820.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = util.intl;
    return intl3.string(_modDef3820["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = util.intl;
    return intl2.string(_modDef3820.Vj0woh);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3820.gY3L8p);
  }
};
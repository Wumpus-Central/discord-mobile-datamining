// === Module 16734: ConjureMidTurnCaption ===

// Module 16734 (ConjureMidTurnCaption)
import util from "util" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export const midTurnCaption = function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = util.intl;
    return intl4.string(_modDef3753.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = util.intl;
    return intl3.string(_modDef3753["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = util.intl;
    return intl2.string(_modDef3753.Vj0woh);
  } else {
    const intl = util.intl;
    return intl.string(_modDef3753.gY3L8p);
  }
};
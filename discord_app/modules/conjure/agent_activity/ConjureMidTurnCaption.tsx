// === Module 12909: ConjureMidTurnCaption ===

// Module 12909 (ConjureMidTurnCaption)
import util from "util" /* 1113 */;
import _modDef4024 from "module_4024" /* 4024 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = util.intl;
    return intl4.string(_modDef4024.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = util.intl;
    return intl3.string(_modDef4024["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = util.intl;
    return intl2.string(_modDef4024.Vj0woh);
  } else {
    const intl = util.intl;
    return intl.string(_modDef4024.gY3L8p);
  }
}
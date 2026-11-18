// === Module 18608: ConjureMidTurnCaption ===

// Module 18608 (ConjureMidTurnCaption)
import util from "util" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = util.intl;
    return intl4.string(_modDef4121.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = util.intl;
    return intl3.string(_modDef4121["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = util.intl;
    return intl2.string(_modDef4121.Vj0woh);
  } else {
    const intl = util.intl;
    return intl.string(_modDef4121.gY3L8p);
  }
}
// === Module 12934: ConjureMidTurnCaption ===

// Module 12934 (ConjureMidTurnCaption)
import util from "util" /* 1113 */;
import _modDef4028 from "module_4028" /* 4028 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = util.intl;
    return intl4.string(_modDef4028.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = util.intl;
    return intl3.string(_modDef4028["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = util.intl;
    return intl2.string(_modDef4028.Vj0woh);
  } else {
    const intl = util.intl;
    return intl.string(_modDef4028.gY3L8p);
  }
}
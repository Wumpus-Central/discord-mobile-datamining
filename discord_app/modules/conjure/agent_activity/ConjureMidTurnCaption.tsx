// === Module 18706: ConjureMidTurnCaption ===

// Module 18706 (ConjureMidTurnCaption)
import util from "util" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureMidTurnCaption.tsx");

export function midTurnCaption(acknowledges) {
  if ("steered" === acknowledges) {
    const intl4 = util.intl;
    return intl4.string(_modDef4244.Mv5OmK);
  } else if ("queued" === acknowledges) {
    const intl3 = util.intl;
    return intl3.string(_modDef4244["Po/2mi"]);
  } else if ("restarting" === acknowledges) {
    const intl2 = util.intl;
    return intl2.string(_modDef4244.Vj0woh);
  } else {
    const intl = util.intl;
    return intl.string(_modDef4244.gY3L8p);
  }
}
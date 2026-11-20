// === Module 18140: requestConjureAppIcon ===

// Module 18140 (requestConjureAppIcon)
import util from "util" /* 1112 */;
import _modDef4091 from "module_4091" /* 4091 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6848 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = util.intl;
  return sendUserMessage(arg0, intl.string(_modDef4091["hOg/Uu"]));
};
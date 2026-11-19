// === Module 18430: requestConjureAppIcon ===

// Module 18430 (requestConjureAppIcon)
import util from "util" /* 1113 */;
import _modDef4089 from "module_4089" /* 4089 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6848 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = util.intl;
  return sendUserMessage(arg0, intl.string(_modDef4089["hOg/Uu"]));
};
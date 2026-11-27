// === Module 18489: requestConjureAppIcon ===

// Module 18489 (requestConjureAppIcon)
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7693 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = util.intl;
  return sendUserMessage(arg0, intl.string(_modDef4245["hOg/Uu"]));
};
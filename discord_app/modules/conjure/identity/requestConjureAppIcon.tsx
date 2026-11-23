// === Module 18269: requestConjureAppIcon ===

// Module 18269 (requestConjureAppIcon)
import util from "util" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6967 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = util.intl;
  return sendUserMessage(arg0, intl.string(_modDef4190["hOg/Uu"]));
};
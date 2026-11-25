// === Module 18420: requestConjureAppIcon ===

// Module 18420 (requestConjureAppIcon)
import util from "util" /* 1112 */;
import _modDef4244 from "module_4244" /* 4244 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7662 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = util.intl;
  return sendUserMessage(arg0, intl.string(_modDef4244["hOg/Uu"]));
};
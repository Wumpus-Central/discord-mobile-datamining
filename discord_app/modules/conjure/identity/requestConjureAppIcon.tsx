// === Module 18308: requestConjureAppIcon ===

// Module 18308 (requestConjureAppIcon)
import util from "util" /* 1112 */;
import _modDef4192 from "module_4192" /* 4192 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7563 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = util.intl;
  return sendUserMessage(arg0, intl.string(_modDef4192["hOg/Uu"]));
};
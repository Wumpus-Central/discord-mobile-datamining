// === Module 14566: requestConjureAppIcon ===

// Module 14566 (requestConjureAppIcon)
import util from "util" /* 1113 */;
import _modDef4133 from "module_4133" /* 4133 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7375 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = util.intl;
  return sendUserMessage(arg0, intl.string(_modDef4133["hOg/Uu"]));
};
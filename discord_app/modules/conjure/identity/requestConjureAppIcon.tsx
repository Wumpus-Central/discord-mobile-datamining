// === Module 18437: requestConjureAppIcon ===

// Module 18437 (requestConjureAppIcon)
import util from "util" /* 1113 */;
import _modDef4121 from "module_4121" /* 4121 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6878 */;
import size from "module_2" /* 2 */;

const sendUserMessage = ConjureConnectionStore.sendUserMessage;
const result = size.fileFinishedImporting("modules/conjure/identity/requestConjureAppIcon.tsx");

export default function requestConjureAppIcon(arg0) {
  const intl = util.intl;
  return sendUserMessage(arg0, intl.string(_modDef4121["hOg/Uu"]));
};
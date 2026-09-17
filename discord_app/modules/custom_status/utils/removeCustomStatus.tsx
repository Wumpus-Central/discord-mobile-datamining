// === Module 11281: removeCustomStatus ===

// Module 11281 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11279 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
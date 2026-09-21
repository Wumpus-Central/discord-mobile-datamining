// === Module 11387: removeCustomStatus ===

// Module 11387 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
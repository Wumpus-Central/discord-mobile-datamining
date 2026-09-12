// === Module 11254: removeCustomStatus ===

// Module 11254 (removeCustomStatus)
import setCustomStatusDefault from "setCustomStatus" /* 11252 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
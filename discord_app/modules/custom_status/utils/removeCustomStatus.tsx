// === Module 9297: removeCustomStatus ===

// Module 9297 (removeCustomStatus)
import obj132 from "obj132" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 9295 */;

const result = obj132.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
// === Module 9018: removeCustomStatus ===

// Module 9018 (removeCustomStatus)
import set from "set" /* 2 */;
import setCustomStatusDefault from "setCustomStatus" /* 9016 */;

const result = set.fileFinishedImporting("modules/custom_status/utils/removeCustomStatus.tsx");

export default function removeCustomStatus() {
  setCustomStatusDefault({ text: "", emojiInfo: null, clearAfter: null });
};
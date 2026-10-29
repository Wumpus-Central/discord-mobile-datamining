// === Module 10813: conjureAgentHiddenMessages ===

// Module 10813 (conjureAgentHiddenMessages)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/conjureAgentHiddenMessages.tsx");

export function isConjureAgentHiddenMessage(content) {
  return content.trimStart().startsWith("!!");
}
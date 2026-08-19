// === Module 5385: isSystemMessage ===

// Module 5385 (isSystemMessage)
import obj132 from "obj132" /* 2 */;
import set from "set" /* 686 */;

const result = obj132.fileFinishedImporting("modules/messages/isSystemMessage.tsx");

export default function isSystemMessage(type) {
  const USER_MESSAGE = set.MessageTypesSets.USER_MESSAGE;
  return !USER_MESSAGE.has(type.type);
};
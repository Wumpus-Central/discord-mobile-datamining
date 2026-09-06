// === Module 7302: isForwardMessage ===

// Module 7302 (isForwardMessage)
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const MessageReferenceTypes = Constants.MessageReferenceTypes;
const result = size.fileFinishedImporting("modules/forwarding/isForwardMessage.tsx");

export default function isForwardMessage(messageReference) {
  messageReference = messageReference.messageReference;
  let type;
  if (messageReference != null) {
    type = messageReference.type;
  }
  return type === MessageReferenceTypes.FORWARD;
};
export const isForwardServerMessage = function isForwardServerMessage(message_reference) {
  message_reference = message_reference.message_reference;
  let type;
  if (message_reference != null) {
    type = message_reference.type;
  }
  return type === MessageReferenceTypes.FORWARD;
};
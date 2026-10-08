// === Module 14547: isPostMessageSocket ===

// Module 14547 (isPostMessageSocket)
import Constants from "Constants" /* 5635 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
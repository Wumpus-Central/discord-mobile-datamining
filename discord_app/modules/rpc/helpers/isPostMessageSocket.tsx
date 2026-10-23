// === Module 9234: isPostMessageSocket ===

// Module 9234 (isPostMessageSocket)
import Constants from "Constants" /* 6363 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
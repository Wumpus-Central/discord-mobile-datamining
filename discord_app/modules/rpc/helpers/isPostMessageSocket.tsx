// === Module 9414: isPostMessageSocket ===

// Module 9414 (isPostMessageSocket)
import Constants from "Constants" /* 6585 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
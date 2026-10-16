// === Module 15418: isPostMessageSocket ===

// Module 15418 (isPostMessageSocket)
import Constants from "Constants" /* 5858 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageSocket.tsx");

export default function isPostMessageSocket(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
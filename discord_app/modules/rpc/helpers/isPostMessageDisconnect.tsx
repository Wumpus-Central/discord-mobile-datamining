// === Module 16065: isPostMessageDisconnect ===

// Module 16065 (isPostMessageDisconnect)
import Constants from "Constants" /* 6413 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
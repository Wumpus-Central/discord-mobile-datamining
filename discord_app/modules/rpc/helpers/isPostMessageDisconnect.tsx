// === Module 15696: isPostMessageDisconnect ===

// Module 15696 (isPostMessageDisconnect)
import Constants from "Constants" /* 6357 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
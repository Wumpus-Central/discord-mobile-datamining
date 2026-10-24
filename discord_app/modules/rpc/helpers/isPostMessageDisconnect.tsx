// === Module 15796: isPostMessageDisconnect ===

// Module 15796 (isPostMessageDisconnect)
import Constants from "Constants" /* 6378 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
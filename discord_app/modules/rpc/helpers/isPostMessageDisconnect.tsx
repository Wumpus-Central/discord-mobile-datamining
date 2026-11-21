// === Module 15782: isPostMessageDisconnect ===

// Module 15782 (isPostMessageDisconnect)
import Constants from "Constants" /* 6354 */;
import size from "module_2" /* 2 */;

const TransportTypes = Constants.TransportTypes;
const result = size.fileFinishedImporting("modules/rpc/helpers/isPostMessageDisconnect.tsx");

export default function isPostMessageDisconnect(source) {
  return source.source.type === TransportTypes.POST_MESSAGE;
};
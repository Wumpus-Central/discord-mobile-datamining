// === Module 5746: transformMessagPoll ===

// Module 5746 (transformMessagPoll)
import _modDef4702 from "module_4702" /* 4702 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4702(expiry.expiry);
  return obj;
};
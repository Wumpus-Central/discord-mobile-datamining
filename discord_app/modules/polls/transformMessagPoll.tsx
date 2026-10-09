// === Module 5743: transformMessagPoll ===

// Module 5743 (transformMessagPoll)
import _modDef4661 from "module_4661" /* 4661 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4661(expiry.expiry);
  return obj;
};
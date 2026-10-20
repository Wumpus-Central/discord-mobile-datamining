// === Module 6442: transformMessagPoll ===

// Module 6442 (transformMessagPoll)
import _modDef2050 from "module_2050" /* 2050 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef2050(expiry.expiry);
  return obj;
};
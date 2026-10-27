// === Module 6486: transformMessagPoll ===

// Module 6486 (transformMessagPoll)
import _modDef2046 from "module_2046" /* 2046 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef2046(expiry.expiry);
  return obj;
};
// === Module 5379: transformMessagPoll ===

// Module 5379 (transformMessagPoll)
import _modDef4450 from "module_4450" /* 4450 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4450(expiry.expiry);
  return obj;
};
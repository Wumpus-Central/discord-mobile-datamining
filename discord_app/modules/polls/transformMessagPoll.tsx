// === Module 4896: transformMessagPoll ===

// Module 4896 (transformMessagPoll)
import _modDef4153 from "module_4153" /* 4153 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4153(expiry.expiry);
  return obj;
};
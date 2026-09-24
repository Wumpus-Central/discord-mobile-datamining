// === Module 5187: transformMessagPoll ===

// Module 5187 (transformMessagPoll)
import _modDef4416 from "module_4416" /* 4416 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4416(expiry.expiry);
  return obj;
};
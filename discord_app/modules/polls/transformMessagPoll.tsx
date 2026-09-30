// === Module 5391: transformMessagPoll ===

// Module 5391 (transformMessagPoll)
import _modDef4451 from "module_4451" /* 4451 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4451(expiry.expiry);
  return obj;
};
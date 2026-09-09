// === Module 4910: transformMessagPoll ===

// Module 4910 (transformMessagPoll)
import _modDef4166 from "module_4166" /* 4166 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4166(expiry.expiry);
  return obj;
};
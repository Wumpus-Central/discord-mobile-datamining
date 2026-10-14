// === Module 5751: transformMessagPoll ===

// Module 5751 (transformMessagPoll)
import _modDef4704 from "module_4704" /* 4704 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4704(expiry.expiry);
  return obj;
};
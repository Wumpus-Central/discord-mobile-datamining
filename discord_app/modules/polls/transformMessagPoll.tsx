// === Module 6383: transformMessagPoll ===

// Module 6383 (transformMessagPoll)
import _modDef2168 from "module_2168" /* 2168 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef2168(expiry.expiry);
  return obj;
};
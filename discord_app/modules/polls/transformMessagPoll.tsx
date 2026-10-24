// === Module 6485: transformMessagPoll ===

// Module 6485 (transformMessagPoll)
import _modDef2049 from "module_2049" /* 2049 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef2049(expiry.expiry);
  return obj;
};
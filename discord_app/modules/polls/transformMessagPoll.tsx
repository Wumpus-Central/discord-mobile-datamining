// === Module 4941: transformMessagPoll ===

// Module 4941 (transformMessagPoll)
import _modDef4196 from "module_4196" /* 4196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4196(expiry.expiry);
  return obj;
};
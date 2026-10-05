// === Module 5425: transformMessagPoll ===

// Module 5425 (transformMessagPoll)
import _modDef4461 from "module_4461" /* 4461 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef4461(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
// === Module 5432: transformMessagPoll ===

// Module 5432 (transformMessagPoll)
import _modDef4467 from "module_4467" /* 4467 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = { expiry: _modDef4467(expiry.expiry) };
  const merged = Object.assign(expiry);
  return obj;
};
// === Module 6002: transformMessagPoll ===

// Module 6002 (transformMessagPoll)
import _modDef4797 from "module_4797" /* 4797 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4797(expiry.expiry);
  return obj;
};
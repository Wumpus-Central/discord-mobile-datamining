// === Module 5185: transformMessagPoll ===

// Module 5185 (transformMessagPoll)
import _modDef4414 from "module_4414" /* 4414 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4414(expiry.expiry);
  return obj;
};
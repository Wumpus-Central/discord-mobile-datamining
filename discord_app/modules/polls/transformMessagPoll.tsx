// === Module 4972: transformMessagPoll ===

// Module 4972 (transformMessagPoll)
import _modDef4228 from "module_4228" /* 4228 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4228(expiry.expiry);
  return obj;
};
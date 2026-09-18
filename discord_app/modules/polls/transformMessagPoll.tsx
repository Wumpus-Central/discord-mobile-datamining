// === Module 5058: transformMessagPoll ===

// Module 5058 (transformMessagPoll)
import _modDef4314 from "module_4314" /* 4314 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4314(expiry.expiry);
  return obj;
};
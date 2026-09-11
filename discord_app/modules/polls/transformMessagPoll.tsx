// === Module 4942: transformMessagPoll ===

// Module 4942 (transformMessagPoll)
import _modDef4198 from "module_4198" /* 4198 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4198(expiry.expiry);
  return obj;
};
// === Module 5962: transformMessagPoll ===

// Module 5962 (transformMessagPoll)
import _modDef4758 from "module_4758" /* 4758 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4758(expiry.expiry);
  return obj;
};
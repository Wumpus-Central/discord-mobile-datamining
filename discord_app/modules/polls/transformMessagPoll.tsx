// === Module 4976: transformMessagPoll ===

// Module 4976 (transformMessagPoll)
import _modDef4231 from "module_4231" /* 4231 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4231(expiry.expiry);
  return obj;
};
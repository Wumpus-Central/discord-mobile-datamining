// === Module 5742: transformMessagPoll ===

// Module 5742 (transformMessagPoll)
import _modDef4659 from "module_4659" /* 4659 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4659(expiry.expiry);
  return obj;
};
// === Module 4974: transformMessagPoll ===

// Module 4974 (transformMessagPoll)
import _modDef4229 from "module_4229" /* 4229 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = _modDef4229(expiry.expiry);
  return obj;
};
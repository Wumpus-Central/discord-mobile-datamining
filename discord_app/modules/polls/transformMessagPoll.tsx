// === Module 4849: transformMessagePoll ===

// Module 4849 (transformMessagePoll)
import set from "set" /* 2 */;
import hooksDefault from "hooks" /* 4074 */;

const result = set.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = hooksDefault(expiry.expiry);
  return obj;
};
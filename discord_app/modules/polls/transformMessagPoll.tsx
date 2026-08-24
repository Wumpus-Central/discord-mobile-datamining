// === Module 4820: transformMessagePoll ===

// Module 4820 (transformMessagePoll)
import set from "set" /* 2 */;
import tDefault from "t" /* 3975 */;

const result = set.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = tDefault(expiry.expiry);
  return obj;
};
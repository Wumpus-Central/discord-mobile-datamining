// === Module 4820: transformMessagePoll ===

// Module 4820 (transformMessagePoll)
import obj132 from "obj132" /* 2 */;
import tDefault from "t" /* 3975 */;

const result = obj132.fileFinishedImporting("modules/polls/transformMessagPoll.tsx");

export default function transformMessagePoll(expiry) {
  const obj = {};
  const merged = Object.assign(expiry);
  obj.expiry = tDefault(expiry.expiry);
  return obj;
};
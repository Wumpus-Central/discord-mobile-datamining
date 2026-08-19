// === Module 7052: toPropertyKey ===

// Module 7052 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 7053 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
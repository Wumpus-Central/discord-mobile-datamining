// === Module 43: toPropertyKey ===

// Module 43 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 44 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
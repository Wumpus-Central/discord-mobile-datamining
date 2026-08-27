// === Module 5817: toPropertyKey ===

// Module 5817 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5818 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
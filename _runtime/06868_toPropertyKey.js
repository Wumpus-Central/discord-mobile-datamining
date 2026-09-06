// === Module 6868: toPropertyKey ===

// Module 6868 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6869 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
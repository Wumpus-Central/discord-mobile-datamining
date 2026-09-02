// === Module 5873: toPropertyKey ===

// Module 5873 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 5874 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
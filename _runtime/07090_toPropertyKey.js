// === Module 7090: toPropertyKey ===

// Module 7090 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 7091 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
// === Module 6353: toPropertyKey ===

// Module 6353 (toPropertyKey)
import toPrimitive from "toPrimitive" /* 6354 */;
import _typeof from "_typeof" /* 6355 */;


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
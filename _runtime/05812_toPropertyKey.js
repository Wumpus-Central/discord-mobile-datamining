// _runtime/05812_toPropertyKey.js
import toPrimitive from "05813_toPrimitive.js";


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
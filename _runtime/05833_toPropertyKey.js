// _runtime/05833_toPropertyKey.js
import toPrimitive from "05834_toPrimitive.js";


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
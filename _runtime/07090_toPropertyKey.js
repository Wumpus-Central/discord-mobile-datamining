// _runtime/07090_toPropertyKey.js
import toPrimitive from "07091_toPrimitive.js";


export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
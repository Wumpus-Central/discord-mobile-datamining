// _runtime/05561_toPropertyKey.js
import { toPrimitive } from "05562_toPrimitive.js";

export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
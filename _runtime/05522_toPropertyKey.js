// _runtime/05522_toPropertyKey.js
import { toPrimitive } from "05523_toPrimitive.js";

export default function toPropertyKey(arg0) {
  const tmp = toPrimitive /* toPrimitive */(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
// _runtime/00043_toPropertyKey.js
import toPrimitive from "00044_toPrimitive.js";
import _typeof from "metro/00045__typeof.js";

export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

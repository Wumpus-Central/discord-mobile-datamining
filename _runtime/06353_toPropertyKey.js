// _runtime/06353_toPropertyKey.js
import toPrimitive from "06354_toPrimitive.js";
import _typeof from "metro/06355__typeof.js";

export default function toPropertyKey(arg0) {
  const tmp = toPrimitive(arg0, "string");
  let text = tmp;
  const obj = _typeof;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

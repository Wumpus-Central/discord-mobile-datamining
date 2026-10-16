// _runtime/metro/06770__.js
import _mod6771 from "06771__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod6771(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

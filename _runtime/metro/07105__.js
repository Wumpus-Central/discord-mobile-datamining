// _runtime/metro/07105__.js
import _mod7106 from "07106__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod7106(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

// _runtime/metro/06539__.js
import _mod6540 from "06540__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod6540(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

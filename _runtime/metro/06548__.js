// _runtime/metro/06548__.js
import _mod6549 from "06549__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod6549(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

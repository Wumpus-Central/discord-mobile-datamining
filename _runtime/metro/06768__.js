// _runtime/metro/06768__.js
import _mod6769 from "06769__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod6769(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

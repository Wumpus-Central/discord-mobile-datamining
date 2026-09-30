// _runtime/metro/06482__.js
import _mod6483 from "06483__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod6483(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

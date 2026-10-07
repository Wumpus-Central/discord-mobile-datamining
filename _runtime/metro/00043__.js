// _runtime/metro/00043__.js
import _mod44 from "00044__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod44(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

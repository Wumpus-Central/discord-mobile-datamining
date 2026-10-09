// _runtime/metro/06546__.js
import _mod6547 from "06547__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod6547(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

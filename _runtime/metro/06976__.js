// _runtime/metro/06976__.js
import _mod6977 from "06977__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod6977(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

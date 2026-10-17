// _runtime/metro/06825__.js
import _mod6826 from "06826__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod6826(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

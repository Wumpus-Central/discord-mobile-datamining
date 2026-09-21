// _runtime/metro/07110__.js
import _mod7111 from "07111__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod7111(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

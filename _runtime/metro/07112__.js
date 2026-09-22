// _runtime/metro/07112__.js
import _mod7113 from "07113__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod7113(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

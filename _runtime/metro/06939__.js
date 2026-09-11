// _runtime/metro/06939__.js
import _mod6940 from "06940__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod6940(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

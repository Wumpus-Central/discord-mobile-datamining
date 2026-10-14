// _runtime/metro/06552__.js
import _mod6553 from "06553__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod6553(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

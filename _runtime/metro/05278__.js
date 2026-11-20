// _runtime/metro/05278__.js
import _mod5279 from "05279__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod5279(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

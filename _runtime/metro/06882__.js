// _runtime/metro/06882__.js
import _mod6883 from "06883__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod6883(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

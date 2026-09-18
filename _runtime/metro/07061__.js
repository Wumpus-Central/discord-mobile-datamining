// _runtime/metro/07061__.js
import _mod7062 from "07062__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod7062(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

// _runtime/metro/06979__.js
import _mod6980 from "06980__.js";

export default function toPropertyKey(arg0) {
  const tmp = _mod6980(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
}

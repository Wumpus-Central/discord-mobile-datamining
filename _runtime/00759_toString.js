// _runtime/00759_toString.js
import toString from "00760_toString.js";

export default function toString(arg0) {
  let str = "";
  if (null != arg0) {
    str = toString(arg0);
  }
  return str;
}

// _runtime/metro/00553__.js
import _mod522 from "00522__.js";
import _mod535 from "00535__.js";

export default function isSymbol(arg0) {
  let tmp = typeof arg0 === "symbol";
  if (typeof arg0 !== "symbol") {
    let tmp2 = _mod535(arg0);
    if (tmp2) {
      tmp2 = "[object Symbol]" == _mod522(arg0);
    }
    tmp = tmp2;
  }
  return tmp;
}

// _runtime/04659_baseIsMap.js
import _mod535 from "metro/00535__.js";
import _mod634 from "metro/00634__.js";

export default function baseIsMap(arg0) {
  let tmp3 = _mod535(arg0);
  if (tmp3) {
    tmp3 = "[object Map]" == _mod634(arg0);
  }
  return tmp3;
}

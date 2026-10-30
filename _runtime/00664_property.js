// _runtime/00664_property.js
import _mod585 from "metro/00585__.js";
import _mod588 from "metro/00588__.js";
import baseProperty from "00665_baseProperty.js";
import basePropertyDeep from "00666_basePropertyDeep.js";

export default function property(arg0) {
  if (_mod585(arg0)) {
    let tmpResultResult = baseProperty(_mod588(arg0));
    const tmpResult = baseProperty;
  } else {
    tmpResultResult = basePropertyDeep(arg0);
  }
  return tmpResultResult;
}

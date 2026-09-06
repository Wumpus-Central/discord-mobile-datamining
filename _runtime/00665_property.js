// _runtime/00665_property.js
import _mod586 from "metro/00586__.js";
import _mod589 from "metro/00589__.js";
import baseProperty from "00666_baseProperty.js";
import basePropertyDeep from "00667_basePropertyDeep.js";

export default function property(arg0) {
  if (_mod586(arg0)) {
    let tmpResultResult = baseProperty(_mod589(arg0));
    const tmpResult = baseProperty;
  } else {
    tmpResultResult = basePropertyDeep(arg0);
  }
  return tmpResultResult;
}

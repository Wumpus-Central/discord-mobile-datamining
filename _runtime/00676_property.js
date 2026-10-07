// _runtime/00676_property.js
import _mod597 from "metro/00597__.js";
import _mod600 from "metro/00600__.js";
import baseProperty from "00677_baseProperty.js";
import basePropertyDeep from "00678_basePropertyDeep.js";

export default function property(arg0) {
  if (_mod597(arg0)) {
    let tmpResultResult = baseProperty(_mod600(arg0));
    const tmpResult = baseProperty;
  } else {
    tmpResultResult = basePropertyDeep(arg0);
  }
  return tmpResultResult;
}

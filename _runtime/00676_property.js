// _runtime/00676_property.js
import isKey from "00597_isKey.js";
import toKey from "00600_toKey.js";
import baseProperty from "00677_baseProperty.js";
import basePropertyDeep from "00678_basePropertyDeep.js";

export default function property(arg0) {
  let tmpResultResult;
  if (isKey(arg0)) {
    const tmpResult = baseProperty;
    tmpResultResult = tmpResult(toKey(arg0));
  } else {
    tmpResultResult = basePropertyDeep(arg0);
  }
  return tmpResultResult;
}

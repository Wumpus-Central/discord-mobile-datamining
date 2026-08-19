// _runtime/00801_property.js
import isKey from "00722_isKey.js";
import toKey from "00725_toKey.js";
import baseProperty from "00802_baseProperty.js";
import basePropertyDeep from "00803_basePropertyDeep.js";


export default function property(arg0) {
  if (isKey(arg0)) {
    let tmpResultResult = baseProperty(toKey(arg0));
    const tmpResult = baseProperty;
  } else {
    tmpResultResult = basePropertyDeep(arg0);
  }
  return tmpResultResult;
};
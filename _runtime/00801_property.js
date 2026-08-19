// === Module 801: property ===

// Module 801 (property)
import isKey from "isKey" /* 722 */;
import toKey from "toKey" /* 725 */;
import baseProperty from "baseProperty" /* 802 */;
import basePropertyDeep from "basePropertyDeep" /* 803 */;


export default function property(arg0) {
  if (isKey(arg0)) {
    let tmpResultResult = baseProperty(toKey(arg0));
    const tmpResult = baseProperty;
  } else {
    tmpResultResult = basePropertyDeep(arg0);
  }
  return tmpResultResult;
};
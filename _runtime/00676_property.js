// === Module 676: property ===

// Module 676 (property)
import isKey from "isKey" /* 597 */;
import toKey from "toKey" /* 600 */;
import baseProperty from "baseProperty" /* 677 */;
import basePropertyDeep from "basePropertyDeep" /* 678 */;


export default function property(arg0) {
  let tmpResultResult;
  if (isKey(arg0)) {
    const tmpResult = baseProperty;
    tmpResultResult = tmpResult(toKey(arg0));
  } else {
    tmpResultResult = basePropertyDeep(arg0);
  }
  return tmpResultResult;
};
// === Module 18774: stringToArray ===

// Module 18774 (stringToArray)
import _mod18773 from "module_18773" /* 18773 */;
import unicodeToArray from "unicodeToArray" /* 18775 */;
import asciiToArray from "asciiToArray" /* 18776 */;


export default function stringToArray(arg0) {
  if (_mod18773(arg0)) {
    let tmp3 = unicodeToArray(arg0);
  } else {
    tmp3 = asciiToArray(arg0);
  }
  return tmp3;
};
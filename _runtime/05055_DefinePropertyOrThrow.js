// === Module 5055: DefinePropertyOrThrow ===

// Module 5055 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5005 from "module_5005" /* 5005 */;
import _mod5052 from "module_5052" /* 5052 */;
import _mod5056 from "module_5056" /* 5056 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5057 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5059 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5060 */;
import SameValue from "SameValue" /* 5061 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5062 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5005(arg0)) {
    if (_mod5052(arg1)) {
      let tmp13 = arg2;
      if (!_mod5056(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5056(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1282("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1282("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
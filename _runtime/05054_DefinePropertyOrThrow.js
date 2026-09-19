// === Module 5054: DefinePropertyOrThrow ===

// Module 5054 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5004 from "module_5004" /* 5004 */;
import _mod5051 from "module_5051" /* 5051 */;
import _mod5055 from "module_5055" /* 5055 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5056 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5058 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5059 */;
import SameValue from "SameValue" /* 5060 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5061 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5004(arg0)) {
    if (_mod5051(arg1)) {
      let tmp13 = arg2;
      if (!_mod5055(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5055(tmp13)) {
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
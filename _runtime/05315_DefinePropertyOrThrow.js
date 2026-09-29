// === Module 5315: DefinePropertyOrThrow ===

// Module 5315 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5265 from "module_5265" /* 5265 */;
import _mod5312 from "module_5312" /* 5312 */;
import _mod5316 from "module_5316" /* 5316 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5317 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5319 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5320 */;
import SameValue from "SameValue" /* 5321 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5322 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5265(arg0)) {
    if (_mod5312(arg1)) {
      let tmp13 = arg2;
      if (!_mod5316(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5316(tmp13)) {
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
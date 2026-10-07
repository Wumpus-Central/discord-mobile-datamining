// === Module 5386: DefinePropertyOrThrow ===

// Module 5386 (DefinePropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import _mod5336 from "module_5336" /* 5336 */;
import _mod5383 from "module_5383" /* 5383 */;
import _mod5387 from "module_5387" /* 5387 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5388 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5390 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5391 */;
import SameValue from "SameValue" /* 5392 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5393 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5336(arg0)) {
    if (_mod5383(arg1)) {
      let tmp13 = arg2;
      if (!_mod5387(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5387(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1293("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1293("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
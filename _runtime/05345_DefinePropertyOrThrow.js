// === Module 5345: DefinePropertyOrThrow ===

// Module 5345 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod5295 from "module_5295" /* 5295 */;
import _mod5342 from "module_5342" /* 5342 */;
import _mod5346 from "module_5346" /* 5346 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5347 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5349 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5350 */;
import SameValue from "SameValue" /* 5351 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5352 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5295(arg0)) {
    if (_mod5342(arg1)) {
      let tmp13 = arg2;
      if (!_mod5346(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5346(tmp13)) {
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
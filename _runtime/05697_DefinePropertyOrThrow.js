// === Module 5697: DefinePropertyOrThrow ===

// Module 5697 (DefinePropertyOrThrow)
import _mod1305 from "module_1305" /* 1305 */;
import _mod5647 from "module_5647" /* 5647 */;
import _mod5694 from "module_5694" /* 5694 */;
import _mod5698 from "module_5698" /* 5698 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5699 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5701 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5702 */;
import SameValue from "SameValue" /* 5703 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5704 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5647(arg0)) {
    if (_mod5694(arg1)) {
      let tmp13 = arg2;
      if (!_mod5698(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5698(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1305("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1305("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1305("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
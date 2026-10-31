// === Module 6512: DefinePropertyOrThrow ===

// Module 6512 (DefinePropertyOrThrow)
import _mod1293 from "module_1293" /* 1293 */;
import _mod6462 from "module_6462" /* 6462 */;
import _mod6509 from "module_6509" /* 6509 */;
import _mod6513 from "module_6513" /* 6513 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6514 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6516 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6517 */;
import SameValue from "SameValue" /* 6518 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6519 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6462(arg0)) {
    if (_mod6509(arg1)) {
      let tmp13 = arg2;
      if (!_mod6513(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6513(tmp13)) {
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
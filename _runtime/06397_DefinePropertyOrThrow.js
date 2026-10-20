// === Module 6397: DefinePropertyOrThrow ===

// Module 6397 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6347 from "module_6347" /* 6347 */;
import _mod6394 from "module_6394" /* 6394 */;
import _mod6398 from "module_6398" /* 6398 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6399 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6401 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6402 */;
import SameValue from "SameValue" /* 6403 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6404 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6347(arg0)) {
    if (_mod6394(arg1)) {
      let tmp13 = arg2;
      if (!_mod6398(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6398(tmp13)) {
        const tmpResult3 = IsDataDescriptor;
        const tmpResult = DefineOwnProperty;
        return tmpResult(tmpResult3, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1308("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1308("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
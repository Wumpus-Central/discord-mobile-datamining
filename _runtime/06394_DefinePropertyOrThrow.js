// === Module 6394: DefinePropertyOrThrow ===

// Module 6394 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod6344 from "module_6344" /* 6344 */;
import _mod6391 from "module_6391" /* 6391 */;
import _mod6395 from "module_6395" /* 6395 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 6396 */;
import DefineOwnProperty from "DefineOwnProperty" /* 6398 */;
import IsDataDescriptor from "IsDataDescriptor" /* 6399 */;
import SameValue from "SameValue" /* 6400 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 6401 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod6344(arg0)) {
    if (_mod6391(arg1)) {
      let tmp13 = arg2;
      if (!_mod6395(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod6395(tmp13)) {
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
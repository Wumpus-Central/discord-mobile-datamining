// === Module 5920: DefinePropertyOrThrow ===

// Module 5920 (DefinePropertyOrThrow)
import _mod1308 from "module_1308" /* 1308 */;
import _mod5870 from "module_5870" /* 5870 */;
import _mod5917 from "module_5917" /* 5917 */;
import _mod5921 from "module_5921" /* 5921 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 5922 */;
import DefineOwnProperty from "DefineOwnProperty" /* 5924 */;
import IsDataDescriptor from "IsDataDescriptor" /* 5925 */;
import SameValue from "SameValue" /* 5926 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 5927 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod5870(arg0)) {
    if (_mod5917(arg1)) {
      let tmp13 = arg2;
      if (!_mod5921(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod5921(tmp13)) {
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
// === Module 4939: DefinePropertyOrThrow ===

// Module 4939 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4889 from "module_4889" /* 4889 */;
import _mod4936 from "module_4936" /* 4936 */;
import _mod4940 from "module_4940" /* 4940 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 4941 */;
import DefineOwnProperty from "DefineOwnProperty" /* 4943 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4944 */;
import SameValue from "SameValue" /* 4945 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 4946 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4889(arg0)) {
    if (_mod4936(arg1)) {
      let tmp13 = arg2;
      if (!_mod4940(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod4940(tmp13)) {
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
// === Module 4938: DefinePropertyOrThrow ===

// Module 4938 (DefinePropertyOrThrow)
import _mod1282 from "module_1282" /* 1282 */;
import _mod4888 from "module_4888" /* 4888 */;
import _mod4935 from "module_4935" /* 4935 */;
import _mod4939 from "module_4939" /* 4939 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 4940 */;
import DefineOwnProperty from "DefineOwnProperty" /* 4942 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4943 */;
import SameValue from "SameValue" /* 4944 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 4945 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4888(arg0)) {
    if (_mod4935(arg1)) {
      let tmp13 = arg2;
      if (!_mod4939(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod4939(tmp13)) {
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
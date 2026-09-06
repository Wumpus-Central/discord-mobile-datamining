// === Module 4859: DefinePropertyOrThrow ===

// Module 4859 (DefinePropertyOrThrow)
import _mod1283 from "module_1283" /* 1283 */;
import _mod4809 from "module_4809" /* 4809 */;
import _mod4856 from "module_4856" /* 4856 */;
import _mod4860 from "module_4860" /* 4860 */;
import ToPropertyDescriptor from "ToPropertyDescriptor" /* 4861 */;
import DefineOwnProperty from "DefineOwnProperty" /* 4863 */;
import IsDataDescriptor from "IsDataDescriptor" /* 4864 */;
import SameValue from "SameValue" /* 4865 */;
import FromPropertyDescriptor from "FromPropertyDescriptor" /* 4866 */;


export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (_mod4809(arg0)) {
    if (_mod4856(arg1)) {
      let tmp13 = arg2;
      if (!_mod4860(arg2)) {
        tmp13 = ToPropertyDescriptor(arg2);
      }
      if (_mod4860(tmp13)) {
        const tmpResult = IsDataDescriptor;
        return tmpResult(tmpResult, SameValue, FromPropertyDescriptor, arg0, arg1, tmp14);
      } else {
        const tmp17 = new _mod1283("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
      }
    } else {
      const tmp10 = new _mod1283("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new _mod1283("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};
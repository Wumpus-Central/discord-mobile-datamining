// _runtime/04939_DefinePropertyOrThrow.js
import _mod1282 from "metro/01282__.js";
import _mod4889 from "metro/04889__.js";
import _mod4936 from "metro/04936__.js";
import _mod4940 from "metro/04940__.js";
import ToPropertyDescriptor from "04941_ToPropertyDescriptor.js";
import DefineOwnProperty from "04943_DefineOwnProperty.js";
import IsDataDescriptor from "04944_IsDataDescriptor.js";
import SameValue from "04945_SameValue.js";
import FromPropertyDescriptor from "04946_FromPropertyDescriptor.js";

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
}

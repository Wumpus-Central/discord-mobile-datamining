// _runtime/04855_Get.js
import _mod1283 from "metro/01283__.js";
import _mod1317 from "metro/01317__.js";
import _mod4809 from "metro/04809__.js";
import _mod4856 from "metro/04856__.js";

export default function Get(arg0, arg1) {
  if (_mod4809(arg0)) {
    if (_mod4856(arg1)) {
      return arg0[arg1];
    } else {
      let tmpResult = _mod1283;
      tmpResult = new tmpResult("Assertion failed: P is not a Property Key, got " + _mod1317(arg1));
      throw tmpResult;
    }
  } else {
    const tmp5 = new _mod1283("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}

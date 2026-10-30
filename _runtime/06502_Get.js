// _runtime/06502_Get.js
import _mod1294 from "metro/01294__.js";
import _mod1328 from "metro/01328__.js";
import _mod6456 from "metro/06456__.js";
import _mod6503 from "metro/06503__.js";

export default function Get(arg0, arg1) {
  if (_mod6456(arg0)) {
    if (_mod6503(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1294("Assertion failed: P is not a Property Key, got " + _mod1328(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1294("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}

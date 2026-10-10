// _runtime/05697_Get.js
import _mod1306 from "metro/01306__.js";
import _mod1340 from "metro/01340__.js";
import _mod5651 from "metro/05651__.js";
import _mod5698 from "metro/05698__.js";

export default function Get(arg0, arg1) {
  if (_mod5651(arg0)) {
    if (_mod5698(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1306("Assertion failed: P is not a Property Key, got " + _mod1340(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1306("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}

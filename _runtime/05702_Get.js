// _runtime/05702_Get.js
import _mod1306 from "metro/01306__.js";
import _mod1340 from "metro/01340__.js";
import _mod5656 from "metro/05656__.js";
import _mod5703 from "metro/05703__.js";

export default function Get(arg0, arg1) {
  if (_mod5656(arg0)) {
    if (_mod5703(arg1)) {
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

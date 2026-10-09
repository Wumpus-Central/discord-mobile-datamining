// _runtime/05694_Get.js
import _mod1306 from "metro/01306__.js";
import _mod1340 from "metro/01340__.js";
import _mod5648 from "metro/05648__.js";
import _mod5695 from "metro/05695__.js";

export default function Get(arg0, arg1) {
  if (_mod5648(arg0)) {
    if (_mod5695(arg1)) {
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

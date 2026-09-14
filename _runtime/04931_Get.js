// _runtime/04931_Get.js
import _mod1281 from "metro/01281__.js";
import _mod1315 from "metro/01315__.js";
import _mod4885 from "metro/04885__.js";
import _mod4932 from "metro/04932__.js";

export default function Get(arg0, arg1) {
  if (_mod4885(arg0)) {
    if (_mod4932(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1281("Assertion failed: P is not a Property Key, got " + _mod1315(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1281("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}

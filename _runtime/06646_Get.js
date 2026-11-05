// _runtime/06646_Get.js
import _mod1293 from "metro/01293__.js";
import _mod1327 from "metro/01327__.js";
import _mod6600 from "metro/06600__.js";
import _mod6647 from "metro/06647__.js";

export default function Get(arg0, arg1) {
  if (_mod6600(arg0)) {
    if (_mod6647(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1293("Assertion failed: P is not a Property Key, got " + _mod1327(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1293("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}

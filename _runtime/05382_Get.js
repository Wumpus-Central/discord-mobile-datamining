// _runtime/05382_Get.js
import _mod1293 from "metro/01293__.js";
import _mod1327 from "metro/01327__.js";
import _mod5336 from "metro/05336__.js";
import _mod5383 from "metro/05383__.js";

export default function Get(arg0, arg1) {
  if (_mod5336(arg0)) {
    if (_mod5383(arg1)) {
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

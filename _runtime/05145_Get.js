// _runtime/05145_Get.js
import _mod1282 from "metro/01282__.js";
import _mod1316 from "metro/01316__.js";
import _mod5099 from "metro/05099__.js";
import _mod5146 from "metro/05146__.js";

export default function Get(arg0, arg1) {
  if (_mod5099(arg0)) {
    if (_mod5146(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1282("Assertion failed: P is not a Property Key, got " + _mod1316(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1282("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}

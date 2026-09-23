// _runtime/05135_Get.js
import _mod1282 from "metro/01282__.js";
import _mod1316 from "metro/01316__.js";
import _mod5089 from "metro/05089__.js";
import _mod5136 from "metro/05136__.js";

export default function Get(arg0, arg1) {
  if (_mod5089(arg0)) {
    if (_mod5136(arg1)) {
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

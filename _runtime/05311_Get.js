// _runtime/05311_Get.js
import _mod1282 from "metro/01282__.js";
import _mod1316 from "metro/01316__.js";
import _mod5265 from "metro/05265__.js";
import _mod5312 from "metro/05312__.js";

export default function Get(arg0, arg1) {
  if (_mod5265(arg0)) {
    if (_mod5312(arg1)) {
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

// _runtime/04934_Get.js
import _mod1282 from "metro/01282__.js";
import _mod1316 from "metro/01316__.js";
import _mod4888 from "metro/04888__.js";
import _mod4935 from "metro/04935__.js";

export default function Get(arg0, arg1) {
  if (_mod4888(arg0)) {
    if (_mod4935(arg1)) {
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

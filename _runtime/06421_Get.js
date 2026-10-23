// _runtime/06421_Get.js
import _mod1308 from "metro/01308__.js";
import _mod1342 from "metro/01342__.js";
import _mod6375 from "metro/06375__.js";
import _mod6422 from "metro/06422__.js";

export default function Get(arg0, arg1) {
  if (_mod6375(arg0)) {
    if (_mod6422(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1308("Assertion failed: P is not a Property Key, got " + _mod1342(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1308("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}

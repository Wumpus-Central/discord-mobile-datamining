// _runtime/06471_Get.js
import _mod1305 from "metro/01305__.js";
import _mod1339 from "metro/01339__.js";
import _mod6425 from "metro/06425__.js";
import _mod6472 from "metro/06472__.js";

export default function Get(arg0, arg1) {
  if (_mod6425(arg0)) {
    if (_mod6472(arg1)) {
      return arg0[arg1];
    } else {
      const tmpResult1 = new _mod1305("Assertion failed: P is not a Property Key, got " + _mod1339(arg1));
      throw tmpResult1;
    }
  } else {
    const tmp5 = new _mod1305("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
}

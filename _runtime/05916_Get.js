// _runtime/05916_Get.js
import _mod1308 from "metro/01308__.js";
import _mod1342 from "metro/01342__.js";
import _mod5870 from "metro/05870__.js";
import _mod5917 from "metro/05917__.js";

export default function Get(arg0, arg1) {
  if (_mod5870(arg0)) {
    if (_mod5917(arg1)) {
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

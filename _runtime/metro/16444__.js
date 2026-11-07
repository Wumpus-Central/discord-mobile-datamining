// _runtime/metro/16444__.js
import withoutSetter from "../16445_withoutSetter.js";
import _mod16456 from "16456__.js";
import _mod16458 from "16458__.js";
import _mod16461 from "16461__.js";
import _mod16464 from "16464__.js";
import _mod16465 from "16465__.js";

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod16456(arg0)) {
    if (!_mod16458(arg0)) {
      let str = arg1;
      const tmp4 = _mod16461(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod16464(tmp4, arg0, str);
        if (_mod16456(tmp5)) {
          if (!_mod16458(tmp5)) {
            const tmp9 = new TypeError("Can't convert object to primitive value");
            throw tmp9;
          }
        }
        return tmp5;
      } else {
        let str2 = str;
        if (undefined === str) {
          str2 = "number";
        }
        return _mod16465(arg0, str2);
      }
    }
  }
  return arg0;
};

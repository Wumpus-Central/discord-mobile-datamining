// === Module 13970: ? ===

// Module 13970
import withoutSetter from "withoutSetter" /* 13971 */;
import _mod13982 from "module_13982" /* 13982 */;
import _mod13984 from "module_13984" /* 13984 */;
import _mod13987 from "module_13987" /* 13987 */;
import _mod13990 from "module_13990" /* 13990 */;
import _mod13991 from "module_13991" /* 13991 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod13982(arg0)) {
    if (!_mod13984(arg0)) {
      let str = arg1;
      const tmp4 = _mod13987(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = _mod13990(tmp4, arg0, str);
        if (_mod13982(tmp5)) {
          if (!_mod13984(tmp5)) {
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
        return _mod13991(arg0, str2);
      }
    }
  }
  return arg0;
};
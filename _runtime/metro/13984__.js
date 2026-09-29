// _runtime/metro/13984__.js
import _mod13975 from "13975__.js";
import _mod13983 from "13983__.js";
import _mod13985 from "13985__.js";
import _mod13986 from "13986__.js";

export default _mod13975
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod13985("Symbol");
      let tmpResultResult = _mod13983(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod13986(tmp3.prototype, Object(arg0));
        const tmpResult = _mod13986;
      }
      return tmpResultResult;
    };

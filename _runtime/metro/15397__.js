// _runtime/metro/15397__.js
import _mod15388 from "15388__.js";
import _mod15396 from "15396__.js";
import _mod15398 from "15398__.js";
import _mod15399 from "15399__.js";

export default _mod15388
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15398("Symbol");
      let tmpResultResult = _mod15396(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15399(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15399;
      }
      return tmpResultResult;
    };

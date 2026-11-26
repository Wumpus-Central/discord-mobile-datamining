// _runtime/metro/15759__.js
import _mod15750 from "15750__.js";
import _mod15758 from "15758__.js";
import _mod15760 from "15760__.js";
import _mod15761 from "15761__.js";

export default _mod15750
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15760("Symbol");
      let tmpResultResult = _mod15758(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15761(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15761;
      }
      return tmpResultResult;
    };

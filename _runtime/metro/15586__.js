// _runtime/metro/15586__.js
import _mod15577 from "15577__.js";
import _mod15585 from "15585__.js";
import _mod15587 from "15587__.js";
import _mod15588 from "15588__.js";

export default _mod15577
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15587("Symbol");
      let tmpResultResult = _mod15585(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15588(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15588;
      }
      return tmpResultResult;
    };

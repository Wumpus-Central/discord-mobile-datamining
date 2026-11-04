// _runtime/metro/16400__.js
import _mod16391 from "16391__.js";
import _mod16399 from "16399__.js";
import _mod16401 from "16401__.js";
import _mod16402 from "16402__.js";

export default _mod16391
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16401("Symbol");
      let tmpResultResult = _mod16399(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16402(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16402;
      }
      return tmpResultResult;
    };

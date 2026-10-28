// _runtime/metro/15834__.js
import _mod15825 from "15825__.js";
import _mod15833 from "15833__.js";
import _mod15835 from "15835__.js";
import _mod15836 from "15836__.js";

export default _mod15825
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15835("Symbol");
      let tmpResultResult = _mod15833(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15836(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15836;
      }
      return tmpResultResult;
    };

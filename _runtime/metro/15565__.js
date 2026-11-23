// _runtime/metro/15565__.js
import _mod15556 from "15556__.js";
import _mod15564 from "15564__.js";
import _mod15566 from "15566__.js";
import _mod15567 from "15567__.js";

export default _mod15556
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15566("Symbol");
      let tmpResultResult = _mod15564(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15567(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15567;
      }
      return tmpResultResult;
    };

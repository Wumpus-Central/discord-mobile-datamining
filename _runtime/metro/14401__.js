// _runtime/metro/14401__.js
import _mod14392 from "14392__.js";
import _mod14400 from "14400__.js";
import _mod14402 from "14402__.js";
import _mod14403 from "14403__.js";

export default _mod14392
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14402("Symbol");
      let tmpResultResult = _mod14400(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14403(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14403;
      }
      return tmpResultResult;
    };

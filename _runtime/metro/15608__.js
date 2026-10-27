// _runtime/metro/15608__.js
import _mod15599 from "15599__.js";
import _mod15607 from "15607__.js";
import _mod15609 from "15609__.js";
import _mod15610 from "15610__.js";

export default _mod15599
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15609("Symbol");
      let tmpResultResult = _mod15607(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15610(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15610;
      }
      return tmpResultResult;
    };

// _runtime/metro/15547__.js
import _mod15538 from "15538__.js";
import _mod15546 from "15546__.js";
import _mod15548 from "15548__.js";
import _mod15549 from "15549__.js";

export default _mod15538
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15548("Symbol");
      let tmpResultResult = _mod15546(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15549(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15549;
      }
      return tmpResultResult;
    };

// _runtime/metro/15571__.js
import _mod15562 from "15562__.js";
import _mod15570 from "15570__.js";
import _mod15572 from "15572__.js";
import _mod15573 from "15573__.js";

export default _mod15562
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15572("Symbol");
      let tmpResultResult = _mod15570(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15573(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15573;
      }
      return tmpResultResult;
    };

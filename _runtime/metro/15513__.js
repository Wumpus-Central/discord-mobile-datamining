// _runtime/metro/15513__.js
import _mod15504 from "15504__.js";
import _mod15512 from "15512__.js";
import _mod15514 from "15514__.js";
import _mod15515 from "15515__.js";

export default _mod15504
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15514("Symbol");
      let tmpResultResult = _mod15512(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15515(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15515;
      }
      return tmpResultResult;
    };

// _runtime/metro/15572__.js
import _mod15563 from "15563__.js";
import _mod15571 from "15571__.js";
import _mod15573 from "15573__.js";
import _mod15574 from "15574__.js";

export default _mod15563
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15573("Symbol");
      let tmpResultResult = _mod15571(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15574(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15574;
      }
      return tmpResultResult;
    };

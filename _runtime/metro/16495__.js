// _runtime/metro/16495__.js
import _mod16486 from "16486__.js";
import _mod16494 from "16494__.js";
import _mod16496 from "16496__.js";
import _mod16497 from "16497__.js";

export default _mod16486
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16496("Symbol");
      let tmpResultResult = _mod16494(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16497(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16497;
      }
      return tmpResultResult;
    };

// _runtime/metro/16809__.js
import _mod16800 from "16800__.js";
import _mod16808 from "16808__.js";
import _mod16810 from "16810__.js";
import _mod16811 from "16811__.js";

export default _mod16800
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16810("Symbol");
      let tmpResultResult = _mod16808(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16811(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16811;
      }
      return tmpResultResult;
    };

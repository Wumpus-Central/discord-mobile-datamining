// _runtime/metro/15478__.js
import _mod15469 from "15469__.js";
import _mod15477 from "15477__.js";
import _mod15479 from "15479__.js";
import _mod15480 from "15480__.js";

export default _mod15469
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15479("Symbol");
      let tmpResultResult = _mod15477(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15480(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15480;
      }
      return tmpResultResult;
    };

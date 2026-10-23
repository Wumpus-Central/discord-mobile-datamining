// _runtime/metro/15526__.js
import _mod15517 from "15517__.js";
import _mod15525 from "15525__.js";
import _mod15527 from "15527__.js";
import _mod15528 from "15528__.js";

export default _mod15517
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15527("Symbol");
      let tmpResultResult = _mod15525(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15528(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15528;
      }
      return tmpResultResult;
    };

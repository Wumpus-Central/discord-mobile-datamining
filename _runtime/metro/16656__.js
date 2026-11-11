// _runtime/metro/16656__.js
import _mod16647 from "16647__.js";
import _mod16655 from "16655__.js";
import _mod16657 from "16657__.js";
import _mod16658 from "16658__.js";

export default _mod16647
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16657("Symbol");
      let tmpResultResult = _mod16655(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16658(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16658;
      }
      return tmpResultResult;
    };

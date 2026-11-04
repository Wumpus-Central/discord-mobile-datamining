// _runtime/metro/16387__.js
import _mod16378 from "16378__.js";
import _mod16386 from "16386__.js";
import _mod16388 from "16388__.js";
import _mod16389 from "16389__.js";

export default _mod16378
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16388("Symbol");
      let tmpResultResult = _mod16386(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16389(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16389;
      }
      return tmpResultResult;
    };

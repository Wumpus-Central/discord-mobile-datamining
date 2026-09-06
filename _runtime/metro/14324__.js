// _runtime/metro/14324__.js
import _mod14315 from "14315__.js";
import _mod14323 from "14323__.js";
import _mod14325 from "14325__.js";
import _mod14326 from "14326__.js";

export default _mod14315
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14325("Symbol");
      let tmpResultResult = _mod14323(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14326(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14326;
      }
      return tmpResultResult;
    };

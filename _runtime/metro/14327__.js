// _runtime/metro/14327__.js
import _mod14318 from "14318__.js";
import _mod14326 from "14326__.js";
import _mod14328 from "14328__.js";
import _mod14329 from "14329__.js";

export default _mod14318
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14328("Symbol");
      let tmpResultResult = _mod14326(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14329(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14329;
      }
      return tmpResultResult;
    };

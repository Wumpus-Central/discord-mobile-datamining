// _runtime/metro/14352__.js
import _mod14343 from "14343__.js";
import _mod14351 from "14351__.js";
import _mod14353 from "14353__.js";
import _mod14354 from "14354__.js";

export default _mod14343
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14353("Symbol");
      let tmpResultResult = _mod14351(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14354(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14354;
      }
      return tmpResultResult;
    };

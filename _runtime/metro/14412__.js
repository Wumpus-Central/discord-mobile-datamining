// _runtime/metro/14412__.js
import _mod14403 from "14403__.js";
import _mod14411 from "14411__.js";
import _mod14413 from "14413__.js";
import _mod14414 from "14414__.js";

export default _mod14403
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14413("Symbol");
      let tmpResultResult = _mod14411(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14414(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14414;
      }
      return tmpResultResult;
    };

// _runtime/metro/14377__.js
import _mod14368 from "14368__.js";
import _mod14376 from "14376__.js";
import _mod14378 from "14378__.js";
import _mod14379 from "14379__.js";

export default _mod14368
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14378("Symbol");
      let tmpResultResult = _mod14376(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14379(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14379;
      }
      return tmpResultResult;
    };

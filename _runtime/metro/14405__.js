// _runtime/metro/14405__.js
import _mod14396 from "14396__.js";
import _mod14404 from "14404__.js";
import _mod14406 from "14406__.js";
import _mod14407 from "14407__.js";

export default _mod14396
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14406("Symbol");
      let tmpResultResult = _mod14404(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14407(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14407;
      }
      return tmpResultResult;
    };

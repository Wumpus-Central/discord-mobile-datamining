// _runtime/metro/14578__.js
import _mod14569 from "14569__.js";
import _mod14577 from "14577__.js";
import _mod14579 from "14579__.js";
import _mod14580 from "14580__.js";

export default _mod14569
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14579("Symbol");
      let tmpResultResult = _mod14577(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14580(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14580;
      }
      return tmpResultResult;
    };

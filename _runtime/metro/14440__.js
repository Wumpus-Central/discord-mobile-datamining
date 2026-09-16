// _runtime/metro/14440__.js
import _mod14431 from "14431__.js";
import _mod14439 from "14439__.js";
import _mod14441 from "14441__.js";
import _mod14442 from "14442__.js";

export default _mod14431
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14441("Symbol");
      let tmpResultResult = _mod14439(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14442(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14442;
      }
      return tmpResultResult;
    };

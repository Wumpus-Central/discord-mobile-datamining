// _runtime/metro/14448__.js
import _mod14439 from "14439__.js";
import _mod14447 from "14447__.js";
import _mod14449 from "14449__.js";
import _mod14450 from "14450__.js";

export default _mod14439
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14449("Symbol");
      let tmpResultResult = _mod14447(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14450(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14450;
      }
      return tmpResultResult;
    };

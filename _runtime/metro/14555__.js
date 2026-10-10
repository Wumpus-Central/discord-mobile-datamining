// _runtime/metro/14555__.js
import _mod14546 from "14546__.js";
import _mod14554 from "14554__.js";
import _mod14556 from "14556__.js";
import _mod14557 from "14557__.js";

export default _mod14546
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14556("Symbol");
      let tmpResultResult = _mod14554(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14557(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14557;
      }
      return tmpResultResult;
    };

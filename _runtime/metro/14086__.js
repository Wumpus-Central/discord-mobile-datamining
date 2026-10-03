// _runtime/metro/14086__.js
import _mod14077 from "14077__.js";
import _mod14085 from "14085__.js";
import _mod14087 from "14087__.js";
import _mod14088 from "14088__.js";

export default _mod14077
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14087("Symbol");
      let tmpResultResult = _mod14085(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14088(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14088;
      }
      return tmpResultResult;
    };

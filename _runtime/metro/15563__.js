// _runtime/metro/15563__.js
import _mod15554 from "15554__.js";
import _mod15562 from "15562__.js";
import _mod15564 from "15564__.js";
import _mod15565 from "15565__.js";

export default _mod15554
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15564("Symbol");
      let tmpResultResult = _mod15562(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15565(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15565;
      }
      return tmpResultResult;
    };

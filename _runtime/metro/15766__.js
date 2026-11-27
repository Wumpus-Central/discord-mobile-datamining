// _runtime/metro/15766__.js
import _mod15757 from "15757__.js";
import _mod15765 from "15765__.js";
import _mod15767 from "15767__.js";
import _mod15768 from "15768__.js";

export default _mod15757
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15767("Symbol");
      let tmpResultResult = _mod15765(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15768(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15768;
      }
      return tmpResultResult;
    };

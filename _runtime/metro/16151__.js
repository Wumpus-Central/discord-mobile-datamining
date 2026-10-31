// _runtime/metro/16151__.js
import _mod16142 from "16142__.js";
import _mod16150 from "16150__.js";
import _mod16152 from "16152__.js";
import _mod16153 from "16153__.js";

export default _mod16142
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16152("Symbol");
      let tmpResultResult = _mod16150(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16153(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16153;
      }
      return tmpResultResult;
    };

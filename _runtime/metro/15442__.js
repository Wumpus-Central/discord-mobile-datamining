// _runtime/metro/15442__.js
import _mod15433 from "15433__.js";
import _mod15441 from "15441__.js";
import _mod15443 from "15443__.js";
import _mod15444 from "15444__.js";

export default _mod15433
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15443("Symbol");
      let tmpResultResult = _mod15441(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15444(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15444;
      }
      return tmpResultResult;
    };

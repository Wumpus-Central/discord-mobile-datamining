// _runtime/metro/14011__.js
import _mod14002 from "14002__.js";
import _mod14010 from "14010__.js";
import _mod14012 from "14012__.js";
import _mod14013 from "14013__.js";

export default _mod14002
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14012("Symbol");
      let tmpResultResult = _mod14010(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14013(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14013;
      }
      return tmpResultResult;
    };

// _runtime/metro/15567__.js
import _mod15558 from "15558__.js";
import _mod15566 from "15566__.js";
import _mod15568 from "15568__.js";
import _mod15569 from "15569__.js";

export default _mod15558
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15568("Symbol");
      let tmpResultResult = _mod15566(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15569(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15569;
      }
      return tmpResultResult;
    };

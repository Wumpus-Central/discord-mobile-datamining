// _runtime/metro/15278__.js
import _mod15269 from "15269__.js";
import _mod15277 from "15277__.js";
import _mod15279 from "15279__.js";
import _mod15280 from "15280__.js";

export default _mod15269
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15279("Symbol");
      let tmpResultResult = _mod15277(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15280(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15280;
      }
      return tmpResultResult;
    };

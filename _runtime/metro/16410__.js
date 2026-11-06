// _runtime/metro/16410__.js
import _mod16401 from "16401__.js";
import _mod16409 from "16409__.js";
import _mod16411 from "16411__.js";
import _mod16412 from "16412__.js";

export default _mod16401
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16411("Symbol");
      let tmpResultResult = _mod16409(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16412(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16412;
      }
      return tmpResultResult;
    };

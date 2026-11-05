// _runtime/metro/16413__.js
import _mod16404 from "16404__.js";
import _mod16412 from "16412__.js";
import _mod16414 from "16414__.js";
import _mod16415 from "16415__.js";

export default _mod16404
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16414("Symbol");
      let tmpResultResult = _mod16412(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16415(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16415;
      }
      return tmpResultResult;
    };

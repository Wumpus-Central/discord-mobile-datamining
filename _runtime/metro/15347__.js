// _runtime/metro/15347__.js
import _mod15338 from "15338__.js";
import _mod15346 from "15346__.js";
import _mod15348 from "15348__.js";
import _mod15349 from "15349__.js";

export default _mod15338
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15348("Symbol");
      let tmpResultResult = _mod15346(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15349(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15349;
      }
      return tmpResultResult;
    };

// _runtime/metro/16110__.js
import _mod16101 from "16101__.js";
import _mod16109 from "16109__.js";
import _mod16111 from "16111__.js";
import _mod16112 from "16112__.js";

export default _mod16101
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16111("Symbol");
      let tmpResultResult = _mod16109(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16112(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16112;
      }
      return tmpResultResult;
    };

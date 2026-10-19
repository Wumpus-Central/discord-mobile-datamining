// _runtime/metro/15351__.js
import _mod15342 from "15342__.js";
import _mod15350 from "15350__.js";
import _mod15352 from "15352__.js";
import _mod15353 from "15353__.js";

export default _mod15342
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15352("Symbol");
      let tmpResultResult = _mod15350(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15353(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15353;
      }
      return tmpResultResult;
    };

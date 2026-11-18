// _runtime/metro/15492__.js
import _mod15483 from "15483__.js";
import _mod15491 from "15491__.js";
import _mod15493 from "15493__.js";
import _mod15494 from "15494__.js";

export default _mod15483
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15493("Symbol");
      let tmpResultResult = _mod15491(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15494(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15494;
      }
      return tmpResultResult;
    };

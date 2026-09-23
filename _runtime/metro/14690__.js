// _runtime/metro/14690__.js
import _mod14681 from "14681__.js";
import _mod14689 from "14689__.js";
import _mod14691 from "14691__.js";
import _mod14692 from "14692__.js";

export default _mod14681
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14691("Symbol");
      let tmpResultResult = _mod14689(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14692(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14692;
      }
      return tmpResultResult;
    };

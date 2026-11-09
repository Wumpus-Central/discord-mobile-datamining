// _runtime/metro/16468__.js
import _mod16459 from "16459__.js";
import _mod16467 from "16467__.js";
import _mod16469 from "16469__.js";
import _mod16470 from "16470__.js";

export default _mod16459
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod16469("Symbol");
      let tmpResultResult = _mod16467(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod16470(tmp3.prototype, Object(arg0));
        const tmpResult = _mod16470;
      }
      return tmpResultResult;
    };

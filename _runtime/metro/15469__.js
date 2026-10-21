// _runtime/metro/15469__.js
import _mod15460 from "15460__.js";
import _mod15468 from "15468__.js";
import _mod15470 from "15470__.js";
import _mod15471 from "15471__.js";

export default _mod15460
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15470("Symbol");
      let tmpResultResult = _mod15468(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15471(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15471;
      }
      return tmpResultResult;
    };

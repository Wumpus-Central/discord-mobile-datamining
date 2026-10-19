// _runtime/metro/15379__.js
import _mod15370 from "15370__.js";
import _mod15378 from "15378__.js";
import _mod15380 from "15380__.js";
import _mod15381 from "15381__.js";

export default _mod15370
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod15380("Symbol");
      let tmpResultResult = _mod15378(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod15381(tmp3.prototype, Object(arg0));
        const tmpResult = _mod15381;
      }
      return tmpResultResult;
    };

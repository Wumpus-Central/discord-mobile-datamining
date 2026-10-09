// _runtime/metro/14501__.js
import _mod14492 from "14492__.js";
import _mod14500 from "14500__.js";
import _mod14502 from "14502__.js";
import _mod14503 from "14503__.js";

export default _mod14492
  ? (arg0) => typeof arg0 === "symbol"
  : (arg0) => {
      const tmp3 = _mod14502("Symbol");
      let tmpResultResult = _mod14500(tmp3);
      if (tmpResultResult) {
        tmpResultResult = _mod14503(tmp3.prototype, Object(arg0));
        const tmpResult = _mod14503;
      }
      return tmpResultResult;
    };
